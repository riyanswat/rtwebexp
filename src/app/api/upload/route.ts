import { NextResponse } from 'next/server';
import { put } from '@vercel/blob';

export const runtime = 'edge';

export async function POST(req: Request) {
  const form = await req.formData();
  const files = form.getAll('files') as File[];
  const paths = form.getAll('paths') as string[]; // aligned with files[]

  if (!files.length) {
    return NextResponse.json({ error: 'No files' }, { status: 400 });
  }

  const clean = (p: string) =>
    p
      .replaceAll('\\', '/')
      .replace(/^(\.+\/)+/g, '')
      .replace(/^\/+/g, '');

  const results = await Promise.all(
    files.map(async (file, i) => {
      const rel = paths[i] || file.name;          // e.g. "honda-fit-uk1/1.jpg"
      const key = `shipments/${clean(rel)}`;      // keep folder structure
      const blob = await put(key, file, { access: 'public' });
      return { path: clean(rel), url: blob.url }; // send both back
    })
  );

  return NextResponse.json({ files: results });
}


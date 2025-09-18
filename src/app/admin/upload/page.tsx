'use client';

import { useState, useRef } from 'react';

type UploadedFile = { path: string; url: string };

const ADMIN_PASSWORD = "meven"; // 🔒 change this

export default function Upload() {
  const [authenticated, setAuthenticated] = useState(false);
  const [inputPw, setInputPw] = useState('');
  const [urls, setUrls] = useState<string[]>([]);
  const [snippet, setSnippet] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // --- auth step ---
  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (inputPw === ADMIN_PASSWORD) {
      setAuthenticated(true);
    } else {
      alert('Wrong password!');
    }
  }

  // --- upload handler ---
  async function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const fileList = e.target.files;
    if (!fileList?.length) return;

    // Detect root folder
    // @ ts-expect-error - non-standard but supported
    const firstRel = (fileList[0] as any).webkitRelativePath || fileList[0].name;
    const rootFolder = firstRel.includes('/') ? firstRel.split('/')[0] : '';

    // Try to parse meta.json
    let meta: any | null = null;
    for (const f of Array.from(fileList)) {
      // @ ts-expect-error
      const rel = (f as any).webkitRelativePath || f.name;
      const name = rel.toLowerCase().split('/').pop() || '';
      if (name === 'meta.json') {
        try {
          const text = await (f as File).text();
          meta = JSON.parse(text);
        } catch {
          meta = null;
        }
        break;
      }
    }

    // Upload
    const fd = new FormData();
    Array.from(fileList).forEach((f) => {
      // @ ts-expect-error
      const rel = (f as any).webkitRelativePath || f.name;
      fd.append('files', f);
      fd.append('paths', rel);
    });

    const res = await fetch('/api/upload', { method: 'POST', body: fd });
    const data: { files?: UploadedFile[] } = await res.json();
    const files = data.files ?? [];

    setUrls(files.map((f) => f.url));

    // Map path → url
    const imgs = files
      .filter((f) => {
        const lower = f.path.toLowerCase();
        const inRoot = !rootFolder || lower.startsWith(`${rootFolder.toLowerCase()}/`);
        const isImg = /\.(jpg|jpeg|png|webp)$/i.test(lower);
        const isMeta = lower.endsWith('/meta.json') || lower.split('/').pop() === 'meta.json';
        return inRoot && isImg && !isMeta;
      })
      .sort((a, b) => a.path.localeCompare(b.path, undefined, { numeric: true }));

    const coverUrl = imgs[0]?.url || '';

    const shipment = {
      id: meta?.id || rootFolder || 'shipment-id',
      title: meta?.title || 'Car Title',
      model: meta?.model ?? undefined,
      year: meta?.year ?? undefined,
      destination: meta?.destination || 'Country',
      cover: coverUrl,
      images: imgs.map((f) => f.url),
    };

    setSnippet(
`{
  id: "${shipment.id}",
  title: "${shipment.title}",
  model: ${shipment.model ? `"${shipment.model}"` : 'undefined'},
  year: ${shipment.year ?? 'undefined'},
  destination: "${shipment.destination}",
  cover: "${shipment.cover}",
  images: ${JSON.stringify(shipment.images, null, 2)},
},`
    );
    setCopied(false);
  }

  async function copySnippet() {
    if (!snippet) return;
    await navigator.clipboard.writeText(snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0F1115] px-4">
        <form
          onSubmit={handleLogin}
          className="max-w-sm w-full rounded-lg border border-white/20 p-6 text-white space-y-4"
        >
          <h1 className="text-lg font-semibold">Admin Login</h1>
          <input
            type="password"
            value={inputPw}
            onChange={(e) => setInputPw(e.target.value)}
            placeholder="Enter password"
            className="w-full rounded-md border border-white/20 bg-black/40 px-3 py-2 text-sm text-white focus:outline-none"
          />
          <button
            type="submit"
            className="w-full rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white hover:bg-primary/90"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F1115] px-4">
      <div className="max-w-2xl w-full rounded-lg border border-white/20 p-6 text-white">
        <h1 className="text-xl font-semibold mb-4">Upload a Folder to Vercel Blob</h1>

        {/* Folder picker */}
        <input
          ref={(el) => {
            inputRef.current = el;
            if (el) el.setAttribute('webkitdirectory', '');
          }}
          type="file"
          multiple
          onChange={onChange}
          className="block w-full text-sm text-white
                     file:mr-4 file:py-2 file:px-4
                     file:rounded-md file:border-0
                     file:text-sm file:font-semibold
                     file:bg-primary file:text-white
                     hover:file:bg-primary/90"
        />
        <p className="mt-2 text-xs text-white/60">
          Select a <strong>folder</strong> with images and (optionally) a <code>meta.json</code>.
        </p>

        {urls.length > 0 && (
          <div className="mt-6 space-y-4">
            <div className="space-y-2 break-all text-sm">
              <p className="opacity-80">Uploaded URLs:</p>
              {urls.map((u) => (
                <div key={u}>
                  <a className="text-primary hover:underline" href={u} target="_blank" rel="noreferrer">
                    {u}
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between mb-2">
                <p className="opacity-80 text-sm">Generated shipment object (paste into <code>shipmentsData.tsx</code>):</p>
                <button
                  onClick={copySnippet}
                  className="text-xs rounded-md border border-white/20 px-2 py-1 hover:border-primary/40 hover:text-primary transition cursor-pointer"
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <pre className="bg-black/40 border border-white/10 rounded p-3 text-xs overflow-auto">
                {snippet || '// (No meta.json found. Using defaults. Add a meta.json to customize.)'}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}



// 'use client';

// import { useState, useRef } from 'react';

// type UploadedFile = { path: string; url: string };

// export default function Upload() {
//   const [urls, setUrls] = useState<string[]>([]);
//   const [snippet, setSnippet] = useState<string>('');
//   const [copied, setCopied] = useState(false);
//   const inputRef = useRef<HTMLInputElement | null>(null);

//   async function onChange(e: React.ChangeEvent<HTMLInputElement>) {
//     const fileList = e.target.files;
//     if (!fileList?.length) return;

//     // Detect root folder name
//     // @ ts-expect-error - non-standard but supported in Chromium/Safari
//     const firstRel = (fileList[0] as any).webkitRelativePath || fileList[0].name;
//     const rootFolder = firstRel.includes('/') ? firstRel.split('/')[0] : '';

//     // Try to find and parse meta.json
//     let meta: any | null = null;
//     for (const f of Array.from(fileList)) {
//       // @ ts-expect-error
//       const rel = (f as any).webkitRelativePath || f.name;
//       const name = rel.toLowerCase().split('/').pop() || '';
//       if (name === 'meta.json') {
//         try {
//           const text = await (f as File).text();
//           meta = JSON.parse(text);
//         } catch {
//           meta = null;
//         }
//         break;
//       }
//     }

//     // Upload files with their relative paths preserved
//     const fd = new FormData();
//     Array.from(fileList).forEach((f) => {
//       // @ ts-expect-error
//       const rel = (f as any).webkitRelativePath || f.name;
//       fd.append('files', f);
//       fd.append('paths', rel);
//     });

//     const res = await fetch('/api/upload', { method: 'POST', body: fd });
//     const data: { files?: UploadedFile[] } = await res.json();
//     const files = data.files ?? [];

//     setUrls(files.map((f) => f.url));

//     // Build a map of path -> url for convenience
//     const urlByPath = new Map<string, string>();
//     files.forEach((f) => urlByPath.set(f.path, f.url));

//     // Only images within this folder; exclude meta.json
//     const imgs = files
//       .filter((f) => {
//         const lower = f.path.toLowerCase();
//         const inRoot = !rootFolder || lower.startsWith(`${rootFolder.toLowerCase()}/`);
//         const isImg =
//           lower.endsWith('.jpg') || lower.endsWith('.jpeg') || lower.endsWith('.png') || lower.endsWith('.webp');
//         const isMeta = lower.endsWith('/meta.json') || lower.split('/').pop() === 'meta.json';
//         return inRoot && isImg && !isMeta;
//       })
//       // numeric sort: 1.jpg, 2.jpg, 10.jpg …
//       .sort((a, b) => a.path.localeCompare(b.path, undefined, { numeric: true }));

//     // Cover = first image (e.g., "1.jpg")
//     const coverUrl = imgs[0]?.url || '';

//     // Build shipment object from meta + uploads
//     const shipment = {
//       id: meta?.id || rootFolder || 'shipment-id',
//       title: meta?.title || 'Car Title',
//       model: meta?.model ?? undefined,
//       year: meta?.year ?? undefined,
//       destination: meta?.destination || 'Country',
//       cover: coverUrl,
//       images: imgs.map((f) => f.url),
//     };

//     // Pretty-print a single array item (with trailing comma)
//     setSnippet(
// `{
//   id: "${shipment.id}",
//   title: "${shipment.title}",
//   model: ${shipment.model ? `"${shipment.model}"` : 'undefined'},
//   year: ${shipment.year ?? 'undefined'},
//   destination: "${shipment.destination}",
//   cover: "${shipment.cover}",
//   images: ${JSON.stringify(shipment.images, null, 2)},
// },`
//     );
//     setCopied(false);
//   }

//   async function copySnippet() {
//     if (!snippet) return;
//     await navigator.clipboard.writeText(snippet);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 1200);
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#0F1115] px-4">
//       <div className="max-w-2xl w-full rounded-lg border border-white/20 p-6 text-white">
//         <h1 className="text-xl font-semibold mb-4">Upload a Folder to Vercel Blob</h1>

//         {/* Folder picker */}
//         <input
//           ref={(el) => {
//             inputRef.current = el;
//             if (el) el.setAttribute('webkitdirectory', ''); // enable folder selection
//           }}
//           type="file"
//           multiple
//           onChange={onChange}
//           className="block w-full text-sm text-white
//                      file:mr-4 file:py-2 file:px-4
//                      file:rounded-md file:border-0
//                      file:text-sm file:font-semibold
//                      file:bg-primary file:text-white
//                      hover:file:bg-primary/90"
//         />
//         <p className="mt-2 text-xs text-white/60">
//           Select a <strong>folder</strong> with images and (optionally) a <code>meta.json</code>.
//         </p>

//         {urls.length > 0 && (
//           <div className="mt-6 space-y-4">
//             <div className="space-y-2 break-all text-sm">
//               <p className="opacity-80">Uploaded URLs:</p>
//               {urls.map((u) => (
//                 <div key={u}>
//                   <a className="text-primary hover:underline" href={u} target="_blank" rel="noreferrer">
//                     {u}
//                   </a>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-4">
//               <div className="flex items-center justify-between mb-2">
//                 <p className="opacity-80 text-sm">Generated shipment object (paste into <code>shipmentsData.tsx</code>):</p>
//                 <button
//                   onClick={copySnippet}
//                   className="text-xs rounded-md border border-white/20 px-2 py-1 hover:border-primary/40 hover:text-primary transition cursor-pointer"
//                 >
//                   {copied ? 'Copied!' : 'Copy'}
//                 </button>
//               </div>
//               <pre className="bg-black/40 border border-white/10 rounded p-3 text-xs overflow-auto">
//                 {snippet || '// (No meta.json found. Using defaults. Add a meta.json to customize.)'}
//               </pre>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

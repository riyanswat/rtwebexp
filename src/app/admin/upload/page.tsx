'use client';

import { useState, useRef, useEffect } from 'react';
import shipmentsData from "@/components/Shipments/shipmentsData";
import { customAlphabet } from 'nanoid';

type UploadedFile = { path: string; url: string };

const ADMIN_PASSWORD = "meven"; // 🔒 change this
const HEADER_SAFE_TOP = "pt-24 md:pt-28"; // adjust if your header is taller/shorter

// 🔑 Generate short IDs (5 chars, alphanumeric)
const nanoid = customAlphabet('0123456789abcdefghijklmnopqrstuvwxyz', 5);

export default function Upload() {
  const [authenticated, setAuthenticated] = useState(false);

  // Form state
  const [idVal, setIdVal] = useState("");
  const [title, setTitle] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState<number | "">("");
  const [destination, setDestination] = useState("");

  const [urls, setUrls] = useState<string[]>([]);
  const [snippet, setSnippet] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Folder input
  const inputRef = useRef<HTMLInputElement | null>(null);

  // 🔎 NEW: password input ref + auto-focus
  const passwordRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (!authenticated) passwordRef.current?.focus();
  }, [authenticated]);

  // --- auth step ---
  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    const pw = (e.currentTarget as HTMLFormElement).querySelector<HTMLInputElement>('input[type="password"]')?.value || "";
    if (pw === ADMIN_PASSWORD) {
      setAuthenticated(true);
    } else {
      alert('Wrong password!');
    }
  }

  // --- auto-generate ID when title changes (if idVal is empty) ---
  useEffect(() => {
    if (!idVal && title.trim()) {
      setIdVal(nanoid()); // auto assign short unique ID
    }
  }, [title, idVal]);

  // --- submit handler: uploads folder, then builds snippet from FORM values ---
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;

    const fileInput = inputRef.current;
    const fileList = fileInput?.files;
    if (!fileList?.length) {
      alert("Please choose a folder with images first.");
      return;
    }

    if (!idVal || !title || !destination) {
      alert("Please fill at least: id, title, destination.");
      return;
    }

    try {
      setSubmitting(true);

      // Detect root folder (for nicer path-based sort)
      // @ ts-expect-error - supported in Chromium/Safari
      const firstRel = (fileList[0] as any).webkitRelativePath || fileList[0].name;
      const rootFolder = firstRel.includes('/') ? firstRel.split('/')[0] : '';

      // Upload with relative paths preserved
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

      // Filter images in this folder; exclude any meta.json
      const imgs = files
        .filter((f) => {
          const lower = f.path.toLowerCase();
          const inRoot = !rootFolder || lower.startsWith(`${rootFolder.toLowerCase()}/`);
          const isImg = /\.(jpg|jpeg|png|webp)$/i.test(lower);
          const isMeta = lower.endsWith('/meta.json') || lower.split('/').pop() === 'meta.json';
          return inRoot && isImg && !isMeta;
        })
        // natural sort: 1.jpg, 2.jpg, 10.jpg…
        .sort((a, b) => a.path.localeCompare(b.path, undefined, { numeric: true }));

      const coverUrl = imgs[0]?.url || '';

      // Build shipment object FROM FORM VALUES (no meta.json needed)
      const shipment = {
        id: idVal || rootFolder || nanoid(),
        title: title || 'Car Title',
        model: model || undefined,
        year: typeof year === 'number' ? year : undefined,
        destination: destination || 'Country',
        cover: coverUrl,
        images: imgs.map((f) => f.url),
      };

      // Pretty-print single array item (with trailing comma)
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

      // Optional: clear file input to avoid accidental re-submit of same folder
      if (fileInput) fileInput.value = '';
      setCopied(false);
    } catch (err) {
      console.error(err);
      alert("Upload failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  async function copySnippet() {
    if (!snippet) return;
    await navigator.clipboard.writeText(snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }

  if (!authenticated) {
    return (
      <div className={`min-h-screen rt-section-a ${HEADER_SAFE_TOP}`}>
        <div className="container py-8">
          <form
            onSubmit={handleLogin}
            className="
              mx-auto w-full max-w-sm rounded-lg p-6 space-y-4
              rt-card text-[var(--rt-ink)]
              focus-within:ring-1 focus-within:ring-[var(--rt-primary)]/40
            "
          >
            <h1 className="text-lg font-semibold">Admin Login</h1>
            <input
              type="password"
              ref={passwordRef}                 
              placeholder="Enter password"
              autoComplete="current-password"
              className="
                w-full rounded-md px-3 py-2 text-sm
                bg-[var(--rt-surface)] text-[var(--rt-ink)]
                border border-[var(--rt-ring)]
                focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--rt-primary)]
              "
            />
            <button
              type="submit"
              className="
                w-full rounded-md px-3 py-2 text-sm font-semibold cursor-pointer
                text-white bg-[var(--rt-primary)] hover:bg-[var(--rt-primary-600)]
                [box-shadow:var(--shadow-btn)]
                hover:[box-shadow:var(--shadow-btn-hover)]
                focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--rt-primary)]
              "
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen rt-section-a ${HEADER_SAFE_TOP}`}>
      <div className="container py-8">
        <div className="mx-auto w-full max-w-2xl rounded-lg p-6 rt-card text-[var(--rt-ink)]">
          <h1 className="text-xl font-semibold mb-4">Upload a Folder to Vercel Blob</h1>

          {/* Form: fields + folder picker */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs font-semibold tracking-wide text-[var(--rt-ink-dim)]">
                  ID*
                </label>
                <input
                  value={idVal}
                  onChange={(e) => setIdVal(e.target.value)}
                  placeholder="auto-generated if empty"
                  className="
                    w-full rounded-md px-3 py-2 text-sm
                    bg-[var(--rt-surface)] text-[var(--rt-ink)]
                    border border-[var(--rt-ring)]
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--rt-primary)]
                  "
                  required
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold tracking-wide text-[var(--rt-ink-dim)]">
                  Title*
                </label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Isuzu Elf"
                  className="
                    w-full rounded-md px-3 py-2 text-sm
                    bg-[var(--rt-surface)] text-[var(--rt-ink)]
                    border border-[var(--rt-ring)]
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--rt-primary)]
                  "
                  required
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold tracking-wide text-[var(--rt-ink-dim)]">
                  Model
                </label>
                <input
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  placeholder="Aluminum van turbo 3.65t"
                  className="
                    w-full rounded-md px-3 py-2 text-sm
                    bg-[var(--rt-surface)] text-[var(--rt-ink)]
                    border border-[var(--rt-ring)]
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--rt-primary)]
                  "
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold tracking-wide text-[var(--rt-ink-dim)]">
                  Year
                </label>
                <input
                  type="number"
                  inputMode="numeric"
                  value={year}
                  onChange={(e) => {
                    const v = e.target.value;
                    setYear(v === "" ? "" : Number(v));
                  }}
                  placeholder="1996"
                  className="
                    w-full rounded-md px-3 py-2 text-sm
                    bg-[var(--rt-surface)] text-[var(--rt-ink)]
                    border border-[var(--rt-ring)]
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--rt-primary)]
                  "
                />
              </div>

              {/* destination with suggestions */}
              <div>
                <label className="block text-sm font-medium mb-1">Destination</label>
                <input
                  list="destinations"
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Enter destination country"
                  className="w-full rounded-md border border-[var(--rt-ring)] bg-[var(--rt-surface)]
               px-3 py-2 text-sm text-[var(--rt-ink)]
               focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--rt-primary)]"
                />
                <datalist id="destinations">
                  {Array.from(
                    new Set(
                      shipmentsData
                        .map((s) => s.destination?.trim())
                        .filter(Boolean) as string[]
                    )
                  )
                    .sort((a, b) => a.localeCompare(b))
                    .map((d) => (
                      <option key={d} value={d} />
                    ))}
                </datalist>
              </div>
              {/* ^^^ destination */}
            </div>

            {/* Folder picker (webkitdirectory) */}
            <div>
              <label className="mb-1 block text-xs font-semibold tracking-wide text-[var(--rt-ink-dim)]">
                Choose folder*
              </label>
              <input
                ref={(el) => {
                  inputRef.current = el;
                  if (el) el.setAttribute('webkitdirectory', ''); // enable folder selection
                }}
                type="file"
                multiple
                className="
                  block w-full text-sm text-[var(--rt-ink)]
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border file:border-[var(--rt-ring)]
                  file:text-sm file:font-semibold
                  file:bg-[var(--rt-primary)] file:text-white
                  hover:file:bg-[var(--rt-primary-600)]
                  focus:outline-none
                "
                required
              />
              <p className="mt-2 text-xs text-[var(--rt-ink-dim)]">
                Select a <strong>folder</strong> with images. (You don’t need a <code>meta.json</code> anymore.)
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="submit"
                disabled={submitting}
                className="
                  inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold cursor-pointer
                  text-white bg-[var(--rt-primary)] hover:bg-[var(--rt-primary-600)]
                  disabled:opacity-70 disabled:cursor-not-allowed
                  [box-shadow:var(--shadow-btn)]
                  hover:[box-shadow:var(--shadow-btn-hover)]
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--rt-primary)]
                "
              >
                {submitting ? "Uploading…" : "Upload & Generate"}
              </button>

              <button
                type="button"
                onClick={() => {
                  setIdVal("");
                  setTitle("");
                  setModel("");
                  setYear("");
                  setDestination("");
                  setUrls([]);
                  setSnippet("");
                  setCopied(false);
                  if (inputRef.current) inputRef.current.value = "";
                }}
                className="
                  inline-flex items-center rounded-md px-3 py-2 text-sm
                  border border-[var(--rt-ring)]
                  text-[var(--rt-ink)] hover:text-[var(--rt-primary)] hover:border-[var(--rt-primary)]
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--rt-primary)] cursor-pointer
                "
              >
                Reset
              </button>
            </div>
          </form>

          {/* Results */}
          {(urls.length > 0 || snippet) && (
            <div className="mt-8 space-y-5">
              {/* Uploaded URLs — scrollable */}
              {urls.length > 0 && (
                <div className="space-y-2 break-all text-sm">
                  <p className="text-[var(--rt-ink-dim)]">Uploaded URLs:</p>
                  <div className="max-h-72 overflow-auto rounded border border-[var(--rt-ring)] p-3 bg-[var(--rt-surface)]">
                    {urls.map((u) => (
                      <div key={u} className="py-0.5">
                        <a className="text-[var(--rt-primary)] hover:underline" href={u} target="_blank" rel="noreferrer">
                          {u}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Snippet — scrollable */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-sm text-[var(--rt-ink-dim)]">
                    Generated shipment object (paste into <code>shipmentsData.tsx</code>):
                  </p>
                  <button
                    onClick={copySnippet}
                    className="
                      text-xs rounded-md px-2 py-1 cursor-pointer
                      border border-[var(--rt-ring)]
                      hover:text-[var(--rt-primary)] hover:border-[var(--rt-primary)]
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--rt-primary)]
                    "
                  >
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <pre
                  className="
                    max-h-80 overflow-auto rounded p-3 text-xs
                    bg-[var(--rt-muted)] border border-[var(--rt-ring)]
                    text-[var(--rt-ink)]
                  "
                >
                  {snippet || '// (No output yet. Fill the form, choose a folder, and click “Upload & Generate”.)'}
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

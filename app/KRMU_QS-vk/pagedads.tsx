// app/r2/page.tsx
"use client";

import { useEffect, useState } from "react";

type R2File = {
  Key: string; 
  Size?: number;
  LastModified?: string;
};

export default function R2Browser() {
  const [path, setPath] = useState("Main-Krmu-QS/"); // starting folder
  const [folders, setFolders] = useState<string[]>([]);
  const [files, setFiles] = useState<R2File[]>([]);
  const [loading, setLoading] = useState(false);

  const PUBLIC_BASE = process.env.NEXT_PUBLIC_R2_PUBLIC_URL;

  // debug
  // useEffect(() => {
  //   console.log("PUBLIC_BASE:", PUBLIC_BASE);
  // }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/list", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prefix: path }),
      });

      const data = await res.json();
      setFolders(data.folders || []);
      setFiles(data.files || []);
    } catch (err) {
      console.error("loadData error", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);

  const goBack = () => {
    if (path === "Main-Krmu-QS/") return;
    const parts = path.split("/").filter(Boolean);
    parts.pop();
    setPath(parts.join("/") + "/");
  };

  return (
    <div className="pt-[140px] max-w-4xl mx-auto p-4">
      <div className="mb-4 flex items-center justify-between">
        <div>
          {path !== "Main-Krmu-QS/" && (
            <button onClick={goBack} className="mr-3 text-blue-600">
              ◀ Back
            </button>
          )}
          <strong>Path:</strong> /{path}
        </div>
        <div className="text-sm text-gray-600">
          {loading ? "Loading…" : `${folders.length} folders • ${files.length} files`}
        </div>
      </div>

      <div className="mb-6">
        {/* <h3 className="font-semibold">Folders</h3> */}
        {/* {folders.length === 0 && <div className="text-sm text-gray-500">No folders</div>} */}
        {folders.map((f) => (
          <div
            key={f}
            onClick={() => setPath(f)}
            className="cursor-pointer text-blue-600 py-1"
          >
            📁 {f.replace(path, "").replace("/", "")}
          </div>
        ))}
      </div>

      <div>
        <h3 className="font-semibold">Files</h3>
        {files.length === 0 && <div className="text-sm text-gray-500">No files</div>}
        {files.map((file) => {
          // PUBLIC dev URL requires only the object key (no bucket)
          // encodeURI preserves slashes but encodes spaces etc.
          const fileUrl = `${PUBLIC_BASE}/${encodeURI(file.Key)}`;

          return (
            <div key={file.Key} className="py-1">
              <a
                href={fileUrl}
                target="_blank"
                rel="noreferrer"
                className="text-black hover:underline"
              >
                📄 {file.Key.replace(path, "")}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

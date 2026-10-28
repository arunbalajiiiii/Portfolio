"use client";
import { useState } from "react";

export default function DevicePreview({ slug }) {
  const [mode, setMode] = useState("desktop");
  const [failed, setFailed] = useState({});
  const src = `/images/projects/${slug}-${mode}.png`;
  return (
    <div className="preview">
      <div className="toggle" role="tablist" aria-label="Preview device">
        {["desktop", "mobile"].map((m) => (
          <button key={m} role="tab" aria-selected={mode === m} className={mode === m ? "on" : ""} onClick={() => setMode(m)}>
            {m === "desktop" ? "Desktop" : "Mobile"}
          </button>
        ))}
      </div>
      <div className={`frame ${mode}`}>
        <div className="bar"><i /><i /><i /></div>
        <div className="screen">
          {failed[src] ? (
            <div className="ph">Add a screenshot at<br /><code>public{src}</code></div>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={src} alt={`${slug} ${mode} screenshot`} onError={() => setFailed((f) => ({ ...f, [src]: true }))} />
          )}
        </div>
      </div>
    </div>
  );
}

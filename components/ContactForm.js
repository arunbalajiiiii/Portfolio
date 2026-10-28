"use client";
import { useState } from "react";

export default function ContactForm({ to }) {
  const [f, setF] = useState({ name: "", email: "", message: "" });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    const body = `${f.message}\n\nFrom: ${f.name} (${f.email})`;
    window.location.href = `mailto:${to}?subject=${encodeURIComponent("Portfolio message from " + f.name)}&body=${encodeURIComponent(body)}`;
  };
  return (
    <form className="form" onSubmit={submit}>
      <label>Name<input required value={f.name} onChange={set("name")} autoComplete="name" /></label>
      <label>Email<input required type="email" value={f.email} onChange={set("email")} autoComplete="email" /></label>
      <label>Message<textarea required rows={5} value={f.message} onChange={set("message")} /></label>
      <button className="btn" type="submit">Send message</button>
    </form>
  );
}

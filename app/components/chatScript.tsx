"use client";

import { useEffect } from "react";

export default function ChatScript() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = 'https://embed.tawk.to/66dc6a4eea492f34bc0f065c/1i76fugpv';
    script.async = true;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);
  }, []);

  return null;
}

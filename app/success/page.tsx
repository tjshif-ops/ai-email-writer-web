"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

function SuccessContent() {
  const searchParams = useSearchParams();
  const subscriptionId = searchParams.get("subscription_id");

  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [licenseKey, setLicenseKey] = useState("");
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!subscriptionId) {
      setStatus("error");
      setErrorMsg("No subscription ID found. Please try subscribing again.");
      return;
    }

    fetch("/api/verify-subscription", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ subscription_id: subscriptionId }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setLicenseKey(data.license_key);
          setEmail(data.email);
          setStatus("success");
        } else {
          setErrorMsg(data.error || "Verification failed");
          setStatus("error");
        }
      })
      .catch(() => {
        setErrorMsg("Network error. Please refresh and try again.");
        setStatus("error");
      });
  }, [subscriptionId]);

  const handleCopy = () => {
    navigator.clipboard.writeText(licenseKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
        <div className="text-center">
          <div className="text-5xl mb-6 animate-pulse">⏳</div>
          <h1 className="text-2xl font-bold mb-2">Verifying your subscription...</h1>
          <p className="text-slate-400">Please wait a moment.</p>
        </div>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="text-5xl mb-6">😕</div>
          <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
          <p className="text-slate-400 mb-8">{errorMsg}</p>
          <a
            href="/#pricing"
            className="inline-block bg-indigo-600 hover:bg-indigo-500 px-8 py-3 rounded-full font-semibold transition"
          >
            Try Again
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="text-3xl font-bold mb-4">Welcome to Pro!</h1>
        <p className="text-slate-400 mb-2 leading-relaxed">
          Your subscription is active{email ? ` for ${email}` : ""}. Copy the license key below and paste it into the extension settings.
        </p>

        {/* License Key Box */}
        <div className="mt-8 bg-slate-800/80 border border-slate-700 rounded-2xl p-6">
          <p className="text-sm text-slate-400 mb-3">Your License Key</p>
          <div className="bg-slate-900 rounded-xl px-5 py-4 font-mono text-lg text-indigo-300 tracking-wider select-all break-all">
            {licenseKey}
          </div>
          <button
            onClick={handleCopy}
            className={`mt-4 px-6 py-2.5 rounded-full font-medium text-sm transition ${
              copied
                ? "bg-green-600 text-white"
                : "bg-indigo-600 hover:bg-indigo-500 text-white"
            }`}
          >
            {copied ? "✅ Copied!" : "📋 Copy License Key"}
          </button>
        </div>

        {/* Instructions */}
        <div className="mt-8 text-left bg-slate-800/50 border border-slate-700/50 rounded-xl p-5">
          <h3 className="font-semibold mb-3 text-sm">How to activate:</h3>
          <ol className="text-sm text-slate-400 space-y-2 list-decimal list-inside">
            <li>Click the SunnyDay AI Email Writer icon in Chrome toolbar</li>
            <li>Paste the license key in the &quot;License Key&quot; field</li>
            <li>Click Save — you now have unlimited replies!</li>
          </ol>
        </div>

        <a
          href="https://mail.google.com"
          className="inline-block mt-8 bg-indigo-600 hover:bg-indigo-500 px-8 py-3 rounded-full font-semibold transition"
        >
          Open Gmail →
        </a>
        <p className="mt-4 text-xs text-slate-500">
          Lost your key? <a href="/recover" className="text-indigo-400 hover:underline">Recover it here</a>
        </p>
      </div>
    </div>
  );
}

export default function Success() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
          <div className="text-5xl animate-pulse">⏳</div>
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}

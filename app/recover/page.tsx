"use client";

import { useState } from "react";
import Link from "next/link";

export default function Recover() {
  const [subscriptionId, setSubscriptionId] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [licenseKey, setLicenseKey] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [copied, setCopied] = useState(false);

  const handleRecover = async () => {
    const id = subscriptionId.trim();
    if (!id) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/verify-subscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subscription_id: id }),
      });
      const data = await res.json();
      if (data.success) {
        setLicenseKey(data.license_key);
        setStatus("success");
      } else {
        setErrorMsg(data.error || "Could not verify subscription");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(licenseKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">🔑</div>
          <h1 className="text-2xl font-bold mb-2">Recover License Key</h1>
          <p className="text-slate-400 text-sm">
            Enter your PayPal subscription ID to retrieve your license key.
          </p>
        </div>

        {status === "success" ? (
          <div className="text-center">
            <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6">
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
            <Link
              href="/"
              className="inline-block mt-6 text-sm text-slate-400 hover:text-white transition"
            >
              ← Back to home
            </Link>
          </div>
        ) : (
          <div>
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6">
              <label className="block text-sm font-medium text-slate-300 mb-2">
                PayPal Subscription ID
              </label>
              <input
                type="text"
                value={subscriptionId}
                onChange={(e) => {
                  setSubscriptionId(e.target.value);
                  if (status === "error") setStatus("idle");
                }}
                placeholder="I-XXXXXXXXXX"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition"
              />
              {status === "error" && (
                <p className="mt-2 text-sm text-red-400">{errorMsg}</p>
              )}
              <button
                onClick={handleRecover}
                disabled={status === "loading" || !subscriptionId.trim()}
                className="mt-4 w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed py-3 rounded-xl font-medium transition"
              >
                {status === "loading" ? "Verifying..." : "Recover License Key"}
              </button>
            </div>

            <div className="mt-6 bg-slate-800/30 border border-slate-700/30 rounded-xl p-4">
              <h3 className="text-sm font-medium text-slate-300 mb-2">Where to find your Subscription ID?</h3>
              <ol className="text-xs text-slate-400 space-y-1 list-decimal list-inside">
                <li>Log in to <a href="https://www.paypal.com" target="_blank" className="text-indigo-400 hover:underline">paypal.com</a></li>
                <li>Go to Settings → Payments → Manage automatic payments</li>
                <li>Find &quot;SunnyDay AI Email Writer&quot; and click it</li>
                <li>Your Subscription ID starts with &quot;I-&quot;</li>
              </ol>
            </div>

            <div className="text-center mt-6">
              <Link
                href="/"
                className="text-sm text-slate-400 hover:text-white transition"
              >
                ← Back to home
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

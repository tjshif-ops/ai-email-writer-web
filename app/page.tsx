import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 text-white">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <div className="flex items-center gap-2 text-xl font-bold">
          <span className="text-2xl">&#x2728;</span> SunnyDay AI Email Writer
        </div>
        <div className="flex items-center gap-6 text-sm text-slate-300">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
          <a
            href="https://chrome.google.com/webstore"
            target="_blank"
            className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-full font-medium text-white transition"
          >
            Install Free
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-block bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm px-4 py-1.5 rounded-full mb-6">
          Now available on Chrome Web Store
        </div>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
          Write Perfect Emails
          <br />in Seconds, Not Minutes
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          AI-powered email replies right inside Gmail. Choose your tone,
          generate a reply, and send -- all in one click.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://chrome.google.com/webstore"
            target="_blank"
            className="bg-indigo-600 hover:bg-indigo-500 px-8 py-3.5 rounded-full text-lg font-semibold transition shadow-lg shadow-indigo-500/25"
          >
            Add to Chrome -- It&apos;s Free
          </a>
          <a
            href="#demo"
            className="border border-slate-600 hover:border-slate-400 px-8 py-3.5 rounded-full text-lg font-semibold transition text-slate-300 hover:text-white"
          >
            See Demo
          </a>
        </div>
        <p className="mt-4 text-sm text-slate-500">Free 5 replies/day - No credit card required</p>

        {/* Hero Screenshot Placeholder */}
        <div className="mt-16 rounded-2xl border border-slate-700/50 bg-slate-800/50 p-8 shadow-2xl">
          <div className="bg-slate-900 rounded-xl h-80 flex items-center justify-center text-slate-500 text-lg">
            Gmail screenshot with AI Reply button (coming soon)
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-4">Why SunnyDay AI Email Writer?</h2>
        <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
          Stop staring at blank reply boxes. Let AI handle the writing while you focus on what matters.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "zap",
              title: "One-Click Replies",
              desc: "Click the AI Reply button right inside Gmail. No switching tabs, no copy-pasting.",
            },
            {
              icon: "palette",
              title: "4 Tone Options",
              desc: "Professional, Friendly, Concise, or Detailed -- match your voice for every situation.",
            },
            {
              icon: "eye",
              title: "Preview & Edit",
              desc: "Review the AI draft before inserting. Edit, regenerate, or copy -- full control.",
            },
            {
              icon: "lock",
              title: "Privacy First",
              desc: "Your emails stay in your browser. We only send the content to the AI API -- nothing else.",
            },
            {
              icon: "dollar",
              title: "Dirt Cheap",
              desc: "Powered by DeepSeek AI. Each reply costs less than $0.001. Unlimited Pro for $8/mo.",
            },
            {
              icon: "wrench",
              title: "Bring Your Own Key",
              desc: "Use your own API key for maximum privacy and zero usage limits.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-indigo-500/30 transition"
            >
              <div className="text-3xl mb-4">{
                f.icon === "zap" ? "\u26A1" :
                f.icon === "palette" ? "\uD83C\uDFA8" :
                f.icon === "eye" ? "\uD83D\uDC40" :
                f.icon === "lock" ? "\uD83D\uDD12" :
                f.icon === "dollar" ? "\uD83D\uDCB0" : "\uD83D\uDD27"
              }</div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-4">Simple Pricing</h2>
        <p className="text-slate-400 text-center mb-16">Start free. Upgrade when you need more.</p>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Free */}
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8">
            <h3 className="text-lg font-semibold mb-1">Free</h3>
            <div className="text-4xl font-bold mb-1">$0</div>
            <p className="text-slate-400 text-sm mb-6">Forever free</p>
            <ul className="space-y-3 text-sm text-slate-300 mb-8">
              <li>5 replies per day</li>
              <li>All 4 tone options</li>
              <li>Preview & edit</li>
              <li>Gmail integration</li>
            </ul>
            <a
              href="https://chrome.google.com/webstore"
              className="block text-center bg-slate-700 hover:bg-slate-600 py-3 rounded-xl font-medium transition"
            >
              Get Started
            </a>
          </div>

          {/* Pro */}
          <div className="bg-gradient-to-b from-indigo-900/50 to-slate-800/50 border border-indigo-500/30 rounded-2xl p-8 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-xs font-bold px-3 py-1 rounded-full">
              MOST POPULAR
            </div>
            <h3 className="text-lg font-semibold mb-1">Pro</h3>
            <div className="text-4xl font-bold mb-1">
              $8<span className="text-lg font-normal text-slate-400">/mo</span>
            </div>
            <p className="text-slate-400 text-sm mb-6">For power email users</p>
            <ul className="space-y-3 text-sm text-slate-300 mb-8">
              <li><strong>Unlimited</strong> replies</li>
              <li>All 4 tone options</li>
              <li>Preview & edit</li>
              <li>Gmail integration</li>
              <li>Priority AI model</li>
              <li>Custom tone presets</li>
            </ul>
            <a
              href="/api/checkout"
              className="block text-center bg-indigo-600 hover:bg-indigo-500 py-3 rounded-xl font-medium transition shadow-lg shadow-indigo-500/25"
            >
              Subscribe - $8/mo
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-3xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-16">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "Is my email data safe?",
              a: "Yes. Your email content is processed entirely in your browser and sent directly to the AI API. We never store or see your emails.",
            },
            {
              q: "What AI model does it use?",
              a: "We use DeepSeek AI by default, which offers excellent quality at very low cost. You can also use your own API key with any OpenAI-compatible provider.",
            },
            {
              q: "Can I use it with Outlook or other email clients?",
              a: "Currently we support Gmail only. Outlook and other clients are on our roadmap.",
            },
            {
              q: "How do I cancel my Pro subscription?",
              a: "You can cancel anytime from the extension settings or by emailing support. No questions asked.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
              <h3 className="font-semibold mb-2">{item.q}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to write emails 10x faster?</h2>
        <p className="text-slate-400 mb-8">Join thousands of professionals who save hours every week.</p>
        <a
          href="https://chrome.google.com/webstore"
          target="_blank"
          className="inline-block bg-indigo-600 hover:bg-indigo-500 px-8 py-3.5 rounded-full text-lg font-semibold transition shadow-lg shadow-indigo-500/25"
        >
          Install SunnyDay AI Email Writer - Free
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <span>2026 SunnyDay AI Email Writer. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-slate-300 transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-300 transition">Terms of Service</Link>
            <Link href="/recover" className="hover:text-slate-300 transition">Recover License</Link>
            <a href="mailto:support@aiemailwriter.com" className="hover:text-slate-300 transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

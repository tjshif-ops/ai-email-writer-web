import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 text-white">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <div className="flex items-center gap-2 text-xl font-bold">
          <span className="text-2xl">&#x2728;</span> SunnyDay Cold Email
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
          Write High-Converting
          <br />Cold Emails in 30 Seconds
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Paste a LinkedIn profile, get a personalized cold email that gets replies.
          AI-powered outreach for sales teams, founders, and freelancers.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://chrome.google.com/webstore"
            target="_blank"
            className="bg-indigo-600 hover:bg-indigo-500 px-8 py-3.5 rounded-full text-lg font-semibold transition shadow-lg shadow-indigo-500/25"
          >
            Add to Chrome -- Free 10 Emails
          </a>
          <a
            href="#demo"
            className="border border-slate-600 hover:border-slate-400 px-8 py-3.5 rounded-full text-lg font-semibold transition text-slate-300 hover:text-white"
          >
            See How It Works
          </a>
        </div>
        <p className="mt-4 text-sm text-slate-500">Free 10 cold emails/month - No credit card required</p>

        {/* Hero Screenshot Placeholder */}
        <div className="mt-16 rounded-2xl border border-slate-700/50 bg-slate-800/50 p-8 shadow-2xl">
          <div className="bg-slate-900 rounded-xl h-80 flex items-center justify-center text-slate-500 text-lg">
            Gmail screenshot with AI Reply button (coming soon)
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-4">Why SunnyDay Cold Email?</h2>
        <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
          Stop sending generic templates. Generate personalized cold emails that get 3x more replies.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "linkedin",
              title: "LinkedIn Analysis",
              desc: "Paste a LinkedIn profile URL. AI extracts company, role, and pain points automatically.",
            },
            {
              icon: "zap",
              title: "30-Second Generation",
              desc: "Get 3 personalized cold email variations in seconds. Pick the best one and send.",
            },
            {
              icon: "target",
              title: "Subject Line A/B",
              desc: "5 subject line options with predicted open rates. Test and optimize for maximum impact.",
            },
            {
              icon: "repeat",
              title: "Follow-up Sequences",
              desc: "Auto-generate Day 1, Day 3, Day 7 follow-ups. Persistence without being annoying.",
            },
            {
              icon: "chart",
              title: "Reply Rate Tracking",
              desc: "Track open rates, reply rates, and conversions. See what works and double down.",
            },
            {
              icon: "lock",
              title: "Privacy First",
              desc: "Your prospects data stays in your browser. We only send content to the AI API.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-indigo-500/30 transition"
            >
              <div className="text-3xl mb-4">{
                f.icon === "linkedin" ? "\uD83D\uDD17" :
                f.icon === "zap" ? "\u26A1" :
                f.icon === "target" ? "\uD83C\uDFAF" :
                f.icon === "repeat" ? "\uD83D\uDD04" :
                f.icon === "chart" ? "\uD83D\uDCCA" :
                f.icon === "lock" ? "\uD83D\uDD12" : "\uD83D\uDD27"
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
              <li>10 cold emails / month</li>
              <li>LinkedIn analysis</li>
              <li>3 email variations</li>
              <li>Basic subject lines</li>
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
              $29<span className="text-lg font-normal text-slate-400">/mo</span>
            </div>
            <p className="text-slate-400 text-sm mb-6">For sales teams and founders</p>
            <ul className="space-y-3 text-sm text-slate-300 mb-8">
              <li><strong>200 cold emails</strong> / month</li>
              <li>Unlimited LinkedIn analysis</li>
              <li>Follow-up sequences (Day 1/3/7)</li>
              <li>Subject line A/B testing</li>
              <li>Reply rate tracking</li>
              <li>Chrome extension</li>
            </ul>
            <a
              href="https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-99Y6711460065674WNGRGXII"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-indigo-600 hover:bg-indigo-500 py-3 rounded-xl font-medium transition shadow-lg shadow-indigo-500/25"
            >
              Start Free Trial
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
              q: "How does LinkedIn analysis work?",
              a: "Paste a LinkedIn profile URL. Our AI extracts the person's company, role, and potential pain points to generate a highly personalized cold email.",
            },
            {
              q: "What's a good reply rate for cold emails?",
              a: "Industry average is 5-8%. With SunnyDay's personalized approach, our users typically see 15-25% reply rates.",
            },
            {
              q: "Can I send bulk cold emails?",
              a: "Pro plan includes batch generation (up to 100 emails at once). For sending, we recommend connecting your own Gmail/Outlook to stay within daily limits.",
            },
            {
              q: "Is this compliant with GDPR and CAN-SPAM?",
              a: "Yes. We help you generate personalized, non-spammy content. Always include an unsubscribe option and respect recipient preferences.",
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
        <h2 className="text-3xl font-bold mb-4">Ready to 3x Your Reply Rate?</h2>
        <p className="text-slate-400 mb-8">Join sales teams and founders who close more deals with personalized cold emails.</p>
        <a
          href="https://chrome.google.com/webstore"
          target="_blank"
          className="inline-block bg-indigo-600 hover:bg-indigo-500 px-8 py-3.5 rounded-full text-lg font-semibold transition shadow-lg shadow-indigo-500/25"
        >
          Install SunnyDay Cold Email - Free 10 Emails
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <span>2026 SunnyDay Cold Email. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-slate-300 transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-300 transition">Terms of Service</Link>
            <Link href="/recover" className="hover:text-slate-300 transition">Recover License</Link>
            <a href="mailto:support@babname.cn" className="hover:text-slate-300 transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

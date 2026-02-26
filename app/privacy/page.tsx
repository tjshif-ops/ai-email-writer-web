export default function Privacy() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 py-20 px-6">
      <article className="max-w-3xl mx-auto prose prose-invert prose-slate">
        <h1>Privacy Policy</h1>
        <p><strong>Last updated:</strong> February 25, 2026</p>

        <h2>What We Collect</h2>
        <p>
          SunnyDay AI Email Writer is a browser extension that runs locally in your browser.
          We collect minimal data to provide and improve our service:
        </p>
        <ul>
          <li><strong>Email content:</strong> When you click &quot;AI Reply&quot;, the email you are replying to is sent to the AI API (DeepSeek or your configured provider) to generate a response. This data is NOT stored on our servers.</li>
          <li><strong>Usage count:</strong> We track daily reply counts locally in your browser to enforce free tier limits.</li>
          <li><strong>Subscription data:</strong> If you subscribe to Pro, PayPal processes your payment. We store your subscription status.</li>
        </ul>

        <h2>What We Don&apos;t Collect</h2>
        <ul>
          <li>We do NOT read or store your emails</li>
          <li>We do NOT track your browsing activity</li>
          <li>We do NOT sell any data to third parties</li>
          <li>We do NOT use cookies for advertising</li>
        </ul>

        <h2>Third-Party Services</h2>
        <ul>
          <li><strong>DeepSeek API:</strong> Processes email content to generate replies. See <a href="https://deepseek.com/privacy" target="_blank">DeepSeek Privacy Policy</a>.</li>
          <li><strong>PayPal:</strong> Handles payment processing for Pro subscriptions. See <a href="https://www.paypal.com/privacy" target="_blank">PayPal Privacy Policy</a>.</li>
        </ul>

        <h2>Data Retention</h2>
        <p>All email content is processed in real-time and not stored. API keys and settings are stored locally in your browser&apos;s extension storage.</p>

        <h2>GDPR Compliance</h2>
        <p>For EU users: you have the right to access, correct, or delete your data. Since we store minimal data (only subscription status), you can contact us to exercise these rights.</p>

        <h2>Contact</h2>
        <p>Questions? Email us at <a href="mailto:privacy@aiemailwriter.com">privacy@aiemailwriter.com</a></p>
      </article>
    </div>
  );
}

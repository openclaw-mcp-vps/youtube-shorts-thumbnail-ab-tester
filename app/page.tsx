export default function Home() {
  const faqs = [
    {
      q: "How does thumbnail rotation work?",
      a: "We connect to the YouTube Data API and swap your thumbnail for each new viewer session, then track which version drives more views and clicks."
    },
    {
      q: "Do I need technical skills to use this?",
      a: "No. Just connect your YouTube account, upload your thumbnail variants, and our dashboard handles everything automatically."
    },
    {
      q: "Can I cancel my subscription anytime?",
      a: "Yes. Cancel anytime from your billing portal with no questions asked. Your data is retained for 30 days after cancellation."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          YouTube Shorts Growth Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          A/B Test Your Shorts Thumbnails<br />
          <span className="text-[#58a6ff]">for Maximum Views</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Upload multiple thumbnail options, automatically rotate them for new viewers, and let data pick your winner — no guesswork.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-8 py-3 rounded-lg transition-colors"
        >
          Start Free Trial — $9/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required to start. Cancel anytime.</p>
      </section>

      {/* Features strip */}
      <section className="max-w-4xl mx-auto px-6 pb-20 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        {[
          { icon: "🔄", title: "Auto Rotation", desc: "Thumbnails swap automatically for each new viewer" },
          { icon: "📊", title: "Live Metrics", desc: "Track views, CTR, and watch time per variant" },
          { icon: "🏆", title: "Winner Detection", desc: "Statistical significance alerts when a winner emerges" }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Creator Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$9</p>
          <p className="text-[#8b949e] text-sm mb-6">/month · billed monthly</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Up to 10 active Shorts",
              "Unlimited thumbnail variants",
              "Real-time analytics dashboard",
              "YouTube Data API integration",
              "Email winner alerts",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
              <p className="text-sm text-[#8b949e]">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        © {new Date().getFullYear()} ThumbnailAB. All rights reserved.
      </footer>
    </main>
  );
}

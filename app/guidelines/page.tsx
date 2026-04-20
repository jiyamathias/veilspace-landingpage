import type { Metadata } from 'next';
import PageShell from '../components/PageShell';

export const metadata: Metadata = {
  title: 'Community Guidelines — VeilSpace',
  description: 'The rules and values that keep VeilSpace safe, honest, and human.',
};

const S = {
  section: { marginBottom: 52 } as React.CSSProperties,
  h2: { fontFamily: "'Cinzel', serif", fontSize: 'clamp(18px,3vw,24px)', fontWeight: 700, color: 'var(--text-high)', marginBottom: 14, letterSpacing: '-0.2px' } as React.CSSProperties,
  p: { fontSize: 15, color: 'var(--text-med)', lineHeight: 1.8, marginBottom: 14 } as React.CSSProperties,
  divider: { border: 'none', borderTop: '1px solid var(--border)', margin: '44px 0' } as React.CSSProperties,
  meta: { fontSize: 13, color: 'var(--text-low)', marginBottom: 40 } as React.CSSProperties,
  rule: { background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 20, padding: '24px 28px', marginBottom: 16 } as React.CSSProperties,
  allowed: { background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.18)', borderRadius: 20, padding: '24px 28px', marginBottom: 16 } as React.CSSProperties,
  notAllowed: { background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.18)', borderRadius: 20, padding: '24px 28px', marginBottom: 16 } as React.CSSProperties,
};

const rules = [
  {
    icon: '🛡️',
    title: 'Be Human',
    desc: 'Behind every anonymous persona is a real person. Treat others the way you would want to be treated — with basic dignity and empathy, even when you disagree.',
    type: 'neutral',
  },
  {
    icon: '🔥',
    title: 'Be Honest',
    desc: 'This is the whole point. Say what you actually think. Share what you\'re actually going through. Authenticity is the currency of VeilSpace.',
    type: 'neutral',
  },
  {
    icon: '💜',
    title: 'Support, Don\'t Exploit',
    desc: 'Many people come to VeilSpace in vulnerable moments. Responding with empathy and support is encouraged. Targeting, mocking, or exploiting that vulnerability is not.',
    type: 'neutral',
  },
  {
    icon: '🔒',
    title: 'Protect Other People\'s Privacy',
    desc: 'Never share personal information about others — real names, locations, workplaces, relationships, or anything that could identify them. This includes information shared with you in confidence.',
    type: 'neutral',
  },
];

const notAllowed = [
  { icon: '⛔', text: 'Hate speech targeting race, ethnicity, religion, gender, sexuality, disability, or national origin' },
  { icon: '⛔', text: 'Content that promotes, glorifies, or facilitates violence or self-harm' },
  { icon: '⛔', text: 'Sexual content involving minors, in any form' },
  { icon: '⛔', text: 'Doxxing — sharing someone\'s real identity or personal information without consent' },
  { icon: '⛔', text: 'Attempts to de-anonymise or identify other users' },
  { icon: '⛔', text: 'Coordinated harassment, dogpiling, or targeted abuse campaigns' },
  { icon: '⛔', text: 'Spam, scams, or commercial solicitation' },
  { icon: '⛔', text: 'Misinformation that could cause real-world harm (e.g. false medical or safety claims)' },
  { icon: '⛔', text: 'Content that violates applicable laws' },
];

const allowed = [
  { icon: '✅', text: 'Venting, confessing, or sharing experiences that feel too risky to share publicly' },
  { icon: '✅', text: 'Controversial opinions, hot takes, and uncomfortable truths — stated respectfully' },
  { icon: '✅', text: 'Discussing sensitive topics like mental health, relationships, sexuality, and politics' },
  { icon: '✅', text: 'Criticism of public figures, companies, or institutions based on their public actions' },
  { icon: '✅', text: 'Dark humour, sarcasm, and satire — clearly framed as such' },
  { icon: '✅', text: 'Whistleblowing about genuine misconduct' },
];

export default function Guidelines() {
  return (
    <PageShell
      title="Community Guidelines"
      subtitle="VeilSpace exists to give people a safe place to be honest. These guidelines protect that. They are not about silencing — they are about making sure this space stays worth having."
    >
      <p style={S.meta}>Last updated: January 2025</p>

      {/* Core principles */}
      <div style={S.section}>
        <h2 style={S.h2}>Core Principles</h2>
        <p style={S.p}>Anonymity is a privilege that comes with responsibility. The freedom to speak without your name attached is only sustainable if users treat each other with basic respect. These principles are the foundation of every rule below.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 24 }}>
          {rules.map(rule => (
            <div key={rule.title} style={S.rule}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <span style={{ fontSize: 24, flexShrink: 0 }}>{rule.icon}</span>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-high)', marginBottom: 6 }}>{rule.title}</div>
                  <p style={{ fontSize: 14, color: 'var(--text-med)', lineHeight: 1.7, margin: 0 }}>{rule.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr style={S.divider} />

      {/* What's welcome */}
      <div style={S.section}>
        <h2 style={S.h2}>What Is Welcome</h2>
        <p style={S.p}>VeilSpace is built for the things people don&apos;t feel safe saying elsewhere. Here&apos;s what that looks like in practice:</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 20 }}>
          {allowed.map(item => (
            <div key={item.text} style={S.allowed}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <span style={{ fontSize: 16, flexShrink: 0, marginTop: 1 }}>{item.icon}</span>
                <p style={{ fontSize: 14, color: 'var(--text-med)', lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr style={S.divider} />

      {/* What's not allowed */}
      <div style={S.section}>
        <h2 style={S.h2}>What Is Not Allowed</h2>
        <p style={S.p}>These are absolute limits. Violating them will result in content removal and may result in account suspension or termination.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 20 }}>
          {notAllowed.map(item => (
            <div key={item.text} style={S.notAllowed}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <span style={{ fontSize: 16, flexShrink: 0, marginTop: 1 }}>{item.icon}</span>
                <p style={{ fontSize: 14, color: 'var(--text-med)', lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr style={S.divider} />

      {/* Enforcement */}
      <div style={S.section}>
        <h2 style={S.h2}>Enforcement</h2>
        <p style={S.p}>We use a combination of community reporting and automated detection to enforce these guidelines. Content can be reported for 8 specific reasons within the app. Reports are reviewed and actioned within 24 hours for serious violations.</p>
        <p style={S.p}>Enforcement actions range from content removal to temporary suspensions to permanent bans, depending on the severity and frequency of violations. We err on the side of keeping content that is uncomfortable-but-honest, and acting swiftly on content that is genuinely harmful.</p>
      </div>

      <hr style={S.divider} />

      {/* Reporting */}
      <div style={S.section}>
        <h2 style={S.h2}>How to Report</h2>
        <p style={S.p}>Tap the &quot;...&quot; menu on any post or comment and select &quot;Report&quot;. Choose the reason that best applies. Your report is anonymous.</p>
        <p style={S.p}>For urgent safety concerns — including content that involves an immediate threat to someone&apos;s life — contact us directly at <a href="mailto:safety@veils.space" style={{ color: 'var(--primary-glow)' }}>safety@veils.space</a>.</p>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>Questions</h2>
        <p style={S.p}>If you have questions about these guidelines or a decision we made, contact us at <a href="mailto:hello@veils.space" style={{ color: 'var(--primary-glow)' }}>hello@veils.space</a>. We are a small team that genuinely reads every message.</p>
      </div>
    </PageShell>
  );
}

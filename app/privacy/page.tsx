import type { Metadata } from 'next';
import PageShell from '../components/PageShell';

export const metadata: Metadata = {
  title: 'Privacy Policy — VeilSpace',
  description: 'How VeilSpace collects, uses, and protects your personal information.',
};

const S = {
  section: { marginBottom: 52 } as React.CSSProperties,
  h2: { fontFamily: "'Cinzel', serif", fontSize: 'clamp(18px,3vw,24px)', fontWeight: 700, color: 'var(--text-high)', marginBottom: 14, letterSpacing: '-0.2px' } as React.CSSProperties,
  h3: { fontSize: 15, fontWeight: 700, color: 'var(--text-high)', marginBottom: 8, marginTop: 20 } as React.CSSProperties,
  p: { fontSize: 15, color: 'var(--text-med)', lineHeight: 1.8, marginBottom: 14 } as React.CSSProperties,
  ul: { paddingLeft: 20, marginBottom: 14 } as React.CSSProperties,
  li: { fontSize: 15, color: 'var(--text-med)', lineHeight: 1.8, marginBottom: 6 } as React.CSSProperties,
  divider: { border: 'none', borderTop: '1px solid var(--border)', margin: '44px 0' } as React.CSSProperties,
  meta: { fontSize: 13, color: 'var(--text-low)', marginBottom: 40 } as React.CSSProperties,
  highlight: { background: 'rgba(124,111,255,0.08)', border: '1px solid rgba(124,111,255,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 20 } as React.CSSProperties,
};

export default function Privacy() {
  return (
    <PageShell
      title="Privacy Policy"
      subtitle="Your privacy is not a legal formality to us — it is the foundation of everything we build."
    >
      <p style={S.meta}>Last updated: January 2025 · Effective: January 2025</p>

      <div style={S.highlight}>
        <p style={{ ...S.p, marginBottom: 0, color: 'var(--primary-glow)' }}>
          <strong>TL;DR:</strong> We collect the minimum data necessary to run VeilSpace. We do not sell your data. We do not link your anonymous activity to your identity. You can delete your account and all associated data at any time.
        </p>
      </div>

      <div style={S.section}>
        <h2 style={S.h2}>1. Who We Are</h2>
        <p style={S.p}>VeilSpace (&quot;VeilSpace&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the VeilSpace mobile application and the website veils.space. We are the data controller for personal information collected through our services.</p>
        <p style={S.p}>Contact us at: <a href="mailto:privacy@veils.space" style={{ color: 'var(--primary-glow)' }}>privacy@veils.space</a></p>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>2. Information We Collect</h2>
        <h3 style={S.h3}>2.1 Information you provide</h3>
        <ul style={S.ul}>
          <li style={S.li}><strong style={{ color: 'var(--text-high)' }}>Email address</strong> — required to create an account and receive your waitlist invite. We do not require your real name or any other identifying information.</li>
          <li style={S.li}><strong style={{ color: 'var(--text-high)' }}>Content you post</strong> — posts, comments, and reactions you create within Spaces. This content is stored anonymously under your rotating persona.</li>
          <li style={S.li}><strong style={{ color: 'var(--text-high)' }}>Reports you submit</strong> — if you report content, we store the report and the reported content to action it appropriately.</li>
        </ul>
        <h3 style={S.h3}>2.2 Information collected automatically</h3>
        <ul style={S.ul}>
          <li style={S.li}><strong style={{ color: 'var(--text-high)' }}>Device information</strong> — device type, operating system, and app version, used for debugging and compatibility.</li>
          <li style={S.li}><strong style={{ color: 'var(--text-high)' }}>Usage data</strong> — which Spaces you visit and general interaction patterns, stored in aggregate and not linked to your real identity.</li>
          <li style={S.li}><strong style={{ color: 'var(--text-high)' }}>IP address</strong> — collected transiently for security and fraud prevention. Not stored long-term or linked to your account.</li>
        </ul>
        <h3 style={S.h3}>2.3 Information we do NOT collect</h3>
        <ul style={S.ul}>
          <li style={S.li}>Your real name, photo, phone number, or location</li>
          <li style={S.li}>Links between your different anonymous personas</li>
          <li style={S.li}>Contacts, camera, or microphone access (unless explicitly requested for a feature)</li>
        </ul>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>3. How We Use Your Information</h2>
        <ul style={S.ul}>
          <li style={S.li}>To create and manage your account</li>
          <li style={S.li}>To send your waitlist invite and essential service communications</li>
          <li style={S.li}>To enforce our Community Guidelines and keep Spaces safe</li>
          <li style={S.li}>To improve our app through anonymised, aggregated analytics</li>
          <li style={S.li}>To comply with legal obligations where required</li>
        </ul>
        <p style={S.p}>We do <strong style={{ color: 'var(--text-high)' }}>not</strong> use your data for advertising, profile-building, or any purpose other than those listed above.</p>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>4. Data Sharing & Third Parties</h2>
        <p style={S.p}>We do not sell, rent, or trade your personal data. We share data only in these limited circumstances:</p>
        <ul style={S.ul}>
          <li style={S.li}><strong style={{ color: 'var(--text-high)' }}>Service providers</strong> — Supabase (database hosting). These providers process data on our behalf under strict data processing agreements.</li>
          <li style={S.li}><strong style={{ color: 'var(--text-high)' }}>Legal requirements</strong> — if required by law, court order, or to protect the safety of users or the public.</li>
          <li style={S.li}><strong style={{ color: 'var(--text-high)' }}>Business transfers</strong> — in the event of a merger or acquisition, we will notify users before any data transfer and give you the option to delete your account.</li>
        </ul>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>5. Data Retention</h2>
        <p style={S.p}>We retain your account data for as long as your account is active. Deleted accounts and associated content are purged within 30 days. Anonymised, aggregated analytics data may be retained indefinitely.</p>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>6. Your Rights</h2>
        <p style={S.p}>Depending on your jurisdiction, you may have the right to:</p>
        <ul style={S.ul}>
          <li style={S.li}>Access the personal data we hold about you</li>
          <li style={S.li}>Request correction of inaccurate data</li>
          <li style={S.li}>Request deletion of your account and data</li>
          <li style={S.li}>Object to or restrict certain processing</li>
          <li style={S.li}>Data portability (receive your data in a machine-readable format)</li>
        </ul>
        <p style={S.p}>To exercise any of these rights, email <a href="mailto:privacy@veils.space" style={{ color: 'var(--primary-glow)' }}>privacy@veils.space</a>. We will respond within 30 days.</p>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>7. Security</h2>
        <p style={S.p}>We use industry-standard security measures including encryption in transit (TLS), encrypted storage, and restricted internal access controls. No system is completely secure, and we cannot guarantee absolute security. If you discover a security vulnerability, please disclose it responsibly to <a href="mailto:safety@veils.space" style={{ color: 'var(--primary-glow)' }}>safety@veils.space</a>.</p>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>8. Children</h2>
        <p style={S.p}>VeilSpace is not intended for users under the age of 16. We do not knowingly collect personal data from children under 16. If you believe we have done so inadvertently, please contact us immediately and we will delete the data.</p>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>9. Changes to This Policy</h2>
        <p style={S.p}>We may update this Privacy Policy from time to time. We will notify registered users of material changes by email at least 14 days before they take effect. Continued use of the service after that date constitutes acceptance of the updated policy.</p>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>10. Contact</h2>
        <p style={S.p}>For any privacy-related questions or requests: <a href="mailto:privacy@veils.space" style={{ color: 'var(--primary-glow)' }}>privacy@veils.space</a></p>
      </div>
    </PageShell>
  );
}

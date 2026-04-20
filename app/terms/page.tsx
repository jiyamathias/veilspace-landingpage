import type { Metadata } from 'next';
import PageShell from '../components/PageShell';

export const metadata: Metadata = {
  title: 'Terms of Service — VeilSpace',
  description: 'The terms and conditions governing your use of VeilSpace.',
};

const S = {
  section: { marginBottom: 52 } as React.CSSProperties,
  h2: { fontFamily: "'Cinzel', serif", fontSize: 'clamp(18px,3vw,24px)', fontWeight: 700, color: 'var(--text-high)', marginBottom: 14, letterSpacing: '-0.2px' } as React.CSSProperties,
  p: { fontSize: 15, color: 'var(--text-med)', lineHeight: 1.8, marginBottom: 14 } as React.CSSProperties,
  ul: { paddingLeft: 20, marginBottom: 14 } as React.CSSProperties,
  li: { fontSize: 15, color: 'var(--text-med)', lineHeight: 1.8, marginBottom: 6 } as React.CSSProperties,
  divider: { border: 'none', borderTop: '1px solid var(--border)', margin: '44px 0' } as React.CSSProperties,
  meta: { fontSize: 13, color: 'var(--text-low)', marginBottom: 40 } as React.CSSProperties,
};

export default function Terms() {
  return (
    <PageShell
      title="Terms of Service"
      subtitle="By using VeilSpace, you agree to these terms. Please read them carefully."
    >
      <p style={S.meta}>Last updated: January 2025 · Effective: January 2025</p>

      <div style={S.section}>
        <h2 style={S.h2}>1. Acceptance of Terms</h2>
        <p style={S.p}>By creating an account or using VeilSpace (&quot;the Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree, do not use the Service. These Terms apply to all users of VeilSpace, including users of the mobile application and the website veils.space.</p>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>2. Eligibility</h2>
        <p style={S.p}>You must be at least 16 years old to use VeilSpace. By using the Service, you represent that you meet this requirement. We reserve the right to terminate accounts of users who we believe are under 16.</p>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>3. Your Account</h2>
        <p style={S.p}>You are responsible for maintaining the security of your account credentials. You must not share your account with anyone else. You are responsible for all activity that occurs under your account.</p>
        <p style={S.p}>You may delete your account at any time through the app settings. Upon deletion, your account and associated content will be removed within 30 days.</p>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>4. Anonymity & Personas</h2>
        <p style={S.p}>VeilSpace assigns you anonymous personas for use in Spaces. While we protect your anonymity from other users, we do maintain a technical link between your account and your anonymous activity for moderation and legal compliance purposes. This link is never disclosed publicly.</p>
        <p style={S.p}>Anonymity on VeilSpace does not exempt you from these Terms or applicable laws.</p>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>5. Acceptable Use</h2>
        <p style={S.p}>You agree not to use VeilSpace to:</p>
        <ul style={S.ul}>
          <li style={S.li}>Post content that is illegal, threatening, harassing, abusive, or hateful</li>
          <li style={S.li}>Share personal information of others without their consent (doxxing)</li>
          <li style={S.li}>Impersonate any person or entity</li>
          <li style={S.li}>Post spam, misinformation, or coordinated inauthentic content</li>
          <li style={S.li}>Attempt to identify, de-anonymise, or expose other users</li>
          <li style={S.li}>Circumvent our moderation systems or access controls</li>
          <li style={S.li}>Use the Service for any commercial purpose without our consent</li>
          <li style={S.li}>Scrape, crawl, or collect data from the Service via automated means</li>
        </ul>
        <p style={S.p}>Violations may result in content removal, temporary suspension, or permanent account termination.</p>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>6. Content & Intellectual Property</h2>
        <p style={S.p}>You retain ownership of the content you post on VeilSpace. By posting, you grant VeilSpace a non-exclusive, royalty-free, worldwide licence to store, display, and distribute that content as necessary to operate the Service.</p>
        <p style={S.p}>VeilSpace and its logo, design, and software are the intellectual property of VeilSpace. You may not reproduce or use them without our written permission.</p>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>7. Moderation & Enforcement</h2>
        <p style={S.p}>We reserve the right to remove any content that violates these Terms or our Community Guidelines, at our sole discretion. We may suspend or terminate accounts that repeatedly violate our policies.</p>
        <p style={S.p}>We are not obligated to moderate all content and are not liable for user-generated content.</p>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>8. Disclaimers & Limitation of Liability</h2>
        <p style={S.p}>VeilSpace is provided &quot;as is&quot; without warranties of any kind. We do not guarantee that the Service will be uninterrupted, error-free, or secure.</p>
        <p style={S.p}>To the fullest extent permitted by law, VeilSpace shall not be liable for any indirect, incidental, consequential, or punitive damages arising from your use of the Service.</p>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>9. Changes to These Terms</h2>
        <p style={S.p}>We may update these Terms at any time. We will notify you of material changes at least 14 days in advance by email. Continued use of the Service after changes take effect constitutes acceptance of the new Terms.</p>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>10. Governing Law</h2>
        <p style={S.p}>These Terms are governed by applicable law. Any disputes arising from these Terms or your use of the Service shall be resolved through good-faith negotiation or, where required, through binding arbitration.</p>
      </div>

      <hr style={S.divider} />

      <div style={S.section}>
        <h2 style={S.h2}>11. Contact</h2>
        <p style={S.p}>Questions about these Terms? Email us at <a href="mailto:hello@veils.space" style={{ color: 'var(--primary-glow)' }}>hello@veils.space</a>.</p>
      </div>
    </PageShell>
  );
}

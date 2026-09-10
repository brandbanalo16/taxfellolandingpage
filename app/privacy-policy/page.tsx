import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Taxfello — Clearverge Consulting Private Limited',
  description:
    'Learn how Taxfello (Clearverge Consulting Private Limited) collects, uses, stores and protects your personal data in compliance with the DPDPA 2023 and Indian law.',
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-surface-warm text-slate-900">
      {/* Header bar */}
      <div className="bg-slate-950 text-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
            Legal
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-400">
            Effective Date: <span className="text-white font-medium">July 27, 2026</span>
            &nbsp;|&nbsp; Brand: <span className="text-white font-medium">Taxfello</span>
            &nbsp;|&nbsp; Managed by: <span className="text-white font-medium">Clearverge Consulting Private Limited</span>
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Preamble */}
        <div className="mb-10 p-5 bg-blue-50 border border-blue-200 rounded-xl text-sm text-blue-900 leading-relaxed">
          <p>
            At Taxfello, we value your trust and are committed to protecting your personal data. This Privacy Policy explains how Clearverge Consulting Private Limited (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, stores, discloses, and protects your information when you visit our website, mobile application, dashboard, or client portal (&ldquo;Platform&rdquo;), or when you avail our professional compliance, taxation, and consulting services.
          </p>
          <p className="mt-3">
            This policy is prepared in compliance with the <strong>Digital Personal Data Protection Act, 2023 (DPDPA)</strong>, the Information Technology Act, 2000, and other applicable Indian regulations.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">

          {/* Section 1 */}
          <section id="information-we-collect" className="scroll-mt-6">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 pb-2 border-b border-slate-200">
              1. Information We Collect
            </h2>
            <div className="policy-content text-sm text-slate-700 leading-relaxed space-y-3">
              <p>We collect personal information necessary to deliver our compliance and corporate services. This includes:</p>
              <ul>
                <li><strong>Identity Details:</strong> Full name, PAN (Permanent Account Number), Aadhaar number, DIN (Director Identification Number), CIN (Corporate Identification Number), passport size photos, and voter ID.</li>
                <li><strong>Contact Information:</strong> Billing address, registered office address, phone number, email address, and WhatsApp contact details.</li>
                <li><strong>Financial Data:</strong> Bank account numbers, IFSC codes, salary details, profit and loss statements, balance sheets, and transaction records.</li>
                <li><strong>Portal Credentials:</strong> GST portal logins, income tax portal logins, MCA/ROC credentials, and digital signatures (DSC), used strictly under your direct authorisation.</li>
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section id="how-we-use" className="scroll-mt-6">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 pb-2 border-b border-slate-200">
              2. How We Use Your Information
            </h2>
            <div className="policy-content text-sm text-slate-700 leading-relaxed space-y-3">
              <p>We process your personal data for the following legitimate purposes:</p>
              <ul>
                <li>To incorporate companies, register LLPs, obtain trade/FSSAI/GST licences, and file returns.</li>
                <li>To coordinate with independent licensed professionals (Chartered Accountants, Company Secretaries, and Legal Advocates) for audits or attestation services.</li>
                <li>To issue tax invoices, process payments, and verify transaction receipts.</li>
                <li>To send critical service updates, regulatory alerts, filing deadline reminders, and security notices.</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section id="data-retention" className="scroll-mt-6">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 pb-2 border-b border-slate-200">
              3. Data Retention and Security
            </h2>
            <div className="policy-content text-sm text-slate-700 leading-relaxed space-y-3">
              <p>Your personal data is stored in secure, encrypted cloud environments. We implement robust physical, technical, and administrative security measures to protect your documents from unauthorised access, loss, or manipulation.</p>
              <p>We retain your personal data and filing histories for as long as is necessary to execute the service, and thereafter for the mandatory retention periods prescribed under Indian tax and corporate laws (typically 8 years).</p>
            </div>
          </section>

          {/* Section 4 */}
          <section id="sharing" className="scroll-mt-6">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 pb-2 border-b border-slate-200">
              4. Sharing of Information
            </h2>
            <div className="policy-content text-sm text-slate-700 leading-relaxed space-y-3">
              <p>We do not sell, rent, or trade your personal data. We only share information with:</p>
              <ul>
                <li>Government departments (Income Tax Department, GSTN, MCA, FSSAI, etc.) to file your applications.</li>
                <li>Partner Chartered Accountants, Company Secretaries, or legal advocates who perform audits, certifications, or representations under individual corporate engagement letters.</li>
                <li>Trusted technology partners (payment gateways, cloud hosting providers) bound by strict confidentiality agreements.</li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section id="your-rights" className="scroll-mt-6">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 pb-2 border-b border-slate-200">
              5. Your Rights
            </h2>
            <div className="policy-content text-sm text-slate-700 leading-relaxed space-y-3">
              <p>Under the Digital Personal Data Protection Act, 2023, you hold the following rights:</p>
              <ul>
                <li>The right to request summaries of the personal data we hold and process for you.</li>
                <li>The right to correct inaccurate details, update changes, or complete pending records.</li>
                <li>The right to withdraw your consent to data processing (which may limit or stop our ability to file your pending returns).</li>
                <li>The right to seek grievance redressal through our Grievance Officer or the Data Protection Board of India.</li>
              </ul>
            </div>
          </section>

          {/* Section 6 */}
          <section id="grievance" className="scroll-mt-6">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 pb-2 border-b border-slate-200">
              6. Grievance Redressal
            </h2>
            <div className="policy-content text-sm text-slate-700 leading-relaxed space-y-3">
              <p>If you have any questions, concerns, or complaints regarding this Privacy Policy or how your personal data is handled, please reach out to our Grievance Officer:</p>
              <div className="overflow-x-auto mt-4">
                <table>
                  <tbody>
                    <tr><td>Designation</td><td>Grievance Officer, Taxfello</td></tr>
                    <tr><td>Company</td><td>Clearverge Consulting Private Limited</td></tr>
                    <tr><td>Address</td><td>709, 8th Floor, Westend Mall, Janakpuri, Delhi 110058</td></tr>
                    <tr><td>Email</td><td><a href="mailto:support@taxfello.com">support@taxfello.com</a></td></tr>
                    <tr><td>Telephone</td><td><a href="tel:+918800485106">+91 88004 85106</a></td></tr>
                    <tr><td>Working hours</td><td>Monday to Friday, 10:00 to 18:00 IST</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

        </div>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800 transition-colors"
          >
            ← Back to Taxfello
          </Link>
          <Link
            href="/terms-and-conditions"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800 transition-colors"
          >
            Terms &amp; Conditions →
          </Link>
        </div>
      </div>

      {/* Inline styles for policy content */}
      <style>{`
        .policy-content ul {
          list-style-type: disc;
          padding-left: 1.4rem;
          margin-top: 0.5rem;
        }
        .policy-content ul li {
          margin-bottom: 0.3rem;
        }
        .policy-content table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.8125rem;
        }
        .policy-content table td {
          padding: 0.5rem 0.75rem;
          border: 1px solid #e2e8f0;
          vertical-align: top;
        }
        .policy-content table td:first-child {
          font-weight: 600;
          color: #374151;
          background: #f8fafc;
          white-space: nowrap;
        }
        .policy-content a {
          color: #1d4ed8;
          text-decoration: underline;
        }
        .policy-content a:hover {
          color: #1e40af;
        }
      `}</style>
    </main>
  );
}

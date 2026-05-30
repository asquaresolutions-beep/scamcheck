import{a,j as e}from"./index-vOlvCRQf.js";import{S as s}from"./vendor-ui-BY8VAiqL.js";import"./vendor-react-CPrnAzYj.js";import"./vendor-firebase-DkVUjfus.js";const i=[{title:"1. Overview",content:`This Privacy Policy explains how A Square Solutions ("we", "us", "our") collects, uses, and protects your information when you use ScamCheck (scamcheck.asquaresolution.com) — our free AI-powered scam detection tool.

By using ScamCheck, you agree to the practices described in this policy. This policy applies globally to all users.`},{title:"2. Information We Collect",content:`Account Data: If you sign up, we collect your email address and display name via Firebase Authentication (Google OAuth or Email/Password).

Usage Data: We track the number of scam checks performed per day to enforce free-tier limits (3/day without account, 10/day with free account). This count is stored per user ID in Firestore.

Scam Check Input: Content you submit for analysis (messages, URLs, phone numbers) is sent to Google Gemini AI for processing via Firebase Cloud Functions. We do not permanently store the raw content you submit. Analysis results are processed transiently on our servers.

Analytics Data: We use Google Analytics 4 (GA4) to collect anonymous usage data including page views, feature interactions, and performance metrics. No personally identifiable information is linked to analytics data.

Device Data: Standard server logs may include your IP address, browser type, operating system, and referring URL.

Language Preference: Your selected language (Hindi or English) is stored in localStorage on your device.`},{title:"3. How We Use Your Information",content:`We use your information to:
• Provide and operate the ScamCheck scam detection service
• Enforce daily usage limits to ensure fair access
• Improve our AI detection accuracy and user experience
• Display Google AdSense advertisements to free-tier users
• Analyze aggregate usage patterns to improve the product
• Prevent fraud, abuse, and unauthorized automated requests`},{title:"4. AI Processing Disclosure",content:`ScamCheck uses Google Gemini AI (via Firebase Cloud Functions) to analyze submitted content for scam patterns.

Important disclosures about AI processing:
• Your submitted content is sent to Google's AI systems for analysis
• AI results are probabilistic and may contain errors
• ScamCheck verdicts should not be treated as legal or official determinations
• We do not train our models on your submitted content
• Google Cloud's AI usage policies apply to all AI processing

ScamCheck is a decision-support tool. Always use your own judgment and consult official authorities for confirmed fraud cases.`},{title:"5. Third-Party Services",content:`We share data with these third parties solely to operate the service:

Google Firebase (Auth, Firestore, Cloud Functions): User authentication, usage data, and AI request handling. Subject to Google Cloud Privacy Policy.

Google Analytics 4: Anonymous usage analytics. Subject to Google Analytics Terms.

Google AdSense (ID: ca-pub-3102382127523426): Displays ads to free-tier users. Google may use cookies to serve relevant ads. Opt out at google.com/settings/ads.

Google Gemini AI: Processes submitted scam check content to generate verdicts. Subject to Google's Generative AI Terms.

Formsubmit.co: Handles contact form submissions. Your name, email, and message are sent to their servers and forwarded to our email.

We do not sell your personal data to any third party.`},{title:"6. Cookies & Local Storage",content:`ScamCheck uses:
• Firebase Auth session cookies (authentication persistence)
• localStorage: language preference, daily check count for guest users, dismissed banner state
• Google Analytics cookies (_ga, _gid, _ga_*): anonymous usage tracking
• Google AdSense cookies: ad personalization for free users

You can clear cookies and localStorage through your browser settings. Clearing these will reset your guest usage count and language preference.`},{title:"7. Data Retention",content:`Account data: Retained until you delete your account.
Usage counts: Reset daily. Historical counts are not retained beyond 30 days.
Scam check content: Not stored permanently. Processed in real time and discarded.
Analytics data: Retained for 14 months per Google Analytics default settings.
Contact form submissions: Retained in our email inbox per our standard email retention policy.`},{title:"8. Your Rights",content:`Under India's Digital Personal Data Protection Act 2023, GDPR (for EU/UK users), and other applicable laws, you have the right to:
• Access the personal data we hold about you
• Correct inaccurate personal data
• Request deletion of your account and associated data
• Opt out of Google Analytics tracking (browser extension available at tools.google.com/dlpage/gaoptout)
• Opt out of personalized Google ads (google.com/settings/ads)
• Lodge a complaint with your local data protection authority

To exercise these rights, email: contact@asquaresolution.com`},{title:"9. Security",content:"All data is transmitted over HTTPS/TLS. Firebase enforces authentication-based Firestore security rules. AI queries are handled server-side via Firebase Cloud Functions (not directly from your browser to Google AI). We do not store payment card data. We apply the principle of least privilege to all service account credentials."},{title:"10. Children's Privacy",content:"ScamCheck is not directed to children under 13. We do not knowingly collect personal information from children. If you believe a child has created an account, contact us immediately at contact@asquaresolution.com and we will delete the account."},{title:"11. International Users",content:"ScamCheck is operated globally from India. By using ScamCheck, you consent to your data being processed in India and/or in Google Cloud's data centers (which may include servers in the United States and other countries). We apply GDPR-standard protections for EU/EEA users where applicable."},{title:"12. Changes to This Policy",content:"We may update this Privacy Policy to reflect changes in our practices or legal requirements. Material changes will be announced via a notice on ScamCheck or our website. Continued use after the effective date of changes constitutes acceptance of the updated policy."},{title:"13. Contact",content:`A Square Solutions
Email: contact@asquaresolution.com
Website: asquaresolution.com
ScamCheck: scamcheck.asquaresolution.com`}];function d(){return a({title:"Privacy Policy — ScamCheck AI | How We Protect Your Data",description:"ScamCheck Privacy Policy. Learn how A Square Solutions collects, uses, and protects your data when you use our free AI scam detection tool.",canonical:"https://scamcheck.asquaresolution.com/privacy-policy"}),e.jsxs("section",{style:{maxWidth:760,margin:"0 auto",padding:"72px 20px 60px"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:40},children:[e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(99,102,241,0.1)",border:"1px solid rgba(99,102,241,0.25)",borderRadius:100,padding:"6px 18px",marginBottom:20},children:[e.jsx(s,{size:13,style:{color:"var(--accent)"}}),e.jsx("span",{style:{fontSize:11,fontWeight:700,color:"var(--accent)",letterSpacing:"0.1em",textTransform:"uppercase"},children:"Legal"})]}),e.jsx("h1",{style:{fontSize:"clamp(1.7rem,4vw,2.3rem)",fontWeight:800,color:"var(--heading)",marginBottom:10,lineHeight:1.2},children:"Privacy Policy"}),e.jsx("p",{style:{fontSize:13,color:"var(--text-muted)"},children:"Last updated: May 2026 · Effective: May 2026"}),e.jsx("p",{style:{fontSize:13,color:"var(--text-secondary)",marginTop:6},children:"India DPDP Act 2023 + GDPR aligned · Applies to ScamCheck globally"})]}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:20},children:i.map(({title:t,content:o})=>e.jsxs("div",{className:"step-card",children:[e.jsx("h2",{style:{fontSize:15,fontWeight:700,color:"var(--heading)",marginBottom:10},children:t}),e.jsx("p",{style:{fontSize:13,color:"var(--text-secondary)",lineHeight:1.8,whiteSpace:"pre-line"},children:o})]},t))})]})}export{d as default};

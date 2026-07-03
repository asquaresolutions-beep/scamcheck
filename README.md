# ScamCheck — Free AI Scam Detector

**Detect phishing, fraud, and scams in any message, link, or phone number — instantly.**

ScamCheck uses Google's Gemini AI to analyze suspicious content and deliver a clear verdict: Safe, Suspicious, or Scam. Works worldwide. Free, no login required for basic checks.

**Live app:** https://scamcheck.asquaresolution.com

> **Heads up:** The **production** ScamCheck now runs on the [AI Execution Lab platform](https://github.com/asquaresolutions-beep/ai-execution-lab) (Next.js). This repository holds the earlier standalone **React + Vite** build.

---

## Features

- **AI-powered scam detection** — paste any message, URL, or phone number for instant analysis
- **Multi-format input** — text messages, WhatsApp forwards, phishing links, unknown numbers
- **Scam type classification** — phishing, KYC fraud, OTP scams, lottery scams, job fraud, fake bank alerts
- **Hindi & English support** — full bilingual UI and AI responses
- **Daily free checks** — 3 checks/day without account; 10/day with free login
- **Scam alerts feed** — live community-reported scam database
- **Educational content** — guides on scam types, how to report, and how to protect yourself
- **PWA-ready** — installable on Android and iOS

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 18, Vite, plain CSS with CSS variables |
| AI | Google Gemini 1.5 Flash via Cloud Functions |
| Auth | Firebase Authentication (Google OAuth + Email) |
| Database | Firestore |
| Analytics | GA4 + Firebase Analytics |
| Payments | Razorpay (upgrade flow) |
| Hosting | GitHub Pages (gh-pages branch) |

## How It Works

1. User pastes suspicious content into the input box
2. ScamCheck sends the content to a Firebase Cloud Function
3. The Cloud Function queries Gemini AI with a structured prompt
4. Gemini returns a structured verdict (Safe / Suspicious / Scam) with explanation
5. Result is displayed with scam indicators, risk factors, and recommended action

## Privacy

- No message content is stored permanently
- AI analysis happens server-side via Firebase Cloud Functions
- User accounts store only check count and plan status
- No selling of user data

## AI Usage

ScamCheck uses **Google Gemini 1.5 Flash** for:
- Pattern recognition in scam messages
- Link and domain analysis
- Phone number fraud signals
- Cross-language understanding (Hindi + English)

## Roadmap

- [ ] Browser extension for real-time link scanning
- [ ] WhatsApp bot integration
- [ ] SMS forwarding check via shortcode
- [ ] API for developers (Pro plan)
- [ ] Scam report verification by community moderators

## Built By

[A Square Solutions](https://asquaresolution.com) — AI & Digital Growth agency, India.

Also check out our sister tool: **[TrustSeal](https://trustseal.asquaresolution.com)** — AI website trust verification & fact-checker.

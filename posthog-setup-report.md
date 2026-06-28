# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the Neuromorphic website. PostHog (`posthog-js`) is initialized once in `src/main.tsx` using environment variables, and event capture calls have been added to four components covering the site's core user interactions: demo discovery, demo engagement, and founder contact intent.

| Event | Description | File |
|---|---|---|
| `demo_viewed` | User lands on the `/demo` page — top of the conversion funnel | `src/components/DemoPage.tsx` |
| `demo_stopped` | User exits the demo (clicks "Website" or navigates away) | `src/components/DemoPage.tsx` |
| `demo_link_clicked` | User clicks the "Demo" link in the navbar | `src/components/Navbar.tsx` |
| `founder_email_clicked` | User clicks a founder's email link; includes `founder` property | `src/components/ContactSection.tsx` |
| `founder_linkedin_clicked` | User clicks a founder's LinkedIn button; includes `founder` property | `src/components/ContactSection.tsx` |
| `founder_website_clicked` | User clicks a founder's personal website link; includes `founder` property | `src/components/ContactSection.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics dashboard](https://us.posthog.com/project/452386/dashboard/1662957)
- [Demo Views Over Time](https://us.posthog.com/project/452386/insights/6iQMMCy5) — daily demo page visits
- [Demo Link Clicks vs Demo Views](https://us.posthog.com/project/452386/insights/goTHAyhu) — intent-to-arrival drop-off
- [Demo-to-Contact Conversion Funnel](https://us.posthog.com/project/452386/insights/vVWGkPdQ) — demo view → founder email click
- [Founder Contact Engagement](https://us.posthog.com/project/452386/insights/7RzvIbEh) — email, LinkedIn, and website clicks over time
- [Demo Engagement Rate](https://us.posthog.com/project/452386/insights/twDKZt6B) — unique users who viewed vs stopped the demo

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

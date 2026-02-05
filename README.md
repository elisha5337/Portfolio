<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1FNGRXd5HXbvZURclQq4a20xwF3bnoonW

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Create a local environment file from `.env.example` and set your real keys there (do NOT commit):

    - Copy and edit:

       ```bash
       cp .env.example .env.local
       ```

    - Fill in real values for `VITE_AI_API_KEY`, `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY`.

    - Note: Vite requires environment variables exposed to the client to be prefixed with `VITE_`.
3. Run the app:
   `npm run dev`

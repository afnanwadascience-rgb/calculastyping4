# Calculas Typing

A self-contained typing practice web app. No framework, account, server, remote API, analytics SDK, payment system, email integration, OAuth, AdSense, or remote database is included.

## Core flow

Open Calculas Typing → Start → Type → See WPM → Try Again.

The app also includes:

- 30 / 60 / 120 second tests
- Standard, numbers, and punctuation passages
- Live WPM, accuracy, time, and error feedback
- Targeted practice screen
- Local progress dashboard and recent-test history
- Best WPM, average WPM, average accuracy, typing time, streak
- Typewriter sound toggle using Web Audio API; no external audio assets
- Reduce-motion and high-contrast preferences
- Responsive keyboard/mouse-friendly interface
- Local-only persistence with `localStorage`
- Basic PWA manifest

## Run locally

Because this is a static app, you can open `index.html` directly for the core experience. For PWA install behavior, serve the folder over HTTP, for example:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Security considerations

No user account or remote storage is required. Test history and preferences are stored in browser localStorage. The app does not send typing content to a backend. The typewriter sound is generated locally with Web Audio API. Before production deployment, configure a restrictive Content-Security-Policy and security headers at the hosting layer, serve only over HTTPS, and review any future third-party integrations separately.

## Testing instructions

1. Load `index.html` or serve the folder.
2. Click **Start**.
3. Type until the timer ends or the passage is completed.
4. Verify live WPM and accuracy change while typing.
5. Verify the results dialog appears and **Try Again** starts another test.
6. Complete multiple tests and verify **Progress** updates.
7. Open **Settings** and test typewriter sound, reduced motion, and high contrast.
8. Refresh the page and verify preferences/history remain on the same browser.
9. Use the browser developer console to verify there are no runtime errors.

## Known limitations

- Weakness detection is intentionally lightweight in this standalone version and does not claim to use per-keystroke history from older sessions.
- There is no cloud account, cross-device synchronization, social leaderboard, or server-side database.
- The PWA manifest is included, but an offline service worker/cache layer is not included yet.
- No monetization, analytics, email, OAuth, payments, or database integration is configured or claimed as connected.

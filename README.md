# The Stranger in the Mirror

A small dark pixel-art mystery game (Chapter One prototype), inspired by the opening of *Lord of the Mysteries*. Plays in any modern browser, desktop or phone. No install, no build step.

## Play locally
Open `index.html` in a browser. For the service worker and "Add to Home Screen" to work, serve it over HTTP(S), for example `python3 -m http.server` and open `http://localhost:8000`.

## Share it with friends (GitHub Pages)
1. Create a new GitHub repository (public).
2. Upload all files in this folder: `index.html`, `manifest.webmanifest`, `icon.svg`, `sw.js`, `README.md`.
3. Go to **Settings → Pages**. Under "Build and deployment", choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then Save.
4. After a minute your game is live at `https://YOUR-USERNAME.github.io/YOUR-REPO/`. Send that link to friends.

## Play on a phone
Open the link, tap **Begin**, and use the on-screen buttons. Optional: use your browser's **Add to Home Screen** to launch it full screen like an app. Headphones recommended.

## Controls
Arrow keys or WASD to move, E / Space / Enter to talk or examine. On phones, use the buttons under the screen. You can't move while someone is speaking; tap the text box to continue.

## Notes
Fan-made, non-commercial tribute. *Lord of the Mysteries* belongs to its author, Cuttlefish That Loves Diving. All dialogue here is original, and no assets from any game are used. The pixel style is an original homage to handheld RPGs of the DS era.

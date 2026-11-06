# Chess Trainer — Product Deck

A static, dependency-free presentation for a closed MVP pilot.
It is designed to host as a GitHub Pages project site.

## Local preview

```bash
python3 -m http.server 8080
```

Open <http://localhost:8080/>.

## Publish on GitHub Pages

1. Push this repository to `main`.
2. In GitHub: **Settings → Pages**.
3. Source: **Deploy from a branch**.
4. Branch: `main`, folder: `/ (root)`.
5. Keep `.nojekyll` in the repository root.

## What the presentation claims

- Current product is a local MVP.
- 1032 tests passed at the time of writing.
- The public pilot has not launched yet.
- No player outcomes, ratings or business metrics are fabricated.
- Stockfish decides chess correctness; the LLM only writes explanations.
- Product screenshots are real local app captures, not mockups or invented analytics; they intentionally show the current `tleukhanov` profile and visible stats. Replace them with anonymized captures for a wider public campaign.
- The founder slide shows Yeraly Tleukhanov and current communities. Community screenshots are cropped to headers/standings; personal chat text from other members is not included. Public counters can change over time.

## Speaker notes

See `SPEAKER_NOTES.md` for a 5–7 minute talk track and a short live-demo flow.

## Honest limits

The screenshots are real local captures. For a wider public campaign, swap them for privacy-preserving captures from the pilot deployment.

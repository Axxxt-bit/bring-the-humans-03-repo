# bring-the-humans-03-repo

[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/Axxxt-bit/bring-the-humans-03-repo/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/Axxxt-bit/bring-the-humans-03-repo/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

A 25.8-second vertical TikTok ad for make.fun, made new in-session with ffmpeg and PIL from the owner's own Mobile Legends gameplay. It shows the owner's hero (GBG xared) going MANIAC in a team fight, and invites viewers to join with referral code 7qc8jwm1.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=7qc8jwm1&utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03) · AI agents build software for cash rewards</sub>

---

Entry for the make.fun bounty **"Bring the humans with a TikTok ad"**
(`bring-the-humans-03`, $500 over the top 20, places by TikTok views).

- **Account:** @axxxt-bit (Napoleon)
- **TikTok:** @cvmenarik0 (public, 2,136 followers) — the ad posts there.
- **Play code (this bounty):** `makefun-raft-forge-sandal`
- **Referral code (end card):** `7qc8jwm1` — https://make.fun/r/7qc8jwm1
- **Deadline:** Wed 2026-11-25 02:00 WIB. Keep the video public until results are out.

## The video

`ad-tiktok-axxxt-bit-v5.mp4` (25.77 s, 1080x1920, H.264 + AAC), made new
in this session with ffmpeg from the owner's own Mobile Legends gameplay
footage (recorded by the owner himself; the full raw clip is still his).
v5 (2026-11-23): the v4 re-upload was held and never submitted — the owner
decided to use his own ML gameplay instead. The v5 clip is his hero (GBG
xared) in a team fight: SHUTDOWN, MEGA KILL, DOUBLE KILL, TRIPLE KILL, then
MANIAC. The landscape gameplay is reframed to 9:16 with a smooth horizontal
follow-pan tracking the hero. Posted 2026-11-23 ~09:58 WIB with the
AI-generated-content label and the commercial disclosure enabled:

- Hook: "MANIAC SEKALI MAIN!" then "AGENT GUE YANG KERJA" over the fight.
- The game: the owner's own Mobile Legends team fight — his hero goes
  MANIAC while the text explains make.fun. The top entries were studied as
  reference only; the footage is the owner's own gameplay, not a copy of
  anyone else's work.
- Prize: "make.fun - AI AGENT IKUT BOUNTY", "MENANG DUIT BENERAN (USDC)",
  "$500 DIBAGI 20 PEMENANG".
- Call to action: "DAFTARIN AI AGENT LU DI make.fun".
- Brand badge (9:16 overlay, unscaled) from the first frame until the end
  card; referral end card over the last 2.5 s with `7qc8jwm1` typed in.
- All on-screen text is in Indonesian. Sound is the original Mobile
  Legends game audio from the owner's own recording (kill announcements
  included) — no trending song, no TikTok sound, no copied music.

The build script is `build_ad_v5.sh` in the work directory
(`~/workspace/makefun/bring-the-humans-03/`); the press assets it uses are
sha256-verified against https://make.fun/press/manifest.json (edition
2026-11-21).

## Caption (post exactly as written)

```
My AI agent plays ML better than me
Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03
Play code: makefun-raft-forge-sandal
#fyp #mobilelegends #gaming #mlbb #mobilelegendsbangbang
```

Post the video as a video (not a photo post), who can watch it: Everyone,
from the public account. Do not edit, trim, or add effects in TikTok's own
editor — post the file as it is.

## VIDEO.json

The posted video's full address:

```json
{"url": "https://www.tiktok.com/@cvmenarik0/video/7711195141154819336"}
```

## Run it the way the grader does

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.
`main.ts` (Node 22, standard library only) copies VIDEO.json and nothing else.

## Submit

Submitted via the make.fun site on the owner's laptop Chrome + Phantom
approval (the CLI submit needs `--keypair` and the @axxxt-bit wallet keypair
lives only in the owner's Phantom).

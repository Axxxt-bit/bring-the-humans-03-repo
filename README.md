# bring-the-humans-03 — TikTok ad for make.fun

Entry for the make.fun bounty **"Bring the humans with a TikTok ad"**
(`bring-the-humans-03`, $500 over the top 20, places by TikTok views).

- **Account:** @axxxt-bit (Napoleon)
- **TikTok:** @cvmenarik0 (public, 2,136 followers) — the ad posts there.
- **Play code (this bounty):** `makefun-raft-forge-sandal`
- **Referral code (end card):** `7qc8jwm1` — https://make.fun/r/7qc8jwm1
- **Deadline:** Wed 2026-11-25 02:00 WIB. Keep the video public until results are out.

## The video

`ad-tiktok-axxxt-bit.mp4` (25.5 s, 1080x1920, H.264 + AAC), made new in this
session with ffmpeg from make.fun's press pack only:

- Hook: "AI lu cuma buat nanya-nanya doang?" over the ghost-pile-trophy
  illustration on make.fun magenta.
- Middle: press-pack screenshots of the bounty board and a competition page,
  panning slowly, with "make.fun - tempat AI agent ikut bounty, menang duit
  beneran (USDC)" and "$500 dibagi 20 pemenang / Bounty baru tiap hari".
- Call to action: "Daftarin AI agent lu di make.fun".
- Brand badge (9:16 overlay, unscaled) from the first frame until the end
  card; referral end card over the last 2.5 s with `7qc8jwm1` typed in.
- Text on screen + a beat synthesized with ffmpeg in-session. No local TTS
  engine exists on this machine (no espeak/festival/pyttsx3), so the ad is
  text-only plus the self-made beat — compliant with the kit (text, voice,
  or both).

The build script is `build_ad.sh` in the work directory
(`~/workspace/makefun/bring-the-humans-03/`); the press assets it uses are
sha256-verified against https://make.fun/press/manifest.json (edition
2026-11-21). Two press illustrations could not be verified (the server kept
serving truncated copies) and were NOT used.

## Caption (post exactly as written)

```
AI lu cuma buat nanya-nanya doang? AI agent gua ikut bounty di make.fun, menang dapet duit beneran (USDC) 💰
Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03
Play code: makefun-raft-forge-sandal
Daftar pake referral gua: https://make.fun/r/7qc8jwm1
#fyp #AI #crypto #duitonline #makefun
```

Post the video as a video (not a photo post), who can watch it: Everyone,
from the public account. Do not edit, trim, or add effects in TikTok's own
editor — post the file as it is.

## VIDEO.json

Still a placeholder until the video is posted:

```json
{"url": "https://www.tiktok.com/@<handle>/video/<id>"}
```

After posting, replace it with the video's full address
(`https://www.tiktok.com/@cvmenarik0/video/<id>` — the long form, not a
`vm.tiktok.com` short link).

## Run it the way the grader does

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.
`main.ts` (Node 22, standard library only) copies VIDEO.json and nothing else.

## Submit

NOT submitted from the VM: the CLI submit needs `--keypair` and the
@axxxt-bit wallet keypair lives only in the owner's Phantom. Submit goes
via the make.fun site on the owner's laptop Chrome + Phantom approval.

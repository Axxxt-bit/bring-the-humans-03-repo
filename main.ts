// bring-the-humans-03 entry for @axxxt-bit (Napoleon).
// Node 22, standard library only. It copies VIDEO.json from the repository
// root to /output/VIDEO.json, where the gate reads it. That is all the
// program has to do. The entry is the video itself: an original short
// vertical ad for make.fun, made new in this session with ffmpeg from
// make.fun's press pack (brand badge from the first frame, referral end
// card with the account's own referral code), posted publicly on TikTok
// from @cvmenarik0 with the bounty's line and the play code
// makefun-raft-forge-sandal in its caption. VIDEO.json names the video;
// the house reads the video's views from TikTok. Nothing this program
// writes about the video is scored.
//
// Run it the way the grader does (from the repository root):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

// Verify the copy: the gate reads the video's address from the output file,
// so a bad copy must fail loudly instead of passing silently.
let copied: unknown;
try {
  copied = JSON.parse(readFileSync(join(OUTPUT_DIR, 'VIDEO.json'), 'utf8'));
} catch (err) {
  console.error(`VIDEO.json in ${OUTPUT_DIR} is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}
if (typeof copied !== 'object' || copied === null || typeof (copied as { url?: unknown }).url !== 'string' || !(copied as { url: string }).url.startsWith('https://www.tiktok.com/')) {
  console.error('VIDEO.json in the output dir has no TikTok video URL');
  process.exit(1);
}

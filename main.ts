// One Monday morning punchline, written to /output/entry.txt.
// Node 22, standard library only. MAKEFUN_OUTPUT_DIR stands in for /output
// outside the grader. The output is byte-identical on every run.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  "Monday again. My alarm went off, my motivation didn't, and my coffee filed for overtime.";

// The competition gate for this entry: at most 200 characters.
const LIMIT = 200;

if (LINE.length > LIMIT) {
  console.error(`entry is ${LINE.length} characters, over the ${LIMIT} limit`);
  process.exit(1);
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE, 'utf8');
// No trailing newline: the file is exactly the line, nothing more.

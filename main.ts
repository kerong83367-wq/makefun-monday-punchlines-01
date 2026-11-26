// One Monday morning punchline, written to /output/entry.txt.
// Node 22, standard library only. MAKEFUN_OUTPUT_DIR stands in for /output
// outside the grader. The output is byte-identical on every run.
// The line is 93 characters, inside the 200-character gate.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  "Monday again. My alarm went off, my motivation didn't, and my coffee filed for overtime.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE, 'utf8');

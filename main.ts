import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const line = "I meant to text 'see you at the party' but my phone sent 'see you at the pastry.' Now I'm bringing cupcakes to a divorce hearing.";
if (line.length > 199) {
  throw new Error(`Entry is ${line.length} characters; maximum is 199.`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outputPath = join(outputDir, 'entry.txt');

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, line, 'utf8');

if (readFileSync(outputPath, 'utf8') !== line) {
  throw new Error('Written entry does not match the expected text.');
}

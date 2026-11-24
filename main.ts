import { mkdirSync, writeFileSync } from "node:fs";

// One pickup line, spoken by a vending machine to a passing human.
// Machine world: slot B7, the coil drop, exact change, jamming.
// Punch lands on the last few words — and the machine never jams.
const LINE =
  "Hey, beautiful — press B7 and I'll drop something sweet for you. No exact change required, and I never jam on a first date.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");

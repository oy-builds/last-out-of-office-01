import * as fs from "node:fs";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync(
  "/output/entry.txt",
  "I am out of office and will not be returning your emails. I have taken a job as a barista, where my only prompt is \u201cone more, please\u201d and nobody has ever asked me to summarize a meeting.\n",
  "utf-8",
);

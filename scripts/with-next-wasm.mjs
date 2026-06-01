import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const args = process.argv.slice(2);

if (args.length === 0) {
  console.error("Expected a command, for example: node scripts/with-next-wasm.mjs next build");
  process.exit(1);
}

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(scriptDir, "..");
const command = args[0];
const commandArgs = args.slice(1);
const executable =
  process.platform === "win32"
    ? path.join(rootDir, "node_modules", ".bin", `${command}.cmd`)
    : path.join(rootDir, "node_modules", ".bin", command);

const env = { ...process.env };

if (process.platform === "win32") {
  if (env.PATH && env.Path) {
    delete env.PATH;
  }

  if (!env.Path && env.PATH) {
    env.Path = env.PATH;
    delete env.PATH;
  }

  const wasmDir = path.join(rootDir, "node_modules", "@next", "swc-wasm-nodejs");

  if (existsSync(wasmDir)) {
    env.NEXT_TEST_WASM_DIR = wasmDir;
  }
}

for (const [key, value] of Object.entries(env)) {
  if (typeof value !== "string") {
    delete env[key];
  }
}

const child =
  process.platform === "win32"
    ? spawn(
        process.env.ComSpec ?? "cmd.exe",
        ["/d", "/c", executable, ...commandArgs],
        {
          cwd: rootDir,
          env,
          stdio: "inherit",
        }
      )
    : spawn(executable, commandArgs, {
      cwd: rootDir,
      env,
      stdio: "inherit",
    });

child.on("exit", (code) => {
  process.exit(code ?? 1);
});

child.on("error", (error) => {
  console.error(error);
  process.exit(1);
});

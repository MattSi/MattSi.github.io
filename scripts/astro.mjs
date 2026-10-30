// Runs the Astro CLI. On Windows machines where Smart App Control blocks Astro's native
// compiler (an unsigned .node file), it switches to the WebAssembly build of the compiler
// if that package is installed (`npm run setup:windows`). Everywhere else it runs Astro as is.
import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const env = { ...process.env };

if (process.platform === 'win32' && !env.NAPI_RS_FORCE_WASI) {
  try {
    require.resolve('@astrojs/compiler-binding-wasm32-wasi');
    env.NAPI_RS_FORCE_WASI = '1';
    env.NODE_NO_WARNINGS = '1'; // hide Node's "WASI is experimental" notice
  } catch {
    // WebAssembly compiler not installed: use the native one.
  }
}

const astroBin = fileURLToPath(new URL('../node_modules/astro/bin/astro.mjs', import.meta.url));
const child = spawn(process.execPath, [astroBin, ...process.argv.slice(2)], { stdio: 'inherit', env });
child.on('exit', (code, signal) => (signal ? process.kill(process.pid, signal) : process.exit(code ?? 0)));

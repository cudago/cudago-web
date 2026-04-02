import { execSync } from 'child_process';
import { rmSync } from 'fs';
import { resolve } from 'path';

const projectRoot = resolve(process.cwd());

try {
  console.log('[v0] Starting cleanup...');
  
  // Remove directories
  const dirsToRemove = [
    'node_modules',
    '.next',
    '.cache',
    'dist',
    'build',
    '.npm'
  ];
  
  for (const dir of dirsToRemove) {
    const path = resolve(projectRoot, dir);
    try {
      rmSync(path, { recursive: true, force: true });
      console.log(`[v0] Removed ${dir}`);
    } catch (e) {
      console.log(`[v0] ${dir} not found, skipping`);
    }
  }
  
  // Clear npm cache
  console.log('[v0] Clearing npm cache...');
  execSync('npm cache clean --force', { stdio: 'inherit' });
  
  // Remove lock files
  const filestoRemove = [
    'package-lock.json',
    'yarn.lock',
    'pnpm-lock.yaml'
  ];
  
  for (const file of filestoRemove) {
    const path = resolve(projectRoot, file);
    try {
      rmSync(path, { force: true });
      console.log(`[v0] Removed ${file}`);
    } catch (e) {
      console.log(`[v0] ${file} not found, skipping`);
    }
  }
  
  console.log('[v0] Cleanup complete! Dependencies will be reinstalled automatically.');
} catch (error) {
  console.error('[v0] Cleanup failed:', error.message);
  process.exit(1);
}

import { execFileSync } from 'node:child_process'
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, isAbsolute, resolve } from 'node:path'

// Credentials stay with the Sites tools; this utility never accepts or stores them.
const source = resolve(import.meta.dirname, '..')
const destinationArg = process.argv[2]
if (!destinationArg || !isAbsolute(destinationArg)) throw new Error('Usage: node scripts/prepare-sites-copy.mjs /absolute/path/to/opened-sites-checkout')
const destination = resolve(destinationArg)
if (source === destination || destination.startsWith(source + '/')) throw new Error('Use a separate Sites checkout outside this repository.')
const git = (cwd, ...args) => execFileSync('git', args, { cwd, encoding: 'utf8' }).trim()
for (const checkout of [source, destination]) {
  if (git(checkout, 'status', '--porcelain')) throw new Error(`Commit or preserve pending work before synchronizing: ${checkout}`)
}
const manifestPath = '.openai/hosting.json'
const sourceManifest = JSON.parse(readFileSync(resolve(source, manifestPath), 'utf8'))
const destinationManifest = JSON.parse(readFileSync(resolve(destination, manifestPath), 'utf8'))
if (sourceManifest.project_id !== destinationManifest.project_id) throw new Error('Sites project identity mismatch; refusing to replace a different site.')
const sourceFiles = git(source, 'ls-files', '-z').split('\0').filter(Boolean)
const sourceSet = new Set(sourceFiles)
const destinationFiles = git(destination, 'ls-files', '-z').split('\0').filter(Boolean)
// Complete collision checks before mutating the destination.
for (const file of sourceFiles) {
  if (file !== manifestPath && existsSync(resolve(destination, file)) && !destinationFiles.includes(file)) {
    throw new Error(`Untracked destination file would be overwritten: ${file}`)
  }
}
for (const file of destinationFiles) {
  if (!sourceSet.has(file) && !file.startsWith('.openai/')) rmSync(resolve(destination, file))
}
for (const file of sourceFiles) {
  if (file === manifestPath) continue
  const target = resolve(destination, file)
  mkdirSync(dirname(target), { recursive: true })
  cpSync(resolve(source, file), target)
}
const mergedManifest = { ...destinationManifest, ...sourceManifest };
if (!sourceManifest.static) delete mergedManifest.static;
writeFileSync(resolve(destination, manifestPath), JSON.stringify(mergedManifest, null, 2) + '\n')
writeFileSync(resolve(destination, '.openai/github-source.json'), JSON.stringify({
  repository: 'https://github.com/SankalpMore/sankalpmore.github.io',
  commit_sha: git(source, 'rev-parse', 'HEAD'),
  canonical_url: 'https://www.dockio.in/'
}, null, 2) + '\n')
console.log(`Prepared ${sourceFiles.length} source files for ${sourceManifest.project_id}. Build, validate, push, and publish this checkout with Sites.`)

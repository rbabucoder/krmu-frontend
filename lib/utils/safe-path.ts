/**
 * Validates that a URL path segment is safe from path traversal attacks.
 * Use this before constructing URLs from user-supplied path segments.
 */
export function isPathSafe(filePath: string): boolean {
  if (!filePath) return false;
  // Block path traversal sequences (raw and URL-encoded)
  if (filePath.includes("..") || filePath.includes("%2e") || filePath.includes("%2E")) return false;
  // Block null bytes
  if (filePath.includes("\0") || filePath.includes("%00")) return false;
  return true;
}

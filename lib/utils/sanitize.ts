import DOMPurify from "isomorphic-dompurify";

/**
 * Sanitize HTML string to prevent XSS attacks.
 * Use this before passing content to dangerouslySetInnerHTML.
 */
export function sanitizeHtml(dirty: string): string {
  return DOMPurify.sanitize(dirty, {
    ADD_TAGS: ["iframe"],
    ADD_ATTR: [
      "allow",
      "allowfullscreen",
      "frameborder",
      "scrolling",
      "target",
      "rel",
    ],
  });
}

/**
 * Returns a sanitized object ready for dangerouslySetInnerHTML.
 */
export function createSanitizedMarkup(dirty: string): { __html: string } {
  return { __html: sanitizeHtml(dirty) };
}

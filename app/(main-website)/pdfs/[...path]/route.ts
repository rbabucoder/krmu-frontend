export const runtime = 'edge';

export async function GET(request: Request) {
  const url = new URL(request.url);

  // Remove "/pdfs/" from pathname
  const filePath = url.pathname.replace(/^\/pdfs\//, '');

  if (!filePath) {
    return new Response('File path missing', { status: 400 });
  }

  const R2_BASE =
    'https://pub-d4effbf978f745d3994386d73dae804c.r2.dev/pdfs';

  const r2Response = await fetch(`${R2_BASE}/${filePath}`);

  if (!r2Response.ok) {
    return new Response('File not found', { status: 404 });
  }

  return new Response(r2Response.body, {
    headers: {
      'Content-Type':
        r2Response.headers.get('content-type') || 'application/pdf',
      'Cache-Control': 'public, max-age=31536000',
    },
  });
}

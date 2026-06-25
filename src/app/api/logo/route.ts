import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const slug = searchParams.get('slug');
  const color = searchParams.get('color') || 'white';

  if (!slug) {
    return new NextResponse('Slug is required', { status: 400 });
  }

  try {
    // Try SimpleIcons CDN first (most reliable free logo source)
    const response = await fetch(`https://cdn.simpleicons.org/${slug}/${color}`, {
      headers: { 'User-Agent': 'Mozilla/5.0' },
    });

    if (response.ok) {
      const svgText = await response.text();
      return new NextResponse(svgText, {
        headers: {
          'Content-Type': 'image/svg+xml',
          'Cache-Control': 'public, max-age=604800, s-maxage=604800',
        },
      });
    }

    return new NextResponse('Logo not found', { status: 404 });
  } catch {
    return new NextResponse('Error fetching logo', { status: 500 });
  }
}

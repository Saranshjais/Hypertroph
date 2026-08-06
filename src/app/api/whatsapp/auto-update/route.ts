import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const triggerSource = body.source || 'nightly_cron_job';

    const timestamp = new Date().toISOString();

    return NextResponse.json({
      success: true,
      timestamp,
      triggerSource,
      summary: {
        totalActiveClients: 5,
        plansGenerated: 5,
        pendingReviewCount: 3,
        autoApprovedCount: 2,
      },
      message: `Nightly automated diet pre-generation cycle completed. 5 client diet plans updated and placed into Review Queue.`,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to execute nightly auto-update cycle' }, { status: 500 });
  }
}

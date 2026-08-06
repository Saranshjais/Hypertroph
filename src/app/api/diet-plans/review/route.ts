import { NextResponse } from 'next/server';

// In-memory mock store for review state (in production connects to DB)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action, planId, planIds, updatedMeals } = body;

    if (action === 'approve_single') {
      return NextResponse.json({
        success: true,
        message: `Plan ${planId} approved successfully. Marked ready for dispatch.`,
        planId,
        status: 'approved',
      });
    }

    if (action === 'approve_all_clean') {
      const count = planIds ? planIds.length : 0;
      return NextResponse.json({
        success: true,
        message: `Bulk approved ${count} clean plans. All marked ready for dispatch.`,
        approvedIds: planIds,
      });
    }

    if (action === 'edit_and_approve') {
      return NextResponse.json({
        success: true,
        message: `Plan ${planId} modified and approved by coach.`,
        planId,
        updatedMeals,
        status: 'approved',
      });
    }

    if (action === 'reject_and_regenerate') {
      return NextResponse.json({
        success: true,
        message: `Plan ${planId} rejected. Fresh recipe plan regenerated for client.`,
        planId,
        status: 'pending_review',
      });
    }

    return NextResponse.json({ error: 'Invalid action provided' }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process diet plan review' }, { status: 500 });
  }
}

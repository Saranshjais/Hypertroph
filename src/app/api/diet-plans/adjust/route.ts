import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action, recommendationId, clientId, newTargetCalories, newTargetProtein, newTargetCarbs, newTargetFats } = body;

    if (action === 'apply') {
      return NextResponse.json({
        success: true,
        message: `Applied weekly calorie adjustment for client ${clientId}. New Target: ${newTargetCalories} kcal (${newTargetProtein}g P / ${newTargetCarbs}g C / ${newTargetFats}g F).`,
        recommendationId,
        clientId,
        updatedTargets: {
          targetCalories: newTargetCalories,
          targetProtein: newTargetProtein,
          targetCarbs: newTargetCarbs,
          targetFats: newTargetFats,
        },
      });
    }

    if (action === 'dismiss') {
      return NextResponse.json({
        success: true,
        message: `Dismissed recommendation ${recommendationId} for client ${clientId}. Target calories kept unchanged.`,
        recommendationId,
      });
    }

    return NextResponse.json({ error: 'Invalid adjustment action' }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process calorie adjustment' }, { status: 500 });
  }
}

import { NextResponse } from 'next/server';
import { analyzeMealPhoto, processPhysiqueUpdate, resolveClientDoubt } from '@/lib/whatsapp-vision-ai';
import { generateDailyDietPlan } from '@/lib/diet-generator';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, clientId, clientName, goal, medicalFlags, phone, text, photoUrl, mealIndex, weightKg } = body;

    // 1. Handle Meal Photo Verification Payload
    if (type === 'meal_photo') {
      const mockClient = {
        id: clientId || 'c1',
        name: clientName || 'Rahul Sharma',
        phone: phone || '+919876543210',
        gender: 'male' as const,
        goal: goal || 'Fat Loss',
        targetCalories: 1800,
        targetProtein: 160,
        targetCarbs: 160,
        targetFats: 50,
        dietType: 'non-veg' as const,
        allergies: [],
        medicalFlags: [],
        consentOptIn: true,
      };

      const plan = generateDailyDietPlan(mockClient);
      const analysis = analyzeMealPhoto(photoUrl || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c', plan, mealIndex || 0);

      return NextResponse.json({
        success: true,
        type: 'meal_photo_verification',
        analysis,
        whatsappFeedbackMsg: analysis.feedbackMessage,
      });
    }

    // 2. Handle Body Condition / Physique Update Payload
    if (type === 'physique_update') {
      const physiqueLog = processPhysiqueUpdate(
        photoUrl || 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61',
        weightKg || 84.5,
        text
      );

      return NextResponse.json({
        success: true,
        type: 'physique_update_logged',
        physiqueLog,
        whatsappFeedbackMsg: `Physique update logged for ${clientName || 'Client'}. Weight: ${physiqueLog.weightKg}kg. Visual tags: ${physiqueLog.aiBodyConditionTags.join(', ')}. Coach notified!`,
      });
    }

    // 3. Handle WhatsApp Text Question / Doubt Payload
    if (type === 'text_doubt' || text) {
      const doubtResult = resolveClientDoubt(
        text || 'Can I replace chicken with paneer?',
        clientName || 'Rahul Sharma',
        goal || 'Fat Loss',
        medicalFlags || []
      );

      return NextResponse.json({
        success: true,
        type: 'client_doubt_resolved',
        doubtResult,
      });
    }

    return NextResponse.json({ error: 'Invalid WhatsApp webhook event type' }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process WhatsApp webhook payload' }, { status: 500 });
  }
}

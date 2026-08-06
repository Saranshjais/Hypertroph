import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { planId, clientId, clientName, phone, planStatus, messageText } = body;

    // CRITICAL SAFETY CHECK: Refuse unapproved plans
    if (planStatus !== 'approved') {
      return NextResponse.json(
        {
          error: 'SAFETY BLOCKED: Diet plan must be approved by coach before sending via WhatsApp.',
          code: 'UNAPPROVED_PLAN_BLOCKED',
          planId,
          planStatus,
        },
        { status: 403 }
      );
    }

    // Simulate WhatsApp Cloud API / Twilio dispatch
    const messageId = `wa_msg_${Date.now()}_${Math.random().toString(36).substring(7)}`;

    return NextResponse.json({
      success: true,
      messageId,
      status: 'delivered',
      timestamp: new Date().toISOString(),
      recipient: {
        clientId,
        clientName,
        phone,
      },
      detail: `WhatsApp diet plan card successfully dispatched to ${clientName} (${phone}).`,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process WhatsApp dispatch request' }, { status: 500 });
  }
}

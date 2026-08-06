// WhatsApp Message Formatting & wa.me Link Builder
// Generates clean, factual, non-clinical WhatsApp text cards with macro breakdown, meal timing, and 1-click web links.

import { GeneratedDietPlan } from './diet-generator';

export function formatWhatsAppDietMessage(
  clientName: string,
  plan: GeneratedDietPlan,
  customGreeting?: string
): string {
  const greeting = customGreeting || `*HYPERTROPH OS — DAILY NUTRITION PLAN* 🚀`;
  const dateFormatted = new Date(plan.date).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });

  let message = `${greeting}\n`;
  message += `👤 *Client:* ${clientName}\n`;
  message += `📅 *Date:* ${dateFormatted}\n`;
  message += `🔥 *Daily Goal:* ${plan.totalCalories} kcal | *P:* ${plan.totalProtein}g | *C:* ${plan.totalCarbs}g | *F:* ${plan.totalFats}g\n`;
  message += `------------------------------------\n\n`;

  plan.meals.forEach((meal, idx) => {
    message += `*MEAL ${idx + 1}: ${meal.name.toUpperCase()}* (${meal.time})\n`;
    meal.items.forEach(item => {
      message += `• ${item.foodName} — *${item.portionGrams}g* (${item.calories} kcal, ${item.protein}g P)\n`;
    });
    message += `_Subtotal: ${meal.totalCalories} kcal | P: ${meal.totalProtein}g | C: ${meal.totalCarbs}g | F: ${meal.totalFats}g_\n\n`;
  });

  message += `💧 *Hydration Goal:* 3.5 - 4.0 Liters Water\n`;
  message += `💪 *Note:* Consume meals on time for optimal muscle recovery and energy.\n`;
  message += `------------------------------------\n`;
  message += `Reply *DONE* after completing your meals today!`;

  return message;
}

export function buildWhatsAppWebUrl(phone: string, text: string): string {
  // Clean phone number to digits only
  const cleanPhone = phone.replace(/\D/g, '');
  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}

export interface WhatsAppDispatchPayload {
  clientId: string;
  phone: string;
  planId: string;
  planStatus: 'pending_review' | 'approved' | 'rejected' | 'dispatched';
  messageText: string;
}

export interface WhatsAppDispatchResult {
  success: boolean;
  messageId?: string;
  status: 'sent' | 'delivered' | 'failed' | 'blocked_unapproved';
  error?: string;
}

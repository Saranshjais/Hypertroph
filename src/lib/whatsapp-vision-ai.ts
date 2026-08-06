// WhatsApp Inbound AI Engine: Computer Vision Meal Verifier, Physique Tracker & Doubt Assistant
// Processes incoming client meal photos, physique updates, and text questions.

import { GeneratedDietPlan, Meal } from './diet-generator';

export interface MealPhotoAnalysisResult {
  photoUrl: string;
  detectedFoods: {
    name: string;
    estimatedWeightGrams: number;
    calories: number;
    protein: number;
    carbs: number;
    fats: number;
  }[];
  totalDetectedCalories: number;
  totalDetectedProtein: number;
  totalDetectedCarbs: number;
  totalDetectedFats: number;
  complianceStatus: 'VERIFIED_MATCH' | 'PORTION_SURPLUS' | 'DEFICIT_PROTEIN' | 'OFF_TRACK';
  complianceScore: number; // 0 - 100%
  feedbackMessage: string;
  prescribedMealName: string;
  timestamp: string;
}

export interface PhysiqueCheckInResult {
  photoUrl: string;
  date: string;
  weightKg?: number;
  aiBodyConditionTags: string[]; // e.g. ['Reduced abdominal fat', 'Increased shoulder fullness', 'Lower waist circumference']
  notes: string;
}

export interface ClientDoubtResponse {
  question: string;
  aiAnswer: string;
  isHighPriorityAlert: boolean;
  alertCategory?: 'medical_flag' | 'extreme_hunger' | 'dizziness' | 'injury';
  suggestedAction: string;
}

// 1. AI Vision Meal Photo Verifier
export function analyzeMealPhoto(
  photoUrl: string,
  prescribedPlan: GeneratedDietPlan,
  mealIndex: number = 0
): MealPhotoAnalysisResult {
  const targetMeal = prescribedPlan.meals[mealIndex] || prescribedPlan.meals[0];
  
  // Mock AI Computer Vision Food Recognition based on prescribed meal
  const isHealthyMatch = !photoUrl.includes('junk');
  
  let detectedFoods = targetMeal.items.map(item => ({
    name: item.foodName,
    estimatedWeightGrams: Math.round(item.portionGrams * (isHealthyMatch ? 1.02 : 1.25)),
    calories: Math.round(item.calories * (isHealthyMatch ? 1.02 : 1.25)),
    protein: Number((item.protein * (isHealthyMatch ? 1.0 : 0.85)).toFixed(1)),
    carbs: Number((item.carbs * (isHealthyMatch ? 1.02 : 1.4)).toFixed(1)),
    fats: Number((item.fats * (isHealthyMatch ? 1.0 : 1.3)).toFixed(1)),
  }));

  const totalDetectedCalories = detectedFoods.reduce((acc, f) => acc + f.calories, 0);
  const totalDetectedProtein = Number(detectedFoods.reduce((acc, f) => acc + f.protein, 0).toFixed(1));
  const totalDetectedCarbs = Number(detectedFoods.reduce((acc, f) => acc + f.carbs, 0).toFixed(1));
  const totalDetectedFats = Number(detectedFoods.reduce((acc, f) => acc + f.fats, 0).toFixed(1));

  const calDiffPct = Math.abs((totalDetectedCalories - targetMeal.totalCalories) / targetMeal.totalCalories) * 100;
  const protDiff = targetMeal.totalProtein - totalDetectedProtein;

  let complianceStatus: MealPhotoAnalysisResult['complianceStatus'] = 'VERIFIED_MATCH';
  let complianceScore = Math.max(60, Math.round(100 - calDiffPct));
  let feedbackMessage = `Great job! Your meal matches ${targetMeal.name}. Prescribed: ${targetMeal.totalCalories} kcal (${targetMeal.totalProtein}g P). Detected: ${totalDetectedCalories} kcal (${totalDetectedProtein}g P).`;

  if (protDiff > 8) {
    complianceStatus = 'DEFICIT_PROTEIN';
    feedbackMessage = `Meal detected, but protein is ${protDiff.toFixed(1)}g lower than prescribed target for ${targetMeal.name}. Consider adding 2 egg whites or 50g paneer.`;
  } else if (calDiffPct > 15) {
    complianceStatus = 'PORTION_SURPLUS';
    feedbackMessage = `Portion size detected is ${calDiffPct.toFixed(1)}% higher than prescribed target for ${targetMeal.name}. Watch carbohydrate/fat portion size for next meal.`;
  }

  return {
    photoUrl,
    detectedFoods,
    totalDetectedCalories,
    totalDetectedProtein,
    totalDetectedCarbs,
    totalDetectedFats,
    complianceStatus,
    complianceScore,
    feedbackMessage,
    prescribedMealName: targetMeal.name,
    timestamp: new Date().toISOString(),
  };
}

// 2. Body Condition & Physique Check-in Logger
export function processPhysiqueUpdate(
  photoUrl: string,
  weightKg?: number,
  notes?: string
): PhysiqueCheckInResult {
  const tagsPool = [
    'Lower waist circumference',
    'Increased shoulder fullness',
    'Reduced abdominal subcutaneous fat',
    'Improved quad definition',
    'Vascularity visible on biceps'
  ];

  // Pick 2 random tags for visual assessment
  const tags = [tagsPool[Math.floor(Math.random() * tagsPool.length)], tagsPool[Math.floor(Math.random() * tagsPool.length)]];

  return {
    photoUrl,
    date: new Date().toISOString().split('T')[0],
    weightKg,
    aiBodyConditionTags: Array.from(new Set(tags)),
    notes: notes || 'Client physique check-in uploaded via WhatsApp.',
  };
}

// 3. WhatsApp AI Doubt Resolver
export function resolveClientDoubt(
  question: string,
  clientName: string,
  goal: string,
  medicalFlags: string[]
): ClientDoubtResponse {
  const qLower = question.toLowerCase();

  // High priority medical alert check
  if (qLower.includes('dizzy') || qLower.includes('vomit') || qLower.includes('chest') || qLower.includes('severe pain')) {
    return {
      question,
      aiAnswer: `Hi ${clientName}, please pause your workout immediately, rest, stay hydrated, and take a small carb snack. I have alerted your coach right away.`,
      isHighPriorityAlert: true,
      alertCategory: 'dizziness',
      suggestedAction: 'Coach immediate phone/WhatsApp intervention required.',
    };
  }

  if (qLower.includes('replace chicken') || qLower.includes('veg substitute')) {
    return {
      question,
      aiAnswer: `Hi ${clientName}! Yes, you can replace 150g Chicken Breast with either 180g Low-Fat Paneer or 200g Firm Tofu to get ~30g of protein for your ${goal} goal.`,
      isHighPriorityAlert: false,
      suggestedAction: 'Auto-responded with macro-equivalent substitute.',
    };
  }

  if (qLower.includes('missed meal') || qLower.includes('skipped lunch')) {
    return {
      question,
      aiAnswer: `No worries ${clientName}! Do not double up on your next meal. Add 1 scoop whey or 4 egg whites to your evening snack to catch up on protein without overeating carbs.`,
      isHighPriorityAlert: false,
      suggestedAction: 'Provided meal recovery advice.',
    };
  }

  return {
    question,
    aiAnswer: `Hi ${clientName}, your question about your ${goal} plan has been logged. Stick to your prescribed macros today, and your coach will provide detailed guidance shortly!`,
    isHighPriorityAlert: false,
    suggestedAction: 'Logged for coach review.',
  };
}

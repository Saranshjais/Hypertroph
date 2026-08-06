// Medical-Aware & Portion-Calculated Diet Generator
// Pulls from nutrition-data.ts and validates with plan-validator.ts

import { filterSafeFoods, FoodItem } from './nutrition-data';
import { validateDietPlan, ValidationResult } from './plan-validator';

export interface ClientProfile {
  id: string;
  name: string;
  phone: string;
  gender: 'male' | 'female';
  goal: 'Fat Loss' | 'Lean Bulk' | 'Recomp';
  targetCalories: number;
  targetProtein: number;
  targetCarbs: number;
  targetFats: number;
  dietType: 'veg' | 'non-veg' | 'eggetarian';
  allergies: string[];
  medicalFlags: string[];
  notes?: string;
  consentOptIn: boolean;
  calorieFloorOverride?: number;
}

export interface MealItem {
  foodId: string;
  foodName: string;
  portionGrams: number;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  allergens: string[];
}

export interface Meal {
  id: string;
  name: string;
  time: string;
  items: MealItem[];
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFats: number;
}

export interface GeneratedDietPlan {
  id: string;
  clientId: string;
  clientName: string;
  date: string; // YYYY-MM-DD
  status: 'pending_review' | 'approved' | 'rejected' | 'dispatched';
  meals: Meal[];
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFats: number;
  validation: ValidationResult;
  isAutoApproveEligible: boolean;
  createdAt: string;
}

export function generateDailyDietPlan(
  client: ClientProfile,
  dateStr: string = new Date().toISOString().split('T')[0],
  dayOffset: number = 0
): GeneratedDietPlan {
  // 1. Get filtered safe foods for this client
  const safeFoods = filterSafeFoods(client.dietType, client.allergies, client.medicalFlags);

  const proteinFoods = safeFoods.filter(f => f.category === 'protein' || f.category === 'dairy');
  const carbFoods = safeFoods.filter(f => f.category === 'carbs' || f.category === 'fruits');
  const fatFoods = safeFoods.filter(f => f.category === 'fats');
  const vegFoods = safeFoods.filter(f => f.category === 'vegetables');

  // Meal distribution ratios
  // Meal 1: Breakfast (25% cal)
  // Meal 2: Lunch (35% cal)
  // Meal 3: Evening Snack / Post-Workout (15% cal)
  // Meal 4: Dinner (25% cal)

  const mealConfigs = [
    { id: 'm1', name: 'Meal 1: High Protein Breakfast', time: '08:30 AM', calPct: 0.25 },
    { id: 'm2', name: 'Meal 2: Anabolic Lunch', time: '01:30 PM', calPct: 0.35 },
    { id: 'm3', name: 'Meal 3: Pre/Post-Workout Snack', time: '05:30 PM', calPct: 0.15 },
    { id: 'm4', name: 'Meal 4: Recovery Dinner', time: '08:30 PM', calPct: 0.25 },
  ];

  const meals: Meal[] = [];
  let planCal = 0;
  let planProt = 0;
  let planCarb = 0;
  let planFat = 0;

  mealConfigs.forEach((config, idx) => {
    const targetMealCal = client.targetCalories * config.calPct;
    const targetMealProt = client.targetProtein * config.calPct;

    // Pick food based on dayOffset rotation
    const pFood = proteinFoods[(idx + dayOffset) % proteinFoods.length] || proteinFoods[0];
    const cFood = carbFoods[(idx + dayOffset + 1) % carbFoods.length] || carbFoods[0];
    const vFood = vegFoods[idx % vegFoods.length] || vegFoods[0];

    // Compute portions in grams live
    // Protein portion needed
    const pGrams = pFood ? Math.round((targetMealProt / pFood.proteinPer100g) * 100) : 100;
    
    // Remaining calories for carbs
    const pCal = pFood ? (pGrams / 100) * pFood.caloriesPer100g : 0;
    const remCal = Math.max(0, targetMealCal - pCal);
    const cGrams = cFood ? Math.round((remCal / cFood.caloriesPer100g) * 100) : 150;

    const items: MealItem[] = [];

    if (pFood) {
      const cal = Math.round((pGrams / 100) * pFood.caloriesPer100g);
      const prot = Number(((pGrams / 100) * pFood.proteinPer100g).toFixed(1));
      const carb = Number(((pGrams / 100) * pFood.carbsPer100g).toFixed(1));
      const fat = Number(((pGrams / 100) * pFood.fatsPer100g).toFixed(1));
      items.push({
        foodId: pFood.id,
        foodName: pFood.name,
        portionGrams: pGrams,
        calories: cal,
        protein: prot,
        carbs: carb,
        fats: fat,
        allergens: pFood.allergens,
      });
    }

    if (cFood) {
      const cal = Math.round((cGrams / 100) * cFood.caloriesPer100g);
      const prot = Number(((cGrams / 100) * cFood.proteinPer100g).toFixed(1));
      const carb = Number(((cGrams / 100) * cFood.carbsPer100g).toFixed(1));
      const fat = Number(((cGrams / 100) * cFood.fatsPer100g).toFixed(1));
      items.push({
        foodId: cFood.id,
        foodName: cFood.name,
        portionGrams: cGrams,
        calories: cal,
        protein: prot,
        carbs: carb,
        fats: fat,
        allergens: cFood.allergens,
      });
    }

    if (vFood && (idx === 1 || idx === 3)) {
      items.push({
        foodId: vFood.id,
        foodName: vFood.name,
        portionGrams: 150,
        calories: 27,
        protein: 1.4,
        carbs: 5.4,
        fats: 0.3,
        allergens: vFood.allergens,
      });
    }

    const mCal = items.reduce((acc, i) => acc + i.calories, 0);
    const mProt = items.reduce((acc, i) => acc + i.protein, 0);
    const mCarb = items.reduce((acc, i) => acc + i.carbs, 0);
    const mFat = items.reduce((acc, i) => acc + i.fats, 0);

    planCal += mCal;
    planProt += mProt;
    planCarb += mCarb;
    planFat += mFat;

    meals.push({
      id: config.id,
      name: config.name,
      time: config.time,
      items,
      totalCalories: mCal,
      totalProtein: Number(mProt.toFixed(1)),
      totalCarbs: Number(mCarb.toFixed(1)),
      totalFats: Number(mFat.toFixed(1)),
    });
  });

  const totalCalories = Math.round(planCal);
  const totalProtein = Number(planProt.toFixed(1));
  const totalCarbs = Number(planCarb.toFixed(1));
  const totalFats = Number(planFat.toFixed(1));

  // Run defense-in-depth validator
  const validation = validateDietPlan(
    {
      gender: client.gender,
      targetCalories: client.targetCalories,
      targetProtein: client.targetProtein,
      targetCarbs: client.targetCarbs,
      targetFats: client.targetFats,
      allergies: client.allergies,
      medicalFlags: client.medicalFlags,
      calorieFloorOverride: client.calorieFloorOverride,
    },
    {
      totalCalories,
      totalProtein,
      totalCarbs,
      totalFats,
      meals,
    }
  );

  const isAutoApproveEligible = validation.isValid && !validation.hasWarnings;

  return {
    id: `plan_${client.id}_${dateStr}`,
    clientId: client.id,
    clientName: client.name,
    date: dateStr,
    status: 'pending_review',
    meals,
    totalCalories,
    totalProtein,
    totalCarbs,
    totalFats,
    validation,
    isAutoApproveEligible,
    createdAt: new Date().toISOString(),
  };
}

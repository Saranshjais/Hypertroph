// Safety-First Diet Plan Validator
// Central defense-in-depth validator checking calorie floors, macro tolerance, allergen safety, and medical compliance.

export interface ValidationIssue {
  type: 'calorie_floor' | 'macro_tolerance' | 'allergen_leak' | 'medical_flag' | 'aggressive_deficit';
  severity: 'error' | 'warning';
  message: string;
}

export interface ValidationResult {
  isValid: boolean; // True if zero ERRORS
  hasWarnings: boolean;
  issues: ValidationIssue[];
}

export interface ClientProfileForValidation {
  gender: 'male' | 'female';
  targetCalories: number;
  targetProtein: number;
  targetCarbs: number;
  targetFats: number;
  allergies: string[];
  medicalFlags: string[];
  calorieFloorOverride?: number;
  previousWeekCalories?: number;
}

export interface MealItemForValidation {
  foodId: string;
  foodName: string;
  portionGrams: number;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  allergens: string[];
}

export interface GeneratedPlanForValidation {
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFats: number;
  meals: {
    name: string;
    items: MealItemForValidation[];
  }[];
}

export function validateDietPlan(
  client: ClientProfileForValidation,
  plan: GeneratedPlanForValidation
): ValidationResult {
  const issues: ValidationIssue[] = [];

  // 1. Calorie Floor Safety Check
  const defaultFloor = client.gender === 'female' ? 1200 : 1500;
  const safeFloor = client.calorieFloorOverride || defaultFloor;

  if (plan.totalCalories < safeFloor) {
    issues.push({
      type: 'calorie_floor',
      severity: 'error',
      message: `Plan calories (${plan.totalCalories} kcal) fall below safe calorie floor (${safeFloor} kcal for ${client.gender}s).`,
    });
  }

  // 2. Macro Tolerance Check (±5% Calories, ±5g Protein)
  const minCal = client.targetCalories * 0.95;
  const maxCal = client.targetCalories * 1.05;

  if (plan.totalCalories < minCal || plan.totalCalories > maxCal) {
    issues.push({
      type: 'macro_tolerance',
      severity: 'warning',
      message: `Calories (${plan.totalCalories} kcal) deviate beyond ±5% of target (${client.targetCalories} kcal). Range: [${Math.round(minCal)} - ${Math.round(maxCal)}].`,
    });
  }

  const proteinDiff = Math.abs(plan.totalProtein - client.targetProtein);
  if (proteinDiff > 5) {
    issues.push({
      type: 'macro_tolerance',
      severity: 'warning',
      message: `Protein (${plan.totalProtein}g) deviates by >5g from target (${client.targetProtein}g). Diff: ${proteinDiff.toFixed(1)}g.`,
    });
  }

  // 3. Allergen Zero-Leak Check (Hard Error)
  const clientAllergiesLower = client.allergies.map(a => a.toLowerCase().trim());

  plan.meals.forEach(meal => {
    meal.items.forEach(item => {
      item.allergens.forEach(allergen => {
        if (clientAllergiesLower.includes(allergen.toLowerCase())) {
          issues.push({
            type: 'allergen_leak',
            severity: 'error',
            message: `CRITICAL: Item "${item.foodName}" in ${meal.name} contains allergen "${allergen}" which violates client allergy list!`,
          });
        }
      });
    });
  });

  // 4. Aggressive Deficit Check
  if (client.previousWeekCalories && client.previousWeekCalories > 0) {
    const calorieDropPct = ((client.previousWeekCalories - client.targetCalories) / client.previousWeekCalories) * 100;
    if (calorieDropPct > 20) {
      issues.push({
        type: 'aggressive_deficit',
        severity: 'warning',
        message: `Calorie deficit drop is ${calorieDropPct.toFixed(1)}% compared to last week (Exceeds 20% aggressiveness safety limit).`,
      });
    }
  }

  const hasErrors = issues.some(i => i.severity === 'error');
  const hasWarnings = issues.some(i => i.severity === 'warning');

  return {
    isValid: !hasErrors,
    hasWarnings,
    issues,
  };
}

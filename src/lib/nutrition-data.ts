// Unified IFCT (Indian Food Composition Tables) + USDA Nutrition Dataset
// Single source of truth for per-100g nutritional values

export interface FoodItem {
  id: string;
  name: string;
  category: 'protein' | 'carbs' | 'fats' | 'dairy' | 'vegetables' | 'fruits';
  dietType: 'veg' | 'non-veg' | 'eggetarian';
  caloriesPer100g: number;
  proteinPer100g: number;
  carbsPer100g: number;
  fatsPer100g: number;
  fiberPer100g: number;
  allergens: string[]; // e.g. ['lactose', 'gluten', 'peanuts', 'soy', 'eggs', 'fish']
  giIndex: 'low' | 'medium' | 'high'; // Glycemic Index for diabetic safety checks
  source: 'IFCT' | 'USDA';
}

export const FOOD_DATABASE: FoodItem[] = [
  // --- PROTEIN SOURCES ---
  {
    id: 'paneer_raw',
    name: 'Raw Low-Fat Paneer',
    category: 'protein',
    dietType: 'veg',
    caloriesPer100g: 265,
    proteinPer100g: 18.3,
    carbsPer100g: 3.2,
    fatsPer100g: 20.8,
    fiberPer100g: 0,
    allergens: ['lactose'],
    giIndex: 'low',
    source: 'IFCT',
  },
  {
    id: 'chicken_breast',
    name: 'Boneless Skinless Chicken Breast',
    category: 'protein',
    dietType: 'non-veg',
    caloriesPer100g: 165,
    proteinPer100g: 31.0,
    carbsPer100g: 0,
    fatsPer100g: 3.6,
    fiberPer100g: 0,
    allergens: [],
    giIndex: 'low',
    source: 'USDA',
  },
  {
    id: 'egg_whole',
    name: 'Whole Eggs (Boiled)',
    category: 'protein',
    dietType: 'eggetarian',
    caloriesPer100g: 155,
    proteinPer100g: 12.6,
    carbsPer100g: 1.1,
    fatsPer100g: 10.6,
    fiberPer100g: 0,
    allergens: ['eggs'],
    giIndex: 'low',
    source: 'IFCT',
  },
  {
    id: 'egg_whites',
    name: 'Egg Whites (Cooked)',
    category: 'protein',
    dietType: 'eggetarian',
    caloriesPer100g: 52,
    proteinPer100g: 11.0,
    carbsPer100g: 0.7,
    fatsPer100g: 0.2,
    fiberPer100g: 0,
    allergens: ['eggs'],
    giIndex: 'low',
    source: 'USDA',
  },
  {
    id: 'tofu_firm',
    name: 'Firm Tofu',
    category: 'protein',
    dietType: 'veg',
    caloriesPer100g: 144,
    proteinPer100g: 17.3,
    carbsPer100g: 2.8,
    fatsPer100g: 8.7,
    fiberPer100g: 2.3,
    allergens: ['soy'],
    giIndex: 'low',
    source: 'IFCT',
  },
  {
    id: 'whey_isolate',
    name: 'Whey Protein Isolate Scoop (30g)',
    category: 'protein',
    dietType: 'veg',
    caloriesPer100g: 370,
    proteinPer100g: 83.3,
    carbsPer100g: 3.3,
    fatsPer100g: 1.6,
    fiberPer100g: 0,
    allergens: ['lactose'],
    giIndex: 'low',
    source: 'USDA',
  },
  {
    id: 'fish_rohu',
    name: 'Rohu Fish Fillet',
    category: 'protein',
    dietType: 'non-veg',
    caloriesPer100g: 97,
    proteinPer100g: 19.7,
    carbsPer100g: 0,
    fatsPer100g: 1.3,
    fiberPer100g: 0,
    allergens: ['fish'],
    giIndex: 'low',
    source: 'IFCT',
  },
  {
    id: 'chana_boiled',
    name: 'Boiled Black Chana (Kala Chana)',
    category: 'protein',
    dietType: 'veg',
    caloriesPer100g: 164,
    proteinPer100g: 8.9,
    carbsPer100g: 27.4,
    fatsPer100g: 2.6,
    fiberPer100g: 7.6,
    allergens: [],
    giIndex: 'low',
    source: 'IFCT',
  },
  {
    id: 'moong_sprouts',
    name: 'Steamed Moong Sprouts',
    category: 'protein',
    dietType: 'veg',
    caloriesPer100g: 30,
    proteinPer100g: 3.0,
    carbsPer100g: 5.9,
    fatsPer100g: 0.2,
    fiberPer100g: 1.8,
    allergens: [],
    giIndex: 'low',
    source: 'IFCT',
  },

  // --- CARBOHYDRATE SOURCES ---
  {
    id: 'roti_whole_wheat',
    name: 'Whole Wheat Roti (Atta)',
    category: 'carbs',
    dietType: 'veg',
    caloriesPer100g: 247,
    proteinPer100g: 9.6,
    carbsPer100g: 48.2,
    fatsPer100g: 1.7,
    fiberPer100g: 11.5,
    allergens: ['gluten'],
    giIndex: 'medium',
    source: 'IFCT',
  },
  {
    id: 'white_rice_cooked',
    name: 'Steamed Basmati White Rice',
    category: 'carbs',
    dietType: 'veg',
    caloriesPer100g: 130,
    proteinPer100g: 2.7,
    carbsPer100g: 28.2,
    fatsPer100g: 0.3,
    fiberPer100g: 0.4,
    allergens: [],
    giIndex: 'high',
    source: 'IFCT',
  },
  {
    id: 'brown_rice_cooked',
    name: 'Steamed Brown Rice',
    category: 'carbs',
    dietType: 'veg',
    caloriesPer100g: 112,
    proteinPer100g: 2.6,
    carbsPer100g: 23.5,
    fatsPer100g: 0.9,
    fiberPer100g: 1.8,
    allergens: [],
    giIndex: 'low',
    source: 'USDA',
  },
  {
    id: 'rolled_oats',
    name: 'Rolled Oats (Cooked in water)',
    category: 'carbs',
    dietType: 'veg',
    caloriesPer100g: 71,
    proteinPer100g: 2.5,
    carbsPer100g: 12.0,
    fatsPer100g: 1.5,
    fiberPer100g: 1.7,
    allergens: [],
    giIndex: 'low',
    source: 'USDA',
  },
  {
    id: 'sweet_potato_boiled',
    name: 'Boiled Sweet Potato',
    category: 'carbs',
    dietType: 'veg',
    caloriesPer100g: 86,
    proteinPer100g: 1.6,
    carbsPer100g: 20.1,
    fatsPer100g: 0.1,
    fiberPer100g: 3.0,
    allergens: [],
    giIndex: 'low',
    source: 'USDA',
  },
  {
    id: 'poha_cooked',
    name: 'Vegetable Poha',
    category: 'carbs',
    dietType: 'veg',
    caloriesPer100g: 180,
    proteinPer100g: 3.1,
    carbsPer100g: 34.5,
    fatsPer100g: 3.8,
    fiberPer100g: 2.1,
    allergens: [],
    giIndex: 'medium',
    source: 'IFCT',
  },

  // --- FAT SOURCES & NUTS ---
  {
    id: 'almonds_raw',
    name: 'Raw Almonds (Badam)',
    category: 'fats',
    dietType: 'veg',
    caloriesPer100g: 579,
    proteinPer100g: 21.2,
    carbsPer100g: 21.6,
    fatsPer100g: 49.9,
    fiberPer100g: 12.5,
    allergens: ['nuts'],
    giIndex: 'low',
    source: 'IFCT',
  },
  {
    id: 'peanut_butter',
    name: 'Natural Unsweetened Peanut Butter',
    category: 'fats',
    dietType: 'veg',
    caloriesPer100g: 588,
    proteinPer100g: 25.1,
    carbsPer100g: 20.0,
    fatsPer100g: 50.0,
    fiberPer100g: 6.0,
    allergens: ['peanuts'],
    giIndex: 'low',
    source: 'USDA',
  },
  {
    id: 'olive_oil',
    name: 'Extra Virgin Olive Oil',
    category: 'fats',
    dietType: 'veg',
    caloriesPer100g: 884,
    proteinPer100g: 0,
    carbsPer100g: 0,
    fatsPer100g: 100.0,
    fiberPer100g: 0,
    allergens: [],
    giIndex: 'low',
    source: 'USDA',
  },

  // --- DAIRY & GREEK YOGURT ---
  {
    id: 'greek_yogurt_plain',
    name: 'Plain Greek Yogurt (Hung Curd / Dahi)',
    category: 'dairy',
    dietType: 'veg',
    caloriesPer100g: 59,
    proteinPer100g: 10.0,
    carbsPer100g: 3.6,
    fatsPer100g: 0.4,
    fiberPer100g: 0,
    allergens: ['lactose'],
    giIndex: 'low',
    source: 'IFCT',
  },
  {
    id: 'cow_milk_toned',
    name: 'Toned Cow Milk (Warm)',
    category: 'dairy',
    dietType: 'veg',
    caloriesPer100g: 58,
    proteinPer100g: 3.2,
    carbsPer100g: 4.7,
    fatsPer100g: 3.0,
    fiberPer100g: 0,
    allergens: ['lactose'],
    giIndex: 'low',
    source: 'IFCT',
  },

  // --- FRUITS & VEGETABLES ---
  {
    id: 'apple_fresh',
    name: 'Fresh Red Apple with skin',
    category: 'fruits',
    dietType: 'veg',
    caloriesPer100g: 52,
    proteinPer100g: 0.3,
    carbsPer100g: 13.8,
    fatsPer100g: 0.2,
    fiberPer100g: 2.4,
    allergens: [],
    giIndex: 'low',
    source: 'USDA',
  },
  {
    id: 'banana_ripe',
    name: 'Ripe Banana',
    category: 'fruits',
    dietType: 'veg',
    caloriesPer100g: 89,
    proteinPer100g: 1.1,
    carbsPer100g: 22.8,
    fatsPer100g: 0.3,
    fiberPer100g: 2.6,
    allergens: [],
    giIndex: 'medium',
    source: 'IFCT',
  },
  {
    id: 'mixed_salad',
    name: 'Cucumber, Tomato & Spinach Salad',
    category: 'vegetables',
    dietType: 'veg',
    caloriesPer100g: 18,
    proteinPer100g: 0.9,
    carbsPer100g: 3.6,
    fatsPer100g: 0.2,
    fiberPer100g: 1.4,
    allergens: [],
    giIndex: 'low',
    source: 'IFCT',
  }
];

export function findFoodById(id: string): FoodItem | undefined {
  return FOOD_DATABASE.find(f => f.id === id);
}

export function filterSafeFoods(
  dietType: 'veg' | 'non-veg' | 'eggetarian',
  allergensToAvoid: string[],
  medicalFlags: string[] = []
): FoodItem[] {
  return FOOD_DATABASE.filter(food => {
    // Diet type compatibility check
    if (dietType === 'veg' && food.dietType !== 'veg') return false;
    if (dietType === 'eggetarian' && food.dietType === 'non-veg') return false;

    // Allergen hard filter
    const hasAllergen = food.allergens.some(a => 
      allergensToAvoid.map(x => x.toLowerCase()).includes(a.toLowerCase())
    );
    if (hasAllergen) return false;

    // Medical flag check (e.g., if Diabetic, exclude High GI carbs)
    if (medicalFlags.includes('diabetes') && food.giIndex === 'high') {
      return false;
    }

    return true;
  });
}

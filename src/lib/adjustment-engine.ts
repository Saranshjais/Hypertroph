// Weekly Progress & Calorie Adjustment Recommendation Engine
// Analyzes client weigh-in logs and generates recommendation cards for coach approval

export interface WeightLog {
  date: string; // YYYY-MM-DD
  weightKg: number;
  waistCm?: number;
}

export interface ClientProgressData {
  clientId: string;
  clientName: string;
  goal: 'Fat Loss' | 'Lean Bulk' | 'Recomp';
  currentCalories: number;
  currentProtein: number;
  currentCarbs: number;
  currentFats: number;
  weightLogs: WeightLog[];
}

export interface AdjustmentRecommendation {
  id: string;
  clientId: string;
  clientName: string;
  date: string;
  goal: string;
  reason: string;
  suggestedCalorieDelta: number; // e.g. -150 or +150
  newTargetCalories: number;
  newTargetProtein: number;
  newTargetCarbs: number;
  newTargetFats: number;
  status: 'pending' | 'applied' | 'dismissed';
}

export function evaluateProgressAndRecommend(
  clientData: ClientProgressData
): AdjustmentRecommendation | null {
  const { weightLogs, goal, currentCalories, currentProtein } = clientData;

  if (!weightLogs || weightLogs.length < 2) {
    return null; // Not enough logs to detect trend
  }

  // Sort logs by date ascending
  const sortedLogs = [...weightLogs].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const initialLog = sortedLogs[0];
  const latestLog = sortedLogs[sortedLogs.length - 1];

  const weightDiff = latestLog.weightKg - initialLog.weightKg;
  const initialWeight = initialLog.weightKg;
  const pctChange = (weightDiff / initialWeight) * 100;

  // FAT LOSS GOAL EVALUATION
  if (goal === 'Fat Loss') {
    // Plateau check: Less than 0.2kg loss over 2+ weeks
    if (weightDiff >= -0.2) {
      const suggestedDelta = -150;
      const newCal = Math.max(1200, currentCalories + suggestedDelta);
      // Keep protein high, reduce carbs slightly
      const newCarbs = Math.max(80, Math.round((newCal * 0.4) / 4));
      const newFats = Math.round((newCal * 0.25) / 9);
      const newProt = currentProtein;

      return {
        id: `adj_${clientData.clientId}_${Date.now()}`,
        clientId: clientData.clientId,
        clientName: clientData.clientName,
        date: new Date().toISOString().split('T')[0],
        goal,
        reason: `Fat loss plateau detected (Weight unchanged over past ${sortedLogs.length} logs: ${initialWeight}kg -> ${latestLog.weightKg}kg).`,
        suggestedCalorieDelta: suggestedDelta,
        newTargetCalories: newCal,
        newTargetProtein: newProt,
        newTargetCarbs: newCarbs,
        newTargetFats: newFats,
        status: 'pending',
      };
    }

    // Excessive loss rate check: >1% bodyweight loss per week
    if (pctChange < -2.5) {
      const suggestedDelta = +100;
      const newCal = currentCalories + suggestedDelta;
      const newCarbs = Math.round((newCal * 0.45) / 4);
      const newFats = Math.round((newCal * 0.25) / 9);

      return {
        id: `adj_${clientData.clientId}_${Date.now()}`,
        clientId: clientData.clientId,
        clientName: clientData.clientName,
        date: new Date().toISOString().split('T')[0],
        goal,
        reason: `Rapid weight loss detected (${Math.abs(pctChange).toFixed(1)}% drop). Adding +100 kcal buffer to protect lean muscle mass.`,
        suggestedCalorieDelta: suggestedDelta,
        newTargetCalories: newCal,
        newTargetProtein: currentProtein,
        newTargetCarbs: newCarbs,
        newTargetFats: newFats,
        status: 'pending',
      };
    }
  }

  // LEAN BULK GOAL EVALUATION
  if (goal === 'Lean Bulk') {
    if (weightDiff <= 0.1) {
      const suggestedDelta = +150;
      const newCal = currentCalories + suggestedDelta;
      const newCarbs = Math.round((newCal * 0.5) / 4);
      const newFats = Math.round((newCal * 0.25) / 9);

      return {
        id: `adj_${clientData.clientId}_${Date.now()}`,
        clientId: clientData.clientId,
        clientName: clientData.clientName,
        date: new Date().toISOString().split('T')[0],
        goal,
        reason: `Lean bulk plateau detected (Weight static at ${latestLog.weightKg}kg). Increasing calories by +150 kcal.`,
        suggestedCalorieDelta: suggestedDelta,
        newTargetCalories: newCal,
        newTargetProtein: currentProtein,
        newTargetCarbs: newCarbs,
        newTargetFats: newFats,
        status: 'pending',
      };
    }
  }

  return null;
}

export function attendancePercent(attended = 0, conducted = 0) {
  if (!Number.isFinite(attended) || !Number.isFinite(conducted) || conducted <= 0) return 0;
  return Math.min(100, Math.max(0, (attended / conducted) * 100));
}
export function shortageStatus(attended, conducted, threshold = 75) {
  const percentage = attendancePercent(attended, conducted);
  const classesNeeded = percentage >= threshold ? 0 :
    Math.max(0, Math.ceil((threshold * conducted - 100 * attended) / (100 - threshold)));
  return { percentage, isShortage: percentage < threshold, classesNeeded };
}

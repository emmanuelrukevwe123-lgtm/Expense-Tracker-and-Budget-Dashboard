const STORAGE_KEY = "expense_tracker_state";

export const saveState = (state) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

export const loadState = () => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return null;
  return JSON.parse(saved);
};

export const saveSearchState = (q: string, page: number) => {
  localStorage.setItem("last_search_state", JSON.stringify({ q, page }));
};

export const getSearchState = () => {
  if (typeof window === "undefined") return null;

  const raw = localStorage.getItem("last_search_state");
  if (!raw) return null;

  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
};

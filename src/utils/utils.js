export const getLocaleFromLS = () => localStorage.getItem("locale") || "en";

export const getModeFromLS = () => localStorage.getItem("mode") || "light";

export const setLocaleToLS = (locale) => {
  localStorage.setItem("locale", locale);
};

export const setModeToLS = (mode) => {
  localStorage.setItem("mode", mode);
};

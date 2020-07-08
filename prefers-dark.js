function checkDarkMode() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

if (checkDarkMode()) {
  document.documentElement.classList.add('mode-dark');
} else {
  document.documentElement.classList.remove('mode-dark');
}

function setTheme() {
  const root = document.documentElement;
  const currentTime = new Date().getHours();

  if (currentTime > 17 || currentTime < 6) {
    root.classList.add('mode-dark');
  }
}
setTheme();

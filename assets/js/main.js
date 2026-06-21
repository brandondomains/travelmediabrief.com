const root = document.body;
const toggle = document.getElementById('themeToggle');
const toggleText = document.querySelector('.theme-toggle__text');
const storageKey = 'travel-media-brief-theme';

const applyTheme = (theme) => {
  const isDark = theme === 'dark';
  root.classList.toggle('dark-theme', isDark);
  toggleText.textContent = isDark ? 'Light mode' : 'Dark mode';
};

const savedTheme = localStorage.getItem(storageKey);
applyTheme(savedTheme === 'dark' ? 'dark' : 'light');

toggle.addEventListener('click', () => {
  const nextTheme = root.classList.contains('dark-theme') ? 'light' : 'dark';
  localStorage.setItem(storageKey, nextTheme);
  applyTheme(nextTheme);
});

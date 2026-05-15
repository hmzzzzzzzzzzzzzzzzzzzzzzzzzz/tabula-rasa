const stickyBar = document.querySelector(".sticky-bar");

function moveEraser() {
  if (!stickyBar) return;
  const maxMove = window.innerHeight * 0.68 - 128;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
  const y = Math.max(0, Math.min(maxMove, progress * maxMove));
  stickyBar.style.setProperty("--eraser-y", `${y}px`);
}

window.addEventListener("scroll", moveEraser, { passive: true });
window.addEventListener("resize", moveEraser);
moveEraser();

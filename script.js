// Klávesová navigace: ← předchozí, → další
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    const prev = document.querySelector('a[data-prev="1"]');
    if (prev) window.location.href = prev.href;
  }
  if (e.key === "ArrowRight") {
    const next = document.querySelector('a[data-next="1"]');
    if (next) window.location.href = next.href;
  }
});

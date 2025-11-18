export function initScrollLogger(): void {
  window.addEventListener("scroll", () => {
    console.log("Scrolling...");
  });
}

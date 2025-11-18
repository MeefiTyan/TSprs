export function addFadeInAnimation(elementId: string): void {
  const el = document.getElementById(elementId) as HTMLDivElement;
  if (el) el.classList.add("fade-in");
}

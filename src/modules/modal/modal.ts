export function initModal(
  openBtnId: string,
  modalId: string,
  closeBtnId: string
): void {
  const openBtn = document.getElementById(openBtnId) as HTMLButtonElement;
  const modal = document.getElementById(modalId) as HTMLDivElement;
  const closeBtn = document.getElementById(closeBtnId) as HTMLButtonElement;

  openBtn.addEventListener("click", () => (modal.style.display = "block"));
  closeBtn.addEventListener("click", () => (modal.style.display = "none"));
}

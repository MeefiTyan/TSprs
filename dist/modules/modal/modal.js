export function initModal(openBtnId, modalId, closeBtnId) {
    const openBtn = document.getElementById(openBtnId);
    const modal = document.getElementById(modalId);
    const closeBtn = document.getElementById(closeBtnId);
    openBtn.addEventListener("click", () => (modal.style.display = "block"));
    closeBtn.addEventListener("click", () => (modal.style.display = "none"));
}

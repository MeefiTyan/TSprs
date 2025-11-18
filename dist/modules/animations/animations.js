export function addFadeInAnimation(elementId) {
    const el = document.getElementById(elementId);
    if (el)
        el.classList.add("fade-in");
}

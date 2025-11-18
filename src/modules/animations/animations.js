"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addFadeInAnimation = addFadeInAnimation;
function addFadeInAnimation(elementId) {
    const el = document.getElementById(elementId);
    if (el)
        el.classList.add("fade-in");
}
//# sourceMappingURL=animations.js.map
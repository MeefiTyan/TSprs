"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const openBtn = document.getElementById("openModal");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeModal");
openBtn.addEventListener("click", () => modal.style.display = "block");
closeBtn.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("scroll", () => {
    console.log("scrolling...");
});
const box = document.getElementById("animated");
box.classList.add("fade-in");
async function loadPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    const container = document.getElementById("posts");
    posts.slice(0, 5).forEach(post => {
        const el = document.createElement("div");
        el.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
        container.appendChild(el);
    });
}
loadPosts();
//# sourceMappingURL=main.js.map
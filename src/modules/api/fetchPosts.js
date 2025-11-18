"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadPosts = loadPosts;
async function loadPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    const container = document.getElementById("posts");
    posts.slice(0, 5).forEach((post) => {
        const el = document.createElement("div");
        el.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
        container.appendChild(el);
    });
}
//# sourceMappingURL=fetchPosts.js.map
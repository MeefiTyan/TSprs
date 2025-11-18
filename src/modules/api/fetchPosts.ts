import type { Post } from "../../types/globalTypes";

export async function loadPosts(): Promise<void> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();

  const container = document.getElementById("posts") as HTMLDivElement;

  posts.slice(0, 5).forEach((post: Post) => {
    const el = document.createElement("div");
    el.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
    container.appendChild(el);
  });
}

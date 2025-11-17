const openBtn = document.getElementById("openModal") as HTMLButtonElement;
const modal = document.getElementById("modal") as HTMLDivElement;
const closeBtn = document.getElementById("closeModal") as HTMLButtonElement;

openBtn.addEventListener("click", () => modal.style.display = "block");
closeBtn.addEventListener("click", () => modal.style.display = "none");

window.addEventListener("scroll", () => {
  console.log("scrolling...");
});

const box = document.getElementById("animated") as HTMLDivElement;
box.classList.add("fade-in");

async function loadPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: { title: string; body: string }[] = await res.json();

  const container = document.getElementById("posts") as HTMLDivElement;

  posts.slice(0, 5).forEach(post => {
    const el = document.createElement("div");
    el.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
    container.appendChild(el);
  });
}

loadPosts();

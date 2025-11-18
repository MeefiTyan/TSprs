import { initModal } from "./modules/modal/modal";
import { initScrollLogger } from "./modules/scroll/scroll";
import { addFadeInAnimation } from "./modules/animations/animations";
import { loadPosts } from "./modules/api/fetchPosts";
initModal("openModal", "modal", "closeModal");
initScrollLogger();
addFadeInAnimation("animated");
loadPosts();

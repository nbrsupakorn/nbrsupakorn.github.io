document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.querySelector(".load").style.background = "transparent";
        setTimeout(() => {
            document.querySelector(".load").remove();
        }, 200);
    }, 500);
})
const post = document.getElementById("post");
const numPost = Math.floor(Math.random() * 3) + 1;

let opencomment = false;
function openComment() {
    const element = document.querySelector(".container-1");
    if (opencomment) {
        element.classList.remove("this");
        opencomment = false;
    } else {
        element.classList.add("this");
        opencomment = true;
    }
}

post.querySelectorAll("img").forEach((element) => {
    element.src = `./post${numPost}.jpg`;
})
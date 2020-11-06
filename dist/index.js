let player = document.querySelector(".player");
let enemy = document.querySelector(".enemy");

document.body.addEventListener("keypress", jump);

function jump() {
  if (player.classList != "jump") {
    player.classList.add("jump");

    setTimeout(() => {
      player.classList.remove("jump");
    }, 1000);
  }
}

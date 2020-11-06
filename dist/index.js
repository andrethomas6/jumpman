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

let checkCollision = setInterval(() => {
  let playerTop = parseInt(
    window.getComputedStyle(player).getPropertyValue("top")
  );
  let enemyLeft = parseInt(
    window.getComputedStyle(enemy).getPropertyValue("left")
  );

  if (enemyLeft < 35 && enemyLeft > -30 && playerTop > 375) {
    enemy.style.animation = "none";
    enemy.style.display = "none";
    alert(" You Lose!!! ");
  }
}, 10);

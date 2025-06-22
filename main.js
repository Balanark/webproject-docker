const list = document.querySelector(".list");

function makeFirstListItemsButtonDisabled() {
  const listItems = list.querySelectorAll("li");
  listItems.forEach((item, index) => {
    const button = item.querySelector("button");
    button.disabled = index === 0;
  });
}


list.addEventListener("click", async (event) => {
  const button = event.target.closest("button");
  if (!button || button.disabled) return;

  const item = button.parentElement;
  item.style.viewTransitionName = "woosh";
  item.querySelector("svg").style.viewTransitionName = "tony-hawk";

  const transition = document.startViewTransition(() => {
    const firstListItem = list.querySelector("li:first-child");
    list.insertBefore(item, firstListItem);
  });

  try {
    await transition.finished;
  } finally {
    item.style.viewTransitionName = "";
    item.querySelector("svg").style.viewTransitionName = "";
    makeFirstListItemsButtonDisabled();
  }
});

makeFirstListItemsButtonDisabled();

function changeBackground() {

  const colors = ["#ffcccb", "#d4f1f6", "#c2fba4", "#f0e69c", "#e6e6fa"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];


  document.body.style.backgroundColor = randomColor;
}

function changeBackground() {
  const colors = ["#ffcccb", "#d4f1f4", "#c1fba4", "#f0e68c", "#e6e6fa"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

document.querySelector(".color-change-btn").addEventListener("click", changeBackground);

const todos = document.querySelectorAll(".todo");
const todas_criacao = document.querySelectorAll(".criacao");
let drag = null;

todos.forEach((e) => {
  e.addEventListener("dragstart", dragStart);
  e.addEventListener("dragend", dragEnd);
});

function dragStart() {
  drag = this;
  setTimeout(() => {
    this.style.display = "none";
  }, 0);
}

function dragEnd() {
  drag = null;
  setTimeout(() => {
    this.style.display = "block";
  }, 0);
}

todas_criacao.forEach((criacao) => {
    criacao.addEventListener("dragover", dragOver);
    criacao.addEventListener("dragenter", dragEnter);
    criacao.addEventListener("dragleave", dragLeave);
    criacao.addEventListener("drop", dragDrop);
});

function dragOver(e) {
  e.preventDefault();
}

function dragEnter() {
  this.style.border = "1px #ccc";
  this.style.transform = "scale(1.1)"
}

function dragLeave() {
  this.style.border = "none";
  this.style.transform = "scale(1.0)"
}

function dragDrop() {
  this.style.border = "none";
  this.style.transform = "scale(1.0)"
  this.appendChild(drag);
}
/*criação do dragdrop*/
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



/*craiação do modal*/
const btns = document.querySelectorAll("[data-target-modal]");
const close_modals = document.querySelectorAll(".close-modal");

const overlay = document.getElementById("overlay");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.targetModal).classList.add("active");
    overlay.classList.add("active");
  });
});

close_modals.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal");
    modal.classList.remove("active");
    overlay.classList.remove("active");
  });
});




window.onclick = (event) => {
  if (event.target == overlay) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => modal.classList.remove("active"));
    overlay.classList.remove("active");
  }
};



/*craiação do item */
const todo_submit = document.getElementById("input_submit");
todo_submit.addEventListener("click", createTodo);

function createTodo() {
  const todo_div = document.createElement("div");
  const input_val = document.getElementById("input_add").value;
  const txt = document.createTextNode(input_val);

  todo_div.appendChild(txt);
  todo_div.classList.add("todo");
  todo_div.setAttribute("draggable", "true");


  const span = document.createElement("span");
  const span_txt = document.createTextNode("\u00D7");
  span.classList.add("close");
  span.appendChild(span_txt);

  todo_div.appendChild(span);

  n_criacao.appendChild(todo_div);

  span.addEventListener("click", () => {
    span.parentElement.style.display = "none";
  });

  todo_div.addEventListener("dragstart", dragStart);
  todo_div.addEventListener("dragend", dragEnd);

  document.getElementById("todo_input").value = "";
  todo_form.classList.remove("active");
  overlay.classList.remove("active");

}


const close_btns = document.querySelectorAll(".close");

close_btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.style.display = "none";
  });
});
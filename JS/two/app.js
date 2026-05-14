const inputElement = document.getElementById("title");
const createBtn = document.getElementById("create");
const listElement = document.getElementById("list");

const notes = [
  {
    title: "One",
    Completed: false,
  },
  {
    title: "two",
    Completed: true,
  },
];

function render() {
  listElement.innerHTML = "";
  if (notes.length === 0){
    listElement.innerHTML = '<p>No elements</p>'
  }
  for (let i = 0; i < notes.length; i++) {
    listElement.insertAdjacentHTML("beforeend", getNoteTemplate(notes[i], i));
  }
}

function getNoteTemplate(note, index) {
  return `<li
          class="list-group-item d-flex justify-content-between align-items-center">
          <span class="${
            note.Completed ? "text-decoration-line-through" : ""
          }">${note.title}</span>
          <span>
            <span class="btn btn-small btn-${
              note.Completed ? "warnning" : "success"
            }" data-index="${index}" data-type="toggle">&check;</span>
            <span class="btn btn-small btn-danger" data-index="${index}" data-type="remove">&times;</span>
          </span>
        </li>`;
}

listElement.onclick = function (event) {
  if (event.target.dataset.index) {
    const index = Number(event.target.dataset.index)
    const type = event.target.dataset.type

    if (type === 'toggle'){
        notes[index].Completed = !notes[index].Completed
    } else if (type === 'remove'){
        notes.splice(index, 1)
  }
  render()
}
};

createBtn.onclick = function () {
  if (!inputElement.value) return;

  const newNote = {
    title: inputElement.value,
    Completed: false,
  };
  notes.push(newNote);
  render();
  inputElement.value = "";
};

render();

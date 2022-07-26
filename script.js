let listname = [];

const validateinput = () => {
  let name = document.querySelector("#name").value;
  listname.push({
    name: name,
  });
  console.log(name);
};

function addnew() {
  validateinput();
  renderlist();
}

function renderlist() {
  let ten = `
  `;
  listname.map((value, index) => {
    ten =
      ten +
      `
    <div class="box">
        <label class="todo-name completed-todo">
        <p>${index + 1}</p>
          <input type="checkbox" class="todo-checkbox" />
          <span class="custom-checkbox"></span>
          <span class="text">${value.name}</span>
        </label>
        <button class="btn-delete">
          <img src="./R.png" alt="" />
        </button>
      </div>
    `;
  });
  document.getElementById("table").innerHTML = ten;
  document.getElementById("number").innerHTML = `${listname.length + " items"}`;
}

function xoa() {}

const tbody = document.querySelector("tbody");
const theadRow = document.querySelector("thead tr");
const submit = document.querySelector("button");
submit.addEventListener(
  "click",
  () => {
    const newCol = document.createElement("th");
    newCol.innerHTML = "Remove";
    theadRow.append(newCol);
  },
  {
    once: true,
  }
);

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const dataArr = [
    Name.value,
    surname.value,
    age.value,
    city.value,
    address.value,
    education1.checked,
    education2.checked,
    work.checked,
  ];
  const educationInfo = education1.checked
    ? "middle"
    : education2.checked
    ? "high"
    : "Məlumat yoxdur";
  class User {
    constructor(...dataArr) {
      this.name = Name.value;
      this.surname = surname.value;
      this.age = age.value;
      this.city = city.value;
      this.address = address.value;
      this.education = educationInfo;
      this.work = work.checked;
    }
  }
  const row = document.createElement("tr");
  tbody.append(row);
  const user = new User();
  for (const key in user) {
    const cell = document.createElement("td");
    cell.style.textAlign = "center";
    row.append(cell);
    cell.innerHTML = user[key];
  }
  const deleteBtn = document.createElement("button");
  const deleteBtnCell = document.createElement("td");
  row.append(deleteBtnCell);
  deleteBtnCell.append(deleteBtn);
  deleteBtnCell.style.textAlign = "center";
  deleteBtn.innerText = "Sil";

  deleteBtn.addEventListener("click", () => {
    row.remove();
  });
  document.querySelector("form").reset();
});

window.onload = function () {
  employees();
  document.getElementById("btn").onclick = employees;
};
async function employees() {
  let res = await fetch("https://randomuser.me/api/?results=5");
  let emp = await res.json();
  displayEmp(emp.results);
}

function displayEmp(emp) {
  const empD = document.getElementById("emp");
  empD.innerHTML = "";
  for (let i = 0; i < emp.length; i++) {
    let e = emp[i];
    let temp = `
    <div class="container" style="max-width: 540px;">
    <div class="content">   
        <img src="${e.picture.large}"/>
        <div class="aligner">
            <label  class="name">${
              e.name.first + " " + e.name.last
            }</label></br>
            <label >${e.gender}</label></br>
            <label >${e.phone}</label></br>
            <label>${e.email}</label>
        </div>
        </div>
        <hr>
      </div>  
        `
      ;


    let divp = document.createElement("div");
    divp.innerHTML = temp;
    divp.classList = "row";
    empD.appendChild(divp);
  }
}

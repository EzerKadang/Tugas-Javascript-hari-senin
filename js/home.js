let taskData = [
  {
    Task: "Memasak",
    Status: "Done",
    Date: new Date(2023, 10, 15, 12, 50),
  },
  {
    Task: "Mandi",
    Status: "To-Do",
    Date: new Date(2023, 10, 15, 13),
  },
];

function getDataUser() {
  const dataUser = localStorage.getItem("user");

  if (dataUser) {
    const conData = JSON.parse(dataUser);

    const imgElm = document.getElementById("img_user");
    imgElm.src = conData.imgUrl;

    const nameElm = document.getElementById("username");
    nameElm.innerHTML = conData.username;
  } else {
    window.location.href = "login.html";
  }
}

function onLogout() {
  localStorage.removeItem("user");
  window.location.href = "login.html";
}

function convDate(Date) {
  const newDate = Date;

  const jam = newDate.getHours();
  const menit = newDate.getMinutes();

  const hari = newDate.getDay();
  const bulan = newDate.getMonth();
  const tahun = newDate.getFullYear();
  const hasil = `${hari}-${bulan}-${tahun} ${jam}:${menit}`;

  return hasil;
}

function displayData() {
  const bodyTable = document.getElementById("body_table");

  taskData.forEach((item) => {
    const rowTable = document.createElement("tr");
    rowTable.innerHTML = `<tr>
    <td>${item.Task}</td>
    <td>${item.Status}</td>
    <td>${convDate(item.Date)}</td>
  </tr>`;

    bodyTable.appendChild(rowTable);
  });
}

getDataUser();
displayData();

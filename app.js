// const title = document.getElementById('title');
// let seconds = 11;

//  let intervalSeconds = setInterval(() => {
//    if (seconds <= 10 && seconds >= 7) {
//      seconds--;
//    title.textContent = seconds--;
//      title.style.color = "green";
//   } else if (seconds < 7 && seconds >= 4) {
//      title.textContent = seconds--;
//      title.style.color = "yellow";
//    } else if (seconds > 0) {
//      title.textContent = seconds--;
//      title.style.color = "red";
//    } else {
//      clearInterval(intervalSeconds);
//    }
//  }, 1000);


// let ism = prompt("Ismingizni kiriting");
// let vazn = +prompt("Vazn kiriting");
// let boy = +prompt("Boyingizni kiriting");

// let bmi = vazn / boy ** 2;
// if (bmi < 18.5) {
//   title.textContent = `${ism} sizning tahlil ${Math.trunc(bmi)} va siz ozginsiz `;
// } else if (bmi > 18.5 && bmi < 25) {
//   title.textContent = `${ism} sizning tahlil ${Math.trunc(
//     bmi
//   )} siz ortachasiz😉 `;
// } else if (bmi >= 25 && bmi <= 30) {
//   title = `sizning tahlil${bmi} va siz semisiz `;
// } else {
//   title.textContent = `${ism} sizning tahlil${Math.trunc(
//     bmi
//   )} siz kasalsiz va o'zingizni avaylang🥲`;
// }

// let randomNamber = Math.trunc(Math.random() * 20) + 1;
// let userNamber = +prompt("1 dan 20 gacha  raqam kiriting ");
// document.getElementById('title').textContent = randomNamber;
// if (userNamber == randomNamber) {
//   document.getElementById("title").textContent = "Siz togri toptingiz ";
// } else {
//   document.getElementById(
//     "title"
//   ).textContent = `Siz notogri adashdiz :( kompyutor oylagan raqam = ${randomNamber}`;
// }
// setTimeout(() => {
//   console.log("random");
// }, 5000);
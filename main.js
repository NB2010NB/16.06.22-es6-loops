// let student1 = {
//     firstName: "natan",
//     lastName: "belay",
//     age: 22,
// }
// let student2 = {
//     firstName: "nati",
//     lastName: "josef",
//     age: 13,
// }
// let student3 = {
//     firstName: "avi",
//     lastName: "lala",
//     age: 27,
// }
// let student4 = {
//     firstName: "yoni",
//     lastName: "gad",
//     age: 16,
// }
// let arrayUser;
// let div3 = document.getElementById("div1");
// function printFname(arrayUser) {
//     arrayUser.forEach(user => {
//         if (user.age > 18) {
//             console.log(user.firstName);
//         }
//         else {
//             console.log(user.lastName);
//         }
//     });
// } printFname([student1, student2, student3, student4])


//**********2************* */

// let classUser = document.getElementsByClassName("userE");

// for (tot of classUser) {
// console.log(tot);
// }
// let textStyle = document.getElementById("styleText");
// function changeColorText() {

//     textStyle.style.color = "blue";
// }
// function changeText() {
//     for (let tot of classUser) {
//         tot.innerText ="hello";
//     }
// }

//*****3**** */

const userObject = {
    firstName: "natan",
    lastName: "belay",
    age: 25,
    city: "rehovot",
}
for (let key in userObject) {
    console.log( `${key} : ${userObject[key]}`);
}
// const mkElem = document.querySelector(".make");
// const modelElem = document.querySelector(".model");
// const colorElem = document.querySelector(".color");
// const priceElem = document.querySelector(".price");
// const regnumElem = document.querySelector(".regnum");

// const selectColorElem = document.querySelector(".selectColor");
// const selectModelElem = document.querySelector(".selectModel");

// const colorsElem = document.querySelector(".colors");
// const makesElem = document.querySelector(".makes");
// // const carApi = CarsApi();

// // console.log(carApi)
// const getData = () => {
//     axios
//         .get('https://api-tutor.herokuapp.com/v1/colors')
//         .then((result)=>{
//             result.data.forEach(element => {
//                 let ul = document.createElement('ul')
//                 colorsElem.appendChild(ul)
//                 let trow = document.createElement('li');
//                 trow.innerHTML = element;
//                 ul.appendChild(trow);

//             });

//         })
//     axios
//         .get('https://api-tutor.herokuapp.com/v1/makes')
//         .then((result)=>{
//             result.data.forEach(element => {
//             let ul = document.createElement('ul')
//             makesElem.appendChild(ul)
//             let tr = document.createElement('li');
//             tr.innerHTML = element;
//             ul.appendChild(tr);

//         });

//     })
//     axios
//     .get('https://api-tutor.herokuapp.com/v1/cars')
//     .then((result) => {
//         result.data.forEach(element => {

//             let tr = document.createElement('tr');
//             let tr2 = document.createElement('tr');
//             let tr3 = document.createElement('tr');
//             let tr4 = document.createElement('tr');
//             let tr5 = document.createElement('tr');

//             tr.innerHTML = element.make;
//             tr2.innerHTML = element.model;
//             tr3.innerHTML = element.color;
//             tr4.innerHTML = element.price;
//             tr5.innerHTML = element.reg_number;

//             mkElem.appendChild(tr);
//             modelElem.appendChild(tr2);
//             colorElem.appendChild(tr3);
//             priceElem.appendChild(tr4);
//             regnumElem.appendChild(tr5);

//         });
//     })

// }
// getData()

// // const filterData = () => {
//     // window.onload = () => {
//     //     console.log(document.querySelector("#emp-table > tbody > tr:nth-child(2) > td:nth-child(2) ").innerHTML);
//     // }
// // }
// // filterData()
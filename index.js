const colorElem = document.querySelector(".col");
const makeElem = document.querySelector(".mak");
const carElem = document.querySelector(".ca");

const selectColorELem = document.querySelector("#select-colors");
const selectBrandELem = document.querySelector("#select-brands");
filterBtnElem = document.querySelector(".filterBtn");

const hbsElem = document.querySelector(".hbsTemplate").innerHTML;
const hbsTemplate = Handlebars.compile(hbsElem);

let colors;
let makes;
let cars;


const getCarData = () => {

    axios
        .get('https://api-tutor.herokuapp.com/v1/cars')
        .then(result =>{
            cars = result.data.splice(0,30);
            carElem.innerHTML = hbsTemplate({
                car: cars
            })
        })
    axios
        .get('https://api-tutor.herokuapp.com/v1/makes')
        .then(result =>{
            makes = result.data
            makeElem.innerHTML = hbsTemplate({
                make: makes
            })
        })
    axios
        .get('https://api-tutor.herokuapp.com/v1/colors')
        .then(result =>{
            colors = result.data
            colorElem.innerHTML = hbsTemplate({
                color: colors
            })
        })
}

getCarData()




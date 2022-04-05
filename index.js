const main = document.querySelector(".main");
const carElem = document.querySelector(".cars");

const hbsElem = document.querySelector(".hbsTemplate").innerHTML;
const tableHbsElem = document.querySelector(".tableHbsTemplate").innerHTML;

const hbsTemplate = Handlebars.compile(hbsElem);
const tableHbsTemplate = Handlebars.compile(tableHbsElem);

let colors;
let makes;
let cars;

const getCarData = async() => {
    await axios
        .get('https://api-tutor.herokuapp.com/v1/makes')
        .then(result =>{
            makes = result.data
        });
    await axios
        .get('https://api-tutor.herokuapp.com/v1/colors')
        .then(result =>{
            colors = result.data
 
        });
    await axios
        .get('https://api-tutor.herokuapp.com/v1/cars')
        .then(result =>{
            cars = result.data
        });
}

const filterColorBrand = async() => {

const selectColorELem = document.querySelector("#select-colors");
const selectBrandELem = document.querySelector("#select-brands");

let selectBrand  = selectBrandELem.value;
let selectColor = selectColorELem.value;

if(selectColor == "all" && selectBrand == "all"){
    await axios
        .get('https://api-tutor.herokuapp.com/v1/cars')
        .then(result => {
                cars = result.data
        });
    }else if(selectBrand != "all" && selectColor == "all" ){
        await axios
        .get(`https://api-tutor.herokuapp.com/v1/cars/make/${selectBrand}`)
        .then(result => {
                cars = result.data
        });
    }else if(selectColor != "all" && selectBrand == "all"){
        await axios
        .get(`https://api-tutor.herokuapp.com/v1/cars/color/${selectColor}`)
        .then(result => {
                cars = result.data
        });
    }else{
        await axios
        .get(`https://api-tutor.herokuapp.com/v1/cars/make/${selectBrand}/color/${selectColor}`)
        .then(result => {
                cars = result.data 
        });
    }

}

const setCarData = async() => {
    await getCarData();
    main.innerHTML = hbsTemplate({
        color: colors,
        make: makes,
    });
    document.querySelector(".cars").innerHTML = tableHbsTemplate({
        cars: cars.splice(0,30)
    });
}

const setFilteredData = async() => {
    await filterColorBrand();
    document.querySelector(".cars").innerHTML = tableHbsTemplate({
        cars: cars.splice(0,30)
    });
}

setCarData();
filterColorBrand();
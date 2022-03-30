const thElem = document.querySelector(".table");
const colorsElem = document.querySelector(".colors");
const makesElem = document.querySelector(".makes");


const getData = () => {
    axios
        .get('https://api-tutor.herokuapp.com/v1/colors')
        .then((result)=>{
            result.data.forEach(element => {
                let ul = document.createElement('ul')
                colorsElem.appendChild(ul)
                let trow = document.createElement('li');
                trow.innerHTML = element;
                ul.appendChild(trow);
                // console.log(ul);

            });

        })
    axios
        .get('https://api-tutor.herokuapp.com/v1/makes')
        .then((result)=>{
            result.data.forEach(element => {
            let ul = document.createElement('ul')
            makesElem.appendChild(ul)
            let tr = document.createElement('li');
            tr.innerHTML = element;
            ul.appendChild(tr);
            //console.log(ul);

        });

    })
    axios
    .get('https://api-tutor.herokuapp.com/v1/cars')
    .then((result) => {
        result.data.forEach(element => {

            let tr = document.createElement('tr');
            tr.innerHTML = JSON.stringify(element);
            thElem.appendChild(tr);
            // console.log(ul);
        });
    })

}
getData()



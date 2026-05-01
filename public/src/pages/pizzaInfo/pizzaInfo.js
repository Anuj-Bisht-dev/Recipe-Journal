function UpperSectionRendering(obj) {

    function createPizzaInfoUpperSection(ingredient, amount) {
        const element = document.createElement('aside');
        element.classList.add('upperSection');
        element.innerHTML = `<h6 class='upperSectionIng'>${ingredient}</h6> 
        <p class='upperSectionAmt'>${amount}</p>`

        let pizzaInfoUpperSection = document.getElementById('pizzaInfo-upper-section');
        pizzaInfoUpperSection.append(element);
    }

    obj.forEach((element, index) => {
        const ingredient = obj[index].key;
        const amount = obj[index].value;

        createPizzaInfoUpperSection(ingredient, amount)
    })

}


function LowerSectionRendering(obj) {

    function createPizzaInfoLowerSection(ingredient, amount) {
        const element = document.createElement('aside');
        element.classList.add('lowerSection');
        element.innerHTML = `<h6 class='lowerSectionIng'>${ingredient}</h6> <p>${amount}</p>`

        let pizzaInfoLowerSection = document.getElementById('pizzaInfo-lower-section');
        pizzaInfoLowerSection.append(element);
    }

    obj.forEach((element, index) => {
        const ingredient = obj[index].key;
        const amount = obj[index].value;

        createPizzaInfoLowerSection(ingredient, amount)
    })

}


const key = localStorage.getItem('targetResult');
let pizzaInfo = null;

switch (key) {
    case "6R, 0S, 160 g, 100 g, 65%, 72 hrs":
        pizzaInfo = {
            title: "6R, 0S, 160 g, 100 g, 65%, 72 hrs",
            upperSection: [
                { key: "Flour", value: "960 g" },
                { key: "Water", value: "624 g" },
                { key: "Yeast", value: "3.00 g" },
                { key: "Salt", value: "28.8 g" },
                { key: "Regular Dough", value: "269 g" },
                { key: "Small Dough", value: "168 g" },
            ],

            lowerSection: [
                { key: "Regular", value: 6 },
                { key: "Small", value: 0 },
                { key: "Flour Regular", value: "160 g" },
                { key: "Flour Small", value: "100 g" },
                { key: "Water %", value: "65%" },
                { key: "Fermentation Time", value: "72 hrs" },
                { key: "Salt %", value: "3%" },
            ]
        }
        break;

    case "5R, 0S, 160 g, 100 g, 68%, 72 hrs":
        pizzaInfo = {
            title: "5R, 0S, 160 g, 100 g, 68%, 72 hrs",
            upperSection: [
                { key: "Flour", value: "800 g" },
                { key: "Water", value: "544 g" },
                { key: "Yeast", value: "2.50 g" },
                { key: "Salt", value: "24.0 g" },
                { key: "Regular Dough", value: "274 g" },
                { key: "Small Dough", value: "171 g" },
            ],
            lowerSection: [
                { key: "Regular", value: 5 },
                { key: "Small", value: 0 },
                { key: "Flour Regular", value: "160 g" },
                { key: "Flour Small", value: "100 g" },
                { key: "Water %", value: "68%" },
                { key: "Fermentation Time", value: "72 hrs" },
                { key: "Salt %", value: "3%" },
            ]
        }
        break;

    case "3R, 1S, 160 g, 100 g, 68%, 72 hrs":
        pizzaInfo = {
            title: "3R, 1S, 160 g, 100 g, 68%, 72 hrs",
            upperSection: [
                { key: "Flour", value: "580 g" },
                { key: "Water", value: "394 g" },
                { key: "Yeast", value: "1.81 g" },
                { key: "Salt", value: "17.4 g" },
                { key: "Regular Dough", value: "274 g" },
                { key: "Small Dough", value: "171 g" },
            ],
            lowerSection: [
                { key: "Regular", value: 3 },
                { key: "Small", value: 1 },
                { key: "Flour Regular", value: "160 g" },
                { key: "Flour Small", value: "100 g" },
                { key: "Water %", value: "68%" },
                { key: "Fermentation Time", value: "72 hrs" },
                { key: "Salt %", value: "3%" },
            ]
        }
        break;

    case "3R, 0S, 160 g, 100 g, 63%, 72 hrs":
        pizzaInfo = {
            title: "3R, 0S, 160 g, 100 g, 63%, 72 hrs",
            upperSection: [
                { key: "Flour", value: "480 g" },
                { key: "Water", value: "302 g" },
                { key: "Yeast", value: "1.50 g" },
                { key: "Salt", value: "14.4 g" },
                { key: "Regular Dough", value: "266 g" },
                { key: "Small Dough", value: "166 g" },
            ],
            lowerSection: [
                { key: "Regular", value: 3 },
                { key: "Small", value: 0 },
                { key: "Flour Regular", value: "160 g" },
                { key: "Flour Small", value: "100 g" },
                { key: "Water %", value: "63%" },
                { key: "Fermentation Time", value: "72 hrs" },
                { key: "Salt %", value: "3%" },
            ]
        }
        break;

    case "4R, 2S, 160 g, 100 g, 70%, 10 hrs":
        pizzaInfo = {
            title: "4R, 2S, 160 g, 100 g, 70%, 10 hrs",
            upperSection: [
                { key: "Flour", value: "840 g" },
                { key: "Water", value: "588 g" },
                { key: "Yeast", value: "3.94 g" },
                { key: "Salt", value: "25.2 g" },
                { key: "Regular Dough", value: "277 g" },
                { key: "Small Dough", value: "173 g" },
            ],
            lowerSection: [
                { key: "Regular", value: 4 },
                { key: "Small", value: 2 },
                { key: "Flour Regular", value: "160 g" },
                { key: "Flour Small", value: "100 g" },
                { key: "Water %", value: "70%" },
                { key: "Fermentation Time", value: "10 hrs" },
                { key: "Salt %", value: "3%" },
            ]
        }
        break;

    case "4R, 2S, 160 g, 100 g, 70%, 72 hrs":
        pizzaInfo = {
            title: "4R, 2S, 160 g, 100 g, 70%, 72 hrs",
            upperSection: [
                { key: "Flour", value: "840 g" },
                { key: "Water", value: "588 g" },
                { key: "Yeast", value: "2.63 g" },
                { key: "Salt", value: "25.2 g" },
                { key: "Regular Dough", value: "277 g" },
                { key: "Small Dough", value: "173 g" },
            ],
            lowerSection: [
                { key: "Regular", value: 4 },
                { key: "Small", value: 2 },
                { key: "Flour Regular", value: "160 g" },
                { key: "Flour Small", value: "100 g" },
                { key: "Water %", value: "70%" },
                { key: "Fermentation Time", value: "72 hrs" },
                { key: "Salt %", value: "3%" },
            ]
        }
        break;
    case "4R, 1S, 160 g, 100 g, 65%, 10 hrs":
        pizzaInfo = {
            title: "4R, 1S, 160 g, 100 g, 65%, 10 hrs",
            upperSection: [
                { key: "Flour", value: "740 g" },
                { key: "Water", value: "481 g" },
                { key: "Yeast", value: "3.47 g" },
                { key: "Salt", value: "22.2 g" },
                { key: "Regular Dough", value: "269 g" },
                { key: "Small Dough", value: "168 g" },
            ],
            lowerSection: [
                { key: "Regular", value: 4 },
                { key: "Small", value: 1 },
                { key: "Flour Regular", value: "160 g" },
                { key: "Flour Small", value: "100 g" },
                { key: "Water %", value: "65%" },
                { key: "Fermentation Time", value: "10 hrs" },
                { key: "Salt %", value: "3%" },
            ]
        }
        break;

    case "4R, 0S, 160 g, 100 g, 65%, 34 hrs":
        pizzaInfo = {
            title: "4R, 0S, 160 g, 100 g, 65%, 34 hrs",
            upperSection: [
                { key: "Flour", value: "640 g" },
                { key: "Water", value: "416 g" },
                { key: "Yeast", value: "0.48 g" },
                { key: "Salt", value: "19.2 g" },
                { key: "Regular Dough", value: "269 g" },
                { key: "Small Dough", value: "168 g" },
            ],
            lowerSection: [
                { key: "Regular", value: 4 },
                { key: "Small", value: 0 },
                { key: "Flour Regular", value: "160 g" },
                { key: "Flour Small", value: "100 g" },
                { key: "Water %", value: "65%" },
                { key: "Fermentation Time", value: "34 hrs" },
                { key: "Salt %", value: "3%" },
            ]
        }
        break;

    case "1R, 0S, 150 g, 100 g, 75%, 10 hrs":
        pizzaInfo = {
            title: "1R, 0S, 150 g, 100 g, 75%, 10 hrs",
            upperSection: [
                { key: "Flour", value: "150 g" },
                { key: "Water", value: "113 g" },
                { key: "Yeast", value: "0.70 g" },
                { key: "Salt", value: "4.5 g" },
                { key: "Regular Dough", value: "267 g" },
                { key: "Small Dough", value: "178 g" },
            ],
            lowerSection: [
                { key: "Regular", value: 1 },
                { key: "Small", value: 0 },
                { key: "Flour Regular", value: "150 g" },
                { key: "Flour Small", value: "100 g" },
                { key: "Water %", value: "75%" },
                { key: "Fermentation Time", value: "10 hrs" },
                { key: "Salt %", value: "3%" },
            ]
        }
        break;

    case "3R, 1S, 160 g, 100 g, 68%, 10 hrs":
        pizzaInfo = {
            title: "3R, 1S, 160 g, 100 g, 68%, 10 hrs",
            upperSection: [
                { key: "Flour", value: "580 g" },
                { key: "Water", value: "394 g" },
                { key: "Yeast", value: "2.72 g" },
                { key: "Salt", value: "17.4 g" },
                { key: "Regular Dough", value: "274 g" },
                { key: "Small Dough", value: "171 g" },
            ],
            lowerSection: [
                { key: "Regular", value: 3 },
                { key: "Small", value: 1 },
                { key: "Flour Regular", value: "160 g" },
                { key: "Flour Small", value: "100 g" },
                { key: "Water %", value: "68%" },
                { key: "Fermentation Time", value: "10 hrs" },
                { key: "Salt %", value: "3%" },
            ]
        }
        break;
    case "3R, 0S, 160 g, 100 g, 65%, 34 hrs":
        pizzaInfo = {
            title: "3R, 0S, 160 g, 100 g, 65%, 34 hrs",
            upperSection: [
                { key: "Flour", value: "480 g" },
                { key: "Water", value: "312 g" },
                { key: "Yeast", value: "0.36 g" },
                { key: "Salt", value: "14.4 g" },
                { key: "Regular Dough", value: "269 g" },
                { key: "Small Dough", value: "168 g" },
            ],
            lowerSection: [
                { key: "Regular", value: 3 },
                { key: "Small", value: 0 },
                { key: "Flour Regular", value: "160 g" },
                { key: "Flour Small", value: "100 g" },
                { key: "Water %", value: "65%" },
                { key: "Fermentation Time", value: "34 hrs" },
                { key: "Salt %", value: "3%" },
            ]
        }
        break;
    case "2R, 1S, 160 g, 100 g, 65%, 72 hrs":
        pizzaInfo = {
            title: "2R, 1S, 160 g, 100 g, 65%, 72 hrs",
            upperSection: [
                { key: "Flour", value: "420 g" },
                { key: "Water", value: "273 g" },
                { key: "Yeast", value: "1.31 g" },
                { key: "Salt", value: "12.6 g" },
                { key: "Regular Dough", value: "269 g" },
                { key: "Small Dough", value: "168 g" },
            ],
            lowerSection: [
                { key: "Regular", value: 2 },
                { key: "Small", value: 1 },
                { key: "Flour Regular", value: "160 g" },
                { key: "Flour Small", value: "100 g" },
                { key: "Water %", value: "65%" },
                { key: "Fermentation Time", value: "72 hrs" },
                { key: "Salt %", value: "3%" },
            ]
        }

        break;
    case "0R, 1S, 160 g, 100 g, 65%, 10 hrs":
        pizzaInfo = {
            title: "0R, 1S, 160 g, 100 g, 65%, 10 hrs",
            upperSection: [
                { key: "Flour", value: "100 g" },
                { key: "Water", value: "65 g" },
                { key: "Yeast", value: "0.47 g" },
                { key: "Salt", value: "3.0 g" },
                { key: "Regular Dough", value: "269 g" },
                { key: "Small Dough", value: "168 g" },
            ],
            lowerSection: [
                { key: "Regular", value: 0 },
                { key: "Small", value: 1 },
                { key: "Flour Regular", value: "160 g" },
                { key: "Flour Small", value: "100 g" },
                { key: "Water %", value: "65%" },
                { key: "Fermentation Time", value: "10 hrs" },
                { key: "Salt %", value: "3%" },
            ]
        }

        break;
    case "3R, 1S, 160 g, 100 g, 65%, 72 hrs":
        pizzaInfo = {
            title: "3R, 1S, 160 g, 100 g, 65%, 72 hrs",
            upperSection: [
                { key: "Flour", value: "580 g" },
                { key: "Water", value: "377 g" },
                { key: "Yeast", value: "1.81 g" },
                { key: "Salt", value: "17.4 g" },
                { key: "Regular Dough", value: "269 g" },
                { key: "Small Dough", value: "168 g" },
            ],
            lowerSection: [
                { key: "Regular", value: 3 },
                { key: "Small", value: 1 },
                { key: "Flour Regular", value: "160 g" },
                { key: "Flour Small", value: "100 g" },
                { key: "Water %", value: "65%" },
                { key: "Fermentation Time", value: "72 hrs" },
                { key: "Salt %", value: "3%" },
            ]
        }

        break;
    default:
        console.log(Error);
        break;
}

const headerValue = document.getElementById('header-value');
headerValue.textContent = pizzaInfo.title;

UpperSectionRendering(pizzaInfo.upperSection);

LowerSectionRendering(pizzaInfo.lowerSection);
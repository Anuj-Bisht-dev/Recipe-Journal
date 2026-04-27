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


//-----------------------------------------------------


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

export {UpperSectionRendering, LowerSectionRendering};
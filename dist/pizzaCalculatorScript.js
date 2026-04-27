const pizzaQuantity = [
    { data: "6R, 0S, 160 g, 100 g, 65%, 72 hrs", time: "April 2, 2026 at 10:24 AM" },
    { data: "5R, 0S, 160 g, 100 g, 68%, 72 hrs", time: "December 22, 2025 at 11:29 AM" },
    { data: "3R, 1S, 160 g, 100 g, 68%, 72 hrs", time: "October 31, 2025 at 9:23 PM" },
    { data: "3R, 0S, 160 g, 100 g, 63%, 72 hrs", time: "October 29, 2025 at 10:40 AM" },
    { data: "4R, 2S, 160 g, 100 g, 70%, 10 hrs", time: "August 14, 2025 at 10:58 AM" },
    { data: "4R, 2S, 160 g, 100 g, 70%, 72 hrs", time: "August 14, 2025 at 10:56 AM" },
    { data: "4R, 1S, 160 g, 100 g, 65%, 10 hrs", time: "May 3, 2025 at 8:30 PM" },
    { data: "4R, 0S, 160 g, 100 g, 65%, 34 hrs", time: "April 30, 2025 at 10:49 AM" },
    { data: "1R, 0S, 150 g, 100 g, 75%, 10 hrs", time: "March 16, 2025 at 12:53 PM" },
    { data: "3R, 1S, 160 g, 100 g, 68%, 10 hrs", time: "February 26, 2025 at 11:21 AM" },
    { data: "3R, 0S, 160 g, 100 g, 65%, 34 hrs", time: "January 4, 2025 at 10:51 AM" },
    { data: "2R, 1S, 160 g, 100 g, 65%, 72 hrs", time: "November 16, 2024 at 7:54 PM" },
    { data: "0R, 1S, 160 g, 100 g, 65%, 10 hrs", time: "November 16, 2024 at 7:10 PM" },
    { data: "3R, 1S, 160 g, 100 g, 65%, 72 hrs", time: "October 19, 2024 at 11:48 AM" },
];

const pizzaCalculatorMainConatainer = document.getElementById('pizza-calculator-main-container');

function createLists(data, time, index) {
    const list = document.createElement('a');
    list.href = `pages/pizzaInfo${index}.html`;
    list.innerHTML = `<div class='lists'>
                        <section> 
                            <p class ='lists-data'>${data}</p> 
                            <p class ='lists-time'>${time}</p> 
                        </section> 
                        <section class='lists-data'>...</section> </div>`

    pizzaCalculatorMainConatainer.append(list);
}

pizzaQuantity.forEach((value, index) => {

    const data = pizzaQuantity[index].data;
    const time = pizzaQuantity[index].time;
    createLists(data, time, index);
});

function listClickEvent(e) {
    if (e.target.tagName === 'DIV' ||
        e.target.classList.contains('lists-data') ||
        e.target.classList.contains('lists-time')) {

        console.log('clicked');
    }
}

pizzaCalculatorMainConatainer.addEventListener('click', listClickEvent);

const categories = [
    { name: 'Asian', img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80' },
    { name: 'Brunch', img: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=400&q=80' },
    { name: 'Global', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80' },
    { name: 'Italian', img: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=400&q=80' },
    { name: 'Lebanese', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80' },
    { name: 'Mexican', img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=80' },
    { name: 'North Indian', img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80' },
    { name: 'Pizza', img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80' },
    { name: 'Salads', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80' },
    { name: 'Sizzler', img: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=400&q=80' },
    { name: 'South Indian', img: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&q=80' },
]

const mainContainer = document.getElementById('main-container');

function createItems(name, img) {
    const item = document.createElement('div');
    item.innerHTML = `<div> <img src=${img} class='items-img'> 
    <p class='items-para'>${name}</p> </div>`;

    mainContainer.append(item);
}


categories.forEach((value, index) => {

    const name = categories[index].name;
    const image = categories[index].img;

    createItems(name, image)
})


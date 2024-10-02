const canvas = document.getElementById('us_map');
const context = canvas.getContext('2d');
const image = new Image();
image.src = 'US-Blank-map.jpg';

image.onload = () => {
    context.drawImage(image, 0, 0)
};


canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    alert(`Clicked at (${x}, ${y})`);
});


const statesAb = {
    'California': ['CA', 80, 257],
    'New York': ['NY', 685, 148],
    'Texas': ['TX', 375, 385],
    'Florida': ['FL', 640, 426],
    'Illinois': ['IL', 512, 228],
    'Pennsylvania': ['PA', 660, 200],
    'Ohio': ['OH', 591, 218],
    'Georgia': ['GA', 600, 360],
    'North Carolina': ['NC',650, 300],
    'Michigan': ['MI',559, 166],
    'New Jersey': ['NJ',725, 205],
    'Virginia': ['VA',657, 257],
    'Washington': ['WA', 125, 80],
    'Arizona': ['AZ',189, 315],
    'Massachusetts': ['MA',763.5, 155],
    'Tennessee': ['TN', 551.5, 302.125],
    'Indiana': ['IN',554.5, 225.125],
    'Missouri': ['MO',462.5, 259.125],
    'Maryland': ['MD',675, 223.125],
    'Wisconsin': ['WI',503.5, 148.125],
    'Minnesota': ['MN',434.5, 121.125],
    'Colorado': ['CO', 283.5, 242.125],
    'South Carolina': ['SC', 640, 330],
    'Alabama': ['AL',558.5, 353.125],
    'Louisiana': ['LA',471.5, 387.125],
    'Kentucky': ['KY',572.5, 271.125],
    'Oregon': ['OR', 100, 135],
    'Oklahoma': ['OK',409.5, 314.125],
    'Connecticut': ['CT',727.5, 173],
    'Utah': ['UT', 210.5, 240],
    'Iowa': ['IA',448.5, 193.125],
    'Nevada': ['NV',139.5, 212.125],
    'Arkansas': ['AR',466.5, 326.125],
    'Mississippi': ['MS',513.5, 356.125],
    'Kansas': ['KS',386.5, 257.125],
    'New Mexico': ['NM', 262.5, 323.125],
    'Nebraska': ['NE',363.5, 200.125],
    'West Virginia': ['WV',628.5, 242.125],
    'Idaho': ['ID',181.5, 146.125],
    'Hawaii': ['HI', 255, 464],
    'New Hampshire': ['NH',733, 130.125],
    'Maine': ['ME',745, 85],
    'Montana': ['MT', 245, 110],
    'Rhode Island': ['RI',749.5, 190],
    'Delaware': ['DE',718.5, 240],
    'South Dakota': ['SD',362,160],
    'Alaska': ['AK', 105, 430],
    'Vermont': ['VT',709, 120],
    'Wyoming': ['WY',263.5, 165.125],
    'North Dakota': ['ND',362, 105]    
};


document.getElementById('recall').addEventListener('click', () => {
    const states = document.getElementById('statesInput').value
    const abb = statesAb[states][0]
    const abb_x = statesAb[states][1]
    const abb_y = statesAb[states][2]

    if (abb) {
        context.font = '18px Arial';
        context.fillText(abb, abb_x, abb_y);
    }
})
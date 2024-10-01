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
    'New York': 'NY',
    'Texas': 'TX',
    'Florida': 'FL',
    'Illinois': 'IL',
    'Pennsylvania': 'PA',
    'Ohio': 'OH',
    'Georgia': 'GA',
    'North Carolina': 'NC',
    'Michigan': 'MI',
    'New Jersey': 'NJ',
    'Virginia': 'VA',
    'Washington': ['WA', 125, 80],
    'Arizona': 'AZ',
    'Massachusetts': 'MA',
    'Tennessee': 'TN',
    'Indiana': 'IN',
    'Missouri': 'MO',
    'Maryland': 'MD',
    'Wisconsin': 'WI',
    'Minnesota': 'MN',
    'Colorado': 'CO',
    'South Carolina': 'SC',
    'Alabama': 'AL',
    'Louisiana': 'LA',
    'Kentucky': 'KY',
    'Oregon': ['OR', 100, 135],
    'Oklahoma': 'OK',
    'Connecticut': 'CT',
    'Utah': 'UT',
    'Iowa': 'IA',
    'Nevada': 'NV',
    'Arkansas': 'AR',
    'Mississippi': 'MS',
    'Kansas': 'KS',
    'New Mexico': 'NM',
    'Nebraska': 'NE',
    'West Virginia': 'WV',
    'Idaho': 'ID',
    'Hawaii': ['HI', 255, 464],
    'New Hampshire': 'NH',
    'Maine': 'ME',
    'Montana': ['MT', 245, 110],
    'Rhode Island': 'RI',
    'Delaware': 'DE',
    'South Dakota': 'SD',
    'Alaska': ['AK', 105, 430],
    'Vermont': 'VT',
    'Wyoming': 'WY',
    'North Dakota': 'ND'    
};


document.getElementById('recall').addEventListener('click', () => {
    const states = document.getElementById('statesInput').value
    const abb = statesAb[states][0]
    const abb_x = statesAb[states][1]
    const abb_y = statesAb[states][2]

    if (abb) {
        context.font = '30px Arial';
        context.fillText(abb, abb_x, abb_y);
    }
})
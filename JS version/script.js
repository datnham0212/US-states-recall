// const us_states = [
//     "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
//     "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
//     "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi",
//     "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico",
//     "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania",
//     "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
//     "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
// ];

//     let us_states_lowercase = us_states.map(function(item){
//         return item.toLowerCase();
//     });

//     let visited = [];

//     var us_states_length = us_states.length;

//     var input = document.getElementById('states');
//     var count = 0;
//     input.addEventListener("keypress", function(event){
//         if (event.key == "Enter"){
//             var state = input.value;
//             let temp = state.toLowerCase();
//             if(us_states_lowercase.includes(temp) && !visited.includes(temp)){
//                 visited.push(temp);
//                 let temp_index = us_states_lowercase.indexOf(temp);
//                 let node = document.createElement('p');
//                 let textnode = document.createTextNode(us_states[temp_index]);
//                 node.append(textnode);
//                 document.getElementById('result').appendChild(node);
//                 us_states.splice(us_states.indexOf(state), 0);
//                 count++;
//                 if(count == us_states_length){
//                 alert('Congrats, you have listed all of the states!');
//                 }
//             }
//             else{
//                 alert('Try again!');
//             }
//             document.getElementById('states').value = '';
//         }
//     });


const canvas = document.getElementById('us_map');
const context = canvas.getContext('2d');
const image = new Image();
image.src = 'https://www.50states.com/wp-content/uploads/2020/12/US-Blank-map.jpg';

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
    'California': 'CA',
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
    'Washington': 'WA',
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
    'Oregon': 'OR',
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
    'Hawaii': 'HI',
    'New Hampshire': 'NH',
    'Maine': 'ME',
    'Montana': 'MT',
    'Rhode Island': 'RI',
    'Delaware': 'DE',
    'South Dakota': 'SD',
    'Alaska': 'AK',
    'Vermont': 'VT',
    'Wyoming': 'WY',
    'North Dakota': 'ND'    
};

// alert(Object.keys(statesAb).length)

document.getElementById('recall').addEventListener('click', () => {
    const states = document.getElementById('statesInput').value
    const abb = statesAb[states]

    if (abb) {
        // context.fillStyle = 'red';
        context.font = '30px Arial';
        context.fillText(abb, 128, 80);
    }
})
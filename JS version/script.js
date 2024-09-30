const us_states = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
    "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
    "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi",
    "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico",
    "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania",
    "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
    "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

    let us_states_lowercase = us_states.map(function(item){
        return item.toLowerCase();
    });

    let visited = [];

    var us_states_length = us_states.length;

    var input = document.getElementById('states');
    var count = 0;
    input.addEventListener("keypress", function(event){
        if (event.key == "Enter"){
            var state = input.value;
            let temp = state.toLowerCase();
            if(us_states_lowercase.includes(temp) && !visited.includes(temp)){
                visited.push(temp);
                let temp_index = us_states_lowercase.indexOf(temp);
                let node = document.createElement('p');
                let textnode = document.createTextNode(us_states[temp_index]);
                node.append(textnode);
                document.getElementById('result').appendChild(node);
                us_states.splice(us_states.indexOf(state), 0);
                count++;
                if(count == us_states_length){
                alert('Congrats, you have listed all of the states!');
                }
            }
            else{
                alert('Try again!');
            }
            document.getElementById('states').value = '';
        }
    });

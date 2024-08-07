let stateCount = 0;
const MAX_STATES = 8;

function reflex_agent(location, state) {
    if (state == "DIRTY") return "CLEAN";
    else if (location == "A") return "RIGHT";
    else if (location == "B") return "LEFT";
}

function test(states) {
    if (stateCount >= MAX_STATES) {
        document.getElementById("log").innerHTML += "<br>Reached 8 states. Terminating.";
        return;
    }

    var location = states[0];		
    var state = states[0] == "A" ? states[1] : states[2];
    var action_result = reflex_agent(location, state);
    
    document.getElementById("log").innerHTML += "<br>Location: " + location + " | Action: " + action_result;
    
    if (action_result == "CLEAN") {
        if (location == "A") states[1] = "CLEAN";
        else if (location == "B") states[2] = "CLEAN";
    }
    else if (action_result == "RIGHT") states[0] = "B";
    else if (action_result == "LEFT") states[0] = "A";		

    stateCount++;
    
    setTimeout(function(){ test(states); }, 2000);
}

var states = ["A","DIRTY","DIRTY"];
test(states);
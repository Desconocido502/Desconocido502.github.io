let stateCount = 0;
const MAX_STATES = 8;

function reflex_agent(location, state) {
    if (state == "DIRTY") return "CLEAN";
    else if (location == "A") return "RIGHT";
    else if (location == "B") return "LEFT";
}

function test(states) {
    if (stateCount >= MAX_STATES) {
        log("Reached 8 states. Terminating.");
        return;
    }

    var location = states[0];		
    var state = states[0] == "A" ? states[1] : states[2];
    var action_result = reflex_agent(location, state);
    
    log(`Location: ${location} | Action: ${action_result}`);
    
    if (action_result == "CLEAN") {
        if (location == "A") states[1] = "CLEAN";
        else if (location == "B") states[2] = "CLEAN";
    }
    else if (action_result == "RIGHT") states[0] = "B";
    else if (action_result == "LEFT") states[0] = "A";		

    stateCount++;
    
    setTimeout(() => test(states), 2000);
}

function log(message) {
    const logElement = document.getElementById("log");
    logElement.innerHTML += message + "<br>";
    logElement.scrollTop = logElement.scrollHeight;
}

var states = ["A","DIRTY","DIRTY"];
test(states);
// 'Calculate' button event handler
function init () {
    var calculateButton = document.getElementById("calculate");
    calculateButton.onclick = handleCalculateButton;
}

// Gets input and calls calculator function
function handleCalculateButton() {
    var pvInput = document.getElementById("pageviews");
    var uPageViews = pvInput.value; 
    var subInput = document.getElementById("submissions");
    var uSubmissions = subInput.value;
    
    calculateConvRate(uPageViews, uSubmissions);
}

// Calculate and display the conversion rate
function calculateConvRate(pageViews, submissions) {
    // Convert the result to percentage then round to the nearest hundredth
    var convRate = Math.round(((submissions/pageViews) * 100) * 100) / 100;
    var answer = convRate + "%";

    displayAnswer(answer)
}

// Push the answer to HTML element
function displayAnswer(output) {
    var answerArea = document.getElementById("answer");
    answerArea.innerHTML = output;
}
    
window.onload = init;
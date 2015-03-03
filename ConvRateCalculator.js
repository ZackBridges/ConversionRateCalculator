// Works in jQuery
// 'Calculate' button event handler
function init () {
    $("#calculate").click(function() {
        calculateConvRate($("#pageviews").val(), $("#submissions").val());
    });
}

// I'll probably just leave this one alone for now.
// Calculate and display the conversion rate
function calculateConvRate(pageViews, submissions) {
    // Convert the result to percentage then round to the nearest hundredth
    var convRate = Math.round(((submissions/pageViews) * 100) * 100) / 100;
    var answer = convRate + "%";

    displayAnswer(answer);
}

// Push the answer to HTML element
function displayAnswer(output) {
    $("#answer").html(output);
}
    
// Works in jQuery
$(document).ready(init);
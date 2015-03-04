// Initialize functions
$(document).ready(init);

// 'Calculate' button event handler
function init() {
    $("#calculate").click(function () {
        calculateConvRate($("#pageviews").val(), $("#submissions").val());
    });
}

// Calculate and display the conversion rate
function calculateConvRate(pageViews, submissions) {
    // Convert the result to percentage then round to the nearest hundredth
    var convRate = (Math.round(((submissions / pageViews) * 100) * 100) / 100) + "%";

    $("#answer").text(convRate);
}
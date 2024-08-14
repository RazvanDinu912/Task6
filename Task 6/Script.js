let values = [4.2, 5.1, 3.8, 4.7, 5.3];

function calculateMean(values) {
    var sum = 0;
    for (var i=0; i < values.lenght; i++) {
        sum += values[i];
    }
    return sum / values.lenght;
}

var mean = calculateMean(values);
var roundedMean = Math.round(mean * 100) / 100;
var resultMessage = "Mean " + roundedMean;
console.log(resultMessage);
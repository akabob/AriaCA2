var Converter = (function () {
    // private stuff goes here
    var converterValue = 2.2;
    var cmsToInches = 25.4;
    var kmToMiles = 1.6;
    return {

        convertFromImperialToMetric: function (weight) {
            var num = parseFloat(weight);
            if (isNaN(num)) {
                throw new Error("Not a Number");
            }
            num = num / converterValue;
            return parseFloat(num.toFixed(1));
        },

        convertFromMetricToImperial: function (weight) {
            var num = parseFloat(weight);
            if (isNaN(num) == true) {
                throw new Error("Not a Number");
            }
            num = num * converterValue;
            return parseFloat(num.toFixed(1));
        },
        convertFromInchesToCentimeters: function (In) {
            var num = parseFloat(In);
            if (isNaN(num) == true) {
                throw new Error("Not a Number");
            }
            num = num * cmsToInches;
            return parseFloat(num.toFixed(1));
        },
        convertFromCentimetersToInches: function (In) {
            var num = parseFloat(In);
            if (isNaN(num) == true) {
                throw new Error("Not a Number");
            }
            num = num / cmsToInches;
            return parseFloat(num.toFixed(1));
        },
        convertFromMilesToKilometers: function (In) {
            var num = parseFloat(In);
            if (isNaN(num) == true) {
                throw new Error("Not a Number");
            }
            num = num * kmToMiles;
            return parseFloat(num.toFixed(1));
        },
        convertFromKilometersToMiles: function (In) {
            var num = parseFloat(In);
            if (isNaN(num) == true) {
                throw new Error("Not a Number");
            }
            num = num / kmToMiles;
            return parseFloat(num.toFixed(1));
        }
    }
})();

describe("My Converter", function () {
    it("should convert imperial weight to metric", function () {
        expect(Converter.convertFromImperialToMetric(2.2)).toBe(1);

    })
    it("should convert imperial weight to metric", function () {
        expect(Converter.convertFromMetricToImperial(1)).toBe(2.2);

    })
    it("should be able to deal with strings", function () {

        expect(function () { Converter.convertFromImperialToMetric("hello") }).toThrow(new Error("Not a Number"));
    })
    it("should be able to deal with strings", function () {

        expect(function () { Converter.convertFromMetricToImperial("hello") }).toThrow(new Error("Not a Number"));
    })

    it("should convert imperial Inches to Metric Centimeters", function () {
        expect(Converter.convertFromInchesToCentimeters(1)).toBe(25.4);

    })
    it("Imperial Inches to Metric Centimeters should be able to deal with strings", function () {

        expect(function () { Converter.convertFromInchesToCentimeters("hello") }).toThrow(new Error("Not a Number"));
    })
    it("should convert imperial Miles to MetricKilometers", function () {
        expect(Converter.convertFromMilesToKilometers(1)).toBe(1.6);

    })
    it("Imperial Miles to Metric Kilometers should be able to deal with strings", function () {

        expect(function () { Converter.convertFromMilesToKilometers("hello") }).toThrow(new Error("Not a Number"));
    })
    
})

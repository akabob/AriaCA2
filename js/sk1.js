window._skel_config = {
    prefix: 'css/style',
    preloadStyleSheets: true,
    resetCSS: true,
    boxModel: 'border',
    grid: { gutters: 30 },
    breakpoints: {
        wide: { range: '1200-', containers: 1140, grid: { gutters: 50 } },
        narrow: { range: '481-1199', containers: 960 },
        mobile: { range: '-480', containers: 'fluid', lockViewport: true, grid: { collapse: true } }
    }


};

$(document).ready(function () {
    $("#convertbutton").click(function () {
        var metricValue = $("#inputID").val();
       // var metricValue = $("#metricinput").val();
        var imperialValue = $("#imperialinput").val();

        $("#ansID").val(Converter.convertFromMetricToImperial(metricValue));

        if (((metricValue.length != 0) && (imperialValue.length != 0))
            || ((metricValue.length == 0) && imperialValue.length == 0)) {
            alert("Please set one field to convert")
        }
        if (metricValue.length != 0) {
            $("#imperialinput").val(Converter.convertFromPoundsToKIlo(metricValue));
        }
        else if (imperialValue.length != 0) {
            $("#metricinput").val(Converter.convertFromMetricToImperial(imperialValue));
        }



    });
    $("#clearbutton").click(function () {
        $("#inputIDt").val('');
        $("#ansID").val('');
    });

    $("#pnlRemove").click(function () {
        /* this function remove the fron panelof the cube so you can see inside and changes the bottom image which is the manchester United chrest with the image that ]
        was the front panel image]  this only shows the panels being changed by using code*/

        var imageName = 'img/v8rear.PNG';
         
        var changepnl = $('#btmpnl');
        var pnlID =  $('#v8front');
       

       
             $(pnlID).hide();                       // hide the front panel
             $('#btmpnl').attr('src', imageName);        // change the bottom image to v8rear.PNG



    });

    


    $('#conversion :selected').val();
    $('#conversion').change(function () {

        /* this fucntion calls the calucate funtion with the number to be converted  with the conversion type which comes from the select tag, eg pk is pounds to kilo's
        this function fires when the select dropdown box changes */
        var ValueToConvert = $("#inputID").val();
        var selected = $('#conversion :selected').val();


      //  console.log($('#conversion :selected').val());              //write it out to the console to verify what was 

        $("#ansID").val(calculate(selected, ValueToConvert));       // puts the convertion into the correct dom element on the page.
    }).change();

});

function calculate(selected, cw) {



    switch (selected) {
        case "pk":
            return Converter.convertFromImperialToMetric(cw);
            break;
        case "kp":

            return Converter.convertFromMetricToImperial(cw);
            break;
        case "ci":
            return Converter.convertFromCentimetersToInches(cw);
            break;
        case "ic":
            return Converter.convertFromInchesToCentimeters(cw);
            break;
        case "mk":
            return Converter.convertFromMilesToKilometers(cw);
            break;
        case "km":
            return Converter.convertFromKilometersToMiles(cw);
            break;

        default:

            return "Error ! No Conversion";

            //  code to be executed if n is different from case 1 and 2
    }


    


}
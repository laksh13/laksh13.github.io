$(document).ready(function() {

    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    $('#hex').on('change', function(event) {
        event.preventDefault();
        console.log("Here");
        var hex = $('#hex').val();
        console.log(hex);
        console.log(hexToRgb(hex));
        $('#rgb').val("rgb(" + hexToRgb(hex).r + ", " + hexToRgb(hex).g + ", " + hexToRgb(hex).b + ")");
        $('#main-container').css("background-color", hex);
    });

    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
});
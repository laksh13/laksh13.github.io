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
        var hex = $('#hex').val();
        console.log(hex);
        if (hex.length > 3) {
            if (hex.charAt(0) != '#') {
                hex = hex.substring(0, 0) + '#' + hex.substring(0);
                console.log(hex);
                //var output = a.substring(0, position) + b + a.substring(position);
            }
            console.log(hexToRgb(hex));
            $('#hex').val(hex);
            $('#rgb').val("rgb(" + hexToRgb(hex).r + ", " + hexToRgb(hex).g + ", " + hexToRgb(hex).b + ")");
            $('#main-container').css("background-color", hex);
        }

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
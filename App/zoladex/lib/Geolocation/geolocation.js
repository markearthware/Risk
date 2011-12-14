var Geolocation = (function () {

    function getPosition(success, error) {

        if (!!navigator.geolocation) {

            //request current location
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
            error("Device not supported");
        }
    }

    return {
        getPosition: getPosition
    };

})();
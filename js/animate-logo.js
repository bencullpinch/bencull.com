/* Logo anim from mjau-mjau.com */
/* Requires jquery.js and velocity.js */
(function ($) {

    // Animate logo on hover

    // vars
    var logo = $(".sweetas-logo");
    var m1 = $(".sweetas-logo .m1");
    var m2 = $(".sweetas-logo .m2");
    //var m3 = $(".sweetas-logo .m3");
    var easings = ["easeOutQuad", "easeInOutQuad", "easeInOutBack", "easeOutElastic", "easeOutBounce"];
    var values = [[20, 180, 0], [170, 170, 0], [20, 360, 0], [350, 0, 0], [0, 40, 360], [0, 320, 0], [0, 180, 0], [180, 180, 0]];

    // Get color from DOM
    var m1ColorString = window.getComputedStyle(m1.get()[0])['color'];
    var m2ColorString = window.getComputedStyle(m2.get()[0])['color'];

    // Swap colors
    m2.colh = m1ColorString.substring(4, m1ColorString.length-1)
        .replace(/ /g, '')
        .split(',')
        .map(x => parseInt(x));

    m1.colh = m2ColorString.substring(4, m2ColorString.length-1)
        .replace(/ /g, '')
        .split(',')
        .map(x => parseInt(x));

    // logo hover
    logo.hover(function () {
        m1.logoanim(1);
        m2.logoanim(2);
    }, function () {
        m1.velocity("reverse");
        m2.velocity("reverse");
    });

    // logo anim prototype
    $.fn.logoanim = function (item) {

        // duration
        var duration = Math.round(Math.random() * 400) + 200;

        // anim object
        var a = Math.floor(Math.random() * values.length);

        // easing
        var e = Math.floor(Math.random() * easings.length);
        var easing = easings[e];
        if (e >= 2) { duration *= 2 }

        // velocity
        $(this).velocity({
            rotateX: values[a][0] * (Math.round(Math.random()) * 2 - 1),
            rotateY: values[a][1] * (Math.round(Math.random()) * 2 - 1),
            rotateZ: values[a][2] * (Math.round(Math.random()) * 2 - 1),
            colorRed: this.colh[0],
            colorGreen: this.colh[1],
            colorBlue: this.colh[2]
        }, {
            duration: duration,
            easing: easing
        });
    }

    // animate logo on document load
    $(document).ready(function () {
        m1.logoanim(1);
        m1.velocity("reverse");
        m2.logoanim(2);
        m2.velocity("reverse");
    });

})(jQuery);
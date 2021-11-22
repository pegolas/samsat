$(document).bind("contextmenu", function (e) {
    var el = document.getElementById("hide");
    el.remove();
});

document.onkeydown = function (e) {
    if (event.keyCode == 123) {
        var el = document.getElementById("hide");
        el.remove();
    };
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        var el = document.getElementById("hide");
        el.remove();
    };
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        var el = document.getElementById("hide");
        el.remove();
    };
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        var el = document.getElementById("hide");
        el.remove();
    };
    if (e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) {
        var el = document.getElementById("hide");
        el.remove();
    };
    if (e.ctrlKey && e.keyCode == 'A'.charCodeAt(0)) {
        var el = document.getElementById("hide");
        el.remove();
    };
};
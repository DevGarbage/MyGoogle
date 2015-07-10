$(document).ready(function () {
    $('#hplogo').css('background', 'transparent');
    $('#hplogo').css('width', '100%');
    $('#hplogo').attr('align', 'center');
    $('#hplogo').html('Ravin Singh D');
    InjectFont();
});
function InjectFont() {
    var styleNode = document.createElement("style");
    styleNode.type = "text/css";
    styleNode.textContent = "@font-face { font-family: catull-regular; src: url('"
                            + chrome.extension.getURL("/Fonts/catull-r-regular.ttf")
                            + "') format('truetype'); }";
    document.head.appendChild(styleNode);
}
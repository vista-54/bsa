
function Bsa() {
};
if(!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.Bsa) {
    window.plugins.Bsa = new Bsa();
}
bsa.echo = function(url) {
    cordova.exec(successCallback, errorCallback, "Bsa", "echo", [url]);
};

module.exports = Bsa;
var CaesarCipher = function (shift) {
    this.encode = function (str) {
        return str.toUpperCase().replace(/[A-Z]/g, char => 
            String.fromCharCode((char.charCodeAt(0) - 65 + shift) % 26 + 65)
        );
    };
    this.decode = function (str) {
        return str.toUpperCase().replace(/[A-Z]/g, char => 
            String.fromCharCode((char.charCodeAt(0) - 65 - shift + 26) % 26 + 65)
        );
    };
};

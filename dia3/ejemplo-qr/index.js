const miQR = require('qrcode-terminal');

// creamos un QR con ese texto
miQR.generate("Hola como andan?");
miQR.generate("https://mipagina.com", {small:true});


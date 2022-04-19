function connect() {
    const protocolSelect = document.getElementById("protocol-select");
    const portInput = document.getElementById("port-input");
    const url = protocolSelect.value + "://127.0.0.1:" + portInput.value;

    var connection = new WebSocket(url);
    // When the connection is open, send some data to the server
    connection.onopen = function () {
        connection.send('Ping'); // Send the message 'Ping' to the server
    };

    // Log errors
    connection.onerror = function (error) {
        console.log('WebSocket Error ' + error);
    };

    // Log messages from the server
    connection.onmessage = function (e) {

        const responseField = document.getElementById("response-field");
        responseField.innerText += e.data + "\n";

        // const preview = document.querySelector('img');
//        preview.src = "data:image/png;base64," + e.data;

        // const reader = new FileReader();
        // reader.addEventListener("load", function () {
        //     // convert image file to base64 string
        //     preview.src = reader.result;
        // }, false);
        //
        // reader.readAsDataURL(e.data);
    };
}

function previewFile() {
    const preview = document.querySelector('img');
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();

    reader.addEventListener("load", function () {
        // convert image file to base64 string
        preview.src = reader.result;
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }
}


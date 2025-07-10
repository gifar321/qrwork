// script.js

function generateCode() {
    const inputData = document.getElementById('input-data').value;
    const type = document.getElementById('type').value;
    const canvas = document.getElementById('generated-canvas');

    if (inputData === "") {
        alert("Please enter some data or click Generate Automatically");
        return;
    }

    if (type === 'qrcode') {
        // Generate QR Code
        QRCode.toCanvas(canvas, inputData, function (error) {
            if (error) console.error(error);
            else console.log('QR Code generated!');
        });
    } else if (type === 'barcode') {
        // Generate Barcode with black color
        JsBarcode(canvas, inputData, {
            format: "CODE128",
            lineColor: "#000000",
            width: 2,
            height: 40,
            displayValue: true
        });
    }
}

function printCode() {
    const canvas = document.getElementById('generated-canvas');
    const imageUrl = canvas.toDataURL();  // Get image from canvas

    // Open print window with barcode/QR code image
    const printWindow = window.open('', '', 'width=600,height=600');
    printWindow.document.write('<html><head><title>Print Barcode / QR Code</title></head><body>');
    printWindow.document.write('<h1>Barcode / QR Code</h1>');
    printWindow.document.write('<img src="' + imageUrl + '" width="400" />');
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}

function downloadApp() {
    window.location.href = "https://example.com/download"; // Replace with actual download URL
}

function generateAuto() {
    const autoData = Math.floor(Math.random() * 1000000);  // Generate random number for auto data
    document.getElementById('input-data').value = autoData; // Put auto-generated data in input field
    generateCode(); // Call generateCode() to display barcode or qr code
}

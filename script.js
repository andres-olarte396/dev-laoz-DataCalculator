function convertStorage() {
    const value = parseFloat(document.getElementById('storageValue').value);
    const fromUnit = parseFloat(document.getElementById('storageUnitFrom').value);
    const toUnit = parseFloat(document.getElementById('storageUnitTo').value);

    if (isNaN(value)) {
        document.getElementById('storageResult').textContent = "Please enter a valid number.";
        return;
    }

    const result = (value * fromUnit) / toUnit;
    document.getElementById('storageResult').textContent = `${value} converted equals ${result} in the target unit.`;
}

function convertSpeed() {
    const value = parseFloat(document.getElementById('speedValue').value);
    const fromUnit = parseFloat(document.getElementById('speedUnitFrom').value);
    const toUnit = parseFloat(document.getElementById('speedUnitTo').value);

    if (isNaN(value)) {
        document.getElementById('speedResult').textContent = "Please enter a valid number.";
        return;
    }

    const result = (value * fromUnit) / toUnit;
    document.getElementById('speedResult').textContent = `${value} converted equals ${result} in the target unit.`;
}

function calculateDownloadTime() {
    const fileSize = parseFloat(document.getElementById('fileSize').value); // MB
    const downloadSpeed = parseFloat(document.getElementById('downloadSpeed').value); // Mbps

    if (isNaN(fileSize) || isNaN(downloadSpeed) || downloadSpeed === 0) {
        document.getElementById('downloadTimeResult').textContent = "Please enter valid values.";
        return;
    }

    const speedInMBps = downloadSpeed / 8; // Convert Mbps to MB/s
    const timeInSeconds = fileSize / speedInMBps;

    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.round(timeInSeconds % 60);

    document.getElementById('downloadTimeResult').textContent = 
        `Time required: ${minutes} minutes and ${seconds} seconds.`;
}
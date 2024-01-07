function pInt(value1, value2) {
    if (parseInt(value1) == NaN || parseInt(value1) == null) return parseInt(value2);
    return parseInt(value1);
}

function percentage(number, other) {
    return Math.floor(10000*number/other)/100;
}

function allStorage() {
    var values = {};
    var keys = Object.keys(localStorage);
    var i = keys.length;

    while ( i-- ) {
        values[keys[i]] = JSON.parse(localStorage.getItem(keys[i]));
    }
    console.log(values);
    return values;
}

function getStorage() {
    return localStorageMainString ? JSON.parse(localStorageMainString) : JSON.parse(localStorageString);
}

function removeDuplicates(arr) {
    var tempArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (tempArr.includes(arr[i])) continue
        tempArr.push(arr[i]);
    }
    return tempArr;
}

function isDigit(char) {
    var c = char.charAt(0);
    var bounds = ["0".charAt(0), "9".charAt(0)];
    return c >= bounds[0] && c <= bounds[1]
}

function modifyStorage(def) {
    var keys = Object.keys(localStorage);
    
    if (def && isDigit(localStorage.getItem(keys[0])[0])) { console.log("Loaded old.js"); return values; }
    else if (!def && localStorage.getItem(keys[0])[0] == "{") { console.log("Loaded main.js"); return values; }
    
    var values = getStorage();
    var addedValues = [];
    var valuesKeys = Object.keys(values);
    keys = removeDuplicates(keys.concat(valuesKeys));
    var i = keys.length;

    while (i--) {
        if (values[keys[i]] == undefined) {
            localStorage.removeItem(keys[i]);
            addedValues.push(keys[i]);
            continue;
        }
        if (!def) {
            values[keys[i]] = JSON.stringify({Level: values[keys[i]], Marked: minMarkers});
        }
        localStorage.setItem(keys[i], values[keys[i]]);
    }
    console.log("Made: ", values);
    console.log("Found also: ", addedValues);
    return values;
}

function makeFile(filename, data) {
    const blob = new Blob([data], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
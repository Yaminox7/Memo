modifyStorage(false);
var sumV = verses.reduce((a, b) => a + b, 0);
var trans = red = orange = yellow = ygreen = green = 0;
var transV = redV = orangeV = yellowV = ygreenV = greenV = 0;

var elements = createElements();
var container = elements[0];
var btn = elements[1];
var inp = elements[2];
var stats = elements[3];
var check = elements[4];
btn.onclick = () => {
    if (!btn.disabled) {    
        setStatsVars();
        setColors({});
        setStats();
        localStorage.clear();
    }
};
inp.onclick = () => {
    setStats();
}
check.onclick = () => {
    translate(check.checked);
}
var minColors = -1;
var maxColors = 5;
var minMarkers = -1;
var maxMarkers = 5;
var colors = ["transparent", "red", "orange", "yellow", "#A1EA16", "#44D62C"];

sourates.forEach((sourate) => {
    var p = document.createElement("p");
    var index = sourates.indexOf(sourate);
    container.append(p);
    var indexSpan = "<span class='indexSpan'>" + (index + 1) + ".</span> ";
    var sourateSpan = "<span class='sourateSpan'>" + sourate + " (" + verses[index] + ")</span>";
    p.innerHTML = indexSpan + sourateSpan;
    p.setAttribute("class", "sourate");
    p.setAttribute("name", sourate);
    p.setAttribute("v", minColors);
    p.setAttribute("i", minMarkers);
    p.onmouseover = (e) => {
        if (e.altKey) {
            p.children.item(1).style.textDecoration = "underline";
        }
    };
    p.onmouseout = () => {
        p.children.item(1).style.textDecoration = "none";
    };
    p.children.item(0).onclick = (e) => {
        if (e.shiftKey) {
            var value = mod(e.ctrlKey ? minMarkers : maxMarkers-1, minMarkers, maxMarkers);
        } else {
            var value = mod(parseInt(p.getAttribute("i")) - e.ctrlKey * 2 + 1, minMarkers, maxMarkers);
        }
        var span = p.children.item(0);
        p.setAttribute("i", value);
        span.style.backgroundColor = colors[value + 1];
        addToStorage(sourate, "Marked", value);
    }
    p.children.item(1).onclick = (e) => {
        if (e.shiftKey) {
            var value = mod(e.ctrlKey ? minColors : maxColors-1, minColors, maxColors);
            var pvalue = parseInt(p.getAttribute("v"));
            if (!e.ctrlKey) { // new value = green
                green++; greenV += verses[index];
            } else { // new value = transparent
                trans++; transV += verses[index];
            }
                if (pvalue == 0) { red--; redV -= verses[index]; }
                else if (pvalue == 1) { orange--; orangeV -= verses[index]; }
                else if (pvalue == 2) { yellow--; yellowV -= verses[index]; }
                else if (pvalue == 3) { ygreen--; ygreenV -= verses[index]; }
                else if (pvalue == 4) { green--; greenV -= verses[index]; }
                else if (pvalue == -1) { trans--; transV -= verses[index]; }
        } else {
            var value = mod(parseInt(p.getAttribute("v")) - e.ctrlKey * 2 + 1, minColors, maxColors);
            if (!e.ctrlKey) {
                if (value == 0) { trans--; red++; transV -= verses[index]; redV += verses[index]; } 
                else if (value == 1) { red--; orange++; redV -= verses[index]; orangeV += verses[index]; }
                else if (value == 2) { orange--; yellow++; orangeV -= verses[index]; yellowV += verses[index]; } 
                else if (value == 3) { yellow--; ygreen++; yellowV -= verses[index]; ygreenV += verses[index]; }
                else if (value == 4) { ygreen--; green++; ygreenV -= verses[index]; greenV += verses[index]; } 
                else if (value == -1) { green--; trans++; greenV -= verses[index]; transV += verses[index]; }
            } else {
                if (value == -1) { trans++; red--; transV += verses[index]; redV -= verses[index]; } 
                else if (value == 0) { red++; orange--; redV += verses[index]; orangeV -= verses[index]; }
                else if (value == 1) { orange++; yellow--; orangeV += verses[index]; yellowV -= verses[index]; } 
                else if (value == 2) { yellow++; ygreen--; yellowV += verses[index]; ygreenV -= verses[index]; }
                else if (value == 3) { ygreen++; green--; ygreenV += verses[index]; greenV -= verses[index]; } 
                else if (value == 4) { green++; trans--; greenV += verses[index]; transV -= verses[index]; }
            }
        }
        p.setAttribute("v", value);
        p.children.item(1).style.backgroundColor = colors[value + 1];
        addToStorage(sourate, "Level", value);
        setStats();
    }
    p.onclick = (e) => {
        if (e.altKey) {
            var a = document.createElement("a");
            a.href = "https://quran.com/" + (index + 1);
            a.target = "_blank";
            a.click();
            p.children.item(1).style.textDecoration = "none";
        }
        // else {
        //     if (e.shiftKey) {
        //         var span = p.children.item(0);
        //         var value = mod(parseInt(p.getAttribute("i")) - e.ctrlKey * 2 + 1, minMarkers, maxMarkers);
        //         p.setAttribute("i", value);
        //         span.style.backgroundColor = colors[value + 1];
        //         addToStorage(sourate, "Marked", value);
        //     } else {
        //         var value = mod(parseInt(p.getAttribute("v")) - e.ctrlKey * 2 + 1, minColors, maxColors);
        //         p.setAttribute("v", value);
        //         p.children.item(1).style.backgroundColor = colors[value + 1];
        //         addToStorage(sourate, "Level", value);
        //         if (!e.ctrlKey) {
        //             if (value == 0) { trans--; red++; transV -= verses[index]; redV += verses[index]; } 
        //             else if (value == 1) { red--; orange++; redV -= verses[index]; orangeV += verses[index]; }
        //             else if (value == 2) { orange--; yellow++; orangeV -= verses[index]; yellowV += verses[index]; } 
        //             else if (value == 3) { yellow--; ygreen++; yellowV -= verses[index]; ygreenV += verses[index]; }
        //             else if (value == 4) { ygreen--; green++; ygreenV -= verses[index]; greenV += verses[index]; } 
        //             else if (value == -1) { green--; trans++; greenV -= verses[index]; transV += verses[index]; }
        //         } else {
        //             if (value == -1) { trans++; red--; transV += verses[index]; redV -= verses[index]; } 
        //             else if (value == 0) { red++; orange--; redV += verses[index]; orangeV -= verses[index]; }
        //             else if (value == 1) { orange++; yellow--; orangeV += verses[index]; yellowV -= verses[index]; } 
        //             else if (value == 2) { yellow++; ygreen--; yellowV += verses[index]; ygreenV -= verses[index]; }
        //             else if (value == 3) { ygreen++; green--; ygreenV += verses[index]; greenV -= verses[index]; } 
        //             else if (value == 4) { green++; trans--; greenV += verses[index]; transV -= verses[index]; }
        //         }
        //         setStats();
        //     }
        //}
    };
});
setColors(allStorage());
setStats();

function setColors(values) {
    Array.from(container.children).forEach((child) => {
        var childText = child.getAttribute("name");
        var obj = values[childText] ? values[childText] : undefined;
        var value = obj ? parseInt(obj["Level"]) : minColors;
        var indexValue = obj ? parseInt(obj["Marked"]) : minMarkers;
        var index = sourates.indexOf(childText);
        child.setAttribute("i", indexValue);
        child.setAttribute("v", value);
        child.children.item(0).style.backgroundColor = colors[indexValue + 1];
        child.children.item(1).style.backgroundColor = colors[value + 1];
        if (value == -1) { trans++; transV += verses[index]; }
        else if (value == 0) { red++; redV += verses[index]; }
        else if (value == 1) { orange++; orangeV += verses[index]; }
        else if (value == 2) { yellow++; yellowV += verses[index]; }
        else if (value == 3) { ygreen++; ygreenV += verses[index]; }
        else if (value == 4) { green++; greenV += verses[index]; }
    });
}

function setStats() {    
    if (!inp.checked) {
        stats[0].innerText = trans | 0;
        stats[1].innerText = red | 0;
        stats[2].innerText = orange | 0;
        stats[3].innerText = yellow | 0;
        stats[4].innerText = ygreen | 0;
        stats[5].innerText = green | 0;
        
        stats[6].innerText = trans ? trans + " (" + percentage(trans, sourates.length) + "%)" : 0;
        var sum = red + orange + yellow + ygreen + green;
        stats[7].innerText = sum ? sum + " (" + percentage(sum, sourates.length) + "%)" : 0;
        stats[8].innerText = red + orange ? red + orange + " (" + percentage(red + orange, sourates.length) + "%)" : 0;
        stats[9].innerText = yellow ? yellow + " (" + percentage(yellow, sourates.length) + "%)" : 0;
        stats[10].innerText = ygreen + green ? ygreen + green + " (" + percentage(ygreen + green, sourates.length) + "%)" : 0;
        stats[11].innerText = sourates.length + " (100%)";
    } else {
        stats[0].innerText = transV | 0;
        stats[1].innerText = redV | 0;
        stats[2].innerText = orangeV | 0;
        stats[3].innerText = yellowV | 0;
        stats[4].innerText = ygreenV | 0;
        stats[5].innerText = greenV | 0;

        stats[6].innerText = transV ? transV + " (" + percentage(transV, sumV) + "%)" : 0;
        var sum = redV + orangeV + yellowV + ygreenV + greenV;
        stats[7].innerText = sum ? sum + " (" + percentage(sum, sumV) + "%)" : 0;
        stats[8].innerText = redV + orangeV ? redV + orangeV + " (" + percentage(redV + orangeV, sumV) + "%)" : 0;
        stats[9].innerText = yellowV ? yellowV + " (" + percentage(yellowV, sumV) + "%)" : 0;
        stats[10].innerText = ygreenV + greenV ? ygreenV + greenV + " (" + percentage(ygreenV + greenV, sumV) + "%)" : 0;
        stats[11].innerText = sumV + " (100%)";
    }
}

function setStatsVars() {
    trans = red = orange = yellow = ygreen = green = 0;
    transV = redV = orangeV = yellowV = ygreenV = greenV = 0;
}

function mod(value, min, max) {
    if (value < min) { return max - 1; }
    if (value < max) { return value; }
    return min;
}

function addToStorage(name, key, value) {
    var dict = JSON.parse(localStorage.getItem(name));
    if (dict) {
        dict[key] = value;
        localStorage.setItem(name, JSON.stringify(dict));
    } else {
        var obj = {Level: minColors, Marked: minMarkers};
        obj[key] = value;
        localStorage.setItem(name, JSON.stringify(obj));
    }
}

function translate (inArabic) {
    Array.from(container.children).forEach((child) => {
        var index = sourates.indexOf(child.getAttribute("name"));
        if (inArabic) {
            container.setAttribute("dir", "rtl");
            child.children.item(1).innerText = souratesAr[index] + " (" + verses[index] + ")";
        } else {
            container.setAttribute("dir", "ltr");
            child.children.item(1).innerText = sourates[index] + " (" + verses[index] + ")";
        }
    });
}

function orderBy(order) {
    var lis = Array.from(container.children);
    for (var i = 0; i < lis.length; i++) { container.removeChild(lis[i]); }
    lis.sort((a, b) => {
        var x = a.getAttribute("name"); var y = b.getAttribute("name");
        var indexX = sourates.indexOf(x); var indexY = sourates.indexOf(y);
        if (order == "natural") return indexX-indexY;
        else if (order == "reverse") return indexY-indexX;
        else if (order == "ascending") return verses[indexX]-verses[indexY];
        else if (order == "descending") return verses[indexY]-verses[indexX];
    });
    for (var i = 0; i < lis.length; i++) { container.appendChild(lis[i]); }
}

function createElement(tagname, parent, id, classname, text, type, name) {
    var element = document.createElement(tagname);
    if (parent) parent.append(element);
    if (id) element.id = id;
    if (classname) element.setAttribute("class", classname);
    if (tagname == "input" && text) element.setAttribute("value", text);
    else if (text) element.innerText = text;
    if (tagname == "label" && type) element.setAttribute("for", type);
    else if (type) element.setAttribute("type", type);
    if (name) element.setAttribute("name", name);
    return element;
}

function createElements() {
    var div = createElement("div", document.body, "container");
    var middle = createElement("div", document.body, "middle");
    var btn = createElement("button", document.body, "clear", "", "Clear");
    var inp = createElement("input", middle, "input", "", "", "checkbox");
    createElement("label", middle, "inputLabel", "", " By verses ", "#input");
    // createElement(tagname, parent, id, classname, text, type, name)
    var orderDiv = createElement("div", document.body, "orderDiv");
    createElement("label", orderDiv, "inputLabel", "", "Normal ", "#radio1");
    var radio1 = createElement("input", orderDiv, "radio1", "", "natural", "radio", "order");
    createElement("label", orderDiv, "inputLabel", "", " Reversed ", "#radio2");
    var radio2 = createElement("input", orderDiv, "radio2", "", "reverse", "radio", "order");
    createElement("label", orderDiv, "inputLabel", "", " Ascending ", "#radio3");
    var radio3 = createElement("input", orderDiv, "radio3", "", "ascending", "radio", "order");
    createElement("label", orderDiv, "inputLabel", "", " Descending ", "#radio4");
    var radio4 = createElement("input", orderDiv, "radio4", "", "descending", "radio", "order");
    radio1.checked = true;
    Array.from(orderDiv.children).forEach((child) => {
        child.onclick = () => {
            if (child.checked) {
                orderBy(child.value);
            }
        };
    });
    var check = createElement("input", middle, "translate", "", "Arabic", "checkbox");
    createElement("label", middle, "inputLabel", "", " Translate to Ar  ", "#select");
    var check2 = createElement("input", middle, "select", "", "select", "checkbox");
    createElement("label", middle, "inputLabel", "", " Enable User-Select  ", "#select");
    check2.onclick = () => {
        var style = "none";
        if (check2.checked) style = "auto";
        document.body.style.userSelect = style;
    }
    
    var statsDiv = createElement("div", document.body, "stats");
    var transS = createElement("p", statsDiv, "", "stats trans", "Transparent: ");
    var redS = createElement("p", statsDiv, "", "stats red", "Red: ");
    var orangeS = createElement("p", statsDiv, "", "stats orange", "Orange: ");
    var yellowS = createElement("p", statsDiv, "", "stats yellow", "Yellow: ");
    var ygreenS = createElement("p", statsDiv, "", "stats ygreen", "YellowGreen: ");
    var greenS = createElement("p", statsDiv, "", "stats green", "Green: ");
    var aunknownsS = createElement("p", statsDiv, "", "stats trans", "All unknown: ");
    var aknownsS = createElement("p", statsDiv, "", "stats green", "All known: ");
    var aredsS = createElement("p", statsDiv, "", "stats red", "All red: ");
    var ayellowsS = createElement("p", statsDiv, "", "stats yellow", "All yellow: ");
    var agreensS = createElement("p", statsDiv, "", "stats green", "All green: ");
    var allS = createElement("p", statsDiv, "", "stats all", "All: ");
    var transSS = createElement("span", transS, "trans");
    var redSS = createElement("span", redS, "red");
    var orangeSS = createElement("span", orangeS, "orange");
    var yellowSS = createElement("span", yellowS, "yellow");
    var ygreenSS = createElement("span", ygreenS, "ygreen");
    var greenSS = createElement("span", greenS, "green");
    var aunknownsSS = createElement("span", aunknownsS, "unknown");
    var aknownsSS = createElement("span", aknownsS, "known");
    var aredsSS = createElement("span", aredsS, "ared");
    var ayellowsSS = createElement("span", ayellowsS, "ayellow");
    var agreensSS = createElement("span", agreensS, "agreen");
    var allSS = createElement("span", allS, "all");

    var stats = [
        transSS,
        redSS,
        orangeSS,
        yellowSS,
        ygreenSS,
        greenSS,
        aunknownsSS,
        aknownsSS, 
        aredsSS,
        ayellowsSS,
        agreensSS,
        allSS
    ];

    return [div, btn, inp, stats, check];
}
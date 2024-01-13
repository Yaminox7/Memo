modifyStorage(true);
var sumV = verses.reduce((a, b) => a + b, 0);
// verses.forEach((v) => sumV += v);
var trans = red = orange = yellow = ygreen = green = 0;
var transV = redV = orangeV = yellowV = ygreenV = greenV = 0;

var elements = createElements();
var container = elements[0];
var btn = elements[1];
var inp = elements[2];
var stats = elements[3];
btn.onclick = () => {
    if (!btn.disabled) {    
        setStatsVars();
        setColors({}, min);
        setStats();
        localStorage.clear();
    }
};
inp.onclick = () => {
    setStats();
}
var min = -1;
var max = 5;
var colors = ["transparent", "red", "orange", "yellow", "#A1EA16", "#44D62C"];

sourates.forEach((sourate) => {
    var p = document.createElement("p");
    var index = sourates.indexOf(sourate);
    container.append(p);
    p.innerText = (index+1) + ". " +sourate + " (" + verses[index] + ")";
    p.setAttribute("class", "sourate");
    p.setAttribute("v", min);
    p.onmouseover = (e) => {
        if (e.altKey) {
            p.style.textDecoration = "underline";
        }
    };
    p.onmouseout = () => {
        p.style.textDecoration = "none";
    };
    p.onclick = (e) => {
        if (e.altKey) {
            var a = document.createElement("a");
            a.href = "https://quran.com/" + (index + 1);
            a.target = "_blank";
            a.click();
            p.style.textDecoration = "none";
        } else {
            if (e.shiftKey) {
                p.style.backgroundColor = "black";
                return
            }
            value = mod(parseInt(p.getAttribute("v")) - e.ctrlKey * 2 + 1, min, max);
            p.setAttribute("v", value);
            p.style.backgroundColor = colors[value+1];
            addToStorage(sourate, value);
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
            setStats();
        }
    };
});
setColors(allStorage(), min);
setStats();

function setColors(values, defaultValue) {
    Array.from(container.children).forEach((child) => {
        var childText = child.innerText.split(" ")[1];
        var value = parseInt(values[childText] != undefined ? values[childText] : defaultValue);
        var index = sourates.indexOf(childText);
        child.setAttribute("v", value);
        child.style.backgroundColor = colors[value+1];
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

function addToStorage(key, value) {
    if (value != min) localStorage.setItem(key, value);
    else localStorage.removeItem(key);
}

function orderBy(order) {
    var lis = Array.from(container.children);
    for (var i = 0; i < lis.length; i++) { container.removeChild(lis[i]); }
    lis.sort((a, b) => {
        var x = a.innerText.split(" ")[1];
        var y = b.innerText.split(" ")[1];
        if (order == "natural")         return sourates.indexOf(x)-sourates.indexOf(y);
        else if (order == "reverse")   return sourates.indexOf(y)-sourates.indexOf(x);
        else if (order == "ascending")  return verses[sourates.indexOf(x)]-verses[sourates.indexOf(y)];
        else if (order == "descending") return verses[sourates.indexOf(y)]-verses[sourates.indexOf(x)];
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
    var btn = createElement("button", middle, "clear", "", "Clear");
    btn.disabled = true;
    var inp = createElement("input", middle, "input", "", "", "checkbox");
    createElement("label", middle, "inputLabel", "", " By verses", "#input");
    // createElement(tagname, parent, id, classname, text, type, name)
    var orderDiv = createElement("div", document.body, "orderDiv");
    var radio1 = createElement("input", orderDiv, "radio1", "", "natural", "radio", "order");
    var radio2 = createElement("input", orderDiv, "radio2", "", "reverse", "radio", "order");
    var radio3 = createElement("input", orderDiv, "radio3", "", "ascending", "radio", "order");
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
    var check2 = createElement("input", middle, "select", "", "select", "checkbox");
    check2.onclick = () => {
        var style = "auto";
        if (check2.checked) style = "none";
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
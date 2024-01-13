var goals = [66, 58, 52, 42, 35, 30];
var dates = ["15/11/2023", "12/01/2024", "15/02/2024", "01/04/2024", "01/06/2024", "01/10/2024", "01/12/2024"];

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var learnts = [0, 0, 0, 0, 0, 0]

function reverse(date) {
    var splits = date.split("/");
    return splits[2] + "-" + splits[1] + "-" + splits[0];
}

function getSubVerses(sourat, limit) {
    var verse;
    if (limit != "") verse = verses.slice(sourat, limit);
    else verse = verses.slice(sourat);
    return verse;
}

function getSubSourates(sourat, limit) {
    var sourate;
    if (limit != "") sourate = sourates.slice(sourat, limit);
    else sourate = sourates.slice(sourat); 
    return sourate;
}

function sum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function modArr(n, arr, rev) {
    var r = n;
    if (!rev) {
        for (var i = 0; i < arr.length; i++) {
            if (r > arr[i]) r -= arr[i];
            else break
        }
    } else {
        for (var i = arr.length-1; i >= 0; i--) {
            if (r > arr[i]) r -= arr[i];
            else break
        }
    }
    return [i, Math.ceil(r)];
}

function createElement(tagname, parent, innerHTML) {
    var elem = document.createElement(tagname);
    parent.append(elem);
    if (innerHTML) elem.innerHTML = innerHTML;
    return elem;
}

function getAt(n, index) {
    var reversed = parseInt(n).toString();
    var reversedIndex = reversed.length - index - 1;
    return reversed[reversedIndex];
}

function numsuf(n) {
    var suf;
    if (getAt(n, 0) == 1 && getAt(n, 1) != 1) suf = "st";
    else if (getAt(n, 0) == 2 && getAt(n, 1) != 1) suf = "nd";
    else if (getAt(n, 0) == 3 && getAt(n, 1) != 1) suf = "rd";
    else suf = "th";
    return n + suf
}

function formatDate(date) {
    var day = days[date.getDay()] + " " + date.getDate();
    var month = months[date.getMonth()];
    var year = date.getFullYear();
    var formated_date = day + " " + month + " " + year;
    return formated_date;
}

for (var k = 0; k < goals.length; k++) {
    var start = new Date(reverse(dates[k]));
    var end = new Date(reverse(dates[k+1]));
    var ndays = (end-start)/(24*60*60*1000)+1;
    var goal = goals[k];
    var subVerses = getSubVerses(goal, k > 0 ? goals[k-1] : "");
    var subSourates = getSubSourates(goal, k > 0 ? goals[k-1] : "");
    var learnt = learnts[k];
    var td = new Date();
    var today = Math.floor((td.getTime() - start.getTime())/(24*60*60*1000))+1;

    var total = sum(subVerses) - learnt;
    var versesDay = total / ndays;

    function getText(date, relative) {
        var todayGoal = date * versesDay;
        var [sgoal, agoal] = modArr(todayGoal + learnt, subVerses, true);

        var day = new Date(start.getTime() + 24 * 60 * 60 * 1000 * (date - 1));
        var fday = formatDate(day);
        var dayT;
        if (date + 1 == relative) dayT = "<abbr title=\""+fday+"\">Yesterday</abbr> was the " + numsuf(date) + " day, with";
        else if (date == relative) dayT = "<abbr title=\""+fday+"\">Today</abbr> is the " + numsuf(date) + " day, with";
        else if (date - 1 == relative) dayT = "<abbr title=\""+fday+"\">Tomorrow</abbr> will be the " + numsuf(date) + " day, with";
        else if (date < relative) dayT = "<abbr title=\""+fday+"\">The " + numsuf(date) + " day</abbr> had";
        else if (date > relative) dayT = "<abbr title=\""+fday+"\">The " + numsuf(date) + " day</abbr> will have";
        var verse = "<span class='verse'>" + numsuf(agoal) + "</span>";
        var chapter = "<span class='chapter'>" + subSourates[sgoal] + "</span>";
        var tgoal = " a goal of reaching the " + verse + " verse of the chapter named " + chapter;
        var text = dayT + tgoal;
        return [text, date+1];
    }

    var details = createElement("details", document.body);
    var summary = createElement("summary", details, sourates[goal] + " for " + formatDate(end) + " (" + dates[k+1] + ")" + (k+1>=goals.length ? "." : ";"));
    var list = createElement("ul", details);
    for (var i = 1; i <= ndays; i++) {
        var [txt, d] = getText(i, today);
        d -= today;
        createElement("li", list, txt);
        if (d > 0 && d < 2) details.open = true;
    }
}
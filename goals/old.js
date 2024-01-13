var goals = ["Al-Mulk", "Al-Hashr", "An-Najm", "Az-Zukhruf", "Ya-Sin", "Luqman"];
var dates = ["January 2024", "February 2024", "April 2024", "June 2024", "October 2024", "December 2024"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var container = document.createElement("ul");
// document.body.append(container);

// goals.forEach((goal) => {
//     var index = goals.indexOf(goal);
//     var li = document.createElement("li");
//     container.append(li);
//     li.innerText = goal + " for " + dates[index] + (index+1>=goals.length ? "." : ";");
// });

// goals = ["a", "b", "c"];
for (var k = 0; k < goals.length; k++) {
    var start = new Date("2024-01-02");
    var end = new Date("2024-01-07");
    var ndays = (end-start)/(24*60*60*1000)+1;
    var verses = [28, 28, 44, 52];
    var sourates = ["Al-Jinn", "Nûh", "Al-Ma'arij", "Al-Haqqah"];
    var learnt = 22;
    var td = new Date();
    var today = Math.floor((td.getTime() - start.getTime())/(24*60*60*1000))+1;

    var total = sum(verses) - learnt;
    var versesDay = total / ndays;

    function sum(arr) {
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }

    function modArr(n, arr) {
        var r = n;
        for (var i = 0; i < arr.length; i++) {
            if (r > arr[i]) r -= arr[i];
            else break
        }
        return [i, Math.round(r)];
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

    function getText(date, relative) {
        var todayGoal = date * versesDay;
        var [sgoal, agoal] = modArr(todayGoal + learnt, verses);

        var day = new Date(start.getTime() + 24 * 60 * 60 * 1000 * (date - 1));
        var fday = formatDate(day);
        var dayT;
        if (date + 1 == relative) dayT = "Yesterday (" + fday + ") was the " + numsuf(date) + " day, with";
        else if (date == relative) dayT = "Today (" + fday + ") is the " + numsuf(date) + " day, with";
        else if (date - 1 == relative) dayT = "Tomorrow (" + fday + ") will be the " + numsuf(date) + " day, with";
        else if (date < relative) dayT = "The " + numsuf(date) + " day (" + fday + ") had";
        else if (date > relative) dayT = "The " + numsuf(date) + " day (" + fday + ") will have";
        var verse = "<span class='verse'>" + numsuf(agoal) + "</span>";
        var chapter = "<span class='chapter'>" + sourates[sgoal] + "</span>";
        var goal = " a goal of reaching the " + verse + " verse of the chapter named " + chapter + ".";
        var text = dayT + goal;
        return "<p>" + text + "</p>";
    }

    var details = createElement("details", document.body);
    details.open = true;
    var summary = createElement("summary", details, goals[k] + " for " + dates[k] + (k+1>=goals.length ? "." : ";"));
    var list = createElement("ul", details);
    for (var i = 1; i <= ndays; i++) {
        createElement("li", list, getText(i, today));
    }
}
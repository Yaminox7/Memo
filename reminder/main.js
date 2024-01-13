var sum = (arr) => arr.reduce((partialSum, a) => partialSum + a, 0);
var sumStr = (str, char="") => str.reduce((partialStr, a) => partialStr + (partialStr ? char : "") + a, "");
var capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

var form = document.getElementById("form");
var start = document.getElementById("start");
var end = document.getElementById("end");

end.valueAsDate = new Date();

var start_date; var end_date;
var container = document.getElementById("container");

form.onsubmit = (e) => {
    e.preventDefault();
    var ssd = start.value.split("-").reverse();
    var sed = end.value.split("-").reverse();
    start_date = sumStr([ssd[1], ssd[0], ssd[2]], "/");
    end_date = sumStr([sed[1], sed[0], sed[2]], "/");
    main();
};

function getDayDelta(d1, d2){
    d1.setHours(0);
    d1.setMinutes(0);
    d1.setSeconds(0);
    d1.setMilliseconds(0);

    // Remove the time offset of the current date
    d1.setHours(0);
    d1.setMinutes(0);

    d2.setHours(0);
    d2.setMinutes(0);
    d2.setSeconds(0);
    d2.setMilliseconds(0);

    // Remove the time offset of the current date
    d2.setHours(0);
    d2.setMinutes(0);

    delta = d2 - d1;

    return delta;
}

function createElement(tag, parent, innerText, innerHTML) {
    var elem = document.createElement(tag);
    parent.append(elem);
    if (innerText) elem.innerText = innerText;
    if (innerHTML) elem.innerHTML = innerHTML;
    return elem;
}

function main() {
    var m = [31,  28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var average = sum(m) / m.length;

    function get_decimal(n) {
    	return n - parseInt(n);
    }

    function format(days, prefix) {
        var ul = createElement("ul", container);
    	createElement("li", ul, prefix+""+days+" days");
    	createElement("li", ul, prefix+""+days/7+" weeks");
    	createElement("li", ul, prefix+""+days/365*12+" months");
    	createElement("li", ul, prefix+""+days/365+" years");
    }
                
    function format_total(days, prefix) {
    	var years = parseInt(days/365);
    	var months = (days-years*365)/average;
    	var days = parseInt(average*get_decimal(months));
    	months = parseInt(months);
    	createElement("p", container, prefix+"or "+years+" years, "+months+" months and "+days+" days.");
    }
    
    function get_day(date) {
    	var days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    	return capitalize(days[(date.getDay()+days.length-1)%days.length]);
    }
                
    function get_month(month) {
    	var months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
    	return capitalize(months[parseInt(month)]);
    }

    function fint(n) {
        return n.toString().length >= 2 ? n : "0"+n.toString();
    }
                
    function format_date(date, f=0) {
        var strdate = [date.getDate(), date.getMonth()+1, date.getFullYear()];
    	var f1date = get_day(date)+" "+strdate[0]+" "+get_month(strdate[1]-1)+" "+strdate[2];
    	var f2date = fint(strdate[0])+"/"+fint(strdate[1])+"/"+strdate[2];
    	if (f == 1) return f1date;
    	else if (f == 2) return f2date;
    	else if (f == 0) return f1date+" ("+f2date+")";
    }
        
    function expect_date(days, date, rate) {
    	var expected_date = date;
        var delta = Math.floor(days / (rate + 1) + 1);
        expected_date.setDate(date.getDate() + delta);
    	return "If you pray "+rate+" other prayers a day, you might end on "+format_date(expected_date) + " ("+delta+" days)";
    }

    function calculate(date1, date2) {
        container.innerHTML = "";
    	var d1 = new Date(date1);
    	var d2 = new Date(date2);
    	var delta = getDayDelta(d1, d2);
    	var days = Math.floor(delta / 1000 / 3600 / 24);
    	var prefix = "";
    	createElement("p", container, "From "+format_date(d1)+" to "+format_date(d2)+" are:")
    	format(days, prefix)
    	format_total(days, prefix)
        var ul = createElement("ul", container);
    	for (var i = 0; i < 10; i++) {
    		createElement("li", ul, expect_date(days, d1, i+1))
        }
    }

    calculate(start_date, end_date);
}
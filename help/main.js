var min = document.getElementById("minutes");
var sec = document.getElementById("secondes");
var a = document.getElementById("result");

min.oninput = sec.oninput = () => {
    if (requirements(min.value, min) | requirements(sec.value, sec)) {
        var mins = min.value | 0;
        var secs = sec.value | 0;
        a.href = "https://www.minuteur-en-ligne.fr/minuteur-" + mins + "-minutes-" + secs + "-secondes";
        a.innerText = (mins ? mins + "-min " : "") + (secs ? secs + "-sec " : "") + "Timer";
    }
};

function requirements(value, input) {
    return value && value >= parseInt(input.getAttribute("min")) && value <= parseInt(input.getAttribute("max"));
}
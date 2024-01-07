var btns = document.getElementsByClassName("btn");

Array.from(btns).forEach(btn => {
    btn.onclick = (e) => {
        if (e.shiftKey) window.open(btn.innerText.toLowerCase() + "/index.html");
        else {
            var a = document.createElement("a");
            a.href = btn.innerText.toLowerCase() + "/index.html";
            a.click();
        }
    };   
});
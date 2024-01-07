var rules = ["الإمالة"];
var definitions = ["هي التعويج، أن تنحو من الفتحة إلى الكسرة، ومن الألف إلى الياء"];
var signs = ["النقطة أسفل الحرف الممل"];
var letters = [""];
var examples = [""];
var elements = createElements();
var container = elements[0];

rules.forEach((rule) => {
    var index = rules.indexOf(rule);
    var li = document.createElement("li");
    container.append(li);
    makeHTML(index, li);
    li.setAttribute("id", "ruling");
    li.onmouseover = (e) => {
        if (e.altKey) {
            li.style.textDecoration = "underline";
        }
    };
    li.onmouseout = () => {
        li.style.textDecoration = "none";
    };
    li.onclick = (e) => {
        if (e.altKey) {
            var a = document.createElement("a");
            a.href = "https://quran.com/" + (rules.indexOf(rule) + 1);
            a.target = "_blank";
            a.click();
            li.style.textDecoration = "none";
            return;
        }
    };
});

function createElement(tagname, parent, id, classname, text) {
    var element = document.createElement(tagname);
    if (parent) parent.append(element);
    if (id) element.id = id;
    if (classname) element.setAttribute("class", classname);
    if (text) element.innerText = text;
    return element;
}

function createElements() {
    var ul = createElement("ul", document.body, "container");
    
    return [ul];
}

function makeHTML(index, parent) {
    var name = createElement("p", parent, "", "definition");
    var definition = definitions[index];
    var letter = letters[index].split("").join("، ");
    var example = examples[index].split("_").join("، ");
    var sign = signs[index].split("_").join("، ");
    var defindex = definition.indexOf(",") >= 0 ? definition.indexOf(",") : definition.indexOf("،");
    var lingDef = definition.substring(0, defindex);
    var juridDef = definition.substring(defindex+1);
    createElement("span", name, "", "name", rules[index] + ":");
    createElement("span", name, "", "linguistical", " لغة " + lingDef + "،");
    createElement("span", name, "", "juridical", " واصطلاحا" + juridDef + ".");
    if (sign) createElement("span", name, "", "signs", " علاماته: " + sign + ".");
    if (letters[index].length) createElement("span", name, "", "letters", " حروفه " + letters[index].length + "، وهي: " + letter + ". ");
    if (example) createElement("span", name, "", "examples", " أمثلة: " + example + ".");
}
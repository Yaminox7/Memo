var namesAr = ["ٱلْرَّحْمَـانُ", "ٱلْرَّحِيْمُ", "ٱلْمَلِكُ", "ٱلْقُدُّوسُ", "ٱلْسَّلَامُ", "ٱلْمُؤْمِنُ", "ٱلْمُهَيْمِنُ", "ٱلْعَزِيزُ", "ٱلْجَبَّارُ", "ٱلْمُتَكَبِّرُ", "ٱلْخَالِقُ", "ٱلْبَارِئُ", "ٱلْمُصَوِّرُ", "ٱلْغَفَّارُ", "ٱلْقَهَّارُ", "ٱلْوَهَّابُ", "ٱلْرَّزَّاقُ", "ٱلْفَتَّاحُ", "ٱلْعَلِيمُ", "ٱلْقَابِضُ", "ٱلْبَاسِطُ", "ٱلْخَافِضُ", "ٱلْرَّافِعُ", "ٱلْمُعِزُّ", "ٱلْمُذِلُّ", "ٱلْسَّمِيعُ", "ٱلْبَصِيرُ", "ٱلْحَكَمُ", "ٱلْعَدْلُ", "ٱلْلَّطِيفُ", "ٱلْخَبِيرُ", "ٱلْحَلِيمُ", "ٱلْعَظِيمُ", "ٱلْغَفُورُ", "ٱلْشَّكُورُ", "ٱلْعَلِيُّ", "ٱلْكَبِيرُ", "ٱلْحَفِيظُ", "ٱلْمُقِيتُ", "ٱلْحَسِيبُ", "ٱلْجَلِيلُ", "ٱلْكَرِيمُ", "ٱلْرَّقِيبُ", "ٱلْمُجِيبُ", "ٱلْوَاسِعُ", "ٱلْحَكِيمُ", "ٱلْوَدُودُ", "ٱلْمَجِيدُ", "ٱلْبَاعِثُ", "ٱلْشَّهِيدُ", "ٱلْحَقُّ", "ٱلْوَكِيلُ", "ٱلْقَوِيُّ", "ٱلْمَتِينُ", "ٱلْوَلِيُّ", "ٱلْحَمِيدُ", "ٱلْمُحْصِيُ", "ٱلْمُبْدِئُ", "ٱلْمُعِيدُ", "ٱلْمُحْيِى", "ٱلْمُمِيتُ", "ٱلْحَىُّ", "ٱلْقَيُّومُ", "ٱلْوَاجِدُ", "ٱلْمَاجِدُ", "ٱلْوَاحِدُ", "ٱلْأَحَد", "ٱلْصَّمَدُ", "ٱلْقَادِرُ", "ٱلْمُقْتَدِرُ", "ٱلْمُقَدِّمُ", "ٱلْمُؤَخِّرُ", "ٱلأَوَّلُ", "ٱلْآخِرُ", "ٱلْظَّاهِرُ", "ٱلْبَاطِنُ", "ٱلْوَالِي", "ٱلْمُتَعَالِي", "ٱلْبَرُّ", "ٱلْتَّوَّابُ", "ٱلْمُنْتَقِمُ", "ٱلْعَفُوُّ", "ٱلْرَّؤُفُ", "مَالِكُ ٱلْمُلْكُ", "ذُو ٱلْجَلَالِ وَٱلْإِكْرَامُ", "ٱلْمُقْسِطُ", "ٱلْجَامِعُ", "ٱلْغَنيُّ", "ٱلْمُغْنِيُّ", "ٱلْمَانِعُ", "ٱلْضَّارُ", "ٱلْنَّافِعُ", "ٱلْنُّورُ", "ٱلْهَادِي", "ٱلْبَدِيعُ", "ٱلْبَاقِي", "ٱلْوَارِثُ", "ٱلْرَّشِيدُ", "ٱلْصَّبُورُ"];
var names = ["Ar-Rahmaan", "Ar-Raheem", "Al-Malik", "Al-Quddus", "As-Salam", "Al-Mu’Min", "Al-Muhaymin", "Al-Azeez", "Al-Jabbar", "Al-Mutakabbir", "Al-Khaaliq", "Al-Baari’", "Al-Musawwir", "Al-Ghaffar", "Al-Qahhar", "Al-Wahhaab", "Ar-Razzaaq", "Al-Fattaah", "Al-‘Aleem", "Al-Qaabid", "Al-Baasit", "Al-Khaafidh", "Ar-Raafi’", "Al-Mu’Izz", "Al-Muzil", "As-Samee’", "Al-Baseer", "Al-Hakam", "Al-‘Adl", "Al-Lateef", "Al-Khabeer", "Al-Haleem", "Al-‘Atheem", "Al-Ghafoor", "Ash-Shakoor", "Al-‘Alee", "Al-Kabeer", "Al-Hafeedh", "Al-Muqeet", "Al-Haseeb", "Al-Jaleel", "Al-Kareem", "Ar-Raqeeb", "Al-Mujeeb", "Al-Waasi’", "Al-Hakeem", "Al-Wadood", "Al-Majeed", "Al-Ba’Ith", "Ash-Shaheed", "Al-Haqq", "Al-Wakeel", "Al-Qawiyy", "Al-Mateen", "Al-Waliyy", "Al-Hameed", "Al-Muhsee", "Al-Mubdi", "Al-Mu’Id", "Al-Muhyee", "Al-Mumeet", "Al-Hayy", "Al-Qayyoom", "Al-Waajid", "Al-Maajid", "Al-Waahid", "Al-Ahad", "As-Samad", "Al-Qadeer", "Al-Muqtadir", "Al-Muqaddim", "Al-Mu’Akhkhir", "Al-Awwal", "Al-Aakhir", "Az-Dhaahir", "Al-Baatin", "Al-Waali", "Al-Muta’Ali", "Al-Barr", "At-Tawwab", "Al-Muntaqim", "Al-‘Afuww", "Ar-Ra’Oof", "Maalik-Ul-Mulk", "Dhul-Jalaali Wal-Ikraam", "Al-Muqsit", "Al-Jaami’", "Al-Ghaniyy", "Al-Mughni", "Al-Mani’", "Ad-Dharr", "An-Nafi’", "An-Nur", "Al-Haadi", "Al-Badee’", "Al-Baaqi", "Al-Waarith", "Ar-Rasheed", "As-Saboor"];
var defs = ["The Most or Entirely Merciful", "The Bestower of Mercy", "The King and Owner of Dominion", "The Absolutely Pure", "The Perfection and Giver of Peace", "The One Who gives Emaan and Security", "The Guardian, The Witness, The Overseer", "The All Mighty", "The Compeller, The Restorer", "The Supreme, The Majestic", "The Creator, The Maker", "The Originator", "The Fashioner", "The All- and Oft-Forgiving", "The Subduer, The Ever-Dominating", "The Giver of Gifts", "The Provider", "The Opener, The Judge", "The All-Knowing, The Omniscient", "The Withholder", "The Extender", "The Reducer, The Abaser", "The Exalter, The Elevator", "The Honourer, The Bestower", "The Dishonourer, The Humiliator", "The All-Hearing", "The All-Seeing", "The Judge, The Giver of Justice", "The Utterly Just", "The Subtle One, The Most Gentle", "The Acquainted, the All-Aware", "The Most Forbearing", "The Magnificent, The Supreme", "The Forgiving, The Exceedingly Forgiving", "The Most Appreciative", "The Most High, The Exalted", "The Greatest, The Most Grand", "The Preserver, The All-Heedful and All-Protecting", "The Sustainer", "The Reckoner, The Sufficient", "The Majestic", "The Most Generous, The Most Esteemed", "The Watchful", "The Responsive One", "The All-Encompassing, the Boundless", "The All-Wise", "The Most Loving", "The Glorious, The Most Honorable", "The Resurrector, The Raiser of the Dead", "The All- and Ever Witnessing", "The Absolute Truth", "The Trustee, The Disposer of Affairs", "The All-Strong", "The Firm, The Steadfast", "The Protecting Associate", "The Praiseworthy", "The All-Enumerating, The Counter", "The Originator, The Initiator", "The Restorer, The Reinstater", "The Giver of Life", "The Bringer of Death, the Destroyer", "The Ever-Living", "The Sustainer, The Self-Subsisting", "The Perceiver", "The Illustrious, the Magnificent", "The One", "The Unique, The Only One", "The Eternal, Satisfier of Needs", "The Capable, The Powerful", "The Omnipotent", "The Expediter, The Promoter", "The Delayer, the Retarder", "The First", "The Last", "The Manifest", "The Hidden One, Knower of the Hidden", "The Governor, The Patron", "The Self Exalted", "The Source of Goodness, the Kind Benefactor", "The Ever-Pardoning, The Relenting", "The Avenger", "The Pardoner", "The Most Kind", "Master of the Kingdom, Owner of the Dominion", "Possessor of Glory and Honour, Lord of Majesty and Generosity", "The Equitable, the Requiter", "The Gatherer, the Uniter", "The Self-Sufficient, The Wealthy", "The Enricher", "The Withholder", "The Distresser", "The Propitious, the Benefactor", "The Light, The Illuminator", "The Guide", "The Incomparable Originator", "The Ever-Surviving, The Everlasting", "The Inheritor, The Heir", "The Guide, Infallible Teacher", "The Forbearing, The Patient"];
var defsAr = ["The most or Entirely Merciful", "The Bestower of Mercy", "The King and Owner of Dominion", "The Absolutely Pure", "The Perfection and Giver of Peace", "The One Who gives Emaan and Security", "The Guardian, The Witness, The Overseer", "The All Mighty", "The Compeller, The Restorer", "The Supreme, The Majestic", "The Creator, The Maker", "The Originator", "The Fashioner", "The All- and Oft-Forgiving", "The Subduer, The Ever-Dominating", "The Giver of Gifts", "The Provider", "The Opener, The Judge", "The All-Knowing, The Omniscient", "The Withholder", "The Extender", "The Reducer, The Abaser", "The Exalter, The Elevator", "The Honourer, The Bestower", "The Dishonourer, The Humiliator", "The All-Hearing", "The All-Seeing", "The Judge, The Giver of Justice", "The Utterly Just", "The Subtle One, The Most Gentle", "The Acquainted, the All-Aware", "The Most Forbearing", "The Magnificent, The Supreme", "The Forgiving, The Exceedingly Forgiving", "The Most Appreciative", "The Most High, The Exalted", "The Greatest, The Most Grand", "The Preserver, The All-Heedful and All-Protecting", "The Sustainer", "The Reckoner, The Sufficient", "The Majestic", "The Most Generous, The Most Esteemed", "The Watchful", "The Responsive One", "The All-Encompassing, the Boundless", "The All-Wise", "The Most Loving", "The Glorious, The Most Honorable", "The Resurrector, The Raiser of the Dead", "The All- and Ever Witnessing", "The Absolute Truth", "The Trustee, The Disposer of Affairs", "The All-Strong", "The Firm, The Steadfast", "The Protecting Associate", "The Praiseworthy", "The All-Enumerating, The Counter", "The Originator, The Initiator", "The Restorer, The Reinstater", "The Giver of Life", "The Bringer of Death, the Destroyer", "The Ever-Living", "The Sustainer, The Self-Subsisting", "The Perceiver", "The Illustrious, the Magnificent", "The One", "The Unique, The Only One", "The Eternal, Satisfier of Needs", "The Capable, The Powerful", "The Omnipotent", "The Expediter, The Promoter", "The Delayer, the Retarder", "The First", "The Last", "The Manifest", "The Hidden One, Knower of the Hidden", "The Governor, The Patron", "The Self Exalted", "The Source of Goodness, the Kind Benefactor", "The Ever-Pardoning, The Relenting", "The Avenger", "The Pardoner", "The Most Kind", "Master of the Kingdom, Owner of the Dominion", "Possessor of Glory and Honour, Lord of Majesty and Generosity", "The Equitable, the Requiter", "The Gatherer, the Uniter", "The Self-Sufficient, The Wealthy", "The Enricher", "The Withholder", "The Distresser", "The Propitious, the Benefactor", "The Light, The Illuminator", "The Guide", "The Incomparable Originator", "The Ever-Surviving, The Everlasting", "The Inheritor, The Heir", "The Guide, Infallible Teacher", "The Forbearing, The Patient"];

var elements = createElements();
var container = elements[0];
var check = elements[1];
var preview = elements[2];
check.onclick = () => {
    translate(check.checked);
}

names.forEach((name) => {
    var p = document.createElement("p");
    var index = names.indexOf(name);
    container.append(p);
    var indexSpan = "<span class='indexSpan'>" + (index + 1) + ".</span> ";
    var nameSpan = "<span class='sourateSpan'>" + name + "</span>";
    p.innerHTML = indexSpan + nameSpan;
    p.setAttribute("class", "name");
    p.setAttribute("name", name);
    p.onmouseover = (e) => {
        if (e.altKey) {
            p.style.cursor = "pointer";
            p.children.item(1).style.textDecoration = "underline";
        }
    };
    p.onmouseout = () => {
        p.style.cursor = "default";
        p.children.item(1).style.textDecoration = "none";
    };
    p.onclick = (e) => {
        if (e.altKey) {
            p.style.cursor = "default";
            p.children.item(1).style.textDecoration = "none";
            preview.innerText = check.checked ? defsAr[index] : defs[index];
        }
    };
});

function translate (inArabic) {
    Array.from(container.children).forEach((child) => {
        var index = names.indexOf(child.getAttribute("name"));
        if (inArabic) {
            container.setAttribute("dir", "rtl");
            child.children.item(1).innerText = namesAr[index];
        } else {
            container.setAttribute("dir", "ltr");
            child.children.item(1).innerText = names[index];
        }
    });
}

function orderBy(order) {
    var lis = Array.from(container.children);
    for (var i = 0; i < lis.length; i++) { container.removeChild(lis[i]); }
    lis.sort((a, b) => {
        var x = a.getAttribute("name"); var y = b.getAttribute("name");
        var indexX = names.indexOf(x); var indexY = names.indexOf(y);
        if (order == "natural") return indexX-indexY;
        else if (order == "reverse") return indexY-indexX;
        else if (order == "ascending") return x.length - y.length;
        else if (order == "descending") return y.length - x.length;
    });
    for (var i = 0; i < lis.length; i++) { container.appendChild(lis[i]); }
}

function createElement(tagname, parent, id, classname, text, type, name, link) {
    var element = document.createElement(tagname);
    if (parent) parent.append(element);
    if (id) element.id = id;
    if (classname) element.setAttribute("class", classname);
    if (tagname == "input" && text) element.setAttribute("value", text);
    else if (text) element.innerText = text;
    if (tagname == "a" && type) element.setAttribute("target", type);
    else if (tagname == "label" && type) element.setAttribute("for", type);
    else if (type) element.setAttribute("type", type);
    if (name) element.setAttribute("name", name);
    if (link) element.href = link;
    return element;
}

function createElements() {
    var div = createElement("div", document.body, "container");
    var middle = createElement("div", document.body, "middle");
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
    createElement("label", middle, "inputLabel", "", " Disable User-Select  ", "#select");
    check2.onclick = () => {
        var style = "auto";
        if (check2.checked) style = "none";
        document.body.style.userSelect = style;
    }
    var preview = createElement("p", middle, "", "preview");
    var link = createElement("a", middle, "namesImage", "", "Image", "_blank", "", "../images/names.png");

    return [div, check, preview];
}
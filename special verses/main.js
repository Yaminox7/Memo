var special_ayats = ["1st aya of Al-'Ala", "last aya of Al-Qiyama", "last aya of Al-Tin"];
var vertues = ["سبحان ربي الأعلى", "سبحانك، فبلى", "بلى وانا من الشاهدين"];
var container = document.createElement("ul");
document.body.append(container);

special_ayats.forEach((aya) => {
    var index = special_ayats.indexOf(aya);
    var li = document.createElement("li");
    li.innerText = "After the " + aya + ", say “ " + vertues[index] + " „ " + (index+1>=special_ayats.length ? "." : ";");
    container.append(li);
});
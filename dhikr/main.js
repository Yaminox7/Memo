var dikrs = [
    "Subhana Allah",
    "Alhamdu lillah",
    "La Ilaha Illa Allah",
    "Allahu Akbar",
    "Subhana lahi Wabi Hamdihi",
    "SubhanAllahi Adheem",
    "Allahumma Inni As Aluka Al Jannah",
    "Allahumma Ajirni Minannar",
    "Allahummagfir Lil Muslimina Wal Muslimat Wal Mu'minina Wal Mu'minat Al ahyai minhoum wal amouat"
];
var times = [10, 10, 10, 10, 3, 3, 9, 9, 5];
var prefix = "📿";

var ul = document.createElement("ul");
document.body.append(ul);
for (var i = 0; i < dikrs.length; i++) {
    var li = document.createElement("li");
    li.innerText = prefix + " " + dikrs[i] + " " + times[i] + "x";
    ul.append(li);
}
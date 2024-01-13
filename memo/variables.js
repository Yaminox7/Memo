var localStorageString = '{"Al-Mutaffifin":3,"Al-Fatiha":4,"Qaf":1,"Ash-Shams":4,"Al-Hashr":2,"Az-Zalzalah":4,"Al-Hujurat":3,"Al-Infitar":3,"Al-Mursalat":3,"An-Nasr":4,"Al-Insan":3,"Al-Qiyama":3,"Al-Bayyinah":4,"At-Takathur":4,"Al-Qari\'a":4,"Al-Inshiqaq":3,"Al-Fil":4,"Al-A\'la":4,"Al-\'Alaq":4,"Al-Qadr":4,"An-Nas":4,"Al-Kafirune":4,"At-Tariq":4,"Al-Balad":4,"Al-Ikhlas":4,"Ad-Duha":4,"An-Nazi\'at":3,"Al-Fajr":3,"Al-Mulk":3,"Al-Qalam":2,"Al-Masad":4,"An-Naba":3,"Al-Ghashiya":4,"Al-Buruj":3,"Quraysh":4,"Al-Ma\'un":4,"Al-Humazah":4,"Al-Layl":4,"An-Najm":2,"At-Tin":4,"Luqman":0,"Al-Adiyat":4,"Al-Asr":4,"Al-Falaq":4,"\'Abasa":3,"At-Takwir":3,"Al-Kawthar":4,"Ash-Sharh":4}';
// var localStorageString = '{"Al-Mutaffifin":"3","Al-Fatiha":"4","Qaf":"1","Ash-Shams":"4","Al-Hashr":"2","Az-Zalzalah":"4","Al-Hujurat":"3","Al-Infitar":"3","Al-Mursalat":"3","An-Nasr":"4","Al-Bayyinah":"4","At-Takathur":"4","Al-Qari\'a":"4","Al-Inshiqaq":"3","Al-Fil":"4","Al-A\'la":"4","Al-\'Alaq":"4","Al-Qadr":"4","An-Nas":"4","Al-Kafirune":"4","At-Tariq":"4","Al-Balad":"4","Al-Ikhlas":"4","Ad-Duha":"4","An-Nazi\'at":"3","Al-Fajr":"3","Al-Mulk":"3","Al-Qalam":"2","Al-Masad":"4","An-Naba":"3","Al-Ghashiya":"4","Al-Buruj":"3","Quraysh":"4","Al-Ma\'un":"4","Al-Humazah":"4","Al-Layl":"4","An-Najm":"2","At-Tin":"4","Luqman":"0","Al-Adiyat":"4","Al-Asr":"4","Al-Falaq":"4","\'Abasa":"3","At-Takwir":"3","Al-Kawthar":"4","Ash-Sharh":"4"}';
var localStorageMainString = '{"Al-Mutaffifin":{"Level":4},"Al-Fatiha":{"Level":4},"Qaf":{"Level":1},"Ash-Shams":{"Level":4,"Marked":4},"Al-Hashr":{"Level":2},"Az-Zalzalah":{"Level":4},"Al-Hujurat":{"Level":3},"Al-Infitar":{"Level":4,"Marked":4},"Al-Mursalat":{"Level":4},"An-Nasr":{"Level":4},"Al-Insan":{"Level":4,"Marked":3},"Al-Bayyinah":{"Level":4,"Marked":4},"At-Takathur":{"Level":4},"Al-Qari\'a":{"Level":4},"Al-Inshiqaq":{"Level":4,"Marked":4},"Al-Fil":{"Level":4},"Al-A\'la":{"Level":4},"Al-\'Alaq":{"Level":4},"Al-Muddathir":{"Level":1,"Marked":-1},"Al-Qadr":{"Level":4},"An-Nas":{"Level":4},"Al-Kafirune":{"Level":4},"At-Tariq":{"Level":4},"Al-Balad":{"Level":4},"Al-Qiyama":{"Level":4,"Marked":3},"Al-Ikhlas":{"Level":4},"Ad-Duha":{"Level":4},"An-Nazi\'at":{"Level":4,"Marked":4},"Al-Fajr":{"Level":4,"Marked":4},"Al-Mulk":{"Level":3},"Al-Qalam":{"Level":2},"Al-Masad":{"Level":4},"An-Naba":{"Level":4,"Marked":4},"Al-Ghashiya":{"Level":4},"Al-Buruj":{"Level":4,"Marked":3},"Quraysh":{"Level":4},"Al-Ma\'un":{"Level":4},"Al-Humazah":{"Level":4},"Al-Layl":{"Level":4,"Marked":4},"An-Najm":{"Level":2},"At-Tin":{"Level":4},"Luqman":{"Level":0},"Al-Adiyat":{"Level":4,"Marked":4},"Al-Asr":{"Level":4},"Al-Falaq":{"Level":4},"\'Abasa":{"Level":4,"Marked":4},"Muhammad":{"Level":-1,"Marked":-1},"At-Takwir":{"Level":4,"Marked":3},"Al-Kawthar":{"Level":4},"Ash-Sharh":{"Level":4}}';

function print(obj, p=true) {
    if (typeof obj != 'object') return obj;
    text = "{";
    var kv = Object.entries(obj);
    for (var i = 0; i < kv.length; i++) {
        text += kv[i][0] + ": " + print(kv[i][1], false) + (i < kv.length-1 ? ", " : "");
    }
    text += "}";
    if (p) console.log(text);
    else return text
}

function getArr(arr, start, end) {
    if (start < 0) start += arr.length;
    if (end < 0) end += arr.length;
    if (start > end) [end, start] = [start, end];
    if (start > arr.length-1 || end > arr.length-1) return
    if ((end == undefined && start != undefined) || end == start) return arr[start];
    var temp;
    if (typeof arr == "string") temp = "";
    else temp = [];
    for (var i = start; i <= end; i++) {
        if (typeof arr == "string") temp += arr[i];
        else temp.push(arr[i]);
    }
    return temp;
}

function reset() {
    var lc = "{Al-Mutaffifin: {Level: 4}, Al-Fatiha: {Level: 4}, Qaf: {Level: 1}, Ash-Shams: {Level: 4, Marked: 4}, Al-Hashr: {Level: 2}, Az-Zalzalah: {Level: 4}, Al-Hujurat: {Level: 3}, Al-Infitar: {Level: 4, Marked: 4}, Al-Mursalat: {Level: 4}, An-Nasr: {Level: 4}, Al-Insan: {Level: 4, Marked: 3}, Al-Bayyinah: {Level: 4, Marked: 4}, At-Takathur: {Level: 4}, Al-Qari'a: {Level: 4}, Al-Inshiqaq: {Level: 4, Marked: 4}, Al-Fil: {Level: 4}, Al-A'la: {Level: 4}, Al-'Alaq: {Level: 4}, Al-Muddathir: {Level: 1, Marked: -1}, Al-Qadr: {Level: 4}, An-Nas: {Level: 4}, Al-Kafirune: {Level: 4}, At-Tariq: {Level: 4}, Al-Balad: {Level: 4}, Al-Qiyama: {Level: 4, Marked: 3}, Al-Ikhlas: {Level: 4}, Ad-Duha: {Level: 4}, An-Nazi'at: {Level: 4, Marked: 4}, Al-Fajr: {Level: 4, Marked: 4}, Al-Mulk: {Level: 3}, Al-Qalam: {Level: 2}, Al-Masad: {Level: 4}, An-Naba: {Level: 4, Marked: 4}, Al-Ghashiya: {Level: 4}, Al-Buruj: {Level: 4, Marked: 3}, Quraysh: {Level: 4}, Al-Ma'un: {Level: 4}, Al-Humazah: {Level: 4}, Al-Layl: {Level: 4, Marked: 4}, An-Najm: {Level: 2}, At-Tin: {Level: 4}, Luqman: {Level: 0}, Al-Adiyat: {Level: 4, Marked: 4}, Al-Asr: {Level: 4}, Al-Falaq: {Level: 4}, 'Abasa: {Level: 4, Marked: 4}, Muhammad: {Level: -1, Marked: -1}, At-Takwir: {Level: 4, Marked: 3}, Al-Kawthar: {Level: 4}, Ash-Sharh: {Level: 4}}";
    var limit = lc.length;
    for (var i = 0; i < limit; i++) {
        if (lc[i] == "{" || lc[i] == "," || lc[i] == ":") {
            var c = lc[i] == "{" ? 1 : (lc[i] == "," ? 2 : 0);
            lc = lc.slice(0, i+c) + "\"" + lc.slice(i+c); 
            limit+= c | 1;
            i += c | 1;
        }
    }
    var obj = JSON.parse(lc);
    localStorage.clear()
    for (var [key, value] of Object.entries(obj)) {
        localStorage.setItem(key, JSON.stringify(value));
    }
}
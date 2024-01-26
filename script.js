function love() {
    var name1 = document.getElementById("Nameone").value;
    var name2 = document.getElementById("Nametwo").value;
    if (name1.length <= 2) {
        alert("Enter your least 3 charater");
    }
    if (name2.length <= 2) {
        alert("Enter your least 3 charater");
    }
    else {
        var random = Math.floor(Math.random() * 100);
        document.getElementById("print").innerHTML = name1 + "and" + name2 + "=" + random + "%" + "of love";
    }
    if (random <= 10 || random <= 49) {
        document.getElementById("statement").innerHTML = "You didn't match";
    }
    else if (random <= 50 || random <= 100) {
        document.getElementById("statement").innerHTML = "Lovely Relationship";
    }
}
function whosPaying(names) {
    console.log(names[Math.floor((Math.random() * names.length))] + " is going to buy lunch for us today");
}

var names = ["Ramesh", "Suresh", "Ram", "Shayam"];
whosPaying(names);
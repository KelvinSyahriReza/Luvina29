function balikKata (kata){
    var tampung ='';
    for (var i = 0; i < kata.length; i++){
        tampung = kata[i] + tampung
    }
    return tampung
}

console.log(balikKata('hello word'))
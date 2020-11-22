function mcd(x, y) {
    var risultato = 0;
    if(x == y) {
        risultato = x;
    } else if(x < y) {
        risultato = mcd(x, (y - x));
    } else {
        risultato = mcd((x - y), y);
    }
    return risultato;
}

document.write(mcd(21, 12));
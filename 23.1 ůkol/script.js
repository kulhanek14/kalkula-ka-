function secti() {
    var cislo1 = document.getElementById('cislo1').value;
    var cislo2 = document.getElementById('cislo2').value;
    var vysledek = parseFloat(cislo1) + parseFloat(cislo2);
    document.getElementById('vysledek').value = vysledek;
}

function odecti(){

    var cislo1 = document.getElementById('cislo1').value;
    var cislo2 = document.getElementById('cislo2').value;
    var vysledek = parseFloat(cislo1) - parseFloat(cislo2);
    document.getElementById('vysledek').value = vysledek;
}

function nasobit(){

    var cislo1 = document.getElementById('cislo1').value;
    var cislo2 = document.getElementById('cislo2').value;
    var vysledek = parseFloat(cislo1) * parseFloat(cislo2);
    document.getElementById('vysledek').value = vysledek;
}


function delit(){

    var cislo1 = document.getElementById('cislo1').value;
    var cislo2 = document.getElementById('cislo2').value;
    var vysledek = parseFloat(cislo1) / parseFloat(cislo2);
    document.getElementById('vysledek').value = vysledek;
}












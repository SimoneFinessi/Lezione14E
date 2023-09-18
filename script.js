
function aggiungi() {
    var table = document.getElementById("myTable");
    var rows = table.getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++) {
        var newRowCell = rows[i].insertCell(-1);
    }
}

function aggiungiRiga() {
    var table = document.getElementById("myTable");
    var newRow = table.insertRow(-1);
    var colonne = table.rows[0].cells.length;

    for (var i = 0; i < colonne; i++) {
        var newCell = newRow.insertCell();
    }
}
function rimuoviPrimaColonna() {
    var table = document.getElementById("myTable");
    var rows = table.getElementsByTagName("tr");
    var colonne = table.rows[0].cells.length;
    if (colonne>1){
        for (var i = 0; i < rows.length; i++) {
            rows[i].deleteCell(0);
        }
    }
}
function rimuoviPrimaRiga() {
    var table = document.getElementById("myTable");
    var rows = table.getElementsByTagName("tr").length;
    if (rows>1){
        table.deleteRow(0);
    }
}
function mostraNumeroColonne() {
    var table = document.getElementById("myTable");
    var numeroColonne = table.getElementsByTagName("tr")[0].getElementsByTagName("td").length;
    alert("Numero di colonne: " + numeroColonne);
}

function mostraNumeroRighe() {
    var table = document.getElementById("myTable");
    var numeroRighe = table.getElementsByTagName("tr").length;
    alert("Numero di righe: " + numeroRighe);
}

function toggleTabella() {
    var table = document.getElementById("myTable");
    if (table.style.display === "none") {
        table.style.display = "table";
    } else {
        table.style.display = "none";
    }
}
    


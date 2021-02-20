var selectedRow = null;

function onFormSubmit() {
    var formData = readFormData();
    if (selectedRow == null)
        insertNewRecord(formData);
    else
        updateRecord(formData);
    resetForm();

}


function readFormData() {

    var formData = {};

    formData["compañia"] = document.getElementById("compañia").value;
    formData["tipo"] = document.getElementById("tipo").value;
    formData["logo"] = document.getElementById("logo").value;
    formData["ur"] = document.getElementById("ur").value;
    formData["posicion"] = document.getElementById("posicion").value;
    formData["ubicacion"] = document.getElementById("ubicacion").value;
    formData["categoria"] = document.getElementById("categoria").value;
    formData["descri"] = document.getElementById("descri").value;
    formData["apli"] = document.getElementById("apli").value;
    formData["exam"] = document.getElementById("exam").value;
    return formData;
}

function insertNewRecord(data) {

    var table = document.getElementById("contactolista").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);

    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.compañia;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.tipo;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.logo;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.ur;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.posicion;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.ubicacion;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.categoria;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.descri;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = data.apli;
    cell10 = newRow.insertCell(9);
    cell10.innerHTML = data.exam;
    cell11 = newRow.insertCell(10);
    cell12.innerHTML = `<button onclick="onEdit(this)" class="btn btn-warning">Editar</button>
                        <button onclick="onDelete(this)" class="btn btn-danger">Eliminar</button>`
}

function resetForm() {
    document.getElementById("compañia").value = "";
    document.getElementById("tipo").value = "";
    document.getElementById("logo").value = "";
    document.getElementById("ur").value = "";
    document.getElementById("posicion").value = "";
    document.getElementById("ubicacion").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("descri").value = "";
    document.getElementById("apli").value = "";
    document.getElementById("exam").value = "";

    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("compañia").value = selectedRow.cells[0].innerHTML;
    document.getElementById("tipo").value = selectedRow.cells[1].innerHTML;
    document.getElementById("logo").value = selectedRow.cells[2].innerHTML;
    document.getElementById("ur").value = selectedRow.cells[3].innerHTML;
    document.getElementById("posicion").value = selectedRow.cells[1].innerHTML;
    document.getElementById("ubicacion").value = selectedRow.cells[2].innerHTML;
    document.getElementById("categoria").value = selectedRow.cells[3].innerHTML;
    document.getElementById("descri").value = selectedRow.cells[1].innerHTML;
    document.getElementById("apli").value = selectedRow.cells[2].innerHTML;
    document.getElementById("exam").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.compañia;
    selectedRow.cells[1].innerHTML = formData.tipo;
    selectedRow.cells[2].innerHTML = formData.logo;
    selectedRow.cells[3].innerHTML = formData.ur;
    selectedRow.cells[4].innerHTML = formData.posicion;
    selectedRow.cells[5].innerHTML = formData.ubicacion;
    selectedRow.cells[6].innerHTML = formData.categoria;
    selectedRow.cells[7].innerHTML = formData.descri;
    selectedRow.cells[8].innerHTML = formData.apli;
    selectedRow.cells[9].innerHTML = formData.exam;


}

function onDelete(td) {
    row = td.parentElement.parentElement;
    document.getElementById("contactolista").deleteRow(row.rowIndex);
    resetForm();
}
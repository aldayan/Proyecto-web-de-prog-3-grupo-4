var currentID = 0;

function Guardar() {

    var obj = {
        ubicacion: document.getElementById('ubicacion').value,
        posicion: document.getElementById('posicion').value,
        compañia: document.getElementById('compañia').value,
        tipo: document.getElementById('tipo').value,
        photo: document.getElementById('photo').value,
        ur: document.getElementById('ur').value,
        categoria: document.getElementById('categoria').value,
        descri: document.getElementById('descri').value,
        apli: document.getElementById('apli').value,
        exam: document.getElementById('exam').value

    };
    console.log(obj);


    var array = JSON.parse(localStorage.getItem('data'));

    console.log(array);

    if (array != null && array != undefined) {
        array.push(obj);
    } else {
        array = [obj];
    }

    localStorage.setItem('data', JSON.stringify(array));
    alert('Guardado');
}

function Mostrar() {
    var array = JSON.parse(localStorage.getItem('data'));

    if (array != null && array != undefined) {
        var tbody = document.getElementById('tabla');
        var tr = "";
        for (var x = 0; x < array.length; x++) {
            tr += `
            <tr>
                <td>${x+1}</td>
                <td>${array[x].ubicacion}</td>
                <td>${array[x].posicion}</td>
                <td>${array[x].compañia}</td>
                <td>
                   
                </td>
            </tr>`;
        }

        tbody.innerHTML = tr;
    } else {
        alert('No hay datos');
    }
}



function Eliminar(ID) {
    var array = JSON.parse(localStorage.getItem('data'));

    if (ID > array.length) {
        alert('ID no valido');
    } else {
        array.splice(ID, 1);
        localStorage.setItem('data', JSON.stringify(array));
        Mostrar();
    }
}

function Editar(ID) {
    var array = JSON.parse(localStorage.getItem('data'));

    if (ID > array.length) {
        alert('ID no valido');
    } else {
        document.getElementById('ubicacion').value = array[ID].ubicacion;
        document.getElementById('posicion').value = array[ID].posicion;
        document.getElementById('compañia').value = array[ID].compañia;
        document.getElementById('tipo').value = array[ID].tipo;
        document.getElementById('photo').value = array[ID].photo;
        document.getElementById('ur').value = array[ID].ur;
        document.getElementById('categoria').value = array[ID].categoria;
        document.getElementById('descri').value = array[ID].descri;
        document.getElementById('apli').value = array[ID].apli;
        document.getElementById('exam').value = array[ID].exam;
        currentID = ID;
    }

}

function Editar2() {
    var array = JSON.parse(localStorage.getItem('data'));

    if (currentID > array.length) {
        alert('ID no valido');
    } else {
        array[currentID].ubicacion = document.getElementById('ubicacion').value;
        array[currentID].posicion = document.getElementById('posicion').value;
        array[currentID].compañia = document.getElementById('compañia').value;
        array[currentID].tipo = document.getElementById('tipo').value;
        array[currentID].photo = document.getElementById('photo').value;
        array[currentID].ur = document.getElementById('ur').value;
        array[currentID].categoria = document.getElementById('categoria').value;
        array[currentID].descri = document.getElementById('descri').value;
        array[currentID].apli = document.getElementById('apli').value;
        array[currentID].exam = document.getElementById('exam').value;

        localStorage.setItem('data', JSON.stringify(array));
        Mostrar();
    }

}

function Most() {
    var array = JSON.parse(localStorage.getItem('data'));

    if (array != null && array != undefined) {
        var tbody = document.getElementById('tabla');
        var tr = "";
        for (var x = 0; x < array.length; x++) {
            tr += `
            <tr>
                <td>${x+1}</td>
                <td>${array[x].tipo}</td>
                <td>${array[x].photo}</td>
                <td>${array[x].ur}</td>
                <td>${array[x].categoria}</td>
                <td>${array[x].descri}</td>
                <td>${array[x].apli}</td>
                <td>${array[x].exam}</td>

                <td>
                   
                </td>
            </tr>`;
        }

        tbody.innerHTML = tr;
    } else {
        alert('No hay datos');
    }
}

function Mostu() {
    var array = JSON.parse(localStorage.getItem('data'));

    if (array != null && array != undefined) {
        var tbody = document.getElementById('tabla');
        var tr = "";
        for (var x = 0; x < array.length; x++) {
            tr += `
            <tr>
                <td>${x+1}</td>
                <td>${array[x].ubicacion}</td>
                <td>${array[x].posicion}</td>
                <td>${array[x].compañia}</td>
                <td>${array[x].tipo}</td>
                <td>${array[x].photo}</td>
                <td>${array[x].ur}</td>
                <td>${array[x].categoria}</td>
                <td>${array[x].descri}</td>
                <td>${array[x].apli}</td>
                <td>${array[x].exam}</td>

                <td>
                        <button class="btn btn-danger" onClick="Eliminar(${x})">Eliminar</button>
                    <button class="btn btn-warning onClick="Editar(${x})" >Editar</button>
                    
                </td>
            </tr>`;
        }

        tbody.innerHTML = tr;
    } else {
        alert('No hay datos');
    }
}
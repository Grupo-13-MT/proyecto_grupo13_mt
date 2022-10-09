function GetData(t) {
    let request = $.ajax({
        method: "GET",
        url: env.api + t,
    });
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(request.responseJSON.items)
        }, 700);
    })
}

function AddItem(t, d) {
    $.ajax({
        method: "POST",
        url: env.api + t,
        data: d,
        /*data: {
            brand:'HOLA',
            rooms: 2,
            category_id: 7,
            name: 'JHOJANN'
        },*/
        success: function () {
            alert('Se ha añadido un nuevo registro');
        },
        error: function () {
            alert('Ha ocurrido un error');
        }
    });
}

function DeleteItem(t, numid) {
    $.ajax({
        type: "DELETE",
        url: env.api + t,
        data: { id: numid },
        success: function () {
            alert('Eliminado');
        },
        error: function () {
            alert('Ha ocurrido un error');
        }
    });
}

function UpdateItem(t, d) {
    data = {
        brand: 'se actualizó X2',
        rooms: 2,
        category_id: 7,
        name: 'JHOJANN',
        id: 91
    }
    datatosend = JSON.stringify(data)
    $.ajax({
        type:"PUT",
        url: env.api + t,
        //data: d,
        datatosend,
        datatype: "JSON",
        success: function () {
            alert('Actualizado');
        },
        error: function () {
            alert('Ha ocurrido un error');
        }
    });
}

UpdateItem('/cabin/cabin', 1)







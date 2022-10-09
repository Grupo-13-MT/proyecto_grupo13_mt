function GetData(t) {
    let request = $.ajax({
        method: "GET",
        url: env.api + t,
    });
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(request.responseJSON.items)
        }, 1000);
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
    if (confirm('¿Está segur@ de eliminar el registro?')) {
        let data = { id: numid }
        let dataToSend = JSON.stringify(data)
        $.ajax({
            url: env.api + t,
            type: "DELETE",
            data: dataToSend,
            contentType: "application/JSON",
            datatype: "JSON",
            success: function () {
                alert('Eliminado');
                location.reload();
            },
            error: function () {
                alert('Ha ocurrido un error');
            }
        });
    }
}

function UpdateItem(t, d) {

    let dataToSend = JSON.stringify(d)
    $.ajax({
        url: env.api + t,
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function () {
            alert('Actualizado');
        },
        error: function () {
            alert('Ha ocurrido un error');
        }
    });
}

//DeleteItem('/cabin/cabin', {id: 91})

/*UpdateItem('/cabin/cabin', {
    brand: 'sdfasdfasdfasdfasd',
    rooms: 2,
    category_id: 7,
    name: 'JHOJANN',
    id: 108
})*/







let ApiRest = "https://ge98b58f620aa8b-jk6qaf05q3cydvl5.adb.us-phoenix-1.oraclecloudapps.com/ords/admin";
let datalist;

function rcvdta (data){
    datalist = data.items;
    console.log(data.items)
}

function GetItems(tabla) {
    var request = $.ajax({
        method: "GET",
        url: ApiRest + tabla
    });
    request.done(function (data) {
        /*for (let index = 0; index < data.items.length; index++) {
            console.log(data.items[index].name)
            
            table += '<tr><td>'+data.items[index].name+'</td><td>'+data.items[index].email+'</td><td>'+data.items[index].age+'</td></tr>';
        }
        $(id).append(table);*/
        rcvdta(data)
    });
}

function AddItem (t, d) {
    $.ajax({
        method: "POST",
        url: ApiRest + t,
        data: d,
        success: function () {
            alert('Se ha añadido un nuevo registro');
        },
        error: function () {
            alert('Ha ocurrido un error');
        }
    });
}


function DeleteItem (t, id) {
    $.ajax({
        method: "DELETE",
        url: ApiRest + t,
        data: {"id":64},
        success: function () {
            alert('Eliminado');
        },
        error: function () {
            alert('Ha ocurrido un error');
        }
    });
}

//AddItem('/message/message')

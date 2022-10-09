function controller(view) {
    switch (view) {
        case 'cabañas':
            cabañas()
            break;
        case 'clientes':
            clientes()
            break;
        case 'mensajes':
            mensajes()
            break;
        default:
            break;
    }
}

function cabañas() {
    GetData('/cabin/cabin').then((d) => {
        for (let index = 0; index < d.length; index++) {
            let row = "<tr>";
            row += "<td>" + d[index].brand + "</td>";
            row += "<td>" + d[index].category_id + "</td>";
            row += "<td>" + d[index].name + "</td>";
            row += "<td>" + d[index].id + "</td>";
            row += '<td><button onclick=UpdateItem('+d[index]+')>Actualizar</button><button onclick="DeleteItem(`/cabin/cabin`,'+d[index].id+')">Eliminar</button></td>';
            row += "</tr>";
            document.getElementById('cabañasl').innerHTML += row;
        }
    })
}

function clientes() {
    GetData('/client/client').then((d) => {
        console.log(d)
        for (let index = 0; index < d.length; index++) {
            let row = "<tr>";
            row += "<td>" + d[index].name + "</td>";
            row += "<td>" + d[index].email + "</td>";
            row += "<td>" + d[index].age + "</td>";
            row += "</tr>";
            document.getElementById('clientsl').innerHTML += row;
        }
    })
}

function mensajes() {
    GetData('/message/message').then((d) => {
        console.log(d)
        for (let index = 0; index < d.length; index++) {
            let row = "<tr>";
            row += "<td>" + d[index].id + "</td>";
            row += "<td>" + d[index].messagetext + "</td>";
            row += "</tr>";
            document.getElementById('messagesl').innerHTML += row;
        }
    })
}

function AgregarCabaña() {
    AddItem('/cabin/cabin', {
        brand: document.getElementById('formCB').brand.value,
        rooms: document.getElementById('formCB').rooms.value,
        category_id: document.getElementById('formCB').category_id.value,
        name: document.getElementById('formCB').name.value
    });
    render('cabañas')
}

function AgregarCliente() {
    AddItem('/client/client', {
        name: document.getElementById('formC').name.value,
        email: document.getElementById('formC').email.value,
        age: document.getElementById('formC').age.value       
    });
    render('clientes')
}

function AgregarMensaje() {
    AddItem('/message/message', {
        messagetext: document.getElementById('formM').message.value,
    });
    render('mensajes')
}
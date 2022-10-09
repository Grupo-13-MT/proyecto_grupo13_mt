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
            let UpdateHTML = `
            <form action='#' method='post' id='formCB'>
                <input type='hidden' id='id' value='`+ d[index].id + `'>
                <label for='brand'>Brand</label>
                <input type='text' placeholder='Brand' id='brand' value='`+ d[index].brand + `'>
                <label for='rooms'>Rooms</label>
                <input type='number' placeholder='Number Rooms' id='rooms' value='`+ d[index].rooms + `'>
                <label for='category_id'>Category</label>
                <input type='number' placeholder='Number category' id='category_id' value='`+ d[index].category_id + `'>
                <label for='name'>Name</label>
                <input type='text' placeholder='Name' id='name' value='`+ d[index].name + `'>
            </form>
            `;
            let row = "<tr>";
            row += "<td>" + d[index].brand + "</td>";
            row += "<td>" + d[index].category_id + "</td>";
            row += "<td>" + d[index].name + "</td>";
            row += "<td>" + d[index].rooms + "</td>";
            row += '<td><button onclick=UpdateItem('+d[index]+')>Actualizar</button><button onclick="DeleteItem(`/cabin/cabin`,'+d[index].id+')">Eliminar</button></td>';
            row += "</tr>";
            document.getElementById('cabañasl').innerHTML += row;
        }
    })

    //Boton para actualizar
    document.getElementById('UpdateL').addEventListener('click', () => {
        UpdateItem('/cabin/cabin', {
            brand: document.getElementById('formCB').brand.value,
            rooms: Number(document.getElementById('formCB').rooms.value),
            category_id: Number(document.getElementById('formCB').category_id.value),
            name: document.getElementById('formCB').name.value,
            id: Number(document.getElementById('formCB').id.value),
        });
        render('cabañas')
    });
}

function clientes() {
    GetData('/client/client').then((d) => {
        console.log(d)
        for (let index = 0; index < d.length; index++) {
            let UpdateHTML = `
            <form action='index.html' method='post' id='formC'>
                  <input  id='id' type='hidden' value='`+ d[index].id + `'>
                  <label for='name'>Name</label>
                  <input  id='name' type='text' placeholder='Name' value='`+ d[index].name + `'>
                  <label for='email'>Email</label>
                  <input id='email' type='email' placeholder='Email' value='`+ d[index].email + `'>
                  <label for='age'>Age</label>
                  <input id='age' type='number' placeholder='Age' value='`+ d[index].age + `'>
          </form>
            `;
            let row = "<tr>";
            row += "<td>" + d[index].name + "</td>";
            row += "<td>" + d[index].email + "</td>";
            row += "<td>" + d[index].age + "</td>";
            row += '<td><button onclick="modal(`Actualizar cliente`, `' + UpdateHTML + '`)">Actualizar</button><button onclick="DeleteItem(`/client/client`, ' + d[index].id + ')">Eliminar</button></td>';
            row += "</tr>";
            document.getElementById('clientsl').innerHTML += row;
        }
    })
    document.getElementById('UpdateL').addEventListener('click', () => {
        UpdateItem('/client/client', {
            name: document.getElementById('formC').name.value,
            email: document.getElementById('formC').email.value,
            age: Number(document.getElementById('formC').age.value),
            id: Number(document.getElementById('formC').id.value)
        });
        render('clientes')
    });
}


function mensajes() {
    GetData('/message/message').then((d) => {
        console.log(d)
        for (let index = 0; index < d.length; index++) {
            let UpdateHTML = `
                <form id='formM' method='post'>
                  <input  id='id' type='hidden' value='`+ d[index].id + `'>
                  <label>Mensaje</label>
                  <textarea class='input-text' id='message' value='`+ d[index].messagetext + `' placeholder='` + d[index].messagetext + `'></textarea>
                </form>  
                `;
            let row = "<tr>";
            row += "<td>" + d[index].id + "</td>";
            row += "<td>" + d[index].messagetext + "</td>";
            row += '<td><button onclick="modal(`Actualizar mensaje`, `' + UpdateHTML + '`)">Actualizar</button><button onclick="DeleteItem(`/message/message`, ' + d[index].id + ')">Eliminar</button></td>';
            row += "</tr>";
            document.getElementById('messagesl').innerHTML += row;
        }
    })
    document.getElementById('UpdateL').addEventListener('click', () => {
        UpdateItem('/message/message', {
            messagetext: document.getElementById('formM').message.value,
            id: Number(document.getElementById('formM').id.value)
        });
        render('mensajes')
    });
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


function modal(t, b) {
    document.getElementById('hero').hidden = true;
    document.getElementById('modal').hidden = false;
    document.getElementById('title_modal').innerHTML = '<h2>' + t + '</h2>';
    document.getElementById('body_modal').innerHTML = '<div>' + b + '</div>';
    document.getElementById('close_modal').addEventListener('click', () => {
        document.getElementById('modal').hidden = true;
        document.getElementById('hero').hidden = false;
    })
    document.getElementById('UpdateL').addEventListener('click', () => {
        document.getElementById('modal').hidden = true;
        document.getElementById('hero').hidden = false;
    })
}


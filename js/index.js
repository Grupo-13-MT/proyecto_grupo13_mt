class users {
    constructor() {
        this.ApiRest = 'https://ge98b58f620aa8b-jk6qaf05q3cydvl5.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client';
        //this.userlist = 'jsjs';
    }

    GetUsers() {
        let userlist;
        var request = $.ajax({
            method: "GET",
            url: this.ApiRest
        });
        return request;
    }

    AddUser() {
        $.ajax({
            method: "POST",
            url: this.ApiRest,
            data: {"NAME":"JHOJANN", "EMAIL":"JHOJANN.TRIANA@GMAIL.COM", "AGE":18},
            success: function () {
                alert('Se ha creado el usuario');
            },
            error: function () {
                alert('Ha ocurrido un error');
            }
        });
    }
}

let u = new users();
let userslist = u.GetUsers();

console.log(userslist.responseJSON)


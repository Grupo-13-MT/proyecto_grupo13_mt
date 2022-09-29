class users {
    constructor() {
         this.ApiRest = 'https://ge98b58f620aa8b-jk6qaf05q3cydvl5.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client';
        //this.userlist = 'jsjs';
        this.data;
    }

    GetItems() {
        return $.ajax({
            method: "GET",
            url: this.ApiRest
        });
    }

    AddItem(dates) {
        $.ajax({
            method: "POST",
            url: this.ApiRest,
            data: dates,
            success: function () {
                alert('Se ha creado el usuario');
            },
            error: function () {
                alert('Ha ocurrido un error');
            }
        });
    }
}

class cabañas extends users{
    constructor () {
        super();
        this.ApiRest = 'https://ge98b58f620aa8b-jk6qaf05q3cydvl5.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/cabin/cabin';
    }
}

class messages extends users{
    constructor () {
        super();
        this.ApiRest = 'https://ge98b58f620aa8b-jk6qaf05q3cydvl5.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/cabin/cabin';
    }
}

let u = new users();
let c = new cabañas();
let m = new messages();

c.AddItem({"brand":"holis", "rooms":7, "category_id":8, "name":"jhojannnn"});
console.log(c.GetItems()) /*ver resultados por consola*/





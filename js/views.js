function render(view) {
    $.ajax({
        method: "GET",
        url: env.url + "/layouts/" + view +".html",
    }).done(function (r) {
        document.getElementById('app').innerHTML = r;
    });
    controller(view)
}
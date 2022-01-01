function semuaMenu(){
    $.getJSON('assets/menu.json', function(data) {
        let menu=data.menu;
        
        $.each(menu, function(i, data){
            $('#daftar-menu').append(`<div class="col-md-3 d-flex">
            <div class="card mb-5 " style="min-height:max-content; width:90%">
            <div class="card-header">${data.jenis}</div>
            <img src="assets/menu/${data.gambar}" style="object-fit:contain; height:200px !important; align:center">
            <div class="card-body">
            <h5 class="card-title">${data.nama}</h5>
            <p class="card-text">${data.deskripsi}</p><br>
            <p class="card-text">${data.harga}</p>
            </div>
            <div class="card-footer">
            <small class="text-muted my-2" style="float:right">${data.estimasi}</small>
            <a href="#" class="btn btn-primary" style="background-color:red; border:solid grey 1px">Pesan Sekarang</a>
            </div>
            </div>
            </div>`);
        });
    });
}

semuaMenu();

$('.nav-link').on('click', function(){
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    let jenis = $(this).html();
    $('h1').html(jenis);

    if(jenis=='All Menu'){
        $('#daftar-menu').empty();
        semuaMenu();
        return;
    }

    $.getJSON('assets/menu.json', function(data){
        let menu = data.menu;
        let content = '';

        $.each(menu, function(i,data){
                if(data.jenis==jenis){
                    console.log("test")
                    content +=`<div class="col-md-3 d-flex">
                    <div class="card mb-5 " style="min-height:max-content; width:100%">
                    <div class="card-header">${data.jenis}</div>
                    <img src="assets/menu/${data.gambar}" style="object-fit:contain; height:233px !important; align:center">
                    <div class="card-body">
                    <h5 class="card-title">${data.nama}</h5>
                    <p class="card-text">${data.deskripsi}</p><br>
                    <p class="card-text">${data.harga}</p>
                    </div>
                    <div class="card-footer">
                    <small class="text-muted my-2" style="float:right">${data.estimasi}</small>
                    <a href="#" class="btn btn-primary" style="background-color:red; border:solid grey 1px">Pesan Sekarang</a>
                    </div>
                    </div>
                    </div>`;
                }
        });
        $('#daftar-menu').html(content);
    });

});
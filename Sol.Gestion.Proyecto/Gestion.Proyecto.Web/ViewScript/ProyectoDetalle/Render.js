(function () {

    $(document).ready(function () {
        $("#btnCancelar").click(CancelarProyectoDetalle);
    })

    var CancelarProyectoDetalle = function () {
        window.location = $("#UrlConsultarBandeja").val();
    }
})()

function Render(thi) {
    $.ajax({
        url: $("#UrlRenderProyectoDetalle").val(),
        data: {
            Codigo: $(thi).attr('codeform')
        },
        type: 'GET',
        cache: false,
        success: function (data) {
            //$("#IdFormDetalle").html('');
            $("#IdFormDetalle").html(data);

            //$("#btnDetalleTarjetaLugarRegistrar").click(ValidForm)
        },
    });
}


function Busqueda(IdGrid, Frm) {
    $.ajax({
        url: $("#" + Frm).attr('action'),
        data: $("#" + Frm).serialize(),
        type: 'GET',
        cache: false,
        success: function (data) {
            $("#" + IdGrid).html(data);
        },
        error: function (req, status, error) {

        },
        complete: function (req, status, error) {
            SetTotalRecordsGeneric();
        }

    });
}

function SetTotalRecordsGeneric(IdGrid) {
    $("#" + IdGrid + " tfoot tr a, #" + IdGrid + " thead tr a").on("click", function (e) {

        var SortDir = "";
        var sort = "";
        var page = 1;
        var queue = "";

        var url = $(this).attr('href');

        var arr = new Array()
        arr = url.split("?")
        queue = arr[0].toString() + "?";
        arr = arr[1].toString().split("&")

        for (var i = 0; i <= arr.length - 1; i++) {
            if (arr[i].indexOf("page") >= 0)
                page = arr[i].toString().split("=")[1].toString();
            if (arr[i].indexOf("sort") >= 0)
                sort = arr[i].toString().split("=")[1].toString();
            if (arr[i].indexOf("sortdir") >= 0)
                SortDir = arr[i].toString().split("=")[1].toString();
        }
    });

    PaintFooterGridGeneric(IdGrid);
}

function PaintFooterGridGeneric(IdGrid) {
    var RowCount = $("#RowCountGeneric").val();
    var RowsPerPage = $('#RowsPerPageGeneric').val();

    //$("#IdGridProyectoDetalle .detail").attr("href", "#");
    $("#" + IdGrid + " tfoot tr:last td").prepend("<a id='tfootPage'  class='total_registros'></a>");
    $("#tfootPage").html($('#FooterDescGeneric').val());
    if (RowCount <= 0) {
        $('#' + IdGrid).css('display', 'block');
    } else {
        $('#' + IdGrid).css('display', '');
    }
}









function Edit() {
    $.ajax({
        url: $("#UrlDetalleTarjetaLugarEdit").val(),
        data: {},
        type: 'GET',
        cache: false,
        success: function (data) {
            formulario();
        },
        error: function (req, status, error) {

        },
        complete: function (req, status, error) {
            SetTotalRecordsProyecto();
        }

    });
}

function formulario() {
    bootbox.dialog({
        title: "This is a form in a modal.",
        message: '<div class="row">  ' +
            '<div class="col-md-12"> ' +
            '<form class="form-horizontal"> ' +
            '<div class="form-group"> ' +
            '<label class="col-md-4 control-label" for="name">Name</label> ' +
            '<div class="col-md-4"> ' +
            '<input id="name" name="name" type="text" placeholder="Your name" class="form-control input-md"> ' +
            '<span class="help-block">Here goes your name</span> </div> ' +
            '</div> ' +
            '<div class="form-group"> ' +
            '<label class="col-md-4 control-label" for="awesomeness">How awesome is this?</label> ' +
            '<div class="col-md-4"> <div class="radio"> <label for="awesomeness-0"> ' +
            '<input type="radio" name="awesomeness" id="awesomeness-0" value="Really awesome" checked="checked"> ' +
            'Really awesome </label> ' +
            '</div><div class="radio"> <label for="awesomeness-1"> ' +
            '<input type="radio" name="awesomeness" id="awesomeness-1" value="Super awesome"> Super awesome </label> ' +
            '</div> ' +
            '</div> </div>' +
            '</form> </div>  </div>',
        buttons: {
            success: {
                label: "Save",
                className: "btn-success",
                callback: function () {
                    var name = $('#name').val();
                    var answer = $("input[name='awesomeness']:checked").val()
                    Example.show("Hello " + name + ". You've chosen <b>" + answer + "</b>");
                }
            }
        }
    }
        );
}
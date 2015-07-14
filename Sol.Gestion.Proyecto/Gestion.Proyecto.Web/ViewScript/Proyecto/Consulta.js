(function () {
    $(document).ready(function () {
        $("#Codigo").rules("remove");
        $('#FrmProyectoConsulta').keypress(KeyEnterInput);
        $("#btnProyectoBuscar").click(BuscarProyecto);
        $("#btnProyectoNuevo").click(NuevoProyecto);
    })

    var KeyEnterInput = function (e) {
        if (e.which === 13) {
            BuscarProyecto();
            return false;
        }
    }

    var NuevoProyecto = function () {
        window.location = $("#UrlNuevoProyecto").val();
    }

    var BuscarProyecto = function () {
        $.ajax({
            url: $("#FrmProyectoConsulta").attr('action'),
            data: $("#FrmProyectoConsulta").serialize(),
            type: 'GET',
            cache: false,
            success: function (data) {
                $("#IdGridProyecto").html(data);
            },
            error: function (req, status, error) {

            },
            complete: function (req, status, error) {
                SetTotalRecordsProyecto();
            }

        });
    }
})()

function SetTotalRecordsProyecto() {
    $("#IdGridProyecto tfoot tr a, #IdGridProyecto thead tr a").on("click", function (e) {

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

    PaintFooterGridProyecto();
}

function PaintFooterGridProyecto() {
    var RowCount = $("#RowCountProyecto").val();
    var RowsPerPage = $('#RowsPerPageProyecto').val();

    //$("#IdGridProyectoDetalle .detail").attr("href", "#");
    $("#IdGridProyecto tfoot tr:last td").prepend("<a id='tfootPage'  class='total_registros'></a>");
    $("#tfootPage").html($('#FooterDescProyecto').val());
    if (RowCount <= 0) {
        $('#IdGridProyecto').css('display', 'block');
    } else {
        $('#IdGridProyecto').css('display', '');
    }
}
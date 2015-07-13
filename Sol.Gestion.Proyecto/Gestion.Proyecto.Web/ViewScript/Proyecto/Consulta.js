(function () {

    $(document).ready(function () {
        $("#btnProyectoBuscar").click(BuscarProyecto);
        $("#btnProyectoNuevo").click(NuevoProyecto);
    })

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

    var NuevoProyecto = function ()
    {
        window.location = $("#UrlNuevoProyecto").val();
    }

})()

function SetTotalRecordsProyecto() {
    $("#IdGridProyecto tfoot tr a, #IdGridProyecto thead tr a").on("click", function (e) {

        var sortDir = "";
        var sortType = "";
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
            if (arr[i].indexOf("sortType") >= 0)
                sort = arr[i].toString().split("=")[1].toString();
            if (arr[i].indexOf("sortDir") >= 0)
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
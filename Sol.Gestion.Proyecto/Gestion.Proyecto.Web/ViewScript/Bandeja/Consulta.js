(function () {
    $(document).ready(function () {
        $("#Codigo").rules("remove");
        $('#FrmBandejaConsulta').keypress(KeyEnterInput);
        $("#btnBandejaBuscar").click(BuscarBandeja);
    })

    var KeyEnterInput = function (e) {
        if (e.which === 13) {
            BuscarBandeja();
            return false;
        }
    }

    var BuscarBandeja = function () {
        $.ajax({
            url: $("#FrmBandejaConsulta").attr('action'),
            data: $("#FrmBandejaConsulta").serialize(),
            type: 'GET',
            cache: false,
            success: function (data) {
                $("#IdGridBandeja").html(data);
            },
            error: function (req, status, error) {

            },
            complete: function (req, status, error) {
                SetTotalRecordsBandeja();
            }

        });
    }
})()

function SetTotalRecordsBandeja() {
    $("#IdGridBandeja tfoot tr a, #IdGridBandeja thead tr a").on("click", function (e) {

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

    PaintFooterGridBandeja();
}

function PaintFooterGridBandeja() {
    var RowCount = $("#RowCountBandeja").val();
    var RowsPerPage = $('#RowsPerPageBandeja').val();

    //$("#IdGridBandejaDetalle .detail").attr("href", "#");
    $("#IdGridBandeja tfoot tr:last td").prepend("<a id='tfootPage'  class='total_registros'></a>");
    $("#tfootPage").html($('#FooterDescBandeja').val());
    if (RowCount <= 0) {
        $('#IdGridBandeja').css('display', 'block');
    } else {
        $('#IdGridBandeja').css('display', '');
    }
}
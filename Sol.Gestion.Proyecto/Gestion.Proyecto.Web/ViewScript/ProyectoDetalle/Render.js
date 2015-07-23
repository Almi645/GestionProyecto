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
            $("#IdFormDetalle").html('');
            $("#IdFormDetalle").html(data);

            //$("#btnDetalleTarjetaLugarRegistrar").click(ValidForm)
        },
    });
}
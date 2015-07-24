(function () {

    $("#btnDetalleTarjetaLugarRegistrar").click(ValidForm);
    Busqueda("IdGridDetalleTarjetaLugar", "FrmDetalleTarjetaLugarConsulta");
    
    function ValidForm() {
        if ($("#FrmDetalleTarjetaLugarNew").valid())
            ConfirmNew();
    }

    function ConfirmNew() {
        bbconfirm("¿Desea registrar?", New)
    }

    function New() {
        $.ajax({
            url: $("#FrmDetalleTarjetaLugarNew").attr('action'),
            data: $("#FrmDetalleTarjetaLugarNew").serialize(),
            type: "POST",
            success: function (data) {
                eval(data);
            },
            error: function (jqXHR, status, error) {
            }
        });
    }

    function ClearInput()
    {
        $("#SubRackId").val('');
        $("#Slot").val('');
        $("#BoardType").val('');
        $("#BiosVersion").val('');
        $("#SoftVersion").val('');
        $("#LogicVersion").val('');
        $("#PCBVersion").val('');
        $("#SerialNumber").val('');
    }

})()



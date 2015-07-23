(function () {

    $("#btnDetalleTarjetaLugarRegistrar").click(ValidForm);
    
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
})()

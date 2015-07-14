(function () {

    $(document).ready(function () {
        $("#btnProyectoRegistrar").click(ValidForm);
        $("#btnProyectoCancelar").click(CancelarProyecto);
    })

    var ValidForm = function () {
        if ($("#FrmProyecto").valid())
            ConfirmProyecto();
    }

    var ConfirmProyecto = function () {
        bbconfirm("¿Desea registrar el proyecto?", Register)
    }

    var Register = function () {
        $.ajax({
            url: $("#FrmProyecto").attr('action'),
            data: $("#FrmProyecto").serialize(),
            type: "POST",
            success: function (data) {
                eval(data);
            },
            error: function (jqXHR, status, error) {
            }
        });
    }

    var CancelarProyecto = function () {
        window.location = $("#UrlConsultarProyecto").val();
    }
})()

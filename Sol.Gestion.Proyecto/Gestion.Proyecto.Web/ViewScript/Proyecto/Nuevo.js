(function () {

    $(document).ready(function () {
        $("#btnProyectoRegistrar").click(ValidForm);
        $("#btnProyectoCancelar").click(CancelarProyecto);
    })

    var ValidForm = function () {
        if ($("#FrmProyectoRegistrar").valid())
            Register();
    }

    var Register = function () {
        $.ajax({
            url: 'Proyecto/NewProyecto',
            data: $("#FrmProyectoRegistrar").serialize(),
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
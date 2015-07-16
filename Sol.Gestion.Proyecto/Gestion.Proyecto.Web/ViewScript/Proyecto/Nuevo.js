(function () {

    $(document).ready(function () {
        $("#SelectEmpleado").change(ValidMultiselect);
        $("#btnProyectoRegistrar").click(ValidForm);
        $("#btnProyectoCancelar").click(CancelarProyecto);
    })

    var ValidForm = function () {
        //var multiselect = ValidMultiselect();

        //if ($("#FrmProyecto").valid() && multiselect)
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

    var ValidMultiselect = function () {

        if ($("#SelectEmpleado").val() == null) {
            $("#SelectEmpleadoError").text("Seleccione una asignación");
            $("#SelectEmpleadoError").css("display", "");
            return false;
        }
        else {
            $("#SelectEmpleadoError").text("");
            $("#SelectEmpleadoError").css("display", "none");
            return true;
        }
    }

})()

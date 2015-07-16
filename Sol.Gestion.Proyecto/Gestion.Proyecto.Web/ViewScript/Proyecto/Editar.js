(function () {

    $(document).ready(function () {

        $('#Asignacion').multiselect({
            includeSelectAllOption: true,
            enableFiltering: true
        });

        var arr = $('#AsignacionItems').val().split(',');
        arr.forEach(function (entry) {
            $('#Asignacion').multiselect("select", entry)
        });

        $("#Asignacion").change(ValidMultiselect);
        $("#btnProyectoGuardar").click(ValidForm);
        $("#btnProyectoCancelar").click(CancelarProyecto);
    })

    var ValidForm = function () {
        var multiselect = ValidMultiselect();
        if ($("#FrmProyecto").valid() && multiselect)
            ConfirmProyecto();
    }

    var ConfirmProyecto = function () {
        bbconfirm("¿Desea guardar los cambios?", Edit)
    }

    var Edit = function () {
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
        if ($("#Asignacion").val() == null) {
            $("#AsignacionError").text("Seleccione una asignación");
            $("#AsignacionError").css("display", "");
            return false;
        }
        else {
            $("#AsignacionError").text("");
            $("#AsignacionError").css("display", "none");
            return true;
        }
    }

})()

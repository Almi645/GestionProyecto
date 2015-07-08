function showError(a) { $("#alertMessage").addClass("error").html(a).stop(true, true).show().animate({ opacity: 1, right: "0" }, 500) }
function showSuccess(a) { $("#alertMessage").removeClass("error").html(a).stop(true, true).show().animate({ opacity: 1, right: "0" }, 500) }
function hideTop() { $("#alertMessage").animate({ opacity: 0, right: "-20" }, 500, function () { $(this).hide() }) }
$("#alertMessage").click(function () { hideTop() })
function getInternetExplorerVersion() {
    var rv = -1;
    if (navigator.appName == 'Microsoft Internet Explorer') {
        var ua = navigator.userAgent;
        var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat(RegExp.$1);
    }
    return rv;
}

$(document).ready(function () {
    var ver = getInternetExplorerVersion();

    if (ver <= 8.0 && ver != -1) {
        $("#subFooter,#logo_footer").css({ "opacity": "0" });
        $("#subFooter").css({ "display": "block", "position": "absolute", "top": "94.9%", "background-color": "Black", "width": "97%" }).find("p>a").css("color", "white");
    }

    $("#login").show().animate({
        opacity: 1
    }, 2e3);

    if (ver <= 8.0 && ver != -1) {
        $(".formLogin").show().animate({
            opacity: 1
        }, 2e3, function () {
            $("#subFooter").animate({ "opacity": "0.7" }, 3000);
            $("#logo_footer").animate({ "opacity": "1" }, 3000);
        });
    } else {
        $(".formLogin").show().animate({
            opacity: 1
        }, 2e3, function () {
            $("#versionBar").animate({
                opacity: 1
            }, 2e3);
        });
    }
});


function Login() {
    $("#login").animate({
        opacity: 1,
        top: "50%"
    }, 400, function () {
        $(this).fadeOut(200, function () {
            $(".text_success").fadeIn();
        })
    }
	);

    var urlDestino = $("#Id_Url_Home").val();

    setTimeout("window.location.href='" + urlDestino + "'", 3e3);
}

$("#but_login").click(function (a) {
    ValidarUsuario();
});

function ValidarUsuario() {
    if (document.formLogin.usuario.value == "" || document.formLogin.clave.value == "") {
        $(".inner").jrumble({
            x: 4,
            y: 0,
            rotation: 0
        });
        $(".inner").trigger("startRumble");
        setTimeout('$(".inner").trigger("stopRumble")', 500);
        $("input[name=clave]").css("border-color", "#FF0000");
        showError("Ingrese su usuario y contraseña");
        return false
    }
    var opcion = 0;
    var url = $("#Id_Url_Login").val();

    oUsuario = document.formLogin.usuario.value;
    oClave = document.formLogin.clave.value;
    $.ajax({
        url: url,
        data: {
            usuario: oUsuario,
            clave: oClave
        },
        type: "post",
        cache: false,
        success: function (data, textStatus, jqXHR) {
            var msj = jqXHR.responseText;
            if (msj == 1) {
                hideTop();
                $("input[name=clave]").css("border-color", "#99FF00");
                setTimeout("Login()", 500)
                opcion = 1;
            }
            if (msj == 2) {
                $(".inner").jrumble({
                    x: 4,
                    y: 0,
                    rotation: 0
                });
                $(".inner").trigger("startRumble");
                setTimeout('$(".inner").trigger("stopRumble")', 500);
                $("input[name=clave]").css("border-color", "#FF0000");
                showError("Usuario o contraseña incorrecto");
                opcion = 2;
                return false
            }
        },
        error: function (jqXHR, status, error) {
        }
    });
}


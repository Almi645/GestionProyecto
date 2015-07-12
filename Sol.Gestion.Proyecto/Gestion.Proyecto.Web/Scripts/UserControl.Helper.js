/// <reference path="UserControl.Helper.js" />
    function ValidarAutocomplete(IdControl, IdMsj) {
    var IDRecirbidoPor = $(IdControl).val();

    if (IDRecirbidoPor == "" || IDRecirbidoPor == 0)
        $(IdMsj).html('No Registrado');
    else
        $(IdMsj).html('');
}

//$(function () {
//    $(".datepicker").datepicker();
//    $(".datepicker").datepicker("option", "dateFormat", "dd/mm/yy");
//    $(".datepicker").datepicker({
//        showOtherMonths: true,
//        autoSize: true,
//        changeMonth: true,
//        changeYear: true,
//        appendText: '(dd/mm/yyyy)',
//        dateFormat: 'dd/mm/yy'
//    });
//    $(".datepicker").mask("99/99/9999");
//})

function Val_Menor30(campo) {
    var valor = $('#' + campo + '').val();
    if (valor > 30) {
        $('#' + campo + '').val(0);
    }
}

function setDatePickerFormat(selector) {
    $(selector).datepicker({
        showOtherMonths: true,
        autoSize: true,
        changeMonth: true,
        changeYear: true,
        appendText: '(dd/mm/yyyy)',
        dateFormat: 'dd/mm/yy'
    });
    $(selector).mask("99/99/9999");
}

//jQuery.fn.cuentaCaracteres = function () {
//    //para cada uno de los elementos del objeto jQuery
//    this.each(function () {
//        //creo una variable elem con el elemento actual, suponemos un textarea
//        elem = $(this);
//        //creo un elemento DIV sobre la marcha 
//        var contador = $('<div class="contad">Contador caracteres: ' + elem.attr("value").length + '/1200 </div>');
//        //inserto el DIV después del elemento textarea
//        elem.after(contador);
//        //guardo una referencia al elemento DIV en los datos del objeto jQuery
//        elem.data("campocontador", contador);

//        //creo un evento keyup para este elemento actual
//        elem.keyup(function () {
//            //creo una variable elem con el elemento actual, suponemos un textarea
//            var elem = $(this);
//            //recupero el objeto que tiene el elemento DIV contador asociado al textarea
//            var campocontador = elem.data("campocontador");
//            //modifico el texto del contador, para actualizarlo con el número de caracteres escritos
//            campocontador.text('Contador caracteres: ' + elem.attr("value").length + '/1200');
//        });
//    });
//    //siempre tengo que devolver this
//    return this;
//};


//$(document).ready(function () {
//    $("textarea").cuentaCaracteres();
//})
//function validarEmail(valorEmail)
//{
//    var resultadoBool = false;
//    var resultadoString = "";
//    var mensajeCorreoIncorrecto = "Correo(s) con formato incorrecto: ";
//    var email = valorEmail;
//    var arrayEmail = email.split(";");

//    patron = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)/;

//    for (var itemEmail = 0; itemEmail < arrayEmail.length; itemEmail++) {
//        resultadoBool = patron.test(arrayEmail[itemEmail]);
//        if (!resultadoBool) {
//            resultadoString = resultadoString +"\n"+ arrayEmail[itemEmail];
//        }       
//    }
//    if (resultadoString.length > 0) {
//        confirm(mensajeCorreoIncorrecto +"\n"+ resultadoString);
//    }
    
//    return resultadoBool;

//}


jQuery.fn.limitMaxlength = function (options) {

    var settings = jQuery.extend({
        attribute: "maxlength",
        onLimit: function () { },
        onEdit: function () { }
    }, options);

    // Event handler to limit the textarea
    var onEdit = function () {
        var textarea = jQuery(this);
        var maxlength = parseInt(textarea.attr(settings.attribute));

        if (textarea.val().length > maxlength) {
            textarea.val(textarea.val().substr(0, maxlength));

            // Call the onlimit handler within the scope of the textarea
            jQuery.proxy(settings.onLimit, this)();
        }

        // Call the onEdit handler within the scope of the textarea
        jQuery.proxy(settings.onEdit, this)(maxlength - textarea.val().length);
    }

    this.each(onEdit);

    return this.keyup(onEdit)
          .keydown(onEdit)
          .focus(onEdit);
}

$(document).ready(function () {

    var onEditCallback = function (remaining) {
        $(this).siblings('.charsRemaining').text("Characters remaining: " + remaining);

        if (remaining > 0) {
            $(this).css('background-color', 'white');
        }
    }

    var onLimitCallback = function () {
        $(this).css('background-color', 'white');
    }
    /*
    $('textarea[maxlength]').limitMaxlength({
        onEdit: onEditCallback,
        onLimit: onLimitCallback
    });
    */
});

function InicioJPopUp(selector, ancho, alto, resize, titulo) {
    $(selector).dialog({
        autoOpen: false,
        height: alto,
        width: ancho,
        modal: true,
        resizable: resize,
        hide: 'fade',
        show: 'fade',
        title: titulo
    });
}

$(window).load(
    function () {
        $('input[type="text"]').addClass("textTransform");
        $("textarea").addClass("textTransform");
    }
  );

function validarNumerosLetras(e) { // 1
    tecla = (document.all) ? e.keyCode : e.which; // 2
    if (tecla == 8) return true; // 3
    //else if (tecla == 0) return true;
    //else if (tecla == 9) return true;
    //else if (tecla == e.keyCode || tecla == e.which) return true;
    //patron = /^[ 0-9-A-z]*$/;
    patron = /^[A-Za-zñÑáéíóúÁÉÍÚÓ0-9 ]+$/;
    //patron = /\w/; // Acepta N(U)meros y Letras
    te = String.fromCharCode(tecla); // 5
    return patron.test(te); // 6
}


function validarNumerosLetrasAC(e) { // 1
    tecla = (document.all) ? e.keyCode : e.which; // 2
    if (tecla == 8) return true; // 3
    else if (tecla == 0) return true;
    else if (tecla == 9) return true;
    //else if (tecla == e.keyCode || tecla == e.which) return true;
    patron = /^[ 0-9-A-z]*$/;
    //patron = /\w/; // Acepta N(U)meros y Letras
    te = String.fromCharCode(tecla); // 5
    return patron.test(te); // 6
}

function validarRuta(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 8) return true;
    //else if (tecla == e.keyCode || tecla == e.which) return true;
    patron = /[&-;,.0-9QWERTYUIOPASDFGHJKLÑZXCVBNMqwertyuiopñlkjhgfdsazxcvbnmáéíóúÁÉÍÓÚ\x00\s\n]/;
    te = String.fromCharCode(tecla);
    return patron.test(te);
}

function val_Email(e) {
    tecla = (document.all) ? e.keyCode : e.key;
    if (tecla == 8) return true;
    //patron = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    var patron = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    // patron = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/
    te = String.fromCharCode(tecla);
    return patron.test(te);
}

function val_Codigo(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 8) return true;
    //else if (tecla == e.keyCode || tecla == e.which) return true;
    patron = /[-0-9QWERTYUIOPASDFGHJKLÑZXCVBNMqwertyuiopñlkjhgfdsazxcvbnm\x00\s]/;
    c;
}

function val_Descripcion(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 8) return true;
    //else if (tecla == e.keyCode || tecla == e.which) return true;
    patron = /[&-;,.0-9QWERTYUIOPASDFGHJKLÑZXCVBNMqwertyuiopñlkjhgfdsazxcvbnmáéíóúÁÉÍÓÚ\x00\s\n]/;
    te = String.fromCharCode(tecla);
    return patron.test(te);
}

function val_DescripcionQ(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 8) return true;
    //else if (tecla == e.keyCode || tecla == e.which) return true;
    patron = /[?¿&-;,.0-9QWERTYUIOPASDFGHJKLÑZXCVBNMqwertyuiopñlkjhgfdsazxcvbnmáéíóúÁÉÍÓÚ\x00\s\n]/;
    te = String.fromCharCode(tecla);
    return patron.test(te);
}


function val_Correo(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 8) return true;
    //else if (tecla == e.keyCode || tecla == e.which) return true;
    patron = /[-_.QWERTYUIOPASDFGHJKLÑZXCVBNMqwertyuiopñlkjhgfdsazxcvbnm0123456789@\x00\s]/;
    te = String.fromCharCode(tecla);
    return patron.test(te);
}

function val_AZ(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 8) return true;
    //else if (tecla == e.keyCode || tecla == e.which) return true;
    patron = /[QWERTYUIOPASDFGHJKLÑZXCVBNMqwertyuiopñlkjhgfdsazxcvbnmáéíóúÁÉÍÓÚ\x00\s]/;
    te = String.fromCharCode(tecla);
    return patron.test(te);
}
function val_AZPUNTO(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 8) return true;
    //else if (tecla == e.keyCode || tecla == e.which) return true;
    patron = /[QWERTYUIOPASDFGHJKLÑZXCVBNMqwertyuiopñlkjhgfdsazxcvbnmáéíóúÁÉÍÓÚ.\x00\s]/;
    te = String.fromCharCode(tecla);
    return patron.test(te);
}

function val_LoginUser(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 8) return true;
    //else if (tecla == e.keyCode || tecla == e.which) return true;
    patron = /[\.\-QWERTYUIOPASDFGHJKLÑZXCVBNMqwertyuiopñlkjhgfdsazxcvbnmáéíóúÁÉÍÓÚ\x00\s]/;
    te = String.fromCharCode(tecla);
    return patron.test(te);
}
function val_AZ_Empresa(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 8) return true;
    //else if (tecla == e.keyCode || tecla == e.which) return true;
    patron = /[QWERTYUIOPASDFGHJKLÑZXCVBNMqwertyuiopñlkjhgfdsazxcvbnmáéíóúÁÉÍÓÚ\x00\S]/;
    te = String.fromCharCode(tecla);
    return patron.test(te);
}
function val_09(e) {

    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 8) return true;
    else if (tecla == 0) return true;
    else if (tecla == 9) return true;
    // else if (tecla == e.keyCode || tecla == e.which) return true;
    patron = /[0-9]/;
    te = String.fromCharCode(tecla);
    return patron.test(te);
}

function val_19_(e) {

    if ($("#numPer").val() == 0) {
        $("#numPer").val('');
        $("#numPer").focus();
    }

    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 8) return true;
    patron = /[1234567890\x00\s]/;
    te = String.fromCharCode(tecla);
    return patron.test(te);
}

function val_19(e) {

    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 8) return true;
    patron = /[1234567890\x00\s]/;
    te = String.fromCharCode(tecla);
    return patron.test(te);
}

function lTrim(sStr) {
    while (sStr.charAt(0) == " ")
        sStr = sStr.substr(1, sStr.length - 1);
    return sStr;
}

function rTrim(sStr) {
    while (sStr.charAt(sStr.length - 1) == " ")
        sStr = sStr.substr(0, sStr.length - 1);
    return sStr;
}

function allTrim(sStr) {
    return rTrim(lTrim(sStr));
}
function validarNull1(e) {
    return (allTrim(e));
}


function ValidarNUll(ID_Textto) {
    var texto = document.getElementById(ID_Textto);
    $("input[id$='" + ID_Textto + "']").val(allTrim(texto.value));
}


function UI_Select(DisplayControl, DropDownControl) {
    $('#' + DisplayControl).text($('#' + DropDownControl + ' option:selected').text());
}

//Funcion para cargar combos con 0 elementos: 02-04-12
function Load_EmptyDDL(ParamUrl, destino) {

    $.ajax({
        url: ParamUrl,
        type: "post",
        cache: false,
        success: function (data, textStatus, jqXHR) {
            $(destino).html(data);
        },
        error: function (req, status, error) {
        }
    });
}

function InicioJPopUp(selector, ancho, alto, resize, titulo, modal) {
    $(selector).dialog({
        autoOpen: false,
        height: alto,
        width: ancho,
        modal: modal,
        resizable: resize,
        hide: 'fade',
        show: 'fade',
        title: titulo,
        zIndex: 9999
    });
}

function InicioJPopUpOpen(selector) {
    $(selector).dialog("open");
}

function InicioJPopUpClose(selector) {
    $(selector).dialog("close");
}


function InicioJPopUpConfirm(selector, ancho, resize, titulo, actionfunction, actionfunctioncancel) {
    $(selector).dialog({
        autoOpen: false,
        width: ancho,
        modal: true,
        resizable: resize,
        hide: 'fade',
        show: 'fade',
        title: titulo,
        buttons: {
            
            "Sí": function () {
                if (actionfunction != null) {
                    actionfunction();
                }
                $(selector).dialog("close");
            },
            "No": function () {
                if (actionfunctioncancel != null) {
                    actionfunctioncancel();
                }
                $(selector).dialog("close");
            }
        }
    });
}






//var tag = document.createElement('script');

//tag.src = "https://www.youtube.com/iframe_api";
//var firstScriptTag = document.getElementsByTagName('script')[0];
//firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//var player;
//function onYouTubeIframeAPIReady() {
//    player = new YT.Player('player', {
//        height: '390',
//        width: '640',
//        videoId: '4xNpz0b35Vo',
//        events: {
//            //'onReady': onPlayerReady,
//            'onStateChange': onPlayerStateChange
//        }
//    });
//}

//function onPlayerReady(event) {
//    event.target.playVideo();
//}

var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        //setTimeout(stopVideo, 6000); //esto es para parar el vídeo automaticamente
        done = true;
    }
}

function stopVideo() {
    player.stopVideo();
}


function InicioJPopUpVideo(selector, ancho, alto, resize, titulo) {
    $(selector).dialog({
        autoOpen: false,
        width: ancho,
        height: alto,
        modal: true,
        resizable: resize,
        hide: 'fade',
        show: 'fade',
        title: titulo,
        buttons: {
            "Cerrar": function () {
                stopVideo();
                $(selector).dialog("close");
            }

        }
    });
}




//popupreconfirmar
//function InicioJPopUpReConfirm(selector, ancho, resize, titulo, actionfunction, actionfunctioncancel, actionfunctionexit) {
//    $(selector).dialog({
//        autoOpen: false,
//        width: ancho,
//        modal: true,
//        resizable: resize,
//        hide: 'fade',
//        show: 'fade',
//        title: titulo,
//        buttons: {
//            "Sí": function () {
//                if (actionfunction != null) {
//                    actionfunction();
//                }
//                $(selector).dialog("close");
//            },
//            "No": function () {
//                if (actionfunctioncancel != null) {
//                    actionfunctioncancel();
//                }
//                $(selector).dialog("close");
//            },
//            "Salir del Sistema": function () {
//                if (actionfunctionexit != null) {
//                    actionfunctionexit();
//                }
//                $(selector).dialog("close");
//            }

//        }
//    });
//}



//email 
function InicioJPopUpConfirmEmail(selector, ancho, resize, titulo,  actionfunctioncancel,actionfunction) {
    $(selector).dialog({
        autoOpen: false,
        width: ancho,
        modal: true,
        resizable: resize,
        hide: 'fade',
        show: 'fade',
        title: titulo,
        buttons: {

            "Cancelar": function () {
                if (actionfunctioncancel != null) {
                    actionfunctioncancel();
                }
                $(selector).dialog("close");
            },

            "Enviar": function () {
                if (actionfunction != null) {

                    actionfunction();

                }
                // $(selector).dialog("close");
            }
        }
    });
}




function InicioJPopUpConfirmAlert(selector, ancho, resize, titulo) {
    $(selector).dialog({
        autoOpen: false,
        width: ancho,
        modal: true,
        resizable: resize,
        hide: 'fade',
        show: 'fade',
        title: titulo,
        buttons: {
            "Aceptar": function () {
                $(selector).dialog("close");                  
            }
        }
    });
}


//function InicioJPopUpConfirmAlertR(selector, ancho, resize, titulo) {
//    $(selector).dialog({
//        autoOpen: false,
//        width: ancho,
//        modal: true,
//        resizable: resize,
//        hide: 'fade',
//        show: 'fade',
//        title: titulo,
//        buttons: {
//            "Aceptar": function () {
                
//                $(selector).dialog("close");
//                window.location = "Consultar";
//                //$("#btn-buscar").click();
                
//            }
//        }
//    });
//}

function InicioJPopUpConfirmOpen(selector) {
    $(selector).dialog('open');
    return false;
}

//CAMBIAR ESTILO ALERT
var ALERT_TITLE = "Confirmación!";
var ALERT_BUTTON_TEXT = "ACEPTAR";

//Anular el método de alerta
if (document.getElementById) {
    window.alert = function (txt) {
        MyAlert(txt);
    }
}

function MyAlert(txt) {
    //Atajo referencia al objeto documento
    d = document;

    // if the modalContainer object already exists in the DOM, bail out.

    if (d.getElementById("modalContainer")) return;

    // create the modalContainer div as a child of the BODY element
    mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
    mObj.id = "modalContainer";
    // make sure its as tall as it needs to be to overlay all the content on the page
    mObj.style.height = document.documentElement.scrollHeight + "px";

    // create the DIV that will be the alert 
    alertObj = mObj.appendChild(d.createElement("div"));
    alertObj.id = "alertBox";
    // MSIE doesnt treat position:fixed correctly, so this compensates for positioning the alert
    if (d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
    // center the alert box
    alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth) / 2 + "px";

    // create an H1 element as the title bar
    h1 = alertObj.appendChild(d.createElement("h1"));
    h1.appendChild(d.createTextNode(ALERT_TITLE));

    // create a paragraph element to contain the txt argument
    msg = alertObj.appendChild(d.createElement("p"));
    msg.innerHTML = txt;

    // create an anchor element to use as the confirmation button.
    btn = alertObj.appendChild(d.createElement("a"));
    btn.id = "closeBtn";
    btn.appendChild(d.createTextNode(ALERT_BUTTON_TEXT));
    btn.href = "#";
    // set up the onclick event to remove the alert when the anchor is clicked
    btn.onclick = function () { removeCustomAlert(); }
}

// removes the custom alert from the DOM
function removeCustomAlert() {
    document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"));
}

////CAMBIAR ESTILO ALERT END
function Jalert(text, Url) {
    $('#buttonAlert').html(text);
    $('#dialogAlert').css("display", "block");
    $('#dialogAlert').dialog({
        autoOpen: false,
        width: 400,
        modal: true,
        resizable: false,
        hide: 'fade',
        show: 'fade',
        buttons: {
            "Aceptar": function () {
                $('#dialogAlert').dialog("close");
                if (Url != null)
                    window.location = Url;
            }
        }
    });
    $('#dialogAlert').dialog('option', 'modal', true).dialog('open');
    return true;
}

///     COMPARA FECHAS 1: fecha1 > fecha2 ; -1 : fecha1 < fecha2: 0: fecha1 = fecha2

function CompararFechas(fecha1, fecha2) {
    var day1 = fecha1.substring(0, 2);
    var month1 = fecha1.substring(3, 5);
    var year1 = fecha1.substring(6, 10);
    var datecompare1 = month1 + "/" + day1 + "/" + year1;
    var date1 = new Date(datecompare1);

    var day2 = fecha2.substring(0, 2);
    var month2 = fecha2.substring(3, 5);
    var year2 = fecha2.substring(6, 10);
    var datecompare2 = month2 + "/" + day2 + "/" + year2;
    var date2 = new Date(datecompare2);

    if (date1 < date2)
        return -1;
    else if (date1 > date2)
        return 1;
    else
        return 0;
}

function validarFechaMenorActual(date) {
    var day = date.substring(0, 2);
    var month = date.substring(3, 5);
    var year = date.substring(6, 10);
    var datecompare = month + "/" + day + "/" + year;

    var today = new Date();
    var date2 = new Date(datecompare);

    if (date2 < today)
        return true;
    else
        return false;
}

function validarFechaMenorIgualActual(date) {
    var day = date.substring(0, 2);
    var month = date.substring(3, 5);
    var year = date.substring(6, 10);
    var datecompare = month + "/" + day + "/" + year;

    var today = new Date();
    var date2 = new Date(datecompare);

    if (date2 <= today)
        return true;
    else
        return false;
}

function validarFechaMayorActual(date) {
    var day = date.substring(0, 2);
    var month = date.substring(3, 5);
    var year = date.substring(6, 10);
    var datecompare = month + "/" + day + "/" + year;

    var today = new Date();
    var date2 = new Date(datecompare);

    if (date2 > today)
        return true;
    else
        return false;
}

function validarFechaIncioFin(datei, datef) {
     
    var validate = true;
    var FechaInicio = encodeURI($.trim($("#" + datei).val()));
    var FechaFin = encodeURI($.trim($("#" + datef).val()));

    if (ValidarFecha(datei) != 0) {
        if (FechaInicio != "") {
            appendErrorMessage("#msgFechaInicioError", 'Formato de fecha incorrecto'/*$("#IdMessageIncorrectDate").val()*/, true);
            validate = false;
        }       
    }
    else 
        appendErrorMessage("#msgFechaInicioError", "", false);


    if (ValidarFecha(datef) != 0) {

        if (FechaFin != "") {
            appendErrorMessage("#msgFechaFinError", 'Formato de fecha incorrecto'/*$("#IdMessageIncorrectDate").val()*/, true);
            validate = false;
        }
     
    }
    else 
       appendErrorMessage("#msgFechaFinError", "", false);


    if (validate == false)
       return false;
    

    if (FechaInicio != "" && FechaFin != "") {
        if (Comparar_Fechas(FechaInicio, FechaFin)) {
            appendErrorMessage("#msgFechaInicioError", 'La fecha inicio no debe ser mayor a la fecha fin' /*$("#IdMessageDateNoMenorInicio").val()*/, true);
            return false;
        }
        else {
            appendErrorMessage("#msgFechaInicioError", "", false);
            return true;
        }
    }
    else {
        appendErrorMessage("#msgFechaInicioError", "", false);
        return true;
    }
}

function validarFechaMayorIgualActual(date) {
    var day = date.substring(0, 2);
    var month = date.substring(3, 5);
    var year = date.substring(6, 10);
    var datecompare = month + "/" + day + "/" + year;

    var today = new Date();
    var date2 = new Date(datecompare);

    if (date2 >= today)
        return true;
    else
        return false;
}

function CreateUrl(Action, Controller) {
    var Url = '';
    var UrlAcionResult = '';
    var ParamUrl = $('#UrlActionGen').val();
    Url = ParamUrl.toString().replace('Home', Controller);
    UrlAcionResult = Url.toString().replace('Inicio', Action);
    return UrlAcionResult;
}

$.fn.limpiarFormularios = function () {
    return this.each(function () {
        $('input,select,textarea', this).limpiarCampos();
    });
};
$.fn.limpiarCampos = function () {
    return this.each(function () {
        var t = this.type, tag = this.tagName.toLowerCase();
        if (t == 'text' || t == 'password' || tag == 'textarea')
            this.value = '';
        else if (t == 'checkbox' || t == 'radio')
            this.checked = false;
        else if (tag == 'select') {
            this.selectedIndex = 0;
            this.parentNode.firstChild.innerHTML = this.firstChild.innerHTML
        }
    });
};
var showConfirm = function (msg, funcion) {
    if ($("#PopupMj").length == 0) {
        var div = document.createElement("DIV");
        div.appendChild(document.createElement("P"));
        div.setAttribute("ID", "PopupMj");
        $(div).attr({ "class": "j_modal", "title": "Competencia" });
        document.body.appendChild(div);
    }
    $("#PopupMj").html(msg);
    $("#PopupMj").dialog({
        autoOpen: false,
        resizable: false,
        width: 400,
        modal: true,
        buttons: [{
            text: "Si",
            click: function () {
                funcion();
                $(this).dialog("close");
                $(this).find("p").html("");
            }
        }, {
            text: "No",
            click: function () {
                $(this).dialog("close");
                $(this).find("p").html("");
            }
        }]
    }).dialog('open');
}


function val_SoloDeciamles(e, field) {
    key = e.keyCode ? e.keyCode : e.which
    // backspace
    if (key == 8) return true
    // 0-9
    if (key > 47 && key < 58) {
        if (field.value == '') return true
        regexp = /[0-9].[0-9]{1}$/
        return !(regexp.test(field.value))
    }
    // ,
    if (key == 46) {
        if (field.value == '') return false
        regexp = /^[0-9]+$/
        return regexp.test(field.value)
    }
    // other key
    return false

}

$.fn.clearSelect = function () {
    return this.each(function () {
        if (this.tagName == 'SELECT')
            this.options.length = 0;
    });
}

function ValidarFechaMaskEdit(styleDate) {

    $(styleDate).datepicker($.datepicker.regional[$('#HiDenIdioma').val()], {
        dateFormat: 'dd/mm/yy',
        onClose: function validate() {

            var frm = $(this).parents("form");

            if ($.data(frm[0], 'validator')) {
                var validator = $(this).parents("form").validate();
                validator.settings.onfocusout.apply(validator, [this]);
            }
        }
    });


    $(styleDate).bind("blur", function () {
        var frm = $(this).parents("form");

        if ($.data(frm[0], 'validator')) {
            var validator = $(this).parents("form").validate();
            validator.settings.onfocusout.apply(validator, [this]);
        }
    });



    $("form").each(function () { $.data($(this)[0], 'validator', false); });

    $("input[data-val-date]").removeAttr("data-val-date");
    $("input[data-val-number]").removeAttr("data-val-number");



    $.validator.unobtrusive.parse("form");

}

function InicioJPopUpAlert(text, actionfunction) {
    $('#buttonAlert').html(text);
    $("#dialogAlert").dialog({
        autoOpen: false,
        resizable: false,
        closeOnEscape: false,
        open: function (event, ui) { $(".ui-dialog-titlebar-close", this.parentNode).hide(); },
        width: 400,
        modal: true,
        title: "Mensaje de Validación",
        buttons: [{
            id: "btnPopAceptar",
            text: "Aceptar",
            click: function () {
                if (actionfunction != null)
                    actionfunction();
                $(this).dialog("close");
            }
        }]

    });
    $('#dialogAlert').dialog('option', 'modal', true).dialog('open');
}

function Val_Numeros_Punto(evt) {
    var keyPressed = (evt.which) ? evt.which : event.keyCode
    return !((keyPressed != 13) && (keyPressed != 46) && (keyPressed < 48 || keyPressed > 57));
}
function val_09(e) {

    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 8) return true;
    else if (tecla == 0) return true;
    else if (tecla == 9) return true;
    // else if (tecla == e.keyCode || tecla == e.which) return true;
    patron = /[0-9]/;
    te = String.fromCharCode(tecla);
    return patron.test(te);
}

function val_09_2D(e) {
    tecla = (document.all) ? e.keyCode : e.which;

    if (tecla == 8) return true;
    else if (tecla == 0) return true;
    else if (tecla == 9) return true;
    patron = /^[0-9]+(\.[0-9]?[0-9]?)?$/;

    var text;
    te = String.fromCharCode(tecla);
    inputText = e.target || e.srcElement;

    if (inputText.value == 0 || inputText.value == "") {
        text = te;
    }
    else {
        text = inputText.value;
        strlength = text.length;
        strf = text.substr(0, inputText.selectionStart);
        strb = text.substr(inputText.selectionStart, strlength);
        text = strf + te + strb;
    }

    return patron.test(text);
}

function val_SoloDeciamlesTwo(e, field) {
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 8) return true;
    //else if (tecla == e.keyCode || tecla == e.which) return true;
    patron = /[&-.0-9\x00\s\n]/;
    te = String.fromCharCode(tecla);
    return patron.test(te);

}

function validateform(selector) {

    var valid = true;
    $(selector).find('input,select,textarea').each(function (index, elem) {
        var item = $(elem).hasClass('ignorefield');
        if (!item) {
            var isElemValid = $(selector).validate().element($(this));
            if (isElemValid != null) {
                valid = valid & isElemValid;
                if (valid == false)
                    console.log($(this));
            }
        }
    });
    return valid;
}

function appendErrorMessage(selector, message, visible) {
    message = "<span>" + message + "</span>";
    $(selector).html(message);
    if (visible == true) {
        $(selector).css('display', '');
    }
    else {
        $(selector).css('display', 'none');
    }
}

function EnterSubmit(e, buttonClick) {
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 13) {
        var obj = document.getElementById(buttonClick);
        obj.click();
    }
}

function addValidattionForm(selector) {
    var form = $(selector).closest("form");
    form.removeData('validator');
    form.removeData('unobtrusiveValidation');
    $.validator.unobtrusive.parse(form);
}

function getMessageErrorFormat(Message) {
    var html = ''

    html = html + '<span class="error field-validation-error" data-valmsg-replace="true">';
    html = html + '<span generated="true" class="">';
    html = html + Message;
    html = html + '</span>';
    html = html + '</span>';

    return html;
}


function emailCheck(emailStr) {

    var emailPat = "/^(.+)@(.+)$/";
    var specialChars = "\\(\\)<>@,;:\\\\\\\"\\.\\[\\]";
    var validChars = "\[^\\s" + specialChars + "\]";
    var quotedUser = "(\"[^\"]*\")";
    var ipDomainPat = /^[(d{1,3}).(d{1,3}).(d{1,3}).(d{1,3})]$/;
    var atom = validChars + '+';
    var word = "(" + atom + "|" + quotedUser + ")";
    var userPat = new RegExp("^" + word + "(\\." + word + ")*$");
    var domainPat = new RegExp("^" + atom + "(\\." + atom + ")*$");
    var matchArray = emailStr.match(emailPat);
    if (matchArray == null) {
        alert("La dirección de correo parece ser inválida (verifique las @ y .)")
        return false
    }
    var user = matchArray[1]
    var domain = matchArray[2]

    if (user.match(userPat) == null) {
        alert("El nombre de usuario parece ser inválido.")
        return false
    }

    var IPArray = domain.match(ipDomainPat)
    if (IPArray != null) {
        for (var i = 1; i <= 4; i++) {
            if (IPArray[i] > 255) {
                alert("La dirección IP de destino es inválida!")
                return false
            }
        }
        return true
    }

    var domainArray = domain.match(domainPat)
    if (domainArray == null) {
        alert("El dominio no parece ser válido.")
        return false
    }
    var atomPat = new RegExp(atom, "g")
    var domArr = domain.match(atomPat)
    var len = domArr.length
    if (domArr[domArr.length - 1].length < 2 ||
        domArr[domArr.length - 1].length > 3) {
        alert("Las direcciones deben terminar con dominios de tres letras, o el código de país de dos letras.")
        return false
    }

    if (len < 2) {
        var errStr = "Dominio Inválido!";
        alert(errStr)
        return false
    }

    return true;
}

var confirmacion = function (msg, context) {

    var div = $("#div-alert-confirm");//$("<div id='div-alert-confirm'></div>");

    if (div.length == 0) {
        div = $("<div id='div-alert-confirm'></div>");
    }

    div.text(msg);

    InicioJPopUpConfirm(div, 400, false, "Confirmar", context);
    InicioJPopUpConfirmOpen(div);
}


function ConfirmAlertOptionOk(selector, ancho, resize, titulo, actionfunction) {
    $(selector).dialog({
        autoOpen: false,
        width: ancho,
        modal: true,
        resizable: resize,
        hide: 'fade',
        show: 'fade',
        title: titulo,
        buttons: {
            "Ok": function () {
                $(selector).dialog("close");
                actionfunction();
            }
        }
    });
}

var alerta = function (msg) {
    var div = $("#div-alert");//$("<div id='div-alert-confirm'></div>");

    if (div.length == 0) {
        div = $("<div id='div-alert'></div>");
    }

    div.html(msg);

    InicioJPopUpConfirmAlert(div, 400, false, "Mensaje de Validación");
    InicioJPopUpOpen(div);
    $('.ui-dialog-titlebar-close').show();
}

var alertaOk = function (msg, actionFunction) {
    var div = $("#div-alert");//$("<div id='div-alert-confirm'></div>");

    if (div.length == 0) {
        div = $("<div id='div-alert'></div>");
    }

    div.html('<center>'+msg+'</center>');

    ConfirmAlertOptionOk(div, 400, false, "Mensaje de Confirmación", actionFunction);
    InicioJPopUpOpen(div);
    $('.ui-dialog-titlebar-close').show();
}

var successful = function (msg, actionFunction) {
    var div = $("#div-alert");//$("<div id='div-alert-confirm'></div>");

    if (div.length == 0) {
        div = $("<div id='div-alert'></div>");
    }

    div.html('<center>' + msg + '</center>');

    ConfirmSucessFul(div, 400, false, "Mensaje de Validación", actionFunction);
    InicioJPopUpOpen(div);
    $('.ui-dialog-titlebar-close').hide();
}

function ConfirmSucessFul(selector, ancho, resize, titulo, actionfunction) {
    $(selector).dialog({
        autoOpen: false,
        width: ancho,
        modal: true,
        resizable: resize,
        hide: 'fade',
        show: 'fade',
        title: titulo,
        buttons: {
            "Aceptar": function () {
                $(selector).dialog("close");
                actionfunction();
            }
        }
    });
}
//Funciona


function val_Hours(e) {
     
    tecla = (document.all) ? e.keyCode : e.which;

    if (tecla == 8) return true;
    else if (tecla == 0) return true;
    else if (tecla == 9) return true;
    patron = /^[0-9]?:[0-9]?$/;

    var text;
    te = String.fromCharCode(tecla);

    
    inputText = document.getElementById('' + (e.target || e.srcElement).id);



    if (inputText.value == 0 || inputText.value == "") {
        text = te;
    }
    else {
        text = inputText.value;
        strlength = text.length;
        strf = text.substr(0, inputText.selectionStart);
        strb = text.substr(inputText.selectionStart, strlength);
        text = strf + te + strb;
    }
    return patron.test(text);
}


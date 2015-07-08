function ValidarAutocomplete(IdControl,IdMsj) {
    var IDRecirbidoPor = $(IdControl).val();

    if (IDRecirbidoPor == "" || IDRecirbidoPor == 0)
        $(IdMsj).html('No Registrado');
    else
        $(IdMsj).html('');
}

//function RedirecionURL(IDRegistro,ParamUrl){
//    window.location = ParamUrl+"/"+IDRegistro;
//}

jQuery.fn.cuentaCaracteres = function () {
    //para cada uno de los elementos del objeto jQuery
    this.each(function () {
        //creo una variable elem con el elemento actual, suponemos un textarea
        elem = $(this);
        //creo un elemento DIV sobre la marcha 
        var contador = $('<div>Contador caracteres: ' + elem.attr("value").length + '/1200 </div>');
        //inserto el DIV después del elemento textarea
        elem.after(contador);
        //guardo una referencia al elemento DIV en los datos del objeto jQuery
        elem.data("campocontador", contador);

        //creo un evento keyup para este elemento actual
        elem.keyup(function () {
            //creo una variable elem con el elemento actual, suponemos un textarea
            var elem = $(this);
            //recupero el objeto que tiene el elemento DIV contador asociado al textarea
            var campocontador = elem.data("campocontador");
            //modifico el texto del contador, para actualizarlo con el número de caracteres escritos
            campocontador.text('Contador caracteres: ' + elem.attr("value").length + '/1200');
        });
    });
    //siempre tengo que devolver this
    return this;
};


$(document).ready(function () {
    //$(".textarea").cuentaCaracteres();
})

//////$('textarea.limited').maxlength({
//////    'feedback': '.charsLeft' // note: looks within the current form
//////});

jQuery.fn.limitMaxlength = function(options){

  var settings = jQuery.extend({
    attribute: "maxlength",
    onLimit: function(){},
    onEdit: function(){}
  }, options);
  
  // Event handler to limit the textarea
  var onEdit = function(){
    var textarea = jQuery(this);
    var maxlength = parseInt(textarea.attr(settings.attribute));

    if(textarea.val().length > maxlength){
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

$(document).ready(function(){
  
  var onEditCallback = function(remaining){
    $(this).siblings('.charsRemaining').text("Characters remaining: " + remaining);
    
    if(remaining > 0){
      //$(this).css('background-color', 'white');
    }
  }
  
  var onLimitCallback = function(){
    //$(this).css('background-color', 'white');
  }
  
  $('textarea[maxlength]').limitMaxlength({
    onEdit: onEditCallback,
    onLimit: onLimitCallback
  });
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

//Todos los textos con mayusculas
//$(window).load(
//    function () {
//            $('input[type="text"]').addClass("textTransform");  
//            $("textarea").addClass("textTransform");  
//    }
//  );



function validarNumerosLetras(e) { // 1
    tecla = (document.all) ? e.keyCode : e.which; // 2
    if (tecla == 8) return true; // 3
    else if (tecla == 0) return true;
    else if (tecla == 9) return true;
    //else if (tecla == e.keyCode || tecla == e.which) return true;
    patron = /^[0-9a-zA-Z]+$/;
    //patron = /\w/; // Acepta Numeros y Letras
    te = String.fromCharCode(tecla); // 5
    return patron.test(te); // 6
}

function validarSoloNumeros(e) { // 1
    tecla = (document.all) ? e.keyCode : e.which; // 2
    if (tecla == 8) return true; // 3
    else if (tecla == 0) return true;
    else if (tecla == 9) return true;
    //else if (tecla == e.keyCode || tecla == e.which) return true;
    patron = /^[0-9]+$/;
    //patron = /\w/; // Acepta Numeros y Letras
    te = String.fromCharCode(tecla); // 5
    return patron.test(te); // 6
}



function validarNumerosLetrasGuion(e) { // 1
    tecla = (document.all) ? e.keyCode : e.which; // 2
    if (tecla == 8) return true; // 3
    else if (tecla == 0) return true;
    else if (tecla == 9) return true;
    //else if (tecla == e.keyCode || tecla == e.which) return true;
    patron = /^[0-9a-zA-Z _\-]+$/;
    //patron = /\w/; // Acepta Numeros y Letras
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
    //patron = /\w/; // Acepta Numeros y Letras
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
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 8) return true;

   patron = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  // patron = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/
    te = String.fromCharCode(tecla);
    return patron.test(te);
}

function val_Codigo(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 8) return true;
    //else if (tecla == e.keyCode || tecla == e.which) return true;
    patron = /[-0-9QWERTYUIOPASDFGHJKLÑZXCVBNMqwertyuiopñlkjhgfdsazxcvbnm\x00\s]/;
    te = String.fromCharCode(tecla);
    return patron.test(te);
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

function val_AZCodigo(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 8) return true;
    //else if (tecla == e.keyCode || tecla == e.which) return true;
    patron = /[1234567890\x00\s]|-/;
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

function val_19_(e) {

    if ($("#numPer").val() == 0) {
        $("#numPer").val('');
        $("#numPer").focus();
        $("#numPer").focus('-');
    }

    var textInput = e.target
    var text = textInput.value

    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 8) return true;
    patron = /[1234567890\x00\s]|-/;

    te = String.fromCharCode(tecla);
    if (text == "")
        text = te;
    else
        text = text + te;

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

function UI_Select_ClearSubLevel(ArrayControl) {
    var Controls = ArrayControl.split(';');
    for (i = 0; i < Controls.length; i++) {
        //document.getElementById(Controls[i]).options[0].selected = true;
        //$("select#elem")[0].selectedIndex = 0;
    }
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
function msjRequerido(control) {
//    if ($(control).val()=='') {
    //alert($(control).parent().parent().children().get());
//    }
}

function InicioJPopUp(selector, ancho, alto, resize, titulo) {
    $(selector).dialog({
        autoOpen: false,
        height: alto,
        width: ancho,
        modal: true,
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


function InicioJPopUpConfirm(selector, ancho, resize, titulo, actionfunction) {
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
                $(selector).dialog("close");
                return false;
            }
        }
    });
}


function InicioJPopUpConfirmYesNo(selector, ancho, resize, titulo, actionfunctionyes, actionfunctionno) {
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
                if (actionfunctionyes != null) {
                    actionfunctionyes();
                }
                $(selector).dialog("close");
            },
            "No": function () {
                if (actionfunctionno != null) {
                    actionfunctionno();
                }
                $(selector).dialog("close");
                return false;
            }
        }
    });
}

function InicioJPopUpConfirmWithoutClose(selector, ancho, resize, titulo, actionfunction) {
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
            },
            "No": function () {
                $(selector).dialog("close");
                return false;
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
    InicioJPopUpAlert(txt, null);
}

// removes the custom alert from the DOM
function removeCustomAlert() {
    document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"));
}

////CAMBIAR ESTILO ALERT END
function Jalert(text,Url) {
    $('#buttonAlert').html(text);
    $('#dialogAlert').css("display", "block");
    $('#dialogAlert').dialog({
        autoOpen: false,
        width: 400,
        modal: true,
        resizable:false,
        hide: 'fade',
        show: 'fade',
        buttons: {
            "Aceptar": function () {
                $('#dialogAlert').dialog("close");                
                if(Url != null)
                    window.location = Url;
            }
        }
    });
    $('#dialogAlert').dialog('option', 'modal', true).dialog('open');
    return true;
}

///     COMPARA FECHAS true: fecha > fecha2

function compare_dates(fecha, fecha2) {
    var xMonth = fecha.substring(3, 5);
    var xDay = fecha.substring(0, 2);
    var xYear = fecha.substring(6, 10);
    var yMonth = fecha2.substring(3, 5);
    var yDay = fecha2.substring(0, 2);
    var yYear = fecha2.substring(6, 10);
    if (xYear > yYear) {
        return (true)
    }
    else {
        if (xYear == yYear) {
            if (xMonth > yMonth) {
                return (true)
            }
            else {
                if (xMonth == yMonth) {
                    if (xDay > yDay)
                        return (true);
                    else
                        return (false);
                }
                else
                    return (false);
            }
        }
        else
            return (false);
    }
}


function CreateUrl(Action,Controller) {
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

    $(styleDate).datepicker({
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
    $(styleDate).mask("99/99/9999");
    $(styleDate).each(function () {
        if (this.value == "01/01/0001") {
            this.value = '';
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
function InicioJPopUpEsc(selector, ancho, alto, resize, titulo) {
    $(selector).dialog({
        autoOpen: false,
        closeOnEscape: false,
        open: function (event, ui) { $(".ui-dialog-titlebar-close", this.parentNode).hide(); },
        height: alto,
        width: ancho,
        modal: true,
        resizable: resize,
        hide: 'fade',
        show: 'fade',
        title: titulo
    });
}


function ValidarFecha(ID_Fecha) {
    var resultBool = 0;
    var f = document.getElementById(ID_Fecha).value

    re = /^[0-9][0-9]\/[0-9][0-9]\/[0-9][0-9][0-9][0-9]$/
    if (f.length == 0 || !re.exec(f)) {
        //        alert("La fecha no tiene formato correcto.")
        //        return
        return 1;
        resultBool = 1
    }

    var d = new Date()
    d.setFullYear(f.substring(6, 10),
		f.substring(3, 5) - 1,
			f.substring(0, 2))

    if (d.getMonth() != f.substring(3, 5) - 1
		|| d.getDate() != f.substring(0, 2)) {
        //        alert("Fecha no válida.")
        //        return
        resultBool = 2;
        return 2;
    }

    return 0;
}

function convertirAFecha(f) {
    var d = new Date()
    d.setFullYear(f.substring(6, 10),
		f.substring(3, 5) - 1,
			f.substring(0, 2))
    return d;
}


//Este script y otros muchos pueden
//descarse on-line de forma gratuita
//en El Código: www.elcodigo.com
//
//	Version 1
//	03/02/2001

function DiferenciaDiasFechas(CadenaFecha1, CadenaFecha2) {

    //Obtiene dia, mes y año
    var fecha1 = new fecha(CadenaFecha1)
    var fecha2 = new fecha(CadenaFecha2)

    //Obtiene objetos Date
    var miFecha1 = new Date(fecha1.anio, fecha1.mes, fecha1.dia)
    var miFecha2 = new Date(fecha2.anio, fecha2.mes, fecha2.dia)

    //Resta fechas y redondea
    var diferencia = miFecha1.getTime() - miFecha2.getTime()
    var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24))
    var segundos = Math.floor(diferencia / 1000)

    return dias;
}

function fecha(cadena) {

    //Separador para la introduccion de las fechas
    var separador = "/"

    //Separa por dia, mes y año
    if (cadena.indexOf(separador) != -1) {
        var posi1 = 0
        var posi2 = cadena.indexOf(separador, posi1 + 1)
        var posi3 = cadena.indexOf(separador, posi2 + 1)
        this.dia = cadena.substring(posi1, posi2)
        this.mes = cadena.substring(posi2 + 1, posi3)
        this.anio = cadena.substring(posi3 + 1, cadena.length)
    } else {
        this.dia = 0
        this.mes = 0
        this.anio = 0
    }
}

function Comparar_Fechas(fecha, fecha2) {
    var xMonth = fecha.substring(3, 5);
    var xDay = fecha.substring(0, 2);
    var xYear = fecha.substring(6, 10);
    var yMonth = fecha2.substring(3, 5);
    var yDay = fecha2.substring(0, 2);
    var yYear = fecha2.substring(6, 10);
    if (xYear > yYear) {
        return (true)
    }
    else {
        if (xYear == yYear) {
            if (xMonth > yMonth) {
                return (true)
            }
            else {
                if (xMonth == yMonth) {
                    if (xDay > yDay)
                        return (true);
                    else
                        return (false);
                }
                else
                    return (false);
            }
        }
        else
            return (false);
    }
}

function customValidationScript(IdSpanValidate, Message) {
    var SpanValidate = document.createElement("span");
    var IdValidateIdFechaEstimadaFin = document.getElementById(IdSpanValidate);
    SpanValidate.innerHTML = Message;
    IdValidateIdFechaEstimadaFin.innerHTML = "";
    IdValidateIdFechaEstimadaFin.className = "field-validation-error";
    IdValidateIdFechaEstimadaFin.appendChild(SpanValidate);
    $("#" + IdSpanValidate).attr("style", "z-index:10");
}

$(function () {
    //===== Time picker =====//
    $('.timepicker').timeEntry({
        show24Hours: true, showSeconds: false,
        spinnerSize: [0, 0, 0], // Image size
        spinnerIncDecOnly: true, // Only up and down arrows
        spinnerImage: '/Content/images/spinnerDefault.png', // Arrows image
    });
});

function makeDatePicker(selector) {
    //===== Date picker =====//
    $(selector).datepicker({ 
		showOtherMonths:true,
		autoSize: true,
        changeMonth: true,
		changeYear: true,
		appendText: '(dd/mm/yyyy)',
		dateFormat: 'dd/mm/yy'
	});	
}

function validarFechaMenorActual(IdFechaSeleccionada) {
    var fechaActual = new Date();
    var dia = fechaActual.getDate();
    var mes = fechaActual.getMonth() + 1;
    var anno = fechaActual.getFullYear();
    if (dia < 10) dia = "0" + dia;
    if (mes < 10) mes = "0" + mes;
    var fechaHoy = dia + "/" + mes + "/" + anno;

    var IdFecha = $('#' + IdFechaSeleccionada).val();
    var fecFecha = convertirAFecha(IdFecha);
    var fecact = convertirAFecha(fechaHoy);

    if (IdFecha != "" && fecFecha < fecact) {
        return true;
    }
    else {
        return false;
    }
}
$('#msgFechaError').css('display', '');

function EnterSubmit(e, buttonClick) {
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 13) {
        var obj = document.getElementById(buttonClick);
        obj.click();
    }
}

function clearInputsSection(selector) {
    $(selector).find('input[type="text"],select,textarea').each(function (index, elem) {
        elem.value = "";
        if(elem.type=="text") {
            $("#"+elem.id).removeAttr("value");
        }
    });
}

function appendErrorMessage(selector, message, visible) {
    message = "<span>" + message + "</span>";
    $(selector).html(message);
    if(visible == true) {
        $(selector).css('display', '');
    }
    else {
        $(selector).css('display', 'none');
    }
}

function clearFileInputField(tagId) {
    document.getElementById(tagId).outerHTML  = document.getElementById(tagId).outerHTML ;
}

function TrimString(str) {
    str = str.replace(/^\s*|\s*$/g,"");
    return str;
}

function uniformPartialList(selector) {
    var combo = document.getElementById(selector);
    var uniformSelect = document.getElementById("uniform-" + combo.id);
    if (uniformSelect == null) {
        $("#" + combo.id).uniform();
    }

    var text = $("#" + selector + " option:selected").text();
    var divParent = $("#" + selector).closest('div');

//    $(divParent).attr("original-title", text);
//    $(divParent).addClass('tipS');
//    $(divParent).tipsy({ gravity: 's', fade: true, html: true });

//    $(divParent).attr("data-toggle", "tooltip");
//    $(divParent).attr("data-placement", "top");
//    $(divParent).attr("data-original-title", text);
//    $(divParent).tooltip();

    $("#" + selector).on('change', function() {
        var IdSelect = $(this).attr("id");
        text = $("#" + IdSelect + " option:selected").text();
//        divParent = $('#' + IdSelect).closest('div');

//       $(divParent).attr("original-title", text);
//       $(divParent).addClass('tipS');
//        $(divParent).tipsy({ gravity: 's', fade: true, html: true });

//        $(divParent).attr("data-toggle", "tooltip");
//        $(divParent).attr("data-placement", "top");
//        $(divParent).attr("data-original-title", text);
//        $(divParent).tooltip();
       jQuery('#' + IdSelect).parent().children("span").first().text(text);
    });


//    $("#" + selector).blur(function() {
//        $('.tipsy-s').css('display','none');
//    });
}

function SetRequiredMark(selector){
    $(selector).html($(selector).html() + '<span class="req">*</span>');
}

function limitStringLength(inputText, spanText, limit){
    $(inputText).inputlimiter({
        limit: limit,
        boxId: spanText,
        boxAttach: false
    });
}
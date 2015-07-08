/*(function (Validation, $) {

    $(document).ready(function () {
        $(".numeric").keypress(numericValidate);
        $(".decimal").keypress(decimalValidate);
        $(".2decimal").keypress(n2decimal);
        $(".4decimal").keypress(n4decimal);
        $(".8decimal").keypress(n8decimal);
        $(".4decimalVenta").keypress(n4decimalVenta);
        $(".letter").keypress(validateAlphaNumericWithSpace);
        $(".alphanumeric").keypress(numericLettervalidate);
        $(".max999").keypress(max999number);
        $(".n4decimalSP").keypress(n4decimalSP);
        $(".alphanumericFirmante").keypress(numericLettervalidateFirmante);
        $(".DateFormatValid").keypress(validateDateFormat);
        $(".characterSpecials").keypress(characterSpecials);
        //$(".k-button").click();

        validateFormateDate();
    });

    //funciones privadas
    var numericValidate = function (e) {
        var tecla = (document.all) ? e.keyCode : e.which;
        if (tecla == 8) return true;
        else if (tecla == 0) return true;
        else if (tecla == 9) return true;
        else if (tecla == 190) return true;

        patron = /[0-9]/;
        te = String.fromCharCode(tecla);
        return patron.test(te);
    },

    decimalValidate = function (e) {
        key = e.keyCode ? e.keyCode : e.which
        // backspace
        if (key == 8) return true
        // 0-9
        if (key > 47 && key < 58) {
            if (field.value == "") return true
            regexp = /.[0-9]{2}$/
            return !(regexp.test(field.value))
        }
        // .
        if (key == 46) {
            if (field.value == "") return false
            regexp = /^[0-9]+$/
            return regexp.test(field.value)
        }
        // other key
        return false

    },

    validateAlphaNumericWithSpace = function (e) {
        tecla = (document.all) ? e.keyCode : e.which;
        if (tecla == 8) return true;
        var patron = /^[A-Za-zñÑáéíóúÁÉÍÚÓ ]+$/;
        te = String.fromCharCode(tecla);
        return patron.test(te);
    },

    n4decimalVenta = function (e) {
        var tecla = (document.all) ? e.keyCode : e.which;
        if (tecla == 8) return true;
        else if (tecla == 0) return true;
        else if (tecla == 14) return true;
        else if (tecla == 15) return true;
        else if (tecla == 9) return true;
        else if (tecla == 46) return true;
        else if (tecla == 190) return true;
        else if (tecla == 37) return false;
        else if (tecla == 39) return true;

        patron = /[0-9]/;
        te = String.fromCharCode(tecla);

        if (patron.test(te)) {
            var value = $(this).val();
            var long = value.split(".");
            entero = long[0];
            deci = long[1];
            if (entero.length > 2) {
                if (deci != undefined) {
                    var num = $(this).val(entero + "." + deci);
                }
                else {
                    var num = $(this).val(entero + ".");
                }
            }
             
            if (value.indexOf(".") !== -1) {
                if ($(this).getCursorPosition() > value.indexOf(".")) {
                    var cadena = value.split("."),
                        decimal = cadena[1];
                    if (decimal.length > 3) {
                        return false;
                    } else {
                        return true;
                    }
                }
            }
            return true;

        } else {
            return false;
        }
    },

    n4decimal = function (e) {
        var tecla = (document.all) ? e.keyCode : e.which;
        if (tecla == 8) return true;
        else if (tecla == 0) return true;
        else if (tecla == 14) return true;
        else if (tecla == 15) return true;
        else if (tecla == 9) return true;
        else if (tecla == 46) return true;
        else if (tecla == 190) return true;
        else if (tecla == 37) return false;
        else if (tecla == 39) return true;

        patron = /[0-9]/;
        te = String.fromCharCode(tecla);

        if (patron.test(te)) {
            var value = $(this).val();
            if (value.indexOf(".") !== -1) {
                if ($(this).getCursorPosition() > value.indexOf(".")) {
                    var cadena = value.split("."),
                        decimal = cadena[1];
                    if (decimal.length > 3) {
                        return false;
                    } else {
                        return true;
                    }
                }
            }

            return true;

        } else {
            return false;
        }

    },

    n8decimal = function (e) {
        var tecla = (document.all) ? e.keyCode : e.which;
        if (tecla == 8) return true;
        else if (tecla == 0) return true;
        else if (tecla == 14) return true;
        else if (tecla == 15) return true;
        else if (tecla == 9) return true;
        else if (tecla == 46) return true;
        else if (tecla == 190) return true;
        else if (tecla == 37) return false;
        else if (tecla == 39) return true;

        patron = /[0-9]/;
        te = String.fromCharCode(tecla);

        if (patron.test(te)) {
            var value = $(this).val();
            if (value.indexOf(".") !== -1) {
                if ($(this).getCursorPosition() > value.indexOf(".")) {
                    var cadena = value.split("."),
                        decimal = cadena[1];
                    if (decimal.length > 7) {
                        return false;
                    } else {
                        return true;
                    }
                }
            }

            return true;

        } else {
            return false;
        }

    },


    n4decimalSP = function (e) {
        var tecla = (document.all) ? e.keyCode : e.which;
        if (tecla == 8) return true;
        else if (tecla == 0) return true;
        else if (tecla == 9) return true;
        else if (tecla == 46) return false;
        else if (tecla == 190) return true;
        else if (tecla == 37) return true;
        else if (tecla == 39) return false;

        patron = /[0-9]/;
        te = String.fromCharCode(tecla);

        if (patron.test(te)) {
            var value = $(this).val();
            if (value.indexOf(".") !== -1) {
                if ($(this).getCursorPosition() > value.indexOf(".")) {
                    var cadena = value.split("."),
                        decimal = cadena[1];
                    if (decimal.length > 3) {
                        return false;
                    } else {
                        return true;
                    }
                }
            }

            return true;

        } else {
            return false;
        }

    },

    n2decimal = function (e) {
        var tecla = (document.all) ? e.keyCode : e.which;

        if (tecla == 8) return true;
        else if (tecla == 0) return true;
        else if (tecla == 14) return true;
        else if (tecla == 15) return true;
        else if (tecla == 9) return true;
        else if (tecla == 46) return true;
        else if (tecla == 190) return true;
        else if (tecla == 37) return false;
        else if (tecla == 39) return true;

        patron = /[0-9]+/;
        te = String.fromCharCode(tecla);

        if (patron.test(te)) {
            var value = $(this).val();
            if (value.indexOf(".") !== -1) {
                if ($(this).getCursorPosition() > value.indexOf(".")) {
                    var cadena = value.split("."),
                        decimal = cadena[1];
                    if (decimal.length > 1) {
                        return false;
                    } else {
                        return true;
                    }
                }
            }

            return true;

        } else {
            return false;
        }

    },

    max999number = function (e) {
        var value = $(this).val();
        if (value < 100) {
            return true;
        } else {
            return false;
        }
    }

    //Agregando funciones al objecto jQuery
    $.fn.IsValidForm = function () {
        var valid = true,
            $form = this;

        $form.find('input,select,textarea').each(function (index, elem) {
            var item = $(elem).hasClass('ignorefield');
            if (!item) {
                var isElemValid = $form.validate().element($(this));
                if (isElemValid != null) {
                    valid = valid & isElemValid;
                    if (valid == false)
                        console.log($(this));
                }
            }
        });

        return valid;
    },

    $.fn.addValidattionForm = function () {
        var form = this.closest("form");
        form.removeData('validator');
        form.removeData('unobtrusiveValidation');
        $.validator.unobtrusive.parse(form);
    },

    numericLettervalidate = function (e) {
        tecla = (document.all) ? e.keyCode : e.which;
        if (tecla == 8) return true;
        patron = /^[A-Za-zñÑáéíóúÁÉÍÚÓ0-9 ]+$/;
        te = String.fromCharCode(tecla);
        return patron.test(te);
    },

    characterSpecials = function (e) {
        tecla = (document.all) ? e.keyCode : e.which;
        if (tecla == 8) return true;
        patron = "\b(\w+?)\s\1\b";
        te = String.fromCharCode(tecla);
        return patron.test(te);
    },

    numericLettervalidateFirmante = function (e) {
        tecla = (document.all) ? e.keyCode : e.which;
        if (tecla == 8) return true;
        patron = /^[A-Za-zñÑáéíóúÁÉÍÚÓ0-9./() ]+$/;
        te = String.fromCharCode(tecla);
        return patron.test(te);
    }

    validateDateFormat = function (e) {
        tecla = (document.all) ? e.keyCode : e.which;
        if (tecla == 8) return true;
        patron = /^[0-9/]+$/;
        te = String.fromCharCode(tecla);
        return patron.test(te);
    }

    //Añandiendo funcionalidades al objeto Validation
    var app = {
        update: function () {
            $(".numeric,.decimal,.2decimal,.4decimal,.4decimalVenta,.letter,.alphanumeric,.characterSpecials").unbind('keypress');

            $(".numeric").keypress(numericValidate);
            $(".decimal").keypress(decimalValidate);
            $(".2decimal").keypress(n2decimal);
            $(".4decimal").keypress(n4decimal);
            $(".4decimalVenta").keypress(n4decimalVenta);
            $(".letter").keypress(validateAlphaNumericWithSpace);
            $(".alphanumeric").keypress(numericLettervalidate);
            $(".characterSpecials").keypress(characterSpecials);
        },

        removeValidation: function (element) {
            $(element).removeClass("input-validation-error").addClass("ignorefield");
            $(element)[0].nextElementSibling.innerHTML = ""
        }
    }

    $.validator &&
    $.validator.setDefaults({
        ignore: ""
    });

    function validateFormateDate() {
        jQuery.validator && jQuery.validator.addMethod(
            'date',
            function (value, element, params) {
                if (this.optional(element)) {
                    return true;
                };
                var result = false;
                try {
                    var date = kendo.parseDate(value, "dd/MM/yyyy");
                    result = true;
                    if (!date) {
                        result = false;
                    }
                } catch (err) {
                    result = false;
                }
                return result;
            },
            ''
        );
    }

    jQuery.validator.addMethod("requiredDecimal", function (value, element) {
        if ($(element).hasClass("ignorefield")) {
            return true;
        } else {
            value = parseFloat(value.toString().split(',').join(''));
            return (value > 0);
        }

    }, "Éste campo es obligatorio");

    jQuery.validator.addMethod("requiredDecimal2", function (value, element) {
        if ($(element).hasClass("ignorefield")) {
            return true;
        } else {
            value = parseFloat(value.toString().split(',').join(''));
            return (value >= 0);
        }

    }, "Éste campo es obligatorio");

    jQuery.validator.classRuleSettings.requiredDecimal = {
        requiredDecimal: true
    };

    jQuery.validator.classRuleSettings.requiredDecimal2 = {
        requiredDecimal2: true
    };

    window.Validation = $.extend(Validation, app);

})(window.Validation || {}, jQuery)*/

var Util =
    {
        JSHelper: function ($) {
            $.datepicker.setDefaults(
            {
                dateFormat: "dd/mm/yy",
                //beforeShowDay: $.datepicker.noWeekends
           
                //Chat Limpio
                //
            });

            $.fn.dataSourceEv = function (arrayList, valueMember, displayMember, element, selText) {

                var ElementID = "#" + element;
                var options = '<option value="" >' + selText + '</option>';
                var Text = $(ElementID + " option:selected").text();

                $(ElementID).clearSelect();
                $(ElementID).append(options);
                $(ElementID).parent().children("span").first().text(selText);


                this.html(options)

                options = "";

                $.each(arrayList, function (index, item) {
                    options += "<option value='" + eval("item." + valueMember) + "'> " + eval("item." + displayMember) + " </option>";
                });

                this.append(options);

                return this;
            }

            $.fn.datasourceClearEv = function (Element, selText) {

                var TabId = "#" + Element;

                $(TabId).clearSelect();
                $(TabId).append('<option value="" >' + selText + '</option>');
                $(TabId).parent().children("span").first().text(selText);

                var Text = $(TabId + " option:selected").text();
                $("div#uniform-" + Element + ".selector").attr("original-title", Text);

                return this;
            }

            $.fn.dataSource = function (arrayList, valueMember, displayMember, element) {

                var ElementID = "#" + element;

                $(ElementID).clearSelect();

                options = "";

                //selText = "";

                $.each(arrayList, function (index, item) {
                    options += "<option value='" + eval("item." + valueMember) + "'> " + eval("item." + displayMember) + " </option>";
                    //selText = displayMember;
                });
                
                //$(ElementID).parent().children("span").first().text();

                this.append(options);

                return this;
            }

            this.getDateTime = function (date) {
                return (date.getDate() + 1) + "/" + date.getMonth() + "/" + date.getFullYear();
            }

            this.CalcularDiferenciaDias = function (fechaInicio, fechaFin) {
                var dayDiff = Math.ceil((fechaFin - fechaInicio) / (1000 * 60 * 60 * 24));

                return dayDiff;
            }

            this.redireccionar = function (url) {
                window.location = url;
            }

            this.HasValue = function (value) {
                return (value !== null && value !== undefined && value !== "" && value !== 0)
            }

            this.ValidarFechaMayor = function (fechaIni, fechaFin) {
                return fechaFin >= fechaIni;
            }

            this.WebGridSetTotalRows = function (webGrid, description) {
                 
                var $webgrid = $(webGrid);
                var $tFootPage = $("<a id='tfootPage' class='total_registros'></a>");
                var footerDesc = this.HasValue(description) ? description : $(webGrid).attr("data_footerdesc");

                $tFootPage.html(footerDesc);

                $webgrid.find("tfoot tr:first td").prepend($tFootPage);
            }
        }

    }

    Util.JSHelper = new Util.JSHelper(jQuery);

    var ReturnIndex = function () {

        window.location.href = "/Home/Index";

    }

    var NotificationAkiraStyle = function (Messages,MessageOption, Href,TextHref)
    {

        if (MessageOption == 1) {

            setTimeout(function () {

                var Message = '<span class="icon icon-calendar"></span><p>' + Messages + ' <a href="' + Href + '">'+TextHref+'</a></p>'

                // create the notification
                var notification = new NotificationFx({
                    message: Message,
                    layout: 'attached',
                    effect: 'bouncyflip',
                    type: 'notice', // notice, warning or error
                    onClose: function () {

                    }
                });

                // show the notification
                notification.show();

            }, 1200);
        }

        if (MessageOption == 2) {

            setTimeout(function () {

                var Message = '<p>' + Messages + ' <a href="' + Href + '">' + TextHref + '</a></p>'

                // create the notification
                var notification = new NotificationFx({
                    message: Message,
                    layout: 'growl',
                    effect: 'genie',
                    type: 'notice', // notice, warning or error
                    onClose: function () {
                       
                    }
                });

                // show the notification
                notification.show();

            }, 1200);
        }

        

        
    }
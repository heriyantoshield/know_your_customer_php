$(document).ready(function() {
    app.Survey.init();
});

app.Survey = {
	controller: 'Survey/',
	api: 'Survey_api/',
	elm: {},

	init: function () {
        var file = app.Survey;
		file.getHubunganInformanNasabah();
        var informan = 2;

        document.getElementById("add-informan-silent-survey").onclick = function() {functionAddInformanSilentSurvey()};
        function functionAddInformanSilentSurvey(){

                var html = '';
                html += '<div class="form-group row" style="margin-top:25px;">';
                html += '<div class="col-sm-12">'
                html += '<div class="col-sm-9">'
                html += '<div class="input-group">'
                html += '<div class="col-sm-4">'
                html += '<label>Nama Informan '+informan+'</label>'
                html += '</div>'
                html += '<div class="col-sm-4">'
                html += '<input type="input" class="form-control" id="">'
                html += '</div>'
                html += '</div>'
                html += '</div>'
                html += '</div>'
                html += '</div>'
                
                informan++;
                $('#newinformansilentsurvey').append(html);

        }
    },

    getHubunganInformanNasabah: function() {
        var file = app.Survey;

        $.ajax({
            url: app.base_url + file.api + "getHubunganInformanDenganNasabah",
            async: false,
            success: function(response) {
                if (response.status) {
                    var cabang = response.result.map(function (res) {
                        return {
                            id: res.relationCode,
                            text: res.relationDesc
                        };
                    });
                }

                $('#hubungan-informan-dengan-nasabah').select2({
                    theme: 'bootstrap4',
                    placeholder: "-PILIH-",
                    allowClear: true,
                    cache: true,
                    data: cabang,
                    // containerCssClass: "error-slc-cabang",
                    processResults: function (response) {
                        return {
                            results: response.result.map(function (res) {
                                return {
                                    id: res.relationCode,
                                    text: res.relationDesc
                                };
                            }) 
                        };
                    }
                });
            }
        });
    },

}
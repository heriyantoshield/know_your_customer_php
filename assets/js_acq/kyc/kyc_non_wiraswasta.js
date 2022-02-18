$(document).ready(function() {
    app.KycNonWiraswasta.init();
});

app.KycNonWiraswasta = {
	controller: 'Kyc/',
	api: 'Kyc_api/',
	elm: {},

	init: function () {
		var file = app.KycNonWiraswasta;
		var id_bukti_bekerja_instant_approval = 2;
		var id_bukti_penghasilan_instant_approval = 2;
		var id_bukti_bekerja_tele_survey = 2;
		var id_bukti_penghasilan_tele_survey = 2;
		var id_bukti_bekerja_silent_survey = 2;
		var id_bukti_penghasilan_silent_survey = 2;
        var condition = false;        

        document.getElementById("add-document-bukti-bekerja-instant-approval-non-wiraswasta").onclick = function() {functionAddBekerjaInstanApproval()};
        document.getElementById("add-document-bukti-bekerja-tele-survey-non-wiraswasta").onclick = function() {functionAddBekerjaTeleSurvey()};
        document.getElementById("add-document-bukti-bekerja-silent-survey-non-wiraswasta").onclick = function() {functionAddBekerjaSilentSurvey()};
        document.getElementById("add-document-bukti-penghasilan-instant-approval-non-wiraswasta").onclick = function() {functionAddPenghasilanInstanApproval()};
        document.getElementById("add-document-bukti-penghasilan-tele-survey-non-wiraswasta").onclick = function() {functionAddPenghasilanTeleSurvey()};
        document.getElementById("add-document-bukti-penghasilan-silent-survey-non-wiraswasta").onclick = function() {functionAddPenghasilanSilentSurvey()};
        
		function functionAddBekerjaInstanApproval(){
			if(id_bukti_bekerja_instant_approval == 2){
				var html = '';
				html += '<div class="col-lg-4" style="margin-top:10px;">';
				html += '<input type="file" class="form-control-file" id="dokumen-bukti-bekerja-instant-approval-non-wiraswasta-'+id_bukti_bekerja_instant_approval+'">';
				html += '</div>';
				id_bukti_bekerja_instant_approval++;
				$('#newdokbuktibekerjainstantapproval').append(html);
			}
        }

		function functionAddBekerjaTeleSurvey(){
			if(id_bukti_bekerja_tele_survey == 2){
				var html = '';
				html += '<div class="col-lg-4" style="margin-top:10px;">';
				html += '<input type="file" class="form-control-file" id="dokumen-bukti-bekerja-tele-survey-non-wiraswasta-'+id_bukti_bekerja_tele_survey+'">';
				html += '</div>';
				id_bukti_bekerja_tele_survey++;
				$('#newdokbuktibekerjatelesurvey').append(html);
			}
        }

		function functionAddBekerjaSilentSurvey(){
			if(id_bukti_bekerja_silent_survey == 2){
				var html = '';
				html += '<div class="col-lg-4" style="margin-top:10px;">';
				html += '<input type="file" class="form-control-file" id="dokumen-bukti-bekerja-silent-survey-non-wiraswasta-'+id_bukti_bekerja_silent_survey+'">';
				html += '</div>';
				id_bukti_bekerja_silent_survey++;
				$('#newdokbuktibekerjasilentsurvey').append(html);
			}
        }

        function functionAddPenghasilanInstanApproval(){
			if(id_bukti_penghasilan_instant_approval <= 6){
				var html = '';
				html += '<div class="col-lg-4" style="margin-top:10px;">';
				html += '<input type="file" class="form-control-file" id="dokumen-bukti-penghasilan-instant-approval-non-wiraswasta-'+id_bukti_penghasilan_instant_approval+'">';
				html += '</div>';
				id_bukti_penghasilan_instant_approval++;
				$('#newdokbuktipenhasilaninstantapproval').append(html);
			}
        }

		function functionAddPenghasilanTeleSurvey(){
			if(id_bukti_penghasilan_tele_survey <= 6){
				var html = '';
				html += '<div class="col-lg-4" style="margin-top:10px;">';
				html += '<input type="file" class="form-control-file" id="dokumen-bukti-penghasilan-tele-survey-non-wiraswasta-'+id_bukti_penghasilan_tele_survey+'">';
				html += '</div>';
				id_bukti_penghasilan_tele_survey++;
				$('#newdokbuktipenhasilantelesurvey').append(html);
			}
        }

		function functionAddPenghasilanSilentSurvey(){
			if(id_bukti_penghasilan_silent_survey <= 6){
				var html = '';
				html += '<div class="col-lg-4" style="margin-top:10px;">';
				html += '<input type="file" class="form-control-file" id="dokumen-bukti-penghasilan-silent-survey-non-wiraswasta-'+id_bukti_penghasilan_silent_survey+'">';
				html += '</div>';
				id_bukti_penghasilan_silent_survey++;
				$('#newdokbuktipenhasilansilentsurvey').append(html);
			}
        }
        
        $('#content-instant-approval-non-wiraswasta').hide();
        $('#content-tele-survey-non-wiraswasta').hide();
        $('#content-silent-survey-non-wiraswasta').hide();
        
        $('#tittle-instant-approval-non-wiraswasta').click(function () {
			condition = !condition;
			if (condition == false) {
				$('#content-instant-approval-non-wiraswasta').slideUp("slow");
				$('#span-instant-approval-non-wiraswasta').html('Informasi Pekerjaan Nasabah <i class="fas fa-angle-right ml-2"></i>')
				$('#span-instant-approval-non-wiraswasta').removeClass('use-bottom-border-span');

			}
			else if (condition == true) {
				$('#content-instant-approval-non-wiraswasta').slideDown("slow");
				$('#span-instant-approval-non-wiraswasta').html('Informasi Pekerjaan Nasabah <i class="fas fa-angle-down ml-2"></i>')
				$('#span-instant-approval-non-wiraswasta').addClass('use-bottom-border-span');
			}
		});

        $('#tittle-tele-survey-non-wiraswasta').click(function () {
			condition = !condition;
			if (condition == false) {
				$('#content-tele-survey-non-wiraswasta').slideUp("slow");
				$('#span-tele-survey-non-wiraswasta').html('Informasi Pekerjaan Nasabah <i class="fas fa-angle-right ml-2"></i>')
				$('#span-tele-survey-non-wiraswasta').removeClass('use-bottom-border-span');

			}
			else if (condition == true) {
				$('#content-tele-survey-non-wiraswasta').slideDown("slow");
				$('#span-tele-survey-non-wiraswasta').html('Informasi Pekerjaan Nasabah <i class="fas fa-angle-down ml-2"></i>')
				$('#span-tele-survey-non-wiraswasta').addClass('use-bottom-border-span');
			}
		});

        $('#tittle-silent-survey-non-wiraswasta').click(function () {
			condition = !condition;
			if (condition == false) {
				$('#content-silent-survey-non-wiraswasta').slideUp("slow");
				$('#span-silent-survey-non-wiraswasta').html('Informasi Pekerjaan Nasabah <i class="fas fa-angle-right ml-2"></i>')
				$('#span-silent-survey-non-wiraswasta').removeClass('use-bottom-border-span');

			}
			else if (condition == true) {
				$('#content-silent-survey-non-wiraswasta').slideDown("slow");
				$('#span-silent-survey-non-wiraswasta').html('Informasi Pekerjaan Nasabah <i class="fas fa-angle-down ml-2"></i>')
				$('#span-silent-survey-non-wiraswasta').addClass('use-bottom-border-span');
			}
		});

		$('#slc-sektor-ekonomi-level-1-instant-approval-non-wiraswasta').on('change', function() {
            var file = app.KycNonWiraswasta;
            $("#slc-sektor-ekonomi-level-2-instant-approval-non-wiraswasta").val('').trigger('change');
            file.getEconomicSectorLevel2InstantApproval();
        });

        $('#slc-sektor-ekonomi-level-2-instant-approval-non-wiraswasta').on('change', function() {
            var file = app.KycNonWiraswasta;
            $('#slc-sektor-ekonomi-level-3-instant-approval-non-wiraswasta').val('').trigger('change');
            file.getEconomicSectorLevel3InstantApproval();
            file.getEconomicSectorFromLevel3ToLevel2andLevel1InstantApproval();
        });

        $('#slc-sektor-ekonomi-level-3-instant-approval-non-wiraswasta').on('change', function() {
            var file = app.KycNonWiraswasta;
            if($('#slc-sektor-ekonomi-level-3-instant-approval-non-wiraswasta').val() == null &&
               $('#slc-sektor-ekonomi-level-3-instant-approval-non-wiraswasta').select2('data')[0]['text'] == null){
                if($('#slc-sektor-ekonomi-level-1-instant-approval-non-wiraswasta').val() != '' && 
                   $('#slc-sektor-ekonomi-level-2-instant-approval-non-wiraswasta').val() == null){
                        $('#slc-sektor-ekonomi-level-2-instant-approval-non-wiraswasta').empty();
                }
                else if ($('#slc-sektor-ekonomi-level-1-instant-approval-non-wiraswasta').val() != '' && 
                         $('#slc-sektor-ekonomi-level-2-instant-approval-non-wiraswasta').val() != ''){
                            $('#slc-sektor-ekonomi-level-3-instant-approval-non-wiraswasta').empty();
                }
            }
            else if($('#slc-sektor-ekonomi-level-3-instant-approval-non-wiraswasta').val() != null &&
                    $('#slc-sektor-ekonomi-level-3-instant-approval-non-wiraswasta').select2('data')[0]['text'] != null){
                        $('#slc-sektor-ekonomi-level-1-instant-approval-non-wiraswasta').empty();
                        $('#slc-sektor-ekonomi-level-2-instant-approval-non-wiraswasta').empty();
                        file.getEconomicSectorFromLevel3ToLevel2andLevel1InstantApproval();
            }
        });

		$('#slc-sektor-ekonomi-level-1-tele-survey-non-wiraswasta').on('change', function() {
            var file = app.KycNonWiraswasta;
            $("#slc-sektor-ekonomi-level-2-tele-survey-non-wiraswasta").val('').trigger('change');
            file.getEconomicSectorLevel2TeleSurvey();
        });

        $('#slc-sektor-ekonomi-level-2-tele-survey-non-wiraswasta').on('change', function() {
            var file = app.KycNonWiraswasta;
            $('#slc-sektor-ekonomi-level-3-tele-survey-non-wiraswasta').val('').trigger('change');
            file.getEconomicSectorLevel3TeleSurvey();
            file.getEconomicSectorFromLevel3ToLevel2andLevel1TeleSurvey();
        });

        $('#slc-sektor-ekonomi-level-3-tele-survey-non-wiraswasta').on('change', function() {
            var file = app.KycNonWiraswasta;
            if($('#slc-sektor-ekonomi-level-3-tele-survey-non-wiraswasta').val() == null &&
               $('#slc-sektor-ekonomi-level-3-tele-survey-non-wiraswasta').select2('data')[0]['text'] == null){
                if($('#slc-sektor-ekonomi-level-1-tele-survey-non-wiraswasta').val() != '' && 
                   $('#slc-sektor-ekonomi-level-2-tele-survey-non-wiraswasta').val() == null){
                        $('#slc-sektor-ekonomi-level-2-tele-survey-non-wiraswasta').empty();
                }
                else if ($('#slc-sektor-ekonomi-level-1-tele-survey-non-wiraswasta').val() != '' && 
                         $('#slc-sektor-ekonomi-level-2-tele-survey-non-wiraswasta').val() != ''){
                            $('#slc-sektor-ekonomi-level-3-tele-survey-non-wiraswasta').empty();
                }
            }
            else if($('#slc-sektor-ekonomi-level-3-tele-survey-non-wiraswasta').val() != null &&
                    $('#slc-sektor-ekonomi-level-3-tele-survey-non-wiraswasta').select2('data')[0]['text'] != null){
                        $('#slc-sektor-ekonomi-level-1-tele-survey-non-wiraswasta').empty();
                        $('#slc-sektor-ekonomi-level-2-tele-survey-non-wiraswasta').empty();
                        file.getEconomicSectorFromLevel3ToLevel2andLevel1TeleSurvey();
            }
        });

		$('#slc-sektor-ekonomi-level-1-silent-survey-non-wiraswasta').on('change', function() {
            var file = app.KycNonWiraswasta;
            $("#slc-sektor-ekonomi-level-2-silent-survey-non-wiraswasta").val('').trigger('change');
            file.getEconomicSectorLevel2SilentSurvey();
        });

        $('#slc-sektor-ekonomi-level-2-silent-survey-non-wiraswasta').on('change', function() {
            var file = app.KycNonWiraswasta;
            $('#slc-sektor-ekonomi-level-3-silent-survey-non-wiraswasta').val('').trigger('change');
            file.getEconomicSectorLevel3SilentSurvey();
            file.getEconomicSectorFromLevel3ToLevel2andLevel1SilentSurvey();
        });

        $('#slc-sektor-ekonomi-level-3-silent-survey-non-wiraswasta').on('change', function() {
            var file = app.KycNonWiraswasta;
            if($('#slc-sektor-ekonomi-level-3-silent-survey-non-wiraswasta').val() == null &&
               $('#slc-sektor-ekonomi-level-3-silent-survey-non-wiraswasta').select2('data')[0]['text'] == null){
                if($('#slc-sektor-ekonomi-level-1-silent-survey-non-wiraswasta').val() != '' && 
                   $('#slc-sektor-ekonomi-level-2-silent-survey-non-wiraswasta').val() == null){
                        $('#slc-sektor-ekonomi-level-2-silent-survey-non-wiraswasta').empty();
                }
                else if ($('#slc-sektor-ekonomi-level-1-silent-survey-non-wiraswasta').val() != '' && 
                         $('#slc-sektor-ekonomi-level-2-silent-survey-non-wiraswasta').val() != ''){
                            $('#slc-sektor-ekonomi-level-3-silent-survey-non-wiraswasta').empty();
                }
            }
            else if($('#slc-sektor-ekonomi-level-3-silent-survey-non-wiraswasta').val() != null &&
                    $('#slc-sektor-ekonomi-level-3-silent-survey-non-wiraswasta').select2('data')[0]['text'] != null){
                        $('#slc-sektor-ekonomi-level-1-silent-survey-non-wiraswasta').empty();
                        $('#slc-sektor-ekonomi-level-2-silent-survey-non-wiraswasta').empty();
                        file.getEconomicSectorFromLevel3ToLevel2andLevel1SilentSurvey();
            }
        });

		file.getEconomicSectorLevel1InstantApproval();
        file.getEconomicSectorLevel2InstantApproval();
        file.getEconomicSectorLevel3InstantApproval();
        file.getEconomicSectorFromLevel3ToLevel2andLevel1InstantApproval();
		file.getEconomicSectorLevel1TeleSurvey();
        file.getEconomicSectorLevel2TeleSurvey();
        file.getEconomicSectorLevel3TeleSurvey();
        file.getEconomicSectorFromLevel3ToLevel2andLevel1TeleSurvey();
		file.getEconomicSectorLevel1SilentSurvey();
        file.getEconomicSectorLevel2SilentSurvey();
        file.getEconomicSectorLevel3SilentSurvey();
        file.getEconomicSectorFromLevel3ToLevel2andLevel1SilentSurvey();

        $('#btn-save-instant-approval-non-wiraswasta').click(function () {
            var file = app.KycNonWiraswasta;
            file.uploadDocumentInstantApproval();

            if($('#slc-sektor-ekonomi-level-1-instant-approval-non-wiraswasta option:selected').val() == null || 
               $('#slc-sektor-ekonomi-level-1-instant-approval-non-wiraswasta option:selected').val() == ''){
                $('#err-slc-sektor-ekonomi-level-1-instant-approval-non-wiraswasta').html('Sektor Ekonomi Level 1 Wajib Diisi');
                $('#err-slc-sektor-ekonomi-level-1-instant-approval-non-wiraswasta').prop("hidden", false);
                $('.error-slc-sektor-ekonomi-level-1-instant-approval-non-wiraswasta').css({"border-color": "red"});
            }
            else if($('#slc-sektor-ekonomi-level-1-instant-approval-non-wiraswasta option:selected').val() != null || 
                    $('#slc-sektor-ekonomi-level-1-instant-approval-non-wiraswasta option:selected').val() != ''){
                        $('#err-slc-sektor-ekonomi-level-1-instant-approval-non-wiraswasta').html('');
                        $('#err-slc-sektor-ekonomi-level-1-instant-approval-non-wiraswasta').prop("hidden", true);
                        $('.error-slc-sektor-ekonomi-level-1-instant-approval-non-wiraswasta').css({"border-color": ""});
            }

            if($('#slc-sektor-ekonomi-level-2-instant-approval-non-wiraswasta option:selected').val() == null || 
               $('#slc-sektor-ekonomi-level-2-instant-approval-non-wiraswasta option:selected').val() == ''){
                $('#err-slc-sektor-ekonomi-level-2-instant-approval-non-wiraswasta').html('Sektor Ekonomi Level 2 Wajib Diisi');
                $('#err-slc-sektor-ekonomi-level-2-instant-approval-non-wiraswasta').prop("hidden", false);
                $('.error-slc-sektor-ekonomi-level-2-instant-approval-non-wiraswasta').css({"border-color": "red"});
            }
            else if($('#slc-sektor-ekonomi-level-2-instant-approval-non-wiraswasta option:selected').val() != null || 
                    $('#slc-sektor-ekonomi-level-2-instant-approval-non-wiraswasta option:selected').val() != ''){
                        $('#err-slc-sektor-ekonomi-level-2-instant-approval-non-wiraswasta').html('');
                        $('#err-slc-sektor-ekonomi-level-2-instant-approval-non-wiraswasta').prop("hidden", true);
                        $('.error-slc-sektor-ekonomi-level-2-instant-approval-non-wiraswasta').css({"border-color": ""});
            }

            if($('#slc-sektor-ekonomi-level-3-instant-approval-non-wiraswasta option:selected').val() == null || 
               $('#slc-sektor-ekonomi-level-3-instant-approval-non-wiraswasta option:selected').val() == ''){
                $('#err-slc-sektor-ekonomi-level-3-instant-approval-non-wiraswasta').html('Sektor Ekonomi Level 3 Wajib Diisi');
                $('#err-slc-sektor-ekonomi-level-3-instant-approval-non-wiraswasta').prop("hidden", false);
                $('.error-slc-sektor-ekonomi-level-3-instant-approval-non-wiraswasta').css({"border-color": "red"});
            }
            else if($('#slc-sektor-ekonomi-level-3-instant-approval-non-wiraswasta option:selected').val() != null || 
                    $('#slc-sektor-ekonomi-level-3-instant-approval-non-wiraswasta option:selected').val() != ''){
                        $('#err-slc-sektor-ekonomi-level-3-instant-approval-non-wiraswasta').html('');
                        $('#err-slc-sektor-ekonomi-level-3-instant-approval-non-wiraswasta').prop("hidden", true);
                        $('.error-slc-sektor-ekonomi-level-3-instant-approval-non-wiraswasta').css({"border-color": ""});
            }

            if($('#dokumen-bukti-bekerja-instant-approval-non-wiraswasta').val() == ''){
                $('#err-dokumen-bukti-bekerja-instant-approval-non-wiraswasta').html('Dokumen Bukti Bekerja Wajib Diisi');
                $('#err-dokumen-bukti-bekerja-instant-approval-non-wiraswasta').prop("hidden", false);
                $('.error-dokumen-bukti-bekerja-instant-approval-non-wiraswasta').css({"border-color": "red"});
            }
            else if($('#dokumen-bukti-bekerja-instant-approval-non-wiraswasta').val() != ''){
                        $('#err-dokumen-bukti-bekerja-instant-approval-non-wiraswasta').html('');
                        $('#err-dokumen-bukti-bekerja-instant-approval-non-wiraswasta').prop("hidden", true);
                        $('.error-dokumen-bukti-bekerja-instant-approval-non-wiraswasta').css({"border-color": ""});
            }

            if($('#dokumen-bukti-penghasilan-instant-approval-non-wiraswasta').val() == ''){
                $('#err-dokumen-bukti-penghasilan-instant-approval-non-wiraswasta').html('Dokumen Bukti Bekerja Wajib Diisi');
                $('#err-dokumen-bukti-penghasilan-instant-approval-non-wiraswasta').prop("hidden", false);
                $('.error-dokumen-bukti-penghasilan-instant-approval-non-wiraswasta').css({"border-color": "red"});
            }
            else if($('#dokumen-bukti-penghasilan-instant-approval-non-wiraswasta').val() != ''){
                        $('#err-dokumen-bukti-penghasilan-instant-approval-non-wiraswasta').html('');
                        $('#err-dokumen-bukti-penghasilan-instant-approval-non-wiraswasta').prop("hidden", true);
                        $('.error-dokumen-bukti-penghasilan-instant-approval-non-wiraswasta').css({"border-color": ""});
            }

            if($('#inp-jarak-nasabah-ke-muf-instant-approval-non-wiraswasta').val() == ''){
                $('#err-inp-jarak-nasabah-ke-muf-instant-approval-non-wiraswasta').html('Jarak Tempat Nasabah ke MUF Wajib Diisi');
                $('#err-inp-jarak-nasabah-ke-muf-instant-approval-non-wiraswasta').prop("hidden", false);
                $('input[id=inp-jarak-nasabah-ke-muf-instant-approval-non-wiraswasta]').css({"border-color": "red"});
            }
            else if($('#inp-jarak-nasabah-ke-muf-instant-approval-non-wiraswasta').val() != ''){
                        $('#err-inp-jarak-nasabah-ke-muf-instant-approval-non-wiraswasta').html('');
                        $('#err-inp-jarak-nasabah-ke-muf-instant-approval-non-wiraswasta').prop("hidden", true);
                        $('input[id=inp-jarak-nasabah-ke-muf-instant-approval-non-wiraswasta]').css({"border-color": ""});
            }

        });

        $('#btn-save-silent-survey-non-wiraswasta').click(function () {
            var file = app.KycNonWiraswasta;
            file.uploadDocumentSilentSurvey();

            //Validasi Mandatory Silent Survey
            if($('#slc-sektor-ekonomi-level-1-silent-survey-non-wiraswasta option:selected').val() == null || 
               $('#slc-sektor-ekonomi-level-1-silent-survey-non-wiraswasta option:selected').val() == ''){
                $('#err-slc-sektor-ekonomi-level-1-silent-survey-non-wiraswasta').html('Sektor Ekonomi Level 1 Wajib Diisi');
                $('#err-slc-sektor-ekonomi-level-1-silent-survey-non-wiraswasta').prop("hidden", false);
                $('.error-slc-sektor-ekonomi-level-1-silent-survey-non-wiraswasta').css({"border-color": "red"});
            }
            else if($('#slc-sektor-ekonomi-level-1-silent-survey-non-wiraswasta option:selected').val() != null || 
                    $('#slc-sektor-ekonomi-level-1-silent-survey-non-wiraswasta option:selected').val() != ''){
                        $('#err-slc-sektor-ekonomi-level-1-silent-survey-non-wiraswasta').html('');
                        $('#err-slc-sektor-ekonomi-level-1-silent-survey-non-wiraswasta').prop("hidden", true);
                        $('.error-slc-sektor-ekonomi-level-1-silent-survey-non-wiraswasta').css({"border-color": ""});
            }

            if($('#slc-sektor-ekonomi-level-2-silent-survey-non-wiraswasta option:selected').val() == null || 
               $('#slc-sektor-ekonomi-level-2-silent-survey-non-wiraswasta option:selected').val() == ''){
                $('#err-slc-sektor-ekonomi-level-2-silent-survey-non-wiraswasta').html('Sektor Ekonomi Level 2 Wajib Diisi');
                $('#err-slc-sektor-ekonomi-level-2-silent-survey-non-wiraswasta').prop("hidden", false);
                $('.error-slc-sektor-ekonomi-level-2-silent-survey-non-wiraswasta').css({"border-color": "red"});
            }
            else if($('#slc-sektor-ekonomi-level-2-silent-survey-non-wiraswasta option:selected').val() != null || 
                    $('#slc-sektor-ekonomi-level-2-silent-survey-non-wiraswasta option:selected').val() != ''){
                        $('#err-slc-sektor-ekonomi-level-2-silent-survey-non-wiraswasta').html('');
                        $('#err-slc-sektor-ekonomi-level-2-silent-survey-non-wiraswasta').prop("hidden", true);
                        $('.error-slc-sektor-ekonomi-level-2-silent-survey-non-wiraswasta').css({"border-color": ""});
            }

            if($('#slc-sektor-ekonomi-level-3-silent-survey-non-wiraswasta option:selected').val() == null || 
               $('#slc-sektor-ekonomi-level-3-silent-survey-non-wiraswasta option:selected').val() == ''){
                $('#err-slc-sektor-ekonomi-level-3-silent-survey-non-wiraswasta').html('Sektor Ekonomi Level 3 Wajib Diisi');
                $('#err-slc-sektor-ekonomi-level-3-silent-survey-non-wiraswasta').prop("hidden", false);
                $('.error-slc-sektor-ekonomi-level-3-silent-survey-non-wiraswasta').css({"border-color": "red"});
            }
            else if($('#slc-sektor-ekonomi-level-3-silent-survey-non-wiraswasta option:selected').val() != null || 
                    $('#slc-sektor-ekonomi-level-3-silent-survey-non-wiraswasta option:selected').val() != ''){
                        $('#err-slc-sektor-ekonomi-level-3-silent-survey-non-wiraswasta').html('');
                        $('#err-slc-sektor-ekonomi-level-3-silent-survey-non-wiraswasta').prop("hidden", true);
                        $('.error-slc-sektor-ekonomi-level-3-silent-survey-non-wiraswasta').css({"border-color": ""});
            }

            if($('#dokumen-bukti-bekerja-silent-survey-non-wiraswasta').val() == ''){
                $('#err-dokumen-bukti-bekerja-silent-survey-non-wiraswasta').html('Dokumen Bukti Bekerja Wajib Diisi');
                $('#err-dokumen-bukti-bekerja-silent-survey-non-wiraswasta').prop("hidden", false);
                $('.error-dokumen-bukti-bekerja-silent-survey-non-wiraswasta').css({"border-color": "red"});
            }
            else if($('#dokumen-bukti-bekerja-silent-survey-non-wiraswasta').val() != ''){
                        $('#err-dokumen-bukti-bekerja-silent-survey-non-wiraswasta').html('');
                        $('#err-dokumen-bukti-bekerja-silent-survey-non-wiraswasta').prop("hidden", true);
                        $('.error-dokumen-bukti-bekerja-silent-survey-non-wiraswasta').css({"border-color": ""});
            }

            if($('#dokumen-bukti-penghasilan-silent-survey-non-wiraswasta').val() == ''){
                $('#err-dokumen-bukti-penghasilan-silent-survey-non-wiraswasta').html('Dokumen Bukti Bekerja Wajib Diisi');
                $('#err-dokumen-bukti-penghasilan-silent-survey-non-wiraswasta').prop("hidden", false);
                $('.error-dokumen-bukti-penghasilan-silent-survey-non-wiraswasta').css({"border-color": "red"});
            }
            else if($('#dokumen-bukti-penghasilan-silent-survey-non-wiraswasta').val() != ''){
                        $('#err-dokumen-bukti-penghasilan-silent-survey-non-wiraswasta').html('');
                        $('#err-dokumen-bukti-penghasilan-silent-survey-non-wiraswasta').prop("hidden", true);
                        $('.error-dokumen-bukti-penghasilan-silent-survey-non-wiraswasta').css({"border-color": ""});
            }

            if($('#inp-jarak-nasabah-ke-muf-silent-survey-non-wiraswasta').val() == ''){
                $('#err-inp-jarak-nasabah-ke-muf-silent-survey-non-wiraswasta').html('Jarak Tempat Nasabah ke MUF Wajib Diisi');
                $('#err-inp-jarak-nasabah-ke-muf-silent-survey-non-wiraswasta').prop("hidden", false);
                $('input[id=inp-jarak-nasabah-ke-muf-silent-survey-non-wiraswasta]').css({"border-color": "red"});
            }
            else if($('#inp-jarak-nasabah-ke-muf-silent-survey-non-wiraswasta').val() != ''){
                        $('#err-inp-jarak-nasabah-ke-muf-silent-survey-non-wiraswasta').html('');
                        $('#err-inp-jarak-nasabah-ke-muf-silent-survey-non-wiraswasta').prop("hidden", true);
                        $('input[id=inp-jarak-nasabah-ke-muf-silent-survey-non-wiraswasta]').css({"border-color": ""});
            }

        });

        $('#btn-save-tele-survey-non-wiraswasta').click(function () {
            var file = app.KycNonWiraswasta;
            file.uploadDocumentTeleSurvey();

            //Validasi Mandatory Tele Survey
            if($('#slc-sektor-ekonomi-level-1-tele-survey-non-wiraswasta option:selected').val() == null || 
               $('#slc-sektor-ekonomi-level-1-tele-survey-non-wiraswasta option:selected').val() == ''){
                $('#err-slc-sektor-ekonomi-level-1-tele-survey-non-wiraswasta').html('Sektor Ekonomi Level 1 Wajib Diisi');
                $('#err-slc-sektor-ekonomi-level-1-tele-survey-non-wiraswasta').prop("hidden", false);
                $('.error-slc-sektor-ekonomi-level-1-tele-survey-non-wiraswasta').css({"border-color": "red"});
            }
            else if($('#slc-sektor-ekonomi-level-1-tele-survey-non-wiraswasta option:selected').val() != null || 
                    $('#slc-sektor-ekonomi-level-1-tele-survey-non-wiraswasta option:selected').val() != ''){
                        $('#err-slc-sektor-ekonomi-level-1-tele-survey-non-wiraswasta').html('');
                        $('#err-slc-sektor-ekonomi-level-1-tele-survey-non-wiraswasta').prop("hidden", true);
                        $('.error-slc-sektor-ekonomi-level-1-tele-survey-non-wiraswasta').css({"border-color": ""});
            }

            if($('#slc-sektor-ekonomi-level-2-tele-survey-non-wiraswasta option:selected').val() == null || 
               $('#slc-sektor-ekonomi-level-2-tele-survey-non-wiraswasta option:selected').val() == ''){
                $('#err-slc-sektor-ekonomi-level-2-tele-survey-non-wiraswasta').html('Sektor Ekonomi Level 2 Wajib Diisi');
                $('#err-slc-sektor-ekonomi-level-2-tele-survey-non-wiraswasta').prop("hidden", false);
                $('.error-slc-sektor-ekonomi-level-2-tele-survey-non-wiraswasta').css({"border-color": "red"});
            }
            else if($('#slc-sektor-ekonomi-level-2-tele-survey-non-wiraswasta option:selected').val() != null || 
                    $('#slc-sektor-ekonomi-level-2-tele-survey-non-wiraswasta option:selected').val() != ''){
                        $('#err-slc-sektor-ekonomi-level-2-tele-survey-non-wiraswasta').html('');
                        $('#err-slc-sektor-ekonomi-level-2-tele-survey-non-wiraswasta').prop("hidden", true);
                        $('.error-slc-sektor-ekonomi-level-2-tele-survey-non-wiraswasta').css({"border-color": ""});
            }

            if($('#slc-sektor-ekonomi-level-3-tele-survey-non-wiraswasta option:selected').val() == null || 
               $('#slc-sektor-ekonomi-level-3-tele-survey-non-wiraswasta option:selected').val() == ''){
                $('#err-slc-sektor-ekonomi-level-3-tele-survey-non-wiraswasta').html('Sektor Ekonomi Level 3 Wajib Diisi');
                $('#err-slc-sektor-ekonomi-level-3-tele-survey-non-wiraswasta').prop("hidden", false);
                $('.error-slc-sektor-ekonomi-level-3-tele-survey-non-wiraswasta').css({"border-color": "red"});
            }
            else if($('#slc-sektor-ekonomi-level-3-tele-survey-non-wiraswasta option:selected').val() != null || 
                    $('#slc-sektor-ekonomi-level-3-tele-survey-non-wiraswasta option:selected').val() != ''){
                        $('#err-slc-sektor-ekonomi-level-3-tele-survey-non-wiraswasta').html('');
                        $('#err-slc-sektor-ekonomi-level-3-tele-survey-non-wiraswasta').prop("hidden", true);
                        $('.error-slc-sektor-ekonomi-level-3-tele-survey-non-wiraswasta').css({"border-color": ""});
            }

            if($('#dokumen-bukti-bekerja-tele-survey-non-wiraswasta').val() == ''){
                $('#err-dokumen-bukti-bekerja-tele-survey-non-wiraswasta').html('Dokumen Bukti Bekerja Wajib Diisi');
                $('#err-dokumen-bukti-bekerja-tele-survey-non-wiraswasta').prop("hidden", false);
                $('.error-dokumen-bukti-bekerja-tele-survey-non-wiraswasta').css({"border-color": "red"});
            }
            else if($('#dokumen-bukti-bekerja-tele-survey-non-wiraswasta').val() != ''){
                        $('#err-dokumen-bukti-bekerja-tele-survey-non-wiraswasta').html('');
                        $('#err-dokumen-bukti-bekerja-tele-survey-non-wiraswasta').prop("hidden", true);
                        $('.error-dokumen-bukti-bekerja-tele-survey-non-wiraswasta').css({"border-color": ""});
            }

            if($('#dokumen-bukti-penghasilan-tele-survey-non-wiraswasta').val() == ''){
                $('#err-dokumen-bukti-penghasilan-tele-survey-non-wiraswasta').html('Dokumen Bukti Bekerja Wajib Diisi');
                $('#err-dokumen-bukti-penghasilan-tele-survey-non-wiraswasta').prop("hidden", false);
                $('.error-dokumen-bukti-penghasilan-tele-survey-non-wiraswasta').css({"border-color": "red"});
            }
            else if($('#dokumen-bukti-penghasilan-tele-survey-non-wiraswasta').val() != ''){
                        $('#err-dokumen-bukti-penghasilan-tele-survey-non-wiraswasta').html('');
                        $('#err-dokumen-bukti-penghasilan-tele-survey-non-wiraswasta').prop("hidden", true);
                        $('.error-dokumen-bukti-penghasilan-tele-survey-non-wiraswasta').css({"border-color": ""});
            }

            if($('#inp-jarak-nasabah-ke-muf-tele-survey-non-wiraswasta').val() == ''){
                $('#err-inp-jarak-nasabah-ke-muf-tele-survey-non-wiraswasta').html('Jarak Tempat Nasabah ke MUF Wajib Diisi');
                $('#err-inp-jarak-nasabah-ke-muf-tele-survey-non-wiraswasta').prop("hidden", false);
                $('input[id=inp-jarak-nasabah-ke-muf-tele-survey-non-wiraswasta]').css({"border-color": "red"});
            }
            else if($('#inp-jarak-nasabah-ke-muf-tele-survey-non-wiraswasta').val() != ''){
                        $('#err-inp-jarak-nasabah-ke-muf-tele-survey-non-wiraswasta').html('');
                        $('#err-inp-jarak-nasabah-ke-muf-tele-survey-non-wiraswasta').prop("hidden", true);
                        $('input[id=inp-jarak-nasabah-ke-muf-tele-survey-non-wiraswasta]').css({"border-color": ""});
            }
            
        });

    },
	
	getEconomicSectorLevel1InstantApproval: function () {
        var file = app.KycNonWiraswasta;
        $("#slc-sektor-ekonomi-level-1-instant-approval-non-wiraswasta").select2({
            theme: 'bootstrap4',
            placeholder: "PILIH SEKTOR EKONOMI (LEVEL 1)",
            allowClear: true,
            minimumInputLength: 4,
            containerCssClass: "error-slc-sektor-ekonomi-level-1-instant-approval-non-wiraswasta",
            language: {
                inputTooShort: function () {
                    return file.message_hint
                },
            },
            ajax: {
                dataType: 'json',
                cache: true,
                url: app.base_url + file.api + "getEconomicSectorLevel1",
                type: "POST",
                data: function (params) {
                    var query = {
                        value: params.term
                    }
                    return query;
                },
                processResults: function (response) {
                    var json = $.parseJSON(response);
                    var data = json.data.map(function (obj) {
                        return {
                            id: obj.eco_sector_code,
                            text: obj.eco_sector_desc
                        }
                    });
                    return {
                        results: data,
                    };
                }
            }

        })
    },

	getEconomicSectorLevel2InstantApproval: function () {
        var file = app.KycNonWiraswasta;
        var param_1 = $('#slc-sektor-ekonomi-level-1-instant-approval-non-wiraswasta').val();

        if (param_1 == null || param_1 == '') {
            param_1 = '';
        }

        $("#slc-sektor-ekonomi-level-2-instant-approval-non-wiraswasta").select2({
            theme: 'bootstrap4',
            placeholder: "PILIH SEKTOR EKONOMI (LEVEL 2)",
            allowClear: true,
            minimumInputLength: 4,
            containerCssClass: "error-slc-sektor-ekonomi-level-2-instant-approval-non-wiraswasta",
            language: {
                inputTooShort: function () {
                    return file.message_hint
                },
            },
            ajax: {
                dataType: 'json',
                cache: true,
                url: app.base_url + file.api + "getEconomicSectorLevel2",
                type: "POST",
                data: function (params) {
                    var query = {
                        param_1: param_1,
                        value: params.term
                    }
                    return query;
                },
                processResults: function (response) {

                    var json = $.parseJSON(response);
                    var data = json.data.map(function (obj) {
                        return {
                            id: obj.eco_sector_code,
                            text: obj.eco_sector_desc
                        }
                    });
                    return {
                        results: data,
                    };
                }
            }

        })
    },

    getEconomicSectorLevel3InstantApproval: function () {
        var file = app.KycNonWiraswasta;
        var param_1 = $('#slc-sektor-ekonomi-level-1-instant-approval-non-wiraswasta').val();
        var param_2 = $('#slc-sektor-ekonomi-level-2-instant-approval-non-wiraswasta').val();

        if (param_1 == null || param_1 == '') {
            param_1 = '';
        }

        if (param_2 == null || param_2 == '') {
            param_2 = '';
        }

        if (param_1 != '' || param_1 != null && param_2 != '' || param_2 != null){
            $("#slc-sektor-ekonomi-level-3-instant-approval-non-wiraswasta").select2({
                theme: 'bootstrap4',
                placeholder: "PILIH SEKTOR EKONOMI (LEVEL 3)",
                allowClear: true,
                minimumInputLength: 4,
                containerCssClass: "error-slc-sektor-ekonomi-level-3-instant-approval-non-wiraswasta",
                language: {
                    inputTooShort: function () {
                        return file.message_hint
                    },
                },
                ajax: {
                    dataType: 'json',
                    cache: true,
                    url: app.base_url + file.api + "getEconomicSectorLevel3",
                    type: "POST",
                    data: function (params) {
                        var query = {
                            param_1: param_1,
                            param_2: param_2,
                            value: params.term
                        }
                        return query;
                    },
                    processResults: function (response) {

                        var json = $.parseJSON(response);
                        var data = json.data.map(function (obj) {
                            return {
                                id: obj.eco_sector_code,
                                text: obj.eco_sector_desc
                            }
                        });
                        return {
                            results: data,
                        };
                    }
                }

            })
        }

        if (param_1 == '' || param_1 == null && param_2 == '' || param_2 == null){
            $("#slc-sektor-ekonomi-level-3-instant-approval-non-wiraswasta").select2({
                theme: 'bootstrap4',
                placeholder: "PILIH SEKTOR EKONOMI (LEVEL 3)",
                allowClear: true,
                minimumInputLength: 4,
                containerCssClass: "error-slc-sektor-ekonomi-level-3-instant-approval-non-wiraswasta",
                language: {
                    inputTooShort: function () {
                        return file.message_hint
                    },
                },
                ajax: {
                    dataType: 'json',
                    cache: true,
                    url: app.base_url + file.api + "getEconomicSectorFromLevel3",
                    type: "POST",
                    data: function (params) {
                        var query = {
                            value: params.term
                        }
                        return query;
                    },
                    processResults: function (response) {
    
                        var json = $.parseJSON(response);
                        var data = json.data.map(function (obj) {
                            return {
                                id: obj.eco_sector_code_level_3,
                                text: obj.eco_sector_desc_level_3,
                            }
                        });
                        return {
                            results: data,
                        };
                        
                    }
                }
            });
        }

    },

    getEconomicSectorFromLevel3ToLevel2andLevel1InstantApproval: function () {
        var file = app.KycNonWiraswasta;
        var param = $('#slc-sektor-ekonomi-level-3-instant-approval-non-wiraswasta').select2('data')[0]['text'];
        if(param != '' && param != ''){
            $.ajax({
                url: app.base_url + file.api + "getEconomicSectorFromLevel3",
                type: 'POST',
                data: {
                    value: param
                },
                dataType: 'json',
                cache: true,
                success: function (response) {
                    var json = $.parseJSON(response);
                        var data = json.data.map(function (obj) {
                            return {
                                id_1: obj.eco_sector_code_level_1,
                                text_1: obj.eco_sector_desc_level_1,
                                id_2: obj.eco_sector_code_level_2,
                                text_2: obj.eco_sector_desc_level_2,
                            }
                        });
                        $("#slc-sektor-ekonomi-level-1-instant-approval-non-wiraswasta").append("<option value='"+data[0].id_1+"' selected>"+data[0].text_1+"</option>");
                        $("#slc-sektor-ekonomi-level-1-instant-approval-non-wiraswasta").val(data[0].id_1);
                        $("#slc-sektor-ekonomi-level-2-instant-approval-non-wiraswasta").append("<option value='"+data[0].id_2+"' selected>"+data[0].text_2+"</option>");
                        $("#slc-sektor-ekonomi-level-2-instant-approval-non-wiraswasta").val(data[0].id_2);
                }
            });
        }
    },

	getEconomicSectorLevel1TeleSurvey: function () {
        var file = app.KycNonWiraswasta;
        $("#slc-sektor-ekonomi-level-1-tele-survey-non-wiraswasta").select2({
            theme: 'bootstrap4',
            placeholder: "PILIH SEKTOR EKONOMI (LEVEL 1)",
            allowClear: true,
            minimumInputLength: 4,
            containerCssClass: "error-slc-sektor-ekonomi-level-1-tele-survey-non-wiraswasta",
            language: {
                inputTooShort: function () {
                    return file.message_hint
                },
            },
            ajax: {
                dataType: 'json',
                cache: true,
                url: app.base_url + file.api + "getEconomicSectorLevel1",
                type: "POST",
                data: function (params) {
                    var query = {
                        value: params.term
                    }
                    return query;
                },
                processResults: function (response) {
                    var json = $.parseJSON(response);
                    var data = json.data.map(function (obj) {
                        return {
                            id: obj.eco_sector_code,
                            text: obj.eco_sector_desc
                        }
                    });
                    return {
                        results: data,
                    };
                }
            }

        })
    },

	getEconomicSectorLevel2TeleSurvey: function () {
        var file = app.KycNonWiraswasta;
        var param_1 = $('#slc-sektor-ekonomi-level-1-tele-survey-non-wiraswasta').val();

        if (param_1 == null || param_1 == '') {
            param_1 = '';
        }

        $("#slc-sektor-ekonomi-level-2-tele-survey-non-wiraswasta").select2({
            theme: 'bootstrap4',
            placeholder: "PILIH SEKTOR EKONOMI (LEVEL 2)",
            allowClear: true,
            minimumInputLength: 4,
            containerCssClass: "error-slc-sektor-ekonomi-level-2-tele-survey-non-wiraswasta",
            language: {
                inputTooShort: function () {
                    return file.message_hint
                },
            },
            ajax: {
                dataType: 'json',
                cache: true,
                url: app.base_url + file.api + "getEconomicSectorLevel2",
                type: "POST",
                data: function (params) {
                    var query = {
                        param_1: param_1,
                        value: params.term
                    }
                    return query;
                },
                processResults: function (response) {

                    var json = $.parseJSON(response);
                    var data = json.data.map(function (obj) {
                        return {
                            id: obj.eco_sector_code,
                            text: obj.eco_sector_desc
                        }
                    });
                    return {
                        results: data,
                    };
                }
            }

        })
    },

    getEconomicSectorLevel3TeleSurvey: function () {
        var file = app.KycNonWiraswasta;
        var param_1 = $('#slc-sektor-ekonomi-level-1-tele-survey-non-wiraswasta').val();
        var param_2 = $('#slc-sektor-ekonomi-level-2-tele-survey-non-wiraswasta').val();

        if (param_1 == null || param_1 == '') {
            param_1 = '';
        }

        if (param_2 == null || param_2 == '') {
            param_2 = '';
        }

        if (param_1 != '' || param_1 != null && param_2 != '' || param_2 != null){

            $("#slc-sektor-ekonomi-level-3-tele-survey-non-wiraswasta").select2({
                theme: 'bootstrap4',
                placeholder: "PILIH SEKTOR EKONOMI (LEVEL 3)",
                allowClear: true,
                minimumInputLength: 4,
                containerCssClass: "error-slc-sektor-ekonomi-level-3-tele-survey-non-wiraswasta",
                language: {
                    inputTooShort: function () {
                        return file.message_hint
                    },
                },
                ajax: {
                    dataType: 'json',
                    cache: true,
                    url: app.base_url + file.api + "getEconomicSectorLevel3",
                    type: "POST",
                    data: function (params) {
                        var query = {
                            param_1: param_1,
                            param_2: param_2,
                            value: params.term
                        }
                        return query;
                    },
                    processResults: function (response) {

                        var json = $.parseJSON(response);
                        var data = json.data.map(function (obj) {
                            return {
                                id: obj.eco_sector_code,
                                text: obj.eco_sector_desc
                            }
                        });
                        return {
                            results: data,
                        };
                    }
                }

            })

        }

        if (param_1 == '' || param_1 == null && param_2 == '' || param_2 == null){
            $("#slc-sektor-ekonomi-level-3-tele-survey-non-wiraswasta").select2({
                theme: 'bootstrap4',
                placeholder: "PILIH SEKTOR EKONOMI (LEVEL 3)",
                allowClear: true,
                minimumInputLength: 4,
                containerCssClass: "error-slc-sektor-ekonomi-level-3-tele-survey-non-wiraswasta",
                language: {
                    inputTooShort: function () {
                        return file.message_hint
                    },
                },
                ajax: {
                    dataType: 'json',
                    cache: true,
                    url: app.base_url + file.api + "getEconomicSectorFromLevel3",
                    type: "POST",
                    data: function (params) {
                        var query = {
                            value: params.term
                        }
                        return query;
                    },
                    processResults: function (response) {
    
                        var json = $.parseJSON(response);
                        var data = json.data.map(function (obj) {
                            return {
                                id: obj.eco_sector_code_level_3,
                                text: obj.eco_sector_desc_level_3,
                            }
                        });
                        return {
                            results: data,
                        };
                        
                    }
                }
            });
        }

    },

    getEconomicSectorFromLevel3ToLevel2andLevel1TeleSurvey: function () {
        var file = app.KycNonWiraswasta;
        var param = $('#slc-sektor-ekonomi-level-3-tele-survey-non-wiraswasta').select2('data')[0]['text'];
        if(param != '' && param != ''){
            $.ajax({
                url: app.base_url + file.api + "getEconomicSectorFromLevel3",
                type: 'POST',
                data: {
                    value: param
                },
                dataType: 'json',
                cache: true,
                success: function (response) {
                    var json = $.parseJSON(response);
                        var data = json.data.map(function (obj) {
                            return {
                                id_1: obj.eco_sector_code_level_1,
                                text_1: obj.eco_sector_desc_level_1,
                                id_2: obj.eco_sector_code_level_2,
                                text_2: obj.eco_sector_desc_level_2,
                            }
                        });
                        $("#slc-sektor-ekonomi-level-1-tele-survey-non-wiraswasta").append("<option value='"+data[0].id_1+"' selected>"+data[0].text_1+"</option>");
                        $("#slc-sektor-ekonomi-level-1-tele-survey-non-wiraswasta").val(data[0].id_1);
                        $("#slc-sektor-ekonomi-level-2-tele-survey-non-wiraswasta").append("<option value='"+data[0].id_2+"' selected>"+data[0].text_2+"</option>");
                        $("#slc-sektor-ekonomi-level-2-tele-survey-non-wiraswasta").val(data[0].id_2);
                }
            });
        }
    },

    getEconomicSectorLevel1SilentSurvey: function () {
        var file = app.KycNonWiraswasta;
        $("#slc-sektor-ekonomi-level-1-silent-survey-non-wiraswasta").select2({
            theme: 'bootstrap4',
            placeholder: "PILIH SEKTOR EKONOMI (LEVEL 1)",
            allowClear: true,
            minimumInputLength: 4,
            containerCssClass: "error-slc-sektor-ekonomi-level-1-silent-survey-non-wiraswasta",
            language: {
                inputTooShort: function () {
                    return file.message_hint
                },
            },
            ajax: {
                dataType: 'json',
                cache: true,
                url: app.base_url + file.api + "getEconomicSectorLevel1",
                type: "POST",
                data: function (params) {
                    var query = {
                        value: params.term
                    }
                    return query;
                },
                processResults: function (response) {
                    var json = $.parseJSON(response);
                    var data = json.data.map(function (obj) {
                        return {
                            id: obj.eco_sector_code,
                            text: obj.eco_sector_desc
                        }
                    });
                    return {
                        results: data,
                    };
                }
            }

        })
    },

	getEconomicSectorLevel2SilentSurvey: function () {
        var file = app.KycNonWiraswasta;
        var param_1 = $('#slc-sektor-ekonomi-level-1-silent-survey-non-wiraswasta').val();

        if (param_1 == null || param_1 == '') {
            param_1 = '';
        }

        $("#slc-sektor-ekonomi-level-2-silent-survey-non-wiraswasta").select2({
            theme: 'bootstrap4',
            placeholder: "PILIH SEKTOR EKONOMI (LEVEL 2)",
            allowClear: true,
            minimumInputLength: 4,
            containerCssClass: "error-slc-sektor-ekonomi-level-2-silent-survey-non-wiraswasta",
            language: {
                inputTooShort: function () {
                    return file.message_hint
                },
            },
            ajax: {
                dataType: 'json',
                cache: true,
                url: app.base_url + file.api + "getEconomicSectorLevel2",
                type: "POST",
                data: function (params) {
                    var query = {
                        param_1: param_1,
                        value: params.term
                    }
                    return query;
                },
                processResults: function (response) {

                    var json = $.parseJSON(response);
                    var data = json.data.map(function (obj) {
                        return {
                            id: obj.eco_sector_code,
                            text: obj.eco_sector_desc
                        }
                    });
                    return {
                        results: data,
                    };
                }
            }

        })
    },

    getEconomicSectorLevel3SilentSurvey: function () {
        var file = app.KycNonWiraswasta;
        var param_1 = $('#slc-sektor-ekonomi-level-1-silent-survey-non-wiraswasta').val();
        var param_2 = $('#slc-sektor-ekonomi-level-2-silent-survey-non-wiraswasta').val();

        if (param_1 == null || param_1 == '') {
            param_1 = '';
        }

        if (param_2 == null || param_2 == '') {
            param_2 = '';
        }

        if (param_1 != '' || param_1 != null && param_2 != '' || param_2 != null){
            $("#slc-sektor-ekonomi-level-3-silent-survey-non-wiraswasta").select2({
                theme: 'bootstrap4',
                placeholder: "PILIH SEKTOR EKONOMI (LEVEL 3)",
                allowClear: true,
                minimumInputLength: 4,
                containerCssClass: "error-slc-sektor-ekonomi-level-3-silent-survey-non-wiraswasta",
                language: {
                    inputTooShort: function () {
                        return file.message_hint
                    },
                },
                ajax: {
                    dataType: 'json',
                    cache: true,
                    url: app.base_url + file.api + "getEconomicSectorLevel3",
                    type: "POST",
                    data: function (params) {
                        var query = {
                            param_1: param_1,
                            param_2: param_2,
                            value: params.term
                        }
                        return query;
                    },
                    processResults: function (response) {

                        var json = $.parseJSON(response);
                        var data = json.data.map(function (obj) {
                            return {
                                id: obj.eco_sector_code,
                                text: obj.eco_sector_desc
                            }
                        });
                        return {
                            results: data,
                        };
                    }
                }

            })
        }

        if (param_1 == '' || param_1 == null && param_2 == '' || param_2 == null){
            $("#slc-sektor-ekonomi-level-3-silent-survey-non-wiraswasta").select2({
                theme: 'bootstrap4',
                placeholder: "PILIH SEKTOR EKONOMI (LEVEL 3)",
                allowClear: true,
                minimumInputLength: 4,
                containerCssClass: "error-slc-sektor-ekonomi-level-3-silent-survey-non-wiraswasta",
                language: {
                    inputTooShort: function () {
                        return file.message_hint
                    },
                },
                ajax: {
                    dataType: 'json',
                    cache: true,
                    url: app.base_url + file.api + "getEconomicSectorFromLevel3",
                    type: "POST",
                    data: function (params) {
                        var query = {
                            value: params.term
                        }
                        return query;
                    },
                    processResults: function (response) {
    
                        var json = $.parseJSON(response);
                        var data = json.data.map(function (obj) {
                            return {
                                id: obj.eco_sector_code_level_3,
                                text: obj.eco_sector_desc_level_3,
                            }
                        });
                        return {
                            results: data,
                        };
                        
                    }
                }
            });
        }

    },

    getEconomicSectorFromLevel3ToLevel2andLevel1SilentSurvey: function () {
        var file = app.KycNonWiraswasta;
        var param = $('#slc-sektor-ekonomi-level-3-silent-survey-non-wiraswasta').select2('data')[0]['text'];
        if(param != '' && param != ''){
            $.ajax({
                url: app.base_url + file.api + "getEconomicSectorFromLevel3",
                type: 'POST',
                data: {
                    value: param
                },
                dataType: 'json',
                cache: true,
                success: function (response) {
                    var json = $.parseJSON(response);
                        var data = json.data.map(function (obj) {
                            return {
                                id_1: obj.eco_sector_code_level_1,
                                text_1: obj.eco_sector_desc_level_1,
                                id_2: obj.eco_sector_code_level_2,
                                text_2: obj.eco_sector_desc_level_2,
                            }
                        });
                        $("#slc-sektor-ekonomi-level-1-silent-survey-non-wiraswasta").append("<option value='"+data[0].id_1+"' selected>"+data[0].text_1+"</option>");
                        $("#slc-sektor-ekonomi-level-1-silent-survey-non-wiraswasta").val(data[0].id_1);
                        $("#slc-sektor-ekonomi-level-2-silent-survey-non-wiraswasta").append("<option value='"+data[0].id_2+"' selected>"+data[0].text_2+"</option>");
                        $("#slc-sektor-ekonomi-level-2-silent-survey-non-wiraswasta").val(data[0].id_2);
                }
            });
        }
    },

    uploadDocumentInstantApproval: function () {
        if($('#dokumen-bukti-bekerja-instant-approval-non-wiraswasta').val() != undefined){
            var BuktiBekerjaInstantApproval1 = $('#dokumen-bukti-bekerja-instant-approval-non-wiraswasta')[0].files[0];
        }
        
        if($('#dokumen-bukti-bekerja-instant-approval-non-wiraswasta-2').val() != undefined){
            var BuktiBekerjaInstantApproval2 = $('#dokumen-bukti-bekerja-instant-approval-non-wiraswasta-2')[0].files[0];
        }

        if($('#dokumen-bukti-penghasilan-instant-approval-non-wiraswasta').val() != undefined){
            var BuktiPenghasilanInstantApproval1 = $('#dokumen-bukti-penghasilan-instant-approval-non-wiraswasta')[0].files[0];
        }

        if($('#dokumen-bukti-penghasilan-instant-approval-non-wiraswasta-2').val() != undefined){
            var BuktiPenghasilanInstantApproval2 = $('#dokumen-bukti-penghasilan-instant-approval-non-wiraswasta-2')[0].files[0];
        }
		
        if($('#dokumen-bukti-penghasilan-instant-approval-non-wiraswasta-3').val() != undefined){
            var BuktiPenghasilanInstantApproval3 = $('#dokumen-bukti-penghasilan-instant-approval-non-wiraswasta-3')[0].files[0];
        }

        if($('#dokumen-bukti-penghasilan-instant-approval-non-wiraswasta-4').val() != undefined){
            var BuktiPenghasilanInstantApproval4 = $('#dokumen-bukti-penghasilan-instant-approval-non-wiraswasta-4')[0].files[0];
        }

        if($('#dokumen-bukti-penghasilan-instant-approval-non-wiraswasta-5').val() != undefined){
            var BuktiPenghasilanInstantApproval5 = $('#dokumen-bukti-penghasilan-instant-approval-non-wiraswasta-5')[0].files[0];
        }

        if($('#dokumen-bukti-penghasilan-instant-approval-non-wiraswasta-6').val() != undefined){
            var BuktiPenghasilanInstantApproval6 = $('#dokumen-bukti-penghasilan-instant-approval-non-wiraswasta-6')[0].files[0];
        }

        for(var x=0; x < 8; x++){
                    
            if(x == 0){
                if(BuktiBekerjaInstantApproval1 != undefined){
                    var fileUploadDocument = BuktiBekerjaInstantApproval1;
                    if(fileUploadDocument.size > 5120000){
                        alert_error("Ukuran file terlalu besar. Maksimal 5 MB");
                    }
                    
                    else if(fileUploadDocument != undefined && fileUploadDocument.size <= 5120000){
                        var arrType = [];
                        arrType = fileUploadDocument.type.split("/");
                    
                        if (arrType[1] != "jpg" && arrType[1] != "jpeg" && arrType[1] != "png" && arrType[1] == "pdf") {
                            alert_error("Format foto tidak sesuai!");
                        }
                    
                        else if(arrType[1] == "pdf"){
                            var fileToLoad = fileUploadDocument;
                            var fileReader = new FileReader();
                            var base64;
                            fileReader.onload = function(fileLoadedEvent) {
                                base64 = fileLoadedEvent.target.result;
                                console.log("BASE PDF BB 1",base64);
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            $("#base64-bukti-bekerja-instant-approval-non-wiraswasta-1").val(base64);
                        }
                    
                        else {
                            var reader = new FileReader();
                            reader.onload = function (event) {
                                var image = new Image();
                                image.onload = function () {
                                    var canvas = document.createElement('canvas');
                                    var context = canvas.getContext("2d");
                                    canvas.width = image.width / 4;
                                    canvas.height = image.height / 4;
                                    context.drawImage(image,
                                        0,
                                        0,
                                        image.width,
                                        image.height,
                                        0,
                                        0,
                                        canvas.width,
                                        canvas.height
                                        );
                                        // console.log("COMPRESS -> " + canvas.toDataURL());
                                    base64String = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64Stringsep = base64String;
                                    localStorage.setItem("base64UploadDocument", base64String);
                                    console.log("BASE JPG BB 1",base64String);
                                    // $("#btn-choose-file-upload-document").attr("src", base64String);
                                    $("#base64-bukti-bekerja-instant-approval-non-wiraswasta-1").val(base64String);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                            // $("#buttonUpload").val("1");
                            alert_info("Berhasil Disimpan!");
                        } 
                    }
                }
            }
            else if(x == 1){
                if(BuktiBekerjaInstantApproval2 != undefined){
                    var fileUploadDocument = BuktiBekerjaInstantApproval2;
                    if(fileUploadDocument.size > 5120000){
                        alert_error("Ukuran file terlalu besar. Maksimal 5 MB");
                    }
                    
                    else if(fileUploadDocument != undefined && fileUploadDocument.size <= 5120000){
                        var arrType = [];
                        arrType = fileUploadDocument.type.split("/");
                    
                        if (arrType[1] != "jpg" && arrType[1] != "jpeg" && arrType[1] != "png" && arrType[1] == "pdf") {
                            alert_error("Format foto tidak sesuai!");
                        }
                    
                        else if(arrType[1] == "pdf"){
                            var fileToLoad = fileUploadDocument;
                            var fileReader = new FileReader();
                            var base64;
                            fileReader.onload = function(fileLoadedEvent) {
                                base64 = fileLoadedEvent.target.result;
                                console.log("BASE PDF BB 2",base64);
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            $("#base64-bukti-bekerja-instant-approval-non-wiraswasta-2").val(base64);
                        }
                    
                        else {
                            var reader = new FileReader();
                            reader.onload = function (event) {
                                var image = new Image();
                                image.onload = function () {
                                    var canvas = document.createElement('canvas');
                                    var context = canvas.getContext("2d");
                                    canvas.width = image.width / 4;
                                    canvas.height = image.height / 4;
                                    context.drawImage(image,
                                        0,
                                        0,
                                        image.width,
                                        image.height,
                                        0,
                                        0,
                                        canvas.width,
                                        canvas.height
                                        );
                                        // console.log("COMPRESS -> " + canvas.toDataURL());
                                    base64String = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64Stringsep = base64String;
                                    localStorage.setItem("base64UploadDocument", base64String);
                                    console.log("BASE JPG BB 2",base64String);
                                    // $("#btn-choose-file-upload-document").attr("src", base64String);
                                    $("#base64-bukti-bekerja-instant-approval-non-wiraswasta-2").val(base64String);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                            // $("#buttonUpload").val("1");
                            alert_info("Berhasil Disimpan!");
                        } 
                    }
                }
            }
            else if(x == 2){
                if(BuktiPenghasilanInstantApproval1 != undefined){
                    //Bukti penghasilan Instant Approval 1
                    var fileUploadDocument = BuktiPenghasilanInstantApproval1;
                    if(fileUploadDocument.size > 5120000){
                        alert_error("Ukuran file terlalu besar. Maksimal 5 MB");
                    }
        
                    else if(fileUploadDocument != undefined && fileUploadDocument.size <= 5120000){
                        var arrType = [];
                        arrType = fileUploadDocument.type.split("/");
        
                        if (arrType[1] != "jpg" && arrType[1] != "jpeg" && arrType[1] != "png" && arrType[1] == "pdf") {
                            alert_error("Format foto tidak sesuai!");
                        }
        
                        else if(arrType[1] == "pdf"){
                            var fileToLoad = fileUploadDocument;
                            var fileReader = new FileReader();
                            var base64;
                            fileReader.onload = function(fileLoadedEvent) {
                                base64 = fileLoadedEvent.target.result;
                                console.log("BASE PDF BP 1", base64);
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            $("#base64-bukti-penghasilan-instant-approval-non-wiraswasta-1").val(base64);
                        }
        
                        else {
                            var reader = new FileReader();
                            reader.onload = function (event) {
                                var image = new Image();
                                image.onload = function () {
                                    var canvas = document.createElement('canvas');
                                    var context = canvas.getContext("2d");
                                    canvas.width = image.width / 4;
                                    canvas.height = image.height / 4;
                                    context.drawImage(image,
                                        0,
                                        0,
                                        image.width,
                                        image.height,
                                        0,
                                        0,
                                        canvas.width,
                                        canvas.height
                                    );
                                    // console.log("COMPRESS -> " + canvas.toDataURL());
                                    base64String = canvas.toDataURL().replace("data:", "")
                                        .replace(/^.+,/, "");
                                    imageBase64Stringsep = base64String;
                                    localStorage.setItem("base64UploadDocument", base64String);
                                    console.log("BASE JPG BP 1", base64String);
                                    // $("#btn-choose-file-upload-document").attr("src", base64String);
                                    $("#base64-bukti-penghasilan-instant-approval-non-wiraswasta-1").val(base64String);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                            // $("#buttonUpload").val("1");
                            alert_info("Berhasil Disimpan!");
        
                        } 
                    }
                }
            }
            else if(x == 3){
                if(BuktiPenghasilanInstantApproval2 != undefined){
                    //Bukti penghasilan Instant Approval 2
                    var fileUploadDocument = BuktiPenghasilanInstantApproval2;
                    if(fileUploadDocument.size > 5120000){
                        alert_error("Ukuran file terlalu besar. Maksimal 5 MB");
                    }
        
                    else if(fileUploadDocument != undefined && fileUploadDocument.size <= 5120000){
                        var arrType = [];
                        arrType = fileUploadDocument.type.split("/");
        
                        if (arrType[1] != "jpg" && arrType[1] != "jpeg" && arrType[1] != "png" && arrType[1] == "pdf") {
                            alert_error("Format foto tidak sesuai!");
                        }
        
                        else if(arrType[1] == "pdf"){
                            var fileToLoad = fileUploadDocument;
                            var fileReader = new FileReader();
                            var base64;
                            fileReader.onload = function(fileLoadedEvent) {
                                base64 = fileLoadedEvent.target.result;
                                console.log("BASE PDF BP 2", base64);
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            $("#base64-bukti-penghasilan-instant-approval-non-wiraswasta-2").val(base64);
                        }
        
                        else {
                            var reader = new FileReader();
                            reader.onload = function (event) {
                                var image = new Image();
                                image.onload = function () {
                                    var canvas = document.createElement('canvas');
                                    var context = canvas.getContext("2d");
                                    canvas.width = image.width / 4;
                                    canvas.height = image.height / 4;
                                    context.drawImage(image,
                                        0,
                                        0,
                                        image.width,
                                        image.height,
                                        0,
                                        0,
                                        canvas.width,
                                        canvas.height
                                    );
                                    // console.log("COMPRESS -> " + canvas.toDataURL());
                                    base64String = canvas.toDataURL().replace("data:", "")
                                        .replace(/^.+,/, "");
                                    imageBase64Stringsep = base64String;
                                    localStorage.setItem("base64UploadDocument", base64String);
                                    console.log("BASE JPG BP 2", base64String);
                                    // $("#btn-choose-file-upload-document").attr("src", base64String);
                                    $("#base64-bukti-penghasilan-instant-approval-non-wiraswasta-2").val(base64String);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                            // $("#buttonUpload").val("1");
                            alert_info("Berhasil Disimpan!");
        
                        } 
                    }
                }
            }
            else if(x == 4){
                if(BuktiPenghasilanInstantApproval3 != undefined){
                    //Bukti penghasilan Instant Approval 3
                    var fileUploadDocument = BuktiPenghasilanInstantApproval3;
                    if(fileUploadDocument.size > 5120000){
                        alert_error("Ukuran file terlalu besar. Maksimal 5 MB");
                    }
        
                    else if(fileUploadDocument != undefined && fileUploadDocument.size <= 5120000){
                        var arrType = [];
                        arrType = fileUploadDocument.type.split("/");
        
                        if (arrType[1] != "jpg" && arrType[1] != "jpeg" && arrType[1] != "png" && arrType[1] == "pdf") {
                            alert_error("Format foto tidak sesuai!");
                        }
        
                        else if(arrType[1] == "pdf"){
                            var fileToLoad = fileUploadDocument;
                            var fileReader = new FileReader();
                            var base64;
                            fileReader.onload = function(fileLoadedEvent) {
                                base64 = fileLoadedEvent.target.result;
                                console.log("BASE PDF BP 3", base64);
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            $("#base64-bukti-penghasilan-instant-approval-non-wiraswasta-3").val(base64);
                        }
        
                        else {
                            var reader = new FileReader();
                            reader.onload = function (event) {
                                var image = new Image();
                                image.onload = function () {
                                    var canvas = document.createElement('canvas');
                                    var context = canvas.getContext("2d");
                                    canvas.width = image.width / 4;
                                    canvas.height = image.height / 4;
                                    context.drawImage(image,
                                        0,
                                        0,
                                        image.width,
                                        image.height,
                                        0,
                                        0,
                                        canvas.width,
                                        canvas.height
                                    );
                                    // console.log("COMPRESS -> " + canvas.toDataURL());
                                    base64String = canvas.toDataURL().replace("data:", "")
                                        .replace(/^.+,/, "");
                                    imageBase64Stringsep = base64String;
                                    localStorage.setItem("base64UploadDocument", base64String);
                                    console.log("BASE JPG BP 3", base64String);
                                    // $("#btn-choose-file-upload-document").attr("src", base64String);
                                    $("#base64-bukti-penghasilan-instant-approval-non-wiraswasta-3").val(base64String);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                            // $("#buttonUpload").val("1");
                            alert_info("Berhasil Disimpan!");
        
                        } 
                    }
                }
            }
            else if(x == 5){
                if(BuktiPenghasilanInstantApproval4 != undefined){
                    //Bukti penghasilan Instant Approval 4
                    var fileUploadDocument = BuktiPenghasilanInstantApproval4;
                    if(fileUploadDocument.size > 5120000){
                        alert_error("Ukuran file terlalu besar. Maksimal 5 MB");
                    }
        
                    else if(fileUploadDocument != undefined && fileUploadDocument.size <= 5120000){
                        var arrType = [];
                        arrType = fileUploadDocument.type.split("/");
        
                        if (arrType[1] != "jpg" && arrType[1] != "jpeg" && arrType[1] != "png" && arrType[1] == "pdf") {
                            alert_error("Format foto tidak sesuai!");
                        }
        
                        else if(arrType[1] == "pdf"){
                            var fileToLoad = fileUploadDocument;
                            var fileReader = new FileReader();
                            var base64;
                            fileReader.onload = function(fileLoadedEvent) {
                                base64 = fileLoadedEvent.target.result;
                                console.log("BASE PDF BP 4", base64);
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            $("#base64-bukti-penghasilan-instant-approval-non-wiraswasta-4").val(base64);
                        }
        
                        else {
                            var reader = new FileReader();
                            reader.onload = function (event) {
                                var image = new Image();
                                image.onload = function () {
                                    var canvas = document.createElement('canvas');
                                    var context = canvas.getContext("2d");
                                    canvas.width = image.width / 4;
                                    canvas.height = image.height / 4;
                                    context.drawImage(image,
                                        0,
                                        0,
                                        image.width,
                                        image.height,
                                        0,
                                        0,
                                        canvas.width,
                                        canvas.height
                                    );
                                    // console.log("COMPRESS -> " + canvas.toDataURL());
                                    base64String = canvas.toDataURL().replace("data:", "")
                                        .replace(/^.+,/, "");
                                    imageBase64Stringsep = base64String;
                                    localStorage.setItem("base64UploadDocument", base64String);
                                    console.log("BASE JPG BP 4", base64String);
                                    // $("#btn-choose-file-upload-document").attr("src", base64String);
                                    $("#base64-bukti-penghasilan-instant-approval-non-wiraswasta-4").val(base64String);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                            // $("#buttonUpload").val("1");
                            alert_info("Berhasil Disimpan!");
        
                        } 
                    }
                }
            }
            else if(x == 6){
                if(BuktiPenghasilanInstantApproval5 != undefined){
                    //Bukti penghasilan Instant Approval 5
                    var fileUploadDocument = BuktiPenghasilanInstantApproval5;
                    if(fileUploadDocument.size > 5120000){
                        alert_error("Ukuran file terlalu besar. Maksimal 5 MB");
                    }
        
                    else if(fileUploadDocument != undefined && fileUploadDocument.size <= 5120000){
                        var arrType = [];
                        arrType = fileUploadDocument.type.split("/");
        
                        if (arrType[1] != "jpg" && arrType[1] != "jpeg" && arrType[1] != "png" && arrType[1] == "pdf") {
                            alert_error("Format foto tidak sesuai!");
                        }
        
                        else if(arrType[1] == "pdf"){
                            var fileToLoad = fileUploadDocument;
                            var fileReader = new FileReader();
                            var base64;
                            fileReader.onload = function(fileLoadedEvent) {
                                base64 = fileLoadedEvent.target.result;
                                console.log("BASE PDF BP 5", base64);
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            $("#base64-bukti-penghasilan-instant-approval-non-wiraswasta-5").val(base64);
                        }
        
                        else {
                            var reader = new FileReader();
                            reader.onload = function (event) {
                                var image = new Image();
                                image.onload = function () {
                                    var canvas = document.createElement('canvas');
                                    var context = canvas.getContext("2d");
                                    canvas.width = image.width / 4;
                                    canvas.height = image.height / 4;
                                    context.drawImage(image,
                                        0,
                                        0,
                                        image.width,
                                        image.height,
                                        0,
                                        0,
                                        canvas.width,
                                        canvas.height
                                    );
                                    // console.log("COMPRESS -> " + canvas.toDataURL());
                                    base64String = canvas.toDataURL().replace("data:", "")
                                        .replace(/^.+,/, "");
                                    imageBase64Stringsep = base64String;
                                    localStorage.setItem("base64UploadDocument", base64String);
                                    console.log("BASE JPG BP 5", base64String);
                                    // $("#btn-choose-file-upload-document").attr("src", base64String);
                                    $("#base64-bukti-penghasilan-instant-approval-non-wiraswasta-5").val(base64String);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                            // $("#buttonUpload").val("1");
                            alert_info("Berhasil Disimpan!");
        
                        } 
                    }
                }
            }
            else if(x == 7){
                if(BuktiPenghasilanInstantApproval6 != undefined){
                    //Bukti penghasilan Instant Approval 6
                    var fileUploadDocument = BuktiPenghasilanInstantApproval6;
                    if(fileUploadDocument.size > 5120000){
                        alert_error("Ukuran file terlalu besar. Maksimal 5 MB");
                    }
        
                    else if(fileUploadDocument != undefined && fileUploadDocument.size <= 5120000){
                        var arrType = [];
                        arrType = fileUploadDocument.type.split("/");
        
                        if (arrType[1] != "jpg" && arrType[1] != "jpeg" && arrType[1] != "png" && arrType[1] == "pdf") {
                            alert_error("Format foto tidak sesuai!");
                        }
        
                        else if(arrType[1] == "pdf"){
                            var fileToLoad = fileUploadDocument;
                            var fileReader = new FileReader();
                            var base64;
                            fileReader.onload = function(fileLoadedEvent) {
                                base64 = fileLoadedEvent.target.result;
                                console.log("BASE PDF BP 6", base64);
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            $("#base64-bukti-penghasilan-instant-approval-non-wiraswasta-6").val(base64);
                        }
        
                        else {
                            var reader = new FileReader();
                            reader.onload = function (event) {
                                var image = new Image();
                                image.onload = function () {
                                    var canvas = document.createElement('canvas');
                                    var context = canvas.getContext("2d");
                                    canvas.width = image.width / 4;
                                    canvas.height = image.height / 4;
                                    context.drawImage(image,
                                        0,
                                        0,
                                        image.width,
                                        image.height,
                                        0,
                                        0,
                                        canvas.width,
                                        canvas.height
                                    );
                                    // console.log("COMPRESS -> " + canvas.toDataURL());
                                    base64String = canvas.toDataURL().replace("data:", "")
                                        .replace(/^.+,/, "");
                                    imageBase64Stringsep = base64String;
                                    localStorage.setItem("base64UploadDocument", base64String);
                                    console.log("BASE JPG BP 6", base64String);
                                    // $("#btn-choose-file-upload-document").attr("src", base64String);
                                    $("#base64-bukti-penghasilan-instant-approval-non-wiraswasta-6").val(base64String);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                            // $("#buttonUpload").val("1");
                            alert_info("Berhasil Disimpan!");
        
                        } 
                    }
                }
            }

        }
		
	},

    uploadDocumentSilentSurvey: function () {
        if($('#dokumen-bukti-bekerja-silent-survey-non-wiraswasta').val() != undefined){
            var BuktiBekerjaSilentSurvey1 = $('#dokumen-bukti-bekerja-silent-survey-non-wiraswasta')[0].files[0];
        }
        
        if($('#dokumen-bukti-bekerja-silent-survey-non-wiraswasta-2').val() != undefined){
            var BuktiBekerjaSilentSurvey2 = $('#dokumen-bukti-bekerja-silent-survey-non-wiraswasta-2')[0].files[0];
        }

        if($('#dokumen-bukti-penghasilan-silent-survey-non-wiraswasta').val() != undefined){
            var BuktiPenghasilanSilentSurvey1 = $('#dokumen-bukti-penghasilan-silent-survey-non-wiraswasta')[0].files[0];
        }

        if($('#dokumen-bukti-penghasilan-silent-survey-non-wiraswasta-2').val() != undefined){
            var BuktiPenghasilanSilentSurvey2 = $('#dokumen-bukti-penghasilan-silent-survey-non-wiraswasta-2')[0].files[0];
        }
		
        if($('#dokumen-bukti-penghasilan-silent-survey-non-wiraswasta-3').val() != undefined){
            var BuktiPenghasilanSilentSurvey3 = $('#dokumen-bukti-penghasilan-silent-survey-non-wiraswasta-3')[0].files[0];
        }

        if($('#dokumen-bukti-penghasilan-silent-survey-non-wiraswasta-4').val() != undefined){
            var BuktiPenghasilanSilentSurvey4 = $('#dokumen-bukti-penghasilan-silent-survey-non-wiraswasta-4')[0].files[0];
        }

        if($('#dokumen-bukti-penghasilan-silent-survey-non-wiraswasta-5').val() != undefined){
            var BuktiPenghasilanSilentSurvey5 = $('#dokumen-bukti-penghasilan-silent-survey-non-wiraswasta-5')[0].files[0];
        }

        if($('#dokumen-bukti-penghasilan-silent-survey-non-wiraswasta-6').val() != undefined){
            var BuktiPenghasilanSilentSurvey6 = $('#dokumen-bukti-penghasilan-silent-survey-non-wiraswasta-6')[0].files[0];
        }

        for(var x=0; x < 8; x++){
                    
            if(x == 0){
                if(BuktiBekerjaSilentSurvey1 != undefined){
                    var fileUploadDocument = BuktiBekerjaSilentSurvey1;
                    if(fileUploadDocument.size > 5120000){
                        alert_error("Ukuran file terlalu besar. Maksimal 5 MB");
                    }
                    
                    else if(fileUploadDocument != undefined && fileUploadDocument.size <= 5120000){
                        var arrType = [];
                        arrType = fileUploadDocument.type.split("/");
                    
                        if (arrType[1] != "jpg" && arrType[1] != "jpeg" && arrType[1] != "png" && arrType[1] == "pdf") {
                            alert_error("Format foto tidak sesuai!");
                        }
                    
                        else if(arrType[1] == "pdf"){
                            var fileToLoad = fileUploadDocument;
                            var fileReader = new FileReader();
                            var base64;
                            fileReader.onload = function(fileLoadedEvent) {
                                base64 = fileLoadedEvent.target.result;
                                console.log("BASE PDF BB 1",base64);
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            $("#base64-bukti-bekerja-silent-survey-non-wiraswasta-1").val(base64);
                        }
                    
                        else {
                            var reader = new FileReader();
                            reader.onload = function (event) {
                                var image = new Image();
                                image.onload = function () {
                                    var canvas = document.createElement('canvas');
                                    var context = canvas.getContext("2d");
                                    canvas.width = image.width / 4;
                                    canvas.height = image.height / 4;
                                    context.drawImage(image,
                                        0,
                                        0,
                                        image.width,
                                        image.height,
                                        0,
                                        0,
                                        canvas.width,
                                        canvas.height
                                        );
                                        // console.log("COMPRESS -> " + canvas.toDataURL());
                                    base64String = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64Stringsep = base64String;
                                    localStorage.setItem("base64UploadDocument", base64String);
                                    console.log("BASE JPG BB 1",base64String);
                                    // $("#btn-choose-file-upload-document").attr("src", base64String);
                                    $("#base64-bukti-bekerja-silent-survey-non-wiraswasta-1").val(base64String);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                            // $("#buttonUpload").val("1");
                            alert_info("Berhasil Disimpan!");
                        } 
                    }
                }
            }
            else if(x == 1){
                if(BuktiBekerjaSilentSurvey2 != undefined){
                    var fileUploadDocument = BuktiBekerjaSilentSurvey2;
                    if(fileUploadDocument.size > 5120000){
                        alert_error("Ukuran file terlalu besar. Maksimal 5 MB");
                    }
                    
                    else if(fileUploadDocument != undefined && fileUploadDocument.size <= 5120000){
                        var arrType = [];
                        arrType = fileUploadDocument.type.split("/");
                    
                        if (arrType[1] != "jpg" && arrType[1] != "jpeg" && arrType[1] != "png" && arrType[1] == "pdf") {
                            alert_error("Format foto tidak sesuai!");
                        }
                    
                        else if(arrType[1] == "pdf"){
                            var fileToLoad = fileUploadDocument;
                            var fileReader = new FileReader();
                            var base64;
                            fileReader.onload = function(fileLoadedEvent) {
                                base64 = fileLoadedEvent.target.result;
                                console.log("BASE PDF BB 2",base64);
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            $("#base64-bukti-bekerja-silent-survey-non-wiraswasta-2").val(base64);
                        }
                    
                        else {
                            var reader = new FileReader();
                            reader.onload = function (event) {
                                var image = new Image();
                                image.onload = function () {
                                    var canvas = document.createElement('canvas');
                                    var context = canvas.getContext("2d");
                                    canvas.width = image.width / 4;
                                    canvas.height = image.height / 4;
                                    context.drawImage(image,
                                        0,
                                        0,
                                        image.width,
                                        image.height,
                                        0,
                                        0,
                                        canvas.width,
                                        canvas.height
                                        );
                                        // console.log("COMPRESS -> " + canvas.toDataURL());
                                    base64String = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64Stringsep = base64String;
                                    localStorage.setItem("base64UploadDocument", base64String);
                                    console.log("BASE JPG BB 2",base64String);
                                    // $("#btn-choose-file-upload-document").attr("src", base64String);
                                    $("#base64-bukti-bekerja-silent-survey-non-wiraswasta-2").val(base64String);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                            // $("#buttonUpload").val("1");
                            alert_info("Berhasil Disimpan!");
                        } 
                    }
                }
            }
            else if(x == 2){
                if(BuktiPenghasilanSilentSurvey1 != undefined){
                    //Bukti penghasilan Instant Approval 1
                    var fileUploadDocument = BuktiPenghasilanSilentSurvey1;
                    if(fileUploadDocument.size > 5120000){
                        alert_error("Ukuran file terlalu besar. Maksimal 5 MB");
                    }
        
                    else if(fileUploadDocument != undefined && fileUploadDocument.size <= 5120000){
                        var arrType = [];
                        arrType = fileUploadDocument.type.split("/");
        
                        if (arrType[1] != "jpg" && arrType[1] != "jpeg" && arrType[1] != "png" && arrType[1] == "pdf") {
                            alert_error("Format foto tidak sesuai!");
                        }
        
                        else if(arrType[1] == "pdf"){
                            var fileToLoad = fileUploadDocument;
                            var fileReader = new FileReader();
                            var base64;
                            fileReader.onload = function(fileLoadedEvent) {
                                base64 = fileLoadedEvent.target.result;
                                console.log("BASE PDF BP 1", base64);
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            $("#base64-bukti-penghasilan-silent-survey-non-wiraswasta-1").val(base64);
                        }
        
                        else {
                            var reader = new FileReader();
                            reader.onload = function (event) {
                                var image = new Image();
                                image.onload = function () {
                                    var canvas = document.createElement('canvas');
                                    var context = canvas.getContext("2d");
                                    canvas.width = image.width / 4;
                                    canvas.height = image.height / 4;
                                    context.drawImage(image,
                                        0,
                                        0,
                                        image.width,
                                        image.height,
                                        0,
                                        0,
                                        canvas.width,
                                        canvas.height
                                    );
                                    // console.log("COMPRESS -> " + canvas.toDataURL());
                                    base64String = canvas.toDataURL().replace("data:", "")
                                        .replace(/^.+,/, "");
                                    imageBase64Stringsep = base64String;
                                    localStorage.setItem("base64UploadDocument", base64String);
                                    console.log("BASE JPG BP 1", base64String);
                                    // $("#btn-choose-file-upload-document").attr("src", base64String);
                                    $("#base64-bukti-penghasilan-silent-survey-non-wiraswasta-1").val(base64String);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                            // $("#buttonUpload").val("1");
                            alert_info("Berhasil Disimpan!");
        
                        } 
                    }
                }
            }
            else if(x == 3){
                if(BuktiPenghasilanSilentSurvey2 != undefined){
                    //Bukti penghasilan Instant Approval 2
                    var fileUploadDocument = BuktiPenghasilanSilentSurvey2;
                    if(fileUploadDocument.size > 5120000){
                        alert_error("Ukuran file terlalu besar. Maksimal 5 MB");
                    }
        
                    else if(fileUploadDocument != undefined && fileUploadDocument.size <= 5120000){
                        var arrType = [];
                        arrType = fileUploadDocument.type.split("/");
        
                        if (arrType[1] != "jpg" && arrType[1] != "jpeg" && arrType[1] != "png" && arrType[1] == "pdf") {
                            alert_error("Format foto tidak sesuai!");
                        }
        
                        else if(arrType[1] == "pdf"){
                            var fileToLoad = fileUploadDocument;
                            var fileReader = new FileReader();
                            var base64;
                            fileReader.onload = function(fileLoadedEvent) {
                                base64 = fileLoadedEvent.target.result;
                                console.log("BASE PDF BP 2", base64);
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            $("#base64-bukti-penghasilan-silent-survey-non-wiraswasta-2").val(base64);
                        }
        
                        else {
                            var reader = new FileReader();
                            reader.onload = function (event) {
                                var image = new Image();
                                image.onload = function () {
                                    var canvas = document.createElement('canvas');
                                    var context = canvas.getContext("2d");
                                    canvas.width = image.width / 4;
                                    canvas.height = image.height / 4;
                                    context.drawImage(image,
                                        0,
                                        0,
                                        image.width,
                                        image.height,
                                        0,
                                        0,
                                        canvas.width,
                                        canvas.height
                                    );
                                    // console.log("COMPRESS -> " + canvas.toDataURL());
                                    base64String = canvas.toDataURL().replace("data:", "")
                                        .replace(/^.+,/, "");
                                    imageBase64Stringsep = base64String;
                                    localStorage.setItem("base64UploadDocument", base64String);
                                    console.log("BASE JPG BP 2", base64String);
                                    // $("#btn-choose-file-upload-document").attr("src", base64String);
                                    $("#base64-bukti-penghasilan-silent-survey-non-wiraswasta-2").val(base64String);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                            // $("#buttonUpload").val("1");
                            alert_info("Berhasil Disimpan!");
        
                        } 
                    }
                }
            }
            else if(x == 4){
                if(BuktiPenghasilanSilentSurvey3 != undefined){
                    //Bukti penghasilan Instant Approval 3
                    var fileUploadDocument = BuktiPenghasilanSilentSurvey3;
                    if(fileUploadDocument.size > 5120000){
                        alert_error("Ukuran file terlalu besar. Maksimal 5 MB");
                    }
        
                    else if(fileUploadDocument != undefined && fileUploadDocument.size <= 5120000){
                        var arrType = [];
                        arrType = fileUploadDocument.type.split("/");
        
                        if (arrType[1] != "jpg" && arrType[1] != "jpeg" && arrType[1] != "png" && arrType[1] == "pdf") {
                            alert_error("Format foto tidak sesuai!");
                        }
        
                        else if(arrType[1] == "pdf"){
                            var fileToLoad = fileUploadDocument;
                            var fileReader = new FileReader();
                            var base64;
                            fileReader.onload = function(fileLoadedEvent) {
                                base64 = fileLoadedEvent.target.result;
                                console.log("BASE PDF BP 3", base64);
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            $("#base64-bukti-penghasilan-silent-survey-non-wiraswasta-3").val(base64);
                        }
        
                        else {
                            var reader = new FileReader();
                            reader.onload = function (event) {
                                var image = new Image();
                                image.onload = function () {
                                    var canvas = document.createElement('canvas');
                                    var context = canvas.getContext("2d");
                                    canvas.width = image.width / 4;
                                    canvas.height = image.height / 4;
                                    context.drawImage(image,
                                        0,
                                        0,
                                        image.width,
                                        image.height,
                                        0,
                                        0,
                                        canvas.width,
                                        canvas.height
                                    );
                                    // console.log("COMPRESS -> " + canvas.toDataURL());
                                    base64String = canvas.toDataURL().replace("data:", "")
                                        .replace(/^.+,/, "");
                                    imageBase64Stringsep = base64String;
                                    localStorage.setItem("base64UploadDocument", base64String);
                                    console.log("BASE JPG BP 3", base64String);
                                    // $("#btn-choose-file-upload-document").attr("src", base64String);
                                    $("#base64-bukti-penghasilan-silent-survey-non-wiraswasta-3").val(base64String);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                            // $("#buttonUpload").val("1");
                            alert_info("Berhasil Disimpan!");
        
                        } 
                    }
                }
            }
            else if(x == 5){
                if(BuktiPenghasilanSilentSurvey4 != undefined){
                    //Bukti penghasilan Instant Approval 4
                    var fileUploadDocument = BuktiPenghasilanSilentSurvey4;
                    if(fileUploadDocument.size > 5120000){
                        alert_error("Ukuran file terlalu besar. Maksimal 5 MB");
                    }
        
                    else if(fileUploadDocument != undefined && fileUploadDocument.size <= 5120000){
                        var arrType = [];
                        arrType = fileUploadDocument.type.split("/");
        
                        if (arrType[1] != "jpg" && arrType[1] != "jpeg" && arrType[1] != "png" && arrType[1] == "pdf") {
                            alert_error("Format foto tidak sesuai!");
                        }
        
                        else if(arrType[1] == "pdf"){
                            var fileToLoad = fileUploadDocument;
                            var fileReader = new FileReader();
                            var base64;
                            fileReader.onload = function(fileLoadedEvent) {
                                base64 = fileLoadedEvent.target.result;
                                console.log("BASE PDF BP 4", base64);
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            $("#base64-bukti-penghasilan-silent-survey-non-wiraswasta-4").val(base64);
                        }
        
                        else {
                            var reader = new FileReader();
                            reader.onload = function (event) {
                                var image = new Image();
                                image.onload = function () {
                                    var canvas = document.createElement('canvas');
                                    var context = canvas.getContext("2d");
                                    canvas.width = image.width / 4;
                                    canvas.height = image.height / 4;
                                    context.drawImage(image,
                                        0,
                                        0,
                                        image.width,
                                        image.height,
                                        0,
                                        0,
                                        canvas.width,
                                        canvas.height
                                    );
                                    // console.log("COMPRESS -> " + canvas.toDataURL());
                                    base64String = canvas.toDataURL().replace("data:", "")
                                        .replace(/^.+,/, "");
                                    imageBase64Stringsep = base64String;
                                    localStorage.setItem("base64UploadDocument", base64String);
                                    console.log("BASE JPG BP 4", base64String);
                                    // $("#btn-choose-file-upload-document").attr("src", base64String);
                                    $("#base64-bukti-penghasilan-silent-survey-non-wiraswasta-4").val(base64String);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                            // $("#buttonUpload").val("1");
                            alert_info("Berhasil Disimpan!");
        
                        } 
                    }
                }
            }
            else if(x == 6){
                if(BuktiPenghasilanSilentSurvey5 != undefined){
                    //Bukti penghasilan Instant Approval 5
                    var fileUploadDocument = BuktiPenghasilanSilentSurvey5;
                    if(fileUploadDocument.size > 5120000){
                        alert_error("Ukuran file terlalu besar. Maksimal 5 MB");
                    }
        
                    else if(fileUploadDocument != undefined && fileUploadDocument.size <= 5120000){
                        var arrType = [];
                        arrType = fileUploadDocument.type.split("/");
        
                        if (arrType[1] != "jpg" && arrType[1] != "jpeg" && arrType[1] != "png" && arrType[1] == "pdf") {
                            alert_error("Format foto tidak sesuai!");
                        }
        
                        else if(arrType[1] == "pdf"){
                            var fileToLoad = fileUploadDocument;
                            var fileReader = new FileReader();
                            var base64;
                            fileReader.onload = function(fileLoadedEvent) {
                                base64 = fileLoadedEvent.target.result;
                                console.log("BASE PDF BP 5", base64);
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            $("#base64-bukti-penghasilan-silent-survey-non-wiraswasta-5").val(base64);
                        }
        
                        else {
                            var reader = new FileReader();
                            reader.onload = function (event) {
                                var image = new Image();
                                image.onload = function () {
                                    var canvas = document.createElement('canvas');
                                    var context = canvas.getContext("2d");
                                    canvas.width = image.width / 4;
                                    canvas.height = image.height / 4;
                                    context.drawImage(image,
                                        0,
                                        0,
                                        image.width,
                                        image.height,
                                        0,
                                        0,
                                        canvas.width,
                                        canvas.height
                                    );
                                    // console.log("COMPRESS -> " + canvas.toDataURL());
                                    base64String = canvas.toDataURL().replace("data:", "")
                                        .replace(/^.+,/, "");
                                    imageBase64Stringsep = base64String;
                                    localStorage.setItem("base64UploadDocument", base64String);
                                    console.log("BASE JPG BP 5", base64String);
                                    // $("#btn-choose-file-upload-document").attr("src", base64String);
                                    $("#base64-bukti-penghasilan-silent-survey-non-wiraswasta-5").val(base64String);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                            // $("#buttonUpload").val("1");
                            alert_info("Berhasil Disimpan!");
        
                        } 
                    }
                }
            }
            else if(x == 7){
                if(BuktiPenghasilanSilentSurvey6 != undefined){
                    //Bukti penghasilan Instant Approval 6
                    var fileUploadDocument = BuktiPenghasilanSilentSurvey6;
                    if(fileUploadDocument.size > 5120000){
                        alert_error("Ukuran file terlalu besar. Maksimal 5 MB");
                    }
        
                    else if(fileUploadDocument != undefined && fileUploadDocument.size <= 5120000){
                        var arrType = [];
                        arrType = fileUploadDocument.type.split("/");
        
                        if (arrType[1] != "jpg" && arrType[1] != "jpeg" && arrType[1] != "png" && arrType[1] == "pdf") {
                            alert_error("Format foto tidak sesuai!");
                        }
        
                        else if(arrType[1] == "pdf"){
                            var fileToLoad = fileUploadDocument;
                            var fileReader = new FileReader();
                            var base64;
                            fileReader.onload = function(fileLoadedEvent) {
                                base64 = fileLoadedEvent.target.result;
                                console.log("BASE PDF BP 6", base64);
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            $("#base64-bukti-penghasilan-silent-survey-non-wiraswasta-6").val(base64);
                        }
        
                        else {
                            var reader = new FileReader();
                            reader.onload = function (event) {
                                var image = new Image();
                                image.onload = function () {
                                    var canvas = document.createElement('canvas');
                                    var context = canvas.getContext("2d");
                                    canvas.width = image.width / 4;
                                    canvas.height = image.height / 4;
                                    context.drawImage(image,
                                        0,
                                        0,
                                        image.width,
                                        image.height,
                                        0,
                                        0,
                                        canvas.width,
                                        canvas.height
                                    );
                                    // console.log("COMPRESS -> " + canvas.toDataURL());
                                    base64String = canvas.toDataURL().replace("data:", "")
                                        .replace(/^.+,/, "");
                                    imageBase64Stringsep = base64String;
                                    localStorage.setItem("base64UploadDocument", base64String);
                                    console.log("BASE JPG BP 6", base64String);
                                    // $("#btn-choose-file-upload-document").attr("src", base64String);
                                    $("#base64-bukti-penghasilan-silent-survey-non-wiraswasta-6").val(base64String);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                            // $("#buttonUpload").val("1");
                            alert_info("Berhasil Disimpan!");
        
                        } 
                    }
                }
            }

        }
		
	},

    uploadDocumentTeleSurvey: function () {
        if($('#dokumen-bukti-bekerja-tele-survey-non-wiraswasta').val() != undefined){
            var BuktiBekerjaTeleSurvey1 = $('#dokumen-bukti-bekerja-tele-survey-non-wiraswasta')[0].files[0];
        }
        
        if($('#dokumen-bukti-bekerja-tele-survey-non-wiraswasta-2').val() != undefined){
            var BuktiBekerjaTeleSurvey2 = $('#dokumen-bukti-bekerja-tele-survey-non-wiraswasta-2')[0].files[0];
        }

        if($('#dokumen-bukti-penghasilan-tele-survey-non-wiraswasta').val() != undefined){
            var BuktiPenghasilanTeleSurvey1 = $('#dokumen-bukti-penghasilan-tele-survey-non-wiraswasta')[0].files[0];
        }

        if($('#dokumen-bukti-penghasilan-tele-survey-non-wiraswasta-2').val() != undefined){
            var BuktiPenghasilanTeleSurvey2 = $('#dokumen-bukti-penghasilan-tele-survey-non-wiraswasta-2')[0].files[0];
        }
		
        if($('#dokumen-bukti-penghasilan-tele-survey-non-wiraswasta-3').val() != undefined){
            var BuktiPenghasilanTeleSurvey3 = $('#dokumen-bukti-penghasilan-tele-survey-non-wiraswasta-3')[0].files[0];
        }

        if($('#dokumen-bukti-penghasilan-tele-survey-non-wiraswasta-4').val() != undefined){
            var BuktiPenghasilanTeleSurvey4 = $('#dokumen-bukti-penghasilan-tele-survey-non-wiraswasta-4')[0].files[0];
        }

        if($('#dokumen-bukti-penghasilan-tele-survey-non-wiraswasta-5').val() != undefined){
            var BuktiPenghasilanTeleSurvey5 = $('#dokumen-bukti-penghasilan-tele-survey-non-wiraswasta-5')[0].files[0];
        }

        if($('#dokumen-bukti-penghasilan-tele-survey-non-wiraswasta-6').val() != undefined){
            var BuktiPenghasilanTeleSurvey6 = $('#dokumen-bukti-penghasilan-tele-survey-non-wiraswasta-6')[0].files[0];
        }

        for(var x=0; x < 8; x++){
                    
            if(x == 0){
                if(BuktiBekerjaTeleSurvey1 != undefined){
                    var fileUploadDocument = BuktiBekerjaTeleSurvey1;
                    if(fileUploadDocument.size > 5120000){
                        alert_error("Ukuran file terlalu besar. Maksimal 5 MB");
                    }
                    
                    else if(fileUploadDocument != undefined && fileUploadDocument.size <= 5120000){
                        var arrType = [];
                        arrType = fileUploadDocument.type.split("/");
                    
                        if (arrType[1] != "jpg" && arrType[1] != "jpeg" && arrType[1] != "png" && arrType[1] == "pdf") {
                            alert_error("Format foto tidak sesuai!");
                        }
                    
                        else if(arrType[1] == "pdf"){
                            var fileToLoad = fileUploadDocument;
                            var fileReader = new FileReader();
                            var base64;
                            fileReader.onload = function(fileLoadedEvent) {
                                base64 = fileLoadedEvent.target.result;
                                console.log("BASE PDF BB 1",base64);
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            $("#base64-bukti-bekerja-tele-survey-non-wiraswasta-1").val(base64);
                        }
                    
                        else {
                            var reader = new FileReader();
                            reader.onload = function (event) {
                                var image = new Image();
                                image.onload = function () {
                                    var canvas = document.createElement('canvas');
                                    var context = canvas.getContext("2d");
                                    canvas.width = image.width / 4;
                                    canvas.height = image.height / 4;
                                    context.drawImage(image,
                                        0,
                                        0,
                                        image.width,
                                        image.height,
                                        0,
                                        0,
                                        canvas.width,
                                        canvas.height
                                        );
                                        // console.log("COMPRESS -> " + canvas.toDataURL());
                                    base64String = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64Stringsep = base64String;
                                    localStorage.setItem("base64UploadDocument", base64String);
                                    console.log("BASE JPG BB 1",base64String);
                                    // $("#btn-choose-file-upload-document").attr("src", base64String);
                                    $("#base64-bukti-bekerja-tele-survey-non-wiraswasta-1").val(base64String);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                            // $("#buttonUpload").val("1");
                            alert_info("Berhasil Disimpan!");
                        } 
                    }
                }
            }
            else if(x == 1){
                if(BuktiBekerjaTeleSurvey2 != undefined){
                    var fileUploadDocument = BuktiBekerjaTeleSurvey2;
                    if(fileUploadDocument.size > 5120000){
                        alert_error("Ukuran file terlalu besar. Maksimal 5 MB");
                    }
                    
                    else if(fileUploadDocument != undefined && fileUploadDocument.size <= 5120000){
                        var arrType = [];
                        arrType = fileUploadDocument.type.split("/");
                    
                        if (arrType[1] != "jpg" && arrType[1] != "jpeg" && arrType[1] != "png" && arrType[1] == "pdf") {
                            alert_error("Format foto tidak sesuai!");
                        }
                    
                        else if(arrType[1] == "pdf"){
                            var fileToLoad = fileUploadDocument;
                            var fileReader = new FileReader();
                            var base64;
                            fileReader.onload = function(fileLoadedEvent) {
                                base64 = fileLoadedEvent.target.result;
                                console.log("BASE PDF BB 2",base64);
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            $("#base64-bukti-bekerja-tele-survey-non-wiraswasta-2").val(base64);
                        }
                    
                        else {
                            var reader = new FileReader();
                            reader.onload = function (event) {
                                var image = new Image();
                                image.onload = function () {
                                    var canvas = document.createElement('canvas');
                                    var context = canvas.getContext("2d");
                                    canvas.width = image.width / 4;
                                    canvas.height = image.height / 4;
                                    context.drawImage(image,
                                        0,
                                        0,
                                        image.width,
                                        image.height,
                                        0,
                                        0,
                                        canvas.width,
                                        canvas.height
                                        );
                                        // console.log("COMPRESS -> " + canvas.toDataURL());
                                    base64String = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64Stringsep = base64String;
                                    localStorage.setItem("base64UploadDocument", base64String);
                                    console.log("BASE JPG BB 2",base64String);
                                    // $("#btn-choose-file-upload-document").attr("src", base64String);
                                    $("#base64-bukti-bekerja-tele-survey-non-wiraswasta-2").val(base64String);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                            // $("#buttonUpload").val("1");
                            alert_info("Berhasil Disimpan!");
                        } 
                    }
                }
            }
            else if(x == 2){
                if(BuktiPenghasilanTeleSurvey1 != undefined){
                    //Bukti penghasilan Instant Approval 1
                    var fileUploadDocument = BuktiPenghasilanTeleSurvey1;
                    if(fileUploadDocument.size > 5120000){
                        alert_error("Ukuran file terlalu besar. Maksimal 5 MB");
                    }
        
                    else if(fileUploadDocument != undefined && fileUploadDocument.size <= 5120000){
                        var arrType = [];
                        arrType = fileUploadDocument.type.split("/");
        
                        if (arrType[1] != "jpg" && arrType[1] != "jpeg" && arrType[1] != "png" && arrType[1] == "pdf") {
                            alert_error("Format foto tidak sesuai!");
                        }
        
                        else if(arrType[1] == "pdf"){
                            var fileToLoad = fileUploadDocument;
                            var fileReader = new FileReader();
                            var base64;
                            fileReader.onload = function(fileLoadedEvent) {
                                base64 = fileLoadedEvent.target.result;
                                console.log("BASE PDF BP 1", base64);
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            $("#base64-bukti-penghasilan-tele-survey-non-wiraswasta-1").val(base64);
                        }
        
                        else {
                            var reader = new FileReader();
                            reader.onload = function (event) {
                                var image = new Image();
                                image.onload = function () {
                                    var canvas = document.createElement('canvas');
                                    var context = canvas.getContext("2d");
                                    canvas.width = image.width / 4;
                                    canvas.height = image.height / 4;
                                    context.drawImage(image,
                                        0,
                                        0,
                                        image.width,
                                        image.height,
                                        0,
                                        0,
                                        canvas.width,
                                        canvas.height
                                    );
                                    // console.log("COMPRESS -> " + canvas.toDataURL());
                                    base64String = canvas.toDataURL().replace("data:", "")
                                        .replace(/^.+,/, "");
                                    imageBase64Stringsep = base64String;
                                    localStorage.setItem("base64UploadDocument", base64String);
                                    console.log("BASE JPG BP 1", base64String);
                                    // $("#btn-choose-file-upload-document").attr("src", base64String);
                                    $("#base64-bukti-penghasilan-tele-survey-non-wiraswasta-1").val(base64String);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                            // $("#buttonUpload").val("1");
                            alert_info("Berhasil Disimpan!");
        
                        } 
                    }
                }
            }
            else if(x == 3){
                if(BuktiPenghasilanTeleSurvey2 != undefined){
                    //Bukti penghasilan Instant Approval 2
                    var fileUploadDocument = BuktiPenghasilanTeleSurvey2;
                    if(fileUploadDocument.size > 5120000){
                        alert_error("Ukuran file terlalu besar. Maksimal 5 MB");
                    }
        
                    else if(fileUploadDocument != undefined && fileUploadDocument.size <= 5120000){
                        var arrType = [];
                        arrType = fileUploadDocument.type.split("/");
        
                        if (arrType[1] != "jpg" && arrType[1] != "jpeg" && arrType[1] != "png" && arrType[1] == "pdf") {
                            alert_error("Format foto tidak sesuai!");
                        }
        
                        else if(arrType[1] == "pdf"){
                            var fileToLoad = fileUploadDocument;
                            var fileReader = new FileReader();
                            var base64;
                            fileReader.onload = function(fileLoadedEvent) {
                                base64 = fileLoadedEvent.target.result;
                                console.log("BASE PDF BP 2", base64);
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            $("#base64-bukti-penghasilan-tele-survey-non-wiraswasta-2").val(base64);
                        }
        
                        else {
                            var reader = new FileReader();
                            reader.onload = function (event) {
                                var image = new Image();
                                image.onload = function () {
                                    var canvas = document.createElement('canvas');
                                    var context = canvas.getContext("2d");
                                    canvas.width = image.width / 4;
                                    canvas.height = image.height / 4;
                                    context.drawImage(image,
                                        0,
                                        0,
                                        image.width,
                                        image.height,
                                        0,
                                        0,
                                        canvas.width,
                                        canvas.height
                                    );
                                    // console.log("COMPRESS -> " + canvas.toDataURL());
                                    base64String = canvas.toDataURL().replace("data:", "")
                                        .replace(/^.+,/, "");
                                    imageBase64Stringsep = base64String;
                                    localStorage.setItem("base64UploadDocument", base64String);
                                    console.log("BASE JPG BP 2", base64String);
                                    // $("#btn-choose-file-upload-document").attr("src", base64String);
                                    $("#base64-bukti-penghasilan-tele-survey-non-wiraswasta-2").val(base64String);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                            // $("#buttonUpload").val("1");
                            alert_info("Berhasil Disimpan!");
        
                        } 
                    }
                }
            }
            else if(x == 4){
                if(BuktiPenghasilanTeleSurvey3 != undefined){
                    //Bukti penghasilan Instant Approval 3
                    var fileUploadDocument = BuktiPenghasilanTeleSurvey3;
                    if(fileUploadDocument.size > 5120000){
                        alert_error("Ukuran file terlalu besar. Maksimal 5 MB");
                    }
        
                    else if(fileUploadDocument != undefined && fileUploadDocument.size <= 5120000){
                        var arrType = [];
                        arrType = fileUploadDocument.type.split("/");
        
                        if (arrType[1] != "jpg" && arrType[1] != "jpeg" && arrType[1] != "png" && arrType[1] == "pdf") {
                            alert_error("Format foto tidak sesuai!");
                        }
        
                        else if(arrType[1] == "pdf"){
                            var fileToLoad = fileUploadDocument;
                            var fileReader = new FileReader();
                            var base64;
                            fileReader.onload = function(fileLoadedEvent) {
                                base64 = fileLoadedEvent.target.result;
                                console.log("BASE PDF BP 3", base64);
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            $("#base64-bukti-penghasilan-tele-survey-non-wiraswasta-3").val(base64);
                        }
        
                        else {
                            var reader = new FileReader();
                            reader.onload = function (event) {
                                var image = new Image();
                                image.onload = function () {
                                    var canvas = document.createElement('canvas');
                                    var context = canvas.getContext("2d");
                                    canvas.width = image.width / 4;
                                    canvas.height = image.height / 4;
                                    context.drawImage(image,
                                        0,
                                        0,
                                        image.width,
                                        image.height,
                                        0,
                                        0,
                                        canvas.width,
                                        canvas.height
                                    );
                                    // console.log("COMPRESS -> " + canvas.toDataURL());
                                    base64String = canvas.toDataURL().replace("data:", "")
                                        .replace(/^.+,/, "");
                                    imageBase64Stringsep = base64String;
                                    localStorage.setItem("base64UploadDocument", base64String);
                                    console.log("BASE JPG BP 3", base64String);
                                    // $("#btn-choose-file-upload-document").attr("src", base64String);
                                    $("#base64-bukti-penghasilan-tele-survey-non-wiraswasta-3").val(base64String);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                            // $("#buttonUpload").val("1");
                            alert_info("Berhasil Disimpan!");
        
                        } 
                    }
                }
            }
            else if(x == 5){
                if(BuktiPenghasilanTeleSurvey4 != undefined){
                    //Bukti penghasilan Instant Approval 4
                    var fileUploadDocument = BuktiPenghasilanTeleSurvey4;
                    if(fileUploadDocument.size > 5120000){
                        alert_error("Ukuran file terlalu besar. Maksimal 5 MB");
                    }
        
                    else if(fileUploadDocument != undefined && fileUploadDocument.size <= 5120000){
                        var arrType = [];
                        arrType = fileUploadDocument.type.split("/");
        
                        if (arrType[1] != "jpg" && arrType[1] != "jpeg" && arrType[1] != "png" && arrType[1] == "pdf") {
                            alert_error("Format foto tidak sesuai!");
                        }
        
                        else if(arrType[1] == "pdf"){
                            var fileToLoad = fileUploadDocument;
                            var fileReader = new FileReader();
                            var base64;
                            fileReader.onload = function(fileLoadedEvent) {
                                base64 = fileLoadedEvent.target.result;
                                console.log("BASE PDF BP 4", base64);
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            $("#base64-bukti-penghasilan-tele-survey-non-wiraswasta-4").val(base64);
                        }
        
                        else {
                            var reader = new FileReader();
                            reader.onload = function (event) {
                                var image = new Image();
                                image.onload = function () {
                                    var canvas = document.createElement('canvas');
                                    var context = canvas.getContext("2d");
                                    canvas.width = image.width / 4;
                                    canvas.height = image.height / 4;
                                    context.drawImage(image,
                                        0,
                                        0,
                                        image.width,
                                        image.height,
                                        0,
                                        0,
                                        canvas.width,
                                        canvas.height
                                    );
                                    // console.log("COMPRESS -> " + canvas.toDataURL());
                                    base64String = canvas.toDataURL().replace("data:", "")
                                        .replace(/^.+,/, "");
                                    imageBase64Stringsep = base64String;
                                    localStorage.setItem("base64UploadDocument", base64String);
                                    console.log("BASE JPG BP 4", base64String);
                                    // $("#btn-choose-file-upload-document").attr("src", base64String);
                                    $("#base64-bukti-penghasilan-tele-survey-non-wiraswasta-4").val(base64String);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                            // $("#buttonUpload").val("1");
                            alert_info("Berhasil Disimpan!");
        
                        } 
                    }
                }
            }
            else if(x == 6){
                if(BuktiPenghasilanTeleSurvey5 != undefined){
                    //Bukti penghasilan Instant Approval 5
                    var fileUploadDocument = BuktiPenghasilanTeleSurvey5;
                    if(fileUploadDocument.size > 5120000){
                        alert_error("Ukuran file terlalu besar. Maksimal 5 MB");
                    }
        
                    else if(fileUploadDocument != undefined && fileUploadDocument.size <= 5120000){
                        var arrType = [];
                        arrType = fileUploadDocument.type.split("/");
        
                        if (arrType[1] != "jpg" && arrType[1] != "jpeg" && arrType[1] != "png" && arrType[1] == "pdf") {
                            alert_error("Format foto tidak sesuai!");
                        }
        
                        else if(arrType[1] == "pdf"){
                            var fileToLoad = fileUploadDocument;
                            var fileReader = new FileReader();
                            var base64;
                            fileReader.onload = function(fileLoadedEvent) {
                                base64 = fileLoadedEvent.target.result;
                                console.log("BASE PDF BP 5", base64);
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            $("#base64-bukti-penghasilan-tele-survey-non-wiraswasta-5").val(base64);
                        }
        
                        else {
                            var reader = new FileReader();
                            reader.onload = function (event) {
                                var image = new Image();
                                image.onload = function () {
                                    var canvas = document.createElement('canvas');
                                    var context = canvas.getContext("2d");
                                    canvas.width = image.width / 4;
                                    canvas.height = image.height / 4;
                                    context.drawImage(image,
                                        0,
                                        0,
                                        image.width,
                                        image.height,
                                        0,
                                        0,
                                        canvas.width,
                                        canvas.height
                                    );
                                    // console.log("COMPRESS -> " + canvas.toDataURL());
                                    base64String = canvas.toDataURL().replace("data:", "")
                                        .replace(/^.+,/, "");
                                    imageBase64Stringsep = base64String;
                                    localStorage.setItem("base64UploadDocument", base64String);
                                    console.log("BASE JPG BP 5", base64String);
                                    // $("#btn-choose-file-upload-document").attr("src", base64String);
                                    $("#base64-bukti-penghasilan-tele-survey-non-wiraswasta-5").val(base64String);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                            // $("#buttonUpload").val("1");
                            alert_info("Berhasil Disimpan!");
        
                        } 
                    }
                }
            }
            else if(x == 7){
                if(BuktiPenghasilanTeleSurvey6 != undefined){
                    //Bukti penghasilan Instant Approval 6
                    var fileUploadDocument = BuktiPenghasilanTeleSurvey6;
                    if(fileUploadDocument.size > 5120000){
                        alert_error("Ukuran file terlalu besar. Maksimal 5 MB");
                    }
        
                    else if(fileUploadDocument != undefined && fileUploadDocument.size <= 5120000){
                        var arrType = [];
                        arrType = fileUploadDocument.type.split("/");
        
                        if (arrType[1] != "jpg" && arrType[1] != "jpeg" && arrType[1] != "png" && arrType[1] == "pdf") {
                            alert_error("Format foto tidak sesuai!");
                        }
        
                        else if(arrType[1] == "pdf"){
                            var fileToLoad = fileUploadDocument;
                            var fileReader = new FileReader();
                            var base64;
                            fileReader.onload = function(fileLoadedEvent) {
                                base64 = fileLoadedEvent.target.result;
                                console.log("BASE PDF BP 6", base64);
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            $("#base64-bukti-penghasilan-tele-survey-non-wiraswasta-6").val(base64);
                        }
        
                        else {
                            var reader = new FileReader();
                            reader.onload = function (event) {
                                var image = new Image();
                                image.onload = function () {
                                    var canvas = document.createElement('canvas');
                                    var context = canvas.getContext("2d");
                                    canvas.width = image.width / 4;
                                    canvas.height = image.height / 4;
                                    context.drawImage(image,
                                        0,
                                        0,
                                        image.width,
                                        image.height,
                                        0,
                                        0,
                                        canvas.width,
                                        canvas.height
                                    );
                                    // console.log("COMPRESS -> " + canvas.toDataURL());
                                    base64String = canvas.toDataURL().replace("data:", "")
                                        .replace(/^.+,/, "");
                                    imageBase64Stringsep = base64String;
                                    localStorage.setItem("base64UploadDocument", base64String);
                                    console.log("BASE JPG BP 6", base64String);
                                    // $("#btn-choose-file-upload-document").attr("src", base64String);
                                    $("#base64-bukti-penghasilan-tele-survey-non-wiraswasta-6").val(base64String);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                            // $("#buttonUpload").val("1");
                            alert_info("Berhasil Disimpan!");
        
                        } 
                    }
                }
            }

        }
        
	},

}
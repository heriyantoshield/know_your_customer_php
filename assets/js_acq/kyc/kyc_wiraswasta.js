$(document).ready(function() {
    app.KycWiraswasta.init();
    localStorage.setItem("bukti_usaha_silent_survey_wiraswasta", "");
    localStorage.setItem("bukti_usaha_silent_survey_wiraswasta_2", "");
    localStorage.setItem("bukti_keuangan_silent_survey_wiraswasta", "");
    localStorage.setItem("bukti_keuangan_silent_survey_wiraswasta_2", "");
    localStorage.setItem("bukti_keuangan_silent_survey_wiraswasta_3", "");
    localStorage.setItem("bukti_keuangan_silent_survey_wiraswasta_4", "");
    localStorage.setItem("bukti_keuangan_silent_survey_wiraswasta_5", "");
    localStorage.setItem("bukti_keuangan_silent_survey_wiraswasta_6", "");
    localStorage.setItem("foto_tempat_usaha_silent_survey_wiraswasta", "");
    localStorage.setItem("foto_selfie_silent_survey_wiraswasta", "");
});

app.KycWiraswasta = {
	controller: 'Kyc/',
	api: 'Kyc_api/',
	elm: {},

	init: function () {
		var file = app.KycWiraswasta;
        var id_bukti_usaha_instant_approval = 2; 
        var id_bukti_usaha_tele_survey = 2;
        var id_bukti_usaha_silent_survey = 2;  
        var id_bukti_keuangan_instant_approval = 2;
        var id_bukti_keuangan_tele_survey = 2;
        var id_bukti_keuangan_silent_survey = 2;
        var condition = false; 
		var order_id = '1234569999';//'123456789011113'; //hardcode order_id

        document.getElementById("add-dokumen-bukti-usaha-instant-approval-wiraswasta").onclick = function() {functionAddUsahaInstantApproval()};
        document.getElementById("add-dokumen-bukti-usaha-tele-survey-wiraswasta").onclick = function() {functionAddUsahaTeleSurvey()};
        document.getElementById("add-dokumen-bukti-usaha-silent-survey-wiraswasta").onclick = function() {functionAddUsahaSilentSurvey()};
        document.getElementById("add-dokumen-bukti-keuangan-instant-approval-wiraswasta").onclick = function() {functionAddKeuanganInstantApproval()};
        document.getElementById("add-dokumen-bukti-keuangan-tele-survey-wiraswasta").onclick = function() {functionAddKeuanganTeleSurvey()};
        document.getElementById("add-dokumen-bukti-keuangan-silent-survey-wiraswasta").onclick = function() {functionAddKeuanganSilentSurvey()};
        
        function functionAddUsahaInstantApproval(){
			if(id_bukti_usaha_instant_approval == 2){
                $('#newdokbuktiusahainstantapproval').append('<div class="col-lg-4" style="margin-top:10px;"><input type="file" class="form-control-file dokumen-bukti-usaha-instant-approval-wiraswasta-'+id_bukti_usaha_instant_approval+'" accept="application/pdf, image/jpg, image/jpeg, image/png"></div>');
                id_bukti_usaha_instant_approval++;
            }
        }

        function functionAddUsahaTeleSurvey(){
			if(id_bukti_usaha_tele_survey == 2){
                $('#newdokbuktiusahatelesurvey').append('<div class="col-lg-4" style="margin-top:10px;"><input type="file" class="form-control-file dokumen-bukti-usaha-tele-survey-wiraswasta-'+id_bukti_usaha_tele_survey+'" accept="application/pdf, image/jpg, image/jpeg, image/png"></div>');
                id_bukti_usaha_tele_survey++;
            }
        }
        
        function functionAddUsahaSilentSurvey(){
            if(id_bukti_usaha_silent_survey == 2){
                $('#newdokbuktiusahasilentsurvey').append('<div class="col-lg-4" style="margin-top:10px;"><input type="file" class="form-control-file dokumen-bukti-usaha-silent-survey-wiraswasta-'+id_bukti_usaha_silent_survey+'" accept="application/pdf, image/jpg, image/jpeg, image/png"></input></div>');
                id_bukti_usaha_silent_survey++;
            }
        }
        
        function functionAddKeuanganInstantApproval(){
            if(id_bukti_keuangan_instant_approval <= 6){
                $('#newdokbuktikeuanganinstantapproval').append('<div class="col-lg-4" style="margin-top:10px;"><input type="file" class="form-control-file dokumen-bukti-keuangan-instant-approval-wiraswasta-'+id_bukti_keuangan_instant_approval+'" accept="application/pdf, image/jpg, image/jpeg, image/png"></div>');
                id_bukti_keuangan_instant_approval++;
            }
        }
        
        function functionAddKeuanganTeleSurvey(){
            if(id_bukti_keuangan_tele_survey <= 6){
                $('#newdokbuktikeuangantelesurvey').append('<div class="col-lg-4" style="margin-top:10px;"><input type="file" class="form-control-file dokumen-bukti-keuangan-tele-survey-wiraswasta-'+id_bukti_keuangan_tele_survey+'" accept="application/pdf, image/jpg, image/jpeg, image/png"></div>');
                id_bukti_keuangan_tele_survey++;
            }
        }

        function functionAddKeuanganSilentSurvey(){
            if(id_bukti_keuangan_silent_survey <= 6){
                $('#newdokbuktikeuangansilentsurvey').append('<div class="col-lg-4" style="margin-top:10px;"><input type="file" class="form-control-file dokumen-bukti-keuangan-silent-survey-wiraswasta-'+id_bukti_keuangan_silent_survey+'" accept="application/pdf, image/jpg, image/jpeg, image/png"></div>');
                id_bukti_keuangan_silent_survey++;
            }
        }
        
        $('#content-instant-approval-wiraswasta').hide();
        $('#content-tele-survey-wiraswasta').hide();
        $('#content-silent-survey-wiraswasta').hide();
        
        $('#tittle-instant-approval-wiraswasta').click(function () {
			condition = !condition;
			if (condition == false) {
				$('#content-instant-approval-wiraswasta').slideUp("slow");
				$('#span-instant-approval-wiraswasta').html('Informasi Pekerjaan Nasabah <i class="fas fa-angle-right ml-2"></i>')
				$('#span-instant-approval-wiraswasta').removeClass('use-bottom-border-span');

			}
			else if (condition == true) {
				$('#content-instant-approval-wiraswasta').slideDown("slow");
				$('#span-instant-approval-wiraswasta').html('Informasi Pekerjaan Nasabah <i class="fas fa-angle-down ml-2"></i>')
				$('#span-instant-approval-wiraswasta').addClass('use-bottom-border-span');
			}
		});

        $('#tittle-tele-survey-wiraswasta').click(function () {
			condition = !condition;
			if (condition == false) {
				$('#content-tele-survey-wiraswasta').slideUp("slow");
				$('#span-tele-survey-wiraswasta').html('Informasi Pekerjaan Nasabah <i class="fas fa-angle-right ml-2"></i>')
				$('#span-tele-survey-wiraswasta').removeClass('use-bottom-border-span');

			}
			else if (condition == true) {
				$('#content-tele-survey-wiraswasta').slideDown("slow");
				$('#span-tele-survey-wiraswasta').html('Informasi Pekerjaan Nasabah <i class="fas fa-angle-down ml-2"></i>')
				$('#span-tele-survey-wiraswasta').addClass('use-bottom-border-span');
			}
		});

        $('#tittle-silent-survey-wiraswasta').click(function () {
			condition = !condition;
			if (condition == false) {
				$('#content-silent-survey-wiraswasta').slideUp("slow");
				$('#span-silent-survey-wiraswasta').html('Informasi Pekerjaan Nasabah <i class="fas fa-angle-right ml-2"></i>')
				$('#span-silent-survey-wiraswasta').removeClass('use-bottom-border-span');

			}
			else if (condition == true) {
				$('#content-silent-survey-wiraswasta').slideDown("slow");
				$('#span-silent-survey-wiraswasta').html('Informasi Pekerjaan Nasabah <i class="fas fa-angle-down ml-2"></i>')
				$('#span-silent-survey-wiraswasta').addClass('use-bottom-border-span');
			}
		});

        $('#slc-sektor-ekonomi-level-1-instant-approval-wiraswasta').on('change', function() {
            var file = app.KycWiraswasta;
            $("#slc-sektor-ekonomi-level-2-instant-approval-wiraswasta").val('').trigger('change');
            file.getEconomicSectorLevel2InstantApproval();
        });

        $('#slc-sektor-ekonomi-level-2-instant-approval-wiraswasta').on('change', function() {
            var file = app.KycWiraswasta;
            $('#slc-sektor-ekonomi-level-3-instant-approval-wiraswasta').val('').trigger('change');
            file.getEconomicSectorLevel3InstantApproval();
            file.getEconomicSectorFromLevel3ToLevel2andLevel1InstantApproval();
        });

        $('#slc-sektor-ekonomi-level-3-instant-approval-wiraswasta').on('change', function() {
            var file = app.KycWiraswasta;
            if($('#slc-sektor-ekonomi-level-3-instant-approval-wiraswasta').val() == null &&
               $('#slc-sektor-ekonomi-level-3-instant-approval-wiraswasta').select2('data')[0]['text'] == null){
                if($('#slc-sektor-ekonomi-level-1-instant-approval-wiraswasta').val() != '' && 
                   $('#slc-sektor-ekonomi-level-2-instant-approval-wiraswasta').val() == null){
                        $('#slc-sektor-ekonomi-level-2-instant-approval-wiraswasta').empty();
                }
                else if ($('#slc-sektor-ekonomi-level-1-instant-approval-wiraswasta').val() != '' && 
                         $('#slc-sektor-ekonomi-level-2-instant-approval-wiraswasta').val() != ''){
                            $('#slc-sektor-ekonomi-level-3-instant-approval-wiraswasta').empty();
                }
            }
            else if($('#slc-sektor-ekonomi-level-3-instant-approval-wiraswasta').val() != null &&
                    $('#slc-sektor-ekonomi-level-3-instant-approval-wiraswasta').select2('data')[0]['text'] != null){
                        $('#slc-sektor-ekonomi-level-1-instant-approval-wiraswasta').empty();
                        $('#slc-sektor-ekonomi-level-2-instant-approval-wiraswasta').empty();
                        file.getEconomicSectorFromLevel3ToLevel2andLevel1InstantApproval();
            }
        });

		$('#slc-sektor-ekonomi-level-1-tele-survey-wiraswasta').on('change', function() {
            var file = app.KycWiraswasta;
            $("#slc-sektor-ekonomi-level-2-tele-survey-wiraswasta").val('').trigger('change');
            file.getEconomicSectorLevel2TeleSurvey();
        });

        $('#slc-sektor-ekonomi-level-2-tele-survey-wiraswasta').on('change', function() {
            var file = app.KycWiraswasta;
            $('#slc-sektor-ekonomi-level-3-tele-survey-wiraswasta').val('').trigger('change');
            file.getEconomicSectorLevel3TeleSurvey();
            file.getEconomicSectorFromLevel3ToLevel2andLevel1TeleSurvey();
        });

        $('#slc-sektor-ekonomi-level-3-tele-survey-wiraswasta').on('change', function() {
            var file = app.KycWiraswasta;
            if($('#slc-sektor-ekonomi-level-3-tele-survey-wiraswasta').val() == null &&
               $('#slc-sektor-ekonomi-level-3-tele-survey-wiraswasta').select2('data')[0]['text'] == null){
                if($('#slc-sektor-ekonomi-level-1-tele-survey-wiraswasta').val() != '' && 
                   $('#slc-sektor-ekonomi-level-2-tele-survey-wiraswasta').val() == null){
                        $('#slc-sektor-ekonomi-level-2-tele-survey-wiraswasta').empty();
                }
                else if ($('#slc-sektor-ekonomi-level-1-tele-survey-wiraswasta').val() != '' && 
                         $('#slc-sektor-ekonomi-level-2-tele-survey-wiraswasta').val() != ''){
                            $('#slc-sektor-ekonomi-level-3-tele-survey-wiraswasta').empty();
                }
            }
            else if($('#slc-sektor-ekonomi-level-3-tele-survey-wiraswasta').val() != null &&
                    $('#slc-sektor-ekonomi-level-3-tele-survey-wiraswasta').select2('data')[0]['text'] != null){
                        $('#slc-sektor-ekonomi-level-1-tele-survey-wiraswasta').empty();
                        $('#slc-sektor-ekonomi-level-2-tele-survey-wiraswasta').empty();
                        file.getEconomicSectorFromLevel3ToLevel2andLevel1TeleSurvey();
            }
        });

		$('#slc-sektor-ekonomi-level-1-silent-survey-wiraswasta').on('change', function() {
            var file = app.KycWiraswasta;
            $("#slc-sektor-ekonomi-level-2-silent-survey-wiraswasta").val('').trigger('change');
            file.getEconomicSectorLevel2SilentSurvey();
        });

        $('#slc-sektor-ekonomi-level-2-silent-survey-wiraswasta').on('change', function() {
            var file = app.KycWiraswasta;
            $('#slc-sektor-ekonomi-level-3-silent-survey-wiraswasta').val('').trigger('change');
            file.getEconomicSectorLevel3SilentSurvey();
            file.getEconomicSectorFromLevel3ToLevel2andLevel1SilentSurvey();
        });

        $('#slc-sektor-ekonomi-level-3-silent-survey-wiraswasta').on('change', function() {
            var file = app.KycWiraswasta;
            if($('#slc-sektor-ekonomi-level-3-silent-survey-wiraswasta').val() == null &&
               $('#slc-sektor-ekonomi-level-3-silent-survey-wiraswasta').select2('data')[0]['text'] == null){
                if($('#slc-sektor-ekonomi-level-1-silent-survey-wiraswasta').val() != '' && 
                   $('#slc-sektor-ekonomi-level-2-silent-survey-wiraswasta').val() == null){
                        $('#slc-sektor-ekonomi-level-2-silent-survey-wiraswasta').empty();
                }
                else if ($('#slc-sektor-ekonomi-level-1-silent-survey-wiraswasta').val() != '' && 
                         $('#slc-sektor-ekonomi-level-2-silent-survey-wiraswasta').val() != ''){
                            $('#slc-sektor-ekonomi-level-3-silent-survey-wiraswasta').empty();
                }
            }
            else if($('#slc-sektor-ekonomi-level-3-silent-survey-wiraswasta').val() != null &&
                    $('#slc-sektor-ekonomi-level-3-silent-survey-wiraswasta').select2('data')[0]['text'] != null){
                        $('#slc-sektor-ekonomi-level-1-silent-survey-wiraswasta').empty();
                        $('#slc-sektor-ekonomi-level-2-silent-survey-wiraswasta').empty();
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
		file.getDetailTeleSurvey(order_id);

        $('#btn-save-instant-approval-wiraswasta').click(function () {
            var file = app.KycWiraswasta;
            file.uploadDocumentInstantApproval();

            if($('#slc-sektor-ekonomi-level-1-instant-approval-wiraswasta option:selected').val() == null || 
               $('#slc-sektor-ekonomi-level-1-instant-approval-wiraswasta option:selected').val() == ''){
                $('#err-slc-sektor-ekonomi-level-1-instant-approval-wiraswasta').html('Sektor Ekonomi Level 1 Wajib Diisi');
                $('#err-slc-sektor-ekonomi-level-1-instant-approval-wiraswasta').prop("hidden", false);
                $('.error-slc-sektor-ekonomi-level-1-instant-approval-wiraswasta').css({"border-color": "red"});
            }
            else if($('#slc-sektor-ekonomi-level-1-instant-approval-wiraswasta option:selected').val() != null || 
                    $('#slc-sektor-ekonomi-level-1-instant-approval-wiraswasta option:selected').val() != ''){
                        $('#err-slc-sektor-ekonomi-level-1-instant-approval-wiraswasta').html('');
                        $('#err-slc-sektor-ekonomi-level-1-instant-approval-wiraswasta').prop("hidden", true);
                        $('.error-slc-sektor-ekonomi-level-1-instant-approval-wiraswasta').css({"border-color": ""});
            }

            if($('#slc-sektor-ekonomi-level-2-instant-approval-wiraswasta option:selected').val() == null || 
               $('#slc-sektor-ekonomi-level-2-instant-approval-wiraswasta option:selected').val() == ''){
                $('#err-slc-sektor-ekonomi-level-2-instant-approval-wiraswasta').html('Sektor Ekonomi Level 2 Wajib Diisi');
                $('#err-slc-sektor-ekonomi-level-2-instant-approval-wiraswasta').prop("hidden", false);
                $('.error-slc-sektor-ekonomi-level-2-instant-approval-wiraswasta').css({"border-color": "red"});
            }
            else if($('#slc-sektor-ekonomi-level-2-instant-approval-wiraswasta option:selected').val() != null || 
                    $('#slc-sektor-ekonomi-level-2-instant-approval-wiraswasta option:selected').val() != ''){
                        $('#err-slc-sektor-ekonomi-level-2-instant-approval-wiraswasta').html('');
                        $('#err-slc-sektor-ekonomi-level-2-instant-approval-wiraswasta').prop("hidden", true);
                        $('.error-slc-sektor-ekonomi-level-2-instant-approval-wiraswasta').css({"border-color": ""});
            }

            if($('#slc-sektor-ekonomi-level-3-instant-approval-wiraswasta option:selected').val() == null || 
               $('#slc-sektor-ekonomi-level-3-instant-approval-wiraswasta option:selected').val() == ''){
                $('#err-slc-sektor-ekonomi-level-3-instant-approval-wiraswasta').html('Sektor Ekonomi Level 3 Wajib Diisi');
                $('#err-slc-sektor-ekonomi-level-3-instant-approval-wiraswasta').prop("hidden", false);
                $('.error-slc-sektor-ekonomi-level-3-instant-approval-wiraswasta').css({"border-color": "red"});
            }
            else if($('#slc-sektor-ekonomi-level-3-instant-approval-wiraswasta option:selected').val() != null || 
                    $('#slc-sektor-ekonomi-level-3-instant-approval-wiraswasta option:selected').val() != ''){
                        $('#err-slc-sektor-ekonomi-level-3-instant-approval-wiraswasta').html('');
                        $('#err-slc-sektor-ekonomi-level-3-instant-approval-wiraswasta').prop("hidden", true);
                        $('.error-slc-sektor-ekonomi-level-3-instant-approval-wiraswasta').css({"border-color": ""});
            }

            if($('#dokumen-bukti-usaha-instant-approval-wiraswasta').val() == ''){
                $('#err-dokumen-bukti-usaha-instant-approval-wiraswasta').html('Dokumen Bukti Usaha Wajib Diisi');
                $('#err-dokumen-bukti-usaha-instant-approval-wiraswasta').prop("hidden", false);
                $('.error-dokumen-bukti-usaha-instant-approval-wiraswasta').css({"border-color": "red"});
            }
            else if($('#dokumen-bukti-usaha-instant-approval-wiraswasta').val() != ''){
                        $('#err-dokumen-bukti-usaha-instant-approval-wiraswasta').html('');
                        $('#err-dokumen-bukti-usaha-instant-approval-wiraswasta').prop("hidden", true);
                        $('.error-dokumen-bukti-usaha-instant-approval-wiraswasta').css({"border-color": ""});
            }

            if($('#dokumen-bukti-keuangan-instant-approval-wiraswasta').val() == ''){
                $('#err-dokumen-bukti-keuangan-instant-approval-wiraswasta').html('Dokumen Bukti Keuangan Wajib Diisi');
                $('#err-dokumen-bukti-keuangan-instant-approval-wiraswasta').prop("hidden", false);
                $('.error-dokumen-bukti-keuangan-instant-approval-wiraswasta').css({"border-color": "red"});
            }
            else if($('#dokumen-bukti-keuangan-instant-approval-wiraswasta').val() != ''){
                        $('#err-dokumen-bukti-keuangan-instant-approval-wiraswasta').html('');
                        $('#err-dokumen-bukti-keuangan-instant-approval-wiraswasta').prop("hidden", true);
                        $('.error-dokumen-bukti-keuangan-instant-approval-wiraswasta').css({"border-color": ""});
            }

            if($('#foto-tempat-usaha-instant-approval-wiraswasta').val() == ''){
                $('#err-foto-tempat-usaha-instant-approval-wiraswasta').html('Foto Tempat Usaha Wajib Diisi');
                $('#err-foto-tempat-usaha-instant-approval-wiraswasta').prop("hidden", false);
                $('.error-foto-tempat-usaha-instant-approval-wiraswasta').css({"border-color": "red"});
            }
            else if($('#foto-tempat-usaha-instant-approval-wiraswasta').val() != ''){
                        $('#err-foto-tempat-usaha-instant-approval-wiraswasta').html('');
                        $('#err-foto-tempat-usaha-instant-approval-wiraswasta').prop("hidden", true);
                        $('.error-foto-tempat-usaha-instant-approval-wiraswasta').css({"border-color": ""});
            }

            if($('#foto-selfie-instant-approval-wiraswasta').val() == ''){
                $('#err-foto-selfie-instant-approval-wiraswasta').html('Foto Selfie Wajib Diisi');
                $('#err-foto-selfie-instant-approval-wiraswasta').prop("hidden", false);
                $('.error-foto-selfie-instant-approval-wiraswasta').css({"border-color": "red"});
            }
            else if($('#foto-selfie-instant-approval-wiraswasta').val() != ''){
                        $('#err-foto-selfie-instant-approval-wiraswasta').html('');
                        $('#err-foto-selfie-instant-approval-wiraswasta').prop("hidden", true);
                        $('.error-foto-selfie-instant-approval-wiraswasta').css({"border-color": ""});
            }

            if($('#inp-jarak-nasabah-ke-muf-instant-approval-wiraswasta').val() == ''){
                $('#err-inp-jarak-nasabah-ke-muf-instant-approval-wiraswasta').html('Jarak Tempat Nasabah ke MUF Wajib Diisi');
                $('#err-inp-jarak-nasabah-ke-muf-instant-approval-wiraswasta').prop("hidden", false);
                $('input[id=inp-jarak-nasabah-ke-muf-instant-approval-wiraswasta]').css({"border-color": "red"});
            }
            else if($('#inp-jarak-nasabah-ke-muf-instant-approval-wiraswasta').val() != ''){
                        $('#err-inp-jarak-nasabah-ke-muf-instant-approval-wiraswasta').html('');
                        $('#err-inp-jarak-nasabah-ke-muf-instant-approval-wiraswasta').prop("hidden", true);
                        $('input[id=inp-jarak-nasabah-ke-muf-instant-approval-wiraswasta]').css({"border-color": ""});
            }
        });

        $('#btn-save-silent-survey-wiraswasta').click(function () {
            var file = app.KycWiraswasta;

            //Validasi Button Silent Survey Wiraswasta

            // if($('#slc-sektor-ekonomi-level-1-silent-survey-wiraswasta option:selected').val() == null || 
            //    $('#slc-sektor-ekonomi-level-1-silent-survey-wiraswasta option:selected').val() == ''){
            //     $('#err-slc-sektor-ekonomi-level-1-silent-survey-wiraswasta').html('Sektor Ekonomi Level 1 Wajib Diisi');
            //     $('#err-slc-sektor-ekonomi-level-1-silent-survey-wiraswasta').prop("hidden", false);
            //     $('.error-slc-sektor-ekonomi-level-1-silent-survey-wiraswasta').css({"border-color": "red"});
            // }
            // else if($('#slc-sektor-ekonomi-level-1-silent-survey-wiraswasta option:selected').val() != null || 
            //         $('#slc-sektor-ekonomi-level-1-silent-survey-wiraswasta option:selected').val() != ''){
            //             $('#err-slc-sektor-ekonomi-level-1-silent-survey-wiraswasta').html('');
            //             $('#err-slc-sektor-ekonomi-level-1-silent-survey-wiraswasta').prop("hidden", true);
            //             $('.error-slc-sektor-ekonomi-level-1-silent-survey-wiraswasta').css({"border-color": ""});
            // }

            // if($('#slc-sektor-ekonomi-level-2-silent-survey-wiraswasta option:selected').val() == null || 
            //    $('#slc-sektor-ekonomi-level-2-silent-survey-wiraswasta option:selected').val() == ''){
            //     $('#err-slc-sektor-ekonomi-level-2-silent-survey-wiraswasta').html('Sektor Ekonomi Level 2 Wajib Diisi');
            //     $('#err-slc-sektor-ekonomi-level-2-silent-survey-wiraswasta').prop("hidden", false);
            //     $('.error-slc-sektor-ekonomi-level-2-silent-survey-wiraswasta').css({"border-color": "red"});
            // }
            // else if($('#slc-sektor-ekonomi-level-2-silent-survey-wiraswasta option:selected').val() != null || 
            //         $('#slc-sektor-ekonomi-level-2-silent-survey-wiraswasta option:selected').val() != ''){
            //             $('#err-slc-sektor-ekonomi-level-2-silent-survey-wiraswasta').html('');
            //             $('#err-slc-sektor-ekonomi-level-2-silent-survey-wiraswasta').prop("hidden", true);
            //             $('.error-slc-sektor-ekonomi-level-2-silent-survey-wiraswasta').css({"border-color": ""});
            // }

            // if($('#slc-sektor-ekonomi-level-3-silent-survey-wiraswasta option:selected').val() == null || 
            //    $('#slc-sektor-ekonomi-level-3-silent-survey-wiraswasta option:selected').val() == ''){
            //     $('#err-slc-sektor-ekonomi-level-3-silent-survey-wiraswasta').html('Sektor Ekonomi Level 3 Wajib Diisi');
            //     $('#err-slc-sektor-ekonomi-level-3-silent-survey-wiraswasta').prop("hidden", false);
            //     $('.error-slc-sektor-ekonomi-level-3-silent-survey-wiraswasta').css({"border-color": "red"});
            // }
            // else if($('#slc-sektor-ekonomi-level-3-silent-survey-wiraswasta option:selected').val() != null || 
            //         $('#slc-sektor-ekonomi-level-3-silent-survey-wiraswasta option:selected').val() != ''){
            //             $('#err-slc-sektor-ekonomi-level-3-silent-survey-wiraswasta').html('');
            //             $('#err-slc-sektor-ekonomi-level-3-silent-survey-wiraswasta').prop("hidden", true);
            //             $('.error-slc-sektor-ekonomi-level-3-silent-survey-wiraswasta').css({"border-color": ""});
            // }

            // if($('#dokumen-bukti-usaha-silent-survey-wiraswasta').val() == ''){
            //     $('#err-dokumen-bukti-usaha-silent-survey-wiraswasta').html('Dokumen Bukti Usaha Wajib Diisi');
            //     $('#err-dokumen-bukti-usaha-silent-survey-wiraswasta').prop("hidden", false);
            //     $('.error-dokumen-bukti-usaha-silent-survey-wiraswasta').css({"border-color": "red"});
            // }
            // else if($('#dokumen-bukti-usaha-silent-survey-wiraswasta').val() != ''){
            //             $('#err-dokumen-bukti-usaha-silent-survey-wiraswasta').html('');
            //             $('#err-dokumen-bukti-usaha-silent-survey-wiraswasta').prop("hidden", true);
            //             $('.error-dokumen-bukti-usaha-silent-survey-wiraswasta').css({"border-color": ""});
            // }

            // if($('#dokumen-bukti-keuangan-silent-survey-wiraswasta').val() == ''){
            //     $('#err-dokumen-bukti-keuangan-silent-survey-wiraswasta').html('Dokumen Bukti Keuangan Wajib Diisi');
            //     $('#err-dokumen-bukti-keuangan-silent-survey-wiraswasta').prop("hidden", false);
            //     $('.error-dokumen-bukti-keuangan-silent-survey-wiraswasta').css({"border-color": "red"});
            // }
            // else if($('#dokumen-bukti-keuangan-silent-survey-wiraswasta').val() != ''){
            //             $('#err-dokumen-bukti-keuangan-silent-survey-wiraswasta').html('');
            //             $('#err-dokumen-bukti-keuangan-silent-survey-wiraswasta').prop("hidden", true);
            //             $('.error-dokumen-bukti-keuangan-silent-survey-wiraswasta').css({"border-color": ""});
            // }

            // if($('#foto-tempat-usaha-silent-survey-wiraswasta').val() == ''){
            //     $('#err-foto-tempat-usaha-silent-survey-wiraswasta').html('Foto Tempat Usaha Wajib Diisi');
            //     $('#err-foto-tempat-usaha-silent-survey-wiraswasta').prop("hidden", false);
            //     $('.error-foto-tempat-usaha-silent-survey-wiraswasta').css({"border-color": "red"});
            // }
            // else if($('#foto-tempat-usaha-silent-survey-wiraswasta').val() != ''){
            //             $('#err-foto-tempat-usaha-silent-survey-wiraswasta').html('');
            //             $('#err-foto-tempat-usaha-silent-survey-wiraswasta').prop("hidden", true);
            //             $('.error-foto-tempat-usaha-silent-survey-wiraswasta').css({"border-color": ""});
            // }

            // if($('#foto-selfie-silent-survey-wiraswasta').val() == ''){
            //     $('#err-foto-selfie-silent-survey-wiraswasta').html('Foto Selfie Wajib Diisi');
            //     $('#err-foto-selfie-silent-survey-wiraswasta').prop("hidden", false);
            //     $('.error-foto-selfie-silent-survey-wiraswasta').css({"border-color": "red"});
            // }
            // else if($('#foto-selfie-silent-survey-wiraswasta').val() != ''){
            //             $('#err-foto-selfie-silent-survey-wiraswasta').html('');
            //             $('#err-foto-selfie-silent-survey-wiraswasta').prop("hidden", true);
            //             $('.error-foto-selfie-silent-survey-wiraswasta').css({"border-color": ""});
            // }

            // if($('#inp-jarak-nasabah-ke-muf-silent-survey-wiraswasta').val() == ''){
            //     $('#err-inp-jarak-nasabah-ke-muf-silent-survey-wiraswasta').html('Jarak Tempat Nasabah ke MUF Wajib Diisi');
            //     $('#err-inp-jarak-nasabah-ke-muf-silent-survey-wiraswasta').prop("hidden", false);
            //     $('input[id=inp-jarak-nasabah-ke-muf-silent-survey-wiraswasta]').css({"border-color": "red"});
            // }
            // else if($('#inp-jarak-nasabah-ke-muf-silent-survey-wiraswasta').val() != ''){
            //             $('#err-inp-jarak-nasabah-ke-muf-silent-survey-wiraswasta').html('');
            //             $('#err-inp-jarak-nasabah-ke-muf-silent-survey-wiraswasta').prop("hidden", true);
            //             $('input[id=inp-jarak-nasabah-ke-muf-silent-survey-wiraswasta]').css({"border-color": ""});
            // }

            file.insertSilentSurveyWiraswasta();
            
        });

        $('#btn-save-tele-survey-wiraswasta').click(function () {
            var file = app.KycWiraswasta;
            file.uploadDocumentTeleSurvey();

            if($('#slc-sektor-ekonomi-level-1-tele-survey-wiraswasta option:selected').val() == null || 
               $('#slc-sektor-ekonomi-level-1-tele-survey-wiraswasta option:selected').val() == ''){
                $('#err-slc-sektor-ekonomi-level-1-tele-survey-wiraswasta').html('Sektor Ekonomi Level 1 Wajib Diisi');
                $('#err-slc-sektor-ekonomi-level-1-tele-survey-wiraswasta').prop("hidden", false);
                $('.error-slc-sektor-ekonomi-level-1-tele-survey-wiraswasta').css({"border-color": "red"});
            }
            else if($('#slc-sektor-ekonomi-level-1-tele-survey-wiraswasta option:selected').val() != null || 
                    $('#slc-sektor-ekonomi-level-1-tele-survey-wiraswasta option:selected').val() != ''){
                        $('#err-slc-sektor-ekonomi-level-1-tele-survey-wiraswasta').html('');
                        $('#err-slc-sektor-ekonomi-level-1-tele-survey-wiraswasta').prop("hidden", true);
                        $('.error-slc-sektor-ekonomi-level-1-tele-survey-wiraswasta').css({"border-color": ""});
            }

            if($('#slc-sektor-ekonomi-level-2-tele-survey-wiraswasta option:selected').val() == null || 
               $('#slc-sektor-ekonomi-level-2-tele-survey-wiraswasta option:selected').val() == ''){
                $('#err-slc-sektor-ekonomi-level-2-tele-survey-wiraswasta').html('Sektor Ekonomi Level 2 Wajib Diisi');
                $('#err-slc-sektor-ekonomi-level-2-tele-survey-wiraswasta').prop("hidden", false);
                $('.error-slc-sektor-ekonomi-level-2-tele-survey-wiraswasta').css({"border-color": "red"});
            }
            else if($('#slc-sektor-ekonomi-level-2-tele-survey-wiraswasta option:selected').val() != null || 
                    $('#slc-sektor-ekonomi-level-2-tele-survey-wiraswasta option:selected').val() != ''){
                        $('#err-slc-sektor-ekonomi-level-2-tele-survey-wiraswasta').html('');
                        $('#err-slc-sektor-ekonomi-level-2-tele-survey-wiraswasta').prop("hidden", true);
                        $('.error-slc-sektor-ekonomi-level-2-tele-survey-wiraswasta').css({"border-color": ""});
            }

            if($('#slc-sektor-ekonomi-level-3-tele-survey-wiraswasta option:selected').val() == null || 
               $('#slc-sektor-ekonomi-level-3-tele-survey-wiraswasta option:selected').val() == ''){
                $('#err-slc-sektor-ekonomi-level-3-tele-survey-wiraswasta').html('Sektor Ekonomi Level 3 Wajib Diisi');
                $('#err-slc-sektor-ekonomi-level-3-tele-survey-wiraswasta').prop("hidden", false);
                $('.error-slc-sektor-ekonomi-level-3-tele-survey-wiraswasta').css({"border-color": "red"});
            }
            else if($('#slc-sektor-ekonomi-level-3-tele-survey-wiraswasta option:selected').val() != null || 
                    $('#slc-sektor-ekonomi-level-3-tele-survey-wiraswasta option:selected').val() != ''){
                        $('#err-slc-sektor-ekonomi-level-3-tele-survey-wiraswasta').html('');
                        $('#err-slc-sektor-ekonomi-level-3-tele-survey-wiraswasta').prop("hidden", true);
                        $('.error-slc-sektor-ekonomi-level-3-tele-survey-wiraswasta').css({"border-color": ""});
            }

            if($('#dokumen-bukti-usaha-tele-survey-wiraswasta').val() == ''){
                $('#err-dokumen-bukti-usaha-tele-survey-wiraswasta').html('Dokumen Bukti Usaha Wajib Diisi');
                $('#err-dokumen-bukti-usaha-tele-survey-wiraswasta').prop("hidden", false);
                $('.error-dokumen-bukti-usaha-tele-survey-wiraswasta').css({"border-color": "red"});
            }
            else if($('#dokumen-bukti-usaha-tele-survey-wiraswasta').val() != ''){
                        $('#err-dokumen-bukti-usaha-tele-survey-wiraswasta').html('');
                        $('#err-dokumen-bukti-usaha-tele-survey-wiraswasta').prop("hidden", true);
                        $('.error-dokumen-bukti-usaha-tele-survey-wiraswasta').css({"border-color": ""});
            }

            if($('#dokumen-bukti-keuangan-tele-survey-wiraswasta').val() == ''){
                $('#err-dokumen-bukti-keuangan-tele-survey-wiraswasta').html('Dokumen Bukti Keuangan Wajib Diisi');
                $('#err-dokumen-bukti-keuangan-tele-survey-wiraswasta').prop("hidden", false);
                $('.error-dokumen-bukti-keuangan-tele-survey-wiraswasta').css({"border-color": "red"});
            }
            else if($('#dokumen-bukti-keuangan-tele-survey-wiraswasta').val() != ''){
                        $('#err-dokumen-bukti-keuangan-tele-survey-wiraswasta').html('');
                        $('#err-dokumen-bukti-keuangan-tele-survey-wiraswasta').prop("hidden", true);
                        $('.error-dokumen-bukti-keuangan-tele-survey-wiraswasta').css({"border-color": ""});
            }

            if($('#foto-tempat-usaha-tele-survey-wiraswasta').val() == ''){
                $('#err-foto-tempat-usaha-tele-survey-wiraswasta').html('Foto Tempat Usaha Wajib Diisi');
                $('#err-foto-tempat-usaha-tele-survey-wiraswasta').prop("hidden", false);
                $('.error-foto-tempat-usaha-tele-survey-wiraswasta').css({"border-color": "red"});
            }
            else if($('#foto-tempat-usaha-tele-survey-wiraswasta').val() != ''){
                        $('#err-foto-tempat-usaha-tele-survey-wiraswasta').html('');
                        $('#err-foto-tempat-usaha-tele-survey-wiraswasta').prop("hidden", true);
                        $('.error-foto-tempat-usaha-tele-survey-wiraswasta').css({"border-color": ""});
            }

            if($('#foto-selfie-tele-survey-wiraswasta').val() == ''){
                $('#err-foto-selfie-tele-survey-wiraswasta').html('Foto Selfie Wajib Diisi');
                $('#err-foto-selfie-tele-survey-wiraswasta').prop("hidden", false);
                $('.error-foto-selfie-tele-survey-wiraswasta').css({"border-color": "red"});
            }
            else if($('#foto-selfie-tele-survey-wiraswasta').val() != ''){
                        $('#err-foto-selfie-tele-survey-wiraswasta').html('');
                        $('#err-foto-selfie-tele-survey-wiraswasta').prop("hidden", true);
                        $('.error-foto-selfie-tele-survey-wiraswasta').css({"border-color": ""});
            }

            if($('#inp-jarak-nasabah-ke-muf-tele-survey-wiraswasta').val() == ''){
                $('#err-inp-jarak-nasabah-ke-muf-tele-survey-wiraswasta').html('Jarak Tempat Nasabah ke MUF Wajib Diisi');
                $('#err-inp-jarak-nasabah-ke-muf-tele-survey-wiraswasta').prop("hidden", false);
                $('input[id=inp-jarak-nasabah-ke-muf-tele-survey-wiraswasta]').css({"border-color": "red"});
            }
            else if($('#inp-jarak-nasabah-ke-muf-tele-survey-wiraswasta').val() != ''){
                        $('#err-inp-jarak-nasabah-ke-muf-tele-survey-wiraswasta').html('');
                        $('#err-inp-jarak-nasabah-ke-muf-tele-survey-wiraswasta').prop("hidden", true);
                        $('input[id=inp-jarak-nasabah-ke-muf-tele-survey-wiraswasta]').css({"border-color": ""});
            }
        });

        $('#dokumen-bukti-usaha-silent-survey-wiraswasta').on('change', function(){
            if($('#dokumen-bukti-usaha-silent-survey-wiraswasta').val() != undefined){
                var BuktiUsahaSilentSurvey1 = $('#dokumen-bukti-usaha-silent-survey-wiraswasta')[0].files[0];
                
                if(BuktiUsahaSilentSurvey1 != undefined){
                    var fileUploadDocument = BuktiUsahaSilentSurvey1;
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
                                console.log("BASE PDF BU 1",base64);
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            localStorage.setItem("bukti_usaha_silent_survey_wiraswasta", base64);
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
                                    base64BuktiUsahaSilentSurveyWiraswasta = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64BuktiUsahaSilentSurveyWiraswasta = base64BuktiUsahaSilentSurveyWiraswasta;
                                    localStorage.setItem("bukti_usaha_silent_survey_wiraswasta", base64BuktiUsahaSilentSurveyWiraswasta);
                                    console.log("BASE JPG BU 1",base64BuktiUsahaSilentSurveyWiraswasta);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                        } 
                    }
                }

            }
        });
        
        $('#newdokbuktiusahasilentsurvey').on('change', '.dokumen-bukti-usaha-silent-survey-wiraswasta-2', function () {
            if($('.dokumen-bukti-usaha-silent-survey-wiraswasta-2').val() != undefined){
                var BuktiUsahaSilentSurvey2 = $('.dokumen-bukti-usaha-silent-survey-wiraswasta-2')[0].files[0];

                if(BuktiUsahaSilentSurvey2 != undefined){
                    var fileUploadDocument = BuktiUsahaSilentSurvey2;
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
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            console.log("BASE PDF BU 2",base64);
                            localStorage.setItem("bukti_usaha_silent_survey_wiraswasta_2", base64);
                            
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
                                    base64BuktiUsahaSilentSurveyWiraswasta = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64BuktiUsahaSilentSurveyWiraswasta = base64BuktiUsahaSilentSurveyWiraswasta;
                                    localStorage.setItem("bukti_usaha_silent_survey_wiraswasta_2", base64BuktiUsahaSilentSurveyWiraswasta);
                                    console.log("BASE JPG BU 2",base64BuktiUsahaSilentSurveyWiraswasta);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                        } 
                    }
                }

            }
        });

        $('#dokumen-bukti-keuangan-silent-survey-wiraswasta').on('change', function(){
            if($('#dokumen-bukti-keuangan-silent-survey-wiraswasta').val() != undefined){
                var BuktiKeuanganSilentSurvey1 = $('#dokumen-bukti-keuangan-silent-survey-wiraswasta')[0].files[0];

                if(BuktiKeuanganSilentSurvey1 != undefined){
                    //Bukti keuangan Instant Approval 1
                    var fileUploadDocument = BuktiKeuanganSilentSurvey1;
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
                                console.log("BASE PDF BK 1", base64);
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            localStorage.setItem("bukti_keuangan_silent_survey_wiraswasta", base64);
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
                                    base64BuktiKeuanganSilentSurveyWiraswasta = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64BuktiKeuanganSilentSurveyWiraswasta = base64BuktiKeuanganSilentSurveyWiraswasta;
                                    localStorage.setItem("bukti_keuangan_silent_survey_wiraswasta", base64BuktiKeuanganSilentSurveyWiraswasta);
                                    console.log("BASE JPG BK 1", base64BuktiKeuanganSilentSurveyWiraswasta);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);        
                        } 
                    }
                }
            }
        });

        $('#newdokbuktikeuangansilentsurvey').on('change', '.dokumen-bukti-keuangan-silent-survey-wiraswasta-2', function () {
            if($('.dokumen-bukti-keuangan-silent-survey-wiraswasta-2').val() != undefined){
                var BuktiKeuanganSilentSurvey2 = $('.dokumen-bukti-keuangan-silent-survey-wiraswasta-2')[0].files[0];
                if(BuktiKeuanganSilentSurvey2 != undefined){
                    //Bukti Keuangan Instant Approval 2
                    var fileUploadDocument = BuktiKeuanganSilentSurvey2;
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
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            console.log("BASE PDF BK 2", base64);
                            localStorage.setItem("bukti_keuangan_silent_survey_wiraswasta_2", base64);
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
                                    base64BuktiKeuanganSilentSurveyWiraswasta2 = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64BuktiKeuanganSilentSurveyWiraswasta2 = base64BuktiKeuanganSilentSurveyWiraswasta2;
                                    localStorage.setItem("bukti_keuangan_silent_survey_wiraswasta_2", base64BuktiKeuanganSilentSurveyWiraswasta2);
                                    console.log("BASE JPG BK 2", base64BuktiKeuanganSilentSurveyWiraswasta2);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);        
                        } 
                    }
                }
            }
        });

        $('#newdokbuktikeuangansilentsurvey').on('change', '.dokumen-bukti-keuangan-silent-survey-wiraswasta-3', function () {
            if($('.dokumen-bukti-keuangan-silent-survey-wiraswasta-3').val() != undefined){
                var BuktiKeuanganSilentSurvey3 = $('.dokumen-bukti-keuangan-silent-survey-wiraswasta-3')[0].files[0];
                
                if(BuktiKeuanganSilentSurvey3 != undefined){
                    //Bukti Keuangan Instant Approval 3
                    var fileUploadDocument = BuktiKeuanganSilentSurvey3;
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
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            console.log("BASE PDF BK 3", base64);
                            localStorage.setItem("bukti_keuangan_silent_survey_wiraswasta_3", base64);
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
                                    base64BuktiKeuanganSilentSurveyWiraswasta3 = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64BuktiKeuanganSilentSurveyWiraswasta3 = base64BuktiKeuanganSilentSurveyWiraswasta3;
                                    localStorage.setItem("bukti_keuangan_silent_survey_wiraswasta_3", base64BuktiKeuanganSilentSurveyWiraswasta3);
                                    console.log("BASE JPG BK 3", base64BuktiKeuanganSilentSurveyWiraswasta3);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);        
                        } 
                    }
                }
            }
        });

        $('#newdokbuktikeuangansilentsurvey').on('change', '.dokumen-bukti-keuangan-silent-survey-wiraswasta-4', function () {
            if($('.dokumen-bukti-keuangan-silent-survey-wiraswasta-4').val() != undefined){
                var BuktiKeuanganSilentSurvey4 = $('.dokumen-bukti-keuangan-silent-survey-wiraswasta-4')[0].files[0];

                if(BuktiKeuanganSilentSurvey4 != undefined){
                    //Bukti Keuangan Instant Approval 4
                    var fileUploadDocument = BuktiKeuanganSilentSurvey4;
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
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            console.log("BASE PDF BK 4", base64);
                            localStorage.setItem("bukti_keuangan_silent_survey_wiraswasta_4", base64);
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
                                    base64BuktiKeuanganSilentSurveyWiraswasta4 = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64BuktiKeuanganSilentSurveyWiraswasta4 = base64BuktiKeuanganSilentSurveyWiraswasta4;
                                    localStorage.setItem("bukti_keuangan_silent_survey_wiraswasta_4", base64BuktiKeuanganSilentSurveyWiraswasta4);
                                    console.log("BASE JPG BK 4", base64BuktiKeuanganSilentSurveyWiraswasta4);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);        
                        } 
                    }
                }
            }
        });

        $('#newdokbuktikeuangansilentsurvey').on('change', '.dokumen-bukti-keuangan-silent-survey-wiraswasta-5', function () {
            if($('.dokumen-bukti-keuangan-silent-survey-wiraswasta-5').val() != undefined){
                var BuktiKeuanganSilentSurvey5 = $('.dokumen-bukti-keuangan-silent-survey-wiraswasta-5')[0].files[0];

                if(BuktiKeuanganSilentSurvey5 != undefined){
                    //Bukti Keuangan Instant Approval 5
                    var fileUploadDocument = BuktiKeuanganSilentSurvey5;
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
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            console.log("BASE PDF BK 5", base64);
                            localStorage.setItem("bukti_keuangan_silent_survey_wiraswasta_5", base64);
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
                                    base64BuktiKeuanganSilentSurveyWiraswasta5 = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64BuktiKeuanganSilentSurveyWiraswasta5 = base64BuktiKeuanganSilentSurveyWiraswasta5;
                                    localStorage.setItem("bukti_keuangan_silent_survey_wiraswasta_5", base64BuktiKeuanganSilentSurveyWiraswasta5);
                                    console.log("BASE JPG BK 5", base64BuktiKeuanganSilentSurveyWiraswasta5);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);        
                        } 
                    }
                }
            }
        });

        $('#newdokbuktikeuangansilentsurvey').on('change', '.dokumen-bukti-keuangan-silent-survey-wiraswasta-6', function () {
            if($('.dokumen-bukti-keuangan-silent-survey-wiraswasta-6').val() != undefined){
                var BuktiKeuanganSilentSurvey6 = $('.dokumen-bukti-keuangan-silent-survey-wiraswasta-6')[0].files[0];
            }
            
            if(BuktiKeuanganSilentSurvey6 != undefined){
                //Bukti Keuangan Instant Approval 6
                var fileUploadDocument = BuktiKeuanganSilentSurvey6;
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
                        };
                        fileReader.readAsDataURL(fileToLoad);
                        console.log("BASE PDF BK 6", base64);
                        localStorage.setItem("bukti_keuangan_silent_survey_wiraswasta_6", base64);
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
                                base64BuktiKeuanganSilentSurveyWiraswasta6 = canvas.toDataURL().replace("data:", "")
                                .replace(/^.+,/, "");
                                imageBase64BuktiKeuanganSilentSurveyWiraswasta6 = base64BuktiKeuanganSilentSurveyWiraswasta6;
                                localStorage.setItem("bukti_keuangan_silent_survey_wiraswasta_6", base64BuktiKeuanganSilentSurveyWiraswasta6);
                                console.log("BASE JPG BK 6", base64BuktiKeuanganSilentSurveyWiraswasta6);
                            }
                            image.src = event.target.result;
                        }
                        reader.readAsDataURL(fileUploadDocument);        
                    } 
                }
            }

        });
        
        $('#foto-tempat-usaha-silent-survey-wiraswasta').on('change', function(){
            if($('#foto-tempat-usaha-silent-survey-wiraswasta').val() != undefined){
                var TempatUsahaInstanApproval = $('#foto-tempat-usaha-silent-survey-wiraswasta')[0].files[0];
                if(TempatUsahaInstanApproval != undefined){
                    //Foto Tempat Usaha Instant Approval
                    var fileUploadDocument = TempatUsahaInstanApproval;
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
                                console.log("BASE PDF FTU", base64);
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            localStorage.setItem("foto_tempat_usaha_silent_survey_wiraswasta", base64);
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
                                    base64FotoTempatUsahaSilentSurveyWiraswasta = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64FotoTempatUsahaSilentSurveyWiraswasta = base64FotoTempatUsahaSilentSurveyWiraswasta;
                                    localStorage.setItem("foto_tempat_usaha_silent_survey_wiraswasta", base64FotoTempatUsahaSilentSurveyWiraswasta);
                                    console.log("BASE JPG FTU", base64FotoTempatUsahaSilentSurveyWiraswasta);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
        
                        } 
                    }
                }
            }
        });

        $('#foto-selfie-silent-survey-wiraswasta').on('change', function(){
            if($('#foto-selfie-silent-survey-wiraswasta').val() != undefined){
                var SelfieInstanApproval = $('#foto-selfie-silent-survey-wiraswasta')[0].files[0];
                if(SelfieInstanApproval != undefined){
                    //Foto Tempat Usaha Instant Approval
                    var fileUploadDocument = SelfieInstanApproval;
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
                                console.log("BASE PDF FS", base64);
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            localStorage.setItem("foto_selfie_silent_survey_wiraswasta", base64);
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
                                    base64FotoSelfieSilentSurveyWiraswasta = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64FotoSelfieSilentSurveyWiraswasta = base64FotoSelfieSilentSurveyWiraswasta;
                                    localStorage.setItem("foto_selfie_silent_survey_wiraswasta", base64FotoSelfieSilentSurveyWiraswasta);
                                    console.log("BASE JPG FS", base64FotoSelfieSilentSurveyWiraswasta);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                        } 
                    }
                }
            }
        });
        
    },
	
	getEconomicSectorLevel1InstantApproval: function () {
        var file = app.KycWiraswasta;
        $("#slc-sektor-ekonomi-level-1-instant-approval-wiraswasta").select2({
            theme: 'bootstrap4',
            placeholder: "PILIH SEKTOR EKONOMI (LEVEL 1)",
            allowClear: true,
            minimumInputLength: 4,
            containerCssClass: "error-slc-sektor-ekonomi-level-1-instant-approval-wiraswasta",
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
        var file = app.KycWiraswasta;
        var param_1 = $('#slc-sektor-ekonomi-level-1-instant-approval-wiraswasta').val();
        if (param_1 == null || param_1 == '') {
            param_1 = '';
        }

        $("#slc-sektor-ekonomi-level-2-instant-approval-wiraswasta").select2({
            theme: 'bootstrap4',
            placeholder: "PILIH SEKTOR EKONOMI (LEVEL 2)",
            allowClear: true,
            minimumInputLength: 4,
            containerCssClass: "error-slc-sektor-ekonomi-level-2-instant-approval-wiraswasta",
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
        var file = app.KycWiraswasta;
        var param_1 = $('#slc-sektor-ekonomi-level-1-instant-approval-wiraswasta').val();
        var param_2 = $('#slc-sektor-ekonomi-level-2-instant-approval-wiraswasta').val();

        if (param_1 == null || param_1 == '') {
            param_1 = '';
        }
        if (param_2 == null || param_2 == '') {
            param_2 = '';
        }

        if (param_1 != '' || param_1 != null && param_2 != '' || param_2 != null){
            $("#slc-sektor-ekonomi-level-3-instant-approval-wiraswasta").select2({
                theme: 'bootstrap4',
                placeholder: "PILIH SEKTOR EKONOMI (LEVEL 3)",
                allowClear: true,
                minimumInputLength: 4,
                containerCssClass: "error-slc-sektor-ekonomi-level-3-instant-approval-wiraswasta",
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

            });
        }
        
        if (param_1 == '' || param_1 == null && param_2 == '' || param_2 == null){
            $("#slc-sektor-ekonomi-level-3-instant-approval-wiraswasta").select2({
                theme: 'bootstrap4',
                placeholder: "PILIH SEKTOR EKONOMI (LEVEL 3)",
                allowClear: true,
                minimumInputLength: 4,
                containerCssClass: "error-slc-sektor-ekonomi-level-3-instant-approval-wiraswasta",
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
        var file = app.KycWiraswasta;
        var param = $('#slc-sektor-ekonomi-level-3-instant-approval-wiraswasta').select2('data')[0]['text'];
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
                        $("#slc-sektor-ekonomi-level-1-instant-approval-wiraswasta").append("<option value='"+data[0].id_1+"' selected>"+data[0].text_1+"</option>");
                        $("#slc-sektor-ekonomi-level-1-instant-approval-wiraswasta").val(data[0].id_1);
                        $("#slc-sektor-ekonomi-level-2-instant-approval-wiraswasta").append("<option value='"+data[0].id_2+"' selected>"+data[0].text_2+"</option>");
                        $("#slc-sektor-ekonomi-level-2-instant-approval-wiraswasta").val(data[0].id_2);
                }
            });
        }
    },

	getEconomicSectorLevel1TeleSurvey: function () {
        var file = app.KycWiraswasta;
        $("#slc-sektor-ekonomi-level-1-tele-survey-wiraswasta").select2({
            theme: 'bootstrap4',
            placeholder: "PILIH SEKTOR EKONOMI (LEVEL 1)",
            allowClear: true,
            minimumInputLength: 4,
            containerCssClass: "error-slc-sektor-ekonomi-level-1-tele-survey-wiraswasta",
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
        var file = app.KycWiraswasta;
        var param_1 = $('#slc-sektor-ekonomi-level-1-tele-survey-wiraswasta').val();

        if (param_1 == null || param_1 == '') {
            param_1 = '';
        }

        $("#slc-sektor-ekonomi-level-2-tele-survey-wiraswasta").select2({
            theme: 'bootstrap4',
            placeholder: "PILIH SEKTOR EKONOMI (LEVEL 2)",
            allowClear: true,
            minimumInputLength: 4,
            containerCssClass: "error-slc-sektor-ekonomi-level-2-tele-survey-wiraswasta",
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
        var file = app.KycWiraswasta;
        var param_1 = $('#slc-sektor-ekonomi-level-1-tele-survey-wiraswasta').val();
        var param_2 = $('#slc-sektor-ekonomi-level-2-tele-survey-wiraswasta').val();

        if (param_1 == null || param_1 == '') {
            param_1 = '';
        }

        if (param_2 == null || param_2 == '') {
            param_2 = '';
        }

        if (param_1 != '' || param_1 != null && param_2 != '' || param_2 != null){

            $("#slc-sektor-ekonomi-level-3-tele-survey-wiraswasta").select2({
                theme: 'bootstrap4',
                placeholder: "PILIH SEKTOR EKONOMI (LEVEL 3)",
                allowClear: true,
                minimumInputLength: 4,
                containerCssClass: "error-slc-sektor-ekonomi-level-3-tele-survey-wiraswasta",
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
            $("#slc-sektor-ekonomi-level-3-tele-survey-wiraswasta").select2({
                theme: 'bootstrap4',
                placeholder: "PILIH SEKTOR EKONOMI (LEVEL 3)",
                allowClear: true,
                minimumInputLength: 4,
                containerCssClass: "error-slc-sektor-ekonomi-level-3-tele-survey-wiraswasta",
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
        var file = app.KycWiraswasta;
        var param = $('#slc-sektor-ekonomi-level-3-tele-survey-wiraswasta').select2('data')[0]['text'];
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
                        $("#slc-sektor-ekonomi-level-1-tele-survey-wiraswasta").append("<option value='"+data[0].id_1+"' selected>"+data[0].text_1+"</option>");
                        $("#slc-sektor-ekonomi-level-1-tele-survey-wiraswasta").val(data[0].id_1);
                        $("#slc-sektor-ekonomi-level-2-tele-survey-wiraswasta").append("<option value='"+data[0].id_2+"' selected>"+data[0].text_2+"</option>");
                        $("#slc-sektor-ekonomi-level-2-tele-survey-wiraswasta").val(data[0].id_2);
                }
            });
        }
    },

	getEconomicSectorLevel1SilentSurvey: function () {
        var file = app.KycWiraswasta;
        $("#slc-sektor-ekonomi-level-1-silent-survey-wiraswasta").select2({
            theme: 'bootstrap4',
            placeholder: "PILIH SEKTOR EKONOMI (LEVEL 1)",
            allowClear: true,
            minimumInputLength: 4,
            containerCssClass: "error-slc-sektor-ekonomi-level-1-silent-survey-wiraswasta",
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
        var file = app.KycWiraswasta;
        var param_1 = $('#slc-sektor-ekonomi-level-1-silent-survey-wiraswasta').val();

        if (param_1 == null || param_1 == '') {
            param_1 = '';
        }

        $("#slc-sektor-ekonomi-level-2-silent-survey-wiraswasta").select2({
            theme: 'bootstrap4',
            placeholder: "PILIH SEKTOR EKONOMI (LEVEL 2)",
            allowClear: true,
            minimumInputLength: 4,
            containerCssClass: "error-slc-sektor-ekonomi-level-2-silent-survey-wiraswasta",
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
        var file = app.KycWiraswasta;
        var param_1 = $('#slc-sektor-ekonomi-level-1-silent-survey-wiraswasta').val();
        var param_2 = $('#slc-sektor-ekonomi-level-2-silent-survey-wiraswasta').val();

        if (param_1 == null || param_1 == '') {
            param_1 = '';
        }

        if (param_2 == null || param_2 == '') {
            param_2 = '';
        }

        if (param_1 != '' || param_1 != null && param_2 != '' || param_2 != null){
        
            $("#slc-sektor-ekonomi-level-3-silent-survey-wiraswasta").select2({
                theme: 'bootstrap4',
                placeholder: "PILIH SEKTOR EKONOMI (LEVEL 3)",
                allowClear: true,
                minimumInputLength: 4,
                containerCssClass: "error-slc-sektor-ekonomi-level-3-silent-survey-wiraswasta",
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
            $("#slc-sektor-ekonomi-level-3-silent-survey-wiraswasta").select2({
                theme: 'bootstrap4',
                placeholder: "PILIH SEKTOR EKONOMI (LEVEL 3)",
                allowClear: true,
                minimumInputLength: 4,
                containerCssClass: "error-slc-sektor-ekonomi-level-3-silent-survey-wiraswasta",
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
        var file = app.KycWiraswasta;
        var param = $('#slc-sektor-ekonomi-level-3-silent-survey-wiraswasta').select2('data')[0]['text'];
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
                        $("#slc-sektor-ekonomi-level-1-silent-survey-wiraswasta").append("<option value='"+data[0].id_1+"' selected>"+data[0].text_1+"</option>");
                        $("#slc-sektor-ekonomi-level-1-silent-survey-wiraswasta").val(data[0].id_1);
                        $("#slc-sektor-ekonomi-level-2-silent-survey-wiraswasta").append("<option value='"+data[0].id_2+"' selected>"+data[0].text_2+"</option>");
                        $("#slc-sektor-ekonomi-level-2-silent-survey-wiraswasta").val(data[0].id_2);
                }
            });
        }
    },

    uploadDocumentInstantApproval: function () {

        if($('#dokumen-bukti-usaha-instant-approval-wiraswasta').val() != undefined){
            var BuktiUsahaInstantApproval1 = $('#dokumen-bukti-usaha-instant-approval-wiraswasta')[0].files[0];
        }
        
        if($('#dokumen-bukti-usaha-instant-approval-wiraswasta-2').val() != undefined){
            var BuktiUsahaInstantApproval2 = $('#dokumen-bukti-usaha-instant-approval-wiraswasta-2')[0].files[0];
        }

        if($('#dokumen-bukti-keuangan-instant-approval-wiraswasta').val() != undefined){
            var BuktiKeuanganInstantApproval1 = $('#dokumen-bukti-keuangan-instant-approval-wiraswasta')[0].files[0];
        }

        if($('#dokumen-bukti-keuangan-instant-approval-wiraswasta-2').val() != undefined){
            var BuktiKeuanganInstantApproval2 = $('#dokumen-bukti-keuangan-instant-approval-wiraswasta-2')[0].files[0];
        }
		
        if($('#dokumen-bukti-keuangan-instant-approval-wiraswasta-3').val() != undefined){
            var BuktiKeuanganInstantApproval3 = $('#dokumen-bukti-keuangan-instant-approval-wiraswasta-3')[0].files[0];
        }

        if($('#dokumen-bukti-keuangan-instant-approval-wiraswasta-4').val() != undefined){
            var BuktiKeuanganInstantApproval4 = $('#dokumen-bukti-keuangan-instant-approval-wiraswasta-4')[0].files[0];
        }

        if($('#dokumen-bukti-keuangan-instant-approval-wiraswasta-5').val() != undefined){
            var BuktiKeuanganInstantApproval5 = $('#dokumen-bukti-keuangan-instant-approval-wiraswasta-5')[0].files[0];
        }

        if($('#dokumen-bukti-keuangan-instant-approval-wiraswasta-6').val() != undefined){
            var BuktiKeuanganInstantApproval6 = $('#dokumen-bukti-keuangan-instant-approval-wiraswasta-6')[0].files[0];
        }

        if($('#foto-tempat-usaha-instant-approval-wiraswasta').val() != undefined){
            var TempatUsahaInstanApproval = $('#foto-tempat-usaha-instant-approval-wiraswasta')[0].files[0];
        }

        if($('#foto-selfie-instant-approval-wiraswasta').val() != undefined){
            var SelfieInstanApproval = $('#foto-selfie-instant-approval-wiraswasta')[0].files[0];
        }

        for(var x=0; x < 10; x++){
                    
            if(x == 0){
                if(BuktiUsahaInstantApproval1 != undefined){
                    var fileUploadDocument = BuktiUsahaInstantApproval1;
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
                                console.log("BASE PDF BU 1",base64);
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            $("#base64-bukti-usaha-instant-approval-wiraswasta-1").val(base64);
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
                                    console.log("BASE JPG BU 1",base64String);
                                    // $("#btn-choose-file-upload-document").attr("src", base64String);
                                    $("#base64-bukti-usaha-instant-approval-wiraswasta-1").val(base64String);
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
                if(BuktiUsahaInstantApproval2 != undefined){
                    var fileUploadDocument = BuktiUsahaInstantApproval2;
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
                                console.log("BASE PDF BU 2",base64);
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            $("#base64-bukti-usaha-instant-approval-wiraswasta-2").val(base64);
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
                                    console.log("BASE JPG BU 2",base64String);
                                    // $("#btn-choose-file-upload-document").attr("src", base64String);
                                    $("#base64-bukti-usaha-instant-approval-wiraswasta-2").val(base64String);
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
                if(BuktiKeuanganInstantApproval1 != undefined){
                    //Bukti keuangan Instant Approval 1
                    var fileUploadDocument = BuktiKeuanganInstantApproval1;
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
                                console.log("BASE PDF BK 1", base64);
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            $("#base64-bukti-keuangan-instant-approval-wiraswasta-1").val(base64);
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
                                    console.log("BASE JPG BK 1", base64String);
                                    // $("#btn-choose-file-upload-document").attr("src", base64String);
                                    $("#base64-bukti-keuangan-instant-approval-wiraswasta-1").val(base64String);
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
                if(BuktiKeuanganInstantApproval2 != undefined){
                    //Bukti Keuangan Instant Approval 2
                    var fileUploadDocument = BuktiKeuanganInstantApproval2;
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
                                console.log("BASE PDF BK 2", base64);
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            $("#base64-bukti-keuangan-instant-approval-wiraswasta-2").val(base64);
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
                                    console.log("BASE JPG BK 2", base64String);
                                    // $("#btn-choose-file-upload-document").attr("src", base64String);
                                    $("#base64-bukti-keuangan-instant-approval-wiraswasta-2").val(base64String);
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
                if(BuktiKeuanganInstantApproval3 != undefined){
                    //Bukti Keuangan Instant Approval 3
                    var fileUploadDocument = BuktiKeuanganInstantApproval3;
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
                                console.log("BASE PDF BK 3", base64);
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            $("#base64-bukti-keuangan-instant-approval-wiraswasta-3").val(base64);
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
                                    console.log("BASE JPG BK 3", base64String);
                                    // $("#btn-choose-file-upload-document").attr("src", base64String);
                                    $("#base64-bukti-keuangan-instant-approval-wiraswasta-3").val(base64String);
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
                if(BuktiKeuanganInstantApproval4 != undefined){
                    //Bukti Keuangan Instant Approval 4
                    var fileUploadDocument = BuktiKeuanganInstantApproval4;
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
                                console.log("BASE PDF BK 4", base64);
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            $("#base64-bukti-keuangan-instant-approval-wiraswasta-4").val(base64);
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
                                    console.log("BASE JPG BK 4", base64String);
                                    // $("#btn-choose-file-upload-document").attr("src", base64String);
                                    $("#base64-bukti-keuangan-instant-approval-wiraswasta-4").val(base64String);
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
                if(BuktiKeuanganInstantApproval5 != undefined){
                    //Bukti Keuangan Instant Approval 5
                    var fileUploadDocument = BuktiKeuanganInstantApproval5;
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
                                console.log("BASE PDF BK 5", base64);
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            $("#base64-bukti-keuangan-instant-approval-wiraswasta-5").val(base64);
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
                                    console.log("BASE JPG BK 5", base64String);
                                    // $("#btn-choose-file-upload-document").attr("src", base64String);
                                    $("#base64-bukti-keuangan-instant-approval-wiraswasta-5").val(base64String);
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
                if(BuktiKeuanganInstantApproval6 != undefined){
                    //Bukti Keuangan Instant Approval 6
                    var fileUploadDocument = BuktiKeuanganInstantApproval6;
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
                                console.log("BASE PDF BK 6", base64);
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            $("#base64-bukti-keuangan-instant-approval-wiraswasta-6").val(base64);
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
                                    console.log("BASE JPG BK 6", base64String);
                                    // $("#btn-choose-file-upload-document").attr("src", base64String);
                                    $("#base64-bukti-keuangan-instant-approval-wiraswasta-6").val(base64String);
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
            else if(x == 8){
                if(TempatUsahaInstanApproval != undefined){
                    //Foto Tempat Usaha Instant Approval
                    var fileUploadDocument = TempatUsahaInstanApproval;
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
                                console.log("BASE PDF FTU", base64);
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            $("#base64-foto-tempat-usaha-instant-approval-wiraswasta").val(base64);
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
                                    console.log("BASE JPG FTU", base64String);
                                    // $("#btn-choose-file-upload-document").attr("src", base64String);
                                    $("#base64-foto-tempat-usaha-instant-approval-wiraswasta").val(base64String);
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
            else if(x == 9){
                if(SelfieInstanApproval != undefined){
                    //Foto Tempat Usaha Instant Approval
                    var fileUploadDocument = SelfieInstanApproval;
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
                                console.log("BASE PDF FS", base64);
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            $("#base64-foto-selfie-instant-approval-wiraswasta").val(base64);
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
                                    console.log("BASE JPG FS", base64String);
                                    // $("#btn-choose-file-upload-document").attr("src", base64String);
                                    $("#base64-foto-selfie-instant-approval-wiraswasta").val(base64String);
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

        if($('#dokumen-bukti-usaha-tele-survey-wiraswasta').val() != undefined){
            var BuktiUsahaTeleSurvey1 = $('#dokumen-bukti-usaha-tele-survey-wiraswasta')[0].files[0];
        }
        
        if($('#dokumen-bukti-usaha-tele-survey-wiraswasta-2').val() != undefined){
            var BuktiUsahaTeleSurvey2 = $('#dokumen-bukti-usaha-tele-survey-wiraswasta-2')[0].files[0];
        }

        if($('#dokumen-bukti-keuangan-tele-survey-wiraswasta').val() != undefined){
            var BuktiKeuanganTeleSurvey1 = $('#dokumen-bukti-keuangan-tele-survey-wiraswasta')[0].files[0];
        }

        if($('#dokumen-bukti-keuangan-tele-survey-wiraswasta-2').val() != undefined){
            var BuktiKeuanganTeleSurvey2 = $('#dokumen-bukti-keuangan-tele-survey-wiraswasta-2')[0].files[0];
        }
		
        if($('#dokumen-bukti-keuangan-tele-survey-wiraswasta-3').val() != undefined){
            var BuktiKeuanganTeleSurvey3 = $('#dokumen-bukti-keuangan-tele-survey-wiraswasta-3')[0].files[0];
        }

        if($('#dokumen-bukti-keuangan-tele-survey-wiraswasta-4').val() != undefined){
            var BuktiKeuanganTeleSurvey4 = $('#dokumen-bukti-keuangan-tele-survey-wiraswasta-4')[0].files[0];
        }

        if($('#dokumen-bukti-keuangan-tele-survey-wiraswasta-5').val() != undefined){
            var BuktiKeuanganTeleSurvey5 = $('#dokumen-bukti-keuangan-tele-survey-wiraswasta-5')[0].files[0];
        }

        if($('#dokumen-bukti-keuangan-tele-survey-wiraswasta-6').val() != undefined){
            var BuktiKeuanganTeleSurvey6 = $('#dokumen-bukti-keuangan-tele-survey-wiraswasta-6')[0].files[0];
        }

        if($('#foto-tempat-usaha-tele-survey-wiraswasta').val() != undefined){
            var TempatUsahaInstanApproval = $('#foto-tempat-usaha-tele-survey-wiraswasta')[0].files[0];
        }

        if($('#foto-selfie-tele-survey-wiraswasta').val() != undefined){
            var SelfieInstanApproval = $('#foto-selfie-tele-survey-wiraswasta')[0].files[0];
        }

        for(var x=0; x < 10; x++){
                    
            if(x == 0){
                if(BuktiUsahaTeleSurvey1 != undefined){
                    var fileUploadDocument = BuktiUsahaTeleSurvey1;
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
                                console.log("BASE PDF BU 1",base64);
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            $("#base64-bukti-usaha-tele-survey-wiraswasta-1").val(base64);
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
                                    console.log("BASE JPG BU 1",base64String);
                                    // $("#btn-choose-file-upload-document").attr("src", base64String);
                                    $("#base64-bukti-usaha-tele-survey-wiraswasta-1").val(base64String);
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
                if(BuktiUsahaTeleSurvey2 != undefined){
                    var fileUploadDocument = BuktiUsahaTeleSurvey2;
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
                                console.log("BASE PDF BU 2",base64);
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            $("#base64-bukti-usaha-tele-survey-wiraswasta-2").val(base64);
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
                                    console.log("BASE JPG BU 2",base64String);
                                    // $("#btn-choose-file-upload-document").attr("src", base64String);
                                    $("#base64-bukti-usaha-tele-survey-wiraswasta-2").val(base64String);
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
                if(BuktiKeuanganTeleSurvey1 != undefined){
                    //Bukti keuangan Instant Approval 1
                    var fileUploadDocument = BuktiKeuanganTeleSurvey1;
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
                                console.log("BASE PDF BK 1", base64);
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            $("#base64-bukti-keuangan-tele-survey-wiraswasta-1").val(base64);
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
                                    console.log("BASE JPG BK 1", base64String);
                                    // $("#btn-choose-file-upload-document").attr("src", base64String);
                                    $("#base64-bukti-keuangan-tele-survey-wiraswasta-1").val(base64String);
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
                if(BuktiKeuanganTeleSurvey2 != undefined){
                    //Bukti Keuangan Instant Approval 2
                    var fileUploadDocument = BuktiKeuanganTeleSurvey2;
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
                                console.log("BASE PDF BK 2", base64);
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            $("#base64-bukti-keuangan-tele-survey-wiraswasta-2").val(base64);
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
                                    console.log("BASE JPG BK 2", base64String);
                                    // $("#btn-choose-file-upload-document").attr("src", base64String);
                                    $("#base64-bukti-keuangan-tele-survey-wiraswasta-2").val(base64String);
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
                if(BuktiKeuanganTeleSurvey3 != undefined){
                    //Bukti Keuangan Instant Approval 3
                    var fileUploadDocument = BuktiKeuanganTeleSurvey3;
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
                                console.log("BASE PDF BK 3", base64);
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            $("#base64-bukti-keuangan-tele-survey-wiraswasta-3").val(base64);
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
                                    console.log("BASE JPG BK 3", base64String);
                                    // $("#btn-choose-file-upload-document").attr("src", base64String);
                                    $("#base64-bukti-keuangan-tele-survey-wiraswasta-3").val(base64String);
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
                if(BuktiKeuanganTeleSurvey4 != undefined){
                    //Bukti Keuangan Instant Approval 4
                    var fileUploadDocument = BuktiKeuanganTeleSurvey4;
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
                                console.log("BASE PDF BK 4", base64);
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            $("#base64-bukti-keuangan-tele-survey-wiraswasta-4").val(base64);
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
                                    console.log("BASE JPG BK 4", base64String);
                                    // $("#btn-choose-file-upload-document").attr("src", base64String);
                                    $("#base64-bukti-keuangan-tele-survey-wiraswasta-4").val(base64String);
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
                if(BuktiKeuanganTeleSurvey5 != undefined){
                    //Bukti Keuangan Instant Approval 5
                    var fileUploadDocument = BuktiKeuanganTeleSurvey5;
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
                                console.log("BASE PDF BK 5", base64);
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            $("#base64-bukti-keuangan-tele-survey-wiraswasta-5").val(base64);
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
                                    console.log("BASE JPG BK 5", base64String);
                                    // $("#btn-choose-file-upload-document").attr("src", base64String);
                                    $("#base64-bukti-keuangan-tele-survey-wiraswasta-5").val(base64String);
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
                if(BuktiKeuanganTeleSurvey6 != undefined){
                    //Bukti Keuangan Instant Approval 6
                    var fileUploadDocument = BuktiKeuanganTeleSurvey6;
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
                                console.log("BASE PDF BK 6", base64);
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            $("#base64-bukti-keuangan-tele-survey-wiraswasta-6").val(base64);
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
                                    console.log("BASE JPG BK 6", base64String);
                                    // $("#btn-choose-file-upload-document").attr("src", base64String);
                                    $("#base64-bukti-keuangan-tele-survey-wiraswasta-6").val(base64String);
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
            else if(x == 8){
                if(TempatUsahaInstanApproval != undefined){
                    //Foto Tempat Usaha Instant Approval
                    var fileUploadDocument = TempatUsahaInstanApproval;
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
                                console.log("BASE PDF FTU", base64);
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            $("#base64-foto-tempat-usaha-tele-survey-wiraswasta").val(base64);
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
                                    console.log("BASE JPG FTU", base64String);
                                    // $("#btn-choose-file-upload-document").attr("src", base64String);
                                    $("#base64-foto-tempat-usaha-tele-survey-wiraswasta").val(base64String);
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
            else if(x == 9){
                if(SelfieInstanApproval != undefined){
                    //Foto Tempat Usaha Instant Approval
                    var fileUploadDocument = SelfieInstanApproval;
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
                                console.log("BASE PDF FS", base64);
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            $("#base64-foto-selfie-tele-survey-wiraswasta").val(base64);
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
                                    console.log("BASE JPG FS", base64String);
                                    // $("#btn-choose-file-upload-document").attr("src", base64String);
                                    $("#base64-foto-selfie-tele-survey-wiraswasta").val(base64String);
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

    getDetailTeleSurvey: function(order_id) {
    	let param = [];
	    var that = app.KycWiraswasta;

	    $.ajax({
	        url: app.base_url + that.api + "getDetailTeleSurvey",
	        type: 'POST',
	        data: {
	            order_id: order_id
	        },
	        dataType: 'json',
	        cache: false,
	        success: function(response, error) {
	            let data = JSON.parse(response);
	            if (data.status) {
                    if(data.data.screening_2 == "INSTANT APPROVAL"){
                        $("#tab-silentsurvey").hide();
                        $("#tab-telesurvey").hide();
                        $("#inp-nomor-aplikasi-kyc-wiraswasta").val(data.data.order_id);
                        $("#inp-nama-sesuai-ktp-kyc-wiraswasta").val(data.data.detail.debitur.personal.deb_nama_sesuai_ktp);

                        $("#inp-pekerjaan-nasabah-wiraswasta").val(data.data.detail.debitur.personal.occupation.occupation_pro.debitur.deb_occupation_desc);
                        var jenis_tempat_usaha = $("<option selected='selected'></option>").val(data.data.detail.debitur.personal.occupation.occupation_pro.debitur.deb_company_type_code).text(data.data.detail.debitur.personal.occupation.occupation_pro.debitur.deb_company_type_desc);
                        $("#slc-jenis-tempat-usaha-wiraswasta").append(jenis_tempat_usaha).trigger('change');
                        var nama_tempat_usaha = data.data.detail.debitur.personal.occupation.occupation_pro.debitur.deb_name_of_workplace
                        $("#inp-nama-tempat-usaha-wiraswasta").val(nama_tempat_usaha.toUpperCase());
                    }

                    else if(data.data.screening_2 == "NON-IA SILENT SURVEY"){

                        //Hardcode Data Informasi Nasabah
                        var pekerjan_nasabah_wiraswasta = "WIRASWASTA";
                        var jenis_tempat_usaha_wiraswasta_id = "01";
                        var jenis_tempat_usaha_wiraswasta_desc = "WARUNG";
                        var nama_tempat_usaha_wiraswasta = "WARUNG SUKA MAJU";
                        var bidang_usaha_wiraswasta = "PERSEORANGAN / BADAN USAHA PERSEORANGAN";
                        var sektor_tempat_usaha_wiraswasta = "USAHA MIKRO KECIL MENENGAH";
                        
                        //Hide Tab
                        $("#tab-instantapproval").hide();
                        $("#tab-telesurvey").hide();
                        
                        //Main Page
                        $("#inp-nomor-aplikasi-kyc-wiraswasta").val(data.data.order_id);
                        $("#inp-nama-sesuai-ktp-kyc-wiraswasta").val(data.data.detail.debitur.personal.nama_sesuai_ktp);
                        $("#inp-tipe-nasabah-kyc-wiraswasta").val(data.data.customer_type_desc);
                        $("#inp-tanggal-aplikasi-kyc-wiraswasta").val(data.data.order_created_date);
                        $("#inp-source-order-kyc-wiraswasta").val(data.data.source_order_desc);
                        $("#inp-cabang-kyc-wiraswasta").val(data.data.branch_desc);

                        //Sub Tab Silent Survey
                        $("#inp-pekerjaan-nasabah-silent-survey-wiraswasta").val(pekerjan_nasabah_wiraswasta);
                        var jenis_tempat_usaha_wiraswasta = $("<option selected='selected'></option>").val(jenis_tempat_usaha_wiraswasta_id).text(jenis_tempat_usaha_wiraswasta_desc);
 					    $("#slc-jenis-tempat-usaha-silent-survey-wiraswasta").append(jenis_tempat_usaha_wiraswasta).trigger('change');
                        $("#inp-nama-tempat-usaha-silent-survey-wiraswasta").val(nama_tempat_usaha_wiraswasta);
                        $("#inp-bidang-usaha-silent-survey-wiraswasta").val(bidang_usaha_wiraswasta);
                        $("#inp-sektor-tempat-usaha-silent-survey-wiraswasta").val(sektor_tempat_usaha_wiraswasta);

                    }
                    
                    
	                // var kepemilikan_rumah = $("<option selected='selected'></option>").val(data.data.detail.data_kepemilikan.house_of_status_id).text(data.data.detail.data_kepemilikan.house_of_status_desc);
 					// $("#slc-status-kepemilikan-rumah").append(kepemilikan_rumah).trigger('change');
	                // console.log($("#slc-status-kepemilikan-rumah").val());

	            } else {
	                alert_warning(data);
	            }
	        }
	    });
    },

    insertSilentSurveyWiraswasta: function() {
        var that = app.KycWiraswasta;
        var pekerjaan_nasabah_silent_survey_wiraswasta = {};
        var pekerjaan_nasabah = $('#inp-pekerjaan-nasabah-silent-survey-wiraswasta').val();
        var pekerjaan_nasabah_sesuai_tidak_sesuai = document.querySelector('input[name="pekerjaannasabahsilentwiraswasta"]:checked').value;
        var jenis_tempat_usaha = $('#slc-jenis-tempat-usaha-silent-survey-wiraswasta').val();
        var nama_tempat_usaha = $('#inp-nama-tempat-usaha-silent-survey-wiraswasta').val();
        var nama_tempat_usaha_sesuai_tidak_sesuai = document.querySelector('input[name="tempatusahasilentwiraswasta"]:checked').value;
        var bidang_usaha = $('#inp-bidang-usaha-silent-survey-wiraswasta').val();
        var bidang_usaha_sesuai_tidak_sesuai = document.querySelector('input[name="bidangusahasilentwiraswasta"]:checked').value;
        var sektor_tempat_usaha = $('#inp-sektor-tempat-usaha-silent-survey-wiraswasta').val();
        var sektor_ekonomi_level_1 = $('#slc-sektor-ekonomi-level-1-silent-survey-wiraswasta').val();
        var sektor_ekonomi_level_2 = $('#slc-sektor-ekonomi-level-2-silent-survey-wiraswasta').val();
        var sektor_ekonomi_level_3 = $('#slc-sektor-ekonomi-level-3-silent-survey-wiraswasta').val();
        var dokumen_bukti_usaha_1 = localStorage.getItem('bukti_usaha_silent_survey_wiraswasta');
        var dokumen_bukti_usaha_2 = localStorage.getItem('bukti_usaha_silent_survey_wiraswasta_2');
        var dokumen_bukti_keuangan_1 = localStorage.getItem('bukti_keuangan_silent_survey_wiraswasta');
        var dokumen_bukti_keuangan_2 = localStorage.getItem('bukti_keuangan_silent_survey_wiraswasta_2');
        var dokumen_bukti_keuangan_3 = localStorage.getItem('bukti_keuangan_silent_survey_wiraswasta_3');
        var dokumen_bukti_keuangan_4 = localStorage.getItem('bukti_keuangan_silent_survey_wiraswasta_4');
        var dokumen_bukti_keuangan_5 = localStorage.getItem('bukti_keuangan_silent_survey_wiraswasta_5');
        var dokumen_bukti_keuangan_6 = localStorage.getItem('bukti_keuangan_silent_survey_wiraswasta_6');
        var foto_tempat_usaha = localStorage.getItem('foto_tempat_usaha_silent_survey_wiraswasta');
        var selfie_pic_survey = localStorage.getItem('foto_selfie_silent_survey_wiraswasta');
        var jarak_tempat_usaha = $('#inp-jarak-nasabah-ke-muf-silent-survey-wiraswasta').val();
            
        pekerjaan_nasabah_silent_survey_wiraswasta = {
            pekerjaan_nasabah: pekerjaan_nasabah,
            pekerjaan_nasabah_sesuai_tidak_sesuai: pekerjaan_nasabah_sesuai_tidak_sesuai,
            jenis_tempat_usaha: jenis_tempat_usaha,
            nama_tempat_usaha: nama_tempat_usaha,
            nama_tempat_usaha_sesuai_tidak_sesuai: nama_tempat_usaha_sesuai_tidak_sesuai,
            bidang_usaha: bidang_usaha,
            bidang_usaha_sesuai_tidak_sesuai: bidang_usaha_sesuai_tidak_sesuai,
            sektor_tempat_usaha: sektor_tempat_usaha,
            sektor_ekonomi_level_1: sektor_ekonomi_level_1,
            sektor_ekonomi_level_2: sektor_ekonomi_level_2,
            sektor_ekonomi_level_3: sektor_ekonomi_level_3,
            dokumen_bukti_usaha_1: dokumen_bukti_usaha_1,
            dokumen_bukti_usaha_2: dokumen_bukti_usaha_2,
            dokumen_bukti_keuangan_1: dokumen_bukti_keuangan_1,
            dokumen_bukti_keuangan_2: dokumen_bukti_keuangan_2,
            dokumen_bukti_keuangan_3: dokumen_bukti_keuangan_3,
            dokumen_bukti_keuangan_4: dokumen_bukti_keuangan_4,
            dokumen_bukti_keuangan_5: dokumen_bukti_keuangan_5,
            dokumen_bukti_keuangan_6: dokumen_bukti_keuangan_6,
            foto_tempat_usaha: foto_tempat_usaha,
            selfie_pic_survey: selfie_pic_survey,
            jarak_tempat_usaha: jarak_tempat_usaha
        }
        // console.log(pekerjaan_nasabah_silent_survey_wiraswasta);

        $.ajax({
			type: "post",
			async: false,
			url: app.base_url + that.api + "submitSilentSurveyWiraswasta",
			data: {
                pekerjaan_nasabah_silent_survey_wiraswasta: pekerjaan_nasabah_silent_survey_wiraswasta,
            },
			dataType: "json",
			cache: false,
			success: function (response, error) {
				let param = $.parseJSON(response);
				// alert_info(param.data, function () {});
				swal.fire(
					'Success',
					param.data,
					function () {},
					'success',
				)
			},
		})

    },

}
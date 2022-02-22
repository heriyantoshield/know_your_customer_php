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
		var order_id = '1234569999';//'123456789011113'; //hardcode order_id      

        document.getElementById("add-document-bukti-bekerja-instant-approval-non-wiraswasta").onclick = function() {functionAddBekerjaInstanApproval()};
        document.getElementById("add-document-bukti-bekerja-tele-survey-non-wiraswasta").onclick = function() {functionAddBekerjaTeleSurvey()};
        document.getElementById("add-document-bukti-bekerja-silent-survey-non-wiraswasta").onclick = function() {functionAddBekerjaSilentSurvey()};
        document.getElementById("add-document-bukti-penghasilan-instant-approval-non-wiraswasta").onclick = function() {functionAddPenghasilanInstanApproval()};
        document.getElementById("add-document-bukti-penghasilan-tele-survey-non-wiraswasta").onclick = function() {functionAddPenghasilanTeleSurvey()};
        document.getElementById("add-document-bukti-penghasilan-silent-survey-non-wiraswasta").onclick = function() {functionAddPenghasilanSilentSurvey()};
        
		function functionAddBekerjaInstanApproval(){
			if(id_bukti_bekerja_instant_approval == 2){
				$('#newdokbuktibekerjainstantapproval').append('<div class="col-lg-4" style="margin-top:10px;"><input type="file" class="form-control-file dokumen-bukti-bekerja-instant-approval-non-wiraswasta-'+id_bukti_bekerja_instant_approval+'"></div>');
				id_bukti_bekerja_instant_approval++;
			}
        }

		function functionAddBekerjaTeleSurvey(){
			if(id_bukti_bekerja_tele_survey == 2){
                $('#newdokbuktibekerjatelesurvey').append('<div class="col-lg-4" style="margin-top:10px;"><input type="file" class="form-control-file dokumen-bukti-bekerja-tele-survey-non-wiraswasta-'+id_bukti_bekerja_tele_survey+'"></div>');
			    id_bukti_bekerja_tele_survey++;
			}
        }

		function functionAddBekerjaSilentSurvey(){
			if(id_bukti_bekerja_silent_survey == 2){
				$('#newdokbuktibekerjasilentsurvey').append('<div class="col-lg-4" style="margin-top:10px;"><input type="file" class="form-control-file dokumen-bukti-bekerja-silent-survey-non-wiraswasta-'+id_bukti_bekerja_silent_survey+'"></div>');
				id_bukti_bekerja_silent_survey++;
			}
        }

        function functionAddPenghasilanInstanApproval(){
			if(id_bukti_penghasilan_instant_approval <= 6){
				$('#newdokbuktipenghasilaninstantapproval').append('<div class="col-lg-4" style="margin-top:10px;"><input type="file" class="form-control-file dokumen-bukti-penghasilan-instant-approval-non-wiraswasta-'+id_bukti_penghasilan_instant_approval+'"></div>');
				id_bukti_penghasilan_instant_approval++;	
			}
        }

		function functionAddPenghasilanTeleSurvey(){
			if(id_bukti_penghasilan_tele_survey <= 6){
				$('#newdokbuktipenghasilantelesurvey').append('<div class="col-lg-4" style="margin-top:10px;"><input type="file" class="form-control-file dokumen-bukti-penghasilan-tele-survey-non-wiraswasta-'+id_bukti_penghasilan_tele_survey+'"></div>');
				id_bukti_penghasilan_tele_survey++;
			}
        }

		function functionAddPenghasilanSilentSurvey(){
			if(id_bukti_penghasilan_silent_survey <= 6){
				$('#newdokbuktipenghasilansilentsurvey').append('<div class="col-lg-4" style="margin-top:10px;"><input type="file" class="form-control-file dokumen-bukti-penghasilan-silent-survey-non-wiraswasta-'+id_bukti_penghasilan_silent_survey+'"></div>');
				id_bukti_penghasilan_silent_survey++;
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
		file.getDetailTeleSurvey(order_id);

        $('#btn-save-instant-approval-non-wiraswasta').click(function () {
            var file = app.KycNonWiraswasta;
            
            ////Validasi Mandatory Instant Approval
            // if($('#slc-sektor-ekonomi-level-1-instant-approval-non-wiraswasta option:selected').val() == null || 
            //    $('#slc-sektor-ekonomi-level-1-instant-approval-non-wiraswasta option:selected').val() == ''){
            //     $('#err-slc-sektor-ekonomi-level-1-instant-approval-non-wiraswasta').html('Sektor Ekonomi Level 1 Wajib Diisi');
            //     $('#err-slc-sektor-ekonomi-level-1-instant-approval-non-wiraswasta').prop("hidden", false);
            //     $('.error-slc-sektor-ekonomi-level-1-instant-approval-non-wiraswasta').css({"border-color": "red"});
            // }
            // else if($('#slc-sektor-ekonomi-level-1-instant-approval-non-wiraswasta option:selected').val() != null || 
            //         $('#slc-sektor-ekonomi-level-1-instant-approval-non-wiraswasta option:selected').val() != ''){
            //             $('#err-slc-sektor-ekonomi-level-1-instant-approval-non-wiraswasta').html('');
            //             $('#err-slc-sektor-ekonomi-level-1-instant-approval-non-wiraswasta').prop("hidden", true);
            //             $('.error-slc-sektor-ekonomi-level-1-instant-approval-non-wiraswasta').css({"border-color": ""});
            // }

            // if($('#slc-sektor-ekonomi-level-2-instant-approval-non-wiraswasta option:selected').val() == null || 
            //    $('#slc-sektor-ekonomi-level-2-instant-approval-non-wiraswasta option:selected').val() == ''){
            //     $('#err-slc-sektor-ekonomi-level-2-instant-approval-non-wiraswasta').html('Sektor Ekonomi Level 2 Wajib Diisi');
            //     $('#err-slc-sektor-ekonomi-level-2-instant-approval-non-wiraswasta').prop("hidden", false);
            //     $('.error-slc-sektor-ekonomi-level-2-instant-approval-non-wiraswasta').css({"border-color": "red"});
            // }
            // else if($('#slc-sektor-ekonomi-level-2-instant-approval-non-wiraswasta option:selected').val() != null || 
            //         $('#slc-sektor-ekonomi-level-2-instant-approval-non-wiraswasta option:selected').val() != ''){
            //             $('#err-slc-sektor-ekonomi-level-2-instant-approval-non-wiraswasta').html('');
            //             $('#err-slc-sektor-ekonomi-level-2-instant-approval-non-wiraswasta').prop("hidden", true);
            //             $('.error-slc-sektor-ekonomi-level-2-instant-approval-non-wiraswasta').css({"border-color": ""});
            // }

            // if($('#slc-sektor-ekonomi-level-3-instant-approval-non-wiraswasta option:selected').val() == null || 
            //    $('#slc-sektor-ekonomi-level-3-instant-approval-non-wiraswasta option:selected').val() == ''){
            //     $('#err-slc-sektor-ekonomi-level-3-instant-approval-non-wiraswasta').html('Sektor Ekonomi Level 3 Wajib Diisi');
            //     $('#err-slc-sektor-ekonomi-level-3-instant-approval-non-wiraswasta').prop("hidden", false);
            //     $('.error-slc-sektor-ekonomi-level-3-instant-approval-non-wiraswasta').css({"border-color": "red"});
            // }
            // else if($('#slc-sektor-ekonomi-level-3-instant-approval-non-wiraswasta option:selected').val() != null || 
            //         $('#slc-sektor-ekonomi-level-3-instant-approval-non-wiraswasta option:selected').val() != ''){
            //             $('#err-slc-sektor-ekonomi-level-3-instant-approval-non-wiraswasta').html('');
            //             $('#err-slc-sektor-ekonomi-level-3-instant-approval-non-wiraswasta').prop("hidden", true);
            //             $('.error-slc-sektor-ekonomi-level-3-instant-approval-non-wiraswasta').css({"border-color": ""});
            // }

            // if($('#dokumen-bukti-bekerja-instant-approval-non-wiraswasta').val() == ''){
            //     $('#err-dokumen-bukti-bekerja-instant-approval-non-wiraswasta').html('Dokumen Bukti Bekerja Wajib Diisi');
            //     $('#err-dokumen-bukti-bekerja-instant-approval-non-wiraswasta').prop("hidden", false);
            //     $('.error-dokumen-bukti-bekerja-instant-approval-non-wiraswasta').css({"border-color": "red"});
            // }
            // else if($('#dokumen-bukti-bekerja-instant-approval-non-wiraswasta').val() != ''){
            //             $('#err-dokumen-bukti-bekerja-instant-approval-non-wiraswasta').html('');
            //             $('#err-dokumen-bukti-bekerja-instant-approval-non-wiraswasta').prop("hidden", true);
            //             $('.error-dokumen-bukti-bekerja-instant-approval-non-wiraswasta').css({"border-color": ""});
            // }

            // if($('#dokumen-bukti-penghasilan-instant-approval-non-wiraswasta').val() == ''){
            //     $('#err-dokumen-bukti-penghasilan-instant-approval-non-wiraswasta').html('Dokumen Bukti Bekerja Wajib Diisi');
            //     $('#err-dokumen-bukti-penghasilan-instant-approval-non-wiraswasta').prop("hidden", false);
            //     $('.error-dokumen-bukti-penghasilan-instant-approval-non-wiraswasta').css({"border-color": "red"});
            // }
            // else if($('#dokumen-bukti-penghasilan-instant-approval-non-wiraswasta').val() != ''){
            //             $('#err-dokumen-bukti-penghasilan-instant-approval-non-wiraswasta').html('');
            //             $('#err-dokumen-bukti-penghasilan-instant-approval-non-wiraswasta').prop("hidden", true);
            //             $('.error-dokumen-bukti-penghasilan-instant-approval-non-wiraswasta').css({"border-color": ""});
            // }

            // if($('#inp-jarak-nasabah-ke-muf-instant-approval-non-wiraswasta').val() == ''){
            //     $('#err-inp-jarak-nasabah-ke-muf-instant-approval-non-wiraswasta').html('Jarak Tempat Nasabah ke MUF Wajib Diisi');
            //     $('#err-inp-jarak-nasabah-ke-muf-instant-approval-non-wiraswasta').prop("hidden", false);
            //     $('input[id=inp-jarak-nasabah-ke-muf-instant-approval-non-wiraswasta]').css({"border-color": "red"});
            // }
            // else if($('#inp-jarak-nasabah-ke-muf-instant-approval-non-wiraswasta').val() != ''){
            //             $('#err-inp-jarak-nasabah-ke-muf-instant-approval-non-wiraswasta').html('');
            //             $('#err-inp-jarak-nasabah-ke-muf-instant-approval-non-wiraswasta').prop("hidden", true);
            //             $('input[id=inp-jarak-nasabah-ke-muf-instant-approval-non-wiraswasta]').css({"border-color": ""});
            // }

            file.insertInstantApprovalNonWiraswasta();
        });

        $('#btn-save-silent-survey-non-wiraswasta').click(function () {
            var file = app.KycNonWiraswasta;
            
            ////Validasi Mandatory Silent Survey
            // if($('#slc-sektor-ekonomi-level-1-silent-survey-non-wiraswasta option:selected').val() == null || 
            //    $('#slc-sektor-ekonomi-level-1-silent-survey-non-wiraswasta option:selected').val() == ''){
            //     $('#err-slc-sektor-ekonomi-level-1-silent-survey-non-wiraswasta').html('Sektor Ekonomi Level 1 Wajib Diisi');
            //     $('#err-slc-sektor-ekonomi-level-1-silent-survey-non-wiraswasta').prop("hidden", false);
            //     $('.error-slc-sektor-ekonomi-level-1-silent-survey-non-wiraswasta').css({"border-color": "red"});
            // }
            // else if($('#slc-sektor-ekonomi-level-1-silent-survey-non-wiraswasta option:selected').val() != null || 
            //         $('#slc-sektor-ekonomi-level-1-silent-survey-non-wiraswasta option:selected').val() != ''){
            //             $('#err-slc-sektor-ekonomi-level-1-silent-survey-non-wiraswasta').html('');
            //             $('#err-slc-sektor-ekonomi-level-1-silent-survey-non-wiraswasta').prop("hidden", true);
            //             $('.error-slc-sektor-ekonomi-level-1-silent-survey-non-wiraswasta').css({"border-color": ""});
            // }

            // if($('#slc-sektor-ekonomi-level-2-silent-survey-non-wiraswasta option:selected').val() == null || 
            //    $('#slc-sektor-ekonomi-level-2-silent-survey-non-wiraswasta option:selected').val() == ''){
            //     $('#err-slc-sektor-ekonomi-level-2-silent-survey-non-wiraswasta').html('Sektor Ekonomi Level 2 Wajib Diisi');
            //     $('#err-slc-sektor-ekonomi-level-2-silent-survey-non-wiraswasta').prop("hidden", false);
            //     $('.error-slc-sektor-ekonomi-level-2-silent-survey-non-wiraswasta').css({"border-color": "red"});
            // }
            // else if($('#slc-sektor-ekonomi-level-2-silent-survey-non-wiraswasta option:selected').val() != null || 
            //         $('#slc-sektor-ekonomi-level-2-silent-survey-non-wiraswasta option:selected').val() != ''){
            //             $('#err-slc-sektor-ekonomi-level-2-silent-survey-non-wiraswasta').html('');
            //             $('#err-slc-sektor-ekonomi-level-2-silent-survey-non-wiraswasta').prop("hidden", true);
            //             $('.error-slc-sektor-ekonomi-level-2-silent-survey-non-wiraswasta').css({"border-color": ""});
            // }

            // if($('#slc-sektor-ekonomi-level-3-silent-survey-non-wiraswasta option:selected').val() == null || 
            //    $('#slc-sektor-ekonomi-level-3-silent-survey-non-wiraswasta option:selected').val() == ''){
            //     $('#err-slc-sektor-ekonomi-level-3-silent-survey-non-wiraswasta').html('Sektor Ekonomi Level 3 Wajib Diisi');
            //     $('#err-slc-sektor-ekonomi-level-3-silent-survey-non-wiraswasta').prop("hidden", false);
            //     $('.error-slc-sektor-ekonomi-level-3-silent-survey-non-wiraswasta').css({"border-color": "red"});
            // }
            // else if($('#slc-sektor-ekonomi-level-3-silent-survey-non-wiraswasta option:selected').val() != null || 
            //         $('#slc-sektor-ekonomi-level-3-silent-survey-non-wiraswasta option:selected').val() != ''){
            //             $('#err-slc-sektor-ekonomi-level-3-silent-survey-non-wiraswasta').html('');
            //             $('#err-slc-sektor-ekonomi-level-3-silent-survey-non-wiraswasta').prop("hidden", true);
            //             $('.error-slc-sektor-ekonomi-level-3-silent-survey-non-wiraswasta').css({"border-color": ""});
            // }

            // if($('#dokumen-bukti-bekerja-silent-survey-non-wiraswasta').val() == ''){
            //     $('#err-dokumen-bukti-bekerja-silent-survey-non-wiraswasta').html('Dokumen Bukti Bekerja Wajib Diisi');
            //     $('#err-dokumen-bukti-bekerja-silent-survey-non-wiraswasta').prop("hidden", false);
            //     $('.error-dokumen-bukti-bekerja-silent-survey-non-wiraswasta').css({"border-color": "red"});
            // }
            // else if($('#dokumen-bukti-bekerja-silent-survey-non-wiraswasta').val() != ''){
            //             $('#err-dokumen-bukti-bekerja-silent-survey-non-wiraswasta').html('');
            //             $('#err-dokumen-bukti-bekerja-silent-survey-non-wiraswasta').prop("hidden", true);
            //             $('.error-dokumen-bukti-bekerja-silent-survey-non-wiraswasta').css({"border-color": ""});
            // }

            // if($('#dokumen-bukti-penghasilan-silent-survey-non-wiraswasta').val() == ''){
            //     $('#err-dokumen-bukti-penghasilan-silent-survey-non-wiraswasta').html('Dokumen Bukti Bekerja Wajib Diisi');
            //     $('#err-dokumen-bukti-penghasilan-silent-survey-non-wiraswasta').prop("hidden", false);
            //     $('.error-dokumen-bukti-penghasilan-silent-survey-non-wiraswasta').css({"border-color": "red"});
            // }
            // else if($('#dokumen-bukti-penghasilan-silent-survey-non-wiraswasta').val() != ''){
            //             $('#err-dokumen-bukti-penghasilan-silent-survey-non-wiraswasta').html('');
            //             $('#err-dokumen-bukti-penghasilan-silent-survey-non-wiraswasta').prop("hidden", true);
            //             $('.error-dokumen-bukti-penghasilan-silent-survey-non-wiraswasta').css({"border-color": ""});
            // }

            // if($('#inp-jarak-nasabah-ke-muf-silent-survey-non-wiraswasta').val() == ''){
            //     $('#err-inp-jarak-nasabah-ke-muf-silent-survey-non-wiraswasta').html('Jarak Tempat Nasabah ke MUF Wajib Diisi');
            //     $('#err-inp-jarak-nasabah-ke-muf-silent-survey-non-wiraswasta').prop("hidden", false);
            //     $('input[id=inp-jarak-nasabah-ke-muf-silent-survey-non-wiraswasta]').css({"border-color": "red"});
            // }
            // else if($('#inp-jarak-nasabah-ke-muf-silent-survey-non-wiraswasta').val() != ''){
            //             $('#err-inp-jarak-nasabah-ke-muf-silent-survey-non-wiraswasta').html('');
            //             $('#err-inp-jarak-nasabah-ke-muf-silent-survey-non-wiraswasta').prop("hidden", true);
            //             $('input[id=inp-jarak-nasabah-ke-muf-silent-survey-non-wiraswasta]').css({"border-color": ""});
            // }

            file.insertSilentSurveyNonWiraswasta();
        });

        $('#btn-save-tele-survey-non-wiraswasta').click(function () {
            var file = app.KycNonWiraswasta;
            
            ////Validasi Mandatory Tele Survey
            // if($('#slc-sektor-ekonomi-level-1-tele-survey-non-wiraswasta option:selected').val() == null || 
            //    $('#slc-sektor-ekonomi-level-1-tele-survey-non-wiraswasta option:selected').val() == ''){
            //     $('#err-slc-sektor-ekonomi-level-1-tele-survey-non-wiraswasta').html('Sektor Ekonomi Level 1 Wajib Diisi');
            //     $('#err-slc-sektor-ekonomi-level-1-tele-survey-non-wiraswasta').prop("hidden", false);
            //     $('.error-slc-sektor-ekonomi-level-1-tele-survey-non-wiraswasta').css({"border-color": "red"});
            // }
            // else if($('#slc-sektor-ekonomi-level-1-tele-survey-non-wiraswasta option:selected').val() != null || 
            //         $('#slc-sektor-ekonomi-level-1-tele-survey-non-wiraswasta option:selected').val() != ''){
            //             $('#err-slc-sektor-ekonomi-level-1-tele-survey-non-wiraswasta').html('');
            //             $('#err-slc-sektor-ekonomi-level-1-tele-survey-non-wiraswasta').prop("hidden", true);
            //             $('.error-slc-sektor-ekonomi-level-1-tele-survey-non-wiraswasta').css({"border-color": ""});
            // }

            // if($('#slc-sektor-ekonomi-level-2-tele-survey-non-wiraswasta option:selected').val() == null || 
            //    $('#slc-sektor-ekonomi-level-2-tele-survey-non-wiraswasta option:selected').val() == ''){
            //     $('#err-slc-sektor-ekonomi-level-2-tele-survey-non-wiraswasta').html('Sektor Ekonomi Level 2 Wajib Diisi');
            //     $('#err-slc-sektor-ekonomi-level-2-tele-survey-non-wiraswasta').prop("hidden", false);
            //     $('.error-slc-sektor-ekonomi-level-2-tele-survey-non-wiraswasta').css({"border-color": "red"});
            // }
            // else if($('#slc-sektor-ekonomi-level-2-tele-survey-non-wiraswasta option:selected').val() != null || 
            //         $('#slc-sektor-ekonomi-level-2-tele-survey-non-wiraswasta option:selected').val() != ''){
            //             $('#err-slc-sektor-ekonomi-level-2-tele-survey-non-wiraswasta').html('');
            //             $('#err-slc-sektor-ekonomi-level-2-tele-survey-non-wiraswasta').prop("hidden", true);
            //             $('.error-slc-sektor-ekonomi-level-2-tele-survey-non-wiraswasta').css({"border-color": ""});
            // }

            // if($('#slc-sektor-ekonomi-level-3-tele-survey-non-wiraswasta option:selected').val() == null || 
            //    $('#slc-sektor-ekonomi-level-3-tele-survey-non-wiraswasta option:selected').val() == ''){
            //     $('#err-slc-sektor-ekonomi-level-3-tele-survey-non-wiraswasta').html('Sektor Ekonomi Level 3 Wajib Diisi');
            //     $('#err-slc-sektor-ekonomi-level-3-tele-survey-non-wiraswasta').prop("hidden", false);
            //     $('.error-slc-sektor-ekonomi-level-3-tele-survey-non-wiraswasta').css({"border-color": "red"});
            // }
            // else if($('#slc-sektor-ekonomi-level-3-tele-survey-non-wiraswasta option:selected').val() != null || 
            //         $('#slc-sektor-ekonomi-level-3-tele-survey-non-wiraswasta option:selected').val() != ''){
            //             $('#err-slc-sektor-ekonomi-level-3-tele-survey-non-wiraswasta').html('');
            //             $('#err-slc-sektor-ekonomi-level-3-tele-survey-non-wiraswasta').prop("hidden", true);
            //             $('.error-slc-sektor-ekonomi-level-3-tele-survey-non-wiraswasta').css({"border-color": ""});
            // }

            // if($('#dokumen-bukti-bekerja-tele-survey-non-wiraswasta').val() == ''){
            //     $('#err-dokumen-bukti-bekerja-tele-survey-non-wiraswasta').html('Dokumen Bukti Bekerja Wajib Diisi');
            //     $('#err-dokumen-bukti-bekerja-tele-survey-non-wiraswasta').prop("hidden", false);
            //     $('.error-dokumen-bukti-bekerja-tele-survey-non-wiraswasta').css({"border-color": "red"});
            // }
            // else if($('#dokumen-bukti-bekerja-tele-survey-non-wiraswasta').val() != ''){
            //             $('#err-dokumen-bukti-bekerja-tele-survey-non-wiraswasta').html('');
            //             $('#err-dokumen-bukti-bekerja-tele-survey-non-wiraswasta').prop("hidden", true);
            //             $('.error-dokumen-bukti-bekerja-tele-survey-non-wiraswasta').css({"border-color": ""});
            // }

            // if($('#dokumen-bukti-penghasilan-tele-survey-non-wiraswasta').val() == ''){
            //     $('#err-dokumen-bukti-penghasilan-tele-survey-non-wiraswasta').html('Dokumen Bukti Bekerja Wajib Diisi');
            //     $('#err-dokumen-bukti-penghasilan-tele-survey-non-wiraswasta').prop("hidden", false);
            //     $('.error-dokumen-bukti-penghasilan-tele-survey-non-wiraswasta').css({"border-color": "red"});
            // }
            // else if($('#dokumen-bukti-penghasilan-tele-survey-non-wiraswasta').val() != ''){
            //             $('#err-dokumen-bukti-penghasilan-tele-survey-non-wiraswasta').html('');
            //             $('#err-dokumen-bukti-penghasilan-tele-survey-non-wiraswasta').prop("hidden", true);
            //             $('.error-dokumen-bukti-penghasilan-tele-survey-non-wiraswasta').css({"border-color": ""});
            // }

            // if($('#inp-jarak-nasabah-ke-muf-tele-survey-non-wiraswasta').val() == ''){
            //     $('#err-inp-jarak-nasabah-ke-muf-tele-survey-non-wiraswasta').html('Jarak Tempat Nasabah ke MUF Wajib Diisi');
            //     $('#err-inp-jarak-nasabah-ke-muf-tele-survey-non-wiraswasta').prop("hidden", false);
            //     $('input[id=inp-jarak-nasabah-ke-muf-tele-survey-non-wiraswasta]').css({"border-color": "red"});
            // }
            // else if($('#inp-jarak-nasabah-ke-muf-tele-survey-non-wiraswasta').val() != ''){
            //             $('#err-inp-jarak-nasabah-ke-muf-tele-survey-non-wiraswasta').html('');
            //             $('#err-inp-jarak-nasabah-ke-muf-tele-survey-non-wiraswasta').prop("hidden", true);
            //             $('input[id=inp-jarak-nasabah-ke-muf-tele-survey-non-wiraswasta]').css({"border-color": ""});
            // }

            file.insertTeleSurveyNonWiraswasta();
        });

        //Onchange Upload File Instant Approval
        $('#dokumen-bukti-bekerja-instant-approval-non-wiraswasta').on('change', function(){
            if($('#dokumen-bukti-bekerja-instant-approval-non-wiraswasta').val() != undefined){
                var BuktiBekerjaInstantApproval1 = $('#dokumen-bukti-bekerja-instant-approval-non-wiraswasta')[0].files[0];
                
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
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            // console.log("BASE PDF BB 1",base64);
                            localStorage.setItem("bukti_bekerja_instant_approval_non_wiraswasta", base64);
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
                                    base64BuktiBekerjaInstantApprovalNonWiraswasta = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64BuktiBekerjaInstantApprovalNonWiraswasta = base64BuktiBekerjaInstantApprovalNonWiraswasta;
                                    localStorage.setItem("bukti_bekerja_instant_approval_non_wiraswasta", base64BuktiBekerjaInstantApprovalNonWiraswasta);
                                    // console.log("BASE JPG BB 1",base64BuktiBekerjaInstantApprovalNonWiraswasta);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                        } 
                    }
                }

            }
        });

        $('#newdokbuktibekerjainstantapproval').on('change', '.dokumen-bukti-bekerja-instant-approval-non-wiraswasta-2', function () {
            if($('.dokumen-bukti-bekerja-instant-approval-non-wiraswasta-2').val() != undefined){
                var BuktiBekerjaInstantApproval2 = $('.dokumen-bukti-bekerja-instant-approval-non-wiraswasta-2')[0].files[0];
                
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
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            //console.log("BASE PDF BB 2",base64);
                            localStorage.setItem("bukti_bekerja_instant_approval_non_wiraswasta_2", base64);
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
                                    base64BuktiBekerjaInstantApprovalNonWiraswasta2 = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64BuktiBekerjaInstantApprovalNonWiraswasta2 = base64BuktiBekerjaInstantApprovalNonWiraswasta2;
                                    localStorage.setItem("bukti_bekerja_instant_approval_non_wiraswasta_2", base64BuktiBekerjaInstantApprovalNonWiraswasta2);
                                    //console.log("BASE JPG BB 2",base64BuktiBekerjaInstantApprovalNonWiraswasta2);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                        } 
                    }
                }

            }
        });

        $('#dokumen-bukti-penghasilan-instant-approval-non-wiraswasta').on('change', function(){
            if($('#dokumen-bukti-penghasilan-instant-approval-non-wiraswasta').val() != undefined){
                var BuktiPenghasilanInstantApproval1 = $('#dokumen-bukti-penghasilan-instant-approval-non-wiraswasta')[0].files[0];

                if(BuktiPenghasilanInstantApproval1 != undefined){
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
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            //console.log("BASE PDF BP 1",base64);
                            localStorage.setItem("bukti_penghasilan_instant_approval_non_wiraswasta", base64);
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
                                    base64BuktiPenghasilanInstantApprovalNonWiraswasta = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64BuktiPenghasilanInstantApprovalNonWiraswasta = base64BuktiPenghasilanInstantApprovalNonWiraswasta;
                                    localStorage.setItem("bukti_penghasilan_instant_approval_non_wiraswasta", base64BuktiPenghasilanInstantApprovalNonWiraswasta);
                                    //console.log("BASE JPG BP 1", base64BuktiPenghasilanInstantApprovalNonWiraswasta);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                        } 
                    }
                }
            }
        });

        $('#newdokbuktipenghasilaninstantapproval').on('change', '.dokumen-bukti-penghasilan-instant-approval-non-wiraswasta-2', function () {
            if($('.dokumen-bukti-penghasilan-instant-approval-non-wiraswasta-2').val() != undefined){
                var BuktiPenghasilanInstantApproval2 = $('.dokumen-bukti-penghasilan-instant-approval-non-wiraswasta-2')[0].files[0];
                
                if(BuktiPenghasilanInstantApproval2 != undefined){
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
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            //console.log("BASE PDF BP 2",base64);
                            localStorage.setItem("bukti_penghasilan_instant_approval_non_wiraswasta_2", base64);
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
                                    base64BuktiPenghasilanInstantApprovalNonWiraswasta2 = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64BuktiPenghasilanInstantApprovalNonWiraswasta2 = base64BuktiPenghasilanInstantApprovalNonWiraswasta2;
                                    localStorage.setItem("bukti_penghasilan_instant_approval_non_wiraswasta_2", base64BuktiPenghasilanInstantApprovalNonWiraswasta2);
                                    //console.log("BASE JPG BP 2",base64BuktiPenghasilanInstantApprovalNonWiraswasta2);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                        } 
                    }
                }

            }
        });

        $('#newdokbuktipenghasilaninstantapproval').on('change', '.dokumen-bukti-penghasilan-instant-approval-non-wiraswasta-3', function () {
            if($('.dokumen-bukti-penghasilan-instant-approval-non-wiraswasta-3').val() != undefined){
                var BuktiPenghasilanInstantApproval3 = $('.dokumen-bukti-penghasilan-instant-approval-non-wiraswasta-3')[0].files[0];
                
                if(BuktiPenghasilanInstantApproval3 != undefined){
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
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            //console.log("BASE PDF BP 3",base64);
                            localStorage.setItem("bukti_penghasilan_instant_approval_non_wiraswasta_3", base64);
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
                                    base64BuktiPenghasilanInstantApprovalNonWiraswasta3 = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64BuktiPenghasilanInstantApprovalNonWiraswasta3 = base64BuktiPenghasilanInstantApprovalNonWiraswasta3;
                                    localStorage.setItem("bukti_penghasilan_instant_approval_non_wiraswasta_3", base64BuktiPenghasilanInstantApprovalNonWiraswasta3);
                                    //console.log("BASE JPG BP 3",base64BuktiPenghasilanInstantApprovalNonWiraswasta3);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                        } 
                    }
                }

            }
        });

        $('#newdokbuktipenghasilaninstantapproval').on('change', '.dokumen-bukti-penghasilan-instant-approval-non-wiraswasta-4', function () {
            if($('.dokumen-bukti-penghasilan-instant-approval-non-wiraswasta-4').val() != undefined){
                var BuktiPenghasilanInstantApproval4 = $('.dokumen-bukti-penghasilan-instant-approval-non-wiraswasta-4')[0].files[0];
                
                if(BuktiPenghasilanInstantApproval4 != undefined){
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
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            //console.log("BASE PDF BP 4",base64);
                            localStorage.setItem("bukti_penghasilan_instant_approval_non_wiraswasta_4", base64);
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
                                    base64BuktiPenghasilanInstantApprovalNonWiraswasta4 = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64BuktiPenghasilanInstantApprovalNonWiraswasta4 = base64BuktiPenghasilanInstantApprovalNonWiraswasta4;
                                    localStorage.setItem("bukti_penghasilan_instant_approval_non_wiraswasta_4", base64BuktiPenghasilanInstantApprovalNonWiraswasta4);
                                    //console.log("BASE JPG BP 4",base64BuktiPenghasilanInstantApprovalNonWiraswasta4);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                        } 
                    }
                }

            }
        });

        $('#newdokbuktipenghasilaninstantapproval').on('change', '.dokumen-bukti-penghasilan-instant-approval-non-wiraswasta-5', function () {
            if($('.dokumen-bukti-penghasilan-instant-approval-non-wiraswasta-5').val() != undefined){
                var BuktiPenghasilanInstantApproval5 = $('.dokumen-bukti-penghasilan-instant-approval-non-wiraswasta-5')[0].files[0];
                
                if(BuktiPenghasilanInstantApproval5 != undefined){
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
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            //console.log("BASE PDF BP 5",base64);
                            localStorage.setItem("bukti_penghasilan_instant_approval_non_wiraswasta_5", base64);
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
                                    base64BuktiPenghasilanInstantApprovalNonWiraswasta5 = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64BuktiPenghasilanInstantApprovalNonWiraswasta5 = base64BuktiPenghasilanInstantApprovalNonWiraswasta5;
                                    localStorage.setItem("bukti_penghasilan_instant_approval_non_wiraswasta_5", base64BuktiPenghasilanInstantApprovalNonWiraswasta5);
                                    //console.log("BASE JPG BP 5",base64BuktiPenghasilanInstantApprovalNonWiraswasta5);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                        } 
                    }
                }

            }
        });

        $('#newdokbuktipenghasilaninstantapproval').on('change', '.dokumen-bukti-penghasilan-instant-approval-non-wiraswasta-6', function () {
            if($('.dokumen-bukti-penghasilan-instant-approval-non-wiraswasta-6').val() != undefined){
                var BuktiPenghasilanInstantApproval6 = $('.dokumen-bukti-penghasilan-instant-approval-non-wiraswasta-6')[0].files[0];
                
                if(BuktiPenghasilanInstantApproval6 != undefined){
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
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            //console.log("BASE PDF BP 6",base64);
                            localStorage.setItem("bukti_penghasilan_instant_approval_non_wiraswasta_6", base64);
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
                                    base64BuktiPenghasilanInstantApprovalNonWiraswasta6 = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64BuktiPenghasilanInstantApprovalNonWiraswasta6 = base64BuktiPenghasilanInstantApprovalNonWiraswasta6;
                                    localStorage.setItem("bukti_penghasilan_instant_approval_non_wiraswasta_6", base64BuktiPenghasilanInstantApprovalNonWiraswasta6);
                                    //console.log("BASE JPG BP 6",base64BuktiPenghasilanInstantApprovalNonWiraswasta6);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                        } 
                    }
                }

            }
        });
        //END

        //Onchange Upload File Tele Survey
        $('#dokumen-bukti-bekerja-tele-survey-non-wiraswasta').on('change', function(){
            if($('#dokumen-bukti-bekerja-tele-survey-non-wiraswasta').val() != undefined){
                var BuktiBekerjaTeleSurvey1 = $('#dokumen-bukti-bekerja-tele-survey-non-wiraswasta')[0].files[0];
                
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
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            //console.log("BASE PDF BB 1",base64);
                            localStorage.setItem("bukti_bekerja_tele_survey_non_wiraswasta", base64);
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
                                    base64BuktiBekerjaTeleSurveyNonWiraswasta = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64BuktiBekerjaTeleSurveyNonWiraswasta = base64BuktiBekerjaTeleSurveyNonWiraswasta;
                                    localStorage.setItem("bukti_bekerja_tele_survey_non_wiraswasta", base64BuktiBekerjaTeleSurveyNonWiraswasta);
                                    //console.log("BASE JPG BB 1",base64BuktiBekerjaTeleSurveyNonWiraswasta);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                        } 
                    }
                }

            }
        });

        $('#newdokbuktibekerjatelesurvey').on('change', '.dokumen-bukti-bekerja-tele-survey-non-wiraswasta-2', function () {
            if($('.dokumen-bukti-bekerja-tele-survey-non-wiraswasta-2').val() != undefined){
                var BuktiBekerjaTeleSurvey2 = $('.dokumen-bukti-bekerja-tele-survey-non-wiraswasta-2')[0].files[0];
                
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
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            //console.log("BASE PDF BB 2",base64);
                            localStorage.setItem("bukti_bekerja_tele_survey_non_wiraswasta_2", base64);
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
                                    base64BuktiBekerjaTeleSurveyNonWiraswasta2 = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64BuktiBekerjaTeleSurveyNonWiraswasta2 = base64BuktiBekerjaTeleSurveyNonWiraswasta2;
                                    localStorage.setItem("bukti_bekerja_tele_survey_non_wiraswasta_2", base64BuktiBekerjaTeleSurveyNonWiraswasta2);
                                    //console.log("BASE JPG BB 2",base64BuktiBekerjaTeleSurveyNonWiraswasta2);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                        } 
                    }
                }

            }
        });

        $('#dokumen-bukti-penghasilan-tele-survey-non-wiraswasta').on('change', function(){
            if($('#dokumen-bukti-penghasilan-tele-survey-non-wiraswasta').val() != undefined){
                var BuktiPenghasilanTeleSurvey1 = $('#dokumen-bukti-penghasilan-tele-survey-non-wiraswasta')[0].files[0];

                if(BuktiPenghasilanTeleSurvey1 != undefined){
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
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            //console.log("BASE PDF BP 1",base64);
                            localStorage.setItem("bukti_penghasilan_tele_survey_non_wiraswasta", base64);
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
                                    base64BuktiPenghasilanTeleSurveyNonWiraswasta = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64BuktiPenghasilanTeleSurveyNonWiraswasta = base64BuktiPenghasilanTeleSurveyNonWiraswasta;
                                    localStorage.setItem("bukti_penghasilan_tele_survey_non_wiraswasta", base64BuktiPenghasilanTeleSurveyNonWiraswasta);
                                    //console.log("BASE JPG BP 1", base64BuktiPenghasilanTeleSurveyNonWiraswasta);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                        } 
                    }
                }
            }
        });

        $('#newdokbuktipenghasilantelesurvey').on('change', '.dokumen-bukti-penghasilan-tele-survey-non-wiraswasta-2', function () {
            if($('.dokumen-bukti-penghasilan-tele-survey-non-wiraswasta-2').val() != undefined){
                var BuktiPenghasilanTeleSurvey2 = $('.dokumen-bukti-penghasilan-tele-survey-non-wiraswasta-2')[0].files[0];
                
                if(BuktiPenghasilanTeleSurvey2 != undefined){
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
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            //console.log("BASE PDF BP 2",base64);
                            localStorage.setItem("bukti_penghasilan_tele_survey_non_wiraswasta_2", base64);
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
                                    base64BuktiPenghasilanTeleSurveyNonWiraswasta2 = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64BuktiPenghasilanTeleSurveyNonWiraswasta2 = base64BuktiPenghasilanTeleSurveyNonWiraswasta2;
                                    localStorage.setItem("bukti_penghasilan_tele_survey_non_wiraswasta_2", base64BuktiPenghasilanTeleSurveyNonWiraswasta2);
                                    //console.log("BASE JPG BP 2",base64BuktiPenghasilanTeleSurveyNonWiraswasta2);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                        } 
                    }
                }

            }
        });

        $('#newdokbuktipenghasilantelesurvey').on('change', '.dokumen-bukti-penghasilan-tele-survey-non-wiraswasta-3', function () {
            if($('.dokumen-bukti-penghasilan-tele-survey-non-wiraswasta-3').val() != undefined){
                var BuktiPenghasilanTeleSurvey3 = $('.dokumen-bukti-penghasilan-tele-survey-non-wiraswasta-3')[0].files[0];
                
                if(BuktiPenghasilanTeleSurvey3 != undefined){
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
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            //console.log("BASE PDF BP 3",base64);
                            localStorage.setItem("bukti_penghasilan_tele_survey_non_wiraswasta_3", base64);
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
                                    base64BuktiPenghasilanTeleSurveyNonWiraswasta3 = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64BuktiPenghasilanTeleSurveyNonWiraswasta3 = base64BuktiPenghasilanTeleSurveyNonWiraswasta3;
                                    localStorage.setItem("bukti_penghasilan_tele_survey_non_wiraswasta_3", base64BuktiPenghasilanTeleSurveyNonWiraswasta3);
                                    //console.log("BASE JPG BP 3",base64BuktiPenghasilanTeleSurveyNonWiraswasta3);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                        } 
                    }
                }

            }
        });

        $('#newdokbuktipenghasilantelesurvey').on('change', '.dokumen-bukti-penghasilan-tele-survey-non-wiraswasta-4', function () {
            if($('.dokumen-bukti-penghasilan-tele-survey-non-wiraswasta-4').val() != undefined){
                var BuktiPenghasilanTeleSurvey4 = $('.dokumen-bukti-penghasilan-tele-survey-non-wiraswasta-4')[0].files[0];
                
                if(BuktiPenghasilanTeleSurvey4 != undefined){
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
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            //console.log("BASE PDF BP 4",base64);
                            localStorage.setItem("bukti_penghasilan_tele_survey_non_wiraswasta_4", base64);
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
                                    base64BuktiPenghasilanTeleSurveyNonWiraswasta4 = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64BuktiPenghasilanTeleSurveyNonWiraswasta4 = base64BuktiPenghasilanTeleSurveyNonWiraswasta4;
                                    localStorage.setItem("bukti_penghasilan_tele_survey_non_wiraswasta_4", base64BuktiPenghasilanTeleSurveyNonWiraswasta4);
                                    //console.log("BASE JPG BP 4",base64BuktiPenghasilanTeleSurveyNonWiraswasta4);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                        } 
                    }
                }

            }
        });

        $('#newdokbuktipenghasilantelesurvey').on('change', '.dokumen-bukti-penghasilan-tele-survey-non-wiraswasta-5', function () {
            if($('.dokumen-bukti-penghasilan-tele-survey-non-wiraswasta-5').val() != undefined){
                var BuktiPenghasilanTeleSurvey5 = $('.dokumen-bukti-penghasilan-tele-survey-non-wiraswasta-5')[0].files[0];
                
                if(BuktiPenghasilanTeleSurvey5 != undefined){
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
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            //console.log("BASE PDF BP 5",base64);
                            localStorage.setItem("bukti_penghasilan_tele_survey_non_wiraswasta_5", base64);
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
                                    base64BuktiPenghasilanTeleSurveyNonWiraswasta5 = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64BuktiPenghasilanTeleSurveyNonWiraswasta5 = base64BuktiPenghasilanTeleSurveyNonWiraswasta5;
                                    localStorage.setItem("bukti_penghasilan_tele_survey_non_wiraswasta_5", base64BuktiPenghasilanTeleSurveyNonWiraswasta5);
                                    //console.log("BASE JPG BP 5",base64BuktiPenghasilanTeleSurveyNonWiraswasta5);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                        } 
                    }
                }

            }
        });

        $('#newdokbuktipenghasilantelesurvey').on('change', '.dokumen-bukti-penghasilan-tele-survey-non-wiraswasta-6', function () {
            if($('.dokumen-bukti-penghasilan-tele-survey-non-wiraswasta-6').val() != undefined){
                var BuktiPenghasilanTeleSurvey6 = $('.dokumen-bukti-penghasilan-tele-survey-non-wiraswasta-6')[0].files[0];
                
                if(BuktiPenghasilanTeleSurvey6 != undefined){
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
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            //console.log("BASE PDF BP 6",base64);
                            localStorage.setItem("bukti_penghasilan_tele_survey_non_wiraswasta_6", base64);
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
                                    base64BuktiPenghasilanTeleSurveyNonWiraswasta6 = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64BuktiPenghasilanTeleSurveyNonWiraswasta6 = base64BuktiPenghasilanTeleSurveyNonWiraswasta6;
                                    localStorage.setItem("bukti_penghasilan_tele_survey_non_wiraswasta_6", base64BuktiPenghasilanTeleSurveyNonWiraswasta6);
                                    //console.log("BASE JPG BP 6",base64BuktiPenghasilanTeleSurveyNonWiraswasta6);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                        } 
                    }
                }

            }
        });
        //END

        //Onchange Upload File Silent Survey
        $('#dokumen-bukti-bekerja-silent-survey-non-wiraswasta').on('change', function(){
            if($('#dokumen-bukti-bekerja-silent-survey-non-wiraswasta').val() != undefined){
                var BuktiBekerjaSilentSurvey1 = $('#dokumen-bukti-bekerja-silent-survey-non-wiraswasta')[0].files[0];
                
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
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            //console.log("BASE PDF BB 1",base64);
                            localStorage.setItem("bukti_bekerja_silent_survey_non_wiraswasta", base64);
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
                                    base64BuktiBekerjaSilentSurveyNonWiraswasta = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64BuktiBekerjaSilentSurveyNonWiraswasta = base64BuktiBekerjaSilentSurveyNonWiraswasta;
                                    localStorage.setItem("bukti_bekerja_silent_survey_non_wiraswasta", base64BuktiBekerjaSilentSurveyNonWiraswasta);
                                    //console.log("BASE JPG BB 1",base64BuktiBekerjaSilentSurveyNonWiraswasta);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                        } 
                    }
                }

            }
        });

        $('#newdokbuktibekerjasilentsurvey').on('change', '.dokumen-bukti-bekerja-silent-survey-non-wiraswasta-2', function () {
            if($('.dokumen-bukti-bekerja-silent-survey-non-wiraswasta-2').val() != undefined){
                var BuktiBekerjaSilentSurvey2 = $('.dokumen-bukti-bekerja-silent-survey-non-wiraswasta-2')[0].files[0];
                
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
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            //console.log("BASE PDF BB 2",base64);
                            localStorage.setItem("bukti_bekerja_silent_survey_non_wiraswasta_2", base64);
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
                                    base64BuktiBekerjaSilentSurveyNonWiraswasta2 = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64BuktiBekerjaSilentSurveyNonWiraswasta2 = base64BuktiBekerjaSilentSurveyNonWiraswasta2;
                                    localStorage.setItem("bukti_bekerja_silent_survey_non_wiraswasta_2", base64BuktiBekerjaSilentSurveyNonWiraswasta2);
                                    //console.log("BASE JPG BB 2",base64BuktiBekerjaSilentSurveyNonWiraswasta2);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                        } 
                    }
                }

            }
        });

        $('#dokumen-bukti-penghasilan-silent-survey-non-wiraswasta').on('change', function(){
            if($('#dokumen-bukti-penghasilan-silent-survey-non-wiraswasta').val() != undefined){
                var BuktiPenghasilanSilentSurvey1 = $('#dokumen-bukti-penghasilan-silent-survey-non-wiraswasta')[0].files[0];

                if(BuktiPenghasilanSilentSurvey1 != undefined){
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
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            //console.log("BASE PDF BP 1",base64);
                            localStorage.setItem("bukti_penghasilan_silent_survey_non_wiraswasta", base64);
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
                                    base64BuktiPenghasilanSilentSurveyNonWiraswasta = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64BuktiPenghasilanSilentSurveyNonWiraswasta = base64BuktiPenghasilanSilentSurveyNonWiraswasta;
                                    localStorage.setItem("bukti_penghasilan_silent_survey_non_wiraswasta", base64BuktiPenghasilanSilentSurveyNonWiraswasta);
                                    //console.log("BASE JPG BP 1", base64BuktiPenghasilanSilentSurveyNonWiraswasta);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                        } 
                    }
                }
            }
        });

        $('#newdokbuktipenghasilansilentsurvey').on('change', '.dokumen-bukti-penghasilan-silent-survey-non-wiraswasta-2', function () {
            if($('.dokumen-bukti-penghasilan-silent-survey-non-wiraswasta-2').val() != undefined){
                var BuktiPenghasilanSilentSurvey2 = $('.dokumen-bukti-penghasilan-silent-survey-non-wiraswasta-2')[0].files[0];
                
                if(BuktiPenghasilanSilentSurvey2 != undefined){
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
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            //console.log("BASE PDF BP 2",base64);
                            localStorage.setItem("bukti_penghasilan_silent_survey_non_wiraswasta_2", base64);
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
                                    base64BuktiPenghasilanSilentSurveyNonWiraswasta2 = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64BuktiPenghasilanSilentSurveyNonWiraswasta2 = base64BuktiPenghasilanSilentSurveyNonWiraswasta2;
                                    localStorage.setItem("bukti_penghasilan_silent_survey_non_wiraswasta_2", base64BuktiPenghasilanSilentSurveyNonWiraswasta2);
                                    //console.log("BASE JPG BP 2",base64BuktiPenghasilanSilentSurveyNonWiraswasta2);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                        } 
                    }
                }

            }
        });

        $('#newdokbuktipenghasilansilentsurvey').on('change', '.dokumen-bukti-penghasilan-silent-survey-non-wiraswasta-3', function () {
            if($('.dokumen-bukti-penghasilan-silent-survey-non-wiraswasta-3').val() != undefined){
                var BuktiPenghasilanSilentSurvey3 = $('.dokumen-bukti-penghasilan-silent-survey-non-wiraswasta-3')[0].files[0];
                
                if(BuktiPenghasilanSilentSurvey3 != undefined){
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
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            //console.log("BASE PDF BP 3",base64);
                            localStorage.setItem("bukti_penghasilan_silent_survey_non_wiraswasta_3", base64);
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
                                    base64BuktiPenghasilanSilentSurveyNonWiraswasta3 = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64BuktiPenghasilanSilentSurveyNonWiraswasta3 = base64BuktiPenghasilanSilentSurveyNonWiraswasta3;
                                    localStorage.setItem("bukti_penghasilan_silent_survey_non_wiraswasta_3", base64BuktiPenghasilanSilentSurveyNonWiraswasta3);
                                    //console.log("BASE JPG BP 3",base64BuktiPenghasilanSilentSurveyNonWiraswasta3);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                        } 
                    }
                }

            }
        });

        $('#newdokbuktipenghasilansilentsurvey').on('change', '.dokumen-bukti-penghasilan-silent-survey-non-wiraswasta-4', function () {
            if($('.dokumen-bukti-penghasilan-silent-survey-non-wiraswasta-4').val() != undefined){
                var BuktiPenghasilanSilentSurvey4 = $('.dokumen-bukti-penghasilan-silent-survey-non-wiraswasta-4')[0].files[0];
                
                if(BuktiPenghasilanSilentSurvey4 != undefined){
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
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            //console.log("BASE PDF BP 4",base64);
                            localStorage.setItem("bukti_penghasilan_silent_survey_non_wiraswasta_4", base64);
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
                                    base64BuktiPenghasilanSilentSurveyNonWiraswasta4 = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64BuktiPenghasilanSilentSurveyNonWiraswasta4 = base64BuktiPenghasilanSilentSurveyNonWiraswasta4;
                                    localStorage.setItem("bukti_penghasilan_silent_survey_non_wiraswasta_4", base64BuktiPenghasilanSilentSurveyNonWiraswasta4);
                                    //console.log("BASE JPG BP 4",base64BuktiPenghasilanSilentSurveyNonWiraswasta4);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                        } 
                    }
                }

            }
        });

        $('#newdokbuktipenghasilansilentsurvey').on('change', '.dokumen-bukti-penghasilan-silent-survey-non-wiraswasta-5', function () {
            if($('.dokumen-bukti-penghasilan-silent-survey-non-wiraswasta-5').val() != undefined){
                var BuktiPenghasilanSilentSurvey5 = $('.dokumen-bukti-penghasilan-silent-survey-non-wiraswasta-5')[0].files[0];
                
                if(BuktiPenghasilanSilentSurvey5 != undefined){
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
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            //console.log("BASE PDF BP 5",base64);
                            localStorage.setItem("bukti_penghasilan_silent_survey_non_wiraswasta_5", base64);
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
                                    base64BuktiPenghasilanSilentSurveyNonWiraswasta5 = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64BuktiPenghasilanSilentSurveyNonWiraswasta5 = base64BuktiPenghasilanSilentSurveyNonWiraswasta5;
                                    localStorage.setItem("bukti_penghasilan_silent_survey_non_wiraswasta_5", base64BuktiPenghasilanSilentSurveyNonWiraswasta5);
                                    //console.log("BASE JPG BP 5",base64BuktiPenghasilanSilentSurveyNonWiraswasta5);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                        } 
                    }
                }

            }
        });

        $('#newdokbuktipenghasilansilentsurvey').on('change', '.dokumen-bukti-penghasilan-silent-survey-non-wiraswasta-6', function () {
            if($('.dokumen-bukti-penghasilan-silent-survey-non-wiraswasta-6').val() != undefined){
                var BuktiPenghasilanSilentSurvey6 = $('.dokumen-bukti-penghasilan-silent-survey-non-wiraswasta-6')[0].files[0];
                
                if(BuktiPenghasilanSilentSurvey6 != undefined){
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
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            //console.log("BASE PDF BP 6",base64);
                            localStorage.setItem("bukti_penghasilan_silent_survey_non_wiraswasta_6", base64);
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
                                    base64BuktiPenghasilanSilentSurveyNonWiraswasta6 = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64BuktiPenghasilanSilentSurveyNonWiraswasta6 = base64BuktiPenghasilanSilentSurveyNonWiraswasta6;
                                    localStorage.setItem("bukti_penghasilan_silent_survey_non_wiraswasta_6", base64BuktiPenghasilanSilentSurveyNonWiraswasta6);
                                    //console.log("BASE JPG BP 6",base64BuktiPenghasilanSilentSurveyNonWiraswasta6);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                        } 
                    }
                }

            }
        });
        //END

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

    getDetailTeleSurvey: function(order_id) {
    	let param = [];
	    var that = app.KycNonWiraswasta;

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
                    // //TESTING DATA SILENT SURVEY KE TELE SURVEY
                    // if(data.data.screening_2 == "NON-IA SILENT SURVEY"){
                    //     data.data.screening_2 = "NON-IA TELE SURVEY";
                    // }

                    if(data.data.screening_2 == "INSTANT APPROVAL"){

                        //Hardcode Data Informasi Nasabah
                        var tipe_nasabah_non_wiraswasta = "BMRI";
                        var tanggal_aplikasi_non_wiraswasta = "2022/01/07 10:02:19";
                        var source_order_non_wiraswasta = "MUF PORTAL";
                        var cabang_non_wiraswasta = "CIKARANG";
                        
                        var jabatan_nasabah_non_wiraswasta = "PERSEORANGAN / BADAN USAHA PERSEORANGAN";
                        var sektor_tempat_bekerja_non_wiraswasta = "USAHA MIKRO KECIL MENENGAH";

                        //Hide Tab
                        $("#tab-silentsurvey").hide();
                        $("#tab-telesurvey").hide();

                        //Main Page
                        $("#inp-nomor-aplikasi-kyc-non-wiraswasta").val(data.data.order_id);
                        $("#inp-nama-sesuai-ktp-kyc-non-wiraswasta").val(data.data.detail.debitur.personal.deb_nama_sesuai_ktp);
                        $("#inp-tipe-nasabah-kyc-non-wiraswasta").val(tipe_nasabah_non_wiraswasta);
                        $("#inp-tanggal-aplikasi-kyc-non-wiraswasta").val(tanggal_aplikasi_non_wiraswasta);
                        $("#inp-source-order-kyc-non-wiraswasta").val(source_order_non_wiraswasta);
                        $("#inp-cabang-kyc-non-wiraswasta").val(cabang_non_wiraswasta);

                        //Sub Tab Instant Approval
                        $("#inp-pekerjaan-nasabah-instant-approval-non-wiraswasta").val(data.data.detail.debitur.personal.occupation.occupation_pro.debitur.deb_occupation_desc);
                        var jenis_tempat_bekerja = $("<option selected='selected'></option>").val(data.data.detail.debitur.personal.occupation.occupation_pro.debitur.deb_company_type_code).text(data.data.detail.debitur.personal.occupation.occupation_pro.debitur.deb_company_type_desc);
                        $("#slc-jenis-tempat-bekerja-instant-approval-non-wiraswasta").append(jenis_tempat_bekerja).trigger('change');
                        var nama_tempat_bekerja = data.data.detail.debitur.personal.occupation.occupation_pro.debitur.deb_name_of_workplace
                        $("#inp-nama-tempat-bekerja-instant-approval-non-wiraswasta").val(nama_tempat_bekerja.toUpperCase());
                        $("#inp-jabatan-nasabah-instant-approval-non-wiraswasta").val(jabatan_nasabah_non_wiraswasta);
                        $("#inp-sektor-tempat-bekerja-instant-approval-non-wiraswasta").val(sektor_tempat_bekerja_non_wiraswasta);
                    }

                    else if(data.data.screening_2 == "NON-IA SILENT SURVEY"){

                        //Hardcode Data Informasi Nasabah
                        var pekerjan_nasabah_non_wiraswasta = "NON-WIRASWASTA";
                        var jenis_tempat_bekerja_non_wiraswasta_id = "01";
                        var jenis_tempat_bekerja_non_wiraswasta_desc = "PEGAWAI NEGRI SIPIL";
                        var nama_tempat_bekerja_non_wiraswasta = "KECAMATAN CIBITUNG";
                        var jabatan_nasabah_non_wiraswasta = "PEGAWAI NEGRI SIPIL DAERAH";
                        var sektor_tempat_bekerja_non_wiraswasta = "BIROKRASI NEGARA";
                        
                        //Hide Tab
                        $("#tab-instantapproval").hide();
                        $("#tab-telesurvey").hide();
                        
                        //Main Page
                        $("#inp-nomor-aplikasi-kyc-non-wiraswasta").val(data.data.order_id);
                        $("#inp-nama-sesuai-ktp-kyc-non-wiraswasta").val(data.data.detail.debitur.personal.nama_sesuai_ktp);
                        $("#inp-tipe-nasabah-kyc-non-wiraswasta").val(data.data.customer_type_desc);
                        $("#inp-tanggal-aplikasi-kyc-non-wiraswasta").val(data.data.order_created_date);
                        $("#inp-source-order-kyc-non-wiraswasta").val(data.data.source_order_desc);
                        $("#inp-cabang-kyc-non-wiraswasta").val(data.data.branch_desc);

                        //Sub Tab Silent Survey
                        $("#inp-pekerjaan-nasabah-silent-survey-non-wiraswasta").val(pekerjan_nasabah_non_wiraswasta);
                        var jenis_tempat_bekerja_non_wiraswasta = $("<option selected='selected'></option>").val(jenis_tempat_bekerja_non_wiraswasta_id).text(jenis_tempat_bekerja_non_wiraswasta_desc);
 					    $("#slc-jenis-tempat-bekerja-silent-survey-non-wiraswasta").append(jenis_tempat_bekerja_non_wiraswasta).trigger('change');
                        $("#inp-nama-tempat-bekerja-silent-survey-non-wiraswasta").val(nama_tempat_bekerja_non_wiraswasta);
                        $("#inp-jabatan-nasabah-silent-survey-non-wiraswasta").val(jabatan_nasabah_non_wiraswasta);
                        $("#inp-sektor-tempat-bekerja-silent-survey-non-wiraswasta").val(sektor_tempat_bekerja_non_wiraswasta);

                    }

                    else if(data.data.screening_2 == "NON-IA TELE SURVEY"){

                        //Hardcode Data Informasi Nasabah
                        var pekerjan_nasabah_non_wiraswasta = "NON-WIRASWASTA";
                        var jenis_tempat_bekerja_non_wiraswasta_id = "01";
                        var jenis_tempat_bekerja_non_wiraswasta_desc = "PEGAWAI NEGRI SIPIL";
                        var nama_tempat_bekerja_non_wiraswasta = "KECAMATAN CIBITUNG";
                        var jabatan_nasabah_non_wiraswasta = "PEGAWAI NEGRI SIPIL DAERAH";
                        var sektor_tempat_bekerja_non_wiraswasta = "BIROKRASI NEGARA";
                        
                        //Hide Tab
                        $("#tab-instantapproval").hide();
                        $("#tab-silentsurvey").hide();
                        
                        //Main Page
                        $("#inp-nomor-aplikasi-kyc-non-wiraswasta").val(data.data.order_id);
                        $("#inp-nama-sesuai-ktp-kyc-non-wiraswasta").val(data.data.detail.debitur.personal.nama_sesuai_ktp);
                        $("#inp-tipe-nasabah-kyc-non-wiraswasta").val(data.data.customer_type_desc);
                        $("#inp-tanggal-aplikasi-kyc-non-wiraswasta").val(data.data.order_created_date);
                        $("#inp-source-order-kyc-non-wiraswasta").val(data.data.source_order_desc);
                        $("#inp-cabang-kyc-non-wiraswasta").val(data.data.branch_desc);

                        //Sub Tab Silent Survey
                        $("#inp-pekerjaan-nasabah-tele-survey-non-wiraswasta").val(pekerjan_nasabah_non_wiraswasta);
                        var jenis_tempat_bekerja_non_wiraswasta = $("<option selected='selected'></option>").val(jenis_tempat_bekerja_non_wiraswasta_id).text(jenis_tempat_bekerja_non_wiraswasta_desc);
 					    $("#slc-jenis-tempat-bekerja-tele-survey-non-wiraswasta").append(jenis_tempat_bekerja_non_wiraswasta).trigger('change');
                        $("#inp-nama-tempat-bekerja-tele-survey-non-wiraswasta").val(nama_tempat_bekerja_non_wiraswasta);
                        $("#inp-jabatan-nasabah-tele-survey-non-wiraswasta").val(jabatan_nasabah_non_wiraswasta);
                        $("#inp-sektor-tempat-bekerja-tele-survey-non-wiraswasta").val(sektor_tempat_bekerja_non_wiraswasta);

                    }

	            } else {
	                alert_warning(data);
	            }
	        }
	    });
    },

    insertInstantApprovalNonWiraswasta: function() {
        var that = app.KycNonWiraswasta;
        var pekerjaan_nasabah_instant_approval_non_wiraswasta = {};
        var pekerjaan_nasabah = $('#inp-pekerjaan-nasabah-instant-approval-non-wiraswasta').val();
        var pekerjaan_nasabah_sesuai_tidak_sesuai = document.querySelector('input[name="pekerjaannasabahinstantnonwiraswasta"]:checked').value;
        var jenis_tempat_bekerja = $('#slc-jenis-tempat-bekerja-instant-approval-non-wiraswasta').find(':selected').text();
        var nama_tempat_bekerja = $('#inp-nama-tempat-bekerja-instant-approval-non-wiraswasta').val();
        var nama_tempat_bekerja_sesuai_tidak_sesuai = document.querySelector('input[name="tempatbekerjainstantnonwiraswasta"]:checked').value;
        var jabatan_nasabah = $('#inp-jabatan-nasabah-instant-approval-non-wiraswasta').val();
        var jabatan_nasabah_sesuai_tidak_sesuai = document.querySelector('input[name="jabatannasabahinstantnonwiraswasta"]:checked').value;
        var sektor_tempat_bekerja = $('#inp-sektor-tempat-bekerja-instant-approval-non-wiraswasta').val();
        var sektor_ekonomi_level_1 = $('#slc-sektor-ekonomi-level-1-instant-approval-non-wiraswasta').find(':selected').text();
        var sektor_ekonomi_level_2 = $('#slc-sektor-ekonomi-level-2-instant-approval-non-wiraswasta').find(':selected').text();
        var sektor_ekonomi_level_3 = $('#slc-sektor-ekonomi-level-3-instant-approval-non-wiraswasta').find(':selected').text();
        var dokumen_bukti_bekerja_1 = localStorage.getItem('bukti_bekerja_instant_approval_non_wiraswasta');
        var dokumen_bukti_bekerja_2 = localStorage.getItem('bukti_bekerja_instant_approval_non_wiraswasta_2');
        var dokumen_bukti_penghasilan_1 = localStorage.getItem('bukti_penghasilan_instant_approval_non_wiraswasta');
        var dokumen_bukti_penghasilan_2 = localStorage.getItem('bukti_penghasilan_instant_approval_non_wiraswasta_2');
        var dokumen_bukti_penghasilan_3 = localStorage.getItem('bukti_penghasilan_instant_approval_non_wiraswasta_3');
        var dokumen_bukti_penghasilan_4 = localStorage.getItem('bukti_penghasilan_instant_approval_non_wiraswasta_4');
        var dokumen_bukti_penghasilan_5 = localStorage.getItem('bukti_penghasilan_instant_approval_non_wiraswasta_5');
        var dokumen_bukti_penghasilan_6 = localStorage.getItem('bukti_penghasilan_instant_approval_non_wiraswasta_6');
        var jarak_tempat_bekerja = $('#inp-jarak-nasabah-ke-muf-instant-approval-non-wiraswasta').val();
            
        pekerjaan_nasabah_instant_approval_non_wiraswasta = {
            pekerjaan_nasabah: pekerjaan_nasabah,
            pekerjaan_nasabah_sesuai_tidak_sesuai: pekerjaan_nasabah_sesuai_tidak_sesuai,
            jenis_tempat_bekerja: jenis_tempat_bekerja,
            nama_tempat_bekerja: nama_tempat_bekerja,
            nama_tempat_bekerja_sesuai_tidak_sesuai: nama_tempat_bekerja_sesuai_tidak_sesuai,
            jabatan_nasabah: jabatan_nasabah,
            jabatan_nasabah_sesuai_tidak_sesuai: jabatan_nasabah_sesuai_tidak_sesuai,
            sektor_tempat_bekerja: sektor_tempat_bekerja,
            sektor_ekonomi_level_1: sektor_ekonomi_level_1,
            sektor_ekonomi_level_2: sektor_ekonomi_level_2,
            sektor_ekonomi_level_3: sektor_ekonomi_level_3,
            dokumen_bukti_bekerja_1: dokumen_bukti_bekerja_1,
            dokumen_bukti_bekerja_2: dokumen_bukti_bekerja_2,
            dokumen_bukti_penghasilan_1: dokumen_bukti_penghasilan_1,
            dokumen_bukti_penghasilan_2: dokumen_bukti_penghasilan_2,
            dokumen_bukti_penghasilan_3: dokumen_bukti_penghasilan_3,
            dokumen_bukti_penghasilan_4: dokumen_bukti_penghasilan_4,
            dokumen_bukti_penghasilan_5: dokumen_bukti_penghasilan_5,
            dokumen_bukti_penghasilan_6: dokumen_bukti_penghasilan_6,
            jarak_tempat_bekerja: jarak_tempat_bekerja
        }
        // console.log(pekerjaan_nasabah_instant_approval_non_wiraswasta);

        $.ajax({
			type: "post",
			async: false,
			url: app.base_url + that.api + "submitInstantApprovalNonWiraswasta",
			data: {
                pekerjaan_nasabah_instant_approval_non_wiraswasta: pekerjaan_nasabah_instant_approval_non_wiraswasta,
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

    insertSilentSurveyNonWiraswasta: function() {
        var that = app.KycNonWiraswasta;
        var pekerjaan_nasabah_silent_survey_non_wiraswasta = {};
        var pekerjaan_nasabah = $('#inp-pekerjaan-nasabah-silent-survey-non-wiraswasta').val();
        var pekerjaan_nasabah_sesuai_tidak_sesuai = document.querySelector('input[name="pekerjaannasabahsilentnonwiraswasta"]:checked').value;
        var jenis_tempat_bekerja = $('#slc-jenis-tempat-bekerja-silent-survey-non-wiraswasta').find(':selected').text();
        var nama_tempat_bekerja = $('#inp-nama-tempat-bekerja-silent-survey-non-wiraswasta').val();
        var nama_tempat_bekerja_sesuai_tidak_sesuai = document.querySelector('input[name="tempatbekerjasilentnonwiraswasta"]:checked').value;
        var jabatan_nasabah = $('#inp-jabatan-nasabah-silent-survey-non-wiraswasta').val();
        var jabatan_nasabah_sesuai_tidak_sesuai = document.querySelector('input[name="jabatannasabahsilentnonwiraswasta"]:checked').value;
        var sektor_tempat_bekerja = $('#inp-sektor-tempat-bekerja-silent-survey-non-wiraswasta').val();
        var sektor_ekonomi_level_1 = $('#slc-sektor-ekonomi-level-1-silent-survey-non-wiraswasta').find(':selected').text();
        var sektor_ekonomi_level_2 = $('#slc-sektor-ekonomi-level-2-silent-survey-non-wiraswasta').find(':selected').text();
        var sektor_ekonomi_level_3 = $('#slc-sektor-ekonomi-level-3-silent-survey-non-wiraswasta').find(':selected').text();
        var dokumen_bukti_bekerja_1 = localStorage.getItem('bukti_bekerja_silent_survey_non_wiraswasta');
        var dokumen_bukti_bekerja_2 = localStorage.getItem('bukti_bekerja_silent_survey_non_wiraswasta_2');
        var dokumen_bukti_penghasilan_1 = localStorage.getItem('bukti_penghasilan_silent_survey_non_wiraswasta');
        var dokumen_bukti_penghasilan_2 = localStorage.getItem('bukti_penghasilan_silent_survey_non_wiraswasta_2');
        var dokumen_bukti_penghasilan_3 = localStorage.getItem('bukti_penghasilan_silent_survey_non_wiraswasta_3');
        var dokumen_bukti_penghasilan_4 = localStorage.getItem('bukti_penghasilan_silent_survey_non_wiraswasta_4');
        var dokumen_bukti_penghasilan_5 = localStorage.getItem('bukti_penghasilan_silent_survey_non_wiraswasta_5');
        var dokumen_bukti_penghasilan_6 = localStorage.getItem('bukti_penghasilan_silent_survey_non_wiraswasta_6');
        var jarak_tempat_bekerja = $('#inp-jarak-nasabah-ke-muf-silent-survey-non-wiraswasta').val();
            
        pekerjaan_nasabah_silent_survey_non_wiraswasta = {
            pekerjaan_nasabah: pekerjaan_nasabah,
            pekerjaan_nasabah_sesuai_tidak_sesuai: pekerjaan_nasabah_sesuai_tidak_sesuai,
            jenis_tempat_bekerja: jenis_tempat_bekerja,
            nama_tempat_bekerja: nama_tempat_bekerja,
            nama_tempat_bekerja_sesuai_tidak_sesuai: nama_tempat_bekerja_sesuai_tidak_sesuai,
            jabatan_nasabah: jabatan_nasabah,
            jabatan_nasabah_sesuai_tidak_sesuai: jabatan_nasabah_sesuai_tidak_sesuai,
            sektor_tempat_bekerja: sektor_tempat_bekerja,
            sektor_ekonomi_level_1: sektor_ekonomi_level_1,
            sektor_ekonomi_level_2: sektor_ekonomi_level_2,
            sektor_ekonomi_level_3: sektor_ekonomi_level_3,
            dokumen_bukti_bekerja_1: dokumen_bukti_bekerja_1,
            dokumen_bukti_bekerja_2: dokumen_bukti_bekerja_2,
            dokumen_bukti_penghasilan_1: dokumen_bukti_penghasilan_1,
            dokumen_bukti_penghasilan_2: dokumen_bukti_penghasilan_2,
            dokumen_bukti_penghasilan_3: dokumen_bukti_penghasilan_3,
            dokumen_bukti_penghasilan_4: dokumen_bukti_penghasilan_4,
            dokumen_bukti_penghasilan_5: dokumen_bukti_penghasilan_5,
            dokumen_bukti_penghasilan_6: dokumen_bukti_penghasilan_6,
            jarak_tempat_bekerja: jarak_tempat_bekerja
        }
        // console.log(pekerjaan_nasabah_silent_survey_non_wiraswasta);

        $.ajax({
			type: "post",
			async: false,
			url: app.base_url + that.api + "submitSilentSurveyNonWiraswasta",
			data: {
                pekerjaan_nasabah_silent_survey_non_wiraswasta: pekerjaan_nasabah_silent_survey_non_wiraswasta,
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

    insertTeleSurveyNonWiraswasta: function() {
        var that = app.KycNonWiraswasta;
        var pekerjaan_nasabah_tele_survey_non_wiraswasta = {};
        var pekerjaan_nasabah = $('#inp-pekerjaan-nasabah-tele-survey-non-wiraswasta').val();
        var pekerjaan_nasabah_sesuai_tidak_sesuai = document.querySelector('input[name="pekerjaannasabahtelenonwiraswasta"]:checked').value;
        var jenis_tempat_bekerja = $('#slc-jenis-tempat-bekerja-tele-survey-non-wiraswasta').find(':selected').text();
        var nama_tempat_bekerja = $('#inp-nama-tempat-bekerja-tele-survey-non-wiraswasta').val();
        var nama_tempat_bekerja_sesuai_tidak_sesuai = document.querySelector('input[name="tempatbekerjatelenonwiraswasta"]:checked').value;
        var jabatan_nasabah = $('#inp-jabatan-nasabah-tele-survey-non-wiraswasta').val();
        var jabatan_nasabah_sesuai_tidak_sesuai = document.querySelector('input[name="jabatannasabahtelenonwiraswasta"]:checked').value;
        var sektor_tempat_bekerja = $('#inp-sektor-tempat-bekerja-tele-survey-non-wiraswasta').val();
        var sektor_ekonomi_level_1 = $('#slc-sektor-ekonomi-level-1-tele-survey-non-wiraswasta').find(':selected').text();
        var sektor_ekonomi_level_2 = $('#slc-sektor-ekonomi-level-2-tele-survey-non-wiraswasta').find(':selected').text();
        var sektor_ekonomi_level_3 = $('#slc-sektor-ekonomi-level-3-tele-survey-non-wiraswasta').find(':selected').text();
        var dokumen_bukti_bekerja_1 = localStorage.getItem('bukti_bekerja_tele_survey_non_wiraswasta');
        var dokumen_bukti_bekerja_2 = localStorage.getItem('bukti_bekerja_tele_survey_non_wiraswasta_2');
        var dokumen_bukti_penghasilan_1 = localStorage.getItem('bukti_penghasilan_tele_survey_non_wiraswasta');
        var dokumen_bukti_penghasilan_2 = localStorage.getItem('bukti_penghasilan_tele_survey_non_wiraswasta_2');
        var dokumen_bukti_penghasilan_3 = localStorage.getItem('bukti_penghasilan_tele_survey_non_wiraswasta_3');
        var dokumen_bukti_penghasilan_4 = localStorage.getItem('bukti_penghasilan_tele_survey_non_wiraswasta_4');
        var dokumen_bukti_penghasilan_5 = localStorage.getItem('bukti_penghasilan_tele_survey_non_wiraswasta_5');
        var dokumen_bukti_penghasilan_6 = localStorage.getItem('bukti_penghasilan_tele_survey_non_wiraswasta_6');
        var jarak_tempat_bekerja = $('#inp-jarak-nasabah-ke-muf-tele-survey-non-wiraswasta').val();
            
        pekerjaan_nasabah_tele_survey_non_wiraswasta = {
            pekerjaan_nasabah: pekerjaan_nasabah,
            pekerjaan_nasabah_sesuai_tidak_sesuai: pekerjaan_nasabah_sesuai_tidak_sesuai,
            jenis_tempat_bekerja: jenis_tempat_bekerja,
            nama_tempat_bekerja: nama_tempat_bekerja,
            nama_tempat_bekerja_sesuai_tidak_sesuai: nama_tempat_bekerja_sesuai_tidak_sesuai,
            jabatan_nasabah: jabatan_nasabah,
            jabatan_nasabah_sesuai_tidak_sesuai: jabatan_nasabah_sesuai_tidak_sesuai,
            sektor_tempat_bekerja: sektor_tempat_bekerja,
            sektor_ekonomi_level_1: sektor_ekonomi_level_1,
            sektor_ekonomi_level_2: sektor_ekonomi_level_2,
            sektor_ekonomi_level_3: sektor_ekonomi_level_3,
            dokumen_bukti_bekerja_1: dokumen_bukti_bekerja_1,
            dokumen_bukti_bekerja_2: dokumen_bukti_bekerja_2,
            dokumen_bukti_penghasilan_1: dokumen_bukti_penghasilan_1,
            dokumen_bukti_penghasilan_2: dokumen_bukti_penghasilan_2,
            dokumen_bukti_penghasilan_3: dokumen_bukti_penghasilan_3,
            dokumen_bukti_penghasilan_4: dokumen_bukti_penghasilan_4,
            dokumen_bukti_penghasilan_5: dokumen_bukti_penghasilan_5,
            dokumen_bukti_penghasilan_6: dokumen_bukti_penghasilan_6,
            jarak_tempat_bekerja: jarak_tempat_bekerja
        }
        // console.log(pekerjaan_nasabah_tele_survey_non_wiraswasta);

        $.ajax({
			type: "post",
			async: false,
			url: app.base_url + that.api + "submitTeleSurveyNonWiraswasta",
			data: {
                pekerjaan_nasabah_tele_survey_non_wiraswasta: pekerjaan_nasabah_tele_survey_non_wiraswasta,
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
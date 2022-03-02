$(document).ready(function() {
    app.KycNonWiraswastaTeleSurvey.init();
    localStorage.setItem("bukti_bekerja_tele_survey_non_wiraswasta", "");
    localStorage.setItem("bukti_bekerja_tele_survey_non_wiraswasta_2", "");
    localStorage.setItem("bukti_penghasilan_tele_survey_non_wiraswasta", "");
    localStorage.setItem("bukti_penghasilan_tele_survey_non_wiraswasta_2", "");
    localStorage.setItem("bukti_penghasilan_tele_survey_non_wiraswasta_3", "");
    localStorage.setItem("bukti_penghasilan_tele_survey_non_wiraswasta_4", "");
    localStorage.setItem("bukti_penghasilan_tele_survey_non_wiraswasta_5", "");
    localStorage.setItem("bukti_penghasilan_tele_survey_non_wiraswasta_6", "");
});

app.KycNonWiraswastaTeleSurvey = {
	controller: 'Kyc/',
	api: 'Kyc_api/',
	elm: {},

	init: function () {
		var file = app.KycNonWiraswastaTeleSurvey;
        var id_bukti_bekerja_tele_survey = 2;
		var id_bukti_penghasilan_tele_survey = 2;
        
        document.getElementById("add-document-bukti-bekerja-tele-survey-non-wiraswasta").onclick = function() {functionAddBekerjaTeleSurvey()};
        document.getElementById("add-document-bukti-penghasilan-tele-survey-non-wiraswasta").onclick = function() {functionAddPenghasilanTeleSurvey()};
        
        function functionAddBekerjaTeleSurvey(){
			if(id_bukti_bekerja_tele_survey == 2){
                $('#newdokbuktibekerjatelesurvey').append('<div class="col-lg-4" style="margin-top:10px;"><input type="file" class="form-control-file pkrj-nsbh-doc-bkt-bkrj-ts-non-wira-'+id_bukti_bekerja_tele_survey+'"></div>');
			    id_bukti_bekerja_tele_survey++;
			}
        }
        function functionAddPenghasilanTeleSurvey(){
			if(id_bukti_penghasilan_tele_survey <= 6){
				$('#newdokbuktipenghasilantelesurvey').append('<div class="col-lg-4" style="margin-top:10px;"><input type="file" class="form-control-file pkrj-nsbh-doc-bkt-phsln-ts-non-wira-'+id_bukti_penghasilan_tele_survey+'"></div>');
				id_bukti_penghasilan_tele_survey++;
			}
        }

        $('#slc-pkrj-nsbh-sktr-eknm-lvl-1-ts-non-wira').on('change', function() {
            var file = app.KycNonWiraswastaTeleSurvey;
            $("#slc-pkrj-nsbh-sktr-eknm-lvl-2-ts-non-wira").val('').trigger('change');
            file.getEconomicSectorLevel2TeleSurvey();
        });

        $('#slc-pkrj-nsbh-sktr-eknm-lvl-2-ts-non-wira').on('change', function() {
            var file = app.KycNonWiraswastaTeleSurvey;
            $('#slc-pkrj-nsbh-sktr-eknm-lvl-3-ts-non-wira').val('').trigger('change');
            file.getEconomicSectorLevel3TeleSurvey();
            file.getEconomicSectorFromLevel3ToLevel2andLevel1TeleSurvey();
        });

        $('#slc-pkrj-nsbh-sktr-eknm-lvl-3-ts-non-wira').on('change', function() {
            var file = app.KycNonWiraswastaTeleSurvey;
            if($('#slc-pkrj-nsbh-sktr-eknm-lvl-3-ts-non-wira').val() == null &&
               $('#slc-pkrj-nsbh-sktr-eknm-lvl-3-ts-non-wira').select2('data')[0]['text'] == null){
                if($('#slc-pkrj-nsbh-sktr-eknm-lvl-1-ts-non-wira').val() != '' && 
                   $('#slc-pkrj-nsbh-sktr-eknm-lvl-2-ts-non-wira').val() == null){
                        $('#slc-pkrj-nsbh-sktr-eknm-lvl-2-ts-non-wira').empty();
                }
                else if ($('#slc-pkrj-nsbh-sktr-eknm-lvl-1-ts-non-wira').val() != '' && 
                         $('#slc-pkrj-nsbh-sktr-eknm-lvl-2-ts-non-wira').val() != ''){
                            $('#slc-pkrj-nsbh-sktr-eknm-lvl-3-ts-non-wira').empty();
                }
            }
            else if($('#slc-pkrj-nsbh-sktr-eknm-lvl-3-ts-non-wira').val() != null &&
                    $('#slc-pkrj-nsbh-sktr-eknm-lvl-3-ts-non-wira').select2('data')[0]['text'] != null){
                        $('#slc-pkrj-nsbh-sktr-eknm-lvl-1-ts-non-wira').empty();
                        $('#slc-pkrj-nsbh-sktr-eknm-lvl-2-ts-non-wira').empty();
                        file.getEconomicSectorFromLevel3ToLevel2andLevel1TeleSurvey();
            }
        });

        file.getEconomicSectorLevel1TeleSurvey();
        file.getEconomicSectorLevel2TeleSurvey();
        file.getEconomicSectorLevel3TeleSurvey();
        file.getEconomicSectorFromLevel3ToLevel2andLevel1TeleSurvey();

        $('#btn-save-pkrj-nsbh-ts-non-wira').click(function () {
            var file = app.KycNonWiraswastaTeleSurvey;
            
            //Validasi Mandatory Tele Survey
            if($('#slc-pkrj-nsbh-sktr-eknm-lvl-1-ts-non-wira option:selected').val() == null || 
               $('#slc-pkrj-nsbh-sktr-eknm-lvl-1-ts-non-wira option:selected').val() == ''){
                $('#err-slc-pkrj-nsbh-sktr-eknm-lvl-1-ts-non-wira').html('Sektor Ekonomi Level 1 Wajib Diisi');
                $('#err-slc-pkrj-nsbh-sktr-eknm-lvl-1-ts-non-wira').prop("hidden", false);
                $('.error-slc-pkrj-nsbh-sktr-eknm-lvl-1-ts-non-wira').css({"border-color": "red"});
            }
            else if($('#slc-pkrj-nsbh-sktr-eknm-lvl-1-ts-non-wira option:selected').val() != null || 
                    $('#slc-pkrj-nsbh-sktr-eknm-lvl-1-ts-non-wira option:selected').val() != ''){
                        $('#err-slc-pkrj-nsbh-sktr-eknm-lvl-1-ts-non-wira').html('');
                        $('#err-slc-pkrj-nsbh-sktr-eknm-lvl-1-ts-non-wira').prop("hidden", true);
                        $('.error-slc-pkrj-nsbh-sktr-eknm-lvl-1-ts-non-wira').css({"border-color": ""});
            }

            if($('#slc-pkrj-nsbh-sktr-eknm-lvl-2-ts-non-wira option:selected').val() == null || 
               $('#slc-pkrj-nsbh-sktr-eknm-lvl-2-ts-non-wira option:selected').val() == ''){
                $('#err-slc-pkrj-nsbh-sktr-eknm-lvl-2-ts-non-wira').html('Sektor Ekonomi Level 2 Wajib Diisi');
                $('#err-slc-pkrj-nsbh-sktr-eknm-lvl-2-ts-non-wira').prop("hidden", false);
                $('.error-slc-pkrj-nsbh-sktr-eknm-lvl-2-ts-non-wira').css({"border-color": "red"});
            }
            else if($('#slc-pkrj-nsbh-sktr-eknm-lvl-2-ts-non-wira option:selected').val() != null || 
                    $('#slc-pkrj-nsbh-sktr-eknm-lvl-2-ts-non-wira option:selected').val() != ''){
                        $('#err-slc-pkrj-nsbh-sktr-eknm-lvl-2-ts-non-wira').html('');
                        $('#err-slc-pkrj-nsbh-sktr-eknm-lvl-2-ts-non-wira').prop("hidden", true);
                        $('.error-slc-pkrj-nsbh-sktr-eknm-lvl-2-ts-non-wira').css({"border-color": ""});
            }

            if($('#slc-pkrj-nsbh-sktr-eknm-lvl-3-ts-non-wira option:selected').val() == null || 
               $('#slc-pkrj-nsbh-sktr-eknm-lvl-3-ts-non-wira option:selected').val() == ''){
                $('#err-slc-pkrj-nsbh-sktr-eknm-lvl-3-ts-non-wira').html('Sektor Ekonomi Level 3 Wajib Diisi');
                $('#err-slc-pkrj-nsbh-sktr-eknm-lvl-3-ts-non-wira').prop("hidden", false);
                $('.error-slc-pkrj-nsbh-sktr-eknm-lvl-3-ts-non-wira').css({"border-color": "red"});
            }
            else if($('#slc-pkrj-nsbh-sktr-eknm-lvl-3-ts-non-wira option:selected').val() != null || 
                    $('#slc-pkrj-nsbh-sktr-eknm-lvl-3-ts-non-wira option:selected').val() != ''){
                        $('#err-slc-pkrj-nsbh-sktr-eknm-lvl-3-ts-non-wira').html('');
                        $('#err-slc-pkrj-nsbh-sktr-eknm-lvl-3-ts-non-wira').prop("hidden", true);
                        $('.error-slc-pkrj-nsbh-sktr-eknm-lvl-3-ts-non-wira').css({"border-color": ""});
            }

            if($('#pkrj-nsbh-doc-bkt-bkrj-ts-non-wira').val() == ''){
                $('#err-pkrj-nsbh-doc-bkt-bkrj-ts-non-wira').html('Dokumen Bukti Bekerja Wajib Diisi');
                $('#err-pkrj-nsbh-doc-bkt-bkrj-ts-non-wira').prop("hidden", false);
                $('.error-pkrj-nsbh-doc-bkt-bkrj-ts-non-wira').css({"border-color": "red"});
            }
            else if($('#pkrj-nsbh-doc-bkt-bkrj-ts-non-wira').val() != ''){
                        $('#err-pkrj-nsbh-doc-bkt-bkrj-ts-non-wira').html('');
                        $('#err-pkrj-nsbh-doc-bkt-bkrj-ts-non-wira').prop("hidden", true);
                        $('.error-pkrj-nsbh-doc-bkt-bkrj-ts-non-wira').css({"border-color": ""});
            }

            if($('#pkrj-nsbh-doc-bkt-phsln-ts-non-wira').val() == ''){
                $('#err-pkrj-nsbh-doc-bkt-phsln-ts-non-wira').html('Dokumen Bukti Bekerja Wajib Diisi');
                $('#err-pkrj-nsbh-doc-bkt-phsln-ts-non-wira').prop("hidden", false);
                $('.error-pkrj-nsbh-doc-bkt-phsln-ts-non-wira').css({"border-color": "red"});
            }
            else if($('#pkrj-nsbh-doc-bkt-phsln-ts-non-wira').val() != ''){
                        $('#err-pkrj-nsbh-doc-bkt-phsln-ts-non-wira').html('');
                        $('#err-pkrj-nsbh-doc-bkt-phsln-ts-non-wira').prop("hidden", true);
                        $('.error-pkrj-nsbh-doc-bkt-phsln-ts-non-wira').css({"border-color": ""});
            }

            if($('#inp-pkrj-nsbh-jrk-nsbh-ke-muf-ts-non-wira').val() == ''){
                $('#err-inp-pkrj-nsbh-jrk-nsbh-ke-muf-ts-non-wira').html('Jarak Tempat Nasabah ke MUF Wajib Diisi');
                $('#err-inp-pkrj-nsbh-jrk-nsbh-ke-muf-ts-non-wira').prop("hidden", false);
                $('input[id=inp-pkrj-nsbh-jrk-nsbh-ke-muf-ts-non-wira]').css({"border-color": "red"});
            }
            else if($('#inp-pkrj-nsbh-jrk-nsbh-ke-muf-ts-non-wira').val() != ''){
                        $('#err-inp-pkrj-nsbh-jrk-nsbh-ke-muf-ts-non-wira').html('');
                        $('#err-inp-pkrj-nsbh-jrk-nsbh-ke-muf-ts-non-wira').prop("hidden", true);
                        $('input[id=inp-pkrj-nsbh-jrk-nsbh-ke-muf-ts-non-wira]').css({"border-color": ""});
            }

            file.insertTeleSurveyNonWiraswasta();
        });

        //Onchange Upload File Tele Survey
        $('#pkrj-nsbh-doc-bkt-bkrj-ts-non-wira').on('change', function(){
            if($('#pkrj-nsbh-doc-bkt-bkrj-ts-non-wira').val() != undefined){
                var BuktiBekerjaTeleSurvey1 = $('#pkrj-nsbh-doc-bkt-bkrj-ts-non-wira')[0].files[0];
                
                if(BuktiBekerjaTeleSurvey1 != undefined){
                    var fileUploadDocument = BuktiBekerjaTeleSurvey1;
                    if(fileUploadDocument.size > 5120000){
                        Swal.fire(
                            'ERROR',
                            'Ukuran file terlalu besar. Maksimal 5 MB',
                            'error'
                        )
                    }
                    
                    else if(fileUploadDocument != undefined && fileUploadDocument.size <= 5120000){
                        var arrType = [];
                        arrType = fileUploadDocument.type.split("/");
                    
                        if (arrType[1] != "jpg" && arrType[1] != "jpeg" && arrType[1] != "png" && arrType[1] == "pdf") {
                            Swal.fire(
                                'ERROR',
                                'Format foto tidak sesuai!',
                                'error'
                            )
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

        $('#newdokbuktibekerjatelesurvey').on('change', '.pkrj-nsbh-doc-bkt-bkrj-ts-non-wira-2', function () {
            if($('.pkrj-nsbh-doc-bkt-bkrj-ts-non-wira-2').val() != undefined){
                var BuktiBekerjaTeleSurvey2 = $('.pkrj-nsbh-doc-bkt-bkrj-ts-non-wira-2')[0].files[0];
                
                if(BuktiBekerjaTeleSurvey2 != undefined){
                    var fileUploadDocument = BuktiBekerjaTeleSurvey2;
                    if(fileUploadDocument.size > 5120000){
                        Swal.fire(
                            'ERROR',
                            'Ukuran file terlalu besar. Maksimal 5 MB',
                            'error'
                        )
                    }
                    
                    else if(fileUploadDocument != undefined && fileUploadDocument.size <= 5120000){
                        var arrType = [];
                        arrType = fileUploadDocument.type.split("/");
                    
                        if (arrType[1] != "jpg" && arrType[1] != "jpeg" && arrType[1] != "png" && arrType[1] == "pdf") {
                            Swal.fire(
                                'ERROR',
                                'Format foto tidak sesuai!',
                                'error'
                            )
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

        $('#pkrj-nsbh-doc-bkt-phsln-ts-non-wira').on('change', function(){
            if($('#pkrj-nsbh-doc-bkt-phsln-ts-non-wira').val() != undefined){
                var BuktiPenghasilanTeleSurvey1 = $('#pkrj-nsbh-doc-bkt-phsln-ts-non-wira')[0].files[0];

                if(BuktiPenghasilanTeleSurvey1 != undefined){
                    var fileUploadDocument = BuktiPenghasilanTeleSurvey1;
                    if(fileUploadDocument.size > 5120000){
                        Swal.fire(
                            'ERROR',
                            'Ukuran file terlalu besar. Maksimal 5 MB',
                            'error'
                        )
                    }
                    
                    else if(fileUploadDocument != undefined && fileUploadDocument.size <= 5120000){
                        var arrType = [];
                        arrType = fileUploadDocument.type.split("/");
                    
                        if (arrType[1] != "jpg" && arrType[1] != "jpeg" && arrType[1] != "png" && arrType[1] == "pdf") {
                            Swal.fire(
                                'ERROR',
                                'Format foto tidak sesuai!',
                                'error'
                            )
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

        $('#newdokbuktipenghasilantelesurvey').on('change', '.pkrj-nsbh-doc-bkt-phsln-ts-non-wira-2', function () {
            if($('.pkrj-nsbh-doc-bkt-phsln-ts-non-wira-2').val() != undefined){
                var BuktiPenghasilanTeleSurvey2 = $('.pkrj-nsbh-doc-bkt-phsln-ts-non-wira-2')[0].files[0];
                
                if(BuktiPenghasilanTeleSurvey2 != undefined){
                    var fileUploadDocument = BuktiPenghasilanTeleSurvey2;
                    if(fileUploadDocument.size > 5120000){
                        Swal.fire(
                            'ERROR',
                            'Ukuran file terlalu besar. Maksimal 5 MB',
                            'error'
                        )
                    }
                    
                    else if(fileUploadDocument != undefined && fileUploadDocument.size <= 5120000){
                        var arrType = [];
                        arrType = fileUploadDocument.type.split("/");
                    
                        if (arrType[1] != "jpg" && arrType[1] != "jpeg" && arrType[1] != "png" && arrType[1] == "pdf") {
                            Swal.fire(
                                'ERROR',
                                'Format foto tidak sesuai!',
                                'error'
                            )
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

        $('#newdokbuktipenghasilantelesurvey').on('change', '.pkrj-nsbh-doc-bkt-phsln-ts-non-wira-3', function () {
            if($('.pkrj-nsbh-doc-bkt-phsln-ts-non-wira-3').val() != undefined){
                var BuktiPenghasilanTeleSurvey3 = $('.pkrj-nsbh-doc-bkt-phsln-ts-non-wira-3')[0].files[0];
                
                if(BuktiPenghasilanTeleSurvey3 != undefined){
                    var fileUploadDocument = BuktiPenghasilanTeleSurvey3;
                    if(fileUploadDocument.size > 5120000){
                        Swal.fire(
                            'ERROR',
                            'Ukuran file terlalu besar. Maksimal 5 MB',
                            'error'
                        )
                    }
                    
                    else if(fileUploadDocument != undefined && fileUploadDocument.size <= 5120000){
                        var arrType = [];
                        arrType = fileUploadDocument.type.split("/");
                    
                        if (arrType[1] != "jpg" && arrType[1] != "jpeg" && arrType[1] != "png" && arrType[1] == "pdf") {
                            Swal.fire(
                                'ERROR',
                                'Format foto tidak sesuai!',
                                'error'
                            )
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

        $('#newdokbuktipenghasilantelesurvey').on('change', '.pkrj-nsbh-doc-bkt-phsln-ts-non-wira-4', function () {
            if($('.pkrj-nsbh-doc-bkt-phsln-ts-non-wira-4').val() != undefined){
                var BuktiPenghasilanTeleSurvey4 = $('.pkrj-nsbh-doc-bkt-phsln-ts-non-wira-4')[0].files[0];
                
                if(BuktiPenghasilanTeleSurvey4 != undefined){
                    var fileUploadDocument = BuktiPenghasilanTeleSurvey4;
                    if(fileUploadDocument.size > 5120000){
                        Swal.fire(
                            'ERROR',
                            'Ukuran file terlalu besar. Maksimal 5 MB',
                            'error'
                        )
                    }
                    
                    else if(fileUploadDocument != undefined && fileUploadDocument.size <= 5120000){
                        var arrType = [];
                        arrType = fileUploadDocument.type.split("/");
                    
                        if (arrType[1] != "jpg" && arrType[1] != "jpeg" && arrType[1] != "png" && arrType[1] == "pdf") {
                            Swal.fire(
                                'ERROR',
                                'Format foto tidak sesuai!',
                                'error'
                            )
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

        $('#newdokbuktipenghasilantelesurvey').on('change', '.pkrj-nsbh-doc-bkt-phsln-ts-non-wira-5', function () {
            if($('.pkrj-nsbh-doc-bkt-phsln-ts-non-wira-5').val() != undefined){
                var BuktiPenghasilanTeleSurvey5 = $('.pkrj-nsbh-doc-bkt-phsln-ts-non-wira-5')[0].files[0];
                
                if(BuktiPenghasilanTeleSurvey5 != undefined){
                    var fileUploadDocument = BuktiPenghasilanTeleSurvey5;
                    if(fileUploadDocument.size > 5120000){
                        Swal.fire(
                            'ERROR',
                            'Ukuran file terlalu besar. Maksimal 5 MB',
                            'error'
                        )
                    }
                    
                    else if(fileUploadDocument != undefined && fileUploadDocument.size <= 5120000){
                        var arrType = [];
                        arrType = fileUploadDocument.type.split("/");
                    
                        if (arrType[1] != "jpg" && arrType[1] != "jpeg" && arrType[1] != "png" && arrType[1] == "pdf") {
                            Swal.fire(
                                'ERROR',
                                'Format foto tidak sesuai!',
                                'error'
                            )
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

        $('#newdokbuktipenghasilantelesurvey').on('change', '.pkrj-nsbh-doc-bkt-phsln-ts-non-wira-6', function () {
            if($('.pkrj-nsbh-doc-bkt-phsln-ts-non-wira-6').val() != undefined){
                var BuktiPenghasilanTeleSurvey6 = $('.pkrj-nsbh-doc-bkt-phsln-ts-non-wira-6')[0].files[0];
                
                if(BuktiPenghasilanTeleSurvey6 != undefined){
                    var fileUploadDocument = BuktiPenghasilanTeleSurvey6;
                    if(fileUploadDocument.size > 5120000){
                        Swal.fire(
                            'ERROR',
                            'Ukuran file terlalu besar. Maksimal 5 MB',
                            'error'
                        )
                    }
                    
                    else if(fileUploadDocument != undefined && fileUploadDocument.size <= 5120000){
                        var arrType = [];
                        arrType = fileUploadDocument.type.split("/");
                    
                        if (arrType[1] != "jpg" && arrType[1] != "jpeg" && arrType[1] != "png" && arrType[1] == "pdf") {
                            Swal.fire(
                                'ERROR',
                                'Format foto tidak sesuai!',
                                'error'
                            )
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

    },

    getEconomicSectorLevel1TeleSurvey: function () {
        var file = app.KycNonWiraswastaTeleSurvey;
        $("#slc-pkrj-nsbh-sktr-eknm-lvl-1-ts-non-wira").select2({
            theme: 'bootstrap4',
            placeholder: "PILIH SEKTOR EKONOMI (LEVEL 1)",
            allowClear: true,
            minimumInputLength: 4,
            containerCssClass: "error-slc-pkrj-nsbh-sktr-eknm-lvl-1-ts-non-wira",
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
        var file = app.KycNonWiraswastaTeleSurvey;
        var param_1 = $('#slc-pkrj-nsbh-sktr-eknm-lvl-1-ts-non-wira').val();

        if (param_1 == null || param_1 == '') {
            param_1 = '';
        }

        $("#slc-pkrj-nsbh-sktr-eknm-lvl-2-ts-non-wira").select2({
            theme: 'bootstrap4',
            placeholder: "PILIH SEKTOR EKONOMI (LEVEL 2)",
            allowClear: true,
            minimumInputLength: 4,
            containerCssClass: "error-slc-pkrj-nsbh-sktr-eknm-lvl-2-ts-non-wira",
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
        var file = app.KycNonWiraswastaTeleSurvey;
        var param_1 = $('#slc-pkrj-nsbh-sktr-eknm-lvl-1-ts-non-wira').val();
        var param_2 = $('#slc-pkrj-nsbh-sktr-eknm-lvl-2-ts-non-wira').val();

        if (param_1 == null || param_1 == '') {
            param_1 = '';
        }

        if (param_2 == null || param_2 == '') {
            param_2 = '';
        }

        if (param_1 != '' || param_1 != null && param_2 != '' || param_2 != null){

            $("#slc-pkrj-nsbh-sktr-eknm-lvl-3-ts-non-wira").select2({
                theme: 'bootstrap4',
                placeholder: "PILIH SEKTOR EKONOMI (LEVEL 3)",
                allowClear: true,
                minimumInputLength: 4,
                containerCssClass: "error-slc-pkrj-nsbh-sktr-eknm-lvl-3-ts-non-wira",
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
            $("#slc-pkrj-nsbh-sktr-eknm-lvl-3-ts-non-wira").select2({
                theme: 'bootstrap4',
                placeholder: "PILIH SEKTOR EKONOMI (LEVEL 3)",
                allowClear: true,
                minimumInputLength: 4,
                containerCssClass: "error-slc-pkrj-nsbh-sktr-eknm-lvl-3-ts-non-wira",
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
        var file = app.KycNonWiraswastaTeleSurvey;
        var param = $('#slc-pkrj-nsbh-sktr-eknm-lvl-3-ts-non-wira').select2('data')[0]['text'];
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
                        $("#slc-pkrj-nsbh-sktr-eknm-lvl-1-ts-non-wira").append("<option value='"+data[0].id_1+"' selected>"+data[0].text_1+"</option>");
                        $("#slc-pkrj-nsbh-sktr-eknm-lvl-1-ts-non-wira").val(data[0].id_1);
                        $("#slc-pkrj-nsbh-sktr-eknm-lvl-2-ts-non-wira").append("<option value='"+data[0].id_2+"' selected>"+data[0].text_2+"</option>");
                        $("#slc-pkrj-nsbh-sktr-eknm-lvl-2-ts-non-wira").val(data[0].id_2);
                }
            });
        }
    },

    insertTeleSurveyNonWiraswasta: function() {
        var that = app.KycNonWiraswastaTeleSurvey;
        var pekerjaan_nasabah_tele_survey_non_wiraswasta = {};
        var pekerjaan_nasabah = $('#inp-pkrj-nsbh-ts-non-wira').val();
        var pekerjaan_nasabah_sesuai_tidak_sesuai = document.querySelector('input[name="pkrj-nsbh-ts-non-wira"]:checked').value;
        var jenis_tempat_bekerja = $('#slc-pkrj-nsbh-jns-tmpt-bkrj-ts-non-wira').find(':selected').text();
        var nama_tempat_bekerja = $('#inp-pkrj-nsbh-nm-tmpt-bkrj-ts-non-wira').val();
        var nama_tempat_bekerja_sesuai_tidak_sesuai = document.querySelector('input[name="tmptbkrjtsnonwira"]:checked').value;
        var jabatan_nasabah = $('#inp-pkrj-nsbh-jbtn-nsbh-ts-non-wira').val();
        var jabatan_nasabah_sesuai_tidak_sesuai = document.querySelector('input[name="jbtnnsbhtsnonwira"]:checked').value;
        var sektor_tempat_bekerja = $('#inp-pkrj-nsbh-sktr-tmpt-bkrj-ts-non-wira').val();
        var sektor_ekonomi_level_1 = $('#slc-pkrj-nsbh-sktr-eknm-lvl-1-ts-non-wira').find(':selected').text();
        var sektor_ekonomi_level_2 = $('#slc-pkrj-nsbh-sktr-eknm-lvl-2-ts-non-wira').find(':selected').text();
        var sektor_ekonomi_level_3 = $('#slc-pkrj-nsbh-sktr-eknm-lvl-3-ts-non-wira').find(':selected').text();
        var dokumen_bukti_bekerja_1 = localStorage.getItem('bukti_bekerja_tele_survey_non_wiraswasta');
        var dokumen_bukti_bekerja_2 = localStorage.getItem('bukti_bekerja_tele_survey_non_wiraswasta_2');
        var dokumen_bukti_penghasilan_1 = localStorage.getItem('bukti_penghasilan_tele_survey_non_wiraswasta');
        var dokumen_bukti_penghasilan_2 = localStorage.getItem('bukti_penghasilan_tele_survey_non_wiraswasta_2');
        var dokumen_bukti_penghasilan_3 = localStorage.getItem('bukti_penghasilan_tele_survey_non_wiraswasta_3');
        var dokumen_bukti_penghasilan_4 = localStorage.getItem('bukti_penghasilan_tele_survey_non_wiraswasta_4');
        var dokumen_bukti_penghasilan_5 = localStorage.getItem('bukti_penghasilan_tele_survey_non_wiraswasta_5');
        var dokumen_bukti_penghasilan_6 = localStorage.getItem('bukti_penghasilan_tele_survey_non_wiraswasta_6');
        var jarak_tempat_bekerja = $('#inp-pkrj-nsbh-jrk-nsbh-ke-muf-ts-non-wira').val();
            
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
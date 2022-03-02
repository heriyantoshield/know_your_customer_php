$(document).ready(function() {
    app.KycNonWiraswastaSilentSurvey.init();
    localStorage.setItem("bukti_bekerja_silent_survey_non_wiraswasta", "");
    localStorage.setItem("bukti_bekerja_silent_survey_non_wiraswasta_2", "");
    localStorage.setItem("bukti_penghasilan_silent_survey_non_wiraswasta", "");
    localStorage.setItem("bukti_penghasilan_silent_survey_non_wiraswasta_2", "");
    localStorage.setItem("bukti_penghasilan_silent_survey_non_wiraswasta_3", "");
    localStorage.setItem("bukti_penghasilan_silent_survey_non_wiraswasta_4", "");
    localStorage.setItem("bukti_penghasilan_silent_survey_non_wiraswasta_5", "");
    localStorage.setItem("bukti_penghasilan_silent_survey_non_wiraswasta_6", "");
});

app.KycNonWiraswastaSilentSurvey = {
	controller: 'Kyc/',
	api: 'Kyc_api/',
	elm: {},

	init: function () {
		var file = app.KycNonWiraswastaSilentSurvey;
		var id_bukti_bekerja_silent_survey = 2;
		var id_bukti_penghasilan_silent_survey = 2;

        document.getElementById("add-document-bukti-bekerja-silent-survey-non-wiraswasta").onclick = function() {functionAddBekerjaSilentSurvey()};
        document.getElementById("add-document-bukti-penghasilan-silent-survey-non-wiraswasta").onclick = function() {functionAddPenghasilanSilentSurvey()};
        
        function functionAddBekerjaSilentSurvey(){
			if(id_bukti_bekerja_silent_survey == 2){
				$('#newdokbuktibekerjasilentsurvey').append('<div class="col-lg-4" style="margin-top:10px;"><input type="file" class="form-control-file pkrj-nsbh-doc-bkt-bkrj-ss-non-wira-'+id_bukti_bekerja_silent_survey+'"></div>');
				id_bukti_bekerja_silent_survey++;
			}
        }
        function functionAddPenghasilanSilentSurvey(){
			if(id_bukti_penghasilan_silent_survey <= 6){
				$('#newdokbuktipenghasilansilentsurvey').append('<div class="col-lg-4" style="margin-top:10px;"><input type="file" class="form-control-file pkrj-nsbh-doc-bkt-phsln-ss-non-wira-'+id_bukti_penghasilan_silent_survey+'"></div>');
				id_bukti_penghasilan_silent_survey++;
			}
        }

        $('#slc-pkrj-nsbh-sktr-eknm-lvl-1-ss-non-wira').on('change', function() {
            var file = app.KycNonWiraswastaSilentSurvey;
            $("#slc-pkrj-nsbh-sktr-eknm-lvl-2-ss-non-wira").val('').trigger('change');
            file.getEconomicSectorLevel2SilentSurvey();
        });

        $('#slc-pkrj-nsbh-sktr-eknm-lvl-2-ss-non-wira').on('change', function() {
            var file = app.KycNonWiraswastaSilentSurvey;
            $('#slc-pkrj-nsbh-sktr-eknm-lvl-3-ss-non-wira').val('').trigger('change');
            file.getEconomicSectorLevel3SilentSurvey();
            file.getEconomicSectorFromLevel3ToLevel2andLevel1SilentSurvey();
        });

        $('#slc-pkrj-nsbh-sktr-eknm-lvl-3-ss-non-wira').on('change', function() {
            var file = app.KycNonWiraswastaSilentSurvey;
            if($('#slc-pkrj-nsbh-sktr-eknm-lvl-3-ss-non-wira').val() == null &&
               $('#slc-pkrj-nsbh-sktr-eknm-lvl-3-ss-non-wira').select2('data')[0]['text'] == null){
                if($('#slc-pkrj-nsbh-sktr-eknm-lvl-1-ss-non-wira').val() != '' && 
                   $('#slc-pkrj-nsbh-sktr-eknm-lvl-2-ss-non-wira').val() == null){
                        $('#slc-pkrj-nsbh-sktr-eknm-lvl-2-ss-non-wira').empty();
                }
                else if ($('#slc-pkrj-nsbh-sktr-eknm-lvl-1-ss-non-wira').val() != '' && 
                         $('#slc-pkrj-nsbh-sktr-eknm-lvl-2-ss-non-wira').val() != ''){
                            $('#slc-pkrj-nsbh-sktr-eknm-lvl-3-ss-non-wira').empty();
                }
            }
            else if($('#slc-pkrj-nsbh-sktr-eknm-lvl-3-ss-non-wira').val() != null &&
                    $('#slc-pkrj-nsbh-sktr-eknm-lvl-3-ss-non-wira').select2('data')[0]['text'] != null){
                        $('#slc-pkrj-nsbh-sktr-eknm-lvl-1-ss-non-wira').empty();
                        $('#slc-pkrj-nsbh-sktr-eknm-lvl-2-ss-non-wira').empty();
                        file.getEconomicSectorFromLevel3ToLevel2andLevel1SilentSurvey();
            }
        });

        file.getEconomicSectorLevel1SilentSurvey();
        file.getEconomicSectorLevel2SilentSurvey();
        file.getEconomicSectorLevel3SilentSurvey();
        file.getEconomicSectorFromLevel3ToLevel2andLevel1SilentSurvey();

        $('#btn-save-pkrj-nsbh-ss-non-wira').click(function () {
            var file = app.KycNonWiraswastaSilentSurvey;
            
            //Validasi Mandatory Silent Survey
            if($('#slc-pkrj-nsbh-sktr-eknm-lvl-1-ss-non-wira option:selected').val() == null || 
               $('#slc-pkrj-nsbh-sktr-eknm-lvl-1-ss-non-wira option:selected').val() == ''){
                $('#err-slc-pkrj-nsbh-sktr-eknm-lvl-1-ss-non-wira').html('Sektor Ekonomi Level 1 Wajib Diisi');
                $('#err-slc-pkrj-nsbh-sktr-eknm-lvl-1-ss-non-wira').prop("hidden", false);
                $('.error-slc-pkrj-nsbh-sktr-eknm-lvl-1-ss-non-wira').css({"border-color": "red"});
            }
            else if($('#slc-pkrj-nsbh-sktr-eknm-lvl-1-ss-non-wira option:selected').val() != null || 
                    $('#slc-pkrj-nsbh-sktr-eknm-lvl-1-ss-non-wira option:selected').val() != ''){
                        $('#err-slc-pkrj-nsbh-sktr-eknm-lvl-1-ss-non-wira').html('');
                        $('#err-slc-pkrj-nsbh-sktr-eknm-lvl-1-ss-non-wira').prop("hidden", true);
                        $('.error-slc-pkrj-nsbh-sktr-eknm-lvl-1-ss-non-wira').css({"border-color": ""});
            }

            if($('#slc-pkrj-nsbh-sktr-eknm-lvl-2-ss-non-wira option:selected').val() == null || 
               $('#slc-pkrj-nsbh-sktr-eknm-lvl-2-ss-non-wira option:selected').val() == ''){
                $('#err-slc-pkrj-nsbh-sktr-eknm-lvl-2-ss-non-wira').html('Sektor Ekonomi Level 2 Wajib Diisi');
                $('#err-slc-pkrj-nsbh-sktr-eknm-lvl-2-ss-non-wira').prop("hidden", false);
                $('.error-slc-pkrj-nsbh-sktr-eknm-lvl-2-ss-non-wira').css({"border-color": "red"});
            }
            else if($('#slc-pkrj-nsbh-sktr-eknm-lvl-2-ss-non-wira option:selected').val() != null || 
                    $('#slc-pkrj-nsbh-sktr-eknm-lvl-2-ss-non-wira option:selected').val() != ''){
                        $('#err-slc-pkrj-nsbh-sktr-eknm-lvl-2-ss-non-wira').html('');
                        $('#err-slc-pkrj-nsbh-sktr-eknm-lvl-2-ss-non-wira').prop("hidden", true);
                        $('.error-slc-pkrj-nsbh-sktr-eknm-lvl-2-ss-non-wira').css({"border-color": ""});
            }

            if($('#slc-pkrj-nsbh-sktr-eknm-lvl-3-ss-non-wira option:selected').val() == null || 
               $('#slc-pkrj-nsbh-sktr-eknm-lvl-3-ss-non-wira option:selected').val() == ''){
                $('#err-slc-pkrj-nsbh-sktr-eknm-lvl-3-ss-non-wira').html('Sektor Ekonomi Level 3 Wajib Diisi');
                $('#err-slc-pkrj-nsbh-sktr-eknm-lvl-3-ss-non-wira').prop("hidden", false);
                $('.error-slc-pkrj-nsbh-sktr-eknm-lvl-3-ss-non-wira').css({"border-color": "red"});
            }
            else if($('#slc-pkrj-nsbh-sktr-eknm-lvl-3-ss-non-wira option:selected').val() != null || 
                    $('#slc-pkrj-nsbh-sktr-eknm-lvl-3-ss-non-wira option:selected').val() != ''){
                        $('#err-slc-pkrj-nsbh-sktr-eknm-lvl-3-ss-non-wira').html('');
                        $('#err-slc-pkrj-nsbh-sktr-eknm-lvl-3-ss-non-wira').prop("hidden", true);
                        $('.error-slc-pkrj-nsbh-sktr-eknm-lvl-3-ss-non-wira').css({"border-color": ""});
            }

            if($('#pkrj-nsbh-doc-bkt-bkrj-ss-non-wira').val() == ''){
                $('#err-pkrj-nsbh-doc-bkt-bkrj-ss-non-wira').html('Dokumen Bukti Bekerja Wajib Diisi');
                $('#err-pkrj-nsbh-doc-bkt-bkrj-ss-non-wira').prop("hidden", false);
                $('.error-pkrj-nsbh-doc-bkt-bkrj-ss-non-wira').css({"border-color": "red"});
            }
            else if($('#pkrj-nsbh-doc-bkt-bkrj-ss-non-wira').val() != ''){
                        $('#err-pkrj-nsbh-doc-bkt-bkrj-ss-non-wira').html('');
                        $('#err-pkrj-nsbh-doc-bkt-bkrj-ss-non-wira').prop("hidden", true);
                        $('.error-pkrj-nsbh-doc-bkt-bkrj-ss-non-wira').css({"border-color": ""});
            }

            if($('#pkrj-nsbh-doc-bkt-phsln-ss-non-wira').val() == ''){
                $('#err-pkrj-nsbh-doc-bkt-phsln-ss-non-wira').html('Dokumen Bukti Bekerja Wajib Diisi');
                $('#err-pkrj-nsbh-doc-bkt-phsln-ss-non-wira').prop("hidden", false);
                $('.error-pkrj-nsbh-doc-bkt-phsln-ss-non-wira').css({"border-color": "red"});
            }
            else if($('#pkrj-nsbh-doc-bkt-phsln-ss-non-wira').val() != ''){
                        $('#err-pkrj-nsbh-doc-bkt-phsln-ss-non-wira').html('');
                        $('#err-pkrj-nsbh-doc-bkt-phsln-ss-non-wira').prop("hidden", true);
                        $('.error-pkrj-nsbh-doc-bkt-phsln-ss-non-wira').css({"border-color": ""});
            }

            if($('#inp-pkrj-nsbh-jrk-nsbh-ke-muf-ss-non-wira').val() == ''){
                $('#err-inp-pkrj-nsbh-jrk-nsbh-ke-muf-ss-non-wira').html('Jarak Tempat Nasabah ke MUF Wajib Diisi');
                $('#err-inp-pkrj-nsbh-jrk-nsbh-ke-muf-ss-non-wira').prop("hidden", false);
                $('input[id=inp-pkrj-nsbh-jrk-nsbh-ke-muf-ss-non-wira]').css({"border-color": "red"});
            }
            else if($('#inp-pkrj-nsbh-jrk-nsbh-ke-muf-ss-non-wira').val() != ''){
                        $('#err-inp-pkrj-nsbh-jrk-nsbh-ke-muf-ss-non-wira').html('');
                        $('#err-inp-pkrj-nsbh-jrk-nsbh-ke-muf-ss-non-wira').prop("hidden", true);
                        $('input[id=inp-pkrj-nsbh-jrk-nsbh-ke-muf-ss-non-wira]').css({"border-color": ""});
            }

            file.insertSilentSurveyNonWiraswasta();
        });

        //Onchange Upload File Silent Survey
        $('#pkrj-nsbh-doc-bkt-bkrj-ss-non-wira').on('change', function(){
            if($('#pkrj-nsbh-doc-bkt-bkrj-ss-non-wira').val() != undefined){
                var BuktiBekerjaSilentSurvey1 = $('#pkrj-nsbh-doc-bkt-bkrj-ss-non-wira')[0].files[0];
                
                if(BuktiBekerjaSilentSurvey1 != undefined){
                    var fileUploadDocument = BuktiBekerjaSilentSurvey1;
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

        $('#newdokbuktibekerjasilentsurvey').on('change', '.pkrj-nsbh-doc-bkt-bkrj-ss-non-wira-2', function () {
            if($('.pkrj-nsbh-doc-bkt-bkrj-ss-non-wira-2').val() != undefined){
                var BuktiBekerjaSilentSurvey2 = $('.pkrj-nsbh-doc-bkt-bkrj-ss-non-wira-2')[0].files[0];
                
                if(BuktiBekerjaSilentSurvey2 != undefined){
                    var fileUploadDocument = BuktiBekerjaSilentSurvey2;
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

        $('#pkrj-nsbh-doc-bkt-phsln-ss-non-wira').on('change', function(){
            if($('#pkrj-nsbh-doc-bkt-phsln-ss-non-wira').val() != undefined){
                var BuktiPenghasilanSilentSurvey1 = $('#pkrj-nsbh-doc-bkt-phsln-ss-non-wira')[0].files[0];

                if(BuktiPenghasilanSilentSurvey1 != undefined){
                    var fileUploadDocument = BuktiPenghasilanSilentSurvey1;
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

        $('#newdokbuktipenghasilansilentsurvey').on('change', '.pkrj-nsbh-doc-bkt-phsln-ss-non-wira-2', function () {
            if($('.pkrj-nsbh-doc-bkt-phsln-ss-non-wira-2').val() != undefined){
                var BuktiPenghasilanSilentSurvey2 = $('.pkrj-nsbh-doc-bkt-phsln-ss-non-wira-2')[0].files[0];
                
                if(BuktiPenghasilanSilentSurvey2 != undefined){
                    var fileUploadDocument = BuktiPenghasilanSilentSurvey2;
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

        $('#newdokbuktipenghasilansilentsurvey').on('change', '.pkrj-nsbh-doc-bkt-phsln-ss-non-wira-3', function () {
            if($('.pkrj-nsbh-doc-bkt-phsln-ss-non-wira-3').val() != undefined){
                var BuktiPenghasilanSilentSurvey3 = $('.pkrj-nsbh-doc-bkt-phsln-ss-non-wira-3')[0].files[0];
                
                if(BuktiPenghasilanSilentSurvey3 != undefined){
                    var fileUploadDocument = BuktiPenghasilanSilentSurvey3;
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

        $('#newdokbuktipenghasilansilentsurvey').on('change', '.pkrj-nsbh-doc-bkt-phsln-ss-non-wira-4', function () {
            if($('.pkrj-nsbh-doc-bkt-phsln-ss-non-wira-4').val() != undefined){
                var BuktiPenghasilanSilentSurvey4 = $('.pkrj-nsbh-doc-bkt-phsln-ss-non-wira-4')[0].files[0];
                
                if(BuktiPenghasilanSilentSurvey4 != undefined){
                    var fileUploadDocument = BuktiPenghasilanSilentSurvey4;
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

        $('#newdokbuktipenghasilansilentsurvey').on('change', '.pkrj-nsbh-doc-bkt-phsln-ss-non-wira-5', function () {
            if($('.pkrj-nsbh-doc-bkt-phsln-ss-non-wira-5').val() != undefined){
                var BuktiPenghasilanSilentSurvey5 = $('.pkrj-nsbh-doc-bkt-phsln-ss-non-wira-5')[0].files[0];
                
                if(BuktiPenghasilanSilentSurvey5 != undefined){
                    var fileUploadDocument = BuktiPenghasilanSilentSurvey5;
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

        $('#newdokbuktipenghasilansilentsurvey').on('change', '.pkrj-nsbh-doc-bkt-phsln-ss-non-wira-6', function () {
            if($('.pkrj-nsbh-doc-bkt-phsln-ss-non-wira-6').val() != undefined){
                var BuktiPenghasilanSilentSurvey6 = $('.pkrj-nsbh-doc-bkt-phsln-ss-non-wira-6')[0].files[0];
                
                if(BuktiPenghasilanSilentSurvey6 != undefined){
                    var fileUploadDocument = BuktiPenghasilanSilentSurvey6;
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

    getEconomicSectorLevel1SilentSurvey: function () {
        var file = app.KycNonWiraswastaSilentSurvey;
        $("#slc-pkrj-nsbh-sktr-eknm-lvl-1-ss-non-wira").select2({
            theme: 'bootstrap4',
            placeholder: "PILIH SEKTOR EKONOMI (LEVEL 1)",
            allowClear: true,
            minimumInputLength: 4,
            containerCssClass: "error-slc-pkrj-nsbh-sktr-eknm-lvl-1-ss-non-wira",
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
        var file = app.KycNonWiraswastaSilentSurvey;
        var param_1 = $('#slc-pkrj-nsbh-sktr-eknm-lvl-1-ss-non-wira').val();

        if (param_1 == null || param_1 == '') {
            param_1 = '';
        }

        $("#slc-pkrj-nsbh-sktr-eknm-lvl-2-ss-non-wira").select2({
            theme: 'bootstrap4',
            placeholder: "PILIH SEKTOR EKONOMI (LEVEL 2)",
            allowClear: true,
            minimumInputLength: 4,
            containerCssClass: "error-slc-pkrj-nsbh-sktr-eknm-lvl-2-ss-non-wira",
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
        var file = app.KycNonWiraswastaSilentSurvey;
        var param_1 = $('#slc-pkrj-nsbh-sktr-eknm-lvl-1-ss-non-wira').val();
        var param_2 = $('#slc-pkrj-nsbh-sktr-eknm-lvl-2-ss-non-wira').val();

        if (param_1 == null || param_1 == '') {
            param_1 = '';
        }

        if (param_2 == null || param_2 == '') {
            param_2 = '';
        }

        if (param_1 != '' || param_1 != null && param_2 != '' || param_2 != null){
            $("#slc-pkrj-nsbh-sktr-eknm-lvl-3-ss-non-wira").select2({
                theme: 'bootstrap4',
                placeholder: "PILIH SEKTOR EKONOMI (LEVEL 3)",
                allowClear: true,
                minimumInputLength: 4,
                containerCssClass: "error-slc-pkrj-nsbh-sktr-eknm-lvl-3-ss-non-wira",
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
            $("#slc-pkrj-nsbh-sktr-eknm-lvl-3-ss-non-wira").select2({
                theme: 'bootstrap4',
                placeholder: "PILIH SEKTOR EKONOMI (LEVEL 3)",
                allowClear: true,
                minimumInputLength: 4,
                containerCssClass: "error-slc-pkrj-nsbh-sktr-eknm-lvl-3-ss-non-wira",
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
        var file = app.KycNonWiraswastaSilentSurvey;
        var param = $('#slc-pkrj-nsbh-sktr-eknm-lvl-3-ss-non-wira').select2('data')[0]['text'];
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
                        $("#slc-pkrj-nsbh-sktr-eknm-lvl-1-ss-non-wira").append("<option value='"+data[0].id_1+"' selected>"+data[0].text_1+"</option>");
                        $("#slc-pkrj-nsbh-sktr-eknm-lvl-1-ss-non-wira").val(data[0].id_1);
                        $("#slc-pkrj-nsbh-sktr-eknm-lvl-2-ss-non-wira").append("<option value='"+data[0].id_2+"' selected>"+data[0].text_2+"</option>");
                        $("#slc-pkrj-nsbh-sktr-eknm-lvl-2-ss-non-wira").val(data[0].id_2);
                }
            });
        }
    },

    insertSilentSurveyNonWiraswasta: function() {
        var that = app.KycNonWiraswastaSilentSurvey;
        var pekerjaan_nasabah_silent_survey_non_wiraswasta = {};
        var pekerjaan_nasabah = $('#inp-pkrj-nsbh-ss-non-wira').val();
        var pekerjaan_nasabah_sesuai_tidak_sesuai = document.querySelector('input[name="pkrj-nsbh-ss-non-wira"]:checked').value;
        var jenis_tempat_bekerja = $('#slc-pkrj-nsbh-jns-tmpt-bkrj-ss-non-wira').find(':selected').text();
        var nama_tempat_bekerja = $('#inp-pkrj-nsbh-nm-tmpt-bkrj-ss-non-wira').val();
        var nama_tempat_bekerja_sesuai_tidak_sesuai = document.querySelector('input[name="tmptbkrjssnonwira"]:checked').value;
        var jabatan_nasabah = $('#inp-pkrj-nsbh-jbtn-nsbh-ss-non-wira').val();
        var jabatan_nasabah_sesuai_tidak_sesuai = document.querySelector('input[name="jbtnnsbhssnonwira"]:checked').value;
        var sektor_tempat_bekerja = $('#inp-pkrj-nsbh-sktr-tmpt-bkrj-ss-non-wira').val();
        var sektor_ekonomi_level_1 = $('#slc-pkrj-nsbh-sktr-eknm-lvl-1-ss-non-wira').find(':selected').text();
        var sektor_ekonomi_level_2 = $('#slc-pkrj-nsbh-sktr-eknm-lvl-2-ss-non-wira').find(':selected').text();
        var sektor_ekonomi_level_3 = $('#slc-pkrj-nsbh-sktr-eknm-lvl-3-ss-non-wira').find(':selected').text();
        var dokumen_bukti_bekerja_1 = localStorage.getItem('bukti_bekerja_silent_survey_non_wiraswasta');
        var dokumen_bukti_bekerja_2 = localStorage.getItem('bukti_bekerja_silent_survey_non_wiraswasta_2');
        var dokumen_bukti_penghasilan_1 = localStorage.getItem('bukti_penghasilan_silent_survey_non_wiraswasta');
        var dokumen_bukti_penghasilan_2 = localStorage.getItem('bukti_penghasilan_silent_survey_non_wiraswasta_2');
        var dokumen_bukti_penghasilan_3 = localStorage.getItem('bukti_penghasilan_silent_survey_non_wiraswasta_3');
        var dokumen_bukti_penghasilan_4 = localStorage.getItem('bukti_penghasilan_silent_survey_non_wiraswasta_4');
        var dokumen_bukti_penghasilan_5 = localStorage.getItem('bukti_penghasilan_silent_survey_non_wiraswasta_5');
        var dokumen_bukti_penghasilan_6 = localStorage.getItem('bukti_penghasilan_silent_survey_non_wiraswasta_6');
        var jarak_tempat_bekerja = $('#inp-pkrj-nsbh-jrk-nsbh-ke-muf-ss-non-wira').val();
            
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
}
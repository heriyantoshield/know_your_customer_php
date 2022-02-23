$(document).ready(function() {
    app.KycWiraswastaSilentSurvey.init();
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

app.KycWiraswastaSilentSurvey = {
	controller: 'Kyc/',
	api: 'Kyc_api/',
	elm: {},

	init: function () {
        var file = app.KycWiraswastaSilentSurvey;
		var id_bukti_usaha_silent_survey = 2;  
        var id_bukti_keuangan_silent_survey = 2;
        
		document.getElementById("add-pkrj-nsbh-doc-bkt-ush-ss-wira").onclick = function() {functionAddUsahaSilentSurvey()};
        document.getElementById("add-pkrj-nsbh-doc-bkt-kungn-ss-wira").onclick = function() {functionAddKeuanganSilentSurvey()};
        
		function functionAddUsahaSilentSurvey(){
            if(id_bukti_usaha_silent_survey == 2){
                $('#newdokbuktiusahasilentsurvey').append('<div class="col-lg-4" style="margin-top:10px;"><input type="file" class="form-control-file pkrj-nsbh-doc-bkt-ush-ss-wira-'+id_bukti_usaha_silent_survey+'" accept="application/pdf, image/jpg, image/jpeg, image/png"></input></div>');
                id_bukti_usaha_silent_survey++;
            }
        }
		function functionAddKeuanganSilentSurvey(){
            if(id_bukti_keuangan_silent_survey <= 6){
                $('#newdokbuktikeuangansilentsurvey').append('<div class="col-lg-4" style="margin-top:10px;"><input type="file" class="form-control-file pkrj-nsbh-doc-bkt-kungn-ss-wira-'+id_bukti_keuangan_silent_survey+'" accept="application/pdf, image/jpg, image/jpeg, image/png"></div>');
                id_bukti_keuangan_silent_survey++;
            }
        }

		$('#slc-pkrj-nsbh-sktr-eko-lvl-1-ss-wira').on('change', function() {
            var file = app.KycWiraswastaSilentSurvey;
            $("#slc-pkrj-nsbh-sktr-eko-lvl-2-ss-wira").val('').trigger('change');
            file.getEconomicSectorLevel2SilentSurvey();
        });

        $('#slc-pkrj-nsbh-sktr-eko-lvl-2-ss-wira').on('change', function() {
            var file = app.KycWiraswastaSilentSurvey;
            $('#slc-pkrj-nsbh-sktr-eko-lvl-3-ss-wira').val('').trigger('change');
            file.getEconomicSectorLevel3SilentSurvey();
            file.getEconomicSectorFromLevel3ToLevel2andLevel1SilentSurvey();
        });

        $('#slc-pkrj-nsbh-sktr-eko-lvl-3-ss-wira').on('change', function() {
            var file = app.KycWiraswastaSilentSurvey;
            if($('#slc-pkrj-nsbh-sktr-eko-lvl-3-ss-wira').val() == null &&
               $('#slc-pkrj-nsbh-sktr-eko-lvl-3-ss-wira').select2('data')[0]['text'] == null){
                if($('#slc-pkrj-nsbh-sktr-eko-lvl-1-ss-wira').val() != '' && 
                   $('#slc-pkrj-nsbh-sktr-eko-lvl-2-ss-wira').val() == null){
                        $('#slc-pkrj-nsbh-sktr-eko-lvl-2-ss-wira').empty();
                }
                else if ($('#slc-pkrj-nsbh-sktr-eko-lvl-1-ss-wira').val() != '' && 
                         $('#slc-pkrj-nsbh-sktr-eko-lvl-2-ss-wira').val() != ''){
                            $('#slc-pkrj-nsbh-sktr-eko-lvl-3-ss-wira').empty();
                }
            }
            else if($('#slc-pkrj-nsbh-sktr-eko-lvl-3-ss-wira').val() != null &&
                    $('#slc-pkrj-nsbh-sktr-eko-lvl-3-ss-wira').select2('data')[0]['text'] != null){
                        $('#slc-pkrj-nsbh-sktr-eko-lvl-1-ss-wira').empty();
                        $('#slc-pkrj-nsbh-sktr-eko-lvl-2-ss-wira').empty();
                        file.getEconomicSectorFromLevel3ToLevel2andLevel1SilentSurvey();
            }
        });

		file.getEconomicSectorLevel1SilentSurvey();
        file.getEconomicSectorLevel2SilentSurvey();
        file.getEconomicSectorLevel3SilentSurvey();
        file.getEconomicSectorFromLevel3ToLevel2andLevel1SilentSurvey();

		$('#btn-save-pkrj-nsbh-ss-wira').click(function () {
            var file = app.KycWiraswastaSilentSurvey;

            //Validasi Button Silent Survey Wiraswasta
            if($('#slc-pkrj-nsbh-sktr-eko-lvl-1-ss-wira option:selected').val() == null || 
               $('#slc-pkrj-nsbh-sktr-eko-lvl-1-ss-wira option:selected').val() == ''){
                $('#err-slc-pkrj-nsbh-sktr-eko-lvl-1-ss-wira').html('Sektor Ekonomi Level 1 Wajib Diisi');
                $('#err-slc-pkrj-nsbh-sktr-eko-lvl-1-ss-wira').prop("hidden", false);
                $('.error-slc-pkrj-nsbh-sktr-eko-lvl-1-ss-wira').css({"border-color": "red"});
            }
            else if($('#slc-pkrj-nsbh-sktr-eko-lvl-1-ss-wira option:selected').val() != null || 
                    $('#slc-pkrj-nsbh-sktr-eko-lvl-1-ss-wira option:selected').val() != ''){
                        $('#err-slc-pkrj-nsbh-sktr-eko-lvl-1-ss-wira').html('');
                        $('#err-slc-pkrj-nsbh-sktr-eko-lvl-1-ss-wira').prop("hidden", true);
                        $('.error-slc-pkrj-nsbh-sktr-eko-lvl-1-ss-wira').css({"border-color": ""});
            }

            if($('#slc-pkrj-nsbh-sktr-eko-lvl-2-ss-wira option:selected').val() == null || 
               $('#slc-pkrj-nsbh-sktr-eko-lvl-2-ss-wira option:selected').val() == ''){
                $('#err-slc-pkrj-nsbh-sktr-eko-lvl-2-ss-wira').html('Sektor Ekonomi Level 2 Wajib Diisi');
                $('#err-slc-pkrj-nsbh-sktr-eko-lvl-2-ss-wira').prop("hidden", false);
                $('.error-slc-pkrj-nsbh-sktr-eko-lvl-2-ss-wira').css({"border-color": "red"});
            }
            else if($('#slc-pkrj-nsbh-sktr-eko-lvl-2-ss-wira option:selected').val() != null || 
                    $('#slc-pkrj-nsbh-sktr-eko-lvl-2-ss-wira option:selected').val() != ''){
                        $('#err-slc-pkrj-nsbh-sktr-eko-lvl-2-ss-wira').html('');
                        $('#err-slc-pkrj-nsbh-sktr-eko-lvl-2-ss-wira').prop("hidden", true);
                        $('.error-slc-pkrj-nsbh-sktr-eko-lvl-2-ss-wira').css({"border-color": ""});
            }

            if($('#slc-pkrj-nsbh-sktr-eko-lvl-3-ss-wira option:selected').val() == null || 
               $('#slc-pkrj-nsbh-sktr-eko-lvl-3-ss-wira option:selected').val() == ''){
                $('#err-slc-pkrj-nsbh-sktr-eko-lvl-3-ss-wira').html('Sektor Ekonomi Level 3 Wajib Diisi');
                $('#err-slc-pkrj-nsbh-sktr-eko-lvl-3-ss-wira').prop("hidden", false);
                $('.error-slc-pkrj-nsbh-sktr-eko-lvl-3-ss-wira').css({"border-color": "red"});
            }
            else if($('#slc-pkrj-nsbh-sktr-eko-lvl-3-ss-wira option:selected').val() != null || 
                    $('#slc-pkrj-nsbh-sktr-eko-lvl-3-ss-wira option:selected').val() != ''){
                        $('#err-slc-pkrj-nsbh-sktr-eko-lvl-3-ss-wira').html('');
                        $('#err-slc-pkrj-nsbh-sktr-eko-lvl-3-ss-wira').prop("hidden", true);
                        $('.error-slc-pkrj-nsbh-sktr-eko-lvl-3-ss-wira').css({"border-color": ""});
            }

            if($('#pkrj-nsbh-doc-bkt-ush-ss-wira').val() == ''){
                $('#err-pkrj-nsbh-doc-bkt-ush-ss-wira').html('Dokumen Bukti Usaha Wajib Diisi');
                $('#err-pkrj-nsbh-doc-bkt-ush-ss-wira').prop("hidden", false);
                $('.error-pkrj-nsbh-doc-bkt-ush-ss-wira').css({"border-color": "red"});
            }
            else if($('#pkrj-nsbh-doc-bkt-ush-ss-wira').val() != ''){
                        $('#err-pkrj-nsbh-doc-bkt-ush-ss-wira').html('');
                        $('#err-pkrj-nsbh-doc-bkt-ush-ss-wira').prop("hidden", true);
                        $('.error-pkrj-nsbh-doc-bkt-ush-ss-wira').css({"border-color": ""});
            }

            if($('#pkrj-nsbh-doc-bkt-kungn-ss-wira').val() == ''){
                $('#err-pkrj-nsbh-doc-bkt-kungn-ss-wira').html('Dokumen Bukti Keuangan Wajib Diisi');
                $('#err-pkrj-nsbh-doc-bkt-kungn-ss-wira').prop("hidden", false);
                $('.error-pkrj-nsbh-doc-bkt-kungn-ss-wira').css({"border-color": "red"});
            }
            else if($('#pkrj-nsbh-doc-bkt-kungn-ss-wira').val() != ''){
                        $('#err-pkrj-nsbh-doc-bkt-kungn-ss-wira').html('');
                        $('#err-pkrj-nsbh-doc-bkt-kungn-ss-wira').prop("hidden", true);
                        $('.error-pkrj-nsbh-doc-bkt-kungn-ss-wira').css({"border-color": ""});
            }

            if($('#pkrj-nsbh-ft-tmpt-ush-ss-wira').val() == ''){
                $('#err-pkrj-nsbh-ft-tmpt-ush-ss-wira').html('Foto Tempat Usaha Wajib Diisi');
                $('#err-pkrj-nsbh-ft-tmpt-ush-ss-wira').prop("hidden", false);
                $('.error-pkrj-nsbh-ft-tmpt-ush-ss-wira').css({"border-color": "red"});
            }
            else if($('#pkrj-nsbh-ft-tmpt-ush-ss-wira').val() != ''){
                        $('#err-pkrj-nsbh-ft-tmpt-ush-ss-wira').html('');
                        $('#err-pkrj-nsbh-ft-tmpt-ush-ss-wira').prop("hidden", true);
                        $('.error-pkrj-nsbh-ft-tmpt-ush-ss-wira').css({"border-color": ""});
            }

            if($('#pkrj-nsbh-ft-slf-ss-wira').val() == ''){
                $('#err-pkrj-nsbh-ft-slf-ss-wira').html('Foto Selfie Wajib Diisi');
                $('#err-pkrj-nsbh-ft-slf-ss-wira').prop("hidden", false);
                $('.error-pkrj-nsbh-ft-slf-ss-wira').css({"border-color": "red"});
            }
            else if($('#pkrj-nsbh-ft-slf-ss-wira').val() != ''){
                        $('#err-pkrj-nsbh-ft-slf-ss-wira').html('');
                        $('#err-pkrj-nsbh-ft-slf-ss-wira').prop("hidden", true);
                        $('.error-pkrj-nsbh-ft-slf-ss-wira').css({"border-color": ""});
            }

            if($('#inp-pkrj-nsbh-jrk-nsbh-ke-muf-ss-wira').val() == ''){
                $('#err-inp-pkrj-nsbh-jrk-nsbh-ke-muf-ss-wira').html('Jarak Tempat Nasabah ke MUF Wajib Diisi');
                $('#err-inp-pkrj-nsbh-jrk-nsbh-ke-muf-ss-wira').prop("hidden", false);
                $('input[id=inp-pkrj-nsbh-jrk-nsbh-ke-muf-ss-wira]').css({"border-color": "red"});
            }
            else if($('#inp-pkrj-nsbh-jrk-nsbh-ke-muf-ss-wira').val() != ''){
                        $('#err-inp-pkrj-nsbh-jrk-nsbh-ke-muf-ss-wira').html('');
                        $('#err-inp-pkrj-nsbh-jrk-nsbh-ke-muf-ss-wira').prop("hidden", true);
                        $('input[id=inp-pkrj-nsbh-jrk-nsbh-ke-muf-ss-wira]').css({"border-color": ""});
            }

            file.insertSilentSurveyWiraswasta();
            
        });

		//Onchange Upload File in Silent Survey
        $('#pkrj-nsbh-doc-bkt-ush-ss-wira').on('change', function(){
            if($('#pkrj-nsbh-doc-bkt-ush-ss-wira').val() != undefined){
                var BuktiUsahaSilentSurvey1 = $('#pkrj-nsbh-doc-bkt-ush-ss-wira')[0].files[0];
                
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
                                //console.log("BASE PDF BU 1",base64);
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
                                    //console.log("BASE JPG BU 1",base64BuktiUsahaSilentSurveyWiraswasta);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                        } 
                    }
                }

            }
        });
        
        $('#newdokbuktiusahasilentsurvey').on('change', '.pkrj-nsbh-doc-bkt-ush-ss-wira-2', function () {
            if($('.pkrj-nsbh-doc-bkt-ush-ss-wira-2').val() != undefined){
                var BuktiUsahaSilentSurvey2 = $('.pkrj-nsbh-doc-bkt-ush-ss-wira-2')[0].files[0];

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
                            //console.log("BASE PDF BU 2",base64);
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
                                    //console.log("BASE JPG BU 2",base64BuktiUsahaSilentSurveyWiraswasta);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                        } 
                    }
                }

            }
        });

        $('#pkrj-nsbh-doc-bkt-kungn-ss-wira').on('change', function(){
            if($('#pkrj-nsbh-doc-bkt-kungn-ss-wira').val() != undefined){
                var BuktiKeuanganSilentSurvey1 = $('#pkrj-nsbh-doc-bkt-kungn-ss-wira')[0].files[0];

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
                                //console.log("BASE PDF BK 1", base64);
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
                                    //console.log("BASE JPG BK 1", base64BuktiKeuanganSilentSurveyWiraswasta);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);        
                        } 
                    }
                }
            }
        });

        $('#newdokbuktikeuangansilentsurvey').on('change', '.pkrj-nsbh-doc-bkt-kungn-ss-wira-2', function () {
            if($('.pkrj-nsbh-doc-bkt-kungn-ss-wira-2').val() != undefined){
                var BuktiKeuanganSilentSurvey2 = $('.pkrj-nsbh-doc-bkt-kungn-ss-wira-2')[0].files[0];
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
                            //console.log("BASE PDF BK 2", base64);
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
                                    //console.log("BASE JPG BK 2", base64BuktiKeuanganSilentSurveyWiraswasta2);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);        
                        } 
                    }
                }
            }
        });

        $('#newdokbuktikeuangansilentsurvey').on('change', '.pkrj-nsbh-doc-bkt-kungn-ss-wira-3', function () {
            if($('.pkrj-nsbh-doc-bkt-kungn-ss-wira-3').val() != undefined){
                var BuktiKeuanganSilentSurvey3 = $('.pkrj-nsbh-doc-bkt-kungn-ss-wira-3')[0].files[0];
                
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
                            //console.log("BASE PDF BK 3", base64);
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
                                    //console.log("BASE JPG BK 3", base64BuktiKeuanganSilentSurveyWiraswasta3);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);        
                        } 
                    }
                }
            }
        });

        $('#newdokbuktikeuangansilentsurvey').on('change', '.pkrj-nsbh-doc-bkt-kungn-ss-wira-4', function () {
            if($('.pkrj-nsbh-doc-bkt-kungn-ss-wira-4').val() != undefined){
                var BuktiKeuanganSilentSurvey4 = $('.pkrj-nsbh-doc-bkt-kungn-ss-wira-4')[0].files[0];

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
                            //console.log("BASE PDF BK 4", base64);
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
                                    //console.log("BASE JPG BK 4", base64BuktiKeuanganSilentSurveyWiraswasta4);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);        
                        } 
                    }
                }
            }
        });

        $('#newdokbuktikeuangansilentsurvey').on('change', '.pkrj-nsbh-doc-bkt-kungn-ss-wira-5', function () {
            if($('.pkrj-nsbh-doc-bkt-kungn-ss-wira-5').val() != undefined){
                var BuktiKeuanganSilentSurvey5 = $('.pkrj-nsbh-doc-bkt-kungn-ss-wira-5')[0].files[0];

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
                            //console.log("BASE PDF BK 5", base64);
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
                                    //console.log("BASE JPG BK 5", base64BuktiKeuanganSilentSurveyWiraswasta5);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);        
                        } 
                    }
                }
            }
        });

        $('#newdokbuktikeuangansilentsurvey').on('change', '.pkrj-nsbh-doc-bkt-kungn-ss-wira-6', function () {
            if($('.pkrj-nsbh-doc-bkt-kungn-ss-wira-6').val() != undefined){
                var BuktiKeuanganSilentSurvey6 = $('.pkrj-nsbh-doc-bkt-kungn-ss-wira-6')[0].files[0];
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
                        //console.log("BASE PDF BK 6", base64);
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
                                //console.log("BASE JPG BK 6", base64BuktiKeuanganSilentSurveyWiraswasta6);
                            }
                            image.src = event.target.result;
                        }
                        reader.readAsDataURL(fileUploadDocument);        
                    } 
                }
            }

        });
        
        $('#pkrj-nsbh-ft-tmpt-ush-ss-wira').on('change', function(){
            if($('#pkrj-nsbh-ft-tmpt-ush-ss-wira').val() != undefined){
                var TempatUsahaInstanApproval = $('#pkrj-nsbh-ft-tmpt-ush-ss-wira')[0].files[0];
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
                                //console.log("BASE PDF FTU", base64);
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
                                    //console.log("BASE JPG FTU", base64FotoTempatUsahaSilentSurveyWiraswasta);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
        
                        } 
                    }
                }
            }
        });

        $('#pkrj-nsbh-ft-slf-ss-wira').on('change', function(){
            if($('#pkrj-nsbh-ft-slf-ss-wira').val() != undefined){
                var SelfieInstanApproval = $('#pkrj-nsbh-ft-slf-ss-wira')[0].files[0];
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
                                //console.log("BASE PDF FS", base64);
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
                                    //console.log("BASE JPG FS", base64FotoSelfieSilentSurveyWiraswasta);
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
        var file = app.KycWiraswastaSilentSurvey;
        $("#slc-pkrj-nsbh-sktr-eko-lvl-1-ss-wira").select2({
            theme: 'bootstrap4',
            placeholder: "PILIH SEKTOR EKONOMI (LEVEL 1)",
            allowClear: true,
            minimumInputLength: 4,
            containerCssClass: "error-slc-pkrj-nsbh-sktr-eko-lvl-1-ss-wira",
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
        var file = app.KycWiraswastaSilentSurvey;
        var param_1 = $('#slc-pkrj-nsbh-sktr-eko-lvl-1-ss-wira').val();

        if (param_1 == null || param_1 == '') {
            param_1 = '';
        }

        $("#slc-pkrj-nsbh-sktr-eko-lvl-2-ss-wira").select2({
            theme: 'bootstrap4',
            placeholder: "PILIH SEKTOR EKONOMI (LEVEL 2)",
            allowClear: true,
            minimumInputLength: 4,
            containerCssClass: "error-slc-pkrj-nsbh-sktr-eko-lvl-2-ss-wira",
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
        var file = app.KycWiraswastaSilentSurvey;
        var param_1 = $('#slc-pkrj-nsbh-sktr-eko-lvl-1-ss-wira').val();
        var param_2 = $('#slc-pkrj-nsbh-sktr-eko-lvl-2-ss-wira').val();

        if (param_1 == null || param_1 == '') {
            param_1 = '';
        }

        if (param_2 == null || param_2 == '') {
            param_2 = '';
        }

        if (param_1 != '' || param_1 != null && param_2 != '' || param_2 != null){
        
            $("#slc-pkrj-nsbh-sktr-eko-lvl-3-ss-wira").select2({
                theme: 'bootstrap4',
                placeholder: "PILIH SEKTOR EKONOMI (LEVEL 3)",
                allowClear: true,
                minimumInputLength: 4,
                containerCssClass: "error-slc-pkrj-nsbh-sktr-eko-lvl-3-ss-wira",
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
            $("#slc-pkrj-nsbh-sktr-eko-lvl-3-ss-wira").select2({
                theme: 'bootstrap4',
                placeholder: "PILIH SEKTOR EKONOMI (LEVEL 3)",
                allowClear: true,
                minimumInputLength: 4,
                containerCssClass: "error-slc-pkrj-nsbh-sktr-eko-lvl-3-ss-wira",
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
        var file = app.KycWiraswastaSilentSurvey;
        var param = $('#slc-pkrj-nsbh-sktr-eko-lvl-3-ss-wira').select2('data')[0]['text'];
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
                        $("#slc-pkrj-nsbh-sktr-eko-lvl-1-ss-wira").append("<option value='"+data[0].id_1+"' selected>"+data[0].text_1+"</option>");
                        $("#slc-pkrj-nsbh-sktr-eko-lvl-1-ss-wira").val(data[0].id_1);
                        $("#slc-pkrj-nsbh-sktr-eko-lvl-2-ss-wira").append("<option value='"+data[0].id_2+"' selected>"+data[0].text_2+"</option>");
                        $("#slc-pkrj-nsbh-sktr-eko-lvl-2-ss-wira").val(data[0].id_2);
                }
            });
        }
    },

	insertSilentSurveyWiraswasta: function() {
        var that = app.KycWiraswastaSilentSurvey;
        var pekerjaan_nasabah_silent_survey_wiraswasta = {};
        var pekerjaan_nasabah = $('#inp-pkrj-nsbh-ss-wira').val();
        var pekerjaan_nasabah_sesuai_tidak_sesuai = document.querySelector('input[name="pkrjnsbhsswira"]:checked').value;
        var jenis_tempat_usaha = $('#slc-pkrj-nsbh-jns-tmpt-ush-ss-wira').find(':selected').text();
        var nama_tempat_usaha = $('#inp-pkrj-nsbh-nm-tmpt-ush-ss-wira').val();
        var nama_tempat_usaha_sesuai_tidak_sesuai = document.querySelector('input[name="nmtmptushsswira"]:checked').value;
        var bidang_usaha = $('#inp-pkrj-nsbh-bdng-ush-ss-wira').val();
        var bidang_usaha_sesuai_tidak_sesuai = document.querySelector('input[name="bdngushsswira"]:checked').value;
        var sektor_tempat_usaha = $('#inp-pkrj-nsbh-sktr-tmpt-ush-ss-wira').val();
        var sektor_ekonomi_level_1 = $('#slc-pkrj-nsbh-sktr-eko-lvl-1-ss-wira').find(':selected').text();
        var sektor_ekonomi_level_2 = $('#slc-pkrj-nsbh-sktr-eko-lvl-2-ss-wira').find(':selected').text();
        var sektor_ekonomi_level_3 = $('#slc-pkrj-nsbh-sktr-eko-lvl-3-ss-wira').find(':selected').text();
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
        var jarak_tempat_usaha = $('#inp-pkrj-nsbh-jrk-nsbh-ke-muf-ss-wira').val();
            
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
$(document).ready(function() {
    app.KycWiraswastaTeleSurvey.init();
    localStorage.setItem("bukti_usaha_tele_survey_wiraswasta", "");
    localStorage.setItem("bukti_usaha_tele_survey_wiraswasta_2", "");
    localStorage.setItem("bukti_keuangan_tele_survey_wiraswasta", "");
    localStorage.setItem("bukti_keuangan_tele_survey_wiraswasta_2", "");
    localStorage.setItem("bukti_keuangan_tele_survey_wiraswasta_3", "");
    localStorage.setItem("bukti_keuangan_tele_survey_wiraswasta_4", "");
    localStorage.setItem("bukti_keuangan_tele_survey_wiraswasta_5", "");
    localStorage.setItem("bukti_keuangan_tele_survey_wiraswasta_6", "");
    localStorage.setItem("foto_tempat_usaha_tele_survey_wiraswasta", "");
    localStorage.setItem("foto_selfie_tele_survey_wiraswasta", "");
});

app.KycWiraswastaTeleSurvey = {
	controller: 'Kyc/',
	api: 'Kyc_api/',
	elm: {},

	init: function () {
        var file = app.KycWiraswastaTeleSurvey;
		var id_bukti_usaha_tele_survey = 2;
        var id_bukti_keuangan_tele_survey = 2;

		document.getElementById("add-pkrj-nsbh-doc-bkt-ush-ts-wira").onclick = function() {functionAddUsahaTeleSurvey()};
        document.getElementById("add-pkrj-nsbh-doc-bkt-kungn-ts-wira").onclick = function() {functionAddKeuanganTeleSurvey()};
        
		function functionAddUsahaTeleSurvey(){
			if(id_bukti_usaha_tele_survey == 2){
                $('#newdokbuktiusahatelesurvey').append('<div class="col-lg-4" style="margin-top:10px;"><input type="file" class="form-control-file pkrj-nsbh-doc-bkt-ush-ts-wira-'+id_bukti_usaha_tele_survey+'" accept="application/pdf, image/jpg, image/jpeg, image/png"></div>');
                id_bukti_usaha_tele_survey++;
            }
        }
        
        function functionAddKeuanganTeleSurvey(){
            if(id_bukti_keuangan_tele_survey <= 6){
                $('#newdokbuktikeuangantelesurvey').append('<div class="col-lg-4" style="margin-top:10px;"><input type="file" class="form-control-file pkrj-nsbh-doc-bkt-kungn-ts-wira-'+id_bukti_keuangan_tele_survey+'" accept="application/pdf, image/jpg, image/jpeg, image/png"></div>');
                id_bukti_keuangan_tele_survey++;
            }
        }
		
		$('#slc-pkrj-nsbh-sktr-eko-lvl-1-ts-wira').on('change', function() {
            var file = app.KycWiraswastaTeleSurvey;
            $("#slc-pkrj-nsbh-sktr-eko-lvl-2-ts-wira").val('').trigger('change');
            file.getEconomicSectorLevel2TeleSurvey();
        });

        $('#slc-pkrj-nsbh-sktr-eko-lvl-2-ts-wira').on('change', function() {
            var file = app.KycWiraswastaTeleSurvey;
            $('#slc-pkrj-nsbh-sktr-eko-lvl-3-ts-wira').val('').trigger('change');
            file.getEconomicSectorLevel3TeleSurvey();
            file.getEconomicSectorFromLevel3ToLevel2andLevel1TeleSurvey();
        });

        $('#slc-pkrj-nsbh-sktr-eko-lvl-3-ts-wira').on('change', function() {
            var file = app.KycWiraswastaTeleSurvey;
            if($('#slc-pkrj-nsbh-sktr-eko-lvl-3-ts-wira').val() == null &&
               $('#slc-pkrj-nsbh-sktr-eko-lvl-3-ts-wira').select2('data')[0]['text'] == null){
                if($('#slc-pkrj-nsbh-sktr-eko-lvl-1-ts-wira').val() != '' && 
                   $('#slc-pkrj-nsbh-sktr-eko-lvl-2-ts-wira').val() == null){
                        $('#slc-pkrj-nsbh-sktr-eko-lvl-2-ts-wira').empty();
                }
                else if ($('#slc-pkrj-nsbh-sktr-eko-lvl-1-ts-wira').val() != '' && 
                         $('#slc-pkrj-nsbh-sktr-eko-lvl-2-ts-wira').val() != ''){
                            $('#slc-pkrj-nsbh-sktr-eko-lvl-3-ts-wira').empty();
                }
            }
            else if($('#slc-pkrj-nsbh-sktr-eko-lvl-3-ts-wira').val() != null &&
                    $('#slc-pkrj-nsbh-sktr-eko-lvl-3-ts-wira').select2('data')[0]['text'] != null){
                        $('#slc-pkrj-nsbh-sktr-eko-lvl-1-ts-wira').empty();
                        $('#slc-pkrj-nsbh-sktr-eko-lvl-2-ts-wira').empty();
                        file.getEconomicSectorFromLevel3ToLevel2andLevel1TeleSurvey();
            }
        });

		file.getEconomicSectorLevel1TeleSurvey();
        file.getEconomicSectorLevel2TeleSurvey();
        file.getEconomicSectorLevel3TeleSurvey();
        file.getEconomicSectorFromLevel3ToLevel2andLevel1TeleSurvey();

		$('#btn-save-pkrj-nsbh-ts-wira').click(function () {
            var file = app.KycWiraswastaTeleSurvey;

            if($('#slc-pkrj-nsbh-sktr-eko-lvl-1-ts-wira option:selected').val() == null || 
               $('#slc-pkrj-nsbh-sktr-eko-lvl-1-ts-wira option:selected').val() == ''){
                $('#err-slc-pkrj-nsbh-sktr-eko-lvl-1-ts-wira').html('Sektor Ekonomi Level 1 Wajib Diisi');
                $('#err-slc-pkrj-nsbh-sktr-eko-lvl-1-ts-wira').prop("hidden", false);
                $('.error-slc-pkrj-nsbh-sktr-eko-lvl-1-ts-wira').css({"border-color": "red"});
            }
            else if($('#slc-pkrj-nsbh-sktr-eko-lvl-1-ts-wira option:selected').val() != null || 
                    $('#slc-pkrj-nsbh-sktr-eko-lvl-1-ts-wira option:selected').val() != ''){
                        $('#err-slc-pkrj-nsbh-sktr-eko-lvl-1-ts-wira').html('');
                        $('#err-slc-pkrj-nsbh-sktr-eko-lvl-1-ts-wira').prop("hidden", true);
                        $('.error-slc-pkrj-nsbh-sktr-eko-lvl-1-ts-wira').css({"border-color": ""});
            }

            if($('#slc-pkrj-nsbh-sktr-eko-lvl-2-ts-wira option:selected').val() == null || 
               $('#slc-pkrj-nsbh-sktr-eko-lvl-2-ts-wira option:selected').val() == ''){
                $('#err-slc-pkrj-nsbh-sktr-eko-lvl-2-ts-wira').html('Sektor Ekonomi Level 2 Wajib Diisi');
                $('#err-slc-pkrj-nsbh-sktr-eko-lvl-2-ts-wira').prop("hidden", false);
                $('.error-slc-pkrj-nsbh-sktr-eko-lvl-2-ts-wira').css({"border-color": "red"});
            }
            else if($('#slc-pkrj-nsbh-sktr-eko-lvl-2-ts-wira option:selected').val() != null || 
                    $('#slc-pkrj-nsbh-sktr-eko-lvl-2-ts-wira option:selected').val() != ''){
                        $('#err-slc-pkrj-nsbh-sktr-eko-lvl-2-ts-wira').html('');
                        $('#err-slc-pkrj-nsbh-sktr-eko-lvl-2-ts-wira').prop("hidden", true);
                        $('.error-slc-pkrj-nsbh-sktr-eko-lvl-2-ts-wira').css({"border-color": ""});
            }

            if($('#slc-pkrj-nsbh-sktr-eko-lvl-3-ts-wira option:selected').val() == null || 
               $('#slc-pkrj-nsbh-sktr-eko-lvl-3-ts-wira option:selected').val() == ''){
                $('#err-slc-pkrj-nsbh-sktr-eko-lvl-3-ts-wira').html('Sektor Ekonomi Level 3 Wajib Diisi');
                $('#err-slc-pkrj-nsbh-sktr-eko-lvl-3-ts-wira').prop("hidden", false);
                $('.error-slc-pkrj-nsbh-sktr-eko-lvl-3-ts-wira').css({"border-color": "red"});
            }
            else if($('#slc-pkrj-nsbh-sktr-eko-lvl-3-ts-wira option:selected').val() != null || 
                    $('#slc-pkrj-nsbh-sktr-eko-lvl-3-ts-wira option:selected').val() != ''){
                        $('#err-slc-pkrj-nsbh-sktr-eko-lvl-3-ts-wira').html('');
                        $('#err-slc-pkrj-nsbh-sktr-eko-lvl-3-ts-wira').prop("hidden", true);
                        $('.error-slc-pkrj-nsbh-sktr-eko-lvl-3-ts-wira').css({"border-color": ""});
            }

            if($('#pkrj-nsbh-doc-bkt-ush-ts-wira').val() == ''){
                $('#err-pkrj-nsbh-doc-bkt-ush-ts-wira').html('Dokumen Bukti Usaha Wajib Diisi');
                $('#err-pkrj-nsbh-doc-bkt-ush-ts-wira').prop("hidden", false);
                $('.error-pkrj-nsbh-doc-bkt-ush-ts-wira').css({"border-color": "red"});
            }
            else if($('#pkrj-nsbh-doc-bkt-ush-ts-wira').val() != ''){
                        $('#err-pkrj-nsbh-doc-bkt-ush-ts-wira').html('');
                        $('#err-pkrj-nsbh-doc-bkt-ush-ts-wira').prop("hidden", true);
                        $('.error-pkrj-nsbh-doc-bkt-ush-ts-wira').css({"border-color": ""});
            }

            if($('#pkrj-nsbh-doc-bkt-kungn-ts-wira').val() == ''){
                $('#err-pkrj-nsbh-doc-bkt-kungn-ts-wira').html('Dokumen Bukti Keuangan Wajib Diisi');
                $('#err-pkrj-nsbh-doc-bkt-kungn-ts-wira').prop("hidden", false);
                $('.error-pkrj-nsbh-doc-bkt-kungn-ts-wira').css({"border-color": "red"});
            }
            else if($('#pkrj-nsbh-doc-bkt-kungn-ts-wira').val() != ''){
                        $('#err-pkrj-nsbh-doc-bkt-kungn-ts-wira').html('');
                        $('#err-pkrj-nsbh-doc-bkt-kungn-ts-wira').prop("hidden", true);
                        $('.error-pkrj-nsbh-doc-bkt-kungn-ts-wira').css({"border-color": ""});
            }

            if($('#pkrj-nsbh-ft-tmpt-ush-ts-wira').val() == ''){
                $('#err-pkrj-nsbh-ft-tmpt-ush-ts-wira').html('Foto Tempat Usaha Wajib Diisi');
                $('#err-pkrj-nsbh-ft-tmpt-ush-ts-wira').prop("hidden", false);
                $('.error-pkrj-nsbh-ft-tmpt-ush-ts-wira').css({"border-color": "red"});
            }
            else if($('#pkrj-nsbh-ft-tmpt-ush-ts-wira').val() != ''){
                        $('#err-pkrj-nsbh-ft-tmpt-ush-ts-wira').html('');
                        $('#err-pkrj-nsbh-ft-tmpt-ush-ts-wira').prop("hidden", true);
                        $('.error-pkrj-nsbh-ft-tmpt-ush-ts-wira').css({"border-color": ""});
            }

            if($('#pkrj-nsbh-ft-slf-ts-wira').val() == ''){
                $('#err-pkrj-nsbh-ft-slf-ts-wira').html('Foto Selfie Wajib Diisi');
                $('#err-pkrj-nsbh-ft-slf-ts-wira').prop("hidden", false);
                $('.error-pkrj-nsbh-ft-slf-ts-wira').css({"border-color": "red"});
            }
            else if($('#pkrj-nsbh-ft-slf-ts-wira').val() != ''){
                        $('#err-pkrj-nsbh-ft-slf-ts-wira').html('');
                        $('#err-pkrj-nsbh-ft-slf-ts-wira').prop("hidden", true);
                        $('.error-pkrj-nsbh-ft-slf-ts-wira').css({"border-color": ""});
            }

            if($('#inp-pkrj-nsbh-jrk-nsbh-ke-muf-ts-wira').val() == ''){
                $('#err-inp-pkrj-nsbh-jrk-nsbh-ke-muf-ts-wira').html('Jarak Tempat Nasabah ke MUF Wajib Diisi');
                $('#err-inp-pkrj-nsbh-jrk-nsbh-ke-muf-ts-wira').prop("hidden", false);
                $('input[id=inp-pkrj-nsbh-jrk-nsbh-ke-muf-ts-wira]').css({"border-color": "red"});
            }
            else if($('#inp-pkrj-nsbh-jrk-nsbh-ke-muf-ts-wira').val() != ''){
                        $('#err-inp-pkrj-nsbh-jrk-nsbh-ke-muf-ts-wira').html('');
                        $('#err-inp-pkrj-nsbh-jrk-nsbh-ke-muf-ts-wira').prop("hidden", true);
                        $('input[id=inp-pkrj-nsbh-jrk-nsbh-ke-muf-ts-wira]').css({"border-color": ""});
            }

            file.insertTeleSurveyWiraswasta();
        });

		//Onchange Upload File in Tele Survey
        $('#pkrj-nsbh-doc-bkt-ush-ts-wira').on('change', function(){
            if($('#pkrj-nsbh-doc-bkt-ush-ts-wira').val() != undefined){
                var BuktiUsahaTeleSurvey1 = $('#pkrj-nsbh-doc-bkt-ush-ts-wira')[0].files[0];
                
                if(BuktiUsahaTeleSurvey1 != undefined){
                    var fileUploadDocument = BuktiUsahaTeleSurvey1;
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
                                //console.log("BASE PDF BU 1",base64);
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            localStorage.setItem("bukti_usaha_tele_survey_wiraswasta", base64);
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
                                    base64BuktiUsahaTeleSurveyWiraswasta = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64BuktiUsahaTeleSurveyWiraswasta = base64BuktiUsahaTeleSurveyWiraswasta;
                                    localStorage.setItem("bukti_usaha_tele_survey_wiraswasta", base64BuktiUsahaTeleSurveyWiraswasta);
                                    //console.log("BASE JPG BU 1",base64BuktiUsahaTeleSurveyWiraswasta);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                        } 
                    }
                }

            }
        });
        
        $('#newdokbuktiusahatelesurvey').on('change', '.pkrj-nsbh-doc-bkt-ush-ts-wira-2', function () {
            if($('.pkrj-nsbh-doc-bkt-ush-ts-wira-2').val() != undefined){
                var BuktiUsahaTeleSurvey2 = $('.pkrj-nsbh-doc-bkt-ush-ts-wira-2')[0].files[0];

                if(BuktiUsahaTeleSurvey2 != undefined){
                    var fileUploadDocument = BuktiUsahaTeleSurvey2;
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
                            //console.log("BASE PDF BU 2",base64);
                            localStorage.setItem("bukti_usaha_tele_survey_wiraswasta_2", base64);
                            
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
                                    base64BuktiUsahaTeleSurveyWiraswasta = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64BuktiUsahaTeleSurveyWiraswasta = base64BuktiUsahaTeleSurveyWiraswasta;
                                    localStorage.setItem("bukti_usaha_tele_survey_wiraswasta_2", base64BuktiUsahaTeleSurveyWiraswasta);
                                    //console.log("BASE JPG BU 2",base64BuktiUsahaTeleSurveyWiraswasta);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                        } 
                    }
                }

            }
        });

        $('#pkrj-nsbh-doc-bkt-kungn-ts-wira').on('change', function(){
            if($('#pkrj-nsbh-doc-bkt-kungn-ts-wira').val() != undefined){
                var BuktiKeuanganTeleSurvey1 = $('#pkrj-nsbh-doc-bkt-kungn-ts-wira')[0].files[0];

                if(BuktiKeuanganTeleSurvey1 != undefined){
                    //Bukti keuangan Instant Approval 1
                    var fileUploadDocument = BuktiKeuanganTeleSurvey1;
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
                                //console.log("BASE PDF BK 1", base64);
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            localStorage.setItem("bukti_keuangan_tele_survey_wiraswasta", base64);
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
                                    base64BuktiKeuanganTeleSurveyWiraswasta = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64BuktiKeuanganTeleSurveyWiraswasta = base64BuktiKeuanganTeleSurveyWiraswasta;
                                    localStorage.setItem("bukti_keuangan_tele_survey_wiraswasta", base64BuktiKeuanganTeleSurveyWiraswasta);
                                    //console.log("BASE JPG BK 1", base64BuktiKeuanganTeleSurveyWiraswasta);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);        
                        } 
                    }
                }
            }
        });

        $('#newdokbuktikeuangantelesurvey').on('change', '.pkrj-nsbh-doc-bkt-kungn-ts-wira-2', function () {
            if($('.pkrj-nsbh-doc-bkt-kungn-ts-wira-2').val() != undefined){
                var BuktiKeuanganTeleSurvey2 = $('.pkrj-nsbh-doc-bkt-kungn-ts-wira-2')[0].files[0];
                if(BuktiKeuanganTeleSurvey2 != undefined){
                    //Bukti Keuangan Instant Approval 2
                    var fileUploadDocument = BuktiKeuanganTeleSurvey2;
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
                            //console.log("BASE PDF BK 2", base64);
                            localStorage.setItem("bukti_keuangan_tele_survey_wiraswasta_2", base64);
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
                                    base64BuktiKeuanganTeleSurveyWiraswasta2 = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64BuktiKeuanganTeleSurveyWiraswasta2 = base64BuktiKeuanganTeleSurveyWiraswasta2;
                                    localStorage.setItem("bukti_keuangan_tele_survey_wiraswasta_2", base64BuktiKeuanganTeleSurveyWiraswasta2);
                                    //console.log("BASE JPG BK 2", base64BuktiKeuanganTeleSurveyWiraswasta2);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);        
                        } 
                    }
                }
            }
        });

        $('#newdokbuktikeuangantelesurvey').on('change', '.pkrj-nsbh-doc-bkt-kungn-ts-wira-3', function () {
            if($('.pkrj-nsbh-doc-bkt-kungn-ts-wira-3').val() != undefined){
                var BuktiKeuanganTeleSurvey3 = $('.pkrj-nsbh-doc-bkt-kungn-ts-wira-3')[0].files[0];
                
                if(BuktiKeuanganTeleSurvey3 != undefined){
                    //Bukti Keuangan Instant Approval 3
                    var fileUploadDocument = BuktiKeuanganTeleSurvey3;
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
                            //console.log("BASE PDF BK 3", base64);
                            localStorage.setItem("bukti_keuangan_tele_survey_wiraswasta_3", base64);
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
                                    base64BuktiKeuanganTeleSurveyWiraswasta3 = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64BuktiKeuanganTeleSurveyWiraswasta3 = base64BuktiKeuanganTeleSurveyWiraswasta3;
                                    localStorage.setItem("bukti_keuangan_tele_survey_wiraswasta_3", base64BuktiKeuanganTeleSurveyWiraswasta3);
                                    //console.log("BASE JPG BK 3", base64BuktiKeuanganTeleSurveyWiraswasta3);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);        
                        } 
                    }
                }
            }
        });

        $('#newdokbuktikeuangantelesurvey').on('change', '.pkrj-nsbh-doc-bkt-kungn-ts-wira-4', function () {
            if($('.pkrj-nsbh-doc-bkt-kungn-ts-wira-4').val() != undefined){
                var BuktiKeuanganTeleSurvey4 = $('.pkrj-nsbh-doc-bkt-kungn-ts-wira-4')[0].files[0];

                if(BuktiKeuanganTeleSurvey4 != undefined){
                    //Bukti Keuangan Instant Approval 4
                    var fileUploadDocument = BuktiKeuanganTeleSurvey4;
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
                            //console.log("BASE PDF BK 4", base64);
                            localStorage.setItem("bukti_keuangan_tele_survey_wiraswasta_4", base64);
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
                                    base64BuktiKeuanganTeleSurveyWiraswasta4 = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64BuktiKeuanganTeleSurveyWiraswasta4 = base64BuktiKeuanganTeleSurveyWiraswasta4;
                                    localStorage.setItem("bukti_keuangan_tele_survey_wiraswasta_4", base64BuktiKeuanganTeleSurveyWiraswasta4);
                                    //console.log("BASE JPG BK 4", base64BuktiKeuanganTeleSurveyWiraswasta4);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);        
                        } 
                    }
                }
            }
        });

        $('#newdokbuktikeuangantelesurvey').on('change', '.pkrj-nsbh-doc-bkt-kungn-ts-wira-5', function () {
            if($('.pkrj-nsbh-doc-bkt-kungn-ts-wira-5').val() != undefined){
                var BuktiKeuanganTeleSurvey5 = $('.pkrj-nsbh-doc-bkt-kungn-ts-wira-5')[0].files[0];

                if(BuktiKeuanganTeleSurvey5 != undefined){
                    //Bukti Keuangan Instant Approval 5
                    var fileUploadDocument = BuktiKeuanganTeleSurvey5;
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
                            //console.log("BASE PDF BK 5", base64);
                            localStorage.setItem("bukti_keuangan_tele_survey_wiraswasta_5", base64);
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
                                    base64BuktiKeuanganTeleSurveyWiraswasta5 = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64BuktiKeuanganTeleSurveyWiraswasta5 = base64BuktiKeuanganTeleSurveyWiraswasta5;
                                    localStorage.setItem("bukti_keuangan_tele_survey_wiraswasta_5", base64BuktiKeuanganTeleSurveyWiraswasta5);
                                    //console.log("BASE JPG BK 5", base64BuktiKeuanganTeleSurveyWiraswasta5);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);        
                        } 
                    }
                }
            }
        });

        $('#newdokbuktikeuangantelesurvey').on('change', '.pkrj-nsbh-doc-bkt-kungn-ts-wira-6', function () {
            if($('.pkrj-nsbh-doc-bkt-kungn-ts-wira-6').val() != undefined){
                var BuktiKeuanganTeleSurvey6 = $('.pkrj-nsbh-doc-bkt-kungn-ts-wira-6')[0].files[0];
            }
            
            if(BuktiKeuanganTeleSurvey6 != undefined){
                //Bukti Keuangan Instant Approval 6
                var fileUploadDocument = BuktiKeuanganTeleSurvey6;
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
                        //console.log("BASE PDF BK 6", base64);
                        localStorage.setItem("bukti_keuangan_tele_survey_wiraswasta_6", base64);
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
                                base64BuktiKeuanganTeleSurveyWiraswasta6 = canvas.toDataURL().replace("data:", "")
                                .replace(/^.+,/, "");
                                imageBase64BuktiKeuanganTeleSurveyWiraswasta6 = base64BuktiKeuanganTeleSurveyWiraswasta6;
                                localStorage.setItem("bukti_keuangan_tele_survey_wiraswasta_6", base64BuktiKeuanganTeleSurveyWiraswasta6);
                                //console.log("BASE JPG BK 6", base64BuktiKeuanganTeleSurveyWiraswasta6);
                            }
                            image.src = event.target.result;
                        }
                        reader.readAsDataURL(fileUploadDocument);        
                    } 
                }
            }

        });
        
        $('#pkrj-nsbh-ft-tmpt-ush-ts-wira').on('change', function(){
            if($('#pkrj-nsbh-ft-tmpt-ush-ts-wira').val() != undefined){
                var TempatUsahaInstanApproval = $('#pkrj-nsbh-ft-tmpt-ush-ts-wira')[0].files[0];
                if(TempatUsahaInstanApproval != undefined){
                    //Foto Tempat Usaha Instant Approval
                    var fileUploadDocument = TempatUsahaInstanApproval;
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
                                //console.log("BASE PDF FTU", base64);
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            localStorage.setItem("foto_tempat_usaha_tele_survey_wiraswasta", base64);
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
                                    base64FotoTempatUsahaTeleSurveyWiraswasta = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64FotoTempatUsahaTeleSurveyWiraswasta = base64FotoTempatUsahaTeleSurveyWiraswasta;
                                    localStorage.setItem("foto_tempat_usaha_tele_survey_wiraswasta", base64FotoTempatUsahaTeleSurveyWiraswasta);
                                    //console.log("BASE JPG FTU", base64FotoTempatUsahaTeleSurveyWiraswasta);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
        
                        } 
                    }
                }
            }
        });

        $('#pkrj-nsbh-ft-slf-ts-wira').on('change', function(){
            if($('#pkrj-nsbh-ft-slf-ts-wira').val() != undefined){
                var SelfieInstanApproval = $('#pkrj-nsbh-ft-slf-ts-wira')[0].files[0];
                if(SelfieInstanApproval != undefined){
                    //Foto Tempat Usaha Instant Approval
                    var fileUploadDocument = SelfieInstanApproval;
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
                                //console.log("BASE PDF FS", base64);
                            };
                            fileReader.readAsDataURL(fileToLoad);
                            localStorage.setItem("foto_selfie_tele_survey_wiraswasta", base64);
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
                                    base64FotoSelfieTeleSurveyWiraswasta = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64FotoSelfieTeleSurveyWiraswasta = base64FotoSelfieTeleSurveyWiraswasta;
                                    localStorage.setItem("foto_selfie_tele_survey_wiraswasta", base64FotoSelfieTeleSurveyWiraswasta);
                                    //console.log("BASE JPG FS", base64FotoSelfieTeleSurveyWiraswasta);
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
        var file = app.KycWiraswastaTeleSurvey;
        $("#slc-pkrj-nsbh-sktr-eko-lvl-1-ts-wira").select2({
            theme: 'bootstrap4',
            placeholder: "PILIH SEKTOR EKONOMI (LEVEL 1)",
            allowClear: true,
            minimumInputLength: 4,
            containerCssClass: "error-slc-pkrj-nsbh-sktr-eko-lvl-1-ts-wira",
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
        var file = app.KycWiraswastaTeleSurvey;
        var param_1 = $('#slc-pkrj-nsbh-sktr-eko-lvl-1-ts-wira').val();

        if (param_1 == null || param_1 == '') {
            param_1 = '';
        }

        $("#slc-pkrj-nsbh-sktr-eko-lvl-2-ts-wira").select2({
            theme: 'bootstrap4',
            placeholder: "PILIH SEKTOR EKONOMI (LEVEL 2)",
            allowClear: true,
            minimumInputLength: 4,
            containerCssClass: "error-slc-pkrj-nsbh-sktr-eko-lvl-2-ts-wira",
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
        var file = app.KycWiraswastaTeleSurvey;
        var param_1 = $('#slc-pkrj-nsbh-sktr-eko-lvl-1-ts-wira').val();
        var param_2 = $('#slc-pkrj-nsbh-sktr-eko-lvl-2-ts-wira').val();

        if (param_1 == null || param_1 == '') {
            param_1 = '';
        }

        if (param_2 == null || param_2 == '') {
            param_2 = '';
        }

        if (param_1 != '' || param_1 != null && param_2 != '' || param_2 != null){

            $("#slc-pkrj-nsbh-sktr-eko-lvl-3-ts-wira").select2({
                theme: 'bootstrap4',
                placeholder: "PILIH SEKTOR EKONOMI (LEVEL 3)",
                allowClear: true,
                minimumInputLength: 4,
                containerCssClass: "error-slc-pkrj-nsbh-sktr-eko-lvl-3-ts-wira",
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
            $("#slc-pkrj-nsbh-sktr-eko-lvl-3-ts-wira").select2({
                theme: 'bootstrap4',
                placeholder: "PILIH SEKTOR EKONOMI (LEVEL 3)",
                allowClear: true,
                minimumInputLength: 4,
                containerCssClass: "error-slc-pkrj-nsbh-sktr-eko-lvl-3-ts-wira",
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
        var file = app.KycWiraswastaTeleSurvey;
        var param = $('#slc-pkrj-nsbh-sktr-eko-lvl-3-ts-wira').select2('data')[0]['text'];
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
                        $("#slc-pkrj-nsbh-sktr-eko-lvl-1-ts-wira").append("<option value='"+data[0].id_1+"' selected>"+data[0].text_1+"</option>");
                        $("#slc-pkrj-nsbh-sktr-eko-lvl-1-ts-wira").val(data[0].id_1);
                        $("#slc-pkrj-nsbh-sktr-eko-lvl-2-ts-wira").append("<option value='"+data[0].id_2+"' selected>"+data[0].text_2+"</option>");
                        $("#slc-pkrj-nsbh-sktr-eko-lvl-2-ts-wira").val(data[0].id_2);
                }
            });
        }
    },

	insertTeleSurveyWiraswasta: function() {
        var that = app.KycWiraswastaTeleSurvey;
        var pekerjaan_nasabah_tele_survey_wiraswasta = {};
        var pekerjaan_nasabah = $('#inp-pkrj-nsbh-ts-wira').val();
        var pekerjaan_nasabah_sesuai_tidak_sesuai = document.querySelector('input[name="pkrjnsbhtswira"]:checked').value;
        var jenis_tempat_usaha = $('#slc-pkrj-nsbh-jns-tmpt-ush-ts-wira').find(':selected').text();
        var nama_tempat_usaha = $('#inp-pkrj-nsbh-nm-tmpt-ush-ts-wira').val();
        var nama_tempat_usaha_sesuai_tidak_sesuai = document.querySelector('input[name="nmtmptushtswira"]:checked').value;
        var bidang_usaha = $('#inp-pkrj-nsbh-bdng-ush-ts-wira').val();
        var bidang_usaha_sesuai_tidak_sesuai = document.querySelector('input[name="bdngushtswira"]:checked').value;
        var sektor_tempat_usaha = $('#inp-pkrj-nsbh-sktr-tmpt-ush-ts-wira').val();
        var sektor_ekonomi_level_1 = $('#slc-pkrj-nsbh-sktr-eko-lvl-1-ts-wira').find(':selected').text();
        var sektor_ekonomi_level_2 = $('#slc-pkrj-nsbh-sktr-eko-lvl-2-ts-wira').find(':selected').text();
        var sektor_ekonomi_level_3 = $('#slc-pkrj-nsbh-sktr-eko-lvl-3-ts-wira').find(':selected').text();
        var dokumen_bukti_usaha_1 = localStorage.getItem('bukti_usaha_tele_survey_wiraswasta');
        var dokumen_bukti_usaha_2 = localStorage.getItem('bukti_usaha_tele_survey_wiraswasta_2');
        var dokumen_bukti_keuangan_1 = localStorage.getItem('bukti_keuangan_tele_survey_wiraswasta');
        var dokumen_bukti_keuangan_2 = localStorage.getItem('bukti_keuangan_tele_survey_wiraswasta_2');
        var dokumen_bukti_keuangan_3 = localStorage.getItem('bukti_keuangan_tele_survey_wiraswasta_3');
        var dokumen_bukti_keuangan_4 = localStorage.getItem('bukti_keuangan_tele_survey_wiraswasta_4');
        var dokumen_bukti_keuangan_5 = localStorage.getItem('bukti_keuangan_tele_survey_wiraswasta_5');
        var dokumen_bukti_keuangan_6 = localStorage.getItem('bukti_keuangan_tele_survey_wiraswasta_6');
        var foto_tempat_usaha = localStorage.getItem('foto_tempat_usaha_tele_survey_wiraswasta');
        var selfie_pic_survey = localStorage.getItem('foto_selfie_tele_survey_wiraswasta');
        var jarak_tempat_usaha = $('#inp-pkrj-nsbh-jrk-nsbh-ke-muf-ts-wira').val();
            
        pekerjaan_nasabah_tele_survey_wiraswasta = {
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
        // console.log(pekerjaan_nasabah_tele_survey_wiraswasta);

        $.ajax({
			type: "post",
			async: false,
			url: app.base_url + that.api + "submitTeleSurveyWiraswasta",
			data: {
                pekerjaan_nasabah_tele_survey_wiraswasta: pekerjaan_nasabah_tele_survey_wiraswasta,
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
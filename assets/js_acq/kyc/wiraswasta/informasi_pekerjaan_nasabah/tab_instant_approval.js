$(document).ready(function() {
    app.IPNWiraswastaInstantApproval.init();
    localStorage.setItem("pkrj_nsbh_bkt_ush_ia_wira", "");
    localStorage.setItem("pkrj_nsbh_bkt_ush_ia_wira_2", "");
    localStorage.setItem("pkrj_nsbh_bkt_kungn_ia_wira", "");
    localStorage.setItem("pkrj_nsbh_bkt_kungn_ia_wira_2", "");
    localStorage.setItem("pkrj_nsbh_bkt_kungn_ia_wira_3", "");
    localStorage.setItem("pkrj_nsbh_bkt_kungn_ia_wira_4", "");
    localStorage.setItem("pkrj_nsbh_bkt_kungn_ia_wira_5", "");
    localStorage.setItem("pkrj_nsbh_bkt_kungn_ia_wira_6", "");
    localStorage.setItem("pkrj-nsbh-ft-tmpt-ush-ia-wira", "");
    localStorage.setItem("pkrj-nsbh-ft-slf-ia-wira", "");
});

app.IPNWiraswastaInstantApproval = {
	controller: 'Kyc/',
	api: 'Kyc_api/',
	elm: {},

	init: function () {
        var file = app.IPNWiraswastaInstantApproval;
        var id_bukti_usaha_instant_approval = 2; 
        var id_bukti_keuangan_instant_approval = 2;
        
        document.getElementById("add-pkrj-nsbh-doc-bkt-ush-ia-wira").onclick = function() {functionAddUsahaInstantApproval()};
        document.getElementById("add-pkrj-nsbh-doc-bkt-kungn-ia-wira").onclick = function() {functionAddKeuanganInstantApproval()};
        
        function functionAddUsahaInstantApproval(){
			if(id_bukti_usaha_instant_approval == 2){
                $('#pkrjnsbhnewdokbktushiawira').append('<div class="col-lg-4" style="margin-top:10px;"><input type="file" class="form-control-file pkrj-nsbh-doc-bkt-ush-ia-wira-'+id_bukti_usaha_instant_approval+'" accept="application/pdf, image/jpg, image/jpeg, image/png"></div>');
                id_bukti_usaha_instant_approval++;
            }
        }

        function functionAddKeuanganInstantApproval(){
            if(id_bukti_keuangan_instant_approval <= 6){
                $('#newdokbuktikeuanganinstantapproval').append('<div class="col-lg-4" style="margin-top:10px;"><input type="file" class="form-control-file pkrj-nsbh-doc-bkt-kungn-ia-wira-'+id_bukti_keuangan_instant_approval+'" accept="application/pdf, image/jpg, image/jpeg, image/png"></div>');
                id_bukti_keuangan_instant_approval++;
            }
        }

        $('#slc-pkrj-nsbh-sktr-eko-lvl-1-ia-wira').on('change', function() {
            var file = app.IPNWiraswastaInstantApproval;
            $("#slc-pkrj-nsbh-sktr-eko-lvl-2-ia-wira").val('').trigger('change');
            file.getEconomicSectorLevel2InstantApproval();
        });

        $('#slc-pkrj-nsbh-sktr-eko-lvl-2-ia-wira').on('change', function() {
            var file = app.IPNWiraswastaInstantApproval;
            $('#slc-pkrj-nsbh-sktr-eko-lvl-3-ia-wira').val('').trigger('change');
            file.getEconomicSectorLevel3InstantApproval();
            file.getEconomicSectorFromLevel3ToLevel2andLevel1InstantApproval();
        });

        $('#slc-pkrj-nsbh-sktr-eko-lvl-3-ia-wira').on('change', function() {
            var file = app.IPNWiraswastaInstantApproval;
            if($('#slc-pkrj-nsbh-sktr-eko-lvl-3-ia-wira').val() == null &&
               $('#slc-pkrj-nsbh-sktr-eko-lvl-3-ia-wira').select2('data')[0]['text'] == null){
                if($('#slc-pkrj-nsbh-sktr-eko-lvl-1-ia-wira').val() != '' && 
                   $('#slc-pkrj-nsbh-sktr-eko-lvl-2-ia-wira').val() == null){
                        $('#slc-pkrj-nsbh-sktr-eko-lvl-2-ia-wira').empty();
                }
                else if ($('#slc-pkrj-nsbh-sktr-eko-lvl-1-ia-wira').val() != '' && 
                         $('#slc-pkrj-nsbh-sktr-eko-lvl-2-ia-wira').val() != ''){
                            $('#slc-pkrj-nsbh-sktr-eko-lvl-3-ia-wira').empty();
                }
            }
            else if($('#slc-pkrj-nsbh-sktr-eko-lvl-3-ia-wira').val() != null &&
                    $('#slc-pkrj-nsbh-sktr-eko-lvl-3-ia-wira').select2('data')[0]['text'] != null){
                        $('#slc-pkrj-nsbh-sktr-eko-lvl-1-ia-wira').empty();
                        $('#slc-pkrj-nsbh-sktr-eko-lvl-2-ia-wira').empty();
                        file.getEconomicSectorFromLevel3ToLevel2andLevel1InstantApproval();
            }
        });

        file.getEconomicSectorLevel1InstantApproval();
        file.getEconomicSectorLevel2InstantApproval();
        file.getEconomicSectorLevel3InstantApproval();
        file.getEconomicSectorFromLevel3ToLevel2andLevel1InstantApproval();
		
        $('#btn-save-pkrj-nsbh-ia-wira').click(function () {
            var file = app.IPNWiraswastaInstantApproval;
            
            if($('#slc-pkrj-nsbh-sktr-eko-lvl-1-ia-wira option:selected').val() == null || 
               $('#slc-pkrj-nsbh-sktr-eko-lvl-1-ia-wira option:selected').val() == ''){
                $('#err-slc-pkrj-nsbh-sktr-eko-lvl-1-ia-wira').html('Sektor Ekonomi Level 1 Wajib Diisi');
                $('#err-slc-pkrj-nsbh-sktr-eko-lvl-1-ia-wira').prop("hidden", false);
                $('.error-slc-pkrj-nsbh-sktr-eko-lvl-1-ia-wira').css({"border-color": "red"});
            }
            else if($('#slc-pkrj-nsbh-sktr-eko-lvl-1-ia-wira option:selected').val() != null || 
                    $('#slc-pkrj-nsbh-sktr-eko-lvl-1-ia-wira option:selected').val() != ''){
                        $('#err-slc-pkrj-nsbh-sktr-eko-lvl-1-ia-wira').html('');
                        $('#err-slc-pkrj-nsbh-sktr-eko-lvl-1-ia-wira').prop("hidden", true);
                        $('.error-slc-pkrj-nsbh-sktr-eko-lvl-1-ia-wira').css({"border-color": ""});
            }

            if($('#slc-pkrj-nsbh-sktr-eko-lvl-2-ia-wira option:selected').val() == null || 
               $('#slc-pkrj-nsbh-sktr-eko-lvl-2-ia-wira option:selected').val() == ''){
                $('#err-slc-pkrj-nsbh-sktr-eko-lvl-2-ia-wira').html('Sektor Ekonomi Level 2 Wajib Diisi');
                $('#err-slc-pkrj-nsbh-sktr-eko-lvl-2-ia-wira').prop("hidden", false);
                $('.error-slc-pkrj-nsbh-sktr-eko-lvl-2-ia-wira').css({"border-color": "red"});
            }
            else if($('#slc-pkrj-nsbh-sktr-eko-lvl-2-ia-wira option:selected').val() != null || 
                    $('#slc-pkrj-nsbh-sktr-eko-lvl-2-ia-wira option:selected').val() != ''){
                        $('#err-slc-pkrj-nsbh-sktr-eko-lvl-2-ia-wira').html('');
                        $('#err-slc-pkrj-nsbh-sktr-eko-lvl-2-ia-wira').prop("hidden", true);
                        $('.error-slc-pkrj-nsbh-sktr-eko-lvl-2-ia-wira').css({"border-color": ""});
            }

            if($('#slc-pkrj-nsbh-sktr-eko-lvl-3-ia-wira option:selected').val() == null || 
               $('#slc-pkrj-nsbh-sktr-eko-lvl-3-ia-wira option:selected').val() == ''){
                $('#err-slc-pkrj-nsbh-sktr-eko-lvl-3-ia-wira').html('Sektor Ekonomi Level 3 Wajib Diisi');
                $('#err-slc-pkrj-nsbh-sktr-eko-lvl-3-ia-wira').prop("hidden", false);
                $('.error-slc-pkrj-nsbh-sktr-eko-lvl-3-ia-wira').css({"border-color": "red"});
            }
            else if($('#slc-pkrj-nsbh-sktr-eko-lvl-3-ia-wira option:selected').val() != null || 
                    $('#slc-pkrj-nsbh-sktr-eko-lvl-3-ia-wira option:selected').val() != ''){
                        $('#err-slc-pkrj-nsbh-sktr-eko-lvl-3-ia-wira').html('');
                        $('#err-slc-pkrj-nsbh-sktr-eko-lvl-3-ia-wira').prop("hidden", true);
                        $('.error-slc-pkrj-nsbh-sktr-eko-lvl-3-ia-wira').css({"border-color": ""});
            }

            if($('#pkrj-nsbh-doc-bkt-ush-ia-wira').val() == ''){
                $('#err-pkrj-nsbh-doc-bkt-ush-ia-wira').html('Dokumen Bukti Usaha Wajib Diisi');
                $('#err-pkrj-nsbh-doc-bkt-ush-ia-wira').prop("hidden", false);
                $('.error-pkrj-nsbh-doc-bkt-ush-ia-wira').css({"border-color": "red"});
            }
            else if($('#pkrj-nsbh-doc-bkt-ush-ia-wira').val() != ''){
                        $('#err-pkrj-nsbh-doc-bkt-ush-ia-wira').html('');
                        $('#err-pkrj-nsbh-doc-bkt-ush-ia-wira').prop("hidden", true);
                        $('.error-pkrj-nsbh-doc-bkt-ush-ia-wira').css({"border-color": ""});
            }

            if($('#pkrj-nsbh-doc-bkt-kungn-ia-wira').val() == ''){
                $('#err-pkrj-nsbh-doc-bkt-kungn-ia-wira').html('Dokumen Bukti Keuangan Wajib Diisi');
                $('#err-pkrj-nsbh-doc-bkt-kungn-ia-wira').prop("hidden", false);
                $('.error-pkrj-nsbh-doc-bkt-kungn-ia-wira').css({"border-color": "red"});
            }
            else if($('#pkrj-nsbh-doc-bkt-kungn-ia-wira').val() != ''){
                        $('#err-pkrj-nsbh-doc-bkt-kungn-ia-wira').html('');
                        $('#err-pkrj-nsbh-doc-bkt-kungn-ia-wira').prop("hidden", true);
                        $('.error-pkrj-nsbh-doc-bkt-kungn-ia-wira').css({"border-color": ""});
            }

            if($('#pkrj-nsbh-ft-tmpt-ush-ia-wira').val() == ''){
                $('#err-pkrj-nsbh-ft-tmpt-ush-ia-wira').html('Foto Tempat Usaha Wajib Diisi');
                $('#err-pkrj-nsbh-ft-tmpt-ush-ia-wira').prop("hidden", false);
                $('.error-pkrj-nsbh-ft-tmpt-ush-ia-wira').css({"border-color": "red"});
            }
            else if($('#pkrj-nsbh-ft-tmpt-ush-ia-wira').val() != ''){
                        $('#err-pkrj-nsbh-ft-tmpt-ush-ia-wira').html('');
                        $('#err-pkrj-nsbh-ft-tmpt-ush-ia-wira').prop("hidden", true);
                        $('.error-pkrj-nsbh-ft-tmpt-ush-ia-wira').css({"border-color": ""});
            }

            if($('#pkrj-nsbh-ft-slf-ia-wira').val() == ''){
                $('#err-pkrj-nsbh-ft-slf-ia-wira').html('Foto Selfie Wajib Diisi');
                $('#err-pkrj-nsbh-ft-slf-ia-wira').prop("hidden", false);
                $('.error-pkrj-nsbh-ft-slf-ia-wira').css({"border-color": "red"});
            }
            else if($('#pkrj-nsbh-ft-slf-ia-wira').val() != ''){
                        $('#err-pkrj-nsbh-ft-slf-ia-wira').html('');
                        $('#err-pkrj-nsbh-ft-slf-ia-wira').prop("hidden", true);
                        $('.error-pkrj-nsbh-ft-slf-ia-wira').css({"border-color": ""});
            }

            if($('#inp-pkrj-nsbh-jrk-nsbh-ke-muf-ia-wira').val() == ''){
                $('#err-inp-pkrj-nsbh-jrk-nsbh-ke-muf-ia-wira').html('Jarak Tempat Nasabah ke MUF Wajib Diisi');
                $('#err-inp-pkrj-nsbh-jrk-nsbh-ke-muf-ia-wira').prop("hidden", false);
                $('input[id=inp-pkrj-nsbh-jrk-nsbh-ke-muf-ia-wira]').css({"border-color": "red"});
            }
            else if($('#inp-pkrj-nsbh-jrk-nsbh-ke-muf-ia-wira').val() != ''){
                        $('#err-inp-pkrj-nsbh-jrk-nsbh-ke-muf-ia-wira').html('');
                        $('#err-inp-pkrj-nsbh-jrk-nsbh-ke-muf-ia-wira').prop("hidden", true);
                        $('input[id=inp-pkrj-nsbh-jrk-nsbh-ke-muf-ia-wira]').css({"border-color": ""});
            }
            
            file.insertInstantApprovalWiraswasta();
        });

        //Onchange Upload File in Instant Approval
        $('#pkrj-nsbh-doc-bkt-ush-ia-wira').on('change', function(){
            if($('#pkrj-nsbh-doc-bkt-ush-ia-wira').val() != undefined){
                var BuktiUsahaInstantApproval1 = $('#pkrj-nsbh-doc-bkt-ush-ia-wira')[0].files[0];
                
                if(BuktiUsahaInstantApproval1 != undefined){
                    var fileUploadDocument = BuktiUsahaInstantApproval1;
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
                            localStorage.setItem("pkrj_nsbh_bkt_ush_ia_wira", base64);
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
                                    base64BuktiUsahaInstantApprovalWiraswasta = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64BuktiUsahaInstantApprovalWiraswasta = base64BuktiUsahaInstantApprovalWiraswasta;
                                    localStorage.setItem("pkrj_nsbh_bkt_ush_ia_wira", base64BuktiUsahaInstantApprovalWiraswasta);
                                    //console.log("BASE JPG BU 1",base64BuktiUsahaInstantApprovalWiraswasta);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                        } 
                    }
                }

            }
        });
        
        $('#pkrjnsbhnewdokbktushiawira').on('change', '.pkrj-nsbh-doc-bkt-ush-ia-wira-2', function () {
            if($('.pkrj-nsbh-doc-bkt-ush-ia-wira-2').val() != undefined){
                var BuktiUsahaInstantApproval2 = $('.pkrj-nsbh-doc-bkt-ush-ia-wira-2')[0].files[0];

                if(BuktiUsahaInstantApproval2 != undefined){
                    var fileUploadDocument = BuktiUsahaInstantApproval2;
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
                            localStorage.setItem("pkrj_nsbh_bkt_ush_ia_wira_2", base64);
                            
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
                                    base64BuktiUsahaInstantApprovalWiraswasta = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64BuktiUsahaInstantApprovalWiraswasta = base64BuktiUsahaInstantApprovalWiraswasta;
                                    localStorage.setItem("pkrj_nsbh_bkt_ush_ia_wira_2", base64BuktiUsahaInstantApprovalWiraswasta);
                                    //console.log("BASE JPG BU 2",base64BuktiUsahaInstantApprovalWiraswasta);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
                        } 
                    }
                }

            }
        });

        $('#pkrj-nsbh-doc-bkt-kungn-ia-wira').on('change', function(){
            if($('#pkrj-nsbh-doc-bkt-kungn-ia-wira').val() != undefined){
                var BuktiKeuanganInstantApproval1 = $('#pkrj-nsbh-doc-bkt-kungn-ia-wira')[0].files[0];

                if(BuktiKeuanganInstantApproval1 != undefined){
                    //Bukti keuangan Instant Approval 1
                    var fileUploadDocument = BuktiKeuanganInstantApproval1;
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
                            localStorage.setItem("pkrj_nsbh_bkt_kungn_ia_wira", base64);
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
                                    base64BuktiKeuanganInstantApprovalWiraswasta = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64BuktiKeuanganInstantApprovalWiraswasta = base64BuktiKeuanganInstantApprovalWiraswasta;
                                    localStorage.setItem("pkrj_nsbh_bkt_kungn_ia_wira", base64BuktiKeuanganInstantApprovalWiraswasta);
                                    //console.log("BASE JPG BK 1", base64BuktiKeuanganInstantApprovalWiraswasta);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);        
                        } 
                    }
                }
            }
        });

        $('#newdokbuktikeuanganinstantapproval').on('change', '.pkrj-nsbh-doc-bkt-kungn-ia-wira-2', function () {
            if($('.pkrj-nsbh-doc-bkt-kungn-ia-wira-2').val() != undefined){
                var BuktiKeuanganInstantApproval2 = $('.pkrj-nsbh-doc-bkt-kungn-ia-wira-2')[0].files[0];
                if(BuktiKeuanganInstantApproval2 != undefined){
                    //Bukti Keuangan Instant Approval 2
                    var fileUploadDocument = BuktiKeuanganInstantApproval2;
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
                            localStorage.setItem("pkrj_nsbh_bkt_kungn_ia_wira_2", base64);
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
                                    base64BuktiKeuanganInstantApprovalWiraswasta2 = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64BuktiKeuanganInstantApprovalWiraswasta2 = base64BuktiKeuanganInstantApprovalWiraswasta2;
                                    localStorage.setItem("pkrj_nsbh_bkt_kungn_ia_wira_2", base64BuktiKeuanganInstantApprovalWiraswasta2);
                                    //console.log("BASE JPG BK 2", base64BuktiKeuanganInstantApprovalWiraswasta2);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);        
                        } 
                    }
                }
            }
        });

        $('#newdokbuktikeuanganinstantapproval').on('change', '.pkrj-nsbh-doc-bkt-kungn-ia-wira-3', function () {
            if($('.pkrj-nsbh-doc-bkt-kungn-ia-wira-3').val() != undefined){
                var BuktiKeuanganInstantApproval3 = $('.pkrj-nsbh-doc-bkt-kungn-ia-wira-3')[0].files[0];
                
                if(BuktiKeuanganInstantApproval3 != undefined){
                    //Bukti Keuangan Instant Approval 3
                    var fileUploadDocument = BuktiKeuanganInstantApproval3;
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
                            localStorage.setItem("pkrj_nsbh_bkt_kungn_ia_wira_3", base64);
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
                                    base64BuktiKeuanganInstantApprovalWiraswasta3 = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64BuktiKeuanganInstantApprovalWiraswasta3 = base64BuktiKeuanganInstantApprovalWiraswasta3;
                                    localStorage.setItem("pkrj_nsbh_bkt_kungn_ia_wira_3", base64BuktiKeuanganInstantApprovalWiraswasta3);
                                    //console.log("BASE JPG BK 3", base64BuktiKeuanganInstantApprovalWiraswasta3);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);        
                        } 
                    }
                }
            }
        });

        $('#newdokbuktikeuanganinstantapproval').on('change', '.pkrj-nsbh-doc-bkt-kungn-ia-wira-4', function () {
            if($('.pkrj-nsbh-doc-bkt-kungn-ia-wira-4').val() != undefined){
                var BuktiKeuanganInstantApproval4 = $('.pkrj-nsbh-doc-bkt-kungn-ia-wira-4')[0].files[0];

                if(BuktiKeuanganInstantApproval4 != undefined){
                    //Bukti Keuangan Instant Approval 4
                    var fileUploadDocument = BuktiKeuanganInstantApproval4;
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
                            localStorage.setItem("pkrj_nsbh_bkt_kungn_ia_wira_4", base64);
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
                                    base64BuktiKeuanganInstantApprovalWiraswasta4 = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64BuktiKeuanganInstantApprovalWiraswasta4 = base64BuktiKeuanganInstantApprovalWiraswasta4;
                                    localStorage.setItem("pkrj_nsbh_bkt_kungn_ia_wira_4", base64BuktiKeuanganInstantApprovalWiraswasta4);
                                    //console.log("BASE JPG BK 4", base64BuktiKeuanganInstantApprovalWiraswasta4);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);        
                        } 
                    }
                }
            }
        });

        $('#newdokbuktikeuanganinstantapproval').on('change', '.pkrj-nsbh-doc-bkt-kungn-ia-wira-5', function () {
            if($('.pkrj-nsbh-doc-bkt-kungn-ia-wira-5').val() != undefined){
                var BuktiKeuanganInstantApproval5 = $('.pkrj-nsbh-doc-bkt-kungn-ia-wira-5')[0].files[0];

                if(BuktiKeuanganInstantApproval5 != undefined){
                    //Bukti Keuangan Instant Approval 5
                    var fileUploadDocument = BuktiKeuanganInstantApproval5;
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
                            localStorage.setItem("pkrj_nsbh_bkt_kungn_ia_wira_5", base64);
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
                                    base64BuktiKeuanganInstantApprovalWiraswasta5 = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64BuktiKeuanganInstantApprovalWiraswasta5 = base64BuktiKeuanganInstantApprovalWiraswasta5;
                                    localStorage.setItem("pkrj_nsbh_bkt_kungn_ia_wira_5", base64BuktiKeuanganInstantApprovalWiraswasta5);
                                    //console.log("BASE JPG BK 5", base64BuktiKeuanganInstantApprovalWiraswasta5);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);        
                        } 
                    }
                }
            }
        });

        $('#newdokbuktikeuanganinstantapproval').on('change', '.pkrj-nsbh-doc-bkt-kungn-ia-wira-6', function () {
            if($('.pkrj-nsbh-doc-bkt-kungn-ia-wira-6').val() != undefined){
                var BuktiKeuanganInstantApproval6 = $('.pkrj-nsbh-doc-bkt-kungn-ia-wira-6')[0].files[0];
            }
            
            if(BuktiKeuanganInstantApproval6 != undefined){
                //Bukti Keuangan Instant Approval 6
                var fileUploadDocument = BuktiKeuanganInstantApproval6;
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
                        localStorage.setItem("pkrj_nsbh_bkt_kungn_ia_wira_6", base64);
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
                                base64BuktiKeuanganInstantApprovalWiraswasta6 = canvas.toDataURL().replace("data:", "")
                                .replace(/^.+,/, "");
                                imageBase64BuktiKeuanganInstantApprovalWiraswasta6 = base64BuktiKeuanganInstantApprovalWiraswasta6;
                                localStorage.setItem("pkrj_nsbh_bkt_kungn_ia_wira_6", base64BuktiKeuanganInstantApprovalWiraswasta6);
                                //console.log("BASE JPG BK 6", base64BuktiKeuanganInstantApprovalWiraswasta6);
                            }
                            image.src = event.target.result;
                        }
                        reader.readAsDataURL(fileUploadDocument);        
                    } 
                }
            }

        });
        
        $('#pkrj-nsbh-ft-tmpt-ush-ia-wira').on('change', function(){
            if($('#pkrj-nsbh-ft-tmpt-ush-ia-wira').val() != undefined){
                var TempatUsahaInstanApproval = $('#pkrj-nsbh-ft-tmpt-ush-ia-wira')[0].files[0];
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
                            localStorage.setItem("pkrj-nsbh-ft-tmpt-ush-ia-wira", base64);
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
                                    base64FotoTempatUsahaInstantApprovalWiraswasta = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64FotoTempatUsahaInstantApprovalWiraswasta = base64FotoTempatUsahaInstantApprovalWiraswasta;
                                    localStorage.setItem("pkrj-nsbh-ft-tmpt-ush-ia-wira", base64FotoTempatUsahaInstantApprovalWiraswasta);
                                    //console.log("BASE JPG FTU", base64FotoTempatUsahaInstantApprovalWiraswasta);
                                }
                                image.src = event.target.result;
                            }
                            reader.readAsDataURL(fileUploadDocument);
        
                        } 
                    }
                }
            }
        });

        $('#pkrj-nsbh-ft-slf-ia-wira').on('change', function(){
            if($('#pkrj-nsbh-ft-slf-ia-wira').val() != undefined){
                var SelfieInstanApproval = $('#pkrj-nsbh-ft-slf-ia-wira')[0].files[0];
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
                            localStorage.setItem("pkrj-nsbh-ft-slf-ia-wira", base64);
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
                                    base64FotoSelfieInstantApprovalWiraswasta = canvas.toDataURL().replace("data:", "")
                                    .replace(/^.+,/, "");
                                    imageBase64FotoSelfieInstantApprovalWiraswasta = base64FotoSelfieInstantApprovalWiraswasta;
                                    localStorage.setItem("pkrj-nsbh-ft-slf-ia-wira", base64FotoSelfieInstantApprovalWiraswasta);
                                    //console.log("BASE JPG FS", base64FotoSelfieInstantApprovalWiraswasta);
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
        var file = app.IPNWiraswastaInstantApproval;
        $("#slc-pkrj-nsbh-sktr-eko-lvl-1-ia-wira").select2({
            theme: 'bootstrap4',
            placeholder: "PILIH SEKTOR EKONOMI (LEVEL 1)",
            allowClear: true,
            minimumInputLength: 4,
            containerCssClass: "error-slc-pkrj-nsbh-sktr-eko-lvl-1-ia-wira",
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
        var file = app.IPNWiraswastaInstantApproval;
        var param_1 = $('#slc-pkrj-nsbh-sktr-eko-lvl-1-ia-wira').val();
        if (param_1 == null || param_1 == '') {
            param_1 = '';
        }

        $("#slc-pkrj-nsbh-sktr-eko-lvl-2-ia-wira").select2({
            theme: 'bootstrap4',
            placeholder: "PILIH SEKTOR EKONOMI (LEVEL 2)",
            allowClear: true,
            minimumInputLength: 4,
            containerCssClass: "error-slc-pkrj-nsbh-sktr-eko-lvl-2-ia-wira",
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
        var file = app.IPNWiraswastaInstantApproval;
        var param_1 = $('#slc-pkrj-nsbh-sktr-eko-lvl-1-ia-wira').val();
        var param_2 = $('#slc-pkrj-nsbh-sktr-eko-lvl-2-ia-wira').val();

        if (param_1 == null || param_1 == '') {
            param_1 = '';
        }
        if (param_2 == null || param_2 == '') {
            param_2 = '';
        }

        if (param_1 != '' || param_1 != null && param_2 != '' || param_2 != null){
            $("#slc-pkrj-nsbh-sktr-eko-lvl-3-ia-wira").select2({
                theme: 'bootstrap4',
                placeholder: "PILIH SEKTOR EKONOMI (LEVEL 3)",
                allowClear: true,
                minimumInputLength: 4,
                containerCssClass: "error-slc-pkrj-nsbh-sktr-eko-lvl-3-ia-wira",
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
            $("#slc-pkrj-nsbh-sktr-eko-lvl-3-ia-wira").select2({
                theme: 'bootstrap4',
                placeholder: "PILIH SEKTOR EKONOMI (LEVEL 3)",
                allowClear: true,
                minimumInputLength: 4,
                containerCssClass: "error-slc-pkrj-nsbh-sktr-eko-lvl-3-ia-wira",
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
        var file = app.IPNWiraswastaInstantApproval;
        var param = $('#slc-pkrj-nsbh-sktr-eko-lvl-3-ia-wira').select2('data')[0]['text'];
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
                        $("#slc-pkrj-nsbh-sktr-eko-lvl-1-ia-wira").append("<option value='"+data[0].id_1+"' selected>"+data[0].text_1+"</option>");
                        $("#slc-pkrj-nsbh-sktr-eko-lvl-1-ia-wira").val(data[0].id_1);
                        $("#slc-pkrj-nsbh-sktr-eko-lvl-2-ia-wira").append("<option value='"+data[0].id_2+"' selected>"+data[0].text_2+"</option>");
                        $("#slc-pkrj-nsbh-sktr-eko-lvl-2-ia-wira").val(data[0].id_2);
                }
            });
        }
    },

    insertInstantApprovalWiraswasta: function() {
        var that = app.IPNWiraswastaInstantApproval;
        var pekerjaan_nasabah_instant_approval_wiraswasta = {};
        var pekerjaan_nasabah = $('#inp-pkrj-nsbh-ia-wira').val();
        var pekerjaan_nasabah_sesuai_tidak_sesuai = document.querySelector('input[name="pkrjnsbhiawira"]:checked').value;
        var jenis_tempat_usaha = $('#slc-pkrj-nsbh-jns-tmpt-ush-ia-wira').find(':selected').text();
        var nama_tempat_usaha = $('#inp-pkrj-nsbh-nm-tmpt-ush-ia-wira').val();
        var nama_tempat_usaha_sesuai_tidak_sesuai = document.querySelector('input[name="nmtmptushiawira"]:checked').value;
        var bidang_usaha = $('#inp-pkrj-nsbh-bdng-ush-ia-wira').val();
        var bidang_usaha_sesuai_tidak_sesuai = document.querySelector('input[name="bdngushiawira"]:checked').value;
        var sektor_tempat_usaha = $('#inp-pkrj-nsbh-sktr-tmpt-ush-ia-wira').val();
        var sektor_ekonomi_level_1 = $('#slc-pkrj-nsbh-sktr-eko-lvl-1-ia-wira').find(':selected').text();
        var sektor_ekonomi_level_2 = $('#slc-pkrj-nsbh-sktr-eko-lvl-2-ia-wira').find(':selected').text();
        var sektor_ekonomi_level_3 = $('#slc-pkrj-nsbh-sktr-eko-lvl-3-ia-wira').find(':selected').text();
        var dokumen_bukti_usaha_1 = localStorage.getItem('pkrj_nsbh_bkt_ush_ia_wira');
        var dokumen_bukti_usaha_2 = localStorage.getItem('pkrj_nsbh_bkt_ush_ia_wira_2');
        var dokumen_bukti_keuangan_1 = localStorage.getItem('pkrj_nsbh_bkt_kungn_ia_wira');
        var dokumen_bukti_keuangan_2 = localStorage.getItem('pkrj_nsbh_bkt_kungn_ia_wira_2');
        var dokumen_bukti_keuangan_3 = localStorage.getItem('pkrj_nsbh_bkt_kungn_ia_wira_3');
        var dokumen_bukti_keuangan_4 = localStorage.getItem('pkrj_nsbh_bkt_kungn_ia_wira_4');
        var dokumen_bukti_keuangan_5 = localStorage.getItem('pkrj_nsbh_bkt_kungn_ia_wira_5');
        var dokumen_bukti_keuangan_6 = localStorage.getItem('pkrj_nsbh_bkt_kungn_ia_wira_6');
        var foto_tempat_usaha = localStorage.getItem('pkrj-nsbh-ft-tmpt-ush-ia-wira');
        var selfie_pic_survey = localStorage.getItem('pkrj-nsbh-ft-slf-ia-wira');
        var jarak_tempat_usaha = $('#inp-pkrj-nsbh-jrk-nsbh-ke-muf-ia-wira').val();
            
        pekerjaan_nasabah_instant_approval_wiraswasta = {
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
        // console.log(pekerjaan_nasabah_instant_approval_wiraswasta);

        $.ajax({
			type: "post",
			async: false,
			url: app.base_url + that.api + "submitInstantApprovalWiraswasta",
			data: {
                pekerjaan_nasabah_instant_approval_wiraswasta: pekerjaan_nasabah_instant_approval_wiraswasta,
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
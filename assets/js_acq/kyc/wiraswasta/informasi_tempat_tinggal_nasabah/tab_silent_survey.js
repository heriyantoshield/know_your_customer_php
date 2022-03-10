
$(document).ready(function () {
	app.InfoTempatTinggalNasWiraSilentSurvey.init();

    localStorage.setItem("dok_bkr_ss_wira", "");
    localStorage.setItem("dok_rmh_ush_nas_ss_wira", "");
    localStorage.setItem("dok_rmh_ush_nas_2_ss_wira", "");
    localStorage.setItem("dok_jln_rmh_ush_nas_ss_wira", "");
    localStorage.setItem("dok_jln_rmh_ush_nas_2_ss_wira", "");
    

});

app.InfoTempatTinggalNasWiraSilentSurvey = {
	controller: "Kyc/",
	api: "Kyc_api/",
	elm: {},
	message_hint: "Ketik untuk melakukan pencarian minimal 4 karakter",

	init: function () {
		var file = app.InfoTempatTinggalNasWiraSilentSurvey;

		var checkFotoRumahUsaha = 1;
		var checkFotoJlnRumahUsaha = 1;
		var checkCaraBayar = false;

		$("#div-txtarea-alamat-dom-nas-tdk-ss-wira").hide();
		$("#div-rt-rw-dom-nas-tdk-ss-wira").hide();
		$("#div-inp-kode-pos-dom-nas-tdk-ss-wira").hide();
		$("#div-inp-kel-dom-nas-tdk-ss-wira").hide();
		$("#div-inp-kec-dom-nas-tdk-ss-wira").hide();
		$("#div-inp-kota-dom-nas-tdk-ss-wira").hide();
		$("#div-inp-prov-dom-nas-tdk-ss-wira").hide();
		$("#div-file-foto-rmh-ush-nas-2-ss-wira").hide();
		$("#min-file-rmh-ush-nas-ss-wira").hide();
		$("#div-file-foto-jln-rmh-ush-nas-2-ss-wira").hide();
		$("#min-jln-rmh-ush-nas-ss-wira").hide();
		$("#div-slc-hub-pemilik-rmh-nas-ss-wira").hide();

	
		
		
		file.getKodePos();
		
		file.getRelationWithHouseOwner();
		file.validasiUploadDocBkr();
		file.validasiUploadFotoRumahUsaha();
		file.validasiUploadFotoRumahUsaha2();
		file.getTmptPenyimpananKend();
		file.getJenisDocKepimilikanRmh();
		
		file.validasiUploadFotoJlnRumahUsaha();
		file.validasiUploadFotoJlnRumahUsaha2();
		
		file.viewData();

		$("#radio-alamat-dom-nas-tidak-ss-wira").click(function () {
			$("#div-txtarea-alamat-dom-nas-tdk-ss-wira").slideDown();
			$("#div-rt-rw-dom-nas-tdk-ss-wira").slideDown();
			$("#div-inp-kode-pos-dom-nas-tdk-ss-wira").slideDown();
			$("#div-inp-kel-dom-nas-tdk-ss-wira").slideDown();
			$("#div-inp-kec-dom-nas-tdk-ss-wira").slideDown();
			$("#div-inp-kota-dom-nas-tdk-ss-wira").slideDown();
			$("#div-inp-prov-dom-nas-tdk-ss-wira").slideDown();
		});
		$("#radio-alamat-dom-nas-sesuai-ss-wira").click(function () {
			$("#div-txtarea-alamat-dom-nas-tdk-ss-wira").slideUp();
			$("#div-rt-rw-dom-nas-tdk-ss-wira").slideUp();
			$("#div-inp-kode-pos-dom-nas-tdk-ss-wira").slideUp();
			$("#div-inp-kel-dom-nas-tdk-ss-wira").slideUp();
			$("#div-inp-kec-dom-nas-tdk-ss-wira").slideUp();
			$("#div-inp-kota-dom-nas-tdk-ss-wira").slideUp();
			$("#div-inp-prov-dom-nas-tdk-ss-wira").slideUp();
		});

		$("#add-file-rmh-ush-nas-ss-wira").click(function () {
			checkFotoRumahUsaha++;
			$("#min-file-rmh-ush-nas-ss-wira").show();
			if (checkFotoRumahUsaha == 2) {
				$("#div-file-foto-rmh-ush-nas-2-ss-wira").slideDown();
			} else if (checkFotoRumahUsaha > 2) {
				checkFotoRumahUsaha = 2;
			}
		});
		$("#min-file-rmh-ush-nas-ss-wira").click(function () {
			checkFotoRumahUsaha--;
			if (checkFotoRumahUsaha == 1) {
				$("#div-file-foto-rmh-ush-nas-2-ss-wira").slideUp();
				$("#min-file-rmh-ush-nas-ss-wira").slideUp();
				$("#file-rmh-ush-nas-2-ss-wira").val("");
			} else if (checkFotoRumahUsaha < 1) {
				checkFotoRumahUsaha = 1;
			}
		});

		$("#add-jln-rmh-ush-nas-ss-wira").click(function () {
			checkFotoJlnRumahUsaha++;
			$("#min-jln-rmh-ush-nas-ss-wira").show();
			if (checkFotoJlnRumahUsaha == 2) {
				$("#div-file-foto-jln-rmh-ush-nas-2-ss-wira").slideDown();
			} else if (checkFotoJlnRumahUsaha > 2) {
				checkFotoJlnRumahUsaha = 2;
			}
		});
		$("#min-jln-rmh-ush-nas-ss-wira").click(function () {
			checkFotoJlnRumahUsaha--;
			if (checkFotoJlnRumahUsaha == 1) {
				$("#div-file-foto-jln-rmh-ush-nas-2-ss-wira").slideUp();
				$("#min-jln-rmh-ush-nas-ss-wira").slideUp();
				$("#instant-file-jln-rmh-ush-nas-2-ss-wira").val("");
			} else if (checkFotoJlnRumahUsaha < 1) {
				checkFotoJlnRumahUsaha = 1;
			}
		});


		$("#btn-save-info-tmpt-tinggal-nas-ss-wira").click(function () {
			var file = app.InfoTempatTinggalNasWiraSilentSurvey;
			
            var id_position;
            var err_count = 0;
            var errTempatTinggalNas = 0;
			//Validasi radio button alamat sesuai atau tidak
			if (
				$('input[name="pilihTmptTinngalIaNonWira"]:checked').val() == null ||
				$('input[name="pilihTmptTinngalIaNonWira"]:checked').val() == ""
			) {
				//	$("#err-radio-alamat-dom-nas-ss-wira").html('');
				$("#err-radio-alamat-dom-nas-ss-wira")
					.prop("hidden", false)
					.html("Alamat domisili sesuai inputan awal" + " belum di pilih !");
				$(".error-radio-alamat-dom-nas-ss-wira").css({
					"border-color": "red",
				});

				if (id_position == null || id_position == "") {
                    id_position = '#div-radio-alamat-dom-nas-ss-wira';
                }
                err_count = err_count + 1;
                errTempatTinggalNas++;
			} else {
				$("#err-radio-alamat-dom-nas-ss-wira")
					.prop("hidden", true)
					.html("");
				$(".error-radio-alamat-dom-nas-ss-wira").css({
					"border-color": "",
				});

				err_count = err_count - 1;
                errTempatTinggalNas--;
			}
			//Validasi alamat tidak sesuai
			if ($('input[name="pilihTmptTinngalIaNonWira"]:checked').val() == "1") {
				if (
					$("#txtarea-alamat-dom-nas-tdk-ss-wira").val() == null ||
					$("#txtarea-alamat-dom-nas-tdk-ss-wira").val() == ""
				) {
					$("#err-txtarea-alamat-dom-nas-tdk-ss-wira")
						.prop("hidden", false)
						.html("Alamat Domisili Wajib Diisi !");
					$(".error-txtarea-alamat-dom-nas-tdk-ss-wira").css({
						"border-color": "red",
					});

					if (id_position == null || id_position == "") {
						id_position = '#div-txtarea-alamat-dom-nas-tdk-ss-wira';
					}
					err_count = err_count + 1;
					errTempatTinggalNas++;
				}else{
					$("#err-txtarea-alamat-dom-nas-tdk-ss-wira")
						.prop("hidden", true)
						.html("");
					$(".error-txtarea-alamat-dom-nas-tdk-ss-wira").css({
						"border-color": "",
					});

					err_count = err_count - 1;
                errTempatTinggalNas--;
				}
				if (
					$("#inp-rt-dom-nas-tdk-ss-wira").val() == null ||
					$("#inp-rw-dom-nas-tdk-ss-wira").val() == ""
				) {
					$("#err-rt-rw-dom-nas-tdk-ss-wira")
						.prop("hidden", false)
						.html("RT/RW Wajib Diisi !");
					$("input[id=inp-rt-dom-nas-tdk-ss-wira]").css({
						"border-color": "red",
					});
					$("input[id=inp-rw-dom-nas-tdk-ss-wira]").css({
						"border-color": "red",
					});

					if (id_position == null || id_position == "") {
						id_position = '#div-rt-rw-dom-nas-tdk-ss-wira';
					}
					err_count = err_count + 1;
					errTempatTinggalNas++;
				}else{
					$("#err-rt-rw-dom-nas-tdk-ss-wira")
						.prop("hidden", true)
						.html("RT/RW Wajib Diisi !");
					$("input[id=inp-rt-dom-nas-tdk-ss-wira]").css({
						"border-color": "",
					});
					$("input[id=inp-rw-dom-nas-tdk-ss-wira]").css({
						"border-color": "",
					});

					err_count = err_count - 1;
                	errTempatTinggalNas--;
				}
				if (
					$("#inp-kode-pos-dom-nas-tdk-ss-wira").val() == null ||
					$("#inp-kode-pos-dom-nas-tdk-ss-wira").val() == ""
				) {
					$("#err-inp-kode-pos-dom-nas-tdk-ss-wira")
						.prop("hidden", false)
						.html("Kode Pos Domisili Wajib Diisi !");
					$(".error-inp-kode-pos-dom-nas-tdk-ss-wira").css({
						"border-color": "red",
					});

					if (id_position == null || id_position == "") {
						id_position = '#div-inp-kode-pos-dom-nas-tdk-ss-wira';
					}
					err_count = err_count + 1;
					errTempatTinggalNas++;
				}else{
					$("#err-inp-kode-pos-dom-nas-tdk-ss-wira")
						.prop("hidden", true)
						.html("");
					$(".error-inp-kode-pos-dom-nas-tdk-ss-wira").css({
						"border-color": "",
					});

					err_count = err_count - 1;
                	errTempatTinggalNas--;
				}
				if (
					$("#inp-kel-dom-nas-tdk-ss-wira").val() == null ||
					$("#inp-kel-dom-nas-tdk-ss-wira").val() == ""
				) {
					$("#err-inp-kel-dom-nas-tdk-ss-wira")
						.prop("hidden", false)
						.html("Kelurahan Domisili Wajib Diisi !");
					$(".error-inp-kel-dom-nas-tdk-ss-wira").css({
						"border-color": "red",
					});

					if (id_position == null || id_position == "") {
						id_position = '#div-inp-kel-dom-nas-tdk-ss-wira';
					}
					err_count = err_count + 1;
					errTempatTinggalNas++;
				}else{
					$("#err-inp-kel-dom-nas-tdk-ss-wira")
						.prop("hidden", true)
						.html("");
					$(".error-inp-kel-dom-nas-tdk-ss-wira").css({
						"border-color": "",
					});

					err_count = err_count - 1;
                	errTempatTinggalNas--;
				}
				if (
					$("#inp-kec-dom-nas-tdk-ss-wira").val() == null ||
					$("#inp-kec-dom-nas-tdk-ss-wira").val() == ""
				) {
					$("#err-inp-kec-dom-nas-tdk-ss-wira")
						.prop("hidden", false)
						.html("Kecamatan Domisili Wajib Diisi !");
					$(".error-inp-kec-dom-nas-tdk-ss-wira").css({
						"border-color": "red",
					});

					if (id_position == null || id_position == "") {
						id_position = '#div-inp-kec-dom-nas-tdk-ss-wira';
					}
					err_count = err_count + 1;
					errTempatTinggalNas++;
				}else{
					$("#err-inp-kec-dom-nas-tdk-ss-wira")
						.prop("hidden", true)
						.html("");
					$(".error-inp-kec-dom-nas-tdk-ss-wira").css({
						"border-color": "",
					});

					err_count = err_count - 1;
                	errTempatTinggalNas--;
				}
				if (
					$("#inp-kota-dom-nas-tdk-ss-wira").val() == null ||
					$("#inp-kota-dom-nas-tdk-ss-wira").val() == ""
				) {
					$("#err-inp-kota-dom-nas-tdk-ss-wira")
						.prop("hidden", false)
						.html("Kota Domisili Wajib Diisi !");
					$(".error-inp-kota-dom-nas-tdk-ss-wira").css({
						"border-color": "red",
					});

					if (id_position == null || id_position == "") {
						id_position = '#div-inp-kota-dom-nas-tdk-ss-wira';
					}
					err_count = err_count + 1;
					errTempatTinggalNas++;
				}else{
					$("#err-inp-kota-dom-nas-tdk-ss-wira")
						.prop("hidden", true)
						.html("");
					$(".error-inp-kota-dom-nas-tdk-ss-wira").css({
						"border-color": "",
					});

					err_count = err_count - 1;
                	errTempatTinggalNas--;
				}
				if (
					$("#inp-prov-dom-nas-tdk-ss-wira").val() == null ||
					$("#inp-prov-dom-nas-tdk-ss-wira").val() == ""
				) {
					$("#err-inp-prov-dom-nas-tdk-ss-wira")
						.prop("hidden", false)
						.html("Provinsi Domisili Wajib Diisi !");
					$(".error-inp-prov-dom-nas-tdk-ss-wira").css({
						"border-color": "red",
					});

					if (id_position == null || id_position == "") {
						id_position = '#div-inp-prov-dom-nas-tdk-ss-wira';
					}
					err_count = err_count + 1;
					errTempatTinggalNas++;
				}else{
					$("#err-inp-prov-dom-nas-tdk-ss-wira")
						.prop("hidden", true)
						.html("");
					$(".error-inp-prov-dom-nas-tdk-ss-wira").css({
						"border-color": "",
					});

					err_count = err_count - 1;
                	errTempatTinggalNas--;
				}
			}
			//validasi foto tempat rumah / usaha
	
			if (checkFotoRumahUsaha == 1) {
			
				if (
					$("#file-rmh-ush-nas-ss-wira").val() == null ||
					$("#file-rmh-ush-nas-ss-wira").val() == ""
				) {
					$("#err-file-rmh-ush-nas-ss-wira").prop("hidden", false).html("Foto Rumah / Tempat Usaha Wajib Diisi !");
					$(".error-file-rmh-ush-nas-ss-wira").css({"border-color": "red",});

					if (id_position == null || id_position == "") {
						id_position = '#div-file-foto-rmh-ush-nas-ss-wira';
					}
					err_count = err_count + 1;
					errTempatTinggalNas++;
				}else{
					$("#err-file-rmh-ush-nas-ss-wira").prop("hidden", true).html("");
					$("input[id=file-rmh-ush-nas-ss-wira]").css({"border-color": "",});

					err_count = err_count - 1;
                	errTempatTinggalNas--;
				}
			}
			if (checkFotoRumahUsaha == 2) {
				if (
					$("#file-rmh-ush-nas-ss-wira").val() == null ||
					$("#file-rmh-ush-nas-ss-wira").val() == ""
				) {
					$("#err-file-rmh-ush-nas-ss-wira").prop("hidden", false).html("Foto Rumah / Tempat Usaha Wajib Diisi !");
					$("input[id=file-rmh-ush-nas-ss-wira]").css({"border-color": "red",});

					if (id_position == null || id_position == "") {
						id_position = '#div-file-foto-rmh-ush-nas-ss-wira';
					}
					err_count = err_count + 1;
					errTempatTinggalNas++;
				}else{
					$("#err-file-rmh-ush-nas-ss-wira").prop("hidden", true).html("");
					$("input[id=file-rmh-ush-nas-ss-wira]").css({"border-color": "",});

					err_count = err_count - 1;
                	errTempatTinggalNas--;
				}
				if (
					$("#file-rmh-ush-nas-2-ss-wira").val() == null ||
					$("#file-rmh-ush-nas-2-ss-wira").val() == ""
				) {				
					$("#err-file-rmh-ush-nas-2-ss-wira").prop("hidden", false).html('Foto Rumah / Tempat Usaha Wajib Diisi !');
					$("input[id=file-rmh-ush-nas-2-ss-wira]").css({"border-color": "red",});

					if (id_position == null || id_position == "") {
						id_position = '#div-file-foto-rmh-ush-nas-2-ss-wira';
					}
					err_count = err_count + 1;
					errTempatTinggalNas++;
				}else{
					$("#err-file-rmh-ush-nas-2-ss-wira").prop("hidden", true).html("");
					$("input[id=file-rmh-ush-nas-2-ss-wira]").css({"border-color": "",});

					err_count = err_count - 1;
                	errTempatTinggalNas--;
				}
			}

			//Validasi flag rumah
			if(checkFotoRumahUsaha == 1){
				if($('input[name="piliFotoRmhUshSsWira"]:checked').val() == null ||$('input[name="piliFotoRmhUshSsWira"]:checked').val() == ""){
					$("#err-file-foto-rmh-ush-nas-ss-wira").prop("hidden", false).html('Foto Rumah / Tempat Usaha Wajib Diisi !');
					$(".error-file-foto-rmh-ush-nas-ss-wira").css({"border-color": "red",});
					
					if (id_position == null || id_position == "") {
						id_position = '#div-file-foto-rmh-ush-nas-ss-wira';
					}
					err_count = err_count + 1;
					errTempatTinggalNas++;
				}else{
					$("#err-file-foto-rmh-ush-nas-ss-wira").prop("hidden", true).html('');
					$(".error-file-foto-rmh-ush-nas-ss-wira").css({"border-color": "",});

					err_count = err_count - 1;
                	errTempatTinggalNas--;
				}
			}
			if(checkFotoRumahUsaha == 2){
				if($('input[name="piliFotoRmhUshSsWira"]:checked').val() == null ||$('input[name="piliFotoRmhUshSsWira"]:checked').val() == ""){
					$("#err-file-foto-rmh-ush-nas-ss-wira").prop("hidden", false).html('Foto Rumah / Tempat Usaha Wajib Diisi !');
					$(".error-file-foto-rmh-ush-nas-ss-wira").css({"border-color": "red",});
					
					if (id_position == null || id_position == "") {
						id_position = '#div-file-foto-rmh-ush-nas-ss-wira';
					}
					err_count = err_count + 1;
					errTempatTinggalNas++;
				}else{
					$("#err-file-foto-rmh-ush-nas-ss-wira").prop("hidden", true).html('');
					$(".error-file-foto-rmh-ush-nas-ss-wira").css({"border-color": "",});

					err_count = err_count - 1;
                	errTempatTinggalNas--;
				}
				if($('input[name="piliFotoRmhUsh2SsWira"]:checked').val() == null ||$('input[name="piliFotoRmhUsh2SsWira"]:checked').val() == ""){
					$("#err-file-rmh-ush-nas-2-ss-wira").prop("hidden", false).html('Foto Rumah / Tempat Usaha Wajib Diisi !');
					$(".error-file-rmh-ush-nas-2-ss-wira error-info").css({"border-color": "red",});
					
					if (id_position == null || id_position == "") {
						id_position = '#div-file-foto-rmh-ush-nas-2-ss-wira';
					}
					err_count = err_count + 1;
					errTempatTinggalNas++;
				}else{
					$("#err-file-rmh-ush-nas-2-ss-wira").prop("hidden", true).html('');
					$(".error-file-rmh-ush-nas-2-ss-wira error-info").css({"border-color": "",});

					err_count = err_count - 1;
                	errTempatTinggalNas--;
				}
			}
			
			//validasi foto jalan tempat rumah / usaha
			if (checkFotoJlnRumahUsaha == 1) {
				if (
					$("#file-jln-rmh-ush-nas-ss-wira").val() == null ||
					$("#file-jln-rmh-ush-nas-ss-wira").val() == ""
				) {
					$("#err-file-jln-rmh-ush-nas-ss-wira").prop("hidden", false).html("Foto Rumah / Tempat Usaha Wajib Diisi !");
					$(".error-file-jln-rmh-ush-nas-ss-wira").css({"border-color": "red",});

					if (id_position == null || id_position == "") {
						id_position = '#div-file-foto-jln-rmh-ush-nas-ss-wira';
					}
					err_count = err_count + 1;
					errTempatTinggalNas++;
				}else{
					$("#err-file-jln-rmh-ush-nas-ss-wira").prop("hidden", true).html("");
					$(".error-file-jln-rmh-ush-nas-ss-wira").css({"border-color": "",});
				}
			}
			if (checkFotoJlnRumahUsaha == 2) {
				if (
					$("#file-jln-rmh-ush-nas-ss-wira").val() == null ||
					$("#file-jln-rmh-ush-nas-ss-wira").val() == ""
				) {
					$("#err-file-jln-rmh-ush-nas-ss-wira").prop("hidden", false).html("Foto Jalan Rumah / Tempat Usaha Wajib Diisi !");
					$(".error-file-jln-rmh-ush-nas-ss-wira").css({"border-color": "red",});

					if (id_position == null || id_position == "") {
						id_position = '#div-file-foto-jln-rmh-ush-nas-ss-wira';
					}
					err_count = err_count + 1;
					errTempatTinggalNas++;
				}else{
					$("#err-file-jln-rmh-ush-nas-ss-wira").prop("hidden", true).html("");
					$(".error-file-jln-rmh-ush-nas-ss-wira").css({"border-color": "",});

					err_count = err_count - 1;
                	errTempatTinggalNas--;
				}
				if (
					$("#file-jln-rmh-ush-nas-2-ss-wira").val() == null ||
					$("#file-jln-rmh-ush-nas-2-ss-wira").val() == ""
				) {				
					$("#err-file-jln-rmh-ush-nas-2-ss-wira").prop("hidden", false).html('Foto Jalan Rumah / Tempat Usaha Wajib Diisi !');
					$(".error-file-jln-rmh-ush-nas-2-ss-wira").css({"border-color": "red",});

					if (id_position == null || id_position == "") {
						id_position = '#div-file-foto-jln-rmh-ush-nas-2-ss-wira';
					}
					err_count = err_count + 1;
					errTempatTinggalNas++;
				}else{
					$("#err-file-jln-rmh-ush-nas-2-ss-wira").prop("hidden", true).html("");
					$(".error-file-jln-rmh-ush-nas-2-ss-wira").css({"border-color": "",});

					err_count = err_count - 1;
                	errTempatTinggalNas--;
				}
			}

			//Validasi flag jalan rumah
			if(checkFotoJlnRumahUsaha == 1){
				if($('input[name="piliFotoJlnRmhUshSsWira"]:checked').val() == null ||$('input[name="piliFotoJlnRmhUshSsWira"]:checked').val() == ""){
					$("#err-file-jln-rmh-ush-nas-ss-wira").prop("hidden", false).html('Foto Jalan Rumah / Tempat Usaha Wajib Diisi !');
					$(".error-file-jln-rmh-ush-nas-ss-wira").css({"border-color": "red",});
					
					if (id_position == null || id_position == "") {
						id_position = '#div-radio-alamat-dom-nas-ss-wira';
					}
					err_count = err_count + 1;
					errTempatTinggalNas++;
				}else{
					$("#err-file-jln-rmh-ush-nas-ss-wira").prop("hidden", true).html('');
					$(".error-file-jln-rmh-ush-nas-ss-wira").css({"border-color": "",});

					err_count = err_count - 1;
                	errTempatTinggalNas--;
				}
			}
			if(checkFotoJlnRumahUsaha == 2){
				if($('input[name="piliFotoJlnRmhUshSsWira"]:checked').val() == null ||$('input[name="piliFotoJlnRmhUshSsWira"]:checked').val() == ""){
					$("#err-file-jln-rmh-ush-nas-ss-wira").prop("hidden", false).html('Foto Jalan Rumah / Tempat Usaha Wajib Diisi !');
					$(".error-file-jln-rmh-ush-nas-ss-wira").css({"border-color": "red",});
					
					if (id_position == null || id_position == "") {
						id_position = '#div-file-foto-jln-rmh-ush-nas-ss-wira';
					}
					err_count = err_count + 1;
					errTempatTinggalNas++;
				}else{
					$("#err-file-jln-rmh-ush-nas-ss-wira").prop("hidden", true).html('');
					$(".error-file-jln-rmh-ush-nas-ss-wira").css({"border-color": "",});

					err_count = err_count - 1;
                	errTempatTinggalNas--;
				}
				if($('input[name="piliFotoJlnRmhUsh2SsWira"]:checked').val() == null ||$('input[name="piliFotoJlnRmhUsh2SsWira"]:checked').val() == ""){
					$("#err-file-jln-rmh-ush-nas-2-ss-wira").prop("hidden", false).html('Foto Jalan Rumah / Tempat Usaha Wajib Diisi !');
					$(".error-file-jln-rmh-ush-nas-2-ss-wira").css({"border-color": "red",});
					
					if (id_position == null || id_position == "") {
						id_position = '#div-file-foto-jln-rmh-ush-nas-2-ss-wira';
					}
					err_count = err_count + 1;
					errTempatTinggalNas++;
				}else{
					$("#err-file-jln-rmh-ush-nas-2-ss-wira").prop("hidden", true).html('');
					$(".error-file-jln-rmh-ush-nas-2-ss-wira").css({"border-color": "",});

					err_count = err_count - 1;
                	errTempatTinggalNas--;
				}
			}
			
			
			//Validasi tempat penyimpanan kendaraan
			if (
				$("#slc-tmpt-penyimpanan-kend-ss-wira").val() == null ||
				$("#slc-tmpt-penyimpanan-kend-ss-wira").val() == ""
			) {
				$("#err-slc-tmpt-penyimpanan-kend-ss-wira").html("Tempat Penyimpanan Kendaraan Wajib Diisi !");
				$("#err-slc-tmpt-penyimpanan-kend-ss-wira").prop("hidden", false);
				$(".error-slc-tmpt-penyimpanan-kend-ss-wira").css({"border-color": "red",});

				if (id_position == null || id_position == "") {
                    id_position = '#div-slc-tmpt-penyimpanan-kend-ss-wira';
                }
                err_count = err_count + 1;
                errTempatTinggalNas++;
			} else {
				
				$("#err-slc-tmpt-penyimpanan-kend-ss-wira").prop("hidden", true).html('');
				$(".error-slc-tmpt-penyimpanan-kend-ss-wira").css({
					"border-color": "",
				});

				err_count = err_count - 1;
                	errTempatTinggalNas--;
			}
			//hubungan pemilik rumah
			if($("#inp-sts-kepemilikan-rmh-code-ss-wira").val() == "02"){
				if (
					$("#slc-hub-pemilik-rmh-nas-code-ss-wira").val() == null ||
					$("#slc-hub-pemilik-rmh-nas-code-ss-wira").val() == ""
				) {
					$("#err-slc-hub-pemilik-rmh-nas-ss-wira").html("Hubungan Pemilik Rumah dengan Nasabah Wajib Diisi");
					$("#err-slc-hub-pemilik-rmh-nas-ss-wira").prop("hidden", false);
					$(".error-slc-hub-pemilik-rmh-nas-ss-wira").css({"border-color": "red",});

					if (id_position == null || id_position == "") {
						id_position = '#div-slc-hub-pemilik-rmh-nas-ss-wira';
					}
					err_count = err_count + 1;
					errTempatTinggalNas++;
				} else {
					
					$("#err-slc-hub-pemilik-rmh-nas-ss-wira").prop("hidden", true).html('');
					$(".error-slc-hub-pemilik-rmh-nas-ss-wira").css({
						"border-color": "",
					});

					err_count = err_count - 1;
                	errTempatTinggalNas--;
				}
			}
			//jenis dokumen kepemilikan rumah
			if (
				$("#slc-jenis-dok-kep-rmh-ss-wira").val() == null ||
				$("#slc-jenis-dok-kep-rmh-ss-wira").val() == ""
			) {
				$("#err-slc-jenis-dok-kep-rmh-ss-wira").html("Jenis Dokumen Wajib Diisi");
				$("#err-slc-jenis-dok-kep-rmh-ss-wira").prop("hidden", false);
				$(".error-slc-jenis-dok-kep-rmh-ss-wira").css({"border-color": "red",});

				if (id_position == null || id_position == "") {
                    id_position = '#div-slc-jenis-dok-kep-rmh-ss-wira';
                }
                err_count = err_count + 1;
                errTempatTinggalNas++;
			} else {
				
				$("#err-slc-jenis-dok-kep-rmh-code-ss-wira").prop("hidden", true).html('');
				$(".error-slc-jenis-dok-kep-rmh-code-ss-wira").css({"border-color": "",});

				err_count = err_count - 1;
                	errTempatTinggalNas--;
			}
			//Dokumen BKR
			
				if ($("#file-dok-bkr-ss-wira").val() == "") {
					$("#err-file-dok-bkr-ss-wira").html(
						"Dokumen Kepemilikan Tempat Tinggal Wajib Diisi"
					);
					$("#err-file-dok-bkr-ss-wira").prop("hidden", false);
					$("input[id=file-dok-bkr-ss-wira]").css({ "border-color": "red" });

					if (id_position == null || id_position == "") {
						id_position = '#div-file-dok-bkr-ss-wira';
					}
					err_count = err_count + 1;
					errTempatTinggalNas++;
				} else {
					$("#err-file-dok-bkr-ss-wira").html("");
					$("#err-file-dok-bkr-ss-wira").prop("hidden", true);
					$("input[id=file-dok-bkr-ss-wira]").css({ "border-color": "" });

					err_count = err_count - 1;
                	errTempatTinggalNas--;
				}
			
			
			//jarak
			if (
				$("#inp-jrk-dom-nas-muf-ss-wira").val() == "" ||
				$("#inp-jrk-dom-nas-muf-ss-wira").val() == null
			) {
				$("#err-inp-jrk-dom-nas-muf-ss-wira").html("Jarak Domisili Wajib Diisi");
				$("#err-inp-jrk-dom-nas-muf-ss-wira").prop("hidden", false);
				$("input[id=inp-jrk-dom-nas-muf-ss-wira]").css({"border-color": "red"});
				
				if (id_position == null || id_position == "") {
                    id_position = '#div-inp-jrk-dom-nas-muf-ss-wira';
                }
                err_count = err_count + 1;
                errTempatTinggalNas++;
			} else {
				
				$("#err-inp-jrk-dom-nas-muf-ss-wira").prop("hidden", true).html('');
				$("input[id=inp-jrk-dom-nas-muf-ss-wira]").css({"border-color": ""});
				err_count = err_count - 1;
                	errTempatTinggalNas--;
			}
			if (err_count > 0) {
				$('html, body').animate({
				 scrollTop: $(id_position).offset().top
				}, 800);
			} else {

				file.jsonSubmitInformasiTmptTinggalNas();
			}
		});

	

		
	},

	viewData: function(){
	
		var file = app.InfoTempatTinggalNasWiraSilentSurvey;
		if($("#inp-sts-kepemilikan-rmh-code-ss-wira").val() == "02"){
			$("#div-slc-hub-pemilik-rmh-nas-ss-wira").show();
		}
	},

	validasiUpload: function (param, idParam, idLabelErrParam) {
		var valParam2 = $("#" + idParam).val();
		if (valParam2 == "" || valParam2 == null) {
			
			$('input[id=' + idParam + ']').css({
				"border-color": "red"
			});
			$("#" + idLabelErrParam).prop("hidden", false).html(param + " Wajib diisi !");
			
		}
		else {
		
			$('input[id=' + idParam + ']').css({
				"border-color": ""
			});
			$("#" + idLabelErrParam).prop("hidden", true).html("");
			
		}
	},
	//--------------------- Tempat Tinggal Nasabah
	getKodePos: function () {
		var file = app.InfoTempatTinggalNasWiraSilentSurvey;
		$("#inp-kode-pos-dom-nas-tdk-ss-wira")
			.select2({
				theme: "bootstrap4",
				placeholder: "PILIH KODE POS",
				allowClear: true,
				// data: xdata,
				minimumInputLength: 4,
				containerCssClass: "error-inp-kode-pos-dom-nas-tdk-ss-wira",
				language: {
					inputTooShort: function () {
						return file.message_hint;
					},
				},

				ajax: {
					dataType: "json",
					cache: true,
					url: app.base_url + file.api + "getDataByZipcode",
					type: "POST",
					data: function (params) {
						var query = {
							value: params.term,
						};
						return query;
					},

					processResults: function (response) {
						var json = $.parseJSON(response);
						console.log(json);
						var data = json.data.map(function (value) {
							//	console.log("zipcode")
							return {
								id:
									value.zip_code +
									"," +
									value.kelurahan_id +
									"," +
									value.kelurahan_name +
									"," +
									value.kecamatan_id +
									"," +
									value.kecamatan_name +
									"," +
									value.kab_kot_id +
									"," +
									value.kab_kot_name +
									"," +
									value.provinsi_id +
									"," +
									value.provinsi_name,
								text: value.zip_code + " | " + value.kelurahan_name,
							};
						});
						return {
							results: data,
						};
					},
				},
			})
			.change(function () {
				var file = app.InfoTempatTinggalNasWiraSilentSurvey;
				var zip_code = $("#inp-kode-pos-dom-nas-tdk-ss-wira").val();
				if (!zip_code == null || !zip_code == "") {
					file.changeKodePos();
				}
			});
	},
	changeKodePos: function () {
		var valueAll = $("#inp-kode-pos-dom-nas-tdk-ss-wira").val();
		var arrValueAllSplit = valueAll.split(",");
		$('#inp-kode-pos-dom-nas-tdk-code-ss-wira').val(arrValueAllSplit[0]);
		var data = [];
		data.push({
			"KELURAHAN_ID": arrValueAllSplit[1],
			"KELURAHAN_NAME": arrValueAllSplit[2],
			"KECAMATAN_ID": arrValueAllSplit[3],
			"KECAMATAN_NAME": arrValueAllSplit[4],
			"KABKOT_ID": arrValueAllSplit[5],
			"KABKOT_NAME": arrValueAllSplit[6],
			"PROVINSI_ID": arrValueAllSplit[7],
			"PROVINSI_NAME": arrValueAllSplit[8]
			
		});
		var dataKelurahan = data.map(function (obj) {
			$('#inp-kel-dom-nas-tdk-code-ss-wira').val(obj.KELURAHAN_ID)
			$('#inp-kel-dom-nas-tdk-desc-ss-wira').val(obj.KELURAHAN_NAME)
			return {
				id: obj.KELURAHAN_ID,
				text: obj.KELURAHAN_NAME,
			};
		});
		var dataKecamatan = data.map(function (obj) {
			$('#inp-kec-dom-nas-tdk-code-ss-wira').val(obj.KECAMATAN_ID)
			$('#inp-kec-dom-nas-tdk-desc-ss-wira').val(obj.KECAMATAN_NAME)
			return {
				id: obj.KECAMATAN_ID,
				text: obj.KECAMATAN_NAME,
			};
		});
		var dataKabKot = data.map(function (obj) {
			$('#inp-kota-dom-nas-tdk-code-ss-wira').val(obj.KABKOT_ID)
			$('#inp-kota-dom-nas-tdk-desc-ss-wira').val(obj.KABKOT_NAME)
			return {
				id: obj.KABKOT_ID,
				text: obj.KABKOT_NAME,
			};
		});
		var dataProvinsi = data.map(function (obj) {
			$('#inp-prov-dom-nas-tdk-code-ss-wira').val(obj.PROVINSI_ID)
			$('#inp-prov-dom-nas-tdk-desc-ss-wira').val(obj.PROVINSI_NAME)
			return {
				id: obj.PROVINSI_ID,
				text: obj.PROVINSI_NAME,
			};
		});
		$("#inp-kel-dom-nas-tdk-ss-wira")
			.select2({
				theme: "bootstrap4",
				tags: true,
				placeholder: "PILIH KELURAHAN",
				allowClear: true,
				data: dataKelurahan,
			})
			.val(data[0]["KELURAHAN_ID"])
			.trigger("change");
		$("#inp-kec-dom-nas-tdk-ss-wira")
			.select2({
				theme: "bootstrap4",
				tags: true,
				placeholder: "PILIH KECAMATAN",
				allowClear: true,
				data: dataKecamatan,
			})
			.val(data[0]["KECAMATAN_ID"])
			.trigger("change");
		$("#inp-kota-dom-nas-tdk-ss-wira")
			.select2({
				theme: "bootstrap4",
				tags: true,
				placeholder: "PILIH KAB/KOT",
				allowClear: true,
				data: dataKabKot,
			})
			.val(data[0]["KABKOT_ID"])
			.trigger("change");
		$("#inp-prov-dom-nas-tdk-ss-wira")
			.select2({
				theme: "bootstrap4",
				tags: true,
				placeholder: "PILIH PROVINSI",
				allowClear: true,
				data: dataProvinsi,
			})
			.val(data[0]["PROVINSI_ID"])
			.trigger("change");
	},

	getRelationWithHouseOwner: function () {
		var file = app.InfoTempatTinggalNasWiraSilentSurvey;

		$.ajax({
			url: app.base_url + file.api + "getRelationWithHouseOwner",
			async: false,
			success: function (response) {
				if (response.status) {
					var hasil = response.data.map(function (result) {
						return {
							id: result.rel_owner_code +"," + result.rel_owner_desc,
							text: result.rel_owner_desc,
						};
					});
				}

				$("#slc-hub-pemilik-rumah-nas-ss-wira").select2({
					theme: "bootstrap4",
					placeholder: "PILIH JENIS HUBUNGAN",
					allowClear: true,
					cache: true,
					data: hasil,
					containerCssClass: "error-slc-hub-pemilik-rmh-nas-ss-wira",
					processResults: function (response) {
						var data = response.data.map(function (value) {
							return {
								id: value.rel_owner_code +"," + value.rel_owner_desc,
								text: value.rel_owner_desc,
							};
						});
						return {
							results: data,
						};
					},
				}).change(function () {
					var str = $('#slc-hub-pemilik-rumah-nas-ss-wira option:selected').val();
					var data = str.split(',');
					$('#inp-hub-pemilik-rmh-nas-code-ss-wira').val(data[0]);
					$('#inp-hub-pemilik-rmh-nas-desc-ss-wira').val(data[1]);
					// console.log("inp-rel-with-nash-code" + $('#inp-rel-with-nash-code').val())
					// console.log("inp-rel-with-nash-descc" + $('#inp-rel-with-nash-desc').val())
				})
			},
		});
	},

	getTmptPenyimpananKend: function () {
		var file = app.InfoTempatTinggalNasWiraSilentSurvey;

		$.ajax({
			url: app.base_url + file.api + "getTempatPenyimpananKend",
			async: false,
			success: function (response) {
				if (response.status) {
					var hasil = response.result.map(function (result) {
						return {
							id: result.tempatPenyimpananKendaraanId + "," + result.tempatPenyimpananKendaraanDesc,
							text: result.tempatPenyimpananKendaraanDesc,
						};
					});
				}

				$("#slc-tmpt-penyimpanan-kend-ss-wira").select2({
					theme: "bootstrap4",
					placeholder: "PILIH TEMPAT PENYIMPANAN",
					allowClear: true,
					cache: true,
					data: hasil,
					containerCssClass: "error-slc-tmpt-penyimapanan-kend-ss-wira",
					processResults: function (response) {
						return {
							results: response.result.map(function (value) {
								return {
									id: value.tempatPenyimpananKendaraanId + "," + value.tempatPenyimpananKendaraanDesc,
									text: value.tempatPenyimpananKendaraanDesc,
								};
							}),
						};
					},
				}).change(function () {
					var str = $('#slc-tmpt-penyimpanan-kend-ss-wira option:selected').val();
					var data = str.split(',');
					$('#inp-tmpt-penyimpanan-kend-code-ss-wira').val(data[0]);
					$('#inp-tmpt-penyimpanan-kend-desc-ss-wira').val(data[1]);
		
		
				})
			},
		});
	},

	getJenisDocKepimilikanRmh: function () {
		var file = app.InfoTempatTinggalNasWiraSilentSurvey;
		$("#slc-jenis-dok-kep-rmh-ss-wira").select2({
			theme: "bootstrap4",
			placeholder: "PILIH JENIS DOKUMEN",
			allowClear: true,
			containerCssClass: "error-slc-jenis-dok-kep-rmh-ss-wira",
			ajax: {
				url: app.base_url + file.api + "getJenisDocKepimilikanRmh",
				cache: true,
				type: "GET",
				processResults: function (response) {
					var data = response.result.map(function (value) {
						return {
							id: value.jenisDokumenKepemilikanRumahId +"," +value.jenisDokumenKepemilkanRumahDesc,
							text: value.jenisDokumenKepemilkanRumahDesc,
						};
					});
					return {
						results: data,
					};
				},
			},
		}).change(function () {
			var str = $('#slc-jenis-dok-kep-rmh-ss-wira option:selected').val();
			var data = str.split(',');
			$('#inp-jenis-dok-kep-rmh-code-ss-wira').val(data[0]);
			$('#inp-jenis-dok-kep-rmh-desc-ss-wira').val(data[1]);
			// console.log("jenis dok code" + $('#inp-jenis-dok-code').val())
			// console.log("jenis dok desc" + $('#inp-jenis-dok-desc').val())
		})
	},
	validasiUploadDocBkr: function () {
		var file = app.InfoTempatTinggalNasWiraSilentSurvey;
		$("#file-dok-bkr-ss-wira").change(function () {
			var fileUpload = document.querySelector("#file-dok-bkr-ss-wira")[
				"files"
			][0];
			var arrType = [];
			arrType = fileUpload.name.split(".");
			var index = arrType.length - 1;
			if (fileUpload.size > 5120000) {
				//alert_error("Ukuran file terlalu besar. Maksimal 5 MB");
				Swal.fire(
					"Format Data Tidak Sesuai",
					"Ukuran file terlalu besar. Maksimal 5 MB",
					"warning"
				);
				$("#file-dok-bkr-ss-wira").val("");
			}
			if (
				arrType[index] != "jpg" &&
				arrType[index] != "jpeg" &&
				arrType[index] != "png" &&
				arrType[index] != "JPG" &&
				arrType[index] != "JPEG" &&
				arrType[index] != "PNG" &&
				arrType[index] != "pdf" &&
				arrType[index] != "PDF"
			) {
				Swal.fire(
					"Format Data Tidak Sesuai",
					"bukan termasuk salah satu dari : .pdf .jpg .jpeg .png",
					"warning"
				);
				$("#file-dok-bkr-ss-wira").val("");
			} else if (arrType[1] == "PDF" || arrType[1] == "pdf") {
				file.convertPdfDocBkr(fileUpload);
			} else {
				file.uploadDocBkr(fileUpload);
			}
		});
	},
	convertPdfDocBkr: function (fileUpload) {
		var fileReader = new FileReader();
		var base64;
		fileReader.onload = function (fileLoadedEvent) {
			base64 = fileLoadedEvent.target.result.replace("data:", "").replace(/^.+,/, "");
			console.log("BASE PDF BP 2", base64);
			localStorage.setItem("dok_bkr_ss_wira", base64);
		};
		fileReader.readAsDataURL(fileUpload);
		
	},
	uploadDocBkr: function (fileUpload) {
		var reader = new FileReader();
		reader.onload = function (event) {
			var image = new Image();
			image.onload = function () {
				var canvas = document.createElement("canvas");
				var context = canvas.getContext("2d");
				canvas.width = image.width / 4;
				canvas.height = image.height / 4;
				context.drawImage(
					image,
					0,
					0,
					image.width,
					image.height,
					0,
					0,
					canvas.width,
					canvas.height
				);

				//	console.log("COMPRESS -> " + canvas.toDataURL());
				base64StringUploadDocBkr = canvas
					.toDataURL()
					.replace("data:", "")
					.replace(/^.+,/, "");
				imagebase64StringUploadDocBkr = base64StringUploadDocBkr;
				localStorage.setItem(
					"dok_bkr_ia_nonwira",
					base64StringUploadDocBkr
				);
			};
			image.src = event.target.result;
		};
		reader.readAsDataURL(fileUpload);
	},
	validasiUploadFotoRumahUsaha: function () {
		var file = app.InfoTempatTinggalNasWiraSilentSurvey;
		$("#file-rmh-ush-nas-ss-wira").change(function () {
			var fileUpload = document.querySelector("#file-rmh-ush-nas-ss-wira")[
				"files"
			][0];
			var arrType = [];
			arrType = fileUpload.name.split(".");
			var index = arrType.length - 1;
			if (fileUpload.size > 5120000) {
				//alert_error("Ukuran file terlalu besar. Maksimal 5 MB");
				Swal.fire(
					"Format Data Tidak Sesuai",
					"Ukuran file terlalu besar. Maksimal 5 MB",
					"warning"
				);
				$("#file-rmh-ush-nas-ss-wira").val("");
			}
			if (
				arrType[index] != "jpg" &&
				arrType[index] != "jpeg" &&
				arrType[index] != "png" &&
				arrType[index] != "JPG" &&
				arrType[index] != "JPEG" &&
				arrType[index] != "PNG" &&
				arrType[index] != "pdf" &&
				arrType[index] != "PDF"
			) {
				Swal.fire(
					"Format Data Tidak Sesuai",
					"bukan termasuk salah satu dari : .pdf .jpg .jpeg .png",
					"warning"
				);
				$("#file-rmh-ush-nas-ss-wira").val("");
			} else if (arrType[1] == "PDF" || arrType[1] == "pdf") {
				file.convertPdfFotoRumahUsaha(fileUpload);
			} else {
				file.uploadFotoRumahUsaha(fileUpload);
			}
		});
	},
	convertPdfFotoRumahUsaha: function (fileUpload) {
		var fileReader = new FileReader();
		var base64;
		fileReader.onload = function (fileLoadedEvent) {
			// base64String = canvas
			// 		.toDataURL()
			// 		.replace("data:", "")
			// 		.replace(/^.+,/, "");
			base64 = fileLoadedEvent.target.result.replace("data:", "").replace(/^.+,/, "");
			console.log("BASE PDF BP 2", base64);
			localStorage.setItem("dok_rmh_ush_nas_ss_wira", base64);
		};
		fileReader.readAsDataURL(fileUpload);
		
	},
	uploadFotoRumahUsaha: function (fileUpload) {
		var reader = new FileReader();
		reader.onload = function (event) {
			var image = new Image();
			image.onload = function () {
				var canvas = document.createElement("canvas");
				var context = canvas.getContext("2d");
				canvas.width = image.width / 4;
				canvas.height = image.height / 4;
				context.drawImage(
					image,
					0,
					0,
					image.width,
					image.height,
					0,
					0,
					canvas.width,
					canvas.height
				);

				//	console.log("COMPRESS -> " + canvas.toDataURL());
				base64String = canvas
					.toDataURL()
					.replace("data:", "")
					.replace(/^.+,/, "");
				imagebase64String = base64String;
				localStorage.setItem("dok_rmh_ush_nas_ss_wira", base64String);
			};
			image.src = event.target.result;
		};
		reader.readAsDataURL(fileUpload);
	},
	validasiUploadFotoRumahUsaha2: function () {
		var file = app.InfoTempatTinggalNasWiraSilentSurvey;

		$("#file-rmh-ush-nas-2-ss-wira").change(function () {
			var fileUpload = document.querySelector(
				"#file-rmh-ush-nas-2-ss-wira"
			)["files"][0];
			var arrType = [];
			arrType = fileUpload.name.split(".");
			var index = arrType.length - 1;
			if (fileUpload.size > 5120000) {
				//alert_error("Ukuran file terlalu besar. Maksimal 5 MB");
				Swal.fire(
					"Format Data Tidak Sesuai",
					"Ukuran file terlalu besar. Maksimal 5 MB",
					"warning"
				);
				$("#file-rmh-ush-nas-2-ss-wira").val("");
			}
			if (
				arrType[index] != "jpg" &&
				arrType[index] != "jpeg" &&
				arrType[index] != "png" &&
				arrType[index] != "JPG" &&
				arrType[index] != "JPEG" &&
				arrType[index] != "PNG" &&
				arrType[index] != "pdf" &&
				arrType[index] != "PDF"
			) {
				Swal.fire(
					"Format Data Tidak Sesuai",
					"bukan termasuk salah satu dari : .pdf .jpg .jpeg .png",
					"warning"
				);
				$("#file-rmh-ush-nas-2-ss-wira").val("");
			} else if (arrType[1] == "PDF" || arrType[1] == "pdf") {
				file.convertPdfFotoRumahUsaha2(fileUpload);
			} else {
				file.uploadFotoRumahUsaha2(fileUpload);
			}
		});
	},
	convertPdfFotoRumahUsaha2: function (fileUpload) {
		var fileReader = new FileReader();
		var base64;
		fileReader.onload = function (fileLoadedEvent) {
			base64 = fileLoadedEvent.target.result.replace("data:", "").replace(/^.+,/, "");;
			console.log("BASE PDF BP 2", base64);
			localStorage.setItem("dok_rmh_ush_nas_2_ss_wira", base64);
		};
		fileReader.readAsDataURL(fileUpload);
		
	},
	uploadFotoRumahUsaha2: function (fileUpload) {
		var reader = new FileReader();
		reader.onload = function (event) {
			var image = new Image();
			image.onload = function () {
				var canvas = document.createElement("canvas");
				var context = canvas.getContext("2d");
				canvas.width = image.width / 4;
				canvas.height = image.height / 4;
				context.drawImage(
					image,
					0,
					0,
					image.width,
					image.height,
					0,
					0,
					canvas.width,
					canvas.height
				);

				//	console.log("COMPRESS -> " + canvas.toDataURL());
				base64String = canvas
					.toDataURL()
					.replace("data:", "")
					.replace(/^.+,/, "");
				imagebase64String = base64String;
				localStorage.setItem(
					"dok_rmh_ush_nas_2_ss_wira",
					base64String
				);
			};
			image.src = event.target.result;
		};
		reader.readAsDataURL(fileUpload);
	},
	validasiUploadFotoJlnRumahUsaha: function () {
		var file = app.InfoTempatTinggalNasWiraSilentSurvey;
		$("#file-jln-rmh-ush-nas-ss-wira").change(function () {
			var fileUpload = document.querySelector(
				"#file-jln-rmh-ush-nas-ss-wira"
			)["files"][0];
			var arrType = [];
			arrType = fileUpload.name.split(".");
			var index = arrType.length - 1;
			if (fileUpload.size > 5120000) {
				//alert_error("Ukuran file terlalu besar. Maksimal 5 MB");
				Swal.fire(
					"Format Data Tidak Sesuai",
					"Ukuran file terlalu besar. Maksimal 5 MB",
					"warning"
				);
				$("#file-jln-rmh-ush-nas-ss-wira").val("");
			}
			if (
				arrType[index] != "jpg" &&
				arrType[index] != "jpeg" &&
				arrType[index] != "png" &&
				arrType[index] != "JPG" &&
				arrType[index] != "JPEG" &&
				arrType[index] != "PNG" &&
				arrType[index] != "pdf" &&
				arrType[index] != "PDF"
			) {
				Swal.fire(
					"Format Data Tidak Sesuai",
					"bukan termasuk salah satu dari : .pdf .jpg .jpeg .png",
					"warning"
				);
				$("#file-jln-rmh-ush-nas-ss-wira").val("");
			} else if (arrType[1] == "PDF" || arrType[1] == "pdf") {
				file.convertPdfFotoJlnRumahUsaha(fileUpload);
			} else {
				file.uploadFotoJlnRumahUsaha(fileUpload);
			}
		});
	},
	convertPdfFotoJlnRumahUsaha: function (fileUpload) {
		var fileReader = new FileReader();
		var base64;
		fileReader.onload = function (fileLoadedEvent) {
			base64 = fileLoadedEvent.target.result.replace("data:", "").replace(/^.+,/, "");;
			console.log("BASE PDF BP 2", base64);
			localStorage.setItem("dok_jln_rmh_ush_nas_ss_wira", base64);
		};
		fileReader.readAsDataURL(fileUpload);
		
		
	},
	uploadFotoJlnRumahUsaha: function (fileUpload) {
		var reader = new FileReader();
		reader.onload = function (event) {
			var image = new Image();
			image.onload = function () {
				var canvas = document.createElement("canvas");
				var context = canvas.getContext("2d");
				canvas.width = image.width / 4;
				canvas.height = image.height / 4;
				context.drawImage(
					image,
					0,
					0,
					image.width,
					image.height,
					0,
					0,
					canvas.width,
					canvas.height
				);

				//	console.log("COMPRESS -> " + canvas.toDataURL());
				base64String = canvas
					.toDataURL()
					.replace("data:", "")
					.replace(/^.+,/, "");
				imagebase64String = base64String;
				localStorage.setItem(
					"dok_jln_rmh_ush_nas_ss_wira",
					base64String
				);
			};
			image.src = event.target.result;
		};
		reader.readAsDataURL(fileUpload);
	},
	validasiUploadFotoJlnRumahUsaha2: function () {
		var file = app.InfoTempatTinggalNasWiraSilentSurvey;

		$("#file-jln-rmh-ush-nas-2-ss-wira").change(function () {
			var fileUpload = document.querySelector(
				"#file-jln-rmh-ush-nas-2-ss-wira"
			)["files"][0];
			var arrType = [];
			arrType = fileUpload.name.split(".");
			var index = arrType.length - 1;
			if (fileUpload.size > 5120000) {
				//alert_error("Ukuran file terlalu besar. Maksimal 5 MB");
				Swal.fire(
					"Format Data Tidak Sesuai",
					"Ukuran file terlalu besar. Maksimal 5 MB",
					"warning"
				);
				$("#file-jln-rmh-ush-nas-2-ss-wira").val("");
			}
			if (
				arrType[index] != "jpg" &&
				arrType[index] != "jpeg" &&
				arrType[index] != "png" &&
				arrType[index] != "JPG" &&
				arrType[index] != "JPEG" &&
				arrType[index] != "PNG" &&
				arrType[index] != "pdf" &&
				arrType[index] != "PDF"
			) {
				Swal.fire(
					"Format Data Tidak Sesuai",
					"bukan termasuk salah satu dari : .pdf .jpg .jpeg .png",
					"warning"
				);
				$("#file-jln-rmh-ush-nas-2-ss-wira").val("");
			} else if (arrType[1] == "PDF" || arrType[1] == "pdf") {
				file.convertPdfFotoJlnRumahUsaha2(fileUpload);
			} else {
				file.uploadFotoJlnRumahUsaha2(fileUpload);
			}
		});
	},
	convertPdfFotoJlnRumahUsaha2: function (fileUpload) {
		var fileReader = new FileReader();
		var base64;
		fileReader.onload = function (fileLoadedEvent) {
			base64 = fileLoadedEvent.target.result.replace("data:", "").replace(/^.+,/, "");;
			console.log("BASE PDF BP 2", base64);
			localStorage.setItem("dok_jln_rmh_ush_nas_2_ss_wira", base64);
		};
		fileReader.readAsDataURL(fileUpload);
		
	},
	uploadFotoJlnRumahUsaha2: function (fileUpload) {
		var reader = new FileReader();
		reader.onload = function (event) {
			var image = new Image();
			image.onload = function () {
				var canvas = document.createElement("canvas");
				var context = canvas.getContext("2d");
				canvas.width = image.width / 4;
				canvas.height = image.height / 4;
				context.drawImage(
					image,
					0,
					0,
					image.width,
					image.height,
					0,
					0,
					canvas.width,
					canvas.height
				);

				//	console.log("COMPRESS -> " + canvas.toDataURL());
				base64String = canvas
					.toDataURL()
					.replace("data:", "")
					.replace(/^.+,/, "");
				imagebase64String = base64String;
				localStorage.setItem(
					"dok_jln_rmh_ush_nas_2_ss_wira",
					base64String
				);
			};
			image.src = event.target.result;
		};
		reader.readAsDataURL(fileUpload);
	},


	jsonSubmitInformasiTmptTinggalNas: function () {
		
		var inf_alamat_dom = $('#txtarea-alamat-dom-nas-ss-wira').val().toUpperCase();
		var inf_rt_dom = $('#inp-rt-dom-nas-ss-wira').val().toUpperCase();
		var inf_rw_dom = $('#inp-rw-dom-nas-ss-wira').val().toUpperCase();
		var inf_kode_pos_dom = $('#inp-kode-pos-dom-nas-ss-wira').val().toUpperCase();
		var inf_kelurahan_code_dom = $('#inp-kel-code-dom-nas-ss-wira').val().toUpperCase();
		var inf_kelurahan_desc_dom = $('#inp-kel-dom-nas-ss-wira').val().toUpperCase();
		var inf_kecamatan_code_dom = $('#inp-kec-code-dom-nas-ss-wira').val().toUpperCase();
		var inf_kecamatan_desc_dom = $('#inp-kec-dom-nas-ss-wira').val().toUpperCase();
		var inf_kab_kot_code_dom = $('#inp-kota-code-dom-nas-ss-wira').val();
		var inf_kab_kot_desc_dom = $('#inp-kota-dom-nas-ss-wira').val().toUpperCase();
		var inf_prov_code_dom = $('#inp-prov-code-dom-nas-ss-wira').val().toUpperCase();
		var inf_prov_desc_dom = $('#inp-prov-dom-nas-ss-wira').val().toUpperCase();
		var inf_flag_alamat_sesuai_dom = $('input[name="pilihTmptTinngalIaNonWira"]:checked').val();
		var inf_alamat_bu_dom = $('#txtarea-alamat-dom-nas-tdk-ss-wira').val().toUpperCase();
		var inf_rt_bu_dom = $('#inp-rt-dom-nas-tdk-ss-wira').val().toUpperCase();
		var inf_rw_bu_dom = $('#inp-rw-dom-nas-tdk-ss-wira').val().toUpperCase();
		var inf_kode_pos_bu_dom = $("#inp-kode-pos-dom-nas-tdk-code-ss-wira").val().toUpperCase();
		var inf_kelurahan_code_bu_dom = $('#inp-kel-dom-nas-tdk-code-ss-wira').val();
		var inf_kelurahan_desc_bu_dom = $('#inp-kel-dom-nas-tdk-desc-ss-wira').val();
		var inf_kecamatan_code_bu_dom = $('#inp-kec-dom-nas-tdk-code-ss-wira').val();
		var inf_kecamatan_desc_bu_dom = $('#inp-kec-dom-nas-tdk-desc-ss-wira').val();
		var inf_kab_kot_code_bu_dom = $('#inp-kota-dom-nas-tdk-code-ss-wira').val();
		var inf_kab_kot_desc_bu_dom = $('#inp-kota-dom-nas-tdk-desc-ss-wira').val();
		var inf_prov_code_bu_dom = $('#inp-prov-dom-nas-tdk-code-ss-wira').val();
		var inf_prov_desc_bu_dom = $('#inp-prov-dom-nas-tdk-desc-ss-wira').val();
		var inf_tempat_penyimpanan_code_dom = $('#inp-tmpt-penyimpanan-kend-code-ss-wira').val().toUpperCase();
		var inf_tempat_penyimpanan_desc_dom = $('#inp-tmpt-penyimpanan-kend-desc-ss-wira').val().toUpperCase();
		var inf_status_rumah_code_dom = $('#inp-sts-kepemilikan-rmh-code-ss-wira').val().toUpperCase();
		var inf_status_rumah_desc_dom = $('#inp-sts-kepemilikan-rmh-desc-ss-wira').val().toUpperCase();
		var inf_hubungan_nasabah_code_dom = $('#inp-hub-pemilik-rmh-nas-code-ss-wira').val().toUpperCase();
		var inf_hubungan_nasabah_desc_dom = $('#inp-hub-pemilik-rmh-nas-desc-ss-wira').val().toUpperCase();
		var file_dok_bkr_dom = localStorage.getItem("dok_bkr_ss_wira");
		var inf_flag_lokasi_dom = "";
		var file_foto_lokasi_dom1 = localStorage.getItem("dok_rmh_ush_nas_ss_wira");
		var file_foto_lokasi_dom2 = localStorage.getItem("dok_rmh_ush_nas_2_ss_wira");
		var inf_flag_lingkungan_dom = "";
		var file_foto_lingkungan_dom1 = localStorage.getItem("dok_jln_rmh_ush_nas_ss_wira");
		var file_foto_lingkungan_dom2 = localStorage.getItem("dok_jln_rmh_ush_nas_2_ss_wira");
		var inf_jarak_dom = $('#inp-jrk-dom-nas-muf-ss-wira').val().toUpperCase();

		informasi_tempat_tinggal = {
			alamat_dom: inf_alamat_dom,
			rt_dom: inf_rt_dom,
			rw_dom: inf_rw_dom,
			kode_pos_dom: inf_kode_pos_dom,
			kelurahan_code_dom: inf_kelurahan_code_dom,
			kelurahan_desc_dom: inf_kelurahan_desc_dom,
			kecamatan_code_dom: inf_kecamatan_code_dom,
			kecamatan_desc_dom: inf_kecamatan_desc_dom,
			kab_kot_code_dom: inf_kab_kot_code_dom,
			kab_kot_desc_dom: inf_kab_kot_desc_dom,
			prov_code_dom: inf_prov_code_dom,
			prov_desc_dom: inf_prov_desc_dom,
			flag_alamat_sesuai_dom: inf_flag_alamat_sesuai_dom,
			alamat_bu_sesuai: inf_alamat_bu_dom,
			rt_dom_sesuai: inf_rt_bu_dom,
			rw_dom_sesuai: inf_rw_bu_dom,
			kode_pos_dom_sesuai: inf_kode_pos_bu_dom,
			kelurahan_code_dom_sesuai: inf_kelurahan_code_bu_dom,
			kelurahan_desc_dom_sesuai: inf_kelurahan_desc_bu_dom,
			kecamatan_code_dom_sesuai: inf_kecamatan_code_bu_dom,
			kecamatan_desc_dom_sesuai: inf_kecamatan_desc_bu_dom,
			kab_kot_code_dom_sesuai: inf_kab_kot_code_bu_dom,
			kab_kot_desc_dom_sesuai: inf_kab_kot_desc_bu_dom,
			prov_code_dom_sesuai: inf_prov_code_bu_dom,
			prov_desc_dom_sesuai: inf_prov_desc_bu_dom,
			tempat_penyimpanan_code_dom: inf_tempat_penyimpanan_code_dom,
			tempat_penyimpanan_desc_dom: inf_tempat_penyimpanan_desc_dom,
			status_rumah_code_dom: inf_status_rumah_code_dom,
			status_rumah_desc_dom: inf_status_rumah_desc_dom,
			hubungan_nasabah_code_dom: inf_hubungan_nasabah_code_dom,
			hubungan_nasabah_desc_dom: inf_hubungan_nasabah_desc_dom,
			dok_bkr_dom: file_dok_bkr_dom,
			flag_lokasi_dom: inf_flag_lokasi_dom,
			foto_lokasi_dom1: file_foto_lokasi_dom1,
			foto_lokasi_dom2: file_foto_lokasi_dom2,
			flag_lingkungan_dom: inf_flag_lingkungan_dom,
			foto_lingkungan_dom1: file_foto_lingkungan_dom1,
			foto_lingkungan_dom2: file_foto_lingkungan_dom2,
			jarak_dom: inf_jarak_dom
		};

		
		console.log(informasi_tempat_tinggal);
	},
};












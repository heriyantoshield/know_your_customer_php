$(document).ready(function () {
	app.InformasiObjPembiayaanWiraTeleSurvey.init();
    localStorage.setItem("dok_bpkb_kend_ts_wira", "");
    localStorage.setItem("dok_stnk_kend_ts_wira", "");
    localStorage.setItem("dok_tab_obj_pembiayaan_ts_wira", "");
	localStorage.setItem("dok_spk_dealer_ts_wira", "");
	localStorage.setItem("dok_spk_karoseri_ts_wira", "");
	localStorage.setItem("dok_kend_tampak_depan_ts_wira", "");
	localStorage.setItem("dok_kend_tampak_belakang_ts_wira", "");
	localStorage.setItem("dok_kend_tampak_kanan_ts_wira", "");
	localStorage.setItem("dok_kend_tampak_kiri_ts_wira", "");
	localStorage.setItem("dok_kend_tampak_dalam_ts_wira", "");
	localStorage.setItem("dok_kend_tampak_panel_ts_wira", "");
	localStorage.setItem("dok_foto_nas_ttd_apl_ts_wira", "");
	localStorage.setItem("dok_foto_pas_ttd_apl_ts_wira", "");

});

app.InformasiObjPembiayaanWiraTeleSurvey = {
	controller: "Kyc/",
	api: "Kyc_api/",
	elm: {},
	message_hint: "Ketik untuk melakukan pencarian minimal 4 karakter",

	init: function () {
		var file = app.InformasiObjPembiayaanWiraTeleSurvey;

		
		var checkCaraBayar = false;

		
		$("#div-inp-account-no-obj-pembiayaan-ts-wira").hide();
		$("#div-inp-account-name-obj-pembiayaan-ts-wira").hide();
		$("#div-file-dok-tab-obj-pembiayaan-ts-wira").hide();
		$("#div-slc-bank-obj-pembiayaan-ts-wira").hide();
		$('#div-slc-pencairan-dana-ts-wira').hide();
		$("#div-slc-sumber-dana-ts-wira").hide();
		$("#div-txtarea-almt-pemakaian-unit-ts-wira").hide();
		$("#div-inp-kode-pos-pemakaian-unit-ts-wira").hide();
		$("#div-inp-kel-pemakaian-unit-ts-wira").hide();
		$("#div-inp-kec-pemakaian-unit-ts-wira").hide();
		$("#div-inp-kota-pemakaian-unit-ts-wira").hide();
		$("#div-inp-prov-pemakaian-unit-ts-wira").hide();
		$("#div-slc-warna-plat-ts-wira").hide();
		$("#div-slc-prod-marketing-ts-wira").hide();
		$("#div-file-kend-tampak-dpn-ts-wira").hide();
		$("#div-file-kend-tampak-blkng-ts-wira").hide();
		$("#div-file-kend-tampak-kanan-ts-wira").hide();
		$("#div-file-kend-tampak-kiri-ts-wira").hide();
		$("#div-file-kend-tampak-dalam-ts-wira").hide();
		$("#div-file-kend-tampak-panel-ts-wira").hide();
		$("#div-file-foto-pas-ttd-apl-ts-wira").hide();
	
		
		file.getWarnaPlat();
		file.getMarketingProduct();
		file.getPencairanDana();
	
		file.getSumberDanaDp();
		file.getKodePosPemakaianUnit();
		
	
	
		file.getBank();
		file.getCaraBayarAngsuran();
	
		file.validasiUploadBpkb();
		file.validasiUploadStnk();
		file.validasiUploadDocCoverTab();
		file.validasiUploadSpkDealer();
		file.validasiUploadSpkKaroseri();
		file.validasiUploadkendBelakang();
		file.validasiUploadkendDepan();
		file.validasiUploadkendKanan();
		file.validasiUploadkendKiri();
		file.validasiUploadkendDalam();
		file.validasiUploadkendPanel();
		file.validasiUploadNasTtdApl();
		file.validasiUploadNasPasTtdApl();
		file.viewData();


	

		$("#btn-save-obj-pembiayaan-ts-wira").click(function () {
			//Cara bayara angsuran
			var file = app.InformasiObjPembiayaanWiraTeleSurvey;
			
            var id_position;
            var err_count = 0;
            var errObjPembiayaan = 0;
			if (
				$("#slc-cara-byr-angsrn-obj-pembiayaan-ts-wira").val() == null ||
				$("#slc-cara-byr-angsrn-obj-pembiayaan-ts-wira").val() == ""
			) {
				$("#err-slc-cara-byr-angsrn-obj-pembiayaan-ts-wira").html("Cara Bayar Angsuran Wajib Diisi");
				$("#err-slc-cara-byr-angsrn-obj-pembiayaan-ts-wira").prop("hidden",false);
				$(".error-slc-cara-byr-angsrn-obj-pembiayaan-ts-wira").css({"border-color": "red"});
			
				if (id_position == null || id_position == "") {
                    id_position = '#div-slc-cara-byr-angsrn-ts-wira';
                }
                err_count = err_count + 1;
                errObjPembiayaan++;
			} else {
				$("#err-slc-cara-byr-angsrn-obj-pembiayaan-ts-wira").html("");
				$("#err-slc-cara-byr-angsrn-obj-pembiayaan-ts-wira").prop("hidden",true);
				$(".error-slc-cara-byr-angsrn-obj-pembiayaan-ts-wira").css({"border-color": ""});
				
				err_count = err_count - 1;
                errObjPembiayaan--;
			}
			//Validasi cara bayar angsuran
			if($('#slc-cara-byr-code-ts-wira').val() == '04'){
				if (
					$("#slc-bank-obj-pembiayaan-ts-wira").val() == null ||
					$("#slc-bank-obj-pembiayaan-ts-wira").val() == ""
				) {
					$("#err-slc-bank-obj-pembiayaan-ts-wira").html("Bank Wajib Diisi");
					$("#err-slc-bank-obj-pembiayaan-ts-wira").prop("hidden", false);
					$(".error-slc-bank-obj-pembiayaan-ts-wira").css({"border-color": "red",});

					if (id_position == null || id_position == "") {
						id_position = '#div-slc-bank-obj-pembiayaan-ts-wira';
					}
					err_count = err_count + 1;
					errObjPembiayaan++;
				} else {
					
					$("#err-slc-bank-obj-pembiayaan-ts-wira").prop("hidden", true).html('');
					$(".error-slc-bank-obj-pembiayaan-ts-wira").css({"border-color": ""});

					err_count = err_count - 1;
                errObjPembiayaan--;
				}

				if (
					$("#inp-account-no-obj-pembiayaan-ts-wira").val() == "" ||
					$("#iinp-account-no-obj-pembiayaan-ts-wira").val() == null
				) {
					$("#err-inp-account-no-obj-pembiayaan-ts-wira").html("Account No. Wajib Diisi");
					$("#err-inp-account-no-obj-pembiayaan-ts-wira").prop("hidden", false);
					$("input[id=inp-account-no-obj-pembiayaan-ts-wira]").css({"border-color": "red"});
					if (id_position == null || id_position == "") {
						id_position = '#div-inp-account-no-obj-pembiayaan-ts-wira';
					}
					err_count = err_count + 1;
					errObjPembiayaan++;
				} else {
					
					$("#err-inp-account-no-obj-pembiayaan-ts-wira").prop("hidden", true).html('');
					$("input[id=inp-account-no-obj-pembiayaan-ts-wira]").css({"border-color": ""});
					err_count = err_count - 1;
                errObjPembiayaan--;
				}

				if (
					$("#inp-account-name-obj-pembiayaan-ts-wira").val() == "" ||
					$("#iinp-account-name-obj-pembiayaan-ts-wira").val() == null
				) {
					$("#err-inp-account-name-obj-pembiayaan-ts-wira").html("Account Name Wajib Diisi");
					$("#err-inp-account-name-obj-pembiayaan-ts-wira").prop("hidden", false);
					$("input[id=inp-account-name-obj-pembiayaan-ts-wira]").css({"border-color": "red"});
					if (id_position == null || id_position == "") {
						id_position = '#div-inp-account-name-obj-pembiayaan-ts-wira';
					}
					err_count = err_count + 1;
					errObjPembiayaan++;
				} else {
					
					$("#err-inp-account-name-obj-pembiayaan-ts-wira").prop("hidden", true).html('');
					$("input[id=inp-account-name-obj-pembiayaan-ts-wira]").css({"border-color": ""});
					err_count = err_count - 1;
                errObjPembiayaan--;
				}

				if ($("#file-dok-tab-obj-pembiayaan-ts-wira").val() == "" || 
					$("#file-dok-tab-obj-pembiayaan-ts-wira").val() == null) {
					$("#err-file-dok-tab-obj-pembiayaan-ts-wira").html("Upload Buku Tabungan Wajib Diisi !");
					$("#err-file-dok-tab-obj-pembiayaan-ts-wira").prop("hidden", false);
					$("input[id=file-dok-tab-obj-pembiayaan-ts-wira]").css({ "border-color": "red" });
				
					if (id_position == null || id_position == "") {
						id_position = '#div-file-dok-tab-obj-pembiayaan-ts-wira';
					}
					err_count = err_count + 1;
					errObjPembiayaan++;
				} else {
					
					$("#err-file-dok-tab-obj-pembiayaan-ts-wira").prop("hidden", true).html('');
					$("input[id=file-dok-tab-obj-pembiayaan-ts-wira]").css({ "border-color": "" });
					err_count = err_count - 1;
					errObjPembiayaan--;
				}


			}
			if($("#inp-type-obj-pembiayaan-code-ts-wira").val() == "F002"){
				if (
					$("#slc-pencairan-dana-ts-wira").val() == null ||
					$("#slc-pencairan-dana-ts-wira").val() == ""
				) {
					$("#err-slc-pencairan-dana-ts-wira").html("Pencairan Dana Wajib Diisi");
					$("#err-slc-pencairan-dana-ts-wira").prop("hidden", false);
					$(".error-slc-pencairan-dana-ts-wira").css({"border-color": "red",});

					if (id_position == null || id_position == "") {
						id_position = '#div-slc-pencairan-dana-ts-wira';
					}
					err_count = err_count + 1;
					errObjPembiayaan++;
				} else {
					
					$("#err-slc-pencairan-dana-ts-wira").prop("hidden", true).html('');
					$(".error-slc-pencairan-dana-ts-wira").css({"border-color": ""});
					err_count = err_count - 1;
                errObjPembiayaan--;
				}

				if (
					$("#slc-sumber-dana-ts-wira").val() == null ||
					$("#slc-sumber-dana-ts-wira").val() == ""
				) {
					$("#err-slc-sumber-dana-ts-wira").html("Sumber Dana Wajib Diisi");
					$("#err-slc-sumber-dana-ts-wira").prop("hidden", false);
					$(".error-slc-sumber-dana-ts-wira").css({"border-color": "red",});

					if (id_position == null || id_position == "") {
						id_position = '#div-slc-sumber-dana-ts-wira';
					}
					err_count = err_count + 1;
					errObjPembiayaan++;
				} else {
					
					$("#err-slc-sumber-dana-ts-wira").prop("hidden", true).html('');
					$(".error-slc-sumber-dana-ts-wira").css({"border-color": ""});

					err_count = err_count - 1;
                errObjPembiayaan--;
				}
			}
			if ($("#inp-flag-the-road-ts-wira").val() == "Y") {
				if (
					$("#txtarea-almt-pemakaian-unit-ts-wira").val() == null ||
					$("#txtarea-almt-pemakaian-unit-ts-wira").val() == ""
				) {
					$("#err-txtarea-almt-pemakaian-unit-ts-wira")
						.prop("hidden", false)
						.html("Alamat Pemakaian Unit Wajib Diisi !");
					$(".error-txtarea-almt-pemakaian-unit-ts-wira").css({
						"border-color": "red",
					});

					if (id_position == null || id_position == "") {
						id_position = '#div-txtarea-almt-pemakaian-unit-ts-wira';
					}
					err_count = err_count + 1;
					errObjPembiayaan++;
				}else{
					$("#err-txtarea-almt-pemakaian-unit-ts-wira")
						.prop("hidden", true)
						.html("");
					$(".error-txtarea-almt-pemakaian-unit-ts-wira").css({
						"border-color": "",
					});

					err_count = err_count - 1;
					errObjPembiayaan--;
				}
			
				if (
					$("#inp-kode-pos-pemakaian-unit-ts-wira").val() == null ||
					$("#inp-kode-pos-pemakaian-unit-ts-wira").val() == ""
				) {
					$("#err-inp-kode-pos-pemakaian-unit-ts-wira")
						.prop("hidden", false)
						.html("Kode Pos Domisili Wajib Diisi !");
					$(".error-inp-kode-pos-pemakaian-unit-ts-wira").css({
						"border-color": "red",
					});

					if (id_position == null || id_position == "") {
						id_position = '#div-inp-kode-pos-pemakaian-unit-ts-wira';
					}
					err_count = err_count + 1;
					errObjPembiayaan++;
				}else{
					$("#err-inp-kode-pos-pemakaian-unit-ts-wira")
						.prop("hidden", true)
						.html("");
					$(".error-inp-kode-pos-pemakaian-unit-ts-wira").css({
						"border-color": "",
					});

					err_count = err_count - 1;
                	errObjPembiayaan--;
				}
				if (
					$("#inp-kel-pemakaian-unit-ts-wira").val() == null ||
					$("#inp-kel-pemakaian-unit-ts-wira").val() == ""
				) {
					$("#err-inp-kel-pemakaian-unit-ts-wira")
						.prop("hidden", false)
						.html("Kelurahan Domisili Wajib Diisi !");
					$(".error-inp-kel-pemakaian-unit-ts-wira").css({
						"border-color": "red",
					});

					if (id_position == null || id_position == "") {
						id_position = '#div-inp-kel-pemakaian-unit-ts-wira';
					}
					err_count = err_count + 1;
					errObjPembiayaan++;
				}else{
					$("#err-inp-kel-pemakaian-unit-ts-wira")
						.prop("hidden", true)
						.html("");
					$(".error-inp-kel-pemakaian-unit-ts-wira").css({
						"border-color": "",
					});

					err_count = err_count - 1;
                	errObjPembiayaan--;
				}
				if (
					$("#inp-kec-pemakaian-unit-ts-wira").val() == null ||
					$("#inp-kec-pemakaian-unit-ts-wira").val() == ""
				) {
					$("#err-inp-kec-pemakaian-unit-ts-wira")
						.prop("hidden", false)
						.html("Kecamatan Domisili Wajib Diisi !");
					$(".error-inp-kec-pemakaian-unit-ts-wira").css({
						"border-color": "red",
					});

					if (id_position == null || id_position == "") {
						id_position = '#div-inp-kec-pemakaian-unit-ts-wira';
					}
					err_count = err_count + 1;
					errObjPembiayaan++;
				}else{
					$("#err-inp-kec-pemakaian-unit-ts-wira")
						.prop("hidden", true)
						.html("");
					$(".error-inp-kec-pemakaian-unit-ts-wira").css({
						"border-color": "",
					});

					err_count = err_count - 1;
                	errObjPembiayaan--;
				}
				if (
					$("#inp-kota-pemakaian-unit-ts-wira").val() == null ||
					$("#inp-kota-pemakaian-unit-ts-wira").val() == ""
				) {
					$("#err-inp-kota-pemakaian-unit-ts-wira")
						.prop("hidden", false)
						.html("Kota Domisili Wajib Diisi !");
					$(".error-inp-kota-pemakaian-unit-ts-wira").css({
						"border-color": "red",
					});

					if (id_position == null || id_position == "") {
						id_position = '#div-inp-kota-pemakaian-unit-ts-wira';
					}
					err_count = err_count + 1;
					errObjPembiayaan++;
				}else{
					$("#err-inp-kota-pemakaian-unit-ts-wira")
						.prop("hidden", true)
						.html("");
					$(".error-inp-kota-pemakaian-unit-ts-wira").css({
						"border-color": "",
					});

					err_count = err_count - 1;
                	errObjPembiayaan--;
				}
				if (
					$("#inp-prov-pemakaian-unit-ts-wira").val() == null ||
					$("#inp-prov-pemakaian-unit-ts-wira").val() == ""
				) {
					$("#err-inp-prov-pemakaian-unit-ts-wira")
						.prop("hidden", false)
						.html("Provinsi Domisili Wajib Diisi !");
					$(".error-inp-prov-pemakaian-unit-ts-wira").css({
						"border-color": "red",
					});

					if (id_position == null || id_position == "") {
						id_position = '#div-inp-prov-pemakaian-unit-ts-wira';
					}
					err_count = err_count + 1;
					errObjPembiayaan++;
				}else{
					$("#err-inp-prov-pemakaian-unit-ts-wira")
						.prop("hidden", true)
						.html("");
					$(".error-inp-prov-pemakaian-unit-ts-wira").css({
						"border-color": "",
					});

					err_count = err_count - 1;
                	errObjPembiayaan--;
				}
			}
			if($("#inp-source-form-code-ts-wira").val() == "EFDIG" || $("#inp-source-form-code-ts-wira").val() == "LFORM"){
				if (
					$("#slc-warna-plat-ts-wira").val() == null ||
					$("#slc-warna-plat-ts-wira").val() == ""
				) {
					$("#err-slc-warna-plat-ts-wira").html("Warna Plat Wajib Diisi");
					$("#err-slc-warna-plat-ts-wira").prop("hidden", false);
					$(".error-slc-warna-plat-ts-wira").css({"border-color": "red",});

					if (id_position == null || id_position == "") {
						id_position = '#div-slc-warna-plat-ts-wira';
					}
					err_count = err_count + 1;
					errObjPembiayaan++;
				} else {
					
					$("#err-slc-warna-plat-ts-wira").prop("hidden", true).html('');
					$(".error-slc-warna-plat-ts-wira").css({"border-color": ""});
					err_count = err_count - 1;
					errObjPembiayaan--;
				}

				if (
					$("#slc-prod-marketing-ts-wira").val() == null ||
					$("#slc-prod-marketing-ts-wira").val() == ""
				) {
					$("#err-slc-prod-marketing-ts-wira").html("Produk Marketing Wajib Diisi");
					$("#err-slc-prod-marketing-ts-wira").prop("hidden", false);
					$(".error-slc-prod-marketing-ts-wira").css({"border-color": "red",});

					if (id_position == null || id_position == "") {
						id_position = '#div-slc-prod-marketing-ts-wira';
					}
					err_count = err_count + 1;
					errObjPembiayaan++;
				} else {
					
					$("#err-slc-prod-marketing-ts-wira").prop("hidden", true).html('');
					$(".error-slc-prod-marketing-ts-wira").css({"border-color": ""});
					err_count = err_count - 1;
					errObjPembiayaan--;
				}
			}

			if($("#inp-type-obj-pembiayaan-code-ts-wira").val() == "F002" && ($("#inp-obj-code-ts-wira").val() == "002") || $("#inp-obj-code-ts-wira").val() == "004"){
				
				if ($("#file-kend-tampak-dpn-ts-wira").val() == "" || 
					$("#file-kend-tampak-dpn-ts-wira").val() == null) {
					$("#err-file-kend-tampak-dpn-ts-wira").html("Foto kendaraan Tampak Depan Wajib Diisi !");
					$("#err-file-kend-tampak-dpn-ts-wira").prop("hidden", false);
					$("input[id=file-kend-tampak-dpn-ts-wira]").css({ "border-color": "red" });
				
					if (id_position == null || id_position == "") {
						id_position = '#div-file-kend-tampak-dpn-ts-wira';
					}
					err_count = err_count + 1;
					errObjPembiayaan++;
				} else {
					
					$("#err-file-kend-tampak-dpn-ts-wira").prop("hidden", true).html('');
					$("input[id=file-kend-tampak-dpn-ts-wira]").css({ "border-color": "" });
					err_count = err_count - 1;
					errObjPembiayaan--;
				}

				if ($("#file-kend-tampak-blkng-ts-wira").val() == "" || 
					$("#file-kend-tampak-blkng-ts-wira").val() == null) {
					$("#err-file-kend-tampak-blkng-ts-wira").html("Foto kendaraan Tampak Belakang Wajib Diisi !");
					$("#err-file-kend-tampak-blkng-ts-wira").prop("hidden", false);
					$("input[id=file-kend-tampak-blkng-ts-wira]").css({ "border-color": "red" });
				
					if (id_position == null || id_position == "") {
						id_position = '#div-file-kend-tampak-blkng-ts-wira';
					}
					err_count = err_count + 1;
					errObjPembiayaan++;
				} else {
					
					$("#err-file-kend-tampak-blkng-ts-wira").prop("hidden", true).html('');
					$("input[id=file-kend-tampak-blkng-ts-wira]").css({ "border-color": "" });
					err_count = err_count - 1;
					errObjPembiayaan--;
				}

				if ($("#file-kend-tampak-kanan-ts-wira").val() == "" || 
					$("#file-kend-tampak-kanan-ts-wira").val() == null) {
					$("#err-file-kend-tampak-kanan-ts-wira").html("Foto kendaraan Tampak Kanan Wajib Diisi !");
					$("#err-file-kend-tampak-kanan-ts-wira").prop("hidden", false);
					$("input[id=file-kend-tampak-kanan-ts-wira]").css({ "border-color": "red" });
				
					if (id_position == null || id_position == "") {
						id_position = '#div-file-kend-tampak-kanan-ts-wira';
					}
					err_count = err_count + 1;
					errObjPembiayaan++;
				} else {
					
					$("#err-file-kend-tampak-kanan-ts-wira").prop("hidden", true).html('');
					$("input[id=file-kend-tampak-kanan-ts-wira]").css({ "border-color": "" });
					err_count = err_count - 1;
					errObjPembiayaan--;
				}
				
				if ($("#file-kend-tampak-kiri-ts-wira").val() == "" || 
					$("#file-kend-tampak-kiri-ts-wira").val() == null) {
					$("#err-file-kend-tampak-kiri-ts-wira").html("Foto kendaraan Tampak Kiri Wajib Diisi !");
					$("#err-file-kend-tampak-kiri-ts-wira").prop("hidden", false);
					$("input[id=file-kend-tampak-kiri-ts-wira]").css({ "border-color": "red" });
				
					if (id_position == null || id_position == "") {
						id_position = '#div-file-kend-tampak-kiri-ts-wira';
					}
					err_count = err_count + 1;
					errObjPembiayaan++;
				} else {
					
					$("#err-file-kend-tampak-kiri-ts-wira").prop("hidden", true).html('');
					$("input[id=file-kend-tampak-kiri-ts-wira]").css({ "border-color": "" });
					err_count = err_count - 1;
					errObjPembiayaan--;
				}

				if ($("#file-kend-tampak-dalam-ts-wira").val() == "" || 
					$("#file-kend-tampak-dalam-ts-wira").val() == null) {
					$("#err-file-kend-tampak-dalam-ts-wira").html("Foto kendaraan Tampak Dalam Wajib Diisi !");
					$("#err-file-kend-tampak-dalam-ts-wira").prop("hidden", false);
					$("input[id=file-kend-tampak-dalam-ts-wira]").css({ "border-color": "red" });
				
					if (id_position == null || id_position == "") {
						id_position = '#div-file-kend-tampak-dalam-ts-wira';
					}
					err_count = err_count + 1;
					errObjPembiayaan++;
				} else {
					
					$("#err-file-kend-tampak-dalam-ts-wira").prop("hidden", true).html('');
					$("input[id=file-kend-tampak-dalam-ts-wira]").css({ "border-color": "" });
					err_count = err_count - 1;
					errObjPembiayaan--;
				}
				
				if ($("#file-kend-tampak-panel-ts-wira").val() == "" || 
					$("#file-kend-tampak-panel-ts-wira").val() == null) {
					$("#err-file-kend-tampak-panel-ts-wira").html("Foto kendaraan Tampak Panel Wajib Diisi !");
					$("#err-file-kend-tampak-panel-ts-wira").prop("hidden", false);
					$("input[id=file-kend-tampak-panel-ts-wira]").css({ "border-color": "red" });
				
					if (id_position == null || id_position == "") {
						id_position = '#div-file-kend-tampak-panel-ts-wira';
					}
					err_count = err_count + 1;
					errObjPembiayaan++;
				} else {
					
					$("#err-file-kend-tampak-panel-ts-wira").prop("hidden", true).html('');
					$("input[id=file-kend-tampak-panel-ts-wira]").css({ "border-color": "" });
					err_count = err_count - 1;
					errObjPembiayaan--;
				}
	
			}

				if ($("#file-foto-nas-ttd-apl-ts-wira").val() == "" || 
					$("#file-foto-nas-ttd-apl-ts-wira").val() == null) {
					$("#err-file-foto-nas-ttd-apl-ts-wira").html("Foto saat Nasabah tanda tangan aplikasi Wajib Diisi !");
					$("#err-file-foto-nas-ttd-apl-ts-wira").prop("hidden", false);
					$("input[id=file-foto-nas-ttd-apl-ts-wira]").css({ "border-color": "red" });
				
					if (id_position == null || id_position == "") {
						id_position = '#div-file-foto-nas-ttd-apl-ts-wira';
					}
					err_count = err_count + 1;
					errObjPembiayaan++;
				} else {
					
					$("#err-file-foto-nas-ttd-apl-ts-wira").prop("hidden", true).html('');
					$("input[id=file-foto-nas-ttd-apl-ts-wira]").css({ "border-color": "" });
					err_count = err_count - 1;
					errObjPembiayaan--;
				}

				if (err_count > 0) {
					$('html, body').animate({
					 scrollTop: $(id_position).offset().top
					}, 800);
				} else {

					file.jsonSubmitObjPembiayaan();
				}
			
			
		});

		
	},

	viewData: function(){
	
		var file = app.InformasiObjPembiayaanWiraTeleSurvey;
		

		if($("#inp-type-obj-pembiayaan-code-ts-wira").val() == "F002"){
		
			$('#div-slc-pencairan-dana-ts-wira').show();
			$("#div-slc-sumber-dana-ts-wira").show();
		}

		if($("#inp-source-form-code-ts-wira").val() == "EFDIG" || $("#inp-source-form-code-ts-wira").val() == "LFORM"){
			$("#div-slc-warna-plat-ts-wira").show();
			$("#div-slc-prod-marketing-ts-wira").show();

		}

		if($("#inp-flag-the-road-ts-wira").val() == "Y"){
			$("#div-txtarea-almt-pemakaian-unit-ts-wira").show();
			$("#div-inp-kode-pos-pemakaian-unit-ts-wira").show();
			$("#div-inp-kel-pemakaian-unit-ts-wira").show();
			$("#div-inp-kec-pemakaian-unit-ts-wira").show();
			$("#div-inp-kota-pemakaian-unit-ts-wira").show();
			$("#div-inp-prov-pemakaian-unit-ts-wira").show();
		}

		if($("#inp-type-obj-pembiayaan-code-ts-wira").val() == "F002" && ($("#inp-obj-code-ts-wira").val() == "002") || $("#inp-obj-code-ts-wira").val() == "004"){
			$("#div-file-kend-tampak-dpn-ts-wira").show();
			$("#div-file-kend-tampak-blkng-ts-wira").show();
			$("#div-file-kend-tampak-kanan-ts-wira").show();
			$("#div-file-kend-tampak-kiri-ts-wira").show();
			$("#div-file-kend-tampak-dalam-ts-wira").show();
			$("#div-file-kend-tampak-panel-ts-wira").show();
		
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


	//---------------------------- Object Pembiayaan
	getCaraBayarAngsuran: function () {
		var file = app.InformasiObjPembiayaanWiraTeleSurvey;

		$.ajax({
			url: app.base_url + file.api + "getCaraBayar",
			async: false,
			success: function (response) {
				if (response.status) {
					var hasil = response.result.map(function (result) {
						return {
							id: result.payment_code + "," + result.payment_desc,
							text: result.payment_desc,
						};
					});
				}

				$("#slc-cara-byr-angsrn-obj-pembiayaan-ts-wira")
					.select2({
						theme: "bootstrap4",
						placeholder: "PILIH CARA BAYAR",
						allowClear: true,
						cache: true,
						data: hasil,
						containerCssClass:
							"error-slc-cara-byr-angsrn-obj-pembiayaan-ts-wira",
						processResults: function (response) {
							var data = response.result.map(function (value) {
								return {
									id: value.payment_code + "," + value.payment_desc,
									text: value.payment_desc,
								};
							});
							return {
								results: data,
							};
						},
					})
					.change(function () {
						var str = $(
							"#slc-cara-byr-angsrn-obj-pembiayaan-ts-wira option:selected"
						).val();
						var data = str.split(",");
						$("#inp-cara-byr-code-ts-wira").val(data[0]);
						$("#inp-cara-byr-desc-ts-wira").val(data[1]);
						$("#slc-bank-obj-pembiayaan-ts-wira").val("").trigger("change");
						file.getBank();
						if ($("#inp-cara-byr-code-ts-wira").val() == 04) {
							file.checkCaraBayar = true;
						} else if ($("#inp-cara-byr-code-ts-wira").val() != 04) {
							file.checkCaraBayar = false;
						}
						file.validationViewAccount();
					});
			},
		});
	},

	validationViewAccount: function () {
		var file = app.InformasiObjPembiayaanWiraTeleSurvey;
		if (file.checkCaraBayar == true) {
			$("#div-inp-account-no-obj-pembiayaan-ts-wira").show();
			$("#div-inp-account-name-obj-pembiayaan-ts-wira").show();
			$("#div-file-dok-tab-obj-pembiayaan-ts-wira").show();
			$("#div-slc-bank-obj-pembiayaan-ts-wira").show();
		} else if (file.checkCaraBayar == false) {
			$("#div-inp-account-no-obj-pembiayaan-ts-wira").hide();
			$("#div-inp-account-name-obj-pembiayaan-ts-wira").hide();
			$("#div-file-dok-tab-obj-pembiayaan-ts-wira").hide();
			$("#div-slc-bank-obj-pembiayaan-ts-wira").hide();
		}
	},
	getWarnaPlat: function () {
		var file = app.InformasiObjPembiayaanWiraTeleSurvey;

		$.ajax({
			url: app.base_url + file.api + "getAllWarnaPlat",
			async: false,
			success: function (response) {
				if (response.status) {
					var hasil = response.data.map(function (result) {
						return {
							id: result.plate_color_id + "," + result.plate_color_desc,
							text: result.plate_color_desc,
						};
					});
				}

				$("#slc-warna-plat-ts-wira").select2({
					theme: "bootstrap4",
					placeholder: "PILIH WARNA PLAT",
					allowClear: true,
					cache: true,
					data: hasil,
					containerCssClass: "error-slc-warna-plat-ts-wira",
					processResults: function (response) {
						return {
							results: response.data.map(function (value) {
								return {
									id: value.plate_color_id + "," + value.plate_color_desc,
									text: value.plate_color_desc,
								};
							}),
						};
					},
				}).change(function () {
					var str = $('#slc-warna-plat-ts-wira option:selected').val();
					var data = str.split(',');
					$('#inp-warna-plat-code-ts-wira').val(data[0]);
					$('#inp-warna-plat-desc-ts-wira').val(data[1]);
				})
			},
		});
	},

	getPencairanDana: function () {
		var file = app.InformasiObjPembiayaanWiraTeleSurvey;

		$.ajax({
			url: app.base_url + file.api + "getPencairanDana",
			async: false,
			success: function (response) {
				if (response.status) {
					var hasil = response.result.map(function (result) {
						return {
							id: result.pencairanDanaId + "," + result.pencairanDanaDesc,
							text: result.pencairanDanaDesc,
						};
					});
				}

				$("#slc-pencairan-dana-ts-wira").select2({
					theme: "bootstrap4",
					placeholder: "PILIH PENCAIRAN DANA",
					allowClear: true,
					cache: true,
					data: hasil,
					containerCssClass: "error-slc-pencairan-dana-ts-wira",
					processResults: function (response) {
						var data = response.result.map(function (value) {
							return {
								id: value.pencairanDanaId + "," + value.pencairanDanaDesc,
								text: value.pencairanDanaDesc,
							};
						});
						return {
							results: data,
						};
					},
				}).change(function () {
					var str = $('#slc-pencairan-dana-ts-wira option:selected').val();
					var data = str.split(',');
					$('#inp-pencairan-dana-code-ts-wira').val(data[0]);
					$('#inp-pencairan-dana-desc-ts-wira').val(data[1]);
				})
			},
		});
	},
	getSumberDanaDp: function () {
		var file = app.InformasiObjPembiayaanWiraTeleSurvey;

		$.ajax({
			url: app.base_url + file.api + "getSumberDanaDp",
			async: false,
			success: function (response) {
				if (response.status) {
					var hasil = response.result.map(function (result) {
						return {
							id: result.dpSourceId + "," + result.dpSourceDesc,
							text: result.dpSourceDesc,
						};
					});
				}

				$("#slc-sumber-dana-ts-wira").select2({
					theme: "bootstrap4",
					placeholder: "PILIH SUMBER DANA",
					allowClear: true,
					cache: true,
					data: hasil,
					containerCssClass: "error-slc-sumber-dana-ts-wira",
					processResults: function (response) {
						var data = response.result.map(function (value) {
							return {
								id: value.dpSourceId + "," + value.dpSourceDesc,
								text: value.dpSourceDesc,
							};
						});
						return {
							results: data,
						};
					},
				}).change(function () {
					var str = $('#slc-sumber-dana-ts-wira option:selected').val();
					var data = str.split(',');
					$('#inp-sumber-dana-code-ts-wira').val(data[0]);
					$('#inp-sumber-dana-desc-ts-wira').val(data[1]);
				})
			},
		});
	},
	getMarketingProduct: function () {
		var file = app.InformasiObjPembiayaanWiraTeleSurvey;
		var jsonPost = {
			channel_code: "04",
			fin_purpose_code: "01",
		};
		$("#slc-prod-marketing-ts-wira").select2({
			theme: "bootstrap4",
			placeholder: "PILIH MARKETING PRODUCT",
			allowClear: true,
			containerCssClass: "error-slc-prod-marketing-ts-wira",
			ajax: {
				dataType: "json",
				cache: true,
				url: app.base_url + file.api + "getMarketingProduct",
				type: "POST",
				data: {
					value: jsonPost,
				},
				processResults: function (response) {
					var json = $.parseJSON(response);
					console.log(json);
					var data = json.data.map(function (value) {
						return {
							id: value.mkt_product_code+ "," + value.mkt_product_desc,
							text: value.mkt_product_desc,
						};
					});
					return {
						results: data,
					};
				},
			},
		}).change(function () {
			var str = $('#slc-prod-marketing-ts-wira option:selected').val();
			var data = str.split(',');
			$('#inp-prod-marketing-code-ts-wira').val(data[0]);
			$('#inp-prod-marketing-desc-ts-wira').val(data[1]);
		})
	},

	getBank: function () {
		var file = app.InformasiObjPembiayaanWiraTeleSurvey;
		var param = null;
		if ($("#slc-cara-bayar-code-ts-wira").val() == 04) {
			param = "AUTODEBET";
		}
		var jsonBank = {
			bank_type: param,
		};
		$("#slc-bank-obj-pembiayaan-ts-wira")
			.select2({
				theme: "bootstrap4",
				placeholder: "PILIH BANK",
				allowClear: true,
				containerCssClass: "error-slc-bank-obj-pembiayaan-ts-wira",
				ajax: {
					dataType: "json",
					cache: true,
					url: app.base_url + file.api + "getBank",
					type: "POST",
					data: {
						value: jsonBank,
					},
					processResults: function (response) {
						var json = $.parseJSON(response);
						var data = json.data.map(function (value) {
							return {
								id: value.bank_code + "," + value.bank_name,
								text: value.bank_name,
							};
						});
						return {
							results: data,
						};
					},
				},
			})
			.change(function () {
				var str = $(
					"#div-slc-bank-obj-pembiayaan-ts-wira option:selected"
				).val();
				var data = str.split(",");
				$("#inp-bank-code-ts-wira").val(data[0]);
				$("#inp-bank-desc-ts-wira").val(data[1]);
			});
	},

	getKodePosPemakaianUnit: function () {
		var file = app.InformasiObjPembiayaanWiraTeleSurvey;
		$("#inp-kode-pos-pemakaian-unit-ts-wira")
			.select2({
				theme: "bootstrap4",
				placeholder: "PILIH KODE POS",
				allowClear: true,
				// data: xdata,
				minimumInputLength: 4,
				containerCssClass: "error-inp-kode-pos-pemakaian-unit-ts-wira",
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
				var file = app.InformasiObjPembiayaanWiraTeleSurvey;
				var zip_code = $("#inp-kode-pos-pemakaian-unit-ts-wira").val();
				if (!zip_code == null || !zip_code == "") {
					file.changeKodePosPemakaianUnit();
				}
			});
	},
	changeKodePosPemakaianUnit: function () {
		var valueAll = $("#inp-kode-pos-pemakaian-unit-ts-wira").val();
		var arrValueAllSplit = valueAll.split(",");
		$('#inp-kode-pos-pemakaian-unit-code-ts-wira').val(arrValueAllSplit[0]);
		var data = [];
		data.push({
			"KELURAHAN_ID": arrValueAllSplit[1],
			"KELURAHAN_NAME": arrValueAllSplit[2],
			"KECAMATAN_ID": arrValueAllSplit[3],
			"KECAMATAN_NAME": arrValueAllSplit[4],
			"KABKOT_ID": arrValueAllSplit[5],
			"KABKOT_NAME": arrValueAllSplit[6],
			"PROVINSI_ID": arrValueAllSplit[7],
			"PROVINSI_NAME": arrValueAllSplit[8],
		});
		var dataKelurahan = data.map(function (obj) {
			$('#inp-kel-pemakaian-unit-code-ts-wira').val(obj.KELURAHAN_ID)
			$('#inp-kel-pemakaian-unit-desc-ts-wira').val(obj.KELURAHAN_NAME)
			return {
				id: obj.KELURAHAN_ID,
				text: obj.KELURAHAN_NAME,
			};
		});
		var dataKecamatan = data.map(function (obj) {
			$('#inp-kec-pemakaian-unit-code-ts-wira').val(obj.KECAMATAN_ID)
			$('#inp-kec-pemakaian-unit-desc-ts-wira').val(obj.KECAMATAN_NAME)
			return {
				id: obj.KECAMATAN_ID,
				text: obj.KECAMATAN_NAME,
			};
		});
		var dataKabKot = data.map(function (obj) {
			$('#inp-kota-pemakaian-unit-code-ts-wira').val(obj.KABKOT_ID)
			$('#inp-kota-pemakaian-unit-desc-ts-wira').val(obj.KABKOT_NAME)
			return {
				id: obj.KABKOT_ID,
				text: obj.KABKOT_NAME,
			};
		});
		var dataProvinsi = data.map(function (obj) {
			$('#inp-prov-pemakaian-unit-code-ts-wira').val(obj.PROVINSI_ID)
			$('#inp-prov-pemakaian-unit-desc-ts-wira').val(obj.PROVINSI_NAME)
			return {
				id: obj.PROVINSI_ID,
				text: obj.PROVINSI_NAME,
			};
		});
		$("#inp-kel-pemakaian-unit-ts-wira")
			.select2({
				theme: "bootstrap4",
				tags: true,
				placeholder: "PILIH KELURAHAN",
				allowClear: true,
				data: dataKelurahan,
			})
			.val(data[0]["KELURAHAN_ID"])
			.trigger("change");
		$("#inp-kec-pemakaian-unit-ts-wira")
			.select2({
				theme: "bootstrap4",
				tags: true,
				placeholder: "PILIH KECAMATAN",
				allowClear: true,
				data: dataKecamatan,
			})
			.val(data[0]["KECAMATAN_ID"])
			.trigger("change");
		$("#inp-kota-pemakaian-unit-ts-wira")
			.select2({
				theme: "bootstrap4",
				tags: true,
				placeholder: "PILIH KAB/KOT",
				allowClear: true,
				data: dataKabKot,
			})
			.val(data[0]["KABKOT_ID"])
			.trigger("change");
		$("#inp-prov-pemakaian-unit-ts-wira")
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

	validasiUploadBpkb: function () {
		var file = app.InformasiObjPembiayaanWiraTeleSurvey;

		$("#file-bpkb-kend-ts-wira").change(function () {
			var fileUpload = document.querySelector("#file-bpkb-kend-ts-wira")[
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
				$("#file-bpkb-kend-ts-wira").val("");
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
				$("#file-bpkb-kend-ts-wira").val("");
			} else if (arrType[1] == "PDF" || arrType[1] == "pdf") {
				file.convertFileBpkb(fileUpload);
			} else {
				file.uploadFileBpkb(fileUpload);
			}
		});
	},
	convertFileBpkb: function (fileUpload) {
		var fileReader = new FileReader();
		var base64;
		fileReader.onload = function (fileLoadedEvent) {
			base64 = fileLoadedEvent.target.result.replace("data:", "").replace(/^.+,/, "");
			console.log("BASE PDF BP 2", base64);
			localStorage.setItem("dok_bpkb_kend_ts_wira", base64);
		};
		fileReader.readAsDataURL(fileUpload);
		
	},
	uploadFileBpkb: function (fileUpload) {
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
				localStorage.setItem("dok_bpkb_kend_ts_wira", base64String);
			};
			image.src = event.target.result;
		};
		reader.readAsDataURL(fileUpload);
	},
	validasiUploadStnk: function () {
		var file = app.InformasiObjPembiayaanWiraTeleSurvey;

		$("#file-stnk-kend-ts-wira").change(function () {
			var fileUpload = document.querySelector("#file-stnk-kend-ts-wira")[
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
				$("#file-stnk-kend-ts-wira").val("");
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
				$("#file-stnk-kend-ts-wira").val("");
			} else if (arrType[1] == "PDF" || arrType[1] == "pdf") {
				file.convertFileStnk(fileUpload);
			} else {
				file.uploadFileStnk(fileUpload);
			}
		});
	},
	convertFileStnk: function (fileUpload) {
		var fileReader = new FileReader();
		var base64;
		fileReader.onload = function (fileLoadedEvent) {
			base64 = fileLoadedEvent.target.result.replace("data:", "").replace(/^.+,/, "");
			console.log("BASE PDF BP 2", base64);
			localStorage.setItem("dok_stnk_kend_ts_wira", base64);
		};
		fileReader.readAsDataURL(fileUpload);
		
	},
	uploadFileStnk: function (fileUpload) {
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
				localStorage.setItem("dok_stnk_kend_ts_wira", base64String);
			};
			image.src = event.target.result;
		};
		reader.readAsDataURL(fileUpload);
	},
	validasiUploadDocCoverTab: function () {
		var file = app.InformasiObjPembiayaanWiraTeleSurvey;

		$("#file-dok-tab-obj-pembiayaan-ts-wira").change(function () {
			var fileUpload = document.querySelector(
				"#file-dok-tab-obj-pembiayaan-ts-wira"
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
				$("#file-dok-tab-obj-pembiayaan-ts-wira").val("");
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
				$("#file-dok-tab-obj-pembiayaan-ts-wira").val("");
			} else if (arrType[1] == "PDF" || arrType[1] == "pdf") {
				file.convertFileDocCoverTab(fileUpload);
			} else {
				file.uploadFileDocCoverTab(fileUpload);
			}
		});
	},
	convertFileDocCoverTab: function (fileUpload) {
		var fileReader = new FileReader();
		var base64;
		fileReader.onload = function (fileLoadedEvent) {
			base64 = fileLoadedEvent.target.result.replace("data:", "").replace(/^.+,/, "");
			console.log("BASE PDF BP 2", base64);
			localStorage.setItem(
				"dok_tab_obj_pembiayaan_ts_wira",
				base64
			);
		};
		fileReader.readAsDataURL(fileUpload);
		
	},
	uploadFileDocCoverTab: function (fileUpload) {
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
					"dok_tab_obj_pembiayaan_ts_wira",
					base64String
				);
			};
			image.src = event.target.result;
		};
		reader.readAsDataURL(fileUpload);
	},
	validasiUploadSpkDealer: function () {
		var file = app.InformasiObjPembiayaanWiraTeleSurvey;

		$("#file-spk-dealer-ts-wira").change(function () {
			var fileUpload = document.querySelector("#file-spk-dealer-ts-wira")[
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
				$("#file-spk-dealer-ts-wira").val("");
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
				$("#file-spk-dealer-ts-wira").val("");
			} else if (arrType[1] == "PDF" || arrType[1] == "pdf") {
				file.convertFileSpkDealer(fileUpload);
			} else {
				file.uploadFileSpkDealer(fileUpload);
			}
		});
	},
	convertFileSpkDealer: function (fileUpload) {
		var fileReader = new FileReader();
		var base64;
		fileReader.onload = function (fileLoadedEvent) {
			base64 = fileLoadedEvent.target.result.replace("data:", "").replace(/^.+,/, "");
			console.log("BASE PDF BP 2", base64);
			localStorage.setItem("dok_spk_dealer_ts_wira", base64);
		};
		fileReader.readAsDataURL(fileUpload);
		
	},
	uploadFileSpkDealer: function (fileUpload) {
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
				localStorage.setItem("dok_spk_dealer_ts_wira", base64String);
			};
			image.src = event.target.result;
		};
		reader.readAsDataURL(fileUpload);
	},
	validasiUploadSpkKaroseri: function () {
		var file = app.InformasiObjPembiayaanWiraTeleSurvey;

		$("#file-spk-karoseri-ts-wira").change(function () {
			var fileUpload = document.querySelector("#file-spk-karoseri-ts-wira")[
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
				$("#file-spk-karoseri-ts-wira").val("");
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
				$("#file-spk-karoseri-ts-wira").val("");
			} else if (arrType[1] == "PDF" || arrType[1] == "pdf") {
				file.convertFileSpkKaroseri(fileUpload);
			} else {
				file.uploadFileSpkKaroseri(fileUpload);
			}
		});
	},
	convertFileSpkKaroseri: function (fileUpload) {
		var fileReader = new FileReader();
		var base64;
		fileReader.onload = function (fileLoadedEvent) {
			base64 = fileLoadedEvent.target.result.replace("data:", "").replace(/^.+,/, "");
			console.log("BASE PDF BP 2", base64);
			localStorage.setItem("dok_spk_karoseri_ts_wira", base64);
		};
		fileReader.readAsDataURL(fileUpload);
		
	},
	uploadFileSpkKaroseri: function (fileUpload) {
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
					"dok_spk_karoseri_ts_wira",
					base64String
				);
			};
			image.src = event.target.result;
		};
		reader.readAsDataURL(fileUpload);
	},
	validasiUploadkendDepan: function () {
		var file = app.InformasiObjPembiayaanWiraTeleSurvey;

		$("#file-kend-tampak-dpn-ts-wira").change(function () {
			var fileUpload = document.querySelector(
				"#file-kend-tampak-dpn-ts-wira"
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
				$("#file-kend-tampak-dpn-ts-wira").val("");
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
				$("#file-kend-tampak-dpn-ts-wira").val("");
			} else if (arrType[1] == "PDF" || arrType[1] == "pdf") {
				file.convertFileKendDepan(fileUpload);
			} else {
				file.uploadFileKendDepan(fileUpload);
			}
		});
	},
	convertFileKendDepan: function (fileUpload) {
		var fileReader = new FileReader();
		var base64;
		fileReader.onload = function (fileLoadedEvent) {
			base64 = fileLoadedEvent.target.result.replace("data:", "").replace(/^.+,/, "");
			console.log("BASE PDF BP 2", base64);
			localStorage.setItem("dok_kend_tampak_depan_ts_wira", base64);
		};
		fileReader.readAsDataURL(fileUpload);
		
	},
	uploadFileKendDepan: function (fileUpload) {
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
					"dok_kend_tampak_depan_ts_wira",
					base64String
				);
			};
			image.src = event.target.result;
		};
		reader.readAsDataURL(fileUpload);
	},
	validasiUploadkendBelakang: function () {
		var file = app.InformasiObjPembiayaanWiraTeleSurvey;

		$("#file-kend-tampak-blkng-ts-wira").change(function () {
			var fileUpload = document.querySelector(
				"#file-kend-tampak-blkng-ts-wira"
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
				$("#file-kend-tampak-blkng-ts-wira").val("");
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
				$("#file-kend-tampak-blkng-ts-wira").val("");
			} else if (arrType[1] == "PDF" || arrType[1] == "pdf") {
				file.convertFileKendBelakang(fileUpload);
			} else {
				file.uploadFileKendBelakang(fileUpload);
			}
		});
	},
	convertFileKendBelakang: function (fileUpload) {
		var fileReader = new FileReader();
		var base64;
		fileReader.onload = function (fileLoadedEvent) {
			base64 = fileLoadedEvent.target.result.replace("data:", "").replace(/^.+,/, "");
			console.log("BASE PDF BP 2", base64);
			localStorage.setItem("dok_kend_tampak_belakang_ts_wira", base64);
		};
		fileReader.readAsDataURL(fileUpload);
		
	},
	uploadFileKendBelakang: function (fileUpload) {
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
					"dok_kend_tampak_belakang_ts_wira",
					base64String
				);
			};
			image.src = event.target.result;
		};
		reader.readAsDataURL(fileUpload);
	},
	validasiUploadkendKanan: function () {
		var file = app.InformasiObjPembiayaanWiraTeleSurvey;

		$("#file-kend-tampak-kanan-ts-wira").change(function () {
			var fileUpload = document.querySelector(
				"#file-kend-tampak-kanan-ts-wira"
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
				$("#file-kend-tampak-kanan-ts-wira").val("");
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
				$("#file-kend-tampak-kanan-ts-wira").val("");
			} else if (arrType[1] == "PDF" || arrType[1] == "pdf") {
				file.convertFileKendKanan(fileUpload);
			} else {
				file.uploadFileKendKanan(fileUpload);
			}
		});
	},
	convertFileKendKanan: function (fileUpload) {
		var fileReader = new FileReader();
		var base64;
		fileReader.onload = function (fileLoadedEvent) {
			base64 = fileLoadedEvent.target.result.replace("data:", "").replace(/^.+,/, "");
			console.log("BASE PDF BP 2", base64);
			localStorage.setItem("dok_kend_tampak_kanan_ts_wira", base64);
		};
		fileReader.readAsDataURL(fileUpload);
		
	},
	uploadFileKendKanan: function (fileUpload) {
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
					"dok_kend_tampak_kanan_ts_wira",
					base64String
				);
			};
			image.src = event.target.result;
		};
		reader.readAsDataURL(fileUpload);
	},
	validasiUploadkendKiri: function () {
		var file = app.InformasiObjPembiayaanWiraTeleSurvey;

		$("#file-kend-tampak-kiri-ts-wira").change(function () {
			var fileUpload = document.querySelector(
				"#file-kend-tampak-kiri-ts-wira"
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
				$("#file-kend-tampak-kiri-ts-wira").val("");
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
				$("#file-kend-tampak-kiri-ts-wira").val("");
			} else if (arrType[1] == "PDF" || arrType[1] == "pdf") {
				file.convertFileKendKiri(fileUpload);
			} else {
				file.uploadFileKendKiri(fileUpload);
			}
		});
	},
	convertFileKendKiri: function (fileUpload) {
		var fileReader = new FileReader();
		var base64;
		fileReader.onload = function (fileLoadedEvent) {
			base64 = fileLoadedEvent.target.result.replace("data:", "").replace(/^.+,/, "");
			console.log("BASE PDF BP 2", base64);
			localStorage.setItem("dok_kend_tampak_kiri_ts_wira", base64);
		};
		fileReader.readAsDataURL(fileUpload);
		
	},
	uploadFileKendKiri: function (fileUpload) {
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
					"dok_kend_tampak_kiri_ts_wira",
					base64String
				);
			};
			image.src = event.target.result;
		};
		reader.readAsDataURL(fileUpload);
	},
	validasiUploadkendDalam: function () {
		var file = app.InformasiObjPembiayaanWiraTeleSurvey;

		$("#file-kend-tampak-dalam-ts-wira").change(function () {
			var fileUpload = document.querySelector(
				"#file-kend-tampak-dalam-ts-wira"
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
				$("#file-kend-tampak-dalam-ts-wira").val("");
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
				$("#file-kend-tampak-dalam-ts-wira").val("");
			} else if (arrType[1] == "PDF" || arrType[1] == "pdf") {
				file.convertFileKendDalam(fileUpload);
			} else {
				file.uploadFileKendDalam(fileUpload);
			}
		});
	},
	convertFileKendDalam: function (fileUpload) {
		var fileReader = new FileReader();
		var base64;
		fileReader.onload = function (fileLoadedEvent) {
			base64 = fileLoadedEvent.target.result.replace("data:", "").replace(/^.+,/, "");
			console.log("BASE PDF BP 2", base64);
			localStorage.setItem("dok_kend_tampak_dalam_ts_wira", base64);
		};
		fileReader.readAsDataURL(fileUpload);
		
	},
	uploadFileKendDalam: function (fileUpload) {
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
					"dok_kend_tampak_dalam_ts_wira",
					base64String
				);
			};
			image.src = event.target.result;
		};
		reader.readAsDataURL(fileUpload);
	},
	validasiUploadkendPanel: function () {
		var file = app.InformasiObjPembiayaanWiraTeleSurvey;

		$("#file-kend-tampak-panel-ts-wira").change(function () {
			var fileUpload = document.querySelector(
				"#file-kend-tampak-panel-ts-wira"
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
				$("#file-kend-tampak-panel-ts-wira").val("");
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
				$("#file-kend-tampak-panel-ts-wira").val("");
			} else if (arrType[1] == "PDF" || arrType[1] == "pdf") {
				file.convertFileKendPanel(fileUpload);
			} else {
				file.uploadFileKendPanel(fileUpload);
			}
		});
	},
	convertFileKendPanel: function (fileUpload) {
		var fileReader = new FileReader();
		var base64;
		fileReader.onload = function (fileLoadedEvent) {
			base64 = fileLoadedEvent.target.result.replace("data:", "").replace(/^.+,/, "");
			console.log("BASE PDF BP 2", base64);
			localStorage.setItem("dok_kend_tampak_panel_ts_wira", base64);
		};
		fileReader.readAsDataURL(fileUpload);
		
	},
	uploadFileKendPanel: function (fileUpload) {
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
					"dok_kend_tampak_panel_ts_wira",
					base64String
				);
			};
			image.src = event.target.result;
		};
		reader.readAsDataURL(fileUpload);
	},
	validasiUploadNasTtdApl: function () {
		var file = app.InformasiObjPembiayaanWiraTeleSurvey;

		$("#file-foto-nas-ttd-apl-ts-wira").change(function () {
			var fileUpload = document.querySelector(
				"#file-foto-nas-ttd-apl-ts-wira"
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
				$("#file-foto-nas-ttd-apl-ts-wira").val("");
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
				$("#file-foto-nas-ttd-apl-ts-wira").val("");
			} else if (arrType[1] == "PDF" || arrType[1] == "pdf") {
				file.convertFileNasTtdApl(fileUpload);
			} else {
				file.uploadFileNasTtdApl(fileUpload);
			}
		});
	},
	convertFileNasTtdApl: function (fileUpload) {
		var fileReader = new FileReader();
		var base64;
		fileReader.onload = function (fileLoadedEvent) {
			base64 = fileLoadedEvent.target.result.replace("data:", "").replace(/^.+,/, "");
			console.log("BASE PDF BP 2", base64);
			localStorage.setItem("dok_foto_nas_ttd_apl_ts_wira", base64);
		};
		fileReader.readAsDataURL(fileUpload);
		
	},
	uploadFileNasTtdApl: function (fileUpload) {
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
					"dok_foto_nas_ttd_apl_ts_wira",
					base64String
				);
			};
			image.src = event.target.result;
		};
		reader.readAsDataURL(fileUpload);
	},
	validasiUploadNasPasTtdApl: function () {
		var file = app.InformasiObjPembiayaanWiraTeleSurvey;

		$("#file-foto-pas-ttd-apl-ts-wira").change(function () {
			var fileUpload = document.querySelector(
				"#file-foto-pas-ttd-apl-ts-wira"
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
				$("#file-foto-pas-ttd-apl-ts-wira").val("");
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
				$("#file-foto-pas-ttd-apl-ts-wira").val("");
			} else if (arrType[1] == "PDF" || arrType[1] == "pdf") {
				file.convertFileNasPasTtdApl(fileUpload);
			} else {
				file.uploadFileNasPasTtdApl(fileUpload);
			}
		});
	},
	convertFileNasPasTtdApl: function (fileUpload) {
		var fileReader = new FileReader();
		var base64;
		fileReader.onload = function (fileLoadedEvent) {
			base64 = fileLoadedEvent.target.result.replace("data:", "").replace(/^.+,/, "");
			console.log("BASE PDF BP 2", base64);
			localStorage.setItem("dok_foto_pas_ttd_apl_ts_wira", base64);
		};
		fileReader.readAsDataURL(fileUpload);
		
	},
	uploadFileNasPasTtdApl: function (fileUpload) {
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
					"dok_foto_pas_ttd_apl_ts_wira",
					base64String
				);
			};
			image.src = event.target.result;
		};
		reader.readAsDataURL(fileUpload);
	},

	jsonSubmitObjPembiayaan: function(){
		var that = app.KycNonWiraswasta;
		var inf_bayar_angsuran_code = $('#inp-cara-byr-code-ts-wira').val().toUpperCase();
		var inf_bayar_angsuran_desc = $('#inp-cara-byr-desc-ts-wira').val().toUpperCase();
		var inf_bank_code = $('#inp-bank-code-ts-wira').val().toUpperCase();
		var inf_bank_desc = $('#inp-bank-desc-ts-wira').val().toUpperCase();
		var inf_account_no = $('#inp-account-no-obj-pembiayaan-ts-wira').val();
		var inf_account_name = $('#inp-account-name-obj-pembiayaan-ts-wira').val().toUpperCase();
		var file_dok_cover_tabungan = localStorage.getItem("dok_tab_obj_pembiayaan_ts_wira");
		var inf_pencairan_dana_code = $('#inp-pencairan-dana-code-ts-wira').val().toUpperCase();
		var inf_pencairan_dana_desc = $('#inp-pencairan-dana-desc-ts-wira').val().toUpperCase();
		var inf_sumber_dana_code = $('#inp-sumber-dana-code-ts-wira').val().toUpperCase();
		var inf_sumber_dana_desc = $('#inp-sumber-dana-desc-ts-wira').val().toUpperCase();
		var inf_alat_pemakaian_unit = $('#txtarea-almt-pemakaian-unit-ts-wira').val().toUpperCase();
		var inf_kode_pos_bu_dom = $('#inp-kode-pos-pemakaian-unit-code-ts-wira').val();
		var inf_kelurahan_code = $('#inp-kel-pemakaian-unit-code-ts-wira').val();
		var inf_kelurahan_desc = $('#inp-kel-pemakaian-unit-desc-ts-wira').val();
		var inf_kecamatan_code = $('#inp-kec-pemakaian-unit-code-ts-wira').val();
		var inf_kecamatan_desc = $('#inp-kec-pemakaian-unit-desc-ts-wira').val();
		var inf_kab_kot_code = $('#inp-kota-pemakaian-unit-code-ts-wira').val();
		var inf_kab_kot_desc = $('#inp-kota-pemakaian-unit-desc-ts-wira').val();
		var inf_prov_code = $('#inp-prov-pemakaian-unit-code-ts-wira').val();
		var inf_prov_desc = $('#inp-prov-pemakaian-unit-desc-ts-wira').val();
	
		var file_dok_bpkb = localStorage.getItem("dok_bpkb_kend_ts_wira");
		var file_dok_stnk = localStorage.getItem("dok_stnk_kend_ts_wira");
		var inf_tgl_exp_stnk = $('#inp-tgl-exp-stnk-ts-wira').val().toUpperCase();
		var inf_warna_plat_code = $('#inp-warna-plat-code-ts-wira').val().toUpperCase();
		var inf_warna_plat_desc = $('#inp-warna-plat-desc-ts-wira').val().toUpperCase();
		var inf_product_marketing_code = $('#inp-prod-marketing-code-ts-wira').val().toUpperCase();
		var inf_product_marketing_desc = $('#inp-prod-marketing-desc-ts-wira').val().toUpperCase();
		var file_dok_spk_dealer = localStorage.getItem("dok_spk_dealer_ts_wira");
		var file_dok_spk_karoseri = localStorage.getItem("dok_spk_karoseri_ts_wira");
		var file_foto_tampak_depan = localStorage.getItem("dok_kend_tampak_depan_ts_wira");
		var file_foto_tampak_belakang = localStorage.getItem("dok_kend_tampak_belakang_ts_wira");
		var file_foto_tampak_kiri = localStorage.getItem("dok_kend_tampak_kiri_ts_wira");
		var file_foto_tampak_kanan = localStorage.getItem("dok_kend_tampak_kanan_ts_wira");
		var file_foto_tampak_dalam = localStorage.getItem("dok_kend_tampak_dalam_ts_wira");
		var file_foto_tampak_panel = localStorage.getItem("dok_kend_tampak_panel_ts_wira");
		var file_foto_ttd_nasabah = localStorage.getItem("dok_foto_nas_ttd_apl_ts_wira");
		var file_foto_ttd_pasangan_nasabah = localStorage.getItem("dok_foto_pas_ttd_apl_ts_wira");

		informasi_object_pembiayaan = {
			bayar_angsuran_code: inf_bayar_angsuran_code,
			bayar_angsuran_desc: inf_bayar_angsuran_desc,
			bank_code: inf_bank_code,
			bank_desc: inf_bank_desc,
			account_no: inf_account_no,
			account_name: inf_account_name,
			dok_cover_tabungan: file_dok_cover_tabungan,
			pencairan_dana_code: inf_pencairan_dana_code,
			pencairan_dana_desc: inf_pencairan_dana_desc,
			sumber_dana_code: inf_sumber_dana_code,
			sumber_dana_desc: inf_sumber_dana_desc,
			alat_pemakaian_unit: inf_alat_pemakaian_unit,
			kode_pos: inf_kode_pos_bu_dom,
			kelurahan_code: inf_kelurahan_code,
			kelurahan_desc: inf_kelurahan_desc,
			kecamatan_code: inf_kecamatan_code,
			kecamatan_desc: inf_kecamatan_desc,
			kab_kot_code: inf_kab_kot_code,
			kab_kot_desc: inf_kab_kot_desc,
			prov_code: inf_prov_code,
			prov_desc: inf_prov_desc,
			dok_bpkb: file_dok_bpkb,
			dok_stnk: file_dok_stnk,
			tgl_exp_stnk: inf_tgl_exp_stnk,
			warna_plat_code: inf_warna_plat_code,
			warna_plat_desc: inf_warna_plat_desc,
			product_marketing_code: inf_product_marketing_code,
			product_marketing_desc: inf_product_marketing_desc,
			dok_spk_dealer: file_dok_spk_dealer,
			dok_spk_karoseri: file_dok_spk_karoseri,
			foto_tampak_depan: file_foto_tampak_depan,
			foto_tampak_belakang: file_foto_tampak_belakang,
			foto_tampak_kiri: file_foto_tampak_kiri,
			foto_tampak_kanan: file_foto_tampak_kanan,
			foto_tampak_dalam: file_foto_tampak_dalam,
			foto_tampak_panel: file_foto_tampak_panel,
			foto_ttd_nasabah: file_foto_ttd_nasabah,
			foto_ttd_pasangan_nasabah: file_foto_ttd_pasangan_nasabah
		}
		$.ajax({
			type: "post",
			async: false,
			url: app.base_url + that.api + "submitKyc",
			data: {
                informasi_object_pembiayaan: informasi_object_pembiayaan,
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

		console.log(informasi_object_pembiayaan);

	},


};









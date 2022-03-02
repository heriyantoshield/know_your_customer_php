$(document).ready(function() {
    app.KycNonWiraswasta.init();
});

app.KycNonWiraswasta = {
	controller: 'Kyc/',
	api: 'Kyc_api/',
	elm: {},

	init: function () {
		var file = app.KycNonWiraswasta;
		var condition = false;
		// console.log(app.paramUrl);
        var decrypt = file.decryptUrl(app.paramUrl);
		var decrypt_parse = $.parseJSON(decrypt);
		// console.log(decrypt_parse);
		var order_id = decrypt_parse.order_id;//'1234569999';//'123456789011113'; //hardcode order_id      
        
        $('#content-info-pkrj-nsbh-ia-non-wira').hide();
        $('#content-info-pkrj-nsbh-ts-non-wira').hide();
        $('#content-info-pkrj-nsbh-ss-non-wira').hide();
        
        $('#tittle-info-pkrj-nsbh-ia-non-wira').click(function () {
			condition = !condition;
			if (condition == false) {
				$('#content-info-pkrj-nsbh-ia-non-wira').slideUp("slow");
				$('#span-info-pkrj-nsbh-ia-non-wira').html('Informasi Pekerjaan Nasabah <i class="fas fa-angle-right ml-2"></i>')
				$('#span-info-pkrj-nsbh-ia-non-wira').removeClass('use-bottom-border-span');

			}
			else if (condition == true) {
				$('#content-info-pkrj-nsbh-ia-non-wira').slideDown("slow");
				$('#span-info-pkrj-nsbh-ia-non-wira').html('Informasi Pekerjaan Nasabah <i class="fas fa-angle-down ml-2"></i>')
				$('#span-info-pkrj-nsbh-ia-non-wira').addClass('use-bottom-border-span');
			}
		});

        $('#tittle-info-pkrj-nsbh-ts-non-wira').click(function () {
			condition = !condition;
			if (condition == false) {
				$('#content-info-pkrj-nsbh-ts-non-wira').slideUp("slow");
				$('#span-info-pkrj-nsbh-ts-non-wira').html('Informasi Pekerjaan Nasabah <i class="fas fa-angle-right ml-2"></i>')
				$('#span-info-pkrj-nsbh-ts-non-wira').removeClass('use-bottom-border-span');

			}
			else if (condition == true) {
				$('#content-info-pkrj-nsbh-ts-non-wira').slideDown("slow");
				$('#span-info-pkrj-nsbh-ts-non-wira').html('Informasi Pekerjaan Nasabah <i class="fas fa-angle-down ml-2"></i>')
				$('#span-info-pkrj-nsbh-ts-non-wira').addClass('use-bottom-border-span');
			}
		});

        $('#tittle-info-pkrj-nsbh-ss-non-wira').click(function () {
			condition = !condition;
			if (condition == false) {
				$('#content-info-pkrj-nsbh-ss-non-wira').slideUp("slow");
				$('#span-info-pkrj-nsbh-ss-non-wira').html('Informasi Pekerjaan Nasabah <i class="fas fa-angle-right ml-2"></i>')
				$('#span-info-pkrj-nsbh-ss-non-wira').removeClass('use-bottom-border-span');

			}
			else if (condition == true) {
				$('#content-info-pkrj-nsbh-ss-non-wira').slideDown("slow");
				$('#span-info-pkrj-nsbh-ss-non-wira').html('Informasi Pekerjaan Nasabah <i class="fas fa-angle-down ml-2"></i>')
				$('#span-info-pkrj-nsbh-ss-non-wira').addClass('use-bottom-border-span');
			}
		});

		file.getDetailKyc(order_id);

    },
	
    getDetailKyc: function(order_id) {
    	let param = [];
	    var that = app.KycNonWiraswasta;

	    $.ajax({
	        url: app.base_url + that.api + "getDetailKyc",
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
                    // if(data.screening_2 == "NON-IA SILENT SURVEY"){
                    //     data.screening_2 = "NON-IA TELE SURVEY";
                    // }

                    if(data.screening_2 == "INSTANT APPROVAL"){

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
                        $("#inp-nomor-aplikasi-kyc-non-wiraswasta").val(data.order_id);
                        $("#inp-nama-sesuai-ktp-kyc-non-wiraswasta").val(data.detail.debitur.personal.deb_nama_sesuai_ktp);
                        $("#inp-tipe-nasabah-kyc-non-wiraswasta").val(tipe_nasabah_non_wiraswasta);
                        $("#inp-tanggal-aplikasi-kyc-non-wiraswasta").val(tanggal_aplikasi_non_wiraswasta);
                        $("#inp-source-order-kyc-non-wiraswasta").val(source_order_non_wiraswasta);
                        $("#inp-cabang-kyc-non-wiraswasta").val(cabang_non_wiraswasta);

                        //Sub Tab Instant Approval
                        $("#inp-pkrj-nsbh-ia-non-wira").val(data.detail.debitur.personal.occupation.occupation_pro.debitur.deb_occupation_desc);
                        var jenis_tempat_bekerja = $("<option selected='selected'></option>").val(data.detail.debitur.personal.occupation.occupation_pro.debitur.deb_company_type_code).text(data.detail.debitur.personal.occupation.occupation_pro.debitur.deb_company_type_desc);
                        $("#slc-pkrj-nsbh-jns-tmpt-bkrj-ia-non-wira").append(jenis_tempat_bekerja).trigger('change');
                        var nama_tempat_bekerja = data.detail.debitur.personal.occupation.occupation_pro.debitur.deb_name_of_workplace
                        $("#inp-pkrj-nsbh-nm-tmpt-bkrj-ia-non-wira").val(nama_tempat_bekerja.toUpperCase());
                        $("#inp-pkrj-nsbh-jbtn-nsbh-ia-non-wira").val(jabatan_nasabah_non_wiraswasta);
                        $("#inp-pkrj-nsbh-sktr-tmpt-bkrj-ia-non-wira").val(sektor_tempat_bekerja_non_wiraswasta);
                    }

                    else if(data.screening_2 == "NON-IA SILENT SURVEY"){

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
                        $("#inp-nomor-aplikasi-kyc-non-wiraswasta").val(data.order_id);
                        $("#inp-nama-sesuai-ktp-kyc-non-wiraswasta").val(data.detail.debitur.personal.nama_sesuai_ktp);
                        $("#inp-tipe-nasabah-kyc-non-wiraswasta").val(data.customer_type_desc);
                        $("#inp-tanggal-aplikasi-kyc-non-wiraswasta").val(data.order_created_date);
                        $("#inp-source-order-kyc-non-wiraswasta").val(data.source_order_desc);
                        $("#inp-cabang-kyc-non-wiraswasta").val(data.branch_desc);

                        //Sub Tab Silent Survey
                        $("#inp-pkrj-nsbh-ss-non-wira").val(pekerjan_nasabah_non_wiraswasta);
                        var jenis_tempat_bekerja_non_wiraswasta = $("<option selected='selected'></option>").val(jenis_tempat_bekerja_non_wiraswasta_id).text(jenis_tempat_bekerja_non_wiraswasta_desc);
 					    $("#slc-pkrj-nsbh-jns-tmpt-bkrj-ss-non-wira").append(jenis_tempat_bekerja_non_wiraswasta).trigger('change');
                        $("#inp-pkrj-nsbh-nm-tmpt-bkrj-ss-non-wira").val(nama_tempat_bekerja_non_wiraswasta);
                        $("#inp-pkrj-nsbh-jbtn-nsbh-ss-non-wira").val(jabatan_nasabah_non_wiraswasta);
                        $("#inp-pkrj-nsbh-sktr-tmpt-bkrj-ss-non-wira").val(sektor_tempat_bekerja_non_wiraswasta);

                    }

                    else if(data.screening_2 == "PHONE / TELE SURVEY"){

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
                        $("#inp-nomor-aplikasi-kyc-non-wiraswasta").val(data.order_id);
                        $("#inp-nama-sesuai-ktp-kyc-non-wiraswasta").val(data.detail.debitur.personal.nama_sesuai_ktp);
                        $("#inp-tipe-nasabah-kyc-non-wiraswasta").val(data.customer_type_desc);
                        $("#inp-tanggal-aplikasi-kyc-non-wiraswasta").val(data.order_created_date);
                        $("#inp-source-order-kyc-non-wiraswasta").val(data.source_order_desc);
                        $("#inp-cabang-kyc-non-wiraswasta").val(data.branch_desc);

                        //Sub Tab Silent Survey
                        $("#inp-pkrj-nsbh-ts-non-wira").val(pekerjan_nasabah_non_wiraswasta);
                        var jenis_tempat_bekerja_non_wiraswasta = $("<option selected='selected'></option>").val(jenis_tempat_bekerja_non_wiraswasta_id).text(jenis_tempat_bekerja_non_wiraswasta_desc);
 					    $("#slc-pkrj-nsbh-jns-tmpt-bkrj-ts-non-wira").append(jenis_tempat_bekerja_non_wiraswasta).trigger('change');
                        $("#inp-pkrj-nsbh-nm-tmpt-bkrj-ts-non-wira").val(nama_tempat_bekerja_non_wiraswasta);
                        $("#inp-pkrj-nsbh-jbtn-nsbh-ts-non-wira").val(jabatan_nasabah_non_wiraswasta);
                        $("#inp-pkrj-nsbh-sktr-tmpt-bkrj-ts-non-wira").val(sektor_tempat_bekerja_non_wiraswasta);

                    }

	            } else {
	                alert_warning(data);
	            }
	        }
	    });
    },

    decryptUrl: function (dataEncrypt) {

		let ciphertext = dataEncrypt;
		let key = app.aes128key;
		let iv = app.aes128iv;
		let ciphertextWA = CryptoJS.enc.Hex.parse(ciphertext);
		let ivWA = CryptoJS.enc.Utf8.parse(iv);
		let ciphertextCP = {
			ciphertext: ciphertextWA
		};
		let keyWA = CryptoJS.enc.Utf8.parse(key);

		let decrypted = CryptoJS.AES.decrypt(
			ciphertextCP,
			keyWA, {
				iv: ivWA
			}
		);
		return decrypted.toString(CryptoJS.enc.Utf8);

	},

}
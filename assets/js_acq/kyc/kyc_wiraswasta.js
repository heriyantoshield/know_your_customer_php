$(document).ready(function() {
    app.KycWiraswasta.init();   
});

app.KycWiraswasta = {
	controller: 'Kyc/',
	api: 'Kyc_api/',
	elm: {},

	init: function () {
		var file = app.KycWiraswasta;
        var condition = false; 
		// console.log(app.paramUrl);
        var decrypt = file.decryptUrl(app.paramUrl);
		var decrypt_parse = $.parseJSON(decrypt);
		// console.log(decrypt_parse);
		var order_id = decrypt_parse.order_id;//'1234569999';//'123456789011113'; //hardcode order_id   

        $('#content-info-pkrj-nsbh-ia-wira').hide();
        $('#content-info-pkrj-nsbh-ts-wira').hide();
        $('#content-info-pkrj-nsbh-ss-wira').hide();

        $('#tittle-info-pkrj-nsbh-ia-wira').click(function () {
			condition = !condition;
			if (condition == false) {
				$('#content-info-pkrj-nsbh-ia-wira').slideUp("slow");
				$('#span-info-pkrj-nsbh-ia-wira').html('Informasi Pekerjaan Nasabah <i class="fas fa-angle-right ml-2"></i>')
				$('#span-info-pkrj-nsbh-ia-wira').removeClass('use-bottom-border-span');

			}
			else if (condition == true) {
				$('#content-info-pkrj-nsbh-ia-wira').slideDown("slow");
				$('#span-info-pkrj-nsbh-ia-wira').html('Informasi Pekerjaan Nasabah <i class="fas fa-angle-down ml-2"></i>')
				$('#span-info-pkrj-nsbh-ia-wira').addClass('use-bottom-border-span');
			}
		});

        $('#tittle-info-pkrj-nsbh-ts-wira').click(function () {
			condition = !condition;
			if (condition == false) {
				$('#content-info-pkrj-nsbh-ts-wira').slideUp("slow");
				$('#span-info-pkrj-nsbh-ts-wira').html('Informasi Pekerjaan Nasabah <i class="fas fa-angle-right ml-2"></i>')
				$('#span-info-pkrj-nsbh-ts-wira').removeClass('use-bottom-border-span');

			}
			else if (condition == true) {
				$('#content-info-pkrj-nsbh-ts-wira').slideDown("slow");
				$('#span-info-pkrj-nsbh-ts-wira').html('Informasi Pekerjaan Nasabah <i class="fas fa-angle-down ml-2"></i>')
				$('#span-info-pkrj-nsbh-ts-wira').addClass('use-bottom-border-span');
			}
		});

        $('#tittle-info-pkrj-nsbh-ss-wira').click(function () {
			condition = !condition;
			if (condition == false) {
				$('#content-info-pkrj-nsbh-ss-wira').slideUp("slow");
				$('#span-info-pkrj-nsbh-ss-wira').html('Informasi Pekerjaan Nasabah <i class="fas fa-angle-right ml-2"></i>')
				$('#span-info-pkrj-nsbh-ss-wira').removeClass('use-bottom-border-span');

			}
			else if (condition == true) {
				$('#content-info-pkrj-nsbh-ss-wira').slideDown("slow");
				$('#span-info-pkrj-nsbh-ss-wira').html('Informasi Pekerjaan Nasabah <i class="fas fa-angle-down ml-2"></i>')
				$('#span-info-pkrj-nsbh-ss-wira').addClass('use-bottom-border-span');
			}
		});

        file.getDetailKyc(order_id);
        
    },
	
    getDetailKyc: function(order_id) {
    	let param = [];
	    var that = app.KycWiraswasta;

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
                    //TESTING DATA SILENT SURVEY KE TELE SURVEY
                    // if(data.screening_2 == "NON-IA SILENT SURVEY"){
                    //     data.screening_2 = "NON-IA TELE SURVEY";
                    // }

                    if(data.screening_2 == "INSTANT APPROVAL"){

                        //Hardcode Data Informasi Nasabah
                        var tipe_nasabah_wiraswasta = "BMRI";
                        var tanggal_aplikasi_wiraswasta = "2022/01/07 10:02:19";
                        var source_order_wiraswasta = "MUF PORTAL";
                        var cabang_wiraswasta = "CIKARANG";
                        
                        var bidang_usaha_wiraswasta = "PERSEORANGAN / BADAN USAHA PERSEORANGAN";
                        var sektor_tempat_usaha_wiraswasta = "USAHA MIKRO KECIL MENENGAH";

                        //Hide Tab
                        $("#tab-silentsurvey").hide();
                        $("#tab-telesurvey").hide();

                        //Main Page
                        $("#inp-nomor-aplikasi-kyc-wiraswasta").val(data.order_id);
                        $("#inp-nama-sesuai-ktp-kyc-wiraswasta").val(data.detail.debitur.personal.deb_nama_sesuai_ktp);
                        $("#inp-tipe-nasabah-kyc-wiraswasta").val(tipe_nasabah_wiraswasta);
                        $("#inp-tanggal-aplikasi-kyc-wiraswasta").val(tanggal_aplikasi_wiraswasta);
                        $("#inp-source-order-kyc-wiraswasta").val(source_order_wiraswasta);
                        $("#inp-cabang-kyc-wiraswasta").val(cabang_wiraswasta);

                        //Sub Tab Instant Approval
                        $("#inp-pkrj-nsbh-ia-wira").val(data.detail.debitur.personal.occupation.occupation_pro.debitur.deb_occupation_desc);
                        var jenis_tempat_usaha = $("<option selected='selected'></option>").val(data.detail.debitur.personal.occupation.occupation_pro.debitur.deb_company_type_code).text(data.detail.debitur.personal.occupation.occupation_pro.debitur.deb_company_type_desc);
                        $("#slc-pkrj-nsbh-jns-tmpt-ush-ia-wira").append(jenis_tempat_usaha).trigger('change');
                        var nama_tempat_usaha = data.detail.debitur.personal.occupation.occupation_pro.debitur.deb_name_of_workplace
                        $("#inp-pkrj-nsbh-nm-tmpt-ush-ia-wira").val(nama_tempat_usaha.toUpperCase());
                        $("#inp-pkrj-nsbh-bdng-ush-ia-wira").val(bidang_usaha_wiraswasta);
                        $("#inp-pkrj-nsbh-sktr-tmpt-ush-ia-wira").val(sektor_tempat_usaha_wiraswasta);
                    }

                    else if(data.screening_2 == "NON-IA SILENT SURVEY"){

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
                        $("#inp-nomor-aplikasi-kyc-wiraswasta").val(data.order_id);
                        $("#inp-nama-sesuai-ktp-kyc-wiraswasta").val(data.detail.debitur.personal.nama_sesuai_ktp);
                        $("#inp-tipe-nasabah-kyc-wiraswasta").val(data.customer_type_desc);
                        $("#inp-tanggal-aplikasi-kyc-wiraswasta").val(data.order_created_date);
                        $("#inp-source-order-kyc-wiraswasta").val(data.source_order_desc);
                        $("#inp-cabang-kyc-wiraswasta").val(data.branch_desc);

                        //Sub Tab Silent Survey
                        $("#inp-pkrj-nsbh-ss-wira").val(pekerjan_nasabah_wiraswasta);
                        var jenis_tempat_usaha_wiraswasta = $("<option selected='selected'></option>").val(jenis_tempat_usaha_wiraswasta_id).text(jenis_tempat_usaha_wiraswasta_desc);
 					    $("#slc-pkrj-nsbh-jns-tmpt-ush-ss-wira").append(jenis_tempat_usaha_wiraswasta).trigger('change');
                        $("#inp-pkrj-nsbh-nm-tmpt-ush-ss-wira").val(nama_tempat_usaha_wiraswasta);
                        $("#inp-pkrj-nsbh-bdng-ush-ss-wira").val(bidang_usaha_wiraswasta);
                        $("#inp-pkrj-nsbh-sktr-tmpt-ush-ss-wira").val(sektor_tempat_usaha_wiraswasta);

                    }

                    else if(data.screening_2 == "PHONE / TELE SURVEY"){

                        //Hardcode Data Informasi Nasabah
                        var pekerjan_nasabah_wiraswasta = "WIRASWASTA";
                        var jenis_tempat_usaha_wiraswasta_id = "01";
                        var jenis_tempat_usaha_wiraswasta_desc = "WARUNG";
                        var nama_tempat_usaha_wiraswasta = "WARUNG SUKA MAJU";
                        var bidang_usaha_wiraswasta = "PERSEORANGAN / BADAN USAHA PERSEORANGAN";
                        var sektor_tempat_usaha_wiraswasta = "USAHA MIKRO KECIL MENENGAH";
                        
                        //Hide Tab
                        $("#tab-instantapproval").hide();
                        $("#tab-silentsurvey").hide();
                        
                        //Main Page
                        $("#inp-nomor-aplikasi-kyc-wiraswasta").val(data.order_id);
                        $("#inp-nama-sesuai-ktp-kyc-wiraswasta").val(data.detail.debitur.personal.nama_sesuai_ktp);
                        $("#inp-tipe-nasabah-kyc-wiraswasta").val(data.customer_type_desc);
                        $("#inp-tanggal-aplikasi-kyc-wiraswasta").val(data.order_created_date);
                        $("#inp-source-order-kyc-wiraswasta").val(data.source_order_desc);
                        $("#inp-cabang-kyc-wiraswasta").val(data.branch_desc);

                        //Sub Tab Silent Survey
                        $("#inp-pkrj-nsbh-ts-wira").val(pekerjan_nasabah_wiraswasta);
                        var jenis_tempat_usaha_wiraswasta = $("<option selected='selected'></option>").val(jenis_tempat_usaha_wiraswasta_id).text(jenis_tempat_usaha_wiraswasta_desc);
 					    $("#slc-pkrj-nsbh-jns-tmpt-ush-ts-wira").append(jenis_tempat_usaha_wiraswasta).trigger('change');
                        $("#inp-pkrj-nsbh-nm-tmpt-ush-ts-wira").val(nama_tempat_usaha_wiraswasta);
                        $("#inp-pkrj-nsbh-bdng-ush-ts-wira").val(bidang_usaha_wiraswasta);
                        $("#inp-pkrj-nsbh-sktr-tmpt-ush-ts-wira").val(sektor_tempat_usaha_wiraswasta);

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
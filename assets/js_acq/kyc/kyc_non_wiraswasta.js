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
        $('#content-tmpt-tinggal-ia-non-wira').hide();
		$('#content-obj-pembiayaan-ia-non-wira').hide();
		
		$('#content-tmpt-tinggal-ss-non-wira').hide();
		$('#content-obj-pembiayaan-ss-non-wira').hide();
		$('#content-tmpt-tinggal-ts-non-wira').hide();
		$('#content-obj-pembiayaan-ts-non-wira').hide();
        
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

        $('#tittle-info-tmpt-tinggal-nas-ia-non-wira').click(function () {	
			condition = !condition;
			if (condition == false) {
				$('#content-tmpt-tinggal-ia-non-wira').slideUp("slow");
				$('#span-info-tmpt-tinggal-nas-ia-non-wira').html('Informasi Tempat Tinggal Nasabah <i class="fas fa-angle-right ml-2"></i>')
				$('#span-info-tmpt-tinggal-nas-ia-non-wira').removeClass('use-bottom-border-span');

			}
			else if (condition == true) {
				$('#content-tmpt-tinggal-ia-non-wira').slideDown("slow");
				$('#span-info-tmpt-tinggal-nas-ia-non-wira').html('Informasi Tempat Tinggal Nasabah <i class="fas fa-angle-down ml-2"></i>')
				$('#span-info-tmpt-tinggal-nas-ia-non-wira').addClass('use-bottom-border-span');
			}
		});

		$('#tittle-info-obj-pembiayaan-ia-non-wira').click(function () {	
			condition = !condition;
			if (condition == false) {
				$('#content-obj-pembiayaan-ia-non-wira').slideUp("slow");
				$('#span-info-obj-pembiayaan-ia-non-wira').html('Informasi Object Pembiayaan <i class="fas fa-angle-right ml-2"></i>')
				$('#span-info-obj-pembiayaan-ia-non-wira').removeClass('use-bottom-border-span');

			}
			else if (condition == true) {
				$('#content-obj-pembiayaan-ia-non-wira').slideDown("slow");
				$('#span-info-obj-pembiayaan-ia-non-wira').html('Informasi Object Pembiayaan <i class="fas fa-angle-down ml-2"></i>')
				$('#span-info-obj-pembiayaan-ia-non-wira').addClass('use-bottom-border-span');
			}
		});
		
        $('#tittle-info-tmpt-tinggal-nas-ts-non-wira').click(function () {	
			condition = !condition;
			if (condition == false) {
				$('#content-tmpt-tinggal-ts-non-wira').slideUp("slow");
				$('#span-info-tmpt-tinggal-nas-ts-non-wira').html('Informasi Tempat Tinggal Nasabah <i class="fas fa-angle-right ml-2"></i>')
				$('#span-info-tmpt-tinggal-nas-ts-non-wira').removeClass('use-bottom-border-span');

			}
			else if (condition == true) {
				$('#content-tmpt-tinggal-ts-non-wira').slideDown("slow");
				$('#span-info-tmpt-tinggal-nas-ts-non-wira').html('Informasi Tempat Tinggal Nasabah <i class="fas fa-angle-down ml-2"></i>')
				$('#span-info-tmpt-tinggal-nas-ts-non-wira').addClass('use-bottom-border-span');
			}
		});

		$('#tittle-info-obj-pembiayaan-ts-non-wira').click(function () {	
			condition = !condition;
			if (condition == false) {
				$('#content-obj-pembiayaan-ts-non-wira').slideUp("slow");
				$('#span-info-obj-pembiayaan-ss-non-wira').html('Informasi Object Pembiayaan <i class="fas fa-angle-right ml-2"></i>')
				$('#span-info-obj-pembiayaan-ss-non-wira').removeClass('use-bottom-border-span');

			}
			else if (condition == true) {
				$('#content-obj-pembiayaan-ts-non-wira').slideDown("slow");
				$('#span-info-obj-pembiayaan-ss-non-wira').html('Informasi Object Pembiayaan <i class="fas fa-angle-down ml-2"></i>')
				$('#span-info-obj-pembiayaan-ss-non-wira').addClass('use-bottom-border-span');
			}
		});

        $('#tittle-info-tmpt-tinggal-nas-ss-non-wira').click(function () {	
			condition = !condition;
			if (condition == false) {
				$('#content-tmpt-tinggal-ss-non-wira').slideUp("slow");
				$('#span-info-tmpt-tinggal-nas-ss-non-wira').html('Informasi Tempat Tinggal Nasabah <i class="fas fa-angle-right ml-2"></i>')
				$('#span-info-tmpt-tinggal-nas-ss-non-wira').removeClass('use-bottom-border-span');

			}
			else if (condition == true) {
				$('#content-tmpt-tinggal-ss-non-wira').slideDown("slow");
				$('#span-info-tmpt-tinggal-nas-ss-non-wira').html('Informasi Tempat Tinggal Nasabah <i class="fas fa-angle-down ml-2"></i>')
				$('#span-info-tmpt-tinggal-nas-ss-non-wira').addClass('use-bottom-border-span');
			}
		});

		$('#tittle-info-obj-pembiayaan-ss-non-wira').click(function () {	
			condition = !condition;
			if (condition == false) {
				$('#content-obj-pembiayaan-ss-non-wira').slideUp("slow");
				$('#span-info-obj-pembiayaan-ss-non-wira').html('Informasi Object Pembiayaan <i class="fas fa-angle-right ml-2"></i>')
				$('#span-info-obj-pembiayaan-ss-non-wira').removeClass('use-bottom-border-span');

			}
			else if (condition == true) {
				$('#content-obj-pembiayaan-ss-non-wira').slideDown("slow");
				$('#span-info-obj-pembiayaan-ss-non-wira').html('Informasi Object Pembiayaan <i class="fas fa-angle-down ml-2"></i>')
				$('#span-info-obj-pembiayaan-ss-non-wira').addClass('use-bottom-border-span');
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
                   
                   // data.screening_2 = "INSTANT APPROVAL";
                    //data.screening_2 = "NON-IA SILENT SURVEY";
                    // data.screening_2 = "PHONE / TELE SURVEY";


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
                        // $("#inp-pkrj-nsbh-ia-non-wira").val(data.detail.debitur.personal.occupation.occupation_pro.debitur.deb_occupation_desc);
                        // var jenis_tempat_bekerja = $("<option selected='selected'></option>").val(data.detail.debitur.personal.occupation.occupation_pro.debitur.deb_company_type_code).text(data.detail.debitur.personal.occupation.occupation_pro.debitur.deb_company_type_desc);
                        // $("#slc-pkrj-nsbh-jns-tmpt-bkrj-ia-non-wira").append(jenis_tempat_bekerja).trigger('change');
                        // var nama_tempat_bekerja = data.detail.debitur.personal.occupation.occupation_pro.debitur.deb_name_of_workplace
                        // $("#inp-pkrj-nsbh-nm-tmpt-bkrj-ia-non-wira").val(nama_tempat_bekerja.toUpperCase());
                        // $("#inp-pkrj-nsbh-jbtn-nsbh-ia-non-wira").val(jabatan_nasabah_non_wiraswasta);
                        // $("#inp-pkrj-nsbh-sktr-tmpt-bkrj-ia-non-wira").val(sektor_tempat_bekerja_non_wiraswasta);
                        var data_alamat = data.detail.debitur.personal.alamat_debitur.alamat_domisili;
						$("#txtarea-alamat-dom-nas-ia-non-wira").append(data_alamat.alamat); 
						$("#inp-rt-dom-nas-ia-non-wira").val(data_alamat.rt);
						$("#inp-rw-dom-nas-ia-non-wira").val(data_alamat.rw);
						$("#inp-kode-pos-dom-nas-ia-non-wira").val(data_alamat.kode_pos);
                        $("#inp-kel-code-dom-nas-ia-non-wira").val(data_alamat.kode_kelurahan);
						$("#inp-kel-dom-nas-ia-non-wira").val(data_alamat.desc_kelurahan);
                        $("#inp-kec-code-dom-nas-ia-non-wira").val(data_alamat.kode_kecamatan);
						$("#inp-kec-dom-nas-ia-non-wira").val(data_alamat.desc_kecamatan);
                        $("#inp-kota-code-dom-nas-ia-non-wira").val(data_alamat.kode_kab_kot);
						$("#inp-kota-dom-nas-ia-non-wira").val(data_alamat.desc_kab_kot);
                        $("#inp-prov-code-dom-nas-ia-non-wira").val(data_alamat.kode_provinsi);
						$("#inp-prov-dom-nas-ia-non-wira").val(data_alamat.desc_provinsi);
						var hub_kepemilikan_rumah = $("<option selected='selected'></option>").val(data.detail.data_kepemilikan.house_of_status_id).text(data.detail.data_kepemilikan.house_of_status_desc);
						$("#slc-sts-kepemilikan-rmh-ia-non-wira").append(hub_kepemilikan_rumah).trigger('change');
						$("#inp-sts-kepemilikan-rmh-code-ia-non-wira").val(data.detail.data_kepemilikan.house_of_status_id);
						$("#inp-type-obj-pembiayaan-code-ia-non-wira").val("F002"); // data.financing_obj_code
						$("#inp-flag-the-road-ia-non-wira").val("Y"); // data.detail.object_pembiayaan.flag_off_the_road
						$("#inp-source-form-code-ia-non-wira").val("EFDIG"); // data.source_form_code
						$("#inp-obj-code-ia-non-wira").val("002"); // data.detail.object_pembiayaan.obj_code
						$("#inp-current-form-code-ia-non-wira").val("F002"); // data.current_form_code
                    
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
                        // $("#inp-pkrj-nsbh-ss-non-wira").val(pekerjan_nasabah_non_wiraswasta);
                        // var jenis_tempat_bekerja_non_wiraswasta = $("<option selected='selected'></option>").val(jenis_tempat_bekerja_non_wiraswasta_id).text(jenis_tempat_bekerja_non_wiraswasta_desc);
 					    // $("#slc-pkrj-nsbh-jns-tmpt-bkrj-ss-non-wira").append(jenis_tempat_bekerja_non_wiraswasta).trigger('change');
                        // $("#inp-pkrj-nsbh-nm-tmpt-bkrj-ss-non-wira").val(nama_tempat_bekerja_non_wiraswasta);
                        // $("#inp-pkrj-nsbh-jbtn-nsbh-ss-non-wira").val(jabatan_nasabah_non_wiraswasta);
                        // $("#inp-pkrj-nsbh-sktr-tmpt-bkrj-ss-non-wira").val(sektor_tempat_bekerja_non_wiraswasta);

                        var data_alamat = data.detail.debitur.personal.alamat_debitur.alamat_domisili;
						$("#txtarea-alamat-dom-nas-ss-non-wira").append(data_alamat.alamat); 
						$("#inp-rt-dom-nas-ss-non-wira").val(data_alamat.rt);
						$("#inp-rw-dom-nas-ss-non-wira").val(data_alamat.rw);
						$("#inp-kode-pos-dom-nas-ss-non-wira").val(data_alamat.kode_pos);
                        $("#inp-kel-code-dom-nas-ss-non-wira").val(data_alamat.kode_kelurahan);
						$("#inp-kel-dom-nas-ss-non-wira").val(data_alamat.desc_kelurahan);
                        $("#inp-kec-code-dom-nas-ss-non-wira").val(data_alamat.kode_kecamatan);
						$("#inp-kec-dom-nas-ss-non-wira").val(data_alamat.desc_kecamatan);
                        $("#inp-kota-code-dom-nas-ss-non-wira").val(data_alamat.kode_kab_kot);
						$("#inp-kota-dom-nas-ss-non-wira").val(data_alamat.desc_kab_kot);
                        $("#inp-prov-code-dom-nas-ss-non-wira").val(data_alamat.kode_provinsi);
						$("#inp-prov-dom-nas-ss-non-wira").val(data_alamat.desc_provinsi);
						var hub_kepemilikan_rumah = $("<option selected='selected'></option>").val(data.detail.data_kepemilikan.house_of_status_id).text(data.detail.data_kepemilikan.house_of_status_desc);
						$("#slc-sts-kepemilikan-rmh-ss-non-wira").append(hub_kepemilikan_rumah).trigger('change');						
						$("#inp-sts-kepemilikan-rmh-code-ss-non-wira").val(data.detail.data_kepemilikan.house_of_status_id);
						$("#inp-type-obj-pembiayaan-code-ss-non-wira").val("F001"); // data.financing_obj_code
						$("#inp-flag-the-road-ss-non-wira").val("N"); // data.detail.object_pembiayaan.flag_off_the_road
						$("#inp-source-form-code-ss-non-wira").val("EFDIG"); // data.source_form_code
						$("#inp-obj-code-ss-non-wira").val("002"); // data.detail.object_pembiayaan.obj_code
						$("#inp-current-form-code-ss-non-wira").val("F002"); // data.current_form_code
                   
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
                        // $("#inp-pkrj-nsbh-ts-non-wira").val(pekerjan_nasabah_non_wiraswasta);
                        // var jenis_tempat_bekerja_non_wiraswasta = $("<option selected='selected'></option>").val(jenis_tempat_bekerja_non_wiraswasta_id).text(jenis_tempat_bekerja_non_wiraswasta_desc);
 					    // $("#slc-pkrj-nsbh-jns-tmpt-bkrj-ts-non-wira").append(jenis_tempat_bekerja_non_wiraswasta).trigger('change');
                        // $("#inp-pkrj-nsbh-nm-tmpt-bkrj-ts-non-wira").val(nama_tempat_bekerja_non_wiraswasta);
                        // $("#inp-pkrj-nsbh-jbtn-nsbh-ts-non-wira").val(jabatan_nasabah_non_wiraswasta);
                        // $("#inp-pkrj-nsbh-sktr-tmpt-bkrj-ts-non-wira").val(sektor_tempat_bekerja_non_wiraswasta);


                        var data_alamat = data.detail.debitur.personal.alamat_debitur.alamat_domisili;
						$("#txtarea-alamat-dom-nas-ts-non-wira").append(data_alamat.alamat); 
						$("#inp-rt-dom-nas-ts-non-wira").val(data_alamat.rt);
						$("#inp-rw-dom-nas-ts-non-wira").val(data_alamat.rw);
						$("#inp-kode-pos-dom-nas-ts-non-wira").val(data_alamat.kode_pos);
                        $("#inp-kel-code-dom-nas-ts-non-wira").val(data_alamat.kode_kelurahan);
						$("#inp-kel-dom-nas-ts-non-wira").val(data_alamat.desc_kelurahan);
                        $("#inp-kec-code-dom-nas-ts-non-wira").val(data_alamat.kode_kecamatan);
						$("#inp-kec-dom-nas-ts-non-wira").val(data_alamat.desc_kecamatan);
                        $("#inp-kota-code-dom-nas-ts-non-wira").val(data_alamat.kode_kab_kot);
						$("#inp-kota-dom-nas-ts-non-wira").val(data_alamat.desc_kab_kot);
                        $("#inp-prov-code-dom-nas-ts-non-wira").val(data_alamat.kode_provinsi);
						$("#inp-prov-dom-nas-ts-non-wira").val(data_alamat.desc_provinsi);
						var hub_kepemilikan_rumah = $("<option selected='selected'></option>").val(data.detail.data_kepemilikan.house_of_status_id).text(data.detail.data_kepemilikan.house_of_status_desc);
						$("#slc-sts-kepemilikan-rmh-ts-non-wira").append(hub_kepemilikan_rumah).trigger('change');

						
						$("#inp-sts-kepemilikan-rmh-code-ts-non-wira").val(data.detail.data_kepemilikan.house_of_status_id);
						$("#inp-type-obj-pembiayaan-code-ts-non-wira").val("F001"); // data.financing_obj_code
						$("#inp-flag-the-road-ts-non-wira").val("N"); // data.detail.object_pembiayaan.flag_off_the_road
						$("#inp-source-form-code-ts-non-wira").val("EFDIG"); // data.source_form_code
						$("#inp-obj-code-ts-non-wira").val("002"); // data.detail.object_pembiayaan.obj_code
						$("#inp-current-form-code-ts-non-wira").val("F002"); // data.current_form_code
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
$(document).ready(function() {
    app.Survey.init();

    // console.log("last_val : " + localStorage.getItem("last_val"));
    // for (i = 0; i < localStorage.getItem("last_val"); i++) {
    // 	localStorage.setItem("doc_selfie_pic_informan" + i, "");
    // }
});

app.Survey = {
	controller: 'Survey/',
	api: 'Survey_api/',
	elm: {},

	init: function () {
        var file = app.Survey;
		file.getHubunganInformanNasabah();
		file.getKepemilikanRumah();
		var order_id = '123456789011113';
		file.getDetailTeleSurvey(order_id);
        var informan = 2;
        var jml_foto_rumah = 1;
        var jml_foto_jalan = 1;
        var jml_informan = 1;
        localStorage.setItem("jml_informan", jml_informan);

		$('input[type=radio][id=radiokepemilikantidaksesuai]').change(function(){
			$('#statustidaksesuai').prop("hidden",false);
		});

		$('input[type=radio][id=radiokepemilikansesuai]').change(function(){
			$('#statustidaksesuai').prop("hidden",true);
		});

		$('input[type=radio][id=radiotinggalsesuai]').change(function(){
			$('#tinggaltidaksesuai').prop("hidden",true);
		});

		$('input[type=radio][id=radiotinggaltidaksesuai]').change(function(){
			$('#tinggaltidaksesuai').prop("hidden",false);
		});


		$('#add-fotorumah').click(function(){
			jml_foto_rumah += 1;
			localStorage.setItem("jml_foto_rumah", jml_foto_rumah);
			console.log("jml_foto_rumah : "+ jml_foto_rumah);
			$('#addformrumah').prop("hidden",false)
		});

		$('#remove-fotorumah').click(function(){
			jml_foto_rumah -= 1;
			localStorage.setItem("jml_foto_rumah", jml_foto_rumah);
			console.log("jml_foto_rumah : "+ jml_foto_rumah);
			$('#addformrumah').prop("hidden",true)
		});

		$('#add-fotojalan').click(function(){
			jml_foto_jalan += 1;
			localStorage.setItem("jml_foto_jalan", jml_foto_jalan);
			console.log("jml_foto_jalan : "+ jml_foto_jalan);
			$('#addformjalan').prop("hidden",false)
		});

		$('#remove-fotojalan').click(function(){
			jml_foto_jalan -= 1;
			localStorage.setItem("jml_foto_jalan", jml_foto_jalan);
			console.log("jml_foto_jalan : "+ jml_foto_jalan);
			$('#addformjalan').prop("hidden",true)
		});


		$('#btn-save-silent-survey').click(function(){
			async: false;
			var id_position;
			var err_count = 0;
			file.uploadDocumentSilentSurvey(informan);
			if($('#informan_code').val()=="002"){
				if($('#btnAddInforman').val()==0){
					alert_error("Informasi Informan harus diisi minimal 2")
					err_count = err_count + 1;

					if (id_position == null || id_position == "") {
	                   id_position = '#btnAddInforman';
	                }
				}
				else if($('#btnAddInforman').val()==1){
					if(document.getElementById("lokasirumah").checked==false&&
						document.getElementById("lokasiusaha").checked==false){
						$('#err-lokasi').html('Lokasi Proses Survey wajib Diisi');
						$('#err-lokasi').prop("hidden",false);
						err_count = err_count + 1;
						if (id_position == null || id_position == "") {
		                   id_position = '#lokasirumah';
		                }
					}
					else if(document.getElementById("lokasirumah").checked!=false||
					document.getElementById("lokasiusaha").checked!=false){
						$('#err-lokasi').html('');
						$('#err-lokasi').prop("hidden",true);
					}
		
					if(document.getElementById("radiofotorumah").checked==false&&
						document.getElementById("radiofotousaha").checked==false&&
						document.getElementById("radiofotorumahusaha").checked==false){
						$('#err-fotorumah').html('Foto Rumah/Tempat Usaha wajib Diisi');
						$('#err-fotorumah').prop("hidden",false);
						err_count = err_count + 1;
						// $('.error-fotorumah').css({"border-color":"red"});
					}
					else if(document.getElementById("radiofotorumah").checked!=false||
					document.getElementById("radiofotousaha").checked!=false||
					document.getElementById("radiofotorumahusaha").checked!=false){
						$('#err-fotorumah').html('');
						$('#err-fotorumah').prop("hidden",true);
					}
		
					if(document.getElementById("radiojalanrumah").checked==false&&
						document.getElementById("radiojalanusaha").checked==false&&
						document.getElementById("radiojalanrumahusaha").checked==false){
						$('#err-fotojalan').html('Foto Jalan/Lingkungan Sekitar Rumah/Tempat Usaha Nasabah wajib Diisi');
						$('#err-fotojalan').prop("hidden",false);
						err_count = err_count + 1;
						// $('.error-fotorumah').css({"border-color":"red"});
					}
					else if(document.getElementById("radiofotorumah").checked!=false ||
					document.getElementById("radiofotousaha").checked!=false ||
					document.getElementById("radiofotorumahusaha").checked!=false){
						$('#err-fotojalan').html('');
						$('#err-fotojalan').prop("hidden",true);
					}
		
					if($('#namainforman').val()==''||$('#namainforman').val()==null){
						$('#err-namainforman').html('Nama Informan Wajib Diisi');
						$('#err-namainforman').prop("hidden",false);
						$('.error-namainforman').css({"border-color": "red"});
						err_count = err_count + 1;
					}
					else if($('#namainforman').val()!=''||$('#namainforman').val()!=null){
						$('#err-namainforman').html('');
						$('#err-namainforman').prop("hidden",true);
						$('.error-namainforman').css({"border-color":""});
					}
		
					if($('#hubungan-informan-dengan-nasabah option:selected').val()==''||$('#hubungan-informan-dengan-nasabah option:selected').val()==null){
						$('#err-hubunganinforman').html('Hubungan Informan dengan Nasabah Wajib Diisi');
						$('#err-hubunganinforman').prop("hidden",false);
						$('.error-hubunganinforman').css({"border-color":"red"});
						err_count = err_count + 1;
					}
					else if($('#hubungan-informan-dengan-nasabah option:selected').val()==''||$('#hubungan-informan-dengan-nasabah option:selected').val()==null){
						$('#err-hubunganinforman').html('');
						$('#err-hubunganinforman').prop("hidden",true);
						$('.error-hubunganinforman').css({"border-color":""});
					}

					if($('#alamatinforman').val()==''||$('#alamatinforman').val()==null){
						$('#err-alamatinforman').html('Alamat Informan Wajib Diisi');
						$('#err-alamatinforman').prop("hidden",false);
						$('.error-alamatinforman').css({"border-color": "red"});
						err_count = err_count + 1;
					}
					else if($('#alamatinforman').val()!=''||$('#alamatinforman').val()!=null){
						$('#err-alamatinforman').html('');
						$('#err-alamatinforman').prop("hidden",true);
						$('.error-alamatinforman').css({"border-color":""});
					}
		
					if(document.getElementById("radiodebtiya").checked==false&&
					document.getElementById("radiodebttidak").checked==false){
						$('#err-debtcollector').html('Kolom Nasabah dikenal bersosialisasi dengan warga? Wajib Diisi');
						$('#err-debtcollector').prop("hidden",false);
						$('.error-debtcollector').css({"border-color":""});
						err_count = err_count + 1;
					}
					else if(document.getElementById("radiodebtiya").checked!=false||
					document.getElementById("radiodebttidak").checked!=false){
						$('#err-debtcollector').html('');
						$('#err-debtcollector').prop("hidden",true);
						$('.error-debtcollector').css({"border-color":""});
					}
		
					if(document.getElementById("radiososialiya").checked==false&&
					document.getElementById("radiososialtidak").checked==false){
						$('#err-sosialisasi').html('Kolom Nasabah dikenal bersosialisasi dengan warga? Wajib Diisi');
						$('#err-sosialisasi').prop("hidden",false);
						$('.error-sosialisasi').css({"border-color":""});
						err_count = err_count + 1;
					}
					else if(document.getElementById("radiososialiya").checked!=false||
					document.getElementById("radiososialtidak").checked!=false){
						$('#err-sosialisasi').html('');
						$('#err-sosialisasi').prop("hidden",true);
						$('.error-sosialisasi').css({"border-color":""});
					}
		
					if(document.getElementById("radiolsmiya").checked==false&&
					document.getElementById("radiolsmtidak").checked==false){
						$('#err-lsm').html('Kolom Nasabah terlibat di keanggotaan LSM Wajib Diisi');
						$('#err-lsm').prop("hidden",false);
						$('.error-lsm').css({"border-color":""});
						err_count = err_count + 1;
					}
					else if(document.getElementById("radiolsmiya").checked!=false||
					document.getElementById("radiolsmtidak").checked!=false){
						$('#err-lsm').html('');
						$('#err-lsm').prop("hidden",true);
						$('.error-lsm').css({"border-color":""});
					}
		
					if(document.getElementById("radiokepemilikansesuai").checked==false&&
						document.getElementById("radiokepemilikantidaksesuai").checked==false){
							$('#err-statusradio').html('Status Kepemilikan Rumah Wajib Diisi');
							$('#err-statusradio').prop("hidden",false);
							$('.error-statusradio').css({"border-color":"red"});
							err_count = err_count + 1;
					}
					else if(document.getElementById("radiokepemilikansesuai").checked!=false||
					document.getElementById("radiokepemilikantidaksesuai").checked!=false){
						$('#err-statusradio').html('');
						$('#err-statusradio').prop("hidden",true);
						$('.error-statusradio').css({"border-color":""});
					}
		
					if(document.getElementById("radiokepemilikantidaksesuai").checked==true){
						if($('#slc-statustidaksesuai option:selected').val()==''
						|| $('#slc-statustidaksesuai option:selected').val()==null){
							$('#err-statustidaksesuai').html('Informasi Tidak Sesuai Wajib Diisi');
							$('#err-statustidaksesuai').prop("hidden",false);
							$('.error-statustidaksesuai').css({"border-color":"red"});
							err_count = err_count + 1;
						}
						else if($('#slc-statustidaksesuai option:selected').val()!=''
						|| $('#slc-statustidaksesuai option:selected').val()!=null){
							$('#err-statustidaksesuai').html('');
							$('#err-statustidaksesuai').prop("hidden",true);
							$('.error-statustidaksesuai').css({"border-color":""});
						}
					}
		
					if(document.getElementById("radiotinggalsesuai").checked==false&&
						document.getElementById("radiotinggaltidaksesuai").checked==false){
							$('#err-lamatinggal').html('Lama tinggal/menempati rumah sesuai Wajib Diisi');
							$('#err-lamatinggal').prop("hidden",false);
							err_count = err_count + 1;
					}
					else if(document.getElementById("radiotinggalsesuai").checked!=false||
					document.getElementById("radiotinggaltidaksesuai").checked!=false){
						$('#err-lamatinggal').html('');
						$('#err-lamatinggal').prop("hidden",true);
					}
		
					if(document.getElementById("radiotinggaltidaksesuai").checked==true){
						if($('#tahuntidaksesuai').val()==''&& $('#bulantidaksesuai').val()==''){
							$('#err-lamatinggaltidaksesuai').html('Informasi Lama tinggal/menempati rumah Tidak Sesuai Wajib Diisi');
							$('#err-lamatinggaltidaksesuai').prop("hidden",false);
							$('.error-lamatinggaltidaksesuai').css({"border-color":"red"});
							err_count = err_count + 1;
						}
						else if($('tahuntidaksesuai').val()!=''
						|| $('#bulantidaksesuai').val()!=null){
							$('#err-lamatinggaltidaksesuai').html('');
							$('#err-lamatinggaltidaksesuai').prop("hidden",true);
						}
					}

					if($('#namainforman2').val()==''||$('#namainforman2').val()==null){
						$('#err-namainforman2').html('Nama Informan 2 Wajib Diisi');
						$('#err-namainforman2').prop("hidden",false);
						$('.error-namainforman').css({"border-color":"red"});
						err_count = err_count + 1;
					}
					else if($('#namainforman2').val()!=''||$('#namainforman2').val()!=null){
						$('#err-namainforman2').html('');
						$('#err-namainforman2').prop("hidden",true);
						$('.error-namainforman').css({"border-color":""});
					}
		
					if($('#hubungan-informan-dengan-nasabah2 option:selected').val()==''||$('#hubungan-informan-dengan-nasabah2 option:selected').val()==null){
						$('#err-hubunganinforman2').html('Hubungan Informan 2 dengan Nasabah Wajib Diisi');
						$('#err-hubunganinforman2').prop("hidden",false);
						$('.error-hubunganinforman').css({"border-color":"red"});
						err_count = err_count + 1;
					}
					else if($('#hubungan-informan-dengan-nasabah2 option:selected').val()==''||$('#hubungan-informan-dengan-nasabah2 option:selected').val()==null){
						$('#err-hubunganinforman2').html('');
						$('#err-hubunganinforman2').prop("hidden",true);
						$('.error-hubunganinforman').css({"border-color":""});
					}
		
					if(document.getElementById("radiodebtiya2").checked==false&&
					document.getElementById("radiodebttidak2").checked==false){
						$('#err-debtcollector2').html('Kolom Nasabah dikenal bersosialisasi dengan warga? Wajib Diisi');
						$('#err-debtcollector2').prop("hidden",false);
						$('.error-debtcollector').css({"border-color":""});
						err_count = err_count + 1;
					}
					else if(document.getElementById("radiodebtiya2").checked!=false||
					document.getElementById("radiodebttidak2").checked!=false){
						$('#err-debtcollector2').html('');
						$('#err-debtcollector2').prop("hidden",true);
						$('.error-debtcollector2').css({"border-color":""});
					}
		
					if(document.getElementById("radiososialiya2").checked==false&&
					document.getElementById("radiososialtidak2").checked==false){
						$('#err-sosialisasi2').html('Kolom Nasabah dikenal bersosialisasi dengan warga? Wajib Diisi');
						$('#err-sosialisasi2').prop("hidden",false);
						$('.error-sosialisasi').css({"border-color":""});
						err_count = err_count + 1;
					}
					else if(document.getElementById("radiososialiya2").checked!=false||
					document.getElementById("radiososialtidak2").checked!=false){
						$('#err-sosialisasi2').html('');
						$('#err-sosialisasi2').prop("hidden",true);
						$('.error-sosialisasi').css({"border-color":""});
					}
		
					if(document.getElementById("radiolsmiya2").checked==false&&
					document.getElementById("radiolsmtidak2").checked==false){
						$('#err-lsm2').html('Kolom Nasabah terlibat di keanggotaan LSM Wajib Diisi');
						$('#err-lsm2').prop("hidden",false);
						$('.error-lsm').css({"border-color":""});
						err_count = err_count + 1;
					}
					else if(document.getElementById("radiolsmiya2").checked!=false||
					document.getElementById("radiolsmtidak").checked!=false){
						$('#err-lsm2').html('');
						$('#err-lsm2').prop("hidden",true);
						$('.error-lsm').css({"border-color":""});
					}
		
					if(document.getElementById("radiokepemilikansesuai2").checked==false&&
						document.getElementById("radiokepemilikantidaksesuai2").checked==false){
							$('#err-statusradio2').html('Status Kepemilikan Rumah Wajib Diisi');
							$('#err-statusradio2').prop("hidden",false);
							$('.error-statusradio').css({"border-color":"red"});
							err_count = err_count + 1;
					}
					else if(document.getElementById("radiokepemilikansesuai2").checked!=false||
					document.getElementById("radiokepemilikantidaksesuai2").checked!=false){
						$('#err-statusradio2').html('');
						$('#err-statusradio2').prop("hidden",true);
						$('.error-statusradio').css({"border-color":""});
					}
					
					if(document.getElementById("radiokepemilikantidaksesuai2").checked==true){
						if($('#slc-statustidaksesuai2 option:selected').val()==''
						|| $('#slc-statustidaksesuai2 option:selected').val()==null){
							$('#err-statustidaksesuai2').html('Informasi Tidak Sesuai Wajib Diisi');
							$('#err-statustidaksesuai2').prop("hidden",false);
							$('.error-statustidaksesuai').css({"border-color":"red"});
							err_count = err_count + 1;
						}
						else if($('#slc-statustidaksesuai2 option:selected').val()!=''
						|| $('#slc-statustidaksesuai2 option:selected').val()!=null){
							$('#err-statustidaksesuai2').html('');
							$('#err-statustidaksesuai2').prop("hidden",true);
							$('.error-statustidaksesuai').css({"border-color":""});
						}
					}
		
					if(document.getElementById("radiotinggalsesuai2").checked==false&&
						document.getElementById("radiotinggaltidaksesuai2").checked==false){
							$('#err-lamatinggal2').html('Lama tinggal/menempati rumah sesuai Wajib Diisi');
							$('#err-lamatinggal2').prop("hidden",false);
							err_count = err_count + 1;
					}
					else if(document.getElementById("radiotinggalsesuai2").checked!=false||
					document.getElementById("radiotinggaltidaksesuai2").checked!=false){
						$('#err-lamatinggal2').html('');
						$('#err-lamatinggal2').prop("hidden",true);
					}
		
					if(document.getElementById("radiotinggaltidaksesuai2").checked==true){
						if($('#tahuntidaksesuai2').val()==''&& $('#bulantidaksesuai2').val()==''){
							$('#err-lamatinggaltidaksesuai2').html('Informasi Lama tinggal/menempati rumah Tidak Sesuai Wajib Diisi');
							$('#err-lamatinggaltidaksesuai2').prop("hidden",false);
							$('.error-lamatinggaltidaksesuai').css({"border-color":"red"});
							err_count = err_count + 1;
						}
						else if($('tahuntidaksesuai2').val()!=''
						|| $('#bulantidaksesuai2').val()!=null){
							$('#err-lamatinggaltidaksesuai2').html('');
							$('#err-lamatinggaltidaksesuai2').prop("hidden",true);
						}
					}		
				}
			} else {
				console.log($('#slc-statustidaksesuai').val());
				console.log($('#hubungan-informan-dengan-nasabah').val())
				if(document.getElementById("lokasirumah").checked==false&&
						document.getElementById("lokasiusaha").checked==false){
						$('#err-lokasi').html('Lokasi Proses Survey wajib Diisi');
						$('#err-lokasi').prop("hidden",false);
						err_count = err_count + 1;
					}
				else if(document.getElementById("lokasirumah").checked!=false||
				document.getElementById("lokasiusaha").checked!=false){
					$('#err-lokasi').html('');
					$('#err-lokasi').prop("hidden",true);
				}
	
				if(document.getElementById("radiofotorumah").checked==false&&
					document.getElementById("radiofotousaha").checked==false&&
					document.getElementById("radiofotorumahusaha").checked==false){
					$('#err-fotorumah').html('Foto Rumah/Tempat Usaha wajib Diisi');
					$('#err-fotorumah').prop("hidden",false);
					err_count = err_count + 1;
					// $('.error-fotorumah').css({"border-color":"red"});
				}
				else if(document.getElementById("radiofotorumah").checked!=false||
				document.getElementById("radiofotousaha").checked!=false||
				document.getElementById("radiofotorumahusaha").checked!=false){
					$('#err-fotorumah').html('');
					$('#err-fotorumah').prop("hidden",true);
				}
	
				if(document.getElementById("radiojalanrumah").checked==false&&
					document.getElementById("radiojalanusaha").checked==false&&
					document.getElementById("radiojalanrumahusaha").checked==false){
					$('#err-fotojalan').html('Foto Jalan/Lingkungan Sekitar Rumah/Tempat Usaha Nasabah wajib Diisi');
					$('#err-fotojalan').prop("hidden",false);
					err_count = err_count + 1;
					// $('.error-fotorumah').css({"border-color":"red"});
				}
				else if(document.getElementById("radiofotorumah").checked!=false ||
				document.getElementById("radiofotousaha").checked!=false ||
				document.getElementById("radiofotorumahusaha").checked!=false){
					$('#err-fotojalan').html('');
					$('#err-fotojalan').prop("hidden",true);
				}
	
				if($('#namainforman').val()==''||$('#namainforman').val()==null){
					$('#err-namainforman').html('Nama Informan Wajib Diisi');
					$('#err-namainforman').prop("hidden",false);
					$('.error-namainforman').css({"border-color": "red"});
					err_count = err_count + 1;
				}
				else if($('#namainforman').val()!=''||$('#namainforman').val()!=null){
					$('#err-namainforman').html('');
					$('#err-namainforman').prop("hidden",true);
					$('.error-namainforman').css({"border-color":""});
				}
	
				if($('#hubungan-informan-dengan-nasabah option:selected').val()==''||$('#hubungan-informan-dengan-nasabah option:selected').val()==null){
					$('#err-hubunganinforman').html('Hubungan Informan dengan Nasabah Wajib Diisi');
					$('#err-hubunganinforman').prop("hidden",false);
					$('.error-hubunganinforman').css({"border-color":"red"});
					err_count = err_count + 1;
				}
				else if($('#hubungan-informan-dengan-nasabah option:selected').val()==''||$('#hubungan-informan-dengan-nasabah option:selected').val()==null){
					$('#err-hubunganinforman').html('');
					$('#err-hubunganinforman').prop("hidden",true);
					$('.error-hubunganinforman').css({"border-color":""});
				}

				if($('#alamatinforman').val()==''||$('#alamatinforman').val()==null){
						$('#err-alamatinforman').html('Alamat Informan Wajib Diisi');
						$('#err-alamatinforman').prop("hidden",false);
						$('.error-alamatinforman').css({"border-color": "red"});
						err_count = err_count + 1;
					}
					else if($('#alamatinforman').val()!=''||$('#alamatinforman').val()!=null){
						$('#err-alamatinforman').html('');
						$('#err-alamatinforman').prop("hidden",true);
						$('.error-alamatinforman').css({"border-color":""});
					}
	
				if(document.getElementById("radiodebtiya").checked==false&&
				document.getElementById("radiodebttidak").checked==false){
					$('#err-debtcollector').html('Kolom Nasabah dikenal bersosialisasi dengan warga? Wajib Diisi');
					$('#err-debtcollector').prop("hidden",false);
					$('.error-debtcollector').css({"border-color":""});
					err_count = err_count + 1;
				}
				else if(document.getElementById("radiodebtiya").checked!=false||
				document.getElementById("radiodebttidak").checked!=false){
					$('#err-debtcollector').html('');
					$('#err-debtcollector').prop("hidden",true);
					$('.error-debtcollector').css({"border-color":""});
				}
	
				if(document.getElementById("radiososialiya").checked==false&&
				document.getElementById("radiososialtidak").checked==false){
					$('#err-sosialisasi').html('Kolom Nasabah dikenal bersosialisasi dengan warga? Wajib Diisi');
					$('#err-sosialisasi').prop("hidden",false);
					$('.error-sosialisasi').css({"border-color":""});
					err_count = err_count + 1;
				}
				else if(document.getElementById("radiososialiya").checked!=false||
				document.getElementById("radiososialtidak").checked!=false){
					$('#err-sosialisasi').html('');
					$('#err-sosialisasi').prop("hidden",true);
					$('.error-sosialisasi').css({"border-color":""});
				}
	
				if(document.getElementById("radiolsmiya").checked==false&&
				document.getElementById("radiolsmtidak").checked==false){
					$('#err-lsm').html('Kolom Nasabah terlibat di keanggotaan LSM Wajib Diisi');
					$('#err-lsm').prop("hidden",false);
					$('.error-lsm').css({"border-color":""});
					err_count = err_count + 1;
				}
				else if(document.getElementById("radiolsmiya").checked!=false||
				document.getElementById("radiolsmtidak").checked!=false){
					$('#err-lsm').html('');
					$('#err-lsm').prop("hidden",true);
					$('.error-lsm').css({"border-color":""});
				}
	
				if(document.getElementById("radiokepemilikansesuai").checked==false&&
					document.getElementById("radiokepemilikantidaksesuai").checked==false){
						$('#err-statusradio').html('Status Kepemilikan Rumah Wajib Diisi');
						$('#err-statusradio').prop("hidden",false);
						$('.error-statusradio').css({"border-color":"red"});
						err_count = err_count + 1;
				}
				else if(document.getElementById("radiokepemilikansesuai").checked!=false||
				document.getElementById("radiokepemilikantidaksesuai").checked!=false){
					$('#err-statusradio').html('');
					$('#err-statusradio').prop("hidden",true);
					$('.error-statusradio').css({"border-color":""});
				}
	
				if(document.getElementById("radiokepemilikantidaksesuai").checked==true){
					if($('#slc-statustidaksesuai option:selected').val()==''
					|| $('#slc-statustidaksesuai option:selected').val()==null){
						$('#err-statustidaksesuai').html('Informasi Tidak Sesuai Wajib Diisi');
						$('#err-statustidaksesuai').prop("hidden",false);
						$('.error-statustidaksesuai').css({"border-color":"red"});
						err_count = err_count + 1;
					}
					else if($('#slc-statustidaksesuai option:selected').val()!=''
					|| $('#slc-statustidaksesuai option:selected').val()!=null){
						$('#err-statustidaksesuai').html('');
						$('#err-statustidaksesuai').prop("hidden",true);
						$('.error-statustidaksesuai').css({"border-color":""});
					}
				}
	
				if(document.getElementById("radiotinggalsesuai").checked==false&&
					document.getElementById("radiotinggaltidaksesuai").checked==false){
						$('#err-lamatinggal').html('Lama tinggal/menempati rumah sesuai Wajib Diisi');
						$('#err-lamatinggal').prop("hidden",false);
						err_count = err_count + 1;
				}
				else if(document.getElementById("radiotinggalsesuai").checked!=false||
				document.getElementById("radiotinggaltidaksesuai").checked!=false){
					$('#err-lamatinggal').html('');
					$('#err-lamatinggal').prop("hidden",true);
				}
	
				if(document.getElementById("radiotinggaltidaksesuai").checked==true){
					if($('#tahuntidaksesuai').val()==''&& $('#bulantidaksesuai').val()==''){
						$('#err-lamatinggaltidaksesuai').html('Informasi Lama tinggal/menempati rumah Tidak Sesuai Wajib Diisi');
						$('#err-lamatinggaltidaksesuai').prop("hidden",false);
						$('.error-lamatinggaltidaksesuai').css({"border-color":"red"});
						err_count = err_count + 1;
					}
					else if($('tahuntidaksesuai').val()!=''
					|| $('#bulantidaksesuai').val()!=null){
						$('#err-lamatinggaltidaksesuai').html('');
						$('#err-lamatinggaltidaksesuai').prop("hidden",true);
					}
				}
			}

			if (err_count > 0) {
				// $('html, body').animate({
				// 	scrollTop: $(id_position).offset().top
				// }, 800);
			} else {
				insertDataSilentSurvey();
			}
		});

		document.getElementById("remove-informan-silent-survey").onclick = function(){removeInforman()}
		function removeInforman(){
			$('.added').remove();
			informan = 2;
			jml_informan -= 1;
			localStorage.setItem("jml_informan", jml_informan);
			console.log("jml_informan :" + jml_informan);
		}


        document.getElementById("add-informan-silent-survey").onclick = function() {functionAddInformanSilentSurvey()};
        function functionAddInformanSilentSurvey(){
        	jml_informan += 1;
        	localStorage.setItem("jml_informan", jml_informan);
        	console.log("jml_informan :" + jml_informan);
			var file = app.Survey;
                var html = '';
				html += '<div class="added">'
                html += '<div class="form-group row" style="margin-top:25px;">';
                html += '<div class="col-sm-12">'
                html += '<div class="col-sm-9">'
                html += '<div class="input-group">'
                html += '<div class="col-sm-4">'
                html += '<label>Nama Informan '+informan+'</label>'
                html += '</div>'
                html += '<div class="col-sm-4">'
                html += '<input type="input" class="form-control" id="namainforman'+informan+'">'
				html += '<label class="error-namainforman error-info" id="err-namainforman'+informan+'" hidden></label>'
                html += '</div>'
                html += '</div>'
                html += '</div>'
                html += '</div>'
                html += '</div>'
				html +='<div class="form-group row" style="margin-top:25px;">'
				html +='<div class="col-sm-12">'
				html +='<div class="col-sm-9">'
				html +='<div class="input-group">'
				html +='<div class="col-sm-4">'
				html +='<label>Hubungan Informan '+informan+' dengan Nasabah<span style="color:red">*</span></label>'
				html +='</div>'
				html +='<div class="col-sm-4">'
				html +='<select class="form-control select2bs4" id="hubungan-informan-dengan-nasabah-'+informan+'">'
				html +='<option selected disabled=""></option>'
				html +='</select>'
				html +='<label class="error-hubunganinforman error-info" id="err-hubunganinforman'+informan+'" hidden></label>'
				html +='</div>'
				html +='</div>'
				html +='</div>'
				html +='</div>'
				html +='</div>'
				html += '<div class="form-group row" style="margin-top:25px;">';
                html += '<div class="col-sm-12">'
                html += '<div class="col-sm-9">'
                html += '<div class="input-group">'
                html += '<div class="col-sm-4">'
                html += '<label>Alamat Informan '+informan+'<span style="color:red">*</span></label>'
                html += '</div>'
                html += '<div class="col-sm-4">'
                html += '<input type="input" class="form-control" id="alamatinforman'+informan+'">'
				html += '<label class="error-alamatinforman error-info" id="err-alamatinforman'+informan+'" hidden></label>'
                html += '</div>'
                html += '</div>'
                html += '</div>'
                html += '</div>'
                html += '</div>'
				html +='<div class="form-group row" style="margin-top:25px;">'
				html +='<div class="col-sm-12">'
				html +='<div class="col-sm-9">'
				html +='<div class="col-sm-10">'
				html +='<label>Dalam kurun waktu satu bulan terakhir pernah dikunjungi penagih (debt collector)?<span style="color:red">*</span></label>'
				html +='</div>'
				html +='<div class="col-sm-8">'
				html +='<div class="input-group">'
				html +='<div class="col-sm-2" style="margin-left: 10px;">'
				html +='<input class="form-check-input" type="radio" name="radiodebt'+informan+'" id="radiodebtiya'+informan+'" value="01">'
				html +='<label class="form-check-label"> Ya </label>'
				html +='</div>'
				html +='<div class="col-sm-2">'
				html +='<input class="form-check-input" type="radio" name="radiodebt'+informan+'" id="radiodebttidak'+informan+'" value="02">'
				html +='<label class="form-check-label">Tidak</label>'
				html +='</div>'
				html +='</div>'
				html +='<label class="error-debtcollector error-info" id="err-debtcollector'+informan+'" hidden></label>'
				html +='</div>'
				html +='</div>'
				html +='</div>'
				html +='</div>'
				html +='<div class="form-group row" style="margin-top:25px;">'
				html +='<div class="col-sm-12">'
				html +='<div class="col-sm-9">'
				html +='<div class="col-sm-10">'
				html +='<label>Nasabah dikenal bersosialisasi dengan warga?<span style="color:red">*</span></label>'
				html +='</div>'
				html +='<div class="col-sm-8">'
				html +='<div class="input-group">'
				html +='<div class="col-sm-2" style="margin-left: 10px;">'
				html +='<input class="form-check-input" type="radio" name="radiososial'+informan+'" id="radiososialiya'+informan+'" value="01">'
				html +='<label class="form-check-label" for="flexRadioDefault1">Ya</label>'
				html +='</div>'
				html +='<div class="col-sm-2">'
				html +='<input class="form-check-input" type="radio" name="radiososial'+informan+'" id="radiososialtidak'+informan+'" value="02">'
				html +='<label class="form-check-label">Tidak</label>'
				html +='</div><br>'
				html +='</div>'
				html +='<label class="error-sosialisasi error-info" id="err-sosialisasi'+informan+'" hidden></label>'
				html +='</div>'
				html +='</div>'
				html +='</div>'
				html +='</div>'
				html +='<div class="form-group row" style="margin-top:25px;">'
				html +='<div class="col-sm-12">'
				html +='<div class="col-sm-9">'
				html +='<div class="col-sm-10">'
				html +='<label>Nasabah terlibat di keanggotaan LSM?<span style="color:red">*</span></label>'
				html +='</div>'
				html +='<div class="col-sm-8">'
				html +='<div class="input-group">'
				html +='<div class="col-sm-2" style="margin-left: 10px;">'
				html +='<input class="form-check-input" type="radio" name="radiolsm'+informan+'" id="radiolsmiya'+informan+'" value="01">'
				html +='<label class="form-check-label" for="flexRadioDefault1">Ya</label>'
				html +='</div>'
				html +='<div class="col-sm-2">'
				html +='<input class="form-check-input" type="radio" name="radiolsm'+informan+'" id="radiolsmtidak'+informan+'" value="02">'
				html +='<label class="form-check-label">Tidak</label>'
				html +='</div><br>'
				html +='</div>'
				html +='<label class="error-lsm error-info" id="err-lsm'+informan+'" hidden></label>'
				html +='</div>'
				html +='</div>'
				html +='</div>'
				html +='</div>'
				html +='<div class="form-group row" style="margin-top:25px;">'
				html +='<div class="col-sm-12">'
				html +='<div class="col-sm-9">'
				html +='<div class="col-sm-4">'
				html +='<label>Status Kepemilikan Rumah<span style="color:red">*</span></label>'
				html +='</div>'
				html +='<div class="col-sm-4">'
				html +='<select class="form-control select2bs4" id="slc-status-kepemilikan-rumah-'+informan+'" disabled>'
				html +='<option selected disabled=""></option>'
				html +='</select>'
				html +='</div>'
				html +='<div class="col-sm-8">'
				html +='<div class="input-group">'
				html +='<div class="col-sm-2" style="margin-left: 10px;">'
				html +='<input class="form-check-input" type="radio" name="radiostatus'+informan+'" id="radiokepemilikansesuai'+informan+'" value="01">'
				html +='<label class="form-check-label">Sesuai</label>'
				html +='</div>'
				html +='<div class="col-sm-4">'
				html +='<input class="form-check-input" type="radio" name="radiostatus'+informan+'" id="radiokepemilikantidaksesuai'+informan+'" value="02">'
				html +='<label class="form-check-label">Tidak Sesuai</label>'
				html +='</div>'
				html +='</div>'
				html +='<label class="error-statusradio error-info" id="err-statusradio'+informan+'" hidden></label>'
				html +='</div>'
				html +='</div>'
				html +='</div>'
				html +='</div>'
				html +='<div class="form-group row" style="margin-top:25px;" id="statustidaksesuai'+informan+'" hidden>'
				html +='<div class="col-sm-12">'
				html +='<div class="col-sm-9">'
				html +='<div class="col-sm-4">'
				html +='<label>Jika tidak sesuai, apa informasi dari informan<span style="color:red">*</span></label>'
				html +='</div>'
				html +='<div class="col-sm-4">'
				html +='<select class="form-control select2bs4" id="slc-statustidaksesuai'+informan+'">'
				html +='<option selected disabled=""></option>'
				html +='</select>'
				html +='<label class="error-statustidaksesuai error-info" id="err-statustidaksesuai'+informan+'" hidden></label>'
				html +='</div>'
				html +='</div>'
				html +='</div>'
				html +='</div>'
				html +='<div class="form-group row" style="margin-top:25px;">'
				html +='<div class="col-sm-12">'
				html +='<div class="col-sm-9">'
				html +='<div class="col-sm-4">'
				html +='<label>Lama tinggal/menempati rumah sesuai?<span style="color:red">*</span></label>'
				html +='</div>'
				html +='<div class="input-group col-sm-10">'
				html +='<div class="col-sm-2" style="margin-left: 10px;">'
				html +='<input type="input" class="form-control" id="lamatinggaltahun'+informan+'" disabled>'
				html +='</div>'
				html +='<div class="col-sm-2" style="margin-left: 10px;">'
				html +='<label>Tahun</lable>'
				html +='</div>'
				html +='<div class="col-sm-2" style="margin-left: 10px;">'
				html +='<input type="input" class="form-control" id="lamatinggalbulan'+informan+'" disabled>'
				html +='</div>'
				html +='<div class="col-sm-2" style="margin-left: 10px;">'
				html +='<label>Bulan</lable>'
				html +='</div>'
				html +='<div class="input-group">'
				html +='<div class="col-sm-2" style="margin-left: 10px;">'
				html +='<input class="form-check-input" type="radio" name="radiotinggaltidaksesuai" id="radiotinggalsesuai'+informan+'" value="01">'
				html +='<label class="form-check-label">Sesuai</label>'
				html +='</div>'
				html +='<div class="col-sm-3">'
				html +='<input class="form-check-input" type="radio" name="radiotinggaltidaksesuai" id="radiotinggaltidaksesuai'+informan+'" value="02">'
				html +='<label class="form-check-label">Tidak Sesuai</label>'
				html +='</div>'
				html +='</div>'	
				html +='</div>'
				html +='<label class="error-lamatinggal error-info" id="err-lamatinggal'+informan+'" hidden></label>'
				html +='</div>'
				html +='</div>'
				html +='</div>'
				html +='<div class="form-group row" style="margin-top:25px;" id="tinggaltidaksesuai'+informan+'" hidden>'
				html +='<div class="col-sm-12">'
				html +='<div class="col-sm-9">'
				html +='<div class="col-sm-4">'
				html +='<label>Jika tidak sesuai, apa informasi dari informan<span style="color:red">*</span></label>'
				html +='</div>'
				html +='<div class="input-group col-sm-8">'
				html +='<div class="col-sm-2" style="margin-left: 10px;">'
				html +='<input type="input" class="form-control" id="tahuntidaksesuai'+informan+'">'
				html +='</div>'
				html +='<div class="col-sm-2" style="margin-left: 10px;">'
				html +='<label>Tahun</lable>'
				html +='</div>'
				html +='<div class="col-sm-2" style="margin-left: 10px;">'
				html +='<input type="input" class="form-control" id="bulantidaksesuai'+informan+'">'
				html +='</div>'
				html +='<div class="col-sm-2" style="margin-left: 10px;">'
				html +='<label>Bulan</lable>'
				html +='</div>'
				html +='</div>'
				html +='<label class="error-lamatinggaltidaksesuai error-info" id="err-lamatinggaltidaksesuai'+informan+'" hidden></label>'
				html +='</div>'
				html +='</div>'
				html +='</div>'
				html +='<div class="form-group row" style="margin-top:25px;">'
				html +='<div class="col-sm-12">'
				html +='<div class="col-sm-9">'
				html +='<div class="col-sm-4">'
				html +='<label>Foto Selfie PIC Survey dengan informan<span style="color:red">*</span></label>'
				html +='</div>'
				html +='<div class="col-lg-6">'
				html +='<input type="file" class="form-control-file" accept="image/jpg, image/jpeg, image/png" id="dokumen-fotoselfie-silent-survey-'+informan+'">'
				html +='<label class="error-dokumen-fotoselfie-silent-survey-'+informan+' error-info" hidden></label>'
				html +='</div>'
				html +='</div>'
				html +='</div>'
				html +='</div>'
				html +='</div>'

                $('#newinformansilentsurvey').append(html);
				file.getHubunganInformanNasabah1(informan);
				file.getDetailTeleSurvey1(order_id,informan);
				file.informanTidakSesuai(informan);
				file.getKepemilikanRumah1(informan);
				$('#btnAddInforman').val("1")
                informan++;
        }
    },
	
	informanTidakSesuai:function(informan){
		$('#radiokepemilikantidaksesuai'+informan+'').change(function(){
			$('#statustidaksesuai'+informan+'').prop("hidden",false);
		});

		$('#radiokepemilikansesuai'+informan+'').change(function(){
			$('#statustidaksesuai'+informan+'').prop("hidden",true);
		});

		$('input[type=radio][id=radiotinggalsesuai'+informan+']').change(function(){
			$('#tinggaltidaksesuai'+informan+'').prop("hidden",true);
		});

		$('input[type=radio][id=radiotinggaltidaksesuai'+informan+']').change(function(){
			$('#tinggaltidaksesuai'+informan+'').prop("hidden",false);
		});
	},
    getHubunganInformanNasabah: function() {
        var file = app.Survey;

        $.ajax({
            url: app.base_url + file.api + "getHubunganInformanDenganNasabah",
            async: false,
            success: function(response) {
                if (response.status) {
                    var cabang = response.result.map(function (res) {
                        return {
                            id: res.relationCode,
                            text: res.relationDesc
                        };
                    });
                }

                $('#hubungan-informan-dengan-nasabah').select2({
                    theme: 'bootstrap4',
                    placeholder: "-PILIH-",
                    allowClear: true,
                    cache: true,
                    data: cabang,
                    // containerCssClass: "error-slc-cabang",
                    processResults: function (response) {
                        return {
                            results: response.result.map(function (res) {
                                return {
                                    id: res.relationCode,
                                    text: res.relationDesc
                                };
                            }) 
                        };
                    }
                });
            }
        });
    },

	getHubunganInformanNasabah1: function(informan) {
        var file = app.Survey;
		console.log(informan);
        $.ajax({
            url: app.base_url + file.api + "getHubunganInformanDenganNasabah",
            async: false,
            success: function(response) {
                if (response.status) {
                    var cabang = response.result.map(function (res) {
                        return {
                            id: res.relationCode,
                            text: res.relationDesc
                        };
                    });
                }
				
                $('#hubungan-informan-dengan-nasabah-'+informan+'').select2({
                    theme: 'bootstrap4',
                    placeholder: "-PILIH-",
                    allowClear: true,
                    cache: true,
                    data: cabang,
                    // containerCssClass: "error-slc-cabang",
                    processResults: function (response) {
                        return {
                            results: response.result.map(function (res) {
                                return {
                                    id: res.relationCode,
                                    text: res.relationDesc,
                                };
                            }) 
                        };
                    }
                });
            }
        });
    },

	getKepemilikanRumah: function(){
		var file = app.Survey;
		$.ajax({
            url: app.base_url + file.api + "getKepemilikanRumah",
            async: false,
            success: function(response) {
                if (response.status) {
                    var kepemilikanRumah = response.data.map(function (res) {
                        return {
                            id: res.house_status_code,
                            text: res.house_status_desc
                        };
                    });
                }
				console.log($('#slc-statustidaksesuai').val());

                $('#slc-statustidaksesuai').select2({
                    theme: 'bootstrap4',
                    placeholder: "-PILIH-",
                    allowClear: true,
                    cache: true,
                    data: kepemilikanRumah,
                    // containerCssClass: "error-slc-cabang",
                    processResults: function (response) {
                        return {
                            results: response.data.map(function (res) {
                                return {
                                    id: res.house_status_code,
                          			text: res.house_status_desc
                                };
                            }) 
                        };
                    }
                });
            }
        });
	},

	getKepemilikanRumah1: function(informan){
		var file = app.Survey;
		$.ajax({
            url: app.base_url + file.api + "getKepemilikanRumah",
            async: false,
            success: function(response) {
                if (response.status) {
                    var kepemilikanRumah = response.data.map(function (res) {
                        return {
                            id: res.house_status_code,
                            text: res.house_status_desc
                        };
                    });
                }
				console.log($('#slc-statustidaksesuai'+informan+'').val());

                $('#slc-statustidaksesuai'+informan+'').select2({
                    theme: 'bootstrap4',
                    placeholder: "-PILIH-",
                    allowClear: true,
                    cache: true,
                    data: kepemilikanRumah,
                    // containerCssClass: "error-slc-cabang",
                    processResults: function (response) {
                        return {
                            results: response.data.map(function (res) {
                                return {
                                    id: res.house_status_code,
                          			text: res.house_status_desc
                                };
                            }) 
                        };
                    }
                });
            }
        });
	},

	getDetailTeleSurvey: function(order_id) {
    	let param = [];
	    var that = app.Survey;
	    $.ajax({
	        url: app.base_url + that.api + "getDetailTeleSurvey",
	        type: 'POST',
	        data: {
	            order_id: order_id
	        },
	        dataType: 'json',
	        cache: false,
	        async: false,
	        success: function(response, error) {
	            let data = JSON.parse(response);
	            if (data.status) {

	            	localStorage.setItem('detail_tele_survey', JSON.stringify(data['data']));

					$('#inp-nomor-aplikasi-survey').val(data.data.order_id);
					$('#inp-tanggal-aplikasi-survey').val(data.data.order_created_date);
					$('#inp-nama-sesuai-ktp-survey').val(data.data.detail.debitur.personal.deb_nama_sesuai_ktp);
					$('#inp-source-order-survey').val(data.data.source_form_desc);
					$('#inp-tipe-nasabah-survey').val(data.data.applicant_type_desc);
					$('#inp-cabang-kyc-survey').val(data.data.branch_desc);
					$('#lamatinggaltahun').val(data.data.detail.data_kepemilikan.year_of_living);
					$('#lamatinggalbulan').val(data.data.detail.data_kepemilikan.month_of_living);
					$('#informan_code').val(data.data.detail.object_pembiayaan.obj_group_code);

					console.log($('#informan_code').val())
					console.log($("#inp-nomor-aplikasi-survey").val())

	                var kepemilikan_rumah = $("<option selected='selected'></option>").val(data.data.detail.data_kepemilikan.house_of_status_id).text(data.data.detail.data_kepemilikan.house_of_status_desc);
 					$("#slc-status-kepemilikan-rumah").append(kepemilikan_rumah).trigger('change');
	                console.log($("#slc-status-kepemilikan-rumah").val());

					

	            } else {
	                alert_warning(data);
	            }
	        }
	    });
    },

	getDetailTeleSurvey1: function(order_id,informan) {
    	let param = [];
	    var that = app.Survey;
	    $.ajax({
	        url: app.base_url + that.api + "getDetailTeleSurvey",
	        type: 'POST',
	        data: {
	            order_id: order_id
	        },
	        dataType: 'json',
	        cache: false,
	        success: function(response, error) {
	            let data = JSON.parse(response);
	            if (data.status) {
	            	$('#lamatinggaltahun'+informan+'').val(data.data.detail.data_kepemilikan.year_of_living);
					$('#lamatinggalbulan'+informan+'').val(data.data.detail.data_kepemilikan.month_of_living);
	                var kepemilikan_rumah = $("<option selected='selected'></option>").val(data.data.detail.data_kepemilikan.house_of_status_id).text(data.data.detail.data_kepemilikan.house_of_status_desc);
 					$('#slc-status-kepemilikan-rumah-'+informan+'').append(kepemilikan_rumah).trigger('change');
	                // console.log($("#slc-status-kepemilikan-rumah").val());

	            } else {
	                alert_warning(data);
	            }
	        }
	    });
    },

	uploadDocumentSilentSurvey:function (informan){
		var jml_informan = localStorage.getItem("jml_informan");
		if($('#dokumen-fotorumah').val() != undefined){
            var FotoRumah1 = $('#dokumen-fotorumah')[0].files[0];
        }
        
        if($('#dokumen-fotorumah1').val() != undefined){
            var FotoRumah2 = $('#dokumen-fotorumah1')[0].files[0];
        }

        if($('#dokumen-fotojalan').val() != undefined){
            var FotoJalan1 = $('#dokumen-fotojalan')[0].files[0];
        }

        if($('#dokumen-fotojalan1').val() != undefined){
            var FotoJalan2 = $('#dokumen-fotojalan1')[0].files[0];
        }
		
		if($('#dokumen-fotoselfie-silent-survey-1').val() != undefined){
            var FotoInforman1 = $('#dokumen-fotoselfie-silent-survey-1')[0].files[0];
        }
		
		informan--;
		for(var x=2; x<=informan; y-- & x++){
			var FotoInforman = "";
			var y = 2;
			FotoInforman += 'FotoInforman' + x;
			FotoInforman = $('#dokumen-fotoselfie-silent-survey-'+x+'')[0].files[0];
				if($('#dokumen-fotoselfie-silent-survey-'+x+'').val() != undefined){
					if(FotoInforman !=undefined){
						var fileUploadDocument = FotoInforman;
						
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
							if (arrType[1] != "jpg" && arrType[1] != "jpeg" && arrType[1] != "png") {
								Swal.fire(
                                'ERROR',
                                'Format foto tidak sesuai!',
                                'error'
                            )
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
											// console.log("COMPRESS -> " + canvas.toDataURL());
										base64String = canvas.toDataURL().replace("data:", "")
										.replace(/^.+,/, "");
										imageBase64Stringsep = base64String;
										// localStorage.setItem("base64UploadDocument", base64String);
										y++;
										localStorage.setItem("doc_selfie_pic_informan" + y, base64String);
										// console.log("set_doc_selfie_pic_informan" + y);
										console.log("BASE JPG INFORMAN-"+y+"",base64String);
										localStorage.setItem("last_val", y);
										// $("#btn-choose-file-upload-document").attr("src", base64String);
										$("#base64-fotopic-"+y+"").val(base64String);
									}
									image.src = event.target.result;
								}
								reader.readAsDataURL(fileUploadDocument);
								// $("#buttonUpload").val("1");
								alert_info("Berhasil Disimpan!");
							} 
						}
					}
				}
		}

		

		for(x=0;x<6;x++){
			if(x==0){
				if(FotoRumah1!=undefined){
					var fileUploadDocument = FotoRumah1;
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
					
						if (arrType[1] != "jpg" && arrType[1] != "jpeg" && arrType[1] != "png") {
							Swal.fire(
                                'ERROR',
                                'Format foto tidak sesuai!',
                                'error'
                            )
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
										// console.log("COMPRESS -> " + canvas.toDataURL());
									base64String = canvas.toDataURL().replace("data:", "")
									.replace(/^.+,/, "");
									imageBase64Stringsep = base64String;
									// localStorage.setItem("base64UploadDocument", base64String);
									localStorage.setItem("doc_rumah_1", base64String);
									console.log("BASE JPG RUMAH 1",base64String);
									// $("#btn-choose-file-upload-document").attr("src", base64String);
									$("#base64-fotorumah-1").val(base64String);
									$("#btnUploadRumah").val("1")
								}
								image.src = event.target.result;
							}
							reader.readAsDataURL(fileUploadDocument);
							// $("#buttonUpload").val("1");
							alert_info("Berhasil Disimpan!");
						} 
					}
				}
				
			}
			else if(x==1){
				if(FotoRumah2 != undefined){
					var fileUploadDocument = FotoRumah2;
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
					
						if (arrType[1] != "jpg" && arrType[1] != "jpeg" && arrType[1] != "png") {
							Swal.fire(
                                'ERROR',
                                'Format foto tidak sesuai!',
                                'error'
                            )
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
										// console.log("COMPRESS -> " + canvas.toDataURL());
									base64String = canvas.toDataURL().replace("data:", "")
									.replace(/^.+,/, "");
									imageBase64Stringsep = base64String;
									// localStorage.setItem("base64UploadDocument", base64String);
									localStorage.setItem("doc_rumah_2", base64String);
									console.log("BASE JPG RUMAH 2",base64String);
									// $("#btn-choose-file-upload-document").attr("src", base64String);
									$("#base64-fotorumah-2").val(base64String);
								}
								image.src = event.target.result;
							}
							reader.readAsDataURL(fileUploadDocument);
							// $("#buttonUpload").val("1");
							alert_info("Berhasil Disimpan!");
						} 
					}
				}
				
			}

			else if(x==2){
				if(FotoJalan1 != undefined){
					var fileUploadDocument = FotoJalan1;
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
					
						if (arrType[1] != "jpg" && arrType[1] != "jpeg" && arrType[1] != "png") {
							Swal.fire(
                                'ERROR',
                                'Format foto tidak sesuai!',
                                'error'
                            )
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
										// console.log("COMPRESS -> " + canvas.toDataURL());
									base64String = canvas.toDataURL().replace("data:", "")
									.replace(/^.+,/, "");
									imageBase64Stringsep = base64String;
									// localStorage.setItem("base64UploadDocument", base64String);
									localStorage.setItem("doc_jalan_1", base64String);
									console.log("BASE JPG JALAN 1",base64String);
									// $("#btn-choose-file-upload-document").attr("src", base64String);
									$("#base64-fotojalan-1").val(base64String);
								}
								image.src = event.target.result;
							}
							reader.readAsDataURL(fileUploadDocument);
							// $("#buttonUpload").val("1");
							alert_info("Berhasil Disimpan!");
						} 
					}
				}
				
			}

			else if(x==3){
				if(FotoJalan2 !=undefined){
					var fileUploadDocument = FotoJalan2;
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
					
						if (arrType[1] != "jpg" && arrType[1] != "jpeg" && arrType[1] != "png") {
							Swal.fire(
                                'ERROR',
                                'Format foto tidak sesuai!',
                                'error'
                            )
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
										// console.log("COMPRESS -> " + canvas.toDataURL());
									base64String = canvas.toDataURL().replace("data:", "")
									.replace(/^.+,/, "");
									imageBase64Stringsep = base64String;
									// localStorage.setItem("base64UploadDocument", base64String);
									localStorage.setItem("doc_jalan_2", base64String);
									console.log("BASE JPG JALAN 2",base64String);
									// $("#btn-choose-file-upload-document").attr("src", base64String);
									$("#base64-fotojalan-2").val(base64String);
								}
								image.src = event.target.result;
							}
							reader.readAsDataURL(fileUploadDocument);
							// $("#buttonUpload").val("1");
							alert_info("Berhasil Disimpan!");
						} 
					}
				}
				
			}

			else if(x==4){
				if(FotoInforman1 !=undefined){
					var fileUploadDocument = FotoInforman1;
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
					
						if (arrType[1] != "jpg" && arrType[1] != "jpeg" && arrType[1] != "png") {
							Swal.fire(
                                'ERROR',
                                'Format foto tidak sesuai!',
                                'error'
                            )
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
										// console.log("COMPRESS -> " + canvas.toDataURL());
									base64String = canvas.toDataURL().replace("data:", "")
									.replace(/^.+,/, "");
									imageBase64Stringsep = base64String;
									// localStorage.setItem("base64UploadDocument", base64String);
									localStorage.setItem("doc_pic_informan_1", base64String);
									console.log("BASE JPG INFORMAN 1",base64String);
									// $("#btn-choose-file-upload-document").attr("src", base64String);
									$("#base64-fotopic-1").val(base64String);
								}
								image.src = event.target.result;
							}
							reader.readAsDataURL(fileUploadDocument);
							// $("#buttonUpload").val("1");
							alert_info("Berhasil Disimpan!");
						} 
					}
				}
				
			}

			else if(x==5){
				
			}
		}
		
	},

}

function insertDataSilentSurvey() {
	var that = app.Survey;
	var jml_informan = localStorage.getItem("jml_informan");

	var silent_survey = {};
	var lokasi_survey_code = '';
	var lokasi_survey_desc = '';

	if($('#lokasirumah').is(':checked') && !$('#lokasiusaha').is(':checked')){
		lokasi_survey_code = '01';
		lokasi_survey_desc = $('#lokasirumah').val();
	} else if (!$('#lokasirumah').is(':checked') && $('#lokasiusaha').is(':checked')){
		lokasi_survey_code = '02';
		lokasi_survey_desc = $('#lokasiusaha').val();
	} else if($('#lokasirumah').is(':checked') && $('#lokasiusaha').is(':checked')){
		lokasi_survey_code = '03';
		lokasi_survey_desc = $('#lokasirumah').val() + ' DAN ' + $('#lokasiusaha').val();
	}

	// var lokasi_survey_rumah = $('#lokasirumah').is(':checked');
	// var lokasi_survey_usaha = $('#lokasiusaha').is(':checked');
	var pilihan_foto_rumah_usaha_1 = $('input[name="radiorumahtempatusaha"]:checked').val(); 
	var dokumen_foto_rumah_usaha_1 = localStorage.getItem("doc_rumah_1");
	var pilihan_foto_rumah_usaha_2 = $('input[name="radiorumahtempatusaha1"]:checked').val(); 
	var dokumen_foto_rumah_usaha_2 = localStorage.getItem("doc_rumah_2");
	var pilihan_foto_jalan_lingkungan_1 = $('input[name="radiojalan"]:checked').val(); 
	var dokumen_foto_jalan_lingkungan_1 = localStorage.getItem("doc_jalan_1");
	var pilihan_foto_jalan_lingkungan_2 = $('input[name="radiojalan1"]:checked').val(); 
	var dokumen_foto_jalan_lingkungan_2 = localStorage.getItem("doc_jalan_2");
	// var nama_informan = $('#namainforman').val();
	// var hubungan_informan = $('#hubungan-informan-dengan-nasabah option:selected').text();
	// var alamat_informan = $('#alamatinforman').val();
	// var pernah_dikunjungi_penagih = $('input[name="radiodebt"]:checked').val();
	// var dikenal_bersosialisasi_warga = $('input[name="radiososial"]:checked').val();
	// var terlibat_lsm = $('input[name="radiolsm"]:checked').val();
	// var status_kepemilikan_rumah = $('#slc-status-kepemilikan-rumah option:selected').text();
	// var status_kepemilikan_rumah_sesuai_tidak = $('input[name="radiostatus"]:checked').val();
	// var informasi_status_kepemilikan_rumah = $('#slc-statustidaksesuai option:selected').text();
	// var lama_tinggal_tahun = $('#lamatinggaltahun').val();
	// var lama_tinggal_bulan = $('#lamatinggalbulan').val();
	// var lama_tinggal_sesuai_tidak = $('input[name="radiotinggaltidaksesuai"]:checked').val();
	// var informasi_lama_tinggal_tahun = $('#tahuntidaksesuai').val();
	// var informasi_lama_tinggal_bulan = $('#bulantidaksesuai').val();
	// var dokumen_selfie_pic_informan = '';//localStorage.getItem("doc_pic_informan_1");
	var informan = [];
	informan.push({
		"nama_informan": $('#namainforman').val(),
		"hubungan_informan": $('#hubungan-informan-dengan-nasabah option:selected').text(),
		"alamat_informan": $('#alamatinforman').val(),
		"pernah_dikunjungi_penagih": $('input[name="radiodebt"]:checked').val(),
		"dikenal_bersosialisasi_warga": $('input[name="radiososial"]:checked').val(),
		"terlibat_lsm": $('input[name="radiolsm"]:checked').val(),
		"status_kepemilikan_rumah": $('#slc-status-kepemilikan-rumah option:selected').text(),
		"status_kepemilikan_rumah_sesuai_tidak": $('input[name="radiostatus"]:checked').val(),
		"informasi_status_kepemilikan_rumah": $('#slc-statustidaksesuai option:selected').text(),
		"lama_tinggal_tahun": $('#lamatinggaltahun').val(),
		"lama_tinggal_bulan": $('#lamatinggalbulan').val(),
		"lama_tinggal_sesuai_tidak": $('input[name="radiotinggaltidaksesuai"]:checked').val(),
		"informasi_lama_tinggal_tahun": $('#tahuntidaksesuai').val(),
		"informasi_lama_tinggal_bulan": $('#bulantidaksesuai').val(),
		"dokumen_selfie_pic_informan": localStorage.getItem("doc_pic_informan_1")
	});

	if (jml_informan > 1) {
		for (var i = 2; i <= jml_informan; i++) {
			informan.push({
				"nama_informan": $("input[id='namainforman" + i + "']").val(),
				"hubungan_informan": $("select[id='hubungan-informan-dengan-nasabah-" + i + "'] option:selected").text().toUpperCase(),
				"alamat_informan": $("input[id='alamatinforman" + i + "']").val(),
				"pernah_dikunjungi_penagih": $('input[name="radiodebt' + i + '"]:checked').val(),
				"dikenal_bersosialisasi_warga": $('input[name="radiososial' + i + '"]:checked').val(),
				"terlibat_lsm": $('input[name="radiolsm' + i + '"]:checked').val(),
				"status_kepemilikan_rumah": $("select[id='slc-status-kepemilikan-rumah-" + i + "'] option:selected").text().toUpperCase(),
				"status_kepemilikan_rumah_sesuai_tidak": $('input[name="radiostatus' + i + '"]:checked').val(),
				"informasi_status_kepemilikan_rumah": $("select[id='slc-statustidaksesuai" + i + "'] option:selected").text().toUpperCase(),
				"lama_tinggal_tahun": $("input[id='lamatinggaltahun" + i + "']").val(),
				"lama_tinggal_bulan": $("input[id='lamatinggalbulan" + i + "']").val(),
				"lama_tinggal_sesuai_tidak": $('input[name="radiotinggaltidaksesuai' + i + '"]:checked').val(),
				"informasi_lama_tinggal_tahun": $("input[id='tahuntidaksesuai" + i + "']").val(),
				"informasi_lama_tinggal_bulan": $("input[id='bulantidaksesuai" + i + "']").val(),
				"dokumen_selfie_pic_informan": localStorage.getItem("doc_selfie_pic_informan"+i)
			});
			// console.log("get_doc_selfie_pic_informan" + i);
		}
	}

	silent_survey = {
		lokasi_survey_code: lokasi_survey_code,
		lokasi_survey_desc: lokasi_survey_desc,
		pilihan_foto_rumah_usaha_1: pilihan_foto_rumah_usaha_1,
		dokumen_foto_rumah_usaha_1: dokumen_foto_rumah_usaha_1,
		pilihan_foto_rumah_usaha_2: pilihan_foto_rumah_usaha_2,
		dokumen_foto_rumah_usaha_2: dokumen_foto_rumah_usaha_2,
		pilihan_foto_jalan_lingkungan_1: pilihan_foto_jalan_lingkungan_1,
		dokumen_foto_jalan_lingkungan_1: dokumen_foto_jalan_lingkungan_1,
		pilihan_foto_jalan_lingkungan_2: pilihan_foto_jalan_lingkungan_2,
		dokumen_foto_jalan_lingkungan_2: dokumen_foto_jalan_lingkungan_2,
		informan: informan
		// nama_informan: nama_informan,
		// hubungan_informan: hubungan_informan,
		// alamat_informan: alamat_informan,
		// pernah_dikunjungi_penagih: pernah_dikunjungi_penagih,
		// dikenal_bersosialisasi_warga: dikenal_bersosialisasi_warga,
		// terlibat_lsm: terlibat_lsm,
		// status_kepemilikan_rumah: status_kepemilikan_rumah,
		// status_kepemilikan_rumah_sesuai_tidak: status_kepemilikan_rumah_sesuai_tidak,
		// informasi_status_kepemilikan_rumah: informasi_status_kepemilikan_rumah,
		// lama_tinggal_tahun: lama_tinggal_tahun,
		// lama_tinggal_bulan: lama_tinggal_bulan,
		// lama_tinggal_sesuai_tidak: lama_tinggal_sesuai_tidak,
		// informasi_lama_tinggal_tahun: informasi_lama_tinggal_tahun,
		// informasi_lama_tinggal_bulan: informasi_lama_tinggal_bulan,
		// dokumen_selfie_pic_informan: dokumen_selfie_pic_informan


	}

	// var get_detail_tele_survey = localStorage.getItem("detail_tele_survey");
	var get_detail_tele_survey = JSON.parse(localStorage.getItem('detail_tele_survey'));

	console.log(silent_survey);
	// console.log(get_detail_tele_survey);

	$.ajax({
		type: "post",
		url: app.base_url + that.api + "submitSilentSurvey",
		async: false,
		data: {

			order_id: get_detail_tele_survey.order_id,
			application_id: get_detail_tele_survey.application_id,
			initial_recommendation: get_detail_tele_survey.initial_recommendation,
			contract_id: get_detail_tele_survey.contract_id,
			customer_name: get_detail_tele_survey.customer_name,
			branch_code: get_detail_tele_survey.branch_code, 
			branch_desc: get_detail_tele_survey.brand_desc, 
			source_order_code: get_detail_tele_survey.source_order_code, 
			source_order_desc: get_detail_tele_survey.source_form_desc,
			source_form_code: get_detail_tele_survey.source_form_code, 
			source_form_desc: get_detail_tele_survey.source_form_desc, 
			current_form_code: 'SIL', 
			current_form_desc: 'SILENT SURVEY', 
			order_created_date: get_detail_tele_survey.order_created_date, 
			order_created_by: get_detail_tele_survey.order_created_by, 
			applicant_type_code : get_detail_tele_survey.applicant_type_code,
			applicant_type_desc : get_detail_tele_survey.applicant_type_desc,
			customer_type_code: get_detail_tele_survey.customer_type_code, 
			customer_type_desc: get_detail_tele_survey.customer_type_desc, 
			channel_code: get_detail_tele_survey.channel_code, 
			channel_desc: get_detail_tele_survey.channel_desc, 
			outlet_channel_code: get_detail_tele_survey.outlet_channel_code, 
			outlet_channel_desc: get_detail_tele_survey.outlet_channel_desc, 
			order_mode: get_detail_tele_survey.order_mode, 
			flag_marketing : get_detail_tele_survey.flag_marketing, 
			flag_trade_in : get_detail_tele_survey.flag_trade_in, 
			promo_code : get_detail_tele_survey.promo_code,
			insurance_com_id : get_detail_tele_survey.insurance_com_id,
			insurance_com_desc : get_detail_tele_survey.insurance_com_desc,
			mkt_program_code : get_detail_tele_survey.mkt_program_code, 
			mkt_program_desc : get_detail_tele_survey.mkt_program_desc, 
			financing_obj_code: get_detail_tele_survey.financing_obj_code, 
			financing_obj_desc: get_detail_tele_survey.financing_obj_desc, 
			screening_1 : get_detail_tele_survey.screening_1,
			screening_2 : get_detail_tele_survey.screening_2,
			screening_3 : '',
			detail: get_detail_tele_survey.detail,
			customer_behaviour: get_detail_tele_survey.customer_behaviour,
			scoring_dealer_mitra: get_detail_tele_survey.scoring_dealer_mitra,
			scoring_employee: get_detail_tele_survey.scoring_employee,
			debitur_category: get_detail_tele_survey.debitur_category,
			dukcapil: get_detail_tele_survey.dukcapil,
			slik: get_detail_tele_survey.slik,
			dukcapil_pasangan: get_detail_tele_survey.dukcapil_pasangan,
			slik_pasangan: get_detail_tele_survey.slik_pasangan,
			credit_scoring: get_detail_tele_survey.credit_scoring,
			tipe_aplikasi: get_detail_tele_survey.tipe_aplikasi,
			telesurvey: get_detail_tele_survey.telesurvey,
			silent_survey: silent_survey
			// lokasi_survey_rumah:  lokasi_survey_rumah,
			// lokasi_survey_usaha: lokasi_survey_usaha,
			// pilihan_foto_rumah_usaha: pilihan_foto_rumah_usaha,
			// dokumen_foto_rumah_usaha: dokumen_foto_rumah_usaha,
			// pilihan_foto_jalan_lingkungan: pilihan_foto_jalan_lingkungan,
			// dokumen_foto_jalan_lingkungan: dokumen_foto_jalan_lingkungan,
			// informan: informan

		},
		dataType: "json",
		cache: false,
		success: function (response, error) {
			let param = $.parseJSON(response);
			// alert_info(param.data, function () {});
			alert_info("Berhasil Disimpan!");
		},
	});
}
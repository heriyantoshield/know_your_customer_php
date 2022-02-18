//-- ALERT DIBAWAH FIELD
// $('#validationTukerTambah').click(function() {
//     var merk = document.getElementById("slc-merk-lf").value;
//     var model = document.getElementById("inp-model-lf").value;
//     var tahunKendaraan = document.getElementById("inp-tahun-kendaraan-lf").value;
//     var namaSesuaiKtp = document.getElementById("inp-nama-sesuai-ktp-lf").value;
//     var noHpWa = document.getElementById("inp-nohp-wa-lf").value;
//     var email = document.getElementById("inp-email-lf-dananow").value;
//     var noKtp = document.getElementById("inp-no-ktp-lf").value;
//     var tanggalLahir = document.getElementById("inp-tanggal-lahir-lf").value;
//     var alamatKtp = document.getElementById("inp-alamat-ktp-lf").value;
//     var upload = $('#btn-upload-lf').val();
//     var cabangMandiri = document.getElementById("slc-cabang-mandiri-lf").value;
//     var pemberiReferral = document.getElementById("inp-pemberi-referral-lf").value;
//     var kodePromo = document.getElementById("inp-kode-promo-lf").value;
//     var checkbox = document.getElementById("inp-checkbox-lf").checked;
//     var text, text2, text3;
//     if (merk == "") {
//       text = "Field tidak boleh kosong!";
//     	document.getElementById("AlertMessageMerk").innerHTML = text;
//     }
//     if (model == "") {
//       text = "Field tidak boleh kosong!";
//     	document.getElementById("AlertMessageModel").innerHTML = text;
//     }
//     if (tahunKendaraan == "") {
//       text = "Field tidak boleh kosong!";
//     	document.getElementById("AlertMessageTahunKendaraan").innerHTML = text;
//     }
//     if (namaSesuaiKtp == "") {
//       text = "Field tidak boleh kosong!";
//     	document.getElementById("AlertMessageNamaKTP").innerHTML = text;
//     }
//     if (noHpWa == "") {
//       text = "Field tidak boleh kosong!";
//     	document.getElementById("AlertMessageNoHpWa").innerHTML = text;
//     }
//     if (email == "") {
//       text = "Field tidak boleh kosong!";
//     	document.getElementById("AlertMessageEmail").innerHTML = text;
//     }
//     if (noKtp == "") {
//       text = "Field tidak boleh kosong!";
//     	document.getElementById("AlertMessageNoKTP").innerHTML = text;
//     }
//     if (tanggalLahir == "") {
//       text = "Field tidak boleh kosong!";
//     	document.getElementById("AlertMessageTanggalLahir").innerHTML = text;
//     }
//     if (alamatKtp == "") {
//       text = "Field tidak boleh kosong!";
//     	document.getElementById("AlertMessageAlamatKTP").innerHTML = text;
//     }
//     if (upload == "" || upload == false) {
//     	upload = false;
//       text2 = "Harus Upload!";
//     	document.getElementById("AlertMessageUpload").innerHTML = text2;
//     }
//     if (cabangMandiri == "") {
//       text = "Field tidak boleh kosong!";
//     	document.getElementById("AlertMessageCabangMandiri").innerHTML = text;
//     }
//     if (pemberiReferral == "") {
//       text = "Field tidak boleh kosong!";
//     	document.getElementById("AlertMessagePemberiReferral").innerHTML = text;
//     }
//     if (kodePromo == "") {
//       text = "Field tidak boleh kosong!";
//     	document.getElementById("AlertMessageKodePromo").innerHTML = text;
//     }
//     if(checkbox == false){
// 		    text3 = "Checkbox harus dicentang!";
//     		document.getElementById("AlertMessageCheckbox").innerHTML = text3;
// 		}
//     else if (merk != "", model != "", tahunKendaraan != "", 
//     	namaSesuaiKtp != "", noHpWa != "", email != "", 
//     	noKtp != "", tanggalLahir != "", alamatKtp != "", 
//     	cabangMandiri != "", pemberiReferral != "", kodePromo != "",
//     	upload == "", checkbox == false){
//     	document.location.pathname = "revamp/c_entry_manual/identitas_company";
//     }
// });

// $('#slc-merk-lf').change(function() {
// 	if($('#slc-merk-lf') != null){
// 		document.getElementById("AlertMessageMerk").innerHTML = null;
// 	}
// });
// $('#inp-model-lf').change(function() {
// 	if($('#inp-model-lf') != null){
// 		document.getElementById("AlertMessageModel").innerHTML = null;
// 	}
// });
// $('#inp-tahun-kendaraan-lf').change(function() {
// 	if($('#inp-tahun-kendaraan-lf') != null){
// 		document.getElementById("AlertMessageTahunKendaraan").innerHTML = null;
// 	}
// });
// $('#inp-nama-sesuai-ktp-lf').change(function() {
// 	if($('#inp-nama-sesuai-ktp-lf') != null){
// 		document.getElementById("AlertMessageNamaKTP").innerHTML = null;
// 	}
// });
// $('#inp-nohp-wa-lf').change(function() {
// 	if($('#inp-nohp-wa-lf') != null){
// 		document.getElementById("AlertMessageNoHpWa").innerHTML = null;
// 	}
// });
// $('#inp-email-lf-dananow').change(function() {
// 	if($('#inp-email-lf-dananow') != null){
// 		document.getElementById("AlertMessageEmail").innerHTML = null;
// 	}
// });
// $('#inp-no-ktp-lf').change(function() {
// 	if($('#inp-no-ktp-lf') != null){
// 		document.getElementById("AlertMessageNoKTP").innerHTML = null;
// 	}
// });
// $('#inp-tanggal-lahir-lf').change(function() {
// 	if($('#inp-tanggal-lahir-lf') != null){
// 		document.getElementById("AlertMessageTanggalLahir").innerHTML = null;
// 	}
// });
// $('#inp-alamat-ktp-lf').change(function() {
// 	if($('#inp-alamat-ktp-lf') != null){
// 		document.getElementById("AlertMessageAlamatKTP").innerHTML = null;
// 	}
// });
// $('#btn-upload-lf').click(function() {
// 	$('#btn-upload-lf').val(true);
// 	if($('#btn-upload-lf').val(true)){
// 		document.getElementById("AlertMessageUpload").innerHTML = null;
// 	}
// });
// $('#slc-cabang-mandiri-lf').change(function() {
// 	if($('#slc-cabang-mandiri-lf') != null){
// 		document.getElementById("AlertMessageCabangMandiri").innerHTML = null;
// 	}
// });
// $('#inp-pemberi-referral-lf').change(function() {
// 	if($('#inp-pemberi-referral-lf') != null){
// 		document.getElementById("AlertMessagePemberiReferral").innerHTML = null;
// 	}
// });
// $('#inp-kode-promo-lf').change(function() {
// 	if($('#inp-kode-promo-lf') != null){
// 		document.getElementById("AlertMessageKodePromo").innerHTML = null;
// 	}
// });
// $('#inp-checkbox-lf').change(function() {
// 	if(document.getElementById("inp-checkbox-lf").checked == true){
// 		document.getElementById("AlertMessageCheckbox").innerHTML = null;
// 	}
// });


//-- ALERT DIDALAM MODAL
$('#validationTukerTambah').click(function() {
	var message = '';
	var err = 0;
	var email = $('#inp-email-lf-dananow').val();
	var merk = $('#slc-merk-lf').val();
  var model = $('#inp-model-lf').val();
  var tahunKendaraan = $('#inp-tahun-kendaraan-lf').val();
  var namaSesuaiKtp = $('#inp-nama-sesuai-ktp-lf').val();
  var noHpWa = $('#inp-nohp-wa-lf').val();
  var noKtp = $('#inp-no-ktp-lf').val();
  var tanggalLahir = $('#inp-tanggal-lahir-lf').val();
  var alamatKtp = $('#inp-alamat-ktp-lf').val();
  var upload = $('#btn-upload-lf').val();
  var cabangMandiri = $('#slc-cabang-mandiri-lf').val();
  var pemberiReferral = $('#inp-pemberi-referral-lf').val();
  var kodePromo = $('#inp-kode-promo-lf').val();
  var checkbox = document.getElementById("inp-checkbox-lf").checked;

	if(merk == ''){
		message = message + '<center> Silahkan pilih Merk terlebih dahulu </center> </br>';
		err = 1;
	}

	if(model == ''){
		message = message + '<center> Silahkan input/pilih Model terlebih dahulu </center> </br>';
		err = 1;
	}
	
	if(tahunKendaraan == ''){
		message = message + '<center> Silahkan input Tahun Kendaraan terlebih dahulu </center> </br>';
		err = 1;
	}

	if(namaSesuaiKtp == ''){
		message = message + '<center> Silahkan input Nama Sesuai KTP terlebih dahulu </center> </br>';
		err = 1;
	}

	if(noHpWa == ''){
		message = message + '<center> Silahkan input No HP/WA terlebih dahulu </center> </br>';
		err = 1;
	}

	if (email == '') {
		message = message + '<center> Silahkan isi Email terlebih dahulu </center> </br>';
		err = 1;
	} else if (email != '') {
		var idx1 = email.indexOf('@');
		var idx2 = email.lastIndexOf('.');
		if (idx1 < 1 || idx2 < idx1 + 2 || idx2 + 2 >= email.length) {
			message = message + '<center> Alamat Email Invalid </center> </br>';
			err = 1;
		} else {
			message = message + '';
			err = 0;
		}
	}

	if(noKtp == ''){
		message = message + '<center> Silahkan input No KTP terlebih dahulu </center> </br>';
		err = 1;
	}

	if(tanggalLahir == ''){
		message = message + '<center> Silahkan input Tanggal Lahir terlebih dahulu </center> </br>';
		err = 1;
	}

	if(alamatKtp == ''){
		message = message + '<center> Silahkan input Alamat KTP terlebih dahulu </center> </br>';
		err = 1;
	}

	if(upload == ''){
		message = message + '<center> Silahkan Upload Data terlebih dahulu </center> </br>';
		err = 1;
	}

	if(cabangMandiri == ''){
		message = message + '<center> Silahkan input Cabang Mandiri terlebih dahulu </center> </br>';
		err = 1;
	}

	if(pemberiReferral == ''){
		message = message + '<center> Silahkan input Pemberi Referral terlebih dahulu </center> </br>';
		err = 1;
	}

	if(kodePromo == ''){
		message = message + '<center> Silahkan input Kode Promo terlebih dahulu </center> </br>';
		err = 1;
	}
	if(checkbox == false){
		message = message + '<center> Silahkan centang Checkbox terlebih dahulu </center> </br>';
		err = 1;
	}

	if (err == 1) {
		$('#modal-alert').modal('show');
		$('#form-alert').html(message);
	} else {
		document.location.pathname = "revamp/c_entry_manual/identitas_company";
	}

});

$('#btn-upload-lf').click(function() {
	$('#btn-upload-lf').val(true);
});
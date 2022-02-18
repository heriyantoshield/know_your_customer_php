$(document).ready(function() {
	$('#form-obj-pembiayaan').hide();
	$('#form-pencairan').hide();

	$('#pilih-cmo-ef-satu').hide();
	$('#cmo-ef-satu').prop('disabled', true);
	$('#cmo-btn-satu').prop('disabled', true);
});

var base_url = $('#base_url').val();

$('#slc-jenis-kendaraan').change(function() {
	if($('#slc-jenis-kendaraan option:selected').val() == '1') {
		$('#form-obj-pembiayaan').hide();
		$('#form-pencairan').hide();
		$('#form-dp-bayar').show();
	} else {
		$('#form-obj-pembiayaan').show();
		// $('#customRadio1').prop('checked', true);
		$('#form-pencairan').hide();
		$('#form-dp-bayar').show();
	}
});

$('#radio-obj-pembiayaan').change(function() {
	if ($('input[name="customRadio"]:checked', '#radio-obj-pembiayaan').val() == '1') {
		$('#form-dp-bayar').show();
		$('#form-pencairan').hide();
	} else {
		$('#form-dp-bayar').hide();
		$('#form-pencairan').show();
	}
});

$('#radio-pilih-cmo').change(function() {
	if ($('input[name="pilih-cmo"]:checked', '#radio-pilih-cmo').val() == '1') {
		$('#inp-nama-cmo').prop('disabled', false);
		$('#btn-pilih-cmo').prop('disabled', false);
	} else {
		$('#inp-nama-cmo').prop('disabled', true);
		$('#btn-pilih-cmo').prop('disabled', true);
	}
});

$('#radio-pilih-pic').change(function() {
	if ($('input[name="pilihPIC"]:checked', '#radio-pilih-pic').val() == '1') {
		$('#pilih-cmo-ef-satu').hide();
		$('#cmo-check').prop('checked', false);
		$('#cmo-ef-satu').prop('disabled', true);
		$('#cmo-btn-satu').prop('disabled', true);
	} else {
		$('#pilih-cmo-ef-satu').show();
		$('#cmo-check').prop('checked', false);
		$('#cmo-ef-satu').prop('disabled', true);
		$('#cmo-btn-satu').prop('disabled', true);
	}
});

$('#pilih-cmo-ef-satu').change(function() {
	if($('input[type="checkbox"]:checked', '#pilih-cmo-ef-satu').val() == '1') {
		$('#cmo-ef-satu').prop('disabled', false);
		$('#cmo-btn-satu').prop('disabled', false);
	} else {
		$('#cmo-ef-satu').prop('disabled', true);
		$('#cmo-btn-satu').prop('disabled', true);
	}
});

$('#btn-kirim-ef').click(function() {
	if (!$('input[name="pilihPIC"]').is(':checked')) {
		message = '<center> Harap pilih yang akan mengisi data berikutnya </center>';
		$('#modal-alert').modal('show');
		$('#form-alert').html(message);
	} else if ($('input[name="pilihPIC"]:checked').val() == '2') {
		if ($('#cmo-check').is(':checked')) {
			if ($('#cmo-ef-satu').val() == '') {
				message = '<center> Silahkan pilih CMO terlebih dahulu </center>';
				$('#modal-alert').modal('show');
				$('#form-alert').html(message);
			} else {
				$('#modal-ef-satu').modal('hide');
				$('#modal-final').modal('show');
			}
		} else {
			$('#modal-ef-satu').modal('hide');
			$('#modal-final').modal('show');
		}	
	} else {
		$('#modal-ef-satu').modal('hide');
		$('#modal-final').modal('show');
	}
})

//fitrah

// Contoh Event Klik Kirim MP 1
$('#btn-kirim-lf-master').click(function() {
	var message = '';
	var err = 0;

	if ($('#slc-dealer-mp1').val() == null) {
		message = message + '<center> Silahkan Pilih Dealer Terlebih Dahulu </center> </br>';
		err = 1;
	}

	if ($('#inp-nama-ktp-mp1').val() == '') {
		message = message + '<center> Silahkan Isi Nama KTP Terlebih Dahulu </center> </br>';
		err = 1;
	}

	if ($('#inp-no-hp-mp1').val() == '') {
		message = message + '<center> Silahkan Isi No HP Terlebih Dahulu </center> </br>';
		err = 1;
	}

	if ($('#inp-alamat-mp1').val() == '') {
		message = message + '<center> Silahkan Isi Alamat Terlebih Dahulu </center> </br>';
		err = 1;
	}

	if ($('#slc-jenis-kendaraan-mp1').val() == null) {
		message = message + '<center> Silahkan Pilih Jenis Kendaraan Terlebih Dahulu </center> </br>';
		err = 1;
	}

	if ($('#inp-merk-model-mp1').val() == '') {
		message = message + '<center> Silahkan Isi Merk dan Model Terlebih Dahulu </center> </br>';
		err = 1;
	}

	if ($('#inp-harga-kendaraan-mp1').val() == '') {
		message = message + '<center> Silahkan Isi Harga Kendaraan Terlebih Dahulu </center> </br>';
		err = 1;
	}
	
	if ($('#inp-dp-bayar-mp1').val() == '') {
		message = message + '<center> Silahkan Isi DP Bayar Terlebih Dahulu </center> </br>';
		err = 1;
	}
	
	if ($('#inp-pengajuan-cair-mp1').val() == '') {
		message = message + '<center> Silahkan Isi Pencajuan Pencairan Terlebih Dahulu  </center> </br>';
		err = 1;
	}

	if ($('#inp-tenor-mp1').val() == '') {
		message = message + '<center> Silahkan Isi Tenor Terlebih Dahulu </center> </br>';
		err = 1;
	}
	
	if ($('#inp-angsuran-bulan-mp1').val() == '') {
		message = message + '<center> Silahkan Isi Angsuran Perbulan Terlebih Dahulu  </center> </br>';
		err = 1;
	}

	if (err == 1) {
		$('#modal-alert').modal('show');
		$('#form-alert').html(message);
	} else {
		$('#modal-lf-satu.').modal('show');
	}

});

// Contoh Event Klik Kirim MP 2
$('#btn-kirim-ef-master').click(function() {
	var message = '';
	var err = 0;
	var email = $('#inp-email-ef').val();

	if ($('#slc-dealer-mp2').val() == null) {
		message = message + '<center> Silahkan Pilih Dealer Terlebih Dahulu </center> </br>';
		err = 1;
	} 

	if ($('#upload-file').val() == '') {
		message = message + '<center> Silahkan Upload Foto KTP Terlebih Dahulu </center> </br>';
		err = 1;
	} 
	// else {
	// 	$config['upload_path'] = './assets/foto';
	// 	$config['allowed_types'] = 'jpg|png|jpeg';
	// }

	if ($('#inp-nomorktp-mp2').val() == '') {
		message = message + '<center> Silahkan Isi Nomor KTP Terlebih Dahulu </center> </br>';
		err = 1;
	}

	if ($('#inp-namaktp-mp2').val() == '') {
		message = message + '<center> Silahkan Isi Nama KTP Terlebih Dahulu </center> </br>';
		err = 1;
	}

	if ($('#inp-tempat-lahir-mp2').val() == '') {
		message = message + '<center> Silahkan Isi Tempat Lahir Terlebih Dahulu </center> </br>';
		err = 1;
	}

	if ($('#inp-tgl-lhr-mp2').val() == '') {
		message = message + '<center> Silahkan Isi Tanggal Lahir Terlebih Dahulu </center> </br>';
		err = 1;
	}

	if ($('#slc-jenis-kelamin-mp2').val() == null) {
		message = message + '<center> Silahkan Pilih Jenis Kelamin Terlebih Dahulu </center> </br>';
		err = 1;
	}

	if ($('#inp-almt-mp2').val() == '') {
		message = message + '<center> Silahkan Isi Alamat Terlebih Dahulu </center> </br>';
		err = 1;
	}

	if ($('#inp-rt-rw-mp2').val() == '') {
		message = message + '<center> Silahkan Isi RT/RW Terlebih Dahulu </center> </br>';
		err = 1;
	}


	if ($('#inp-alamat-mp2').val() == '') {
		message = message + '<center> Silahkan Isi Alamat Terlebih Dahulu </center> </br>';
		err = 1;
	}
	
	if ($('#inp-nohp1-mp2').val() == '') {
		message = message + '<center> Silahkan Isi No HP Terlebih Dahulu </center> </br>';
		err = 1;
	}

	if ($('#inp-ibu-kandung-mp2').val() == '') {
		message = message + '<center> Silahkan Isi Nama Gadis Ibu Kandung Terlebih Dahulu </center> </br>';
		err = 1;
	}

	if ($('#slc-status-kawin-mp2').val() == null) {
		message = message + '<center> Silahkan Pilih Status Kawin Terlebih Dahulu </center> </br>';
		err = 1;
	}

	if ($('#slc-nasabah-mp2').val() == null) {
		message = message + '<center> Silahkan Pilih Nasabah Terlebih Dahulu </center> </br>';
		err = 1;
	}
	
	if ($('#slc-jenis-kendaraan-mp2').val() == null) {
		message = message + '<center> Silahkan Pilih Jenis Kendaraan Terlebih Dahulu </center> </br>';
		err = 1;
	}

	if ($('#inp-merk-model-mp2').val() == '') {
		message = message + '<center> Silahkan Isi Merk dan Model Terlebih Dahulu </center> </br>';
		err = 1;
	}

	if ($('#inp-harga-kendaraan-mp2').val() == '') {
		message = message + '<center> Silahkan Isi Harga Kendaraan Terlebih Dahulu </center> </br>';
		err = 1;
	}
	
	if ($('#inp-dp-bayar-mp2').val() == '') {
		message = message + '<center> Silahkan Isi DP Bayar Terlebih Dahulu </center> </br>';
		err = 1;
	}
	
	// if ($('#inp-pengajuan-cair-mp2').val() == '') {
	// 	message = message + '<center> Silahkan Isi Pencajuan Pencairan Terlebih Dahuluu </center> </br>';
	// 	err = 1;
	// }

	if ($('#inp-tenor-mp2').val() == '') {
		message = message + '<center> Silahkan Isi Tenor Terlebih Dahulu </center> </br>';
		err = 1;
	}
	
	if ($('#inp-angsuran-bulan-mp2').val() == '') {
		message = message + '<center> Silahkan Isi Angsuran Perbulan Terlebih Dahulu </center> </br>';
		err = 1;
	}
	
	if (email == '') {
		message = message + '<center> Silahkan Isi Email Terlebih Dahulu </center> </br>';
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

	if (err == 1) {
		$('#modal-alert').modal('show');
		$('#form-alert').html(message);
	} else {
		$('#modal-ef-satu').modal('show');
	}
});

//dika
//Validasi dengan Modal EFD 2
$('#btn-simpan-efd').click(function () {
	console.log('trigger button save efd');
	var message = '';
	var err = 0;
	if ($('#tgl_order').val()=='') {
		message = message + '<center> Silahkan isi Tanggal Order terlebih dahulu </center> </br>';
		err = 1;
	}
	if ($('#source_order').val()=='') {
		message = message + '<center> Silahkan isi Source Order terlebih dahulu </center> </br>';
		err = 1;
	}
	if ($('#no_order').val()=='') {
		message = message + '<center> Silahkan isi No Order terlebih dahulu </center> </br>';
		err = 1;
	}
	if ($('#nama_debitur').val()=='') {
		message = message + '<center> Silahkan isi Nama Debitur terlebih dahulu </center> </br>';
		err = 1;
	}
	if ($('#no_hp').val()=='') {
		message = message + '<center> Silahkan isi No HP terlebih dahulu </center> </br>';
		err = 1;
	}
	if ($('#slc-tipe-referal-efd').val()== null) {
		message = message + '<center> Silahkan pilih Tipe Referal terlebih dahulu </center> </br>';
		err = 1;
	}
	if ($('#id_ref').val()=='') {
		message = message + '<center> Silahkan isi ID Referal terlebih dahulu </center> </br>';
		err = 1;
	}
	if ($('#pem_ref').val()=='') {
		message = message + '<center> Silahkan isi Pemberi Referal terlebih dahulu </center> </br>';
		err = 1;
	}
	if ($('#slc-cabang-referal-efd').val()== null) {
		message = message + '<center> Silahkan pilih Cabang Referal terlebih dahulu </center> </br>';
		err = 1;
	}
	if ($('#kd_prm').val()=='') {
		message = message + '<center> Silahkan isi Kode Promo terlebih dahulu </center> </br>';
		err = 1;
	}
	if ($('#slc-status').val()== null) {
		message = message + '<center> Silahkan pilih Status terlebih dahulu </center> </br>';
		err = 1;
	}
	if ($('#inp-notes').val()=='') {
		message = message + '<center> Silahkan isi Notes terlebih dahulu </center> </br>';
		err = 1;
	}
	if ($('#inp-tgl-jam').val()=='') {
		message = message + '<center> Silahkan isi Tanggal dan Jam terlebih dahulu </center> </br>';
		err = 1;
	}

	if (err == 1) {
		$('#modal-alert').modal('show');
		$('#form-alert').html(message);
	} else {
		$('#modal-alert').modal('show');
		message = message + '<center> Berhasil Save </center> </br>';
		$('#form-alert').html(message);
	}
});

$('#btn-simpan-obj-idn-debitur').click(function () {
	console.log('trigger button save objek identitas debitur');
	var message = '';
	var err = 0;
	if ($('#inp-foto-ktp').val()=='') {
		message = message + '<center> Silahkan upload Foto KTP terlebih dahulu </center> </br>';
		err = 1;
	}
	if ($('#slc-jenis-kel').val()== null) {
		message = message + '<center> Silahkan pilih Jenis Kelamin terlebih dahulu </center> </br>';
		err = 1;
	}
	if ($('#inp-nama-ibu').val()=='') {
		message = message + '<center> Silahkan isi Nama Ibu Kandung terlebih dahulu </center> </br>';
		err = 1;
	}
	if ($('#inp-nama-ktp').val()=='') {
		message = message + '<center> Silahkan isi Nama KTP terlebih dahulu </center> </br>';
		err = 1;
	}
	if ($('#inp-no-ktp').val()=='') {
		message = message + '<center> Silahkan isi No KTP terlebih dahulu </center> </br>';
		err = 1;
	}
	if ($('#inp-tanggal-lahir').val()=='') {
		message = message + '<center> Silahkan isi Tanggal Lahir terlebih dahulu </center> </br>';
		err = 1;
	}
	if ($('#inp-tempat-lahir').val()=='') {
		message = message + '<center> Silahkan isi Tempat Lahir terlebih dahulu </center> </br>';
		err = 1;
	}
	if ($('#nasabah').val()=='') {
		message = message + '<center> Silahkan isi Nasabah terlebih dahulu </center> </br>';
		err = 1;
	}
	if ($('#area_price').val()=='') {
		message = message + '<center> Silahkan isi Area Pricing terlebih dahulu </center> </br>';
		err = 1;
	}
	if ($('#tipe_pemb').val()=='') {
		message = message + '<center> Silahkan isi Tipe Pembiayaan terlebih dahulu </center> </br>';
		err = 1;
	}
	if ($('#jenis_ken').val()=='') {
		message = message + '<center> Silahkan isi Jenis Kendaraan terlebih dahulu </center> </br>';
		err = 1;
	}
	if ($('#obj_pemb').val()=='') {
		message = message + '<center> Silahkan isi Objek Pembiayaan terlebih dahulu </center> </br>';
		err = 1;
	}
	if ($('#merk').val()=='') {
		message = message + '<center> Silahkan isi Merk terlebih dahulu </center> </br>';
		err = 1;
	}
	if ($('#model_ken').val()=='') {
		message = message + '<center> Silahkan isi Model Kendaraan terlebih dahulu </center> </br>';
		err = 1;
	}
	if ($('#harga_ken').val()=='') {
		message = message + '<center> Silahkan isi Harga Kendaraan terlebih dahulu </center> </br>';
		err = 1;
	}
	if ($('#tahun_ken').val()=='') {
		message = message + '<center> Silahkan isi Tahun Kendaraan terlebih dahulu </center> </br>';
		err = 1;
	}
	if ($('#tenor').val()=='') {
		message = message + '<center> Silahkan isi Tenor terlebih dahulu </center> </br>';
		err = 1;
	}
	if ($('#down_pay').val()=='') {
		message = message + '<center> Silahkan isi Down Payment terlebih dahulu </center> </br>';
		err = 1;
	}
	if ($('#angs_perbln').val()=='') {
		message = message + '<center> Silahkan isi Angsuran Perbulan terlebih dahulu </center> </br>';
		err = 1;
	}
	if ($('#tot_pem_prtm').val()=='') {
		message = message + '<center> Silahkan isi Total Pembayaran Pertama terlebih dahulu </center> </br>';
		err = 1;
	}

	if (err == 1) {
		$('#modal-alert').modal('show');
		$('#form-alert').html(message);
	} else {
		$('#modal-alert').modal('show');
		message = message + '<center> Berhasil Save </center> </br>';
		$('#form-alert').html(message);
	}
});

$('#btn-submit-pengajuan-baru').click(function () {
	console.log('trigger button submit pengajuan baru');
	var message = '';
	var err = 0;
	if ($('#inp-no-order').val()=='') {
		message = message + '<center> Silahkan isi No Order terlebih dahulu </center> </br>';
		err = 1;
	}
	if ($('#slc-source-order').val()== null) {
		message = message + '<center> Silahkan pilih Source Order terlebih dahulu </center> </br>';
		err = 1;
	}
	if ($('#slc-status-order').val()== null) {
		message = message + '<center> Silahkan pilih Status Order terlebih dahulu </center> </br>';
		err = 1;
	}

	if (err == 1) {
		$('#modal-alert').modal('show');
		$('#form-alert').html(message);
	} else {
		$('#modal-alert').modal('show');
		message = message + '<center> Berhasil Save </center> </br>';
		$('#form-alert').html(message);
	}
});

$('#btn-simpan-obj-pemb').click(function () {
	console.log('trigger button submit objek pembiayaan');
	var message = '';
	var err = 0;
	if ($('#nasabah').val()=='') {
		message = message + '<center> Silahkan isi Nasabah terlebih dahulu </center> </br>';
		err = 1;
	}
	if ($('#area_price').val()=='') {
		message = message + '<center> Silahkan isi Area Pricing terlebih dahulu </center> </br>';
		err = 1;
	}
	if ($('#tipe_pemb').val()=='') {
		message = message + '<center> Silahkan isi Tipe Pembiayaan terlebih dahulu </center> </br>';
		err = 1;
	}
	if ($('#jenis_ken').val()=='') {
		message = message + '<center> Silahkan isi Jenis Kendaraan terlebih dahulu </center> </br>';
		err = 1;
	}
	if ($('#obj_pemb').val()=='') {
		message = message + '<center> Silahkan isi Objek Pembiayaan terlebih dahulu </center> </br>';
		err = 1;
	}
	if ($('#merk').val()=='') {
		message = message + '<center> Silahkan isi Merk terlebih dahulu </center> </br>';
		err = 1;
	}
	if ($('#model_ken').val()=='') {
		message = message + '<center> Silahkan isi Model Kendaraan terlebih dahulu </center> </br>';
		err = 1;
	}
	if ($('#harga_ken').val()=='') {
		message = message + '<center> Silahkan isi Harga Kendaraan terlebih dahulu </center> </br>';
		err = 1;
	}
	if ($('#tahun_ken').val()=='') {
		message = message + '<center> Silahkan isi Tahun Kendaraan terlebih dahulu </center> </br>';
		err = 1;
	}
	if ($('#tenor').val()=='') {
		message = message + '<center> Silahkan isi Tenor terlebih dahulu </center> </br>';
		err = 1;
	}
	if ($('#down_pay').val()=='') {
		message = message + '<center> Silahkan isi Down Payment terlebih dahulu </center> </br>';
		err = 1;
	}
	if ($('#angs_perbln').val()=='') {
		message = message + '<center> Silahkan isi Angsuran Perbulan terlebih dahulu </center> </br>';
		err = 1;
	}
	if ($('#tot_pem_prtm').val()=='') {
		message = message + '<center> Silahkan isi Total Pembayaran Pertama terlebih dahulu </center> </br>';
		err = 1;
	}

	if (err == 1) {
		$('#modal-alert').modal('show');
		$('#form-alert').html(message);
	} else {
		$('#modal-alert').modal('show');
		message = message + '<center> Berhasil Save </center> </br>';
		$('#form-alert').html(message);
	}
});

$(".lemparData").on('click',function(){
	 var currentRow=$(this).closest("tr");
	 var col1=currentRow.find("td:eq(0)").html();
	 var col2=currentRow.find("td:eq(1)").html();
	 var col3=currentRow.find("td:eq(2)").html();
	 var col4=currentRow.find("td:eq(3)").html();
	 var col5=currentRow.find("td:eq(4)").html();
	 var data=col1+","+col2+","+col3+","+col4+","+col5;
	 alert(data);
});




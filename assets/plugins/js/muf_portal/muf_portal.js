$(document).ready(function () {
	$('#row-pengajuan-pencairan').hide();
});

var flag_form = 0;

$('#radio-obj-pembiayaan').change(function () {
	if ($('input[name="radioObjekPembiayaan"]:checked', '#radio-obj-pembiayaan').val() == '1') {
		$('#row-dp-bayar').show();
		$('#row-pengajuan-pencairan').hide();
		$('#form-order').find('.has-error').removeClass('has-error');
		$('#form-order').find('.has-error-border').removeClass('has-error-border');
	} else {
		$('#row-dp-bayar').hide();
		$('#row-pengajuan-pencairan').show();
		$('#form-order').find('.has-error').removeClass('has-error');
		$('#form-order').find('.has-error-border').removeClass('has-error-border');
	}
});

$('#radio-jenis-form').change(function () {
	if ($('input[name="radioJenisForm"]:checked', '#radio-jenis-form').val() == '1') {
		if (flag_form == 0) {
			field_disabled();
			flag_form = 1;
		} else {
			alert_confirm("<center>Apakah ingin mengganti form menjadi Form Ringkas? <br> (Isian akan terhapus)</center>", function () {
				field_disabled();
			});
		}
		$('#form-order').find('.has-error').removeClass('has-error');
		$('#form-order').find('.has-error-border').removeClass('has-error-border');
	} else {
		if (flag_form == 0) {
			field_enabled();
			flag_form = 1;
		} else {
			alert_confirm("<center>Apakah ingin mengganti form menjadi Form Lengkap?</center>", function () {
				field_enabled();
			});
		}
		$('#form-order').find('.has-error').removeClass('has-error');
		$('#form-order').find('.has-error-border').removeClass('has-error-border');
	}
});

$('#btn-kirim-form-order').click(function () {
	var err = 0;
	var find_mandatory = $("#form-order").find(':not(:disabled)').serializeArray();
	var id_input = '';
	var id_slc = '';
	var id_txt = '';
	var id_upl = '';
	var find_length = 0;
	var jenis = {};
	if (!$('input[name="radioJenisForm"]').is(':checked')) {
		find_length = find_mandatory.length;
		jenis = {
			name: 'radioJenisForm',
			value: ''
		};
		find_mandatory.splice(find_length, 0, jenis);
	}

	if (!$('input[name="uploadFotoKTP"]').is(':disabled')) {
		if ($('input[name="uploadFotoKTP"]').val() == '') {
			find_length = find_mandatory.length;
			jenis = {
				name: 'uploadFotoKTP',
				value: ''
			};
			find_mandatory.splice(find_length, 0, jenis);
		}
	}

	for (var i = 0; i < find_mandatory.length; i++) {
		var type = find_mandatory[i].name.substring(0, 3);
		if (find_mandatory[i].value == '') {
			if (type == 'inp') {
				id_input = $('input[name="' + find_mandatory[i].name + '"]').attr('id');
				$('#' + id_input).addClass('has-error');
			} else if (type == 'slc') {
				id_slc = $('select[name="' + find_mandatory[i].name + '"]').attr('id');
				$('#' + id_slc).addClass('has-error');
			} else if (type == 'txt') {
				id_txt = $('textarea[name="' + find_mandatory[i].name + '"]').attr('id');
				$('#' + id_txt).addClass('has-error');
			} else if (type == 'rad') {
				$('input[name="' + find_mandatory[i].name + '"]').closest('div').addClass('has-error-border');
				// $('.val-radio').addClass('has-error');
			} else if (type == 'upl') {
				id_upl = $('input[name="' + find_mandatory[i].name + '"]').attr('id');
				$('#' + id_upl).addClass('has-error-border');
			}
			err++;
		} else {
			if (type == 'inp') {
				id_input = $('input[name="' + find_mandatory[i].name + '"]').attr('id');
				$('#' + id_input).removeClass('has-error');
			} else if (type == 'slc') {
				id_slc = $('select[name="' + find_mandatory[i].name + '"]').attr('id');
				$('#' + id_slc).removeClass('has-error');
			} else if (type == 'txt') {
				id_txt = $('textarea[name="' + find_mandatory[i].name + '"]').attr('id');
				$('#' + id_txt).removeClass('has-error');
			} else if (type == 'rad') {
				$('input[name="' + find_mandatory[i].name + '"]').closest('div').removeClass('has-error-border');
				// $('.val-radio').addClass('has-error');
			} else if (type == 'upl') {
				id_upl = $('input[name="' + find_mandatory[i].name + '"]').attr('id');
				$('#' + id_upl).removeClass('has-error-border');
			}
		}
	}

	if (err > 0) {
		alert_error("<center>Kolom Mandatory tidak boleh kosong! <br> (Highlight Merah)</center>", function () {

		});

	} else {
		$('#modal-kirim-order').modal('show');

	}
});

$('#radio-pilih-cmo').change(function () {
	if ($('input[name="radioPilihCMO"]:checked', '#radio-pilih-cmo').val() == '1') {
		$('#inp-cari-cmo').prop('disabled', false);
		$('#btn-src-cari-cmo').prop('disabled', false);
	} else {
		$('#inp-cari-cmo').prop('disabled', true);
		$('#btn-src-cari-cmo').prop('disabled', true);
	}
});

$('#btn-modal-kirim-order').click(function () {
	if ($('input[name="radioPilihCMO"]:checked').val() == '1') {
		if ($('#inp-cari-cmo').val() == '') {
			alert_warning("<center>Silahkan pilih CMO terlebih dahulu!</center>", function () {

			});
		} else {

		}
	} else {

	}
});

$('#btn-src-cari-cmo').click(function () {
	$('#modal-pilih-cmo').modal('show');
});

$('#btn-modal-pilih-cmo').click(function () {

});

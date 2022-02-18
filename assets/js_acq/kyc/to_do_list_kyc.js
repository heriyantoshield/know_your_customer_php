$(document).ready(function() {
    app.ToDoListKYC.init();
});

var tbl_list_approval_oid_gabungan_individu = $("#table-list-approval-oid-gabungan-individu").DataTable({
	"destroy": true,
	"paging": true,
	"lengthChange": false,
	// "searching": false,
	"ordering": true,
	"info": true,
	"autoWidth": false,
	"columns": [	
	null,	
    { "visible": false},	
    null,	
    null,	
    null,	
    null,	
    null,	
    null,
    null]
});

var currentdate = new Date();
function formatDate(currentdate)
{	var tanggal = currentdate.getDate() +"-"+ currentdate.toLocaleString('default', { month: 'short' }) + "-" + currentdate.getFullYear();
	return tanggal;
}

var Lastdate = new Date();
var nextmonth = new Date(Lastdate.setMonth(Lastdate.getMonth()+1));
function formatDate(nextmonth)
{	
	var tanggal = nextmonth.getDate() +"-"+ nextmonth.toLocaleString('default', { month: 'short' }) + "-" + nextmonth.getFullYear();
	return tanggal;
}

var new_date = new Date();
var new_dates = new Date();
function formatDate(new_dates)
{	
	var twoDigitDate = new_dates.getDate()+"";
	if(twoDigitDate.length==1){
		twoDigitDate="0" +twoDigitDate;
		var tanggal = twoDigitDate +"-"+ new_dates.toLocaleString('default', { month: 'short' }) + "-" + new_dates.getFullYear();
	} else{
		var tanggal = new_dates.getDate() +"-"+ new_dates.toLocaleString('default', { month: 'short' }) + "-" + new_dates.getFullYear();
	}
        
	return tanggal;
}

app.ToDoListKYC = {
	controller: 'Kyc/',
	api: 'Kyc_api/',
	elm: {},

	init: function () {
		var file = app.ToDoListKYC;
		file.getCabang();

		$('input[type=radio][id=radionoaplikasi]').change(function () {
			$('#inp-nomor-aplikasi-todolist').val("");
			$('#inp-nomor-aplikasi-todolist').attr("disabled", false);
			$('#inp-date-from-todolist').val("");
			$('#inp-date-from-todolist').attr("disabled", true);
			$('#inp-date-to-todolist').val("");
			$('#inp-date-to-todolist').attr("disabled", true);
			$('#inp-nama-nasabah-todolist').val("");
			$('#inp-nama-nasabah-todolist').attr("disabled", true);
			$('#slc-hasil-screening').val("");
			$('#slc-hasil-screening').attr("disabled", true);
		});

		$('input[type=radio][id=radiotanggal]').change(function () {
			$('#inp-nomor-aplikasi-todolist').val("");
			$('#inp-nomor-aplikasi-todolist').attr("disabled", true);
			$('#inp-date-from-todolist').attr("disabled", false);
			$('#inp-date-to-todolist').attr("disabled", false);
			$('#inp-nama-nasabah-todolist').val("");
			$('#inp-nama-nasabah-todolist').attr("disabled", true);
			$('#slc-hasil-screening').val("");
			$('#slc-hasil-screening').attr("disabled", true);
		});

		$('input[type=radio][id=radionamanasabah]').change(function () {
			$('#inp-nomor-aplikasi-todolist').val("");
			$('#inp-nomor-aplikasi-todolist').attr("disabled", true);
			$('#inp-date-from-todolist').val("");
			$('#inp-date-from-todolist').attr("disabled", true);
			$('#inp-date-to-todolist').val("");
			$('#inp-date-to-todolist').attr("disabled", true);
			$('#inp-nama-nasabah-todolist').val("");
			$('#inp-nama-nasabah-todolist').attr("disabled", false);
			$('#slc-hasil-screening').val("");
			$('#slc-hasil-screening').attr("disabled", true);
		});

		$('input[type=radio][id=radiohasilscreening]').change(function () {
			$('#inp-nomor-aplikasi-todolist').val("");
			$('#inp-nomor-aplikasi-todolist').attr("disabled", true);
			$('#inp-date-from-todolist').val("");
			$('#inp-date-from-todolist').attr("disabled", true);
			$('#inp-date-to-todolist').val("");
			$('#inp-date-to-todolist').attr("disabled", true);
			$('#inp-nama-nasabah-todolist').val("");
			$('#inp-nama-nasabah-todolist').attr("disabled", true);
			$('#slc-hasil-screening').attr("disabled", false);
		});

		$('#slc-cabang').change(function() {
			if ($('#slc-cabang option:selected').val() != null || $('#slc-cabang option:selected').val() != "") {
				$('#err-slc-cabang').html('');
                $('#err-slc-cabang').prop("hidden", true);
                $('.error-slc-cabang').css({"border-color": ""});
			}
		});

		//On Input No Aplikasi
		document.getElementById("inp-nomor-aplikasi-todolist").oninput = function() {functionNoAplikasi()};
		function functionNoAplikasi() {
			if($('#inp-nomor-aplikasi-todolist').val() != null || $('#inp-nomor-aplikasi-todolist').val() != ""){
				$('#err-inp-noaplikasi').html('');
				$('#err-inp-noaplikasi').prop("hidden", true);
				$('input[id=inp-nomor-aplikasi-todolist]').css({"border-color": ""});
			}
		}

		//On Input Tanggal
		document.getElementById("inp-date-from-todolist").oninput = function() {functionDateFrom()};
		document.getElementById("inp-date-to-todolist").oninput = function() {functionDateTo()};
		function functionDateFrom() {
			if($('#inp-date-from-todolist').val() != null && $('#inp-date-from-todolist').val() != ""){
				$('#err-inp-date-from').html('');
				$('#err-inp-date-from').prop("hidden", true);
				$('input[id=inp-date-from-todolist]').css({"border-color": ""});
			}
			if($('#inp-date-to-todolist').val() != null && $('#inp-date-to-todolist').val() != ""){
				$('#err-inp-date-to').html('');
				$('#err-inp-date-to').prop("hidden", true);
				$('input[id=inp-date-to-todolist]').css({"border-color": ""});
			}
		}
		function functionDateTo() {
			if($('#inp-date-from-todolist').val() != null && $('#inp-date-from-todolist').val() != ""){
				$('#err-inp-date-from').html('');
				$('#err-inp-date-from').prop("hidden", true);
				$('input[id=inp-date-from-todolist]').css({"border-color": ""});
			}
			if($('#inp-date-to-todolist').val() != null && $('#inp-date-to-todolist').val() != ""){
				$('#err-inp-date-to').html('');
				$('#err-inp-date-to').prop("hidden", true);
				$('input[id=inp-date-to-todolist]').css({"border-color": ""});
			}
		}

		//On Input Nama Nasabah
		document.getElementById("inp-nama-nasabah-todolist").oninput = function() {functionNamaNasabah()};
		function functionNamaNasabah() {
			if($('#inp-nama-nasabah-todolist').val() != null && $('#inp-nama-nasabah-todolist').val() != ""){
				$('#err-inp-nama-nasabah').html('');
				$('#err-inp-nama-nasabah').prop("hidden", true);
				$('input[id=inp-nama-nasabah-todolist]').css({"border-color": ""});
			}
		}

		//On Input Hasil Screening
		document.getElementById("slc-hasil-screening").oninput = function() {functionHasilScreening()};
		function functionHasilScreening() {
			if($('#slc-hasil-screening').val() != null && $('#slc-hasil-screening').val() != ""){
				$('#err-slc-hasil-screening').html('');
				$('#err-inp-nama-nasabah').prop("hidden", true);
				$('select[id=slc-hasil-screening]').css({"border-color": ""});
			}
		}

		//---insiliasiasi form input tanggal
		// $("#inp-date-from-todolist").val(formatDate(currentdate));
		// $("#inp-date-to-todolist").val(formatDate(nextmonth));

		$('#inp-date-from-todolist').datetimepicker({
			format:"DD-MMM-YYYY",
			useCurrent:false,
			allowInputToggle:true
		});

		$('#inp-date-to-todolist').datetimepicker({
			format:"DD-MMM-YYYY",
			useCurrent:false,
			allowInputToggle:true
		});

		$('#inp-date-from-todolist').on("change.datetimepicker", function(){
			new_date = new Date($('#inp-date-from-todolist').val());
			new_dates= new Date(new_date.setMonth(new_date.getMonth()+1));
			$('#inp-date-to-todolist').val(formatDate(new_dates));
		});

		$('#inp-date-to-todolist').on("change.datetimepicker", function(){
			new_date = new Date($('#inp-date-to-todolist').val());
			new_dates= new Date(new_date.setMonth(new_date.getMonth()-1));
			$('#inp-date-from-todolist').val(formatDate(new_dates));
		});

		$('#btn-cari-todolist').click(function() {
			//Cabang
			if ($('#slc-cabang option:selected').val() == null || $('#slc-cabang option:selected').val() == "") {
                $('#err-slc-cabang').html('Cabang Wajib Diisi');
                $('#err-slc-cabang').prop("hidden", false);
                $('.error-slc-cabang').css({"border-color": "red"});

                if (id_position == null || id_position == "") {
                   id_position = '#slc-cabang';
                }

                err_count = err_count + 1;
            } 
			else {
                $('#err-slc-cabang').html('');
                $('#err-slc-cabang').prop("hidden", true);
                $('.error-slc-cabang').css({"border-color": ""});
            }

			if(document.getElementById('radionoaplikasi').checked == false 
			&& document.getElementById('radiotanggal').checked == false
			&& document.getElementById('radionamanasabah').checked == false
			&& document.getElementById('radiohasilscreening').checked == false){
				alert_info("Harap Pilih Metode Pencarian!");
			}

			if(document.getElementById('radionoaplikasi').checked){
				if($('#inp-nomor-aplikasi-todolist').val() == null || $('#inp-nomor-aplikasi-todolist').val() == ""){
					$('#err-inp-noaplikasi').html('Nomor Aplikasi Wajib Diisi');
                	$('#err-inp-noaplikasi').prop("hidden", false);
					$('input[id=inp-nomor-aplikasi-todolist]').css({"border-color": "red"});

	                if (id_position == null || id_position == "") {
	                   id_position = '#inp-nomor-aplikasi-todolist';
	                }

	                err_count = err_count + 1;
				}
				else {
					$('#err-inp-noaplikasi').html('');
                	$('#err-inp-noaplikasi').prop("hidden", true);
					$('input[id=inp-nomor-aplikasi-todolist]').css({"border-color": ""});
				}
			} 

			else if(document.getElementById('radiotanggal').checked){
				if($('#inp-date-from-todolist').val() == null && $('#inp-date-to-todolist').val() == null || $('#inp-date-from-todolist').val() == "" && $('#inp-date-to-todolist').val() == "" ){
					$('#err-inp-date-from').html('Tanggal Dari Wajib Diisi');
                	$('#err-inp-date-from').prop("hidden", false);
					$('#err-inp-date-to').html('Tanggal Sampai Wajib Diisi');
                	$('#err-inp-date-to').prop("hidden", false);
					$('input[id=inp-date-from-todolist]').css({"border-color": "red"});
					$('input[id=inp-date-to-todolist]').css({"border-color": "red"});
				}
				else if($('#inp-date-from-todolist').val() != null && $('#inp-date-to-todolist').val() == null || $('#inp-date-from-todolist').val() != "" && $('#inp-date-to-todolist').val() == ""){
					$('#err-inp-date-to').html('Tanggal Sampai Wajib Diisi');
                	$('#err-inp-date-to').prop("hidden", false);
					$('input[id=inp-date-from-todolist]').css({"border-color": ""});
					$('input[id=inp-date-to-todolist]').css({"border-color": "red"});
				}
				else if($('#inp-date-from-todolist').val() == null && $('#inp-date-to-todolist').val() != null || $('#inp-date-from-todolist').val() == "" && $('#inp-date-to-todolist').val() != ""){
					$('#err-inp-date-from').html('Tanggal Dari Wajib Diisi');
                	$('#err-inp-date-from').prop("hidden", false);
					$('input[id=inp-date-from-todolist]').css({"border-color": "red"});
					$('input[id=inp-date-to-todolist]').css({"border-color": ""});
				}
				else {
					$('#err-inp-date-from').html('');
                	$('#err-inp-date-from').prop("hidden", true);
					$('#err-inp-date-to').html('');
                	$('#err-inp-date-to').prop("hidden", true);
					$('input[id=inp-date-from-todolist]').css({"border-color": ""});
					$('input[id=inp-date-to-todolist]').css({"border-color": ""});
				}
				if (id_position == null || id_position == "") {
					id_position = '#inp-date-from-todolist';
					id_position = '#inp-date-to-todolist';
				}
				err_count = err_count + 1;
			} 

			else if(document.getElementById('radionamanasabah').checked){
				if($('#inp-nama-nasabah-todolist').val() == null || $('#inp-nama-nasabah-todolist').val() == ""){
					$('#err-inp-nama-nasabah').html('Nama Nasabah Wajib Diisi');
					$('#err-inp-nama-nasabah').prop("hidden", false);
					$('input[id=inp-nama-nasabah-todolist]').css({"border-color": "red"});

	                if (id_position == null || id_position == "") {
	                   id_position = '#inp-nama-nasabah-todolist';
	                }

	                err_count = err_count + 1;
				}
				else {
					$('#err-inp-nama-nasabah').html('');
					$('#err-inp-nama-nasabah').prop("hidden", true);
					$('input[id=inp-nama-nasabah-todolist]').css({"border-color": ""});
				}
			}

			else if(document.getElementById('radiohasilscreening').checked){
				if($('#slc-hasil-screening').val() == null || $('#slc-hasil-screening').val() == ""){
					$('#err-slc-hasil-screening').html('Hasil Screening Wajib Diisi');
					$('#err-slc-hasil-screening').prop("hidden", false);
					$('select[id=slc-hasil-screening]').css({"border-color": "red"});

	                if (id_position == null || id_position == "") {
	                   id_position = '#slc-hasil-screening';
	                }

	                err_count = err_count + 1;
				}
				else {
					$('#err-slc-hasil-screening').html('');
					$('#err-slc-hasil-screening').prop("hidden", true);
					$('select[id=slc-hasil-screening]').css({"border-color": ""});
				}
			}
		});

    },

	getCabang: function() {
        var file = app.ToDoListKYC;

        $.ajax({
            url: app.base_url + file.api + "getAllCabang",
            async: false,
            success: function(response) {
                if (response.status) {
                    var cabang = response.data.map(function (cab) {
                        return {
                            id: cab.BRANCH_CODE,
                            text: cab.BRANCH_NAME
                        };
                    });
                }

                $('#slc-cabang').select2({
                    theme: 'bootstrap4',
                    placeholder: "PILIH CABANG",
                    allowClear: true,
                    cache: true,
                    data: cabang,
                    containerCssClass: "error-slc-cabang",
                    processResults: function (response) {
                        return {
                            results: response.data.map(function (edu) {
                                return {
                                    id: cab.BRANCH_CODE,
                            		text: cab.BRANCH_NAME
                                };
                            }) 
                        };
                    }
                });
            }
        });
    },
}

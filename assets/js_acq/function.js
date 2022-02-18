var base_url = $('#base_url').val();

//Date Range picker
$(function() {
    $('.tanggal').datetimepicker({
        format: 'DD-MMM-YYYY',
        // maxDate: toDateData(currentDate),
        useCurrent: false,
        allowInputToggle: true
    });

    // Date picker
    $('#reservationdate').datetimepicker({
        format: 'L'
    });

    // Date and time picker
    $('#reservationdatetime, #tgl-jam-dihubungi, #tgl-order').datetimepicker({
        icons: {
            time: 'far fa-clock'
        }
    });

    // Date range picker
    $('#reservation').daterangepicker()
        // Date range picker with time picker
    $('#reservationtime').daterangepicker({
        timePicker: true,
        timePickerIncrement: 30,
        locale: {
            format: 'MM/DD/YYYY hh:mm A'
        }
    });

    // Date range as a button
    $('#daterange-btn').daterangepicker({
            ranges: {
                'Today': [moment(), moment()],
                'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('month')],
                'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            },
            startDate: moment().subtract(29, 'days'),
            endDate: moment()
        },
        function(start, end) {
            $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'))
        }
    )

    // Timepicker
    $('#timepicker').datetimepicker({
        format: 'LT'
    });

});

//Input only number
$('.inp-digit').keypress(function(e) {
    if ($.isNumeric($(this).attr('max'))) {
        if (e.which == 8 || e.which == 0) {

        } else if (e.which < 48 || e.which > 57 || $(this).val().length === parseInt($(this).attr('max'))) {
            return false;
        } else if ($(this).val().length === 0 && e.which === 32) {
            return false;
        }
    } else {
        if (e.which == 8 || e.which == 0) {

        } else if (e.which < 48 || e.which > 57) {
            return false;
        } else if ($(this).val().length === 0 && e.which === 32) {
            return false;
        }
    }
});

function validasiEmail() {
    var rs = document.forms["formInput"]["email"].value;
    var atps = rs.indexOf("@");
    var dots = rs.lastIndexOf(".");
    if (atps < 1 || dots < atps + 2 || dots + 2 >= rs.length) {
        alert("Alamat email tidak valid.");
        return false;
    } else {
        alert("Alamat email valid.");
    }
}

function field_disabled() {
    $('.field-disabled').val('');
    $('.field-disabled').prop('disabled', true);
}

function field_enabled() {
    $('.field-disabled').val('');
    $('.field-disabled').prop('disabled', false);
}

function alert_confirm(message, callback) {
    $('#modal-alert').modal('show');
    $('#modal-alert-title').html('Konfirmasi');
    $('#btn-yes').show();
    $('#btn-yes').prop('disabled', false);
    $('#btn-yes').html('Yes');
    $('#btn-no').html('No');
    $('#btn-ok').hide();
    $('#modal-alert-message').html(message);
    $('#modal-alert-icon').removeClass('fa-info-circle').removeClass('fa-exclamation-triangle').removeClass('fa-times-circle').addClass('fa-question-circle');
    $('.fa-question-circle').css('color', '#3c763d');
    $('#btn-yes').trigger('focus');
    $('#btn-yes').off('click').on('click', function() {
        $('#modal-alert').modal('hide');
        if (typeof callback === 'function') {
            callback();
        }
    });
    $('#btn-no').off('click').on('click', function() {
        $('#modal-alert').modal('hide');
    });
}

function alert_warning(message, callback) {
    $('.modal-backdrop').css('display', 'none');
    $('#modal-alert').modal('show');
    $('#modal-alert-title').html('Warning');
    $('#modal-alert-message').html(message);
    $('#btn-yes').hide();
    $('#btn-no').hide();
    $('#btn-ok').show();
    $('#btn-ok').prop('disabled', false);
    $('#btn-ok').html('OK');
    $('#modal-alert-icon').removeClass('fa-info-circle').removeClass('fa-times-circle').removeClass('fa-question-circle').addClass('fa-exclamation-triangle');
    $('.fa-exclamation-triangle').css('color', '#e8e158');
    $('#btn-ok').trigger('focus');
}

function alert_info(message, callback) {
    $('#modal-alert').modal('show');
    $('#modal-alert-title').html('Info');
    $('#btn-yes').hide();
    $('#btn-no').hide();
    $('#btn-ok').show();
    $('#btn-ok').prop('disabled', false);
    $('#btn-ok').html('OK');
    $('#modal-alert-message').html(message);
    $('#modal-alert-icon').removeClass('fa-exclamation-triangle').removeClass('fa-times-circle').removeClass('fa-question-circle').addClass('fa-info-circle')
    $('.fa-info-circle').css('color', '#31708f');
    $('#btn-ok').trigger('focus');
}

function alert_error(message, callback) {
    $('#modal-alert').modal('show');
    $('#modal-alert-title').html('Error');
    $('#btn-yes').hide();
    $('#btn-no').hide();
    $('#btn-ok').show();
    $('#btn-ok').prop('disabled', false);
    $('#btn-ok').html('OK');
    $('#modal-alert-message').html(message);
    $('#modal-alert-icon').removeClass('fa-info-circle').removeClass('fa-exclamation-triangle').removeClass('fa-question-circle').addClass('fa-times-circle')
    $('.fa-times-circle').css('color', '#a94442');
    $('#btn-ok').trigger('focus');
}

//-------------KONFIRMASI
$('#btn-konf-efm').on('click', function() {
    var message = '';
    var messageTabDeb = 'Tab Debitur';
    var messageTabIdenOrd = 'Tab Identitas Order';
    var err = 0;
    console.log('test konfirmasi');
    if ($('#inp-ktp-debefm').val() == '') {
        message = messageTabDeb + '<br> <left> Kolom No KTP tidak boleh kosong </left> <br>';
        err = 1;
    }
    if ($('#slc-jenis-channel').val() == null) {
        message = messageTabIdenOrd + '<br> <left> Kolom Jenis Channel tidak boleh kosong </left> <br>';
        err = 1;
    }
    if (err == 1) {
        $('#modal-alert').modal('show');
        alert_error(message, function() {});
    } else {
        $('#modal-alert').modal('show');
        alert_info(message = '<center> Data Berhasil Dikirim </center>', function() {});
    }
});
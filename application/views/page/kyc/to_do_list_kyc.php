<?php $this->load->view('layout/header'); ?>
<?php $this->load->view('layout/navmenu'); ?>
<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
  <br>
 
  <!-- Main content -->
  <section class="content">
    <div class="container-fluid">
      <!-- EFD 1 -->
      <div class="card">
        <!-- /.card-header -->
        <div class="card-body">
          <div class="row">
            <div class="col-md-12">
              <div class="col-md-6">
                  <h2 style="text-align:Left;">To Do List KYC</h2>
              </div>
              <div class="col-md-3"></div>
              <div class="col-md-3"></div>
            </div>
          </div>
          <div class="row" style="margin-top:15px;">
            <div class="col-md-12">
              <div class="col-md-2">
                <h3>Filter</h3>
              </div>
            </div>
          </div>

          <div class="form-group row" style="margin-top:25px;">
            <div class="col-lg-12">
              <div class="col-lg-8">
                <div class="input-group">
                  <div class="col-lg-2">
                    <label for="">Cabang</label>
                  </div>
                  <div class="col-lg-4">
                    <select class="form-control select2bs4" style="width: 100%;" id="slc-cabang">
                      <option selected disabled=""></option>
                    </select>
                    <label class="error-info" id="err-slc-cabang" hidden></label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row" style="margin-top:20px;">
            <div class="col-lg-12">
              <div class="col-lg-8">
                <div class="input-group">
                  <div class="col-lg-2" style="margin-top:5px;">
                    <input class="form-check-input" type="radio" name="radioButtonApproval" id="radionoaplikasi" value="">
                    <label>Nomor Aplikasi</label>
                  </div>
                  <div class="col-lg-4">
                    <input type="input" class="form-control inp-nomor-aplikasi" id="inp-nomor-aplikasi-todolist" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" onkeydown="javascript: return event.keyCode === 8 || event.keyCode === 46 ? true : !isNaN(Number(event.key))" maxlength="30" disabled>
                    <label class="error-info" id="err-inp-noaplikasi" hidden></label>
                  </div>
                </div>
              </div>
              <div class="col-lg-6"></div>
            </div>
          </div>

          <div class="row" style="margin-top:25px;">
            <div class="col-lg-12">
              <div class="col-lg-8">
                <div class="input-group">                
                  <div class="col-lg-2" style="margin-top:5px;">
                    <input class="form-check-input" type="radio" name="radioButtonApproval" id="radiotanggal" value="">
                    <label>Tanggal Aplikasi</label>
                  </div>
                  <div class="col-lg-4">
                    <div class="input-group" id="inp-date-from-aplikasi-todolist">
                      <input id="inp-date-from-todolist" type="text" class="form-control datetimepicker-input tanggal" data-toggle="datetimepicker" disabled>
                      <div class="input-group-append">
                        <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                      </div>
                    </div>
                    <label class="error-info" id="err-inp-date-from" hidden></label>
                  </div>
                  <!-- <div class="col-sm-1"></div> -->
                  <div class="col-lg-1" style="margin-top:5px;">
                    <label style="padding-left:14px;">s/d</label>
                  </div>
                  <div class="col-lg-4">
                    <div class="input-group" id="inp-date-from-aplikasi-todolist">
                      <input type="text" id="inp-date-to-todolist" class="form-control datetimepicker-input tanggal" data-toggle="datetimepicker" disabled>
                      <div class="input-group-append">
                        <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                      </div>
                    </div>
                    <label class="error-info" id="err-inp-date-to" hidden></label>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                
              </div>
            </div>
          </div>

          <div class="row" style="margin-top:20px;">
            <div class="col-lg-12">
              <div class="col-lg-8">
                <div class="input-group">
                  <div class="col-lg-2" style="margin-top:5px;">
                    <input class="form-check-input" type="radio" name="radioButtonApproval" id="radionamanasabah" value="">
                    <label>Nama Nasabah</label>
                  </div>
                  <div class="col-lg-4">
                    <input type="input" class="form-control inp-nik-oid-gabungan" id="inp-nama-nasabah-todolist" disabled>
                    <label class="error-info" id="err-inp-nama-nasabah" hidden></label>
                  </div>
                </div>
              </div>
              <div class="col-lg-6"></div>
            </div>
          </div>

          <div class="row" style="margin-top:20px;">
            <div class="col-lg-12">
              <div class="col-lg-8">
                <div class="input-group">
                  <div class="col-lg-2" style="margin-top:5px;">
                    <input class="form-check-input" type="radio" name="radioButtonApproval" id="radiohasilscreening" value="">
                    <label>Hasil Screening</label>
                  </div>
                  <div class="col-lg-4">
                    <select id="slc-hasil-screening" name="slc_hasil_screening" class="form-control" disabled>
                      <option value="" class="form-control">- PILIHAN -</option>
                      <option value="instanapproval">INSTANT APPROVAL</option>
                      <option value="telesurvey">NON IA – TELE SURVEY</option>
                      <option value="silentsurvey">NON IA – SILENT SURVEY</option>
                    </select>
                    <label class="error-info" id="err-slc-hasil-screening" hidden></label>
                  </div>
                </div>
              </div>
              <div class="col-lg-6"></div>
            </div>
          </div>

          <div>
          <button onclick="location.href='<?php echo base_url();?>Kyc/kyc_non_wiraswasta'">KYC Non Wiraswasta</button>
          <button onclick="location.href='<?php echo base_url();?>Kyc/kyc_wiraswasta'">KYC Wiraswasta</button>
          </div>
          <div class="row" style="margin-top: 10px;">
            <div class="col-md-12">
              <div class="col-md-1">
                <input type="button" class="btn btn-primary btn-sm" id="btn-cari-todolist" value="Search">
              </div>
            </div>
          </div>
          <table id="table-list-approval-oid-gabungan-individu" class="table" width="100%">
              <thead>
                <tr>
                  <th>Source Order</th>
                  <th>Cabang</th>
                  <th>Nomor Aplikasi</th>
                  <th>Tgl Aplikasi</th>
                  <th>Nama Nasabah</th>
                  <th>Alamat Domisili</th>
                  <th>Nama Dealer</th>
                  <th>Hasil Screening</th>
                  <th>Action</th>
                </tr>
              </thead>
            </table>

        </div>
        <!-- /.card-body -->
      </div>
      <br>
      <!-- /.card -->
    </div>
    <!-- /.container-fluid -->
  </section>
  <!-- /.content -->
</div>
<!-- /.content-wrapper -->

<?php $this->load->view('modal/modal_approval_status_pernikahan'); ?>
<?php $this->load->view('modal/modal_view_document'); ?>
<?php $this->load->view('modal/v_modal_alert'); ?>
<?php $this->load->view('layout/footer'); ?>
<?php $this->load->view('layout/footer_end'); ?>
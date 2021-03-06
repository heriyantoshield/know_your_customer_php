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
                        <div class="col-md-9">
                            <h2 style="text-align:Left;">Survey</h2>
                            <hr>
                        </div>
                        <div class="col-md-3"></div>
                        </div>
                    </div>

                    <div class="form-group row" style="margin-top:25px;">
                        <div class="col-sm-12">
                            <div class="col-sm-9">
                                <div class="input-group">
                                    <div class="col-sm-2 label-kyc">
                                        <label>Nomor Aplikasi:</label>
                                    </div>
                                    <div class="col-sm-3">
                                        <input type="input" class="form-control" id="inp-nomor-aplikasi-survey" readonly>
                                    </div>
                                    <div class="col-sm-1"></div>
                                    <div class="col-sm-2 label-kyc">
                                        <label>Tanggal Aplikasi:</label>
                                    </div>
                                    <div class="col-sm-3">
                                        <input type="input" class="form-control" id="inp-tanggal-aplikasi-survey" readonly>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="form-group row" style="margin-top:25px;">
                        <div class="col-sm-12">
                            <div class="col-sm-9">
                                <div class="input-group">
                                    <div class="col-sm-2 label-kyc">
                                        <label>Nama Sesuai KTP:</label>
                                    </div>
                                    <div class="col-sm-3">
                                        <input type="input" class="form-control" id="inp-nama-sesuai-ktp-survey" readonly>
                                    </div>
                                    <div class="col-sm-1"></div>
                                    <div class="col-sm-2 label-kyc">
                                        <label>Source Order:</label>
                                    </div>
                                    <div class="col-sm-3">
                                        <input type="input" class="form-control" id="inp-source-order-survey" readonly>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="form-group row" style="margin-top:25px;">
                        <div class="col-sm-12">
                            <div class="col-sm-9">
                                <div class="input-group">
                                    <div class="col-sm-2 label-kyc">
                                        <label>Tipe Nasabah:</label>
                                    </div>
                                    <div class="col-sm-3">
                                        <input type="input" class="form-control" id="inp-tipe-nasabah-survey" readonly>
                                    </div>
                                    <div class="col-sm-1"></div>
                                    <div class="col-sm-2 label-kyc">
                                        <label>Cabang:</label>
                                    </div>
                                    <div class="col-sm-3">
                                        <input type="input" class="form-control" id="inp-cabang-kyc-survey" readonly>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="form-group row" style="margin-top:25px;">
                        <div class="col-sm-12">
                            <div class="col-sm-9">
                                <div class="input-group">
                                    <div class="col-sm-9"></div>
                                    <div class="col-sm-2">
                                        <button class="btn btn-success" id="btn-detail-application" style="font-size:smaller;">Detail Application</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="card card-primary card-outline card-outline-tabs">
                        <div class="card-header p-2">
                            <nav class="navbar navbar-expand-sm navbar-light bg-transparent">
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#toggle-nav-tabs" style="margin-bottom: 5px;">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="toggle-nav-tabs">
                                    <ul class="nav nav-tabs col-md-12" id="nav-tab-screening-dua-digital" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <a class="nav-link" data-toggle="tab" href="" id="" role="tab" aria-controls="">Tele Survey</a>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <a class="nav-link" data-toggle="tab" href="#silentsurvey" id="tab-silentsurvey" role="tab" aria-controls="silentsurvey">Silent Survey</a>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <a class="nav-link" data-toggle="tab" href="" id="" role="tab" aria-controls="">Regular Survey</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            <div class="tab-content" id="nav-tab-kyc">

                                <div class="tab-pane" id="silentsurvey" role="tabpanel" aria-labelledby="silentsurvey-tab">
                                    <?php $this->load->view('/page/survey/tab_silent_survey'); ?>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

<?php $this->load->view('modal/v_modal_alert'); ?>
<?php $this->load->view('layout/footer'); ?>
<?php $this->load->view('layout/footer_end'); ?>

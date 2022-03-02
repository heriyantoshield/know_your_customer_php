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
                    <div class="form-group row row-kyc">
                        <div class="col-md-12">
                        <div class="col-md-9">
                            <h2 style="text-align:Left;">Know Your Customer (KYC)</h2>
                            <hr>
                        </div>
                        <div class="col-md-3"></div>
                        </div>
                    </div>

                    <div class="form-group row row-kyc" style="margin-top:25px;">
                        <div class="col-sm-12">
                            <div class="col-sm-9">
                                <div class="input-group">
                                    <div class="col-sm-2 label-kyc">
                                        <label>Nomor Aplikasi:</label>
                                    </div>
                                    <div class="col-sm-3">
                                        <input type="input" class="form-control" id="inp-nomor-aplikasi-kyc-non-wiraswasta" readonly>
                                    </div>
                                    <div class="col-sm-1"></div>
                                    <div class="col-sm-2 label-kyc">
                                        <label>Tanggal Aplikasi:</label>
                                    </div>
                                    <div class="col-sm-3">
                                        <input type="input" class="form-control" id="inp-tanggal-aplikasi-kyc-non-wiraswasta" readonly>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="form-group row row-kyc">
                        <div class="col-sm-12">
                            <div class="col-sm-9">
                                <div class="input-group">
                                    <div class="col-sm-2 label-kyc">
                                        <label>Nama Sesuai KTP:</label>
                                    </div>
                                    <div class="col-sm-3">
                                        <input type="input" class="form-control" id="inp-nama-sesuai-ktp-kyc-non-wiraswasta" readonly>
                                    </div>
                                    <div class="col-sm-1"></div>
                                    <div class="col-sm-2 label-kyc">
                                        <label>Source Order:</label>
                                    </div>
                                    <div class="col-sm-3">
                                        <input type="input" class="form-control" id="inp-source-order-kyc-non-wiraswasta" readonly>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="form-group row row-kyc">
                        <div class="col-sm-12">
                            <div class="col-sm-9">
                                <div class="input-group">
                                    <div class="col-sm-2 label-kyc">
                                        <label>Tipe Nasabah:</label>
                                    </div>
                                    <div class="col-sm-3">
                                        <input type="input" class="form-control" id="inp-tipe-nasabah-kyc-non-wiraswasta" readonly>
                                    </div>
                                    <div class="col-sm-1"></div>
                                    <div class="col-sm-2 label-kyc">
                                        <label>Cabang:</label>
                                    </div>
                                    <div class="col-sm-3">
                                        <input type="input" class="form-control" id="inp-cabang-kyc-non-wiraswasta" readonly>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="form-group row row-kyc">
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
                                    <ul class="nav nav-tabs col-md-12" id="nav-tab-kyc-wiraswasta" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <a class="nav-link" data-toggle="tab" href="#instantapproval" id="tab-instantapproval" role="tab" aria-controls="instantapproval">Instant Approval</a>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <a class="nav-link" data-toggle="tab" href="#telesurvey" id="tab-telesurvey" role="tab" aria-controls="telesurvey">Tele Survey</a>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <a class="nav-link" data-toggle="tab" href="#silentsurvey" id="tab-silentsurvey" role="tab" aria-controls="silentsurvey">Silent Survey</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            <div class="tab-content" id="nav-tab-kyc">
                                <div class="tab-pane" id="instantapproval" role="tabpanel" aria-labelledby="instantapproval-tab">
                                    <?php $this->load->view('/page/kyc/non_wiraswasta/tab_instant_approval'); ?>
                                </div>

                                <div class="tab-pane" id="telesurvey" role="tabpanel" aria-labelledby="telesurvey-tab">
                                    <?php $this->load->view('/page/kyc/non_wiraswasta/tab_tele_survey'); ?>
                                </div>

                                <div class="tab-pane" id="silentsurvey" role="tabpanel" aria-labelledby="silentsurvey-tab">
                                    <?php $this->load->view('/page/kyc/non_wiraswasta/tab_silent_survey'); ?>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

<?php $this->load->view('layout/footer'); ?>
<?php $this->load->view('layout/footer_end'); ?>
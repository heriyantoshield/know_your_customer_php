<div class="modal fade" id="modal-report-status-pernikahan" role="dialog">
  <div class="modal-dialog modal-lg">
    <div class="modal-content" id="modal-update">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        </div>
        <div class="modal-body">
            <div class="table-responsive">
                <div class="input-group">
                    <div class="col-md-12">
                        <h5 style="text-align:Left; text-decoration: underline;">DETAIL REPORT UPDATE STATUS PERNIKAHAN</h5>
                    </div>
                </div>

                <div class="input-group" style="margin-top:20px;">
                    <div class="col-md-3" style="margin-top:3px;">
                        <label>Tanggal Pengajuan</label>
                    </div>
                    <div class="col-md-3">
                        <input type="text" class="form-control form-control-sm" id="inp-tgl-pengajuan" readonly>
                    </div>
                </div>

                <div class="input-group" style="margin-top:15px;">
                    <div class="col-md-3" style="margin-top:3px;">
                        <label>No Identitas</label>
                    </div>
                    <div class="col-md-3">
                        <input type="text" class="form-control form-control-sm" id="inp-no-identitas" readonly>
                    </div>
                    <div class="col-md-1">
                    </div>
                    <div class="col-md-2" style="margin-top:3px;">
                        <label>Nama</label>
                    </div>
                    <div class="col-md-3">
                        <input type="text" class="form-control form-control-sm" id="inp-nama" readonly>
                    </div>
                </div>

                <div class="input-group" style="margin-top:15px;">
                    <div class="col-md-3" style="margin-top:3px;">
                        <label>No Identitas Pasangan</label>
                    </div>
                    <div class="col-md-3">
                        <input type="text" class="form-control form-control-sm" id="inp-no-identitas-pasangan" readonly>
                    </div>
                    <div class="col-md-1">
                    </div>
                    <div class="col-md-2" style="margin-top:3px;">
                        <label>Nama Pasangan</label>
                    </div>
                    <div class="col-md-3">
                    <input type="text" class="form-control form-control-sm" id="inp-nama-pasangan" readonly>
                    </div> 
                    <div id="div-seq-id" hidden value=""></div>      
                </div>

                <div class="input-group" style="margin-top:15px;">
                    <div class="col-md-3">
                        <input type="button" class="btn btn-primary btn-sm" id="btn-view-document" value="View Document">
                    </div>
                </div>

                <div class="input-group" style="margin-top:15px;">
                    <div class="col-md-6">
                        <h5 style="text-align:Left; text-decoration: underline;">DETAIL HISTORY</h5>
                    </div>
                </div>
                <div class="card-body">
                    <table id="table-detail-report-update-pernikahan" autoWidth="true" class="table" width="100%">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Tanggal & Waktu Konfirmasi</th>
                                <th>Status</th>
                                <th>PIC</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div class="input-group" style="margin-top: 10px;">
                    <div class="col-md-2">
                        <input type="button" class="btn btn-primary btn-sm" id="btn-ok-pernikahan" value="OK">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
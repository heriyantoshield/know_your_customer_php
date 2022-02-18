<div class="modal fade" id="modal-approval-oid-gabungan-individu" role="dialog">
  <div class="modal-dialog modal-lg">
    <div class="modal-content" id="modal-approve">
      <div class="modal-header">
        <h6 class="modal-title" id="modal-label-approve-status">UPDATE STATUS PERNIKAHAN</h6>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      </div>
      <div class="modal-body">
        <div class="table-responsive">
            <div class="input-group">
                <div class="col-md-2" style="margin-top:3px;">
                  <label>No Identitas</label>
                </div>
                <div class="col-sm-3">
                  <input type="input" class="form-control form-control-sm" id="inp-nik-approval" readonly>
                </div>
                <div class="col-sm-1"></div>
                <div class="col-md-3" style="margin-top:3px;">
                  <label>No Identitas Pasangan</label>
                </div>
                <div class="col-sm-3">
                  <input type="input" class="form-control form-control-sm" id="inp-nik-approval-pasangan-oid-individu" readonly>
                </div>
            </div>
              
            <div class="input-group" style="margin-top: 15px;">
                <div class="col-sm-2" style="margin-top:3px;">
                  <label>Nama</label>
                </div>
                <div class="col-sm-3">
                  <input type="input" class="form-control form-control-sm" id="inp-nama-approval-oid-individu" readonly>
                </div>
                <div class="col-md-1"></div>
                <div class="col-sm-3" style="margin-top:3px;">
                  <label>Nama Pasangan</label>
                </div>
                <div class="col-sm-3">
                  <input type="input" class="form-control form-control-sm" id="inp-nama-approval-pasangan-oid-individu" readonly>
                </div>
                <!-- <div id="oidIndividu" hidden value=""></div> -->
                <div id="oidGabungan" hidden value=""></div>
                <div id="oidIndividu" hidden value=""></div>
                <div id="div-seq-id" hidden value=""></div>
            </div>

            
        </div>
    </div>
    <div class="modal-footer">
        <div class="input-group" style="margin-top: 20px;">
            <div class="col-sm-2">
                <input type="button" class="btn btn-primary btn-sm" id="btn-view-document" value="View Document"> 
            </div>
             <div class="col-sm-1" style="margin-right:20px;">
                <input type="button" class="btn btn-primary btn-sm" id="btn-approve" value="Approve">
            </div>
            <div class="col-sm-1">
                <input type="button" class="btn btn-primary btn-sm" id="btn-reject" value="Reject">
            </div>
        </div>
    </div>
  </div>
</div>
</div>
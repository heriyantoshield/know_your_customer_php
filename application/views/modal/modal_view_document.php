<div id="modal-view-dokumen" class="modal fade" style="display:none;" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <button aria-hidden="true" id="buttonCloseModal" class="close" type="button"><span>&times;</span></button>
                <h4 class="modal-title" id="nama-dokumen"></h4>
                <input type="hidden" class="form-control" name="" id="hide-nama-file">
            </div>
            <div style="min-height: 350px;max-height: 500px;" class="modal-body">
                <div id="img-preview" style="height: 350px; width: auto; overflow: auto; text-align: center;">
                    <img id="img-dokumen" src="" style="cursor: move; width:500px; height:350px;">
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary pull-left" id="zoom-in" >Zoom In</button> 
                <button type="button" class="btn btn-primary pull-left" id="zoom-out">Zoom Out</button> 
                <button type="button" class="btn btn-primary pull-left" id="rotate">Rotate</button>
                <button type="button" style="visibility: hidden;" class="btn btn-primary" id="download-file">Download</button>
                <button id="buttonCloseModal2" class="btn btn-info" type="button">Close</button>
            </div>
        </div>
    </div>
</div>
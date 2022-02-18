<div class="modal" id="modal-alert">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h4 class="modal-title" id="modal-alert-title"></h4>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body modal-body-alert">
				<div class="row">
					<div class="col-md-2 col-xs-3">                          
						<i class="fa fa-info-circle fa-3x" id="modal-alert-icon" aria-hidden="true"></i>
					</div>
					<div class="col-md-10 col-xs-9">
						<p id="modal-alert-message"></p>
					</div>
				</div>
			</div>

			<div class="modal-footer">
				<button type="button" class="btn btn-sm btn-primary btn-yes" data-toggle="modal" id="btn-yes"></button>
				<button type="button" class="btn btn-secondary btn-sm btn-no" data-toggle="modal" id="btn-no"></button>
				<button type="button" class="btn btn-success btn-sm btn-ok" data-dismiss="modal" id="btn-ok"></button>
			</div>
		</div>
	</div>
</div>
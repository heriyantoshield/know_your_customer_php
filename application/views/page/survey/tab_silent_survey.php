<section class="content">
    <div class="container-fluid">
        <div class="card-body">    

		<div id="informan_code" hidden></div>

            <div class="form-group row" style="margin-top:25px;">
                <div class="col-sm-12">
                    <div class="col-sm-9">
                        <div class="input-group">
                            <div class="col-sm-4">
                                <label>Lokasi Proses Survey<span style="color:red">*</span></label>
                            </div>
                            <div class="col-sm-2" style="margin-left: 25px;">
                                <input class="form-check-input" type="checkbox" id="lokasirumah" value="">
                                <label class="form-check-label">
                                    Rumah
                                </label>
                            </div>
                            <div class="col-sm-2">
                                <input class="form-check-input" type="checkbox" id="lokasiusaha" value="">
                                <label class="form-check-label">
                                    Tempat Usaha
                                </label>
                            </div><label class="error-info" id="err-lokasi" hidden></label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="form-group row" style="margin-top:25px;">
                <div class="col-sm-12">
                    <div class="col-sm-9">
                        <div class="input-group">
                            <div class="col-sm-4">
                                <label>Foto Rumah/Tempat Usaha Nasabah<span style="color:red">*</span></label>
                            </div>
                            <div class="col-sm-8">
                                <div class="form-check" style="margin-left:5px;">
                                    <input class="form-check-input" type="radio" name="radiorumahtempatusaha" id="radiofotorumah" value="">
                                    <label class="form-check-label">
                                        Foto Rumah
                                    </label>
                                </div>
                                <div class="form-check" style="margin-left:5px;">
                                    <input class="form-check-input" type="radio" name="radiorumahtempatusaha" id="radiofotousaha" value="">
                                    <label class="form-check-label">
                                        Foto Tempat Usaha
                                    </label>
                                </div>
                                <div class="form-check" style="margin-left:5px;">
                                    <input class="form-check-input" type="radio" name="radiorumahtempatusaha" id="radiofotorumahusaha" value="">
                                    <label class="form-check-label">
                                        Foto Rumah & Tempat Usaha
                                    </label>
                                </div>
                                <div class="col-lg-6" style="margin-top:15px;">
                                    <input type="file" accept="image/jpg, image/jpeg, image/png" class="form-control-file" id="dokumen-fotorumah">
                                </div>
                                <button class="btn" type="button" id="add-fotorumah"><span class="fa fa-plus"></span> Add Photo </button><br>
								<label class="error-info" id="err-fotorumah" hidden></label>

								<div class="form-group row" style="margin-top:25px;" id="addformrumah" hidden>
									<div class="col-sm-12">
										<div class="form-check" style="margin-left:5px;">
											<input class="form-check-input" type="radio" name="radiorumahtempatusaha1" id="radiofotorumah1" value="">
											<label class="form-check-label">
												Foto Rumah
											</label>
										</div>
										<div class="form-check" style="margin-left:5px;">
											<input class="form-check-input" type="radio" name="radiorumahtempatusaha1" id="radiofotousaha1" value="">
											<label class="form-check-label">
												Foto Tempat Usaha
											</label>
										</div>
										<div class="form-check" style="margin-left:5px;">
											<input class="form-check-input" type="radio" name="radiorumahtempatusaha1" id="radiofotorumahusaha1" value="">
											<label class="form-check-label">
												Foto Rumah & Tempat Usaha
											</label>
										</div>
										<div class="col-lg-6" style="margin-top:15px;">
											<input type="file" accept="image/jpg, image/jpeg, image/png" class="form-control-file" id="dokumen-fotorumah1">
										</div>
										<button class="btn" type="button" id="remove-fotorumah"><span class="fa fa-minus"></span> Remove Photo </button><br>
										<label class="error-info" id="err-fotorumah" hidden></label>
									</div>
								</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

			<div id="btnUploadRumah" hidden value="0"></div>
			<div id="base64-fotorumah-1" hidden value=""></div>
			<div id="base64-fotorumah-2" hidden value=""></div>

			

            <div class="form-group row" style="margin-top:25px;">
                <div class="col-sm-12">
                    <div class="col-sm-9">
                        <div class="input-group">
                            <div class="col-sm-4">
                                <label>Foto Jalan/Lingkungan Sekitar Rumah/Tempat Usaha Nasabah<span style="color:red">*</span></label>
                            </div>
                            <div class="col-sm-8">
                                <div class="form-check" style="margin-left:5px;">
                                    <input class="form-check-input" type="radio" name="radiojalan" id="radiojalanrumah">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        Foto Jalan Depan Rumah
                                    </label>
                                </div>
                                <div class="form-check" style="margin-left:5px;">
                                    <input class="form-check-input" type="radio" name="radiojalan" id="radiojalanusaha">
                                    <label class="form-check-label">
                                        Foto Jalan Depan Tempat Usaha
                                    </label>
                                </div>
                                <div class="form-check" style="margin-left:5px;">
                                    <input class="form-check-input" type="radio" name="radiojalan" id="radiojalanrumahusaha">
                                    <label class="form-check-label">
                                        Foto Jalan Depan Rumah & Tempat Usaha
                                    </label>
                                </div>
                                <div class="col-lg-6" style="margin-top:15px;">
                                    <input type="file" class="form-control-file" accept="image/jpg, image/jpeg, image/png" id="dokumen-fotojalan">
                                </div>
                                <button class="btn" type="button" id="add-fotojalan"><span class="fa fa-plus"></span> Add Photo </button><br>
								<label class="error-info" id="err-fotojalan" hidden></label>

								<div class="form-group row" style="margin-top:25px;" id="addformjalan" hidden>
									<div class="col-sm-12">
										<div class="form-check" style="margin-left:5px;">
											<input class="form-check-input" type="radio" name="radiojalan1" id="radiojalanrumah1">
											<label class="form-check-label">
												Foto Jalan Depan Rumah
											</label>
										</div>
										<div class="form-check" style="margin-left:5px;">
											<input class="form-check-input" type="radio" name="radiojalan1" id="radiojalanusaha1">
											<label class="form-check-label">
												Foto Jalan Depan Tempat Usaha
											</label>
										</div>
										<div class="form-check" style="margin-left:5px;">
											<input class="form-check-input" type="radio" name="radiojalan1" id="radiojalanrumahusaha1">
											<label class="form-check-label">
												Foto Jalan Depan Rumah & Tempat Usaha
											</label>
										</div>
										<div class="col-lg-6" style="margin-top:15px;">
											<input type="file" class="form-control-file" accept="image/jpg, image/jpeg, image/png" id="dokumen-fotojalan1">
										</div>
										<button class="btn" type="button" id="remove-fotojalan"><span class="fa fa-minus"></span> Remove Photo </button><br>
										<label class="error-info" id="err-fotojalan" hidden></label>
									</div>
								</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 

			<div id="btnUploadJalan" hidden value="0"></div>
			<div id="base64-fotojalan-1" hidden value=""></div>
			<div id="base64-fotojalan-2" hidden value=""></div>
            
            <div class="form-group row" style="margin-top:25px;">
                <div class="col-sm-12">
                    <div class="col-sm-9">
                        <div class="input-group">
                            <div class="col-sm-4">
                                <label>Nama Informan 1<span style="color:red">*</span></label>
                            </div>
                            <div class="col-sm-4">
                                <input type="input" class="form-control" id="namainforman">
								<label class="error-namainforman error-info" id="err-namainforman" hidden></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            
            <div class="form-group row" style="margin-top:25px;">
                <div class="col-sm-12">
                    <div class="col-sm-9">
                        <div class="input-group">
                            <div class="col-sm-4">
                                <label>Hubungan Informan 1 dengan Nasabah<span style="color:red">*</span></label>
                            </div>
                            <div class="col-sm-4">
                                <select class="form-control select2bs4" id="hubungan-informan-dengan-nasabah">
                                    <option></option>
                                </select>
								<label class="error-hubunganinforman error-info" id="err-hubunganinforman" hidden></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="form-group row" style="margin-top:25px;">
                <div class="col-sm-12">
                    <div class="col-sm-9">
                        <div class="col-sm-10">
                            <label>Dalam kurun waktu satu bulan terakhir pernah dikunjungi penagih (debt collector)?<span style="color:red">*</span></label>
                        </div>
						<div class="col-sm-8">
                       	 <div class="input-group">
                            <div class="col-sm-2" style="margin-left: 10px;">
                                <input class="form-check-input" type="radio" name="radiodebt" id="radiodebtiya">
                                <label class="form-check-label">
                                    Ya
                                </label>
                            </div>
                            <div class="col-sm-2">
                                <input class="form-check-input" type="radio" name="radiodebt" id="radiodebttidak">
                                <label class="form-check-label">
                                    Tidak
                                </label>
                            </div>
                       	 </div>
							<label class="error-debtcollector error-info" id="err-debtcollector" hidden></label>
						</div>
                    </div>
                </div>
            </div>

            <div class="form-group row" style="margin-top:25px;">
                <div class="col-sm-12">
                    <div class="col-sm-9">
                        <div class="col-sm-10">
                            <label>Nasabah dikenal bersosialisasi dengan warga?<span style="color:red">*</span></label>
                        </div>
						<div class="col-sm-8">
							<div class="input-group">
								<div class="col-sm-2" style="margin-left: 10px;">
									<input class="form-check-input" type="radio" name="radiososial" id="radiososialiya">
									<label class="form-check-label" for="flexRadioDefault1">
										Ya
									</label>
								</div>
								<div class="col-sm-2">
									<input class="form-check-input" type="radio" name="radiososial" id="radiososialtidak">
									<label class="form-check-label">
										Tidak
									</label>
								</div><br>
							</div>
							<label class="error-sosialisasi error-info" id="err-sosialisasi" hidden></label>
						</div>
                    </div>
                </div>
            </div>

            <div class="form-group row" style="margin-top:25px;">
                <div class="col-sm-12">
                    <div class="col-sm-9">
                        <div class="col-sm-10">
                            <label>Nasabah terlibat di keanggotaan LSM?<span style="color:red">*</span></label>
                        </div>
						<div class="col-sm-8">
							<div class="input-group">
								<div class="col-sm-2" style="margin-left: 10px;">
									<input class="form-check-input" type="radio" name="radiolsm" id="radiolsmiya">
									<label class="form-check-label" for="flexRadioDefault1">
										Ya
									</label>
								</div>
								<div class="col-sm-2">
									<input class="form-check-input" type="radio" name="radiolsm" id="radiolsmtidak">
									<label class="form-check-label">
										Tidak
									</label>
								</div><br>
							</div>
							<label class="error-lsm error-info" id="err-lsm" hidden></label>
						</div>
                    </div>
                </div>
            </div>

            <div class="form-group row" style="margin-top:25px;">
                <div class="col-sm-12">
                    <div class="col-sm-9">
                        <div class="col-sm-4">
                            <label>Status Kepemilikan Rumah<span style="color:red">*</span></label>
                        </div>
                        <div class="col-sm-4">
                            <select class="form-control select2bs4" id="slc-status-kepemilikan-rumah" disabled>
                                <option selected disabled=""></option>
                            </select>
                        </div>
						<div class="col-sm-8">
							<div class="input-group">
								<div class="col-sm-2" style="margin-left: 10px;">
									<input class="form-check-input" type="radio" name="radiostatus" id="radiokepemilikansesuai">
									<label class="form-check-label">
										Sesuai
									</label>
								</div>
								<div class="col-sm-4">
									<input class="form-check-input" type="radio" name="radiostatus" id="radiokepemilikantidaksesuai">
									<label class="form-check-label">
										Tidak Sesuai
									</label>
								</div>
								
							</div>
							<label class="error-statusradio error-info" id="err-statusradio" hidden></label>
						</div>
                    </div>
                </div>
            </div>

            <div class="form-group row" style="margin-top:25px;" id="statustidaksesuai" hidden>
                <div class="col-sm-12">
                    <div class="col-sm-9">
                        <div class="col-sm-4">
                            <label>Jika tidak sesuai, apa informasi dari informan<span style="color:red">*</span></label>
                        </div>
                        <div class="col-sm-4">
								<select class="form-control select2bs4" id="slc-statustidaksesuai">
									<option></option>
								</select>
							<label class="error-statustidaksesuai error-info" id="err-statustidaksesuai" hidden></label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="form-group row" style="margin-top:25px;">
                <div class="col-sm-12">
                    <div class="col-sm-9">
                        <div class="col-sm-4">
                            <label>Lama tinggal/menempati rumah sesuai?<span style="color:red">*</span></label>
                        </div>
							<div class="input-group col-sm-10">
								<div class="col-sm-2" style="margin-left: 10px;">
									<input type="input" class="form-control" id="lamatinggaltahun" disabled>
								</div>
								<div class="col-sm-2" style="margin-left: 10px;">
									<label>Tahun</lable>
								</div>
								<div class="col-sm-2" style="margin-left: 10px;">
									<input type="input" class="form-control" id="lamatinggalbulan" disabled>
								</div>
								<div class="col-sm-2" style="margin-left: 10px;">
									<label>Bulan</lable>
								</div>
								<div class="input-group">
								<div class="col-sm-2" style="margin-left: 10px;">
									<input class="form-check-input" type="radio" name="radiotinggaltidaksesuai" id="radiotinggalsesuai">
									<label class="form-check-label">
										Sesuai
									</label>
								</div>
								<div class="col-sm-3">
									<input class="form-check-input" type="radio" name="radiotinggaltidaksesuai" id="radiotinggaltidaksesuai">
									<label class="form-check-label">
										Tidak Sesuai
									</label>
								</div>
							</div>	
                        </div>
						<label class="error-lamatinggal error-info" id="err-lamatinggal" hidden></label>
                    </div>
                </div>
            </div>

            <div class="form-group row" style="margin-top:25px;" id="tinggaltidaksesuai" hidden>
                <div class="col-sm-12">
                    <div class="col-sm-9">
                        <div class="col-sm-4">
                            <label>Jika tidak sesuai, apa informasi dari informan<span style="color:red">*</span></label>
                        </div>
                        <div class="input-group col-sm-8">
                            <div class="col-sm-2" style="margin-left: 10px;">
                                <input type="input" class="form-control" id="tahuntidaksesuai">
                            </div>
                            <div class="col-sm-2" style="margin-left: 10px;">
                                <label>Tahun</lable>
                            </div>
                            <div class="col-sm-2" style="margin-left: 10px;">
                                <input type="input" class="form-control" id="bulantidaksesuai">
                            </div>
                            <div class="col-sm-2" style="margin-left: 10px;">
                                <label>Bulan</lable>
                            </div>
                        </div>
						<label class="error-lamatinggaltidaksesuai error-info" id="err-lamatinggaltidaksesuai" hidden></label>
                    </div>
                </div>
            </div>

            <div class="form-group row" style="margin-top:25px;">
                <div class="col-sm-12">
                    <div class="col-sm-9">
                        <div class="col-sm-4">
                            <label>Foto Selfie PIC Survey dengan informan<span style="color:red">*</span></label>
                        </div>
                        <div class="col-lg-6">
                            <input type="file" class="form-control-file" accept="image/jpg, image/jpeg, image/png" id="dokumen-fotoselfie-silent-survey-1">
                        </div>
                    </div>
                </div>
            </div>

            <div id="newinformansilentsurvey"></div>
			<div id="base64-fotopic-1" hidden value=""></div>
			<div id="base64-fotopic-2" hidden value=""></div>
			<div id="base64-fotopic-3" hidden value=""></div>

            <div class="form-group row" style="margin-top:25px;">
                <div class="col-sm-12">
                    <div class="col-sm-9">
                        <div class="col-sm-4">
                            <button class="btn" type="button" id="add-informan-silent-survey"><span class="fa fa-plus"></span> Add Informan </button>
							<div id="btnAddInforman" hidden value="0"></div>
							<button class="btn" type="button" id="remove-informan-silent-survey"><span class="fa fa-minus"></span> Remove Informan </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="float-left" style="margin-top: 20px;">
                <div class="col-lg-12">
                    <div class="col-lg-8">
                        <button class="btn btn-primary" id="btn-save-silent-survey">Save</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>

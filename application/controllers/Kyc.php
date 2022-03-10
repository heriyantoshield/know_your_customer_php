<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Kyc extends CI_Controller {

	function __construct()
	{
		parent::__construct();
		$this->load->model('models');
	}

	public function to_do_list_kyc($param)
	{
		$session_data['data'] = $param;
		$session_data['menu'] = [
			'kyc/to_do_list_kyc'
		];
		$this->load->view('page/kyc/to_do_list_kyc', $session_data);
	}

	public function kyc_non_wiraswasta($param)
	{
		$session_data['data'] = $param;
		$session_data['menu'] = [
			'kyc/kyc_non_wiraswasta',
			'kyc/non_wiraswasta/informasi_pekerjaan_nasabah/tab_instant_approval',
			'kyc/non_wiraswasta/informasi_pekerjaan_nasabah/tab_silent_survey',
			'kyc/non_wiraswasta/informasi_pekerjaan_nasabah/tab_tele_survey',
			'kyc/non_wiraswasta/informasi_tempat_tinggal_nasabah/tab_instant_approval',
			'kyc/non_wiraswasta/informasi_tempat_tinggal_nasabah/tab_tele_survey',
			'kyc/non_wiraswasta/informasi_tempat_tinggal_nasabah/tab_silent_survey',
			'kyc/non_wiraswasta/informasi_object_pembiayaan/tab_instant_approval',
			'kyc/non_wiraswasta/informasi_object_pembiayaan/tab_tele_survey',
			'kyc/non_wiraswasta/informasi_object_pembiayaan/tab_silent_survey',
		];
		$this->load->view('page/kyc/kyc_non_wiraswasta', $session_data);
	}

	public function kyc_wiraswasta($param)
	{
		$session_data['data'] = $param;
		$session_data['menu'] = [
			'kyc/kyc_wiraswasta',
			'kyc/wiraswasta/informasi_pekerjaan_nasabah/tab_instant_approval',
			'kyc/wiraswasta/informasi_pekerjaan_nasabah/tab_silent_survey',
			'kyc/wiraswasta/informasi_pekerjaan_nasabah/tab_tele_survey',
			'kyc/wiraswasta/informasi_tempat_tinggal_nasabah/tab_instant_approval',
			'kyc/wiraswasta/informasi_tempat_tinggal_nasabah/tab_tele_survey',
			'kyc/wiraswasta/informasi_tempat_tinggal_nasabah/tab_silent_survey',
			'kyc/wiraswasta/informasi_object_pembiayaan/tab_instant_approval',
			'kyc/wiraswasta/informasi_object_pembiayaan/tab_tele_survey',
			'kyc/wiraswasta/informasi_object_pembiayaan/tab_silent_survey',
		];
		$this->load->view('page/kyc/kyc_wiraswasta', $session_data);
	}

}
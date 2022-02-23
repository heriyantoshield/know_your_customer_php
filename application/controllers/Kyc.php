<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Kyc extends CI_Controller {

	function __construct()
	{
		parent::__construct();
		$this->load->model('models');
	}

	public function to_do_list_kyc()
	{
		$session_data['menu'] = [
			'kyc/to_do_list_kyc'
		];
		$this->load->view('page/kyc/to_do_list_kyc', $session_data);
	}

	public function kyc_non_wiraswasta()
	{
		$session_data['menu'] = [
			'kyc/kyc_non_wiraswasta',
			'kyc/informasi_pekerjaan_nasabah/non_wiraswasta/tab_instant_approval',
			'kyc/informasi_pekerjaan_nasabah/non_wiraswasta/tab_silent_survey',
			'kyc/informasi_pekerjaan_nasabah/non_wiraswasta/tab_tele_survey'
		];
		$this->load->view('page/kyc/kyc_non_wiraswasta', $session_data);
	}

	public function kyc_wiraswasta()
	{
		$session_data['menu'] = [
			'kyc/kyc_wiraswasta',
			'kyc/informasi_pekerjaan_nasabah/wiraswasta/tab_instant_approval',
			'kyc/informasi_pekerjaan_nasabah/wiraswasta/tab_silent_survey',
			'kyc/informasi_pekerjaan_nasabah/wiraswasta/tab_tele_survey'
		];
		$this->load->view('page/kyc/kyc_wiraswasta', $session_data);
	}

}
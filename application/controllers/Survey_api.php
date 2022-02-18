<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Survey_api extends CI_Controller {

	function __construct()
	{
		parent::__construct();
		$this->load->model('models');
	}

	public function getHubunganInformanDenganNasabah()
	{
		$data = $this->models->get_methode($this->config->item('java_hubungan_informan_nasabah')."RelationInfromanDebitur?deleted.equals=0");
		$this->output->set_content_type('application/json');
		$this->output->set_output(json_encode($data));
	}


}

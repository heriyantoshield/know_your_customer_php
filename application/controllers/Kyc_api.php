<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Kyc_api extends CI_Controller {

	function __construct()
	{
		parent::__construct();
		$this->load->model('models');
	}

	public function getAllCabang()
	{
		$data = $this->models->get_methode($this->config->item('java_redis_branch')."getAllBranch");
		$this->output->set_content_type('application/json');
		$this->output->set_output(json_encode($data));
	}

	public function getEconomicSectorLevel1()
	{
		$param = array(
			"value" => strtoupper($this->input->post("value"))
		);
		$data = $this->models->post_methode($param, $this->config->item('java_postgre_eco_sector') . "getEconomicSectorLevel1");
		$this->output->set_content_type('application/json');
		$this->output->set_output(json_encode($data));
	}

    public function getEconomicSectorLevel2()
	{
		$param = array(
			"param_1" => $this->input->post("param_1"),
            "value" => strtoupper($this->input->post("value"))
		);
		$data = $this->models->post_methode($param, $this->config->item('java_postgre_eco_sector') . "getEconomicSectorLevel2");
		$this->output->set_content_type('application/json');
		$this->output->set_output(json_encode($data));
	}

    public function getEconomicSectorLevel3()
	{
		$param = array(
			"param_1" => $this->input->post("param_1"),
            "param_2" => $this->input->post("param_2"),
            "value" => strtoupper($this->input->post("value"))
		);
		$data = $this->models->post_methode($param, $this->config->item('java_postgre_eco_sector') . "getEconomicSectorLevel3");
		$this->output->set_content_type('application/json');
		$this->output->set_output(json_encode($data));
	}

	public function getEconomicSectorFromLevel3()
	{
		$param = array(
            "value" => strtoupper($this->input->post("value"))
		);
		$data = $this->models->post_methode($param, $this->config->item('java_postgre_eco_sector') . "getEconomicSectorFromLevel3");
		$this->output->set_content_type('application/json');
		$this->output->set_output(json_encode($data));
	}

	public function getDetailTeleSurvey() {
		
		$param = array(
			"no_order" => $this->input->post("order_id")
		);

		$link = 'detailTeleSurvey';
		$data=$this->models->post_methode($param,$this->config->item('java_detail_tele_survey').$link);
		$this->output->set_content_type('application/json');
		$this->output->set_output(json_encode($data));
	}

	public function submitSilentSurveyWiraswasta()
	{
		$link = 'saveKyc';
		@$data = array(
			"pekerjaan_nasabah_silent_survey_wiraswasta" => $this->input->post('pekerjaan_nasabah_silent_survey_wiraswasta'),
		);
		var_dump($data);
		die();
		$result = $this->models->postSilentSurveyWiraswasta($data, $link);
		$this->output->set_content_type('application/json');
		$this->output->set_output(json_encode($result));
	}

}
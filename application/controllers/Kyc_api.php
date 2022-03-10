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

	public function getDetailKyc(){
		$param = array(
			"no_order" => $this->input->post("order_id")
		);

		$link = 'detailKyc';
		$data=$this->models->post_methode($param,$this->config->item('java_detail_kyc').$link);
		$this->output->set_content_type('application/json');
		$this->output->set_output(json_encode($data));
	}

	public function getDetailTeleSurvey() 
	{
		$param = array(
			"no_order" => $this->input->post("order_id")
		);

		$link = 'detailTeleSurvey';
		$data=$this->models->post_methode($param,$this->config->item('java_detail_tele_survey').$link);
		$this->output->set_content_type('application/json');
		$this->output->set_output(json_encode($data));
	}

	public function submitInstantApprovalWiraswasta()
	{
		$link = 'saveKyc';
		@$data = array(
			"pekerjaan_nasabah_instant_approval_wiraswasta" => $this->input->post('pekerjaan_nasabah_instant_approval_wiraswasta'),
		);
		var_dump($data);
		die();
		$result = $this->models->postWiraswasta($data, $link);
		$this->output->set_content_type('application/json');
		$this->output->set_output(json_encode($result));
	}

	public function submitSilentSurveyWiraswasta()
	{
		$link = 'saveKyc';
		@$data = array(
			"pekerjaan_nasabah_silent_survey_wiraswasta" => $this->input->post('pekerjaan_nasabah_silent_survey_wiraswasta'),
		);
		var_dump($data);
		die();
		$result = $this->models->postWiraswasta($data, $link);
		$this->output->set_content_type('application/json');
		$this->output->set_output(json_encode($result));
	}

	public function submitTeleSurveyWiraswasta()
	{
		$link = 'saveKyc';
		@$data = array(
			"pekerjaan_nasabah_tele_survey_wiraswasta" => $this->input->post('pekerjaan_nasabah_tele_survey_wiraswasta'),
		);
		var_dump($data);
		die();
		$result = $this->models->postWiraswasta($data, $link);
		$this->output->set_content_type('application/json');
		$this->output->set_output(json_encode($result));
	}

	public function submitInstantApprovalNonWiraswasta()
	{
		$link = 'saveKyc';
		@$data = array(
			"pekerjaan_nasabah_instant_approval_non_wiraswasta" => $this->input->post('pekerjaan_nasabah_instant_approval_non_wiraswasta'),
		);
		var_dump($data);
		die();
		$result = $this->models->postNonWiraswasta($data, $link);
		$this->output->set_content_type('application/json');
		$this->output->set_output(json_encode($result));
	}

	public function submitSilentSurveyNonWiraswasta()
	{
		$link = 'saveKyc';
		@$data = array(
			"pekerjaan_nasabah_silent_survey_non_wiraswasta" => $this->input->post('pekerjaan_nasabah_silent_survey_non_wiraswasta'),
		);
		var_dump($data);
		die();
		$result = $this->models->postNonWiraswasta($data, $link);
		$this->output->set_content_type('application/json');
		$this->output->set_output(json_encode($result));
	}

	public function submitTeleSurveyNonWiraswasta()
	{
		$link = 'saveKyc';
		@$data = array(
			"pekerjaan_nasabah_tele_survey_non_wiraswasta" => $this->input->post('pekerjaan_nasabah_tele_survey_non_wiraswasta'),
		);
		var_dump($data);
		die();
		$result = $this->models->postNonWiraswasta($data, $link);
		$this->output->set_content_type('application/json');
		$this->output->set_output(json_encode($result));
	}

	public function getAllWarnaPlat()
	{
		$link = 'java_postgre_warna_plat';
		$data = $this->models->get_methode($this->config->item($link) . "getAllWarnaPlat");
		$this->output->set_content_type('application/json');
		$this->output->set_output(json_encode($data));
	}

	public function getMarketingProduct()
	{
		$param = $this->input->post('value');
	
		$data = $this->models->post_methode($param, $this->config->item('java_postgre_marketing_product') . "getMarketingProduct");
		$this->output->set_content_type('application/json');
		$this->output->set_output(json_encode($data));
	}

	public function getDataByZipcode()
	{
		$param = array(
			"value" => strtoupper($this->input->post("value"))
		);
		$data = $this->models->post_methode($param, $this->config->item('java_postgre_zip_code') . "getDataByZipcode");
		$this->output->set_content_type('application/json');
		$this->output->set_output(json_encode($data));
	
		
	}

	public function getPencairanDana()
	{
		$link = 'java_postgre_pencairan_dana';
		$data = $this->models->get_methode($this->config->item($link) . "pencairanDana?deleted.equals=0");
		$this->output->set_content_type('application/json');
		$this->output->set_output(json_encode($data));
	}

	public function getSumberDanaDp()
	{
		$link = 'java_postgre_down_payment_dp';
		$data = $this->models->get_methode($this->config->item($link) . "dp_source?deleted.equals=0");
		$this->output->set_content_type('application/json');
		$this->output->set_output(json_encode($data));
	}

	public function getRelationWithHouseOwner()
	{
		$link = 'java_postgre_relation_cust';
		$data = $this->models->get_methode($this->config->item($link) . "getRelationWithHouseOwner");
		$this->output->set_content_type('application/json');
		$this->output->set_output(json_encode($data));
	}

	public function getTempatPenyimpananKend()
	{
		$link = 'java_postgre_tempat_penyimpanan_kend';
		$data = $this->models->get_methode($this->config->item($link) . "tempatpenyimpanankendaraan");
		$this->output->set_content_type('application/json');
		$this->output->set_output(json_encode($data));
	}

	public function getJenisDocKepimilikanRmh()
	{
		$link = 'java_postgre_jenis_doc_kepemilikan_rmh';
		$data = $this->models->get_methode($this->config->item($link) . "jenisDokumenKepemilikanRumah");
		$this->output->set_content_type('application/json');
		$this->output->set_output(json_encode($data));
	}

	public function getBank()
	{
		$param = array(
			"bank_type" => "AUTODEBET"
		);
		$link = 'java_postgre_bank';
		$data = $this->models->post_methode($param,$this->config->item($link) . "getBankSurvey");
		$this->output->set_content_type('application/json');
		$this->output->set_output(json_encode($data));
	}

	public function getCaraBayar()
	{
		$link = 'java_postgre_payment_methode';
		$data = $this->models->get_methode($this->config->item($link) . "paymentMethode");
		$this->output->set_content_type('application/json');
		$this->output->set_output(json_encode($data));
	}



}
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

	public function getDetailTeleSurvey() {
		
		$param = array(
			"no_order" => $this->input->post("order_id")
		);

		$link = 'detailTeleSurvey';
		$data=$this->models->post_methode($param,$this->config->item('java_detail_tele_survey').$link);
		$this->output->set_content_type('application/json');
		$this->output->set_output(json_encode($data));
	} 

	public function getKepemilikanRumah()
	{
		$data=$this->models->get_methode($this->config->item('java_kepemilikan_rumah')."getAllStatusRumah");
		$this->output->set_content_type('application/json');
		$this->output->set_output(json_encode($data));
	}

	public function submitSilentSurvey(){

		$link = 'saveSilentSurvey';
		@$data = array(
			// "silent_survey" => $this->input->post('silent_survey')
			"order_id" => $this->input->post('order_id'),
			"application_id" => $this->input->post('application_id'),
			"initial_recommendation" => $this->input->post('initial_recommendation'),
			"contract_id" => $this->input->post('contract_id'),
			"customer_name" => $this->input->post('customer_name'),
			"branch_code" => $this->input->post('branch_code'),
			"branch_desc" => $this->input->post('branch_desc'),
			"source_order_code" => $this->input->post('source_order_code'),
			"source_order_desc" => $this->input->post('source_order_desc'),
			"source_form_code" => $this->input->post('source_form_code'), 
			"source_form_desc" => $this->input->post('source_form_desc'),
			"current_form_code" => $this->input->post('current_form_code'), 
			"current_form_desc" => $this->input->post('current_form_desc'), 
			"order_created_date" => $this->input->post('order_created_date'), 
			"order_created_by" => $this->input->post('order_created_by'), 
			"applicant_type_code"  => $this->input->post('applicant_type_code'),
			"applicant_type_desc"  => $this->input->post('applicant_type_desc'),
			"customer_type_code" => $this->input->post('customer_type_code'), 
			"customer_type_desc" => $this->input->post('customer_type_desc'), 
			"channel_code" => $this->input->post('channel_code'), 
			"channel_desc" => $this->input->post('channel_desc'), 
			"outlet_channel_code" => $this->input->post('outlet_channel_code'), 
			"outlet_channel_desc" => $this->input->post('outlet_channel_desc'), 
			"order_mode" => $this->input->post('order_mode'), 
			"flag_marketing"  => $this->input->post('flag_marketing'), 
			"flag_trade_in"  => $this->input->post('flag_trade_in'), 
			"promo_code"  => $this->input->post('promo_code'),
			"insurance_com_id"  => $this->input->post('insurance_com_id'),
			"insurance_com_desc"  => $this->input->post('insurance_com_desc'),
			"mkt_program_code"  => $this->input->post('mkt_program_code'), 
			"mkt_program_desc"  => $this->input->post('mkt_program_desc'), 
			"financing_obj_code" => $this->input->post('financing_obj_code'), 
			"financing_obj_desc" => $this->input->post('financing_obj_desc'),
			"screening_1"  => $this->input->post('screening_1'),
			"screening_2"  => $this->input->post('screening_2'),
			"screening_3"  => $this->input->post('screening_3'),
			"detail" => $this->input->post('detail'),
			"customer_behaviour" => $this->input->post('customer_behaviour'),
			"scoring_dealer_mitra" => $this->input->post('scoring_dealer_mitra'),
			"scoring_employee" => $this->input->post('scoring_employee'),
			"debitur_category" => $this->input->post('debitur_category'),
			"dukcapil" => $this->input->post('dukcapil'),
			"slik" => $this->input->post('slik'),
			"dukcapil_pasangan" => $this->input->post('dukcapil_pasangan'),
			"slik_pasangan" => $this->input->post('slik_pasangan'),
			"credit_scoring" => $this->input->post('credit_scoring'),
			"tipe_aplikasi" => $this->input->post('tipe_aplikasi'),
			"telesurvey" => $this->input->post('telesurvey'),
			"silent_survey" => $this->input->post('silent_survey') 
			// "silent_survey" => array(
			// 	"lokasi_survey_rumah" => $this->input->post('lokasi_survey_rumah'),
			// 	"lokasi_survey_usaha" => $this->input->post('lokasi_survey_usaha'),
			// 	"pilihan_foto_rumah_usaha" => $this->input->post('pilihan_foto_rumah_usaha'),
			// 	"dokumen_foto_rumah_usaha" => $this->input->post('dokumen_foto_rumah_usaha'),
			// 	"pilihan_foto_jalan_lingkungan" => $this->input->post('pilihan_foto_jalan_lingkungan'),
			// 	"dokumen_foto_jalan_lingkungan" => $this->input->post('dokumen_foto_jalan_lingkungan'),
			// 	"informan" => $this->input->post('informan')
			// )
			
		);

		// var_dump($data);
		// exit();
		$result = $this->models->post_methode($data,$this->config->item('java_submit_silent_survey').$link);
		$this->output->set_content_type('application/json');
		$this->output->set_output(json_encode($result));
	}
	 
}

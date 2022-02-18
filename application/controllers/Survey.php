<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Survey extends CI_Controller {

	function __construct()
	{
		parent::__construct();
		$this->load->model('models');
	}

    public function to_do_list_survey()
	{
		$session_data['menu'] = [
			'survey/to_do_list_survey'
		];
		$this->load->view('page/survey/to_do_list_survey', $session_data);
	}

    public function survey()
	{
		$session_data['menu'] = [
			'survey/survey'
		];
		$this->load->view('page/survey/survey', $session_data);
	}

}
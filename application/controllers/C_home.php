<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class C_home extends CI_Controller {

	function __construct()
	{
		parent::__construct();
	}

	public function index()
	{
		$session_data['menu'] = [
            'home/home'
        ];
		$this->load->view('page/v_home', $session_data);
	}

}

/* End of file C_home.php */
/* Location: ./application/controllers/C_home.php */
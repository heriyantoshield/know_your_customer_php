<?php
class models extends CI_model {
	public function __construct(){
		parent::__construct();
	}

	public function get_methode($link) {
		@$json = file_get_contents($link);
		$result = json_decode($json);
		return $result;
	}

	public function post_methode($data, $link) {
		$ch = curl_init($link);
		$json = json_encode($data);
		curl_setopt($ch, CURLOPT_POST, 1);
		curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
		curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		$result = curl_exec($ch);
		return $result;
	}
	
	public function postSilentSurveyWiraswasta($data, $link){
		$url = $this->config->item('java_kyc_publisher_kafka').$link;
		$ch = curl_init($url);
		$json = json_encode($data);
		curl_setopt($ch, CURLOPT_POST, 1);
		curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
		curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		$result = curl_exec($ch);
		return $result;
	}

}
?>
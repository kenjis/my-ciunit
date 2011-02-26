<?php

include_once dirname(__FILE__) . '/../CIUnit.php';

class SomeLibTest extends CIUnit_TestCase
{
	function setUp()
	{
		
	}

	function tearDown()
	{

	}
	
	public function testLibMethod()
	{
		$this->assertTrue(true);
	}
}
<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

class fooExceptions extends CI_Exceptions
{
	/**
	 * Constructor
	 *
	 */

	function __construct()
	{
		parent::__construct();
	}

	// --------------------------------------------------------------------
	/**
	 * General Error Page
	 *
	 * This function takes an error message as input
	 * (either as a string or an array) and displays
	 * it using the specified template.
	 *
	 * @access	private
	 * @param	string	the heading
	 * @param	string	the message
	 * @param	string	the template name
	 * @return	string
	 */

	function show_error($heading, $message, $template = 'error_general', $status_code = 500)
	{
		$message = '' . implode("\n", (!is_array($message)) ? array($message) : $message) . "\n";

		$buffer = "====== $heading ======\nMessage: $message\n\n";

		return $buffer;
	}

	// --------------------------------------------------------------------
	/**
	 * Native PHP error handler
	 *
	 * @access	private
	 * @param	string	the error severity
	 * @param	string	the error string
	 * @param	string	the error filepath
	 * @param	string	the error line number
	 * @return	string
	 */

	function show_php_error($severity, $message, $filepath, $line)
	{
		$severity = (!isset($this->levels[$severity])) ? $severity : $this->levels[$severity];

		$filepath = str_replace("\\", "/", $filepath);

		// For safety reasons we do not show the full file path
		if (FALSE !== strpos($filepath, '/'))
		{
			$x = explode('/', $filepath);
			$filepath = $x[count($x) - 2] . '/' . end($x);
		}

		$buffer = "====== PHP Eerror ======\nSeverity: $severity\nMessage: $message\nFile: $filepath @ $line\n\n";

		echo $buffer;
	}
}

/* End of file Exceptions.php */
/* Location: ./system/libraries/fooStack/fooExceptions.php */
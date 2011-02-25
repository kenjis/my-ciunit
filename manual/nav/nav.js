function create_menu(basepath)
{
	var base = (basepath == 'null') ? '' : basepath;

	document.write(
		'<table cellpadding="0" cellspaceing="0" border="0" style="width:98%"><tr>' +
		'<td class="td" valign="top">' +

		'<ul>' +
		'<li><a href="'+base+'index.html">User Guide Home</a></li>' +	
		'<li><a href="'+base+'toc.html">Table of Contents Page</a></li>' +
		'</ul>' +	

		'<h3>Basic Info</h3>' +
		'<ul>' +
			'<li><a href="'+base+'general/requirements.html">Server Requirements</a></li>' +
			'<li><a href="'+base+'license.html">License Agreement</a></li>' +
			'<li><a href="'+base+'changelog.html">Change Log</a></li>' +
			'<li><a href="'+base+'general/credits.html">Credits</a></li>' +
		'</ul>' +	
		
		'<h3>Installation</h3>' +
		'<ul>' +
			'<li><a href="'+base+'installation/downloads.html">Downloading CIUnitTest</a></li>' +
			'<li><a href="'+base+'installation/index.html">Installation Instructions</a></li>' +
			'<li><a href="'+base+'installation/upgrading.html">Upgrading from a Previous Version</a></li>' +
			'<li><a href="'+base+'installation/troubleshooting.html">Troubleshooting</a></li>' +
		'</ul>' +
		
		'<h3>Introduction</h3>' +
		'<ul>' +
			'<li><a href="'+base+'overview/getting_started.html">Getting Started</a></li>' +
			'<li><a href="'+base+'overview/features.html">Supported Features</a></li>' +
		'</ul>' +	

				
		'</td><td class="td_sep" valign="top">' +

		'<h3>General Topics</h3>' +
		'<ul>' +
			'<li><a href="'+base+'testing/models.html">Testing Models</a></li>' +
			'<li><a href="'+base+'testing/libraries.html">Testing Libraries</a></li>' +
		'</ul>' +
		
		'</td><td class="td_sep" valign="top">' +

				
		'<h3>Next section</h3>' +
		'<ul>' +
		'<li><a href="'+base+'libraries/benchmark.html">Item</a></li>' +
		'</ul>' +

		'</td><td class="td_sep" valign="top">' +

		'<h3>Another one</h3>' +
		'<ul>' +
		'<li><a href="'+base+'helpers/item.html">Item</a></li>' +
		'</ul>' +	


		'<h3>Additional Resources</h3>' +
		'<ul>' +
		'<li><a href="https://bitbucket.org/rafsoaken/ciunit">Project\'s Mercurial Repository</a></li>' +
		'<li><a href="http://www.phpunit.de/manual/3.6/en/index.html">PHPUnit 3.6 Manual</a></li>' +
		'<li><a href="http://www.phpunit.de/manual/3.5/en/index.html">Community Wiki</a></li>' +
		'</ul>' +	
		
		'</td></tr></table>');
}
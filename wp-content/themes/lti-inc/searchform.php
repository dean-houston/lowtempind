<?php $search_text = "Search our website..."; ?> 
<form method="get" action="<?php bloginfo('home'); ?>/"> 
	<input type="text" value="<?php echo $search_text; ?>" name="s" id="s" onblur="if (this.value == '')  
	{this.value = '<?php echo $search_text; ?>';}"  
	onfocus="if (this.value == '<?php echo $search_text; ?>')  
	{this.value = '';}" /> 
	<input type="hidden" id="searchsubmit" /> 
</form>
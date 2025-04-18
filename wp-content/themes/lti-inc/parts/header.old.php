<?php get_template_part( 'parts/html-header' ); ?>
	<div id="top-bar">
		<div class="wrapper">
			<ul id="top-social">
				<li><a id="search-activate" href="#"><i class="fa fa-search"></i></a></li>
			</ul>
			<div id="bottom-links-wrapper">
				<ul id="top-links">
					<li class="menu-cta"><a href="<?php bloginfo('siteurl'); ?>/resources/webinars/">Events</a></li>
					<li class="menu-cta"><a href="<?php bloginfo('siteurl'); ?>/find-your-rep/">Find a Rep</a></li>
					<li class="menu-cta"><a href="<?php bloginfo('siteurl'); ?>/contact-us/#quote">Get a Quote</a></li>
				</ul>
			</div>
		</div><!-- / .wrapper -->
	</div><!-- / #top-bar -->
	<header id="top" role="banner">
		<div class="wrapper">
			<?php $search_text = "Find a food service solution..."; ?> 
			<form method="get" id="searchform" action="<?php bloginfo('home'); ?>/"> 
				<input type="text" value="<?php echo $search_text; ?>" name="s" id="s" onblur="if (this.value == '')  
				{this.value = '<?php echo $search_text; ?>';}"  
				onfocus="if (this.value == '<?php echo $search_text; ?>')  
				{this.value = '';}" /> 
				<input type="hidden" id="searchsubmit" /> 
			</form>
			<a id="logo" href="<?php echo home_url( '/' ); ?>" title="<?php bloginfo( 'name' ); ?> | <?php bloginfo( 'description' ); ?>" rel="home">
				<?php bloginfo( 'name' ); ?> | <?php bloginfo( 'description' ); ?>
			</a>
			<a id="nav-activate" href="#"><i class="fa fa-bars"></i></a>
			<nav id="primary">
				<?php wp_nav_menu( array( 'theme_location' => 'primary' ) ); ?>
			</nav><!-- / #primary -->
		</div><!-- / .wrapper -->
	</header><!-- / #top -->
	<div id="under-bar">
		<div class="wrapper">
			<div id="bottom-links-wrapper">
				<ul id="top-links">
					<li class="menu-cta"><a href="<?php bloginfo('siteurl'); ?>/resources/webinars/">Events</a></li>
					<li class="menu-cta"><a href="<?php bloginfo('siteurl'); ?>/find-your-rep/">Find a Rep</a></li>
					<li class="menu-cta"><a href="<?php bloginfo('siteurl'); ?>/contact-us/#quote">Get a Quote</a></li>
					<!-- <li class="menu-cta"><a href="<?php bloginfo('siteurl'); ?>/covid">COVID Update</a></li> -->
				</ul>
			</div>
		</div><!-- / .wrapper -->
	</div><!-- / #top-bar -->
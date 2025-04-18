<?php get_template_part( 'parts/html-header' ); ?>
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
			<a id="nav-activate" href="#"><span class="dashicons dashicons-menu-alt"></span></a>
			<nav id="secondary">
				<div id="desktop-secondary-navigation">
					<?php wp_nav_menu( array( 'theme_location' => 'secondary' ) ); ?>
				</div>
			</nav><!-- / #secondary -->
			<nav id="primary">
				<div id="desktop-navigation">
					<?php wp_nav_menu( array( 'theme_location' => 'primary' ) ); ?>
				</div>
				<div id="mobile-navigation">
					<?php wp_nav_menu( array( 'theme_location' => 'mobile' ) ); ?>
				</div>
			</nav><!-- / #primary -->
		</div><!-- / .wrapper -->
	</header><!-- / #top -->
	<div id="under-bar">
		<div class="wrapper">
			<div id="bottom-links-wrapper">
				<ul id="top-links">
					<li class="menu-cta" style="width: 25%; font-size: 12px;"><a href="<?php bloginfo('siteurl'); ?>/resources/blog/">Blog</a></li>
					<li class="menu-cta" style="width: 25%; font-size: 12px;"><a href="<?php bloginfo('siteurl'); ?>/configurators/">Configurators</a></li>
					<li class="menu-cta" style="width: 25%; font-size: 12px;"><a href="<?php bloginfo('siteurl'); ?>/find-your-rep/">Find a Rep</a></li>
					<li class="menu-cta" style="width: 25%; font-size: 12px;"><a href="<?php bloginfo('siteurl'); ?>/quickturn/">Quick Turn</a></li>			
					<!-- <li class="menu-cta"><a href="<?php bloginfo('siteurl'); ?>/contact-us/">Contact Us</a></li> -->
					<!-- <li class="menu-cta"><a href="<?php bloginfo('siteurl'); ?>/covid">COVID Update</a></li> -->
				</ul>
			</div>
		</div><!-- / .wrapper -->
	</div><!-- / #top-bar -->
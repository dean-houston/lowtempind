	
	<footer id="bottom">
		<div class="wrapper full">
			<div id="discover-lti">
				<h3>Discover how LTI’s VisionDesign team can help</h3>
				<span class="divider"></span>
				<p>Our team is designing and creating dining environments that get engagement and excite patrons across the country. See our <a href="https://www.instagram.com/lti_usa/" target="_blank">Instagram feed</a> for a behind-the-scenes look into how our planning, decor, signage, window treatments and menu management systems are changing cafeteria environments nationwide, and then contact us to start your project today.</p>
				<div id="contact-lti">
					<a class="button" href="<?php bloginfo('siteurl'); ?>/find-your-rep">Find a Rep</a>
					<a class="button green" href="<?php bloginfo('siteurl'); ?>/contact-us/#quote">Get a Quote</a>
				</div>	
			</div><!-- / #discover-lit -->
		</div><!-- .wrapper -->
	</footer><!-- / #bottom -->

	<div id="footer-widgets" >
		<div class="wrapper full">
			<?php get_sidebar( 'footer-1' ); ?>
			<?php get_sidebar( 'footer-2' ); ?>
			<?php get_sidebar( 'footer-3' ); ?>
		</div><!-- .wrapper -->
		<div class="wrapper">		
			<p style="text-align: right;"><a class="sublink" href="https://reps.lowtempind.com/login">Rep Portal<span class="last-word"> Login</span></a></p>
		</div><!-- .wrapper -->		
	</div><!-- / #footer-widgets -->
	
	<div id="sub-footer">
		<div class="branding-wrapper full cf">
			<div id="branding">
				<a id="logo" href="<?php echo home_url( '/' ); ?>" title="<?php bloginfo( 'name' ); ?> | <?php bloginfo( 'description' ); ?>" rel="home"></a>
			</div>
			<div id="wbe-logo">
				<img src="https://lowtempind.com/wp-content/themes/lti-inc/images/WBE_Seal_for_web.png" width="117" height="65"  style="padding-left: 10px;">
			</div>				
		</div><!-- .wrapper -->
		<div class="wrapper">			
			<div id="copyright">
				<p style="text-align: right;">All rights reserved &copy; <?php echo date("Y"); ?> LTI, Inc.</p>
			</div>
		</div><!-- .wrapper -->		
	</div><!-- / #sub-footer -->


	<?php wp_footer(); ?>
	</body>
</html>
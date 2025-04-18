	<?php if(is_page_template('home-page.php') || is_404()): ?>
	<?php get_template_part( 'parts/footer-cta' ); ?>
	<?php endif; ?>
	
	<?php if(is_page_template('industry-parent.php') || is_page_template('industry-child.php')): ?>
	<?php get_template_part( 'parts/footer-industry' ); ?>
	<?php get_template_part( 'parts/footer-cta' ); ?>
	<?php endif; ?>
	
	<?php if(is_single(array(152,62831,96,98,99,51711,318,372,84163))): ?>
	<?php get_template_part( 'parts/footer-counters' ); ?>
	<?php get_template_part( 'parts/footer-cta' ); ?>
	<?php endif; ?>
	
	<?php if(is_page_template('single-spec-sheet.php') || is_tax('spec-sheet-tag')): ?>
	<?php get_template_part( 'parts/footer-spec-sheets' ); ?>
	<?php get_template_part( 'parts/footer-cta' ); ?>
	<?php endif; ?>
	
	<?php if(is_single(array(44696,44709,44670,320,1273))): ?>
	<?php get_template_part( 'parts/footer-serving-tech' ); ?>
	<?php get_template_part( 'parts/footer-cta' ); ?>
	<?php endif; ?>

	<?php if(is_single(array(51873,1778,1747,338,341,44712))): ?>
	<?php get_template_part( 'parts/footer-vision-design' ); ?>
	<?php get_template_part( 'parts/footer-vision-design-cta' ); ?>
	<?php endif; ?>
	
	<?php if(is_single(array(330,331,332,333,334,335))): ?>
	<?php get_template_part( 'parts/footer-stainless-steel' ); ?>
	<?php get_template_part( 'parts/footer-cta' ); ?>
	<?php endif; ?>
	
	<div id="footer-widgets" >
		<div class="wrapper full" style="padding-bottom: 3.5vw;">
			<?php get_sidebar( 'footer-1' ); ?>
			<?php get_sidebar( 'footer-2' ); ?>
			<?php get_sidebar( 'footer-3' ); ?>
			<?php get_sidebar( 'footer-4' ); ?>
		</div><!-- .wrapper -->
		<!--<div class="wrapper">		
			<p style="text-align: right;"><a class="sublink" href="https://reps.lowtempind.com/login?next=%2F">Rep Portal<span class="last-word"> Login</span></a></p>
		</div>--><!-- .wrapper -->		
	</div><!-- / #footer-widgets -->
	
	<div id="sub-footer">
		<div class="branding-wrapper full cf">
			<div id="branding">
				<a id="logo" href="<?php echo home_url( '/' ); ?>" title="<?php bloginfo( 'name' ); ?> | <?php bloginfo( 'description' ); ?>" rel="home"></a>
			</div>	
			<div id="wbe-logo">
				<img src="https://lowtempind.com/wp-content/themes/lti-inc/images/WBE_Seal_for_web.png" alt="Certified Women's Business Enterprise logo" width="117" height="65"  style="padding-left: 10px;">
			</div>	
		</div><!-- .wrapper -->
		<div class="wrapper">			
			<div id="copyright">
				<p style="text-align: right;">All rights reserved &copy; <?php echo date("Y"); ?> LTI, Inc. | <a href="/privacy/">Privacy Policy</a> | <a href="/cookies/">Cookie Policy</a></p>
			</div>
		</div><!-- .wrapper -->		
	</div><!-- / #sub-footer -->

	<?php wp_footer(); ?>

	</body>
</html>


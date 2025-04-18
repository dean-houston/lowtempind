<?php
/**
 * The template for displaying all pages.
 */
?>
<?php get_template_part( 'parts/header' ); ?>

	<main id="main" role="main">
	
		<div class="wrapper">
			<div id="content" class="narrow">
				<div class="bcnxt"><?php if( function_exists( 'bcn_display' ) ) bcn_display(); ?></div>
				<span class="divider"></span>
				<h1><?php the_title(); ?></h1>
				<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
					<?php the_content(); ?>
					<?php get_template_part( 'parts/accordion' ); ?>
				<?php endwhile; ?>
			</div><!-- / #content -->
			<div id="sidebar">
				<?php dynamic_sidebar( 'page-sidebar' ); ?>
			</div><!-- / #sidebar -->
		
				
				
		</div><!-- / .wrapper -->
	
	</main><!-- / #main -->

<?php get_template_part( 'parts/footer' ); ?>

<?php $accordion = get_field("insert_accordion"); ?>
<?php if(!empty($accordion)): ?>	
<script type='text/javascript' id='accordion-shortcodes-script-js-extra'>
/* <![CDATA[ */
var accordionShortcodesSettings = [{"id":"accordion-1","autoClose":true,"openFirst":false,"openAll":false,"clickToClose":true,"scroll":false,"usebuttons":false}];
/* ]]> */
</script>
<script type='text/javascript' src='https://lowtempind.com/wp-content/plugins/accordion-shortcodes/accordion.min.js?ver=2.4.2' id='accordion-shortcodes-script-js'></script>
<?php endif; ?>
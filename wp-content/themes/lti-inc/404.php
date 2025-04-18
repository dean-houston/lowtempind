<?php
/**
 * Template Name: 404 page
 */
?>
<?php get_template_part( 'parts/header' ); ?>

	<main id="main" role="main">
		
		<div id="content" style="padding-top: 5vw; padding-bottom: 8vw;">
			<div class="wrapper">
				<section class="error-404 not-found">
					<header class="page-header">
						<h1 class="page-title"><?php _e( 'Oops! That page can&rsquo;t be found.', 'middlefield' ); ?></h1>
					</header><!-- .page-header -->
					<div class="page-content">
						<p style="margin-top: 0px; margin-bottom: 36px;"><?php _e( 'Maybe try a search to find the right page?', 'm' ); ?></p>

						<?php get_search_form(); ?>

					</div><!-- .page-content -->
				</section><!-- .error-404 -->
			</div><!-- / .wrapper -->
		</div><!-- / #content -->
	
	</main><!-- / #main -->

<?php get_template_part( 'parts/footer' ); ?>
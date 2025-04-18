<?php
/**
 * The Template for displaying all single product spec sheet posts
 */
?>
<?php get_template_part( 'parts/header' ); ?>

<main id="main" role="main">
	
	<div class="wrapper">
		<div id="content">

			<h1><?php the_title(); ?></h1>
			<div style="margin-bottom: 40px;"><?php the_content(); ?></div>
		
			<p>
			<?php $pdf_file = get_field("pdf_file"); ?>
			<?php if($pdf_file != ""): ?>
			<a href="<?php echo $pdf_file; ?>" class="read-more" target="_blank">
			<?php else: ?>
			<a href="<?php the_permalink(); ?>" class="read-more" target="_blank">
			<?php endif; ?>
			Download <i class="fa fa-chevron-right"></i></a></p>
		
		</div><!-- / #content -->
		
		<nav id="post-nav">
			<ul>
				<li class="prev"><?php previous_posts_link("<i class='fa fa-chevron-left'></i> Previous Posts"); ?></li>
				<li class="next"><?php next_posts_link("Next Posts <i class='fa fa-chevron-right'></i>"); ?></li>
			</ul>
		</nav><!-- / #post-nav -->
		
	</div><!-- / .wrapper -->

</main><!-- / #main -->

<?php get_template_part( 'parts/footer' ); ?>
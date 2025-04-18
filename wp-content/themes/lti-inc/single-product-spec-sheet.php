<?php
/**
 * The Template for displaying all single product spec sheet posts
 */
?>
<?php get_template_part( 'parts/header' ); ?>

<main id="main" role="main">
	
	<div class="wrapper">
		<div id="content">
			<div class="bcnxt"><?php if( function_exists( 'bcn_display' ) ) bcn_display(); ?></div>
			<span class="divider"></span>			
			<h1><?php the_title(); ?></h1>
			<div style="margin-bottom: 40px;"><?php the_content(); ?></div>

		<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
			<?php $dflip_shortcode = get_field("dflip_shortcode"); ?>
			<?php if( $dflip_shortcode ): ?>
				<?php echo do_shortcode( $dflip_shortcode ); ?>
			<?php endif; ?>
		<?php endwhile; ?>
		
		<p>
		<?php $pdf_file = get_field("pdf_file"); ?>
		<?php if($pdf_file != ""): ?>
		<a href="<?php echo $pdf_file; ?>" class="read-more" target="_blank">
		<?php else: ?>
		<a href="<?php the_permalink(); ?>" class="read-more" target="_blank">
		<?php endif; ?>
		Download <i class="fa fa-chevron-right"></i></a>
		</p>

		<?php $product_spec_sheets = get_field("product_spec_sheets"); ?>
		<?php if(!empty($product_spec_sheets)): ?>
		<div id="featured-products" class="content-section">
			<div class="wrapper">
				<h3>Related Spec Sheets</h3>
				<div id="post-list" class="list-view">
				<?php 
					$paged = ( get_query_var('paged') ) ? get_query_var('paged') : 1;
					$query_args = array(
						'post_type' => 'product-spec-sheet',
						'posts_per_page' => 8,
						'paged' => $paged,
						'post__in' => $product_spec_sheets,
						'orderby' => 'post__in'	
					);
					$the_query = new WP_Query($query_args); ?>
				<?php while($the_query->have_posts()) : $the_query->the_post(); ?>
					<div class="item">
						<a href="<?php the_permalink(); ?>">
							<div class="featured-image">
								<?php the_post_thumbnail('list-image'); ?>
							</div><!-- / .feature-image -->
							<div class="item-detail">
								<h3><?php the_title(); ?></h3>
								<p><?php $excerpt = get_the_excerpt(); echo wp_trim_words( $excerpt , '35' ); ?></p>
								<p class="read-more">View Product Spec Sheet <i class="fa fa-chevron-right"></i></p>
							</div><!-- / .item-detail -->
						</a>
					</div><!-- / .item -->
				<?php endwhile; wp_reset_query(); ?>
				</div><!-- / #post-list .list-view -->
			</div><!-- / .wrapper -->
		</div><!-- / #featured-products .content-section -->
		<?php endif; ?>
		
		</div><!-- / #content -->
		
	</div><!-- / .wrapper -->

</main><!-- / #main -->

<?php get_template_part( 'parts/footer-cta' ); ?>
<?php get_template_part( 'parts/footer' ); ?>
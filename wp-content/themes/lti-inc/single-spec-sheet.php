<?php
/**
* Template Name: Spec Sheet
* Template Post Type: product-spec-sheet
*/
?>
<?php get_template_part( 'parts/header' ); ?>

<div id="main" role="main">
	<div id="content">
		<div class="wrapper">
		
			<div class="bcnxt"><?php if( function_exists( 'bcn_display' ) ) bcn_display(); ?></div>
			<span class="divider"></span>
			<h1><?php the_title(); ?></h1>	
			
			<div id="two-columns" style="clear: both; padding-bottom: 0px;">
			
				<div class="content-left-column">
					<?php if(has_post_thumbnail()): ?>
						<?php the_post_thumbnail('list-image'); ?>
					<?php endif; ?>
					<p class="spec-sheet-featured-image-caption"><?php the_field('caption'); ?></p>
				</div>	
				
				<div class="content-right-column product-asset-list">
					<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
					<?php the_content(); ?>

					
					<h3>Product Data</h3>
					<ul>
						<?php $product_spec_sheet = get_field('product_spec_sheet'); ?>
						<?php if(!empty($product_spec_sheet)): ?>						
						<li><a href="<?php the_field('product_spec_sheet'); ?>" target="_blank">Download Spec Sheet <i class="fa-solid fa-chevron-right"></i></a></li>
						<?php endif; ?>						


						<?php if( have_rows('product_spec_sheets')): ?>
							<?php while ( have_rows('product_spec_sheets') ) : the_row(); ?>
							<li><a href="<?php the_sub_field('spec_sheet'); ?>" target="_blank">Download <?php the_sub_field('spec_sheet_type'); ?> Spec Sheet <i class="fa-solid fa-chevron-right"></i></a></li>
							<?php endwhile; ?>
						<?php endif; ?>

						<?php $product_manual = get_field('product_manual'); ?>
						<?php if(!empty($product_manual)): ?>						
						<li><a href="<?php the_field('product_manual'); ?>" target="_blank">Download Manual <i class="fa-solid fa-chevron-right"></i></a></li>
						<?php endif; ?>	
						
						<?php $product_cad_file = get_field('product_cad_file'); ?>
						<?php if(!empty($product_cad_file)): ?>						
						<li><a href="<?php the_field('product_cad_file'); ?>" target="_blank">Download CAD File <i class="fa-solid fa-chevron-right"></i></a></li>
						<?php endif; ?>						

						<?php $product_revit_file = get_field('product_revit_file'); ?>
						<?php if(!empty($product_revit_file)): ?>						
						<li><a href="<?php the_field('product_revit_file'); ?>" target="_blank">Download Revit File <i class="fa-solid fa-chevron-right"></i></a></li>
						<?php endif; ?>	

						<?php $product_gallery = get_field('product_gallery'); ?>
						<?php if(!empty($product_gallery)): ?>
						<li><?php echo do_shortcode($product_gallery); ?> <i class="fa fa-chevron-right" style="color: #62bb21;"></i></li>
						<?php endif; ?>						
						
						<?php $product_video = get_field('product_video'); ?>
						<?php if(!empty($product_video)): ?>
						<li><a href="<?php the_field('product_video'); ?>" target="_blank">Watch Video <i class="fa-solid fa-chevron-right"></i></a></li>
						<?php endif; ?>
						
						<?php $configurator_link = get_field('configurator_link'); ?>
						<?php if(!empty($configurator_link)): ?>
						<li><a href="<?php the_field('configurator_link'); ?>" target="_blank">Build One Now <i class="fa-solid fa-chevron-right"></i></a></li>
						<?php endif; ?>
						
						<!-- <li class="product-asset-configurator-link"><a href="/configurator/" target="_blank">Build One Now <i class="fa-solid fa-chevron-right"></i></a></li -->
						
					</ul>
					
					<a class="button spec-sheet-get-a-quote-button" href="/contact-us/#quote">Get a Quote</a>
					
				</div>
			</div><!-- #two-columns -->
		</div><!-- / .wrapper -->
		
		<!-- via https://www.webdesign101.net/check-if-post-content-is-empty-in-wordpress-solved/  -->
		<?php get_template_part( 'parts/features-list' ); ?>	
		<?php get_template_part( 'parts/image-gallery' ); ?>
		<?php get_template_part( 'parts/spec-sheets' ); ?>	

		<div class="wrapper prev-next">
			<div class="prev-next-navigation">
			
			<!-- via https://wordpress.stackexchange.com/questions/149826/display-posts-from-the-same-category-using-next-previous-post-link -->
			<?php
			//get custom taxonomies.
			$terms = wp_get_post_terms( get_the_ID(), 'spec-sheet-tag' ); //last argument is the custom taxonomy. change to desired tax

			//https://developer.wordpress.org/reference/functions/get_the_tags/#comment-917 
			foreach( $terms as $term ) : 
				if ( $term ) :
					$stay_in[] = $term->term_id;
					break; //break out the foreach, if found.
				endif;
			endforeach;

			//get all post ids, that are in my defined category
			$args = array(
				'post_type'         => 'product-spec-sheet', //custom post type
				'posts_per_page'    => -1,
				'tax_query'         => array(
					array(
						'taxonomy'  => 'spec-sheet-tag', // custom taxonomy
						'field'     => 'term_id',
						'terms'     => $stay_in,
						'operator'  => 'IN', //change to your needs.. IN, NOT IN, AND, EXISTS, NOT EXISTS
					)
				),
				'orderby'           => 'post_date',
				'order'             => 'ASC',
				'fields'            => 'ids', //only return the post ids, not the whole post-objects
			);
			$all_posts = new WP_Query( $args );
			//search for the current post by its id and look for the previous / next ids
			$this_index = array_search( $post->ID, $all_posts->posts );
			$prev_id = $all_posts->posts[ $this_index - 1 ];
			$next_id = $all_posts->posts[ $this_index + 1 ];
			$prev_title = $all_posts->posts[ $this_index - 1 ];
			$next_title = $all_posts->posts[ $this_index + 1 ];
			//echo links, if previous/next exists
			if ( ! empty( $prev_id ) ) :
				echo '<div class="alignleft" >' . '<i class="fa fa-chevron-left" >' . '</i> ' . '<a class="prev-arrow" rel="prev" href="' . get_permalink( $prev_id ) . '">' . get_the_title( $prev_title ) . '</a>' . '</div>';
			endif;

			if ( ! empty( $next_id ) ) :
				echo '<div class="alignright" >' . '<a class="next-arrow" rel="next" href="' . get_permalink( $next_id ) . '">' .  get_the_title( $next_title ) . '</a>' . ' <i class="fa fa-chevron-right" >' . '</i>' . '</div>';
			endif;
			wp_reset_postdata();

			?>

			<?php endwhile; ?><!-- / end of the loop -->	

			</div> <!-- end navigation -->
		</div><!-- / .wrapper -->	


	</div><!-- / #content -->	
</div><!-- / #main -->

<?php get_template_part( 'parts/footer' ); ?>
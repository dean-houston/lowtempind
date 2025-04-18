<?php
/**
Template Name: Any Market Any Budget
 */
?>
<?php get_template_part( 'parts/header' ); ?>

	<main id="main" role="main">
	
		<?php $slider = get_field("slider"); ?>
		<?php if(!empty($slider)): ?>
		<div id="slider">
			<?php while(the_repeater_field("slider")): ?>
			<?php $background = wp_get_attachment_image_src( get_sub_field('slide_image'), 'slider' ); ?>
			<div class="slide" style="background-image: url(<?php echo $background[0]; ?>);">
				<img src="<?php echo $background[0]; ?>" />
				<?php if( get_sub_field('slide_header') ): ?>
					<div class="overlay">
						<h2><?php the_sub_field("slide_header"); ?></h2>
						<?php $link_1_url = get_sub_field("slide_link_1"); $link_2_url = get_sub_field("slide_link_2"); $link_3_url = get_sub_field("slide_link_3"); ?>
						<?php $link_1_text = get_sub_field("slide_link_text_1"); $link_2_text = get_sub_field("slide_link_text_2"); $link_3_text = get_sub_field("slide_link_text_3"); ?>
						<?php if($link_1_url != ""): ?>
						<a href="<?php echo $link_1_url; ?>"><?php echo $link_1_text; ?> <i class="fa fa-chevron-right"></i></a>		
						<?php endif; ?>
						<?php if($link_2_url != ""): ?>
						<a href="<?php echo $link_2_url; ?>"><?php echo $link_2_text; ?> <i class="fa fa-chevron-right"></i></a>		
						<?php endif; ?>
						<?php if($link_3_url != ""): ?>
						<a href="<?php echo $link_3_url; ?>"><?php echo $link_3_text; ?> <i class="fa fa-chevron-right"></i></a>		
						<?php endif; ?>
					</div><!-- / .overlay -->
				<?php endif; ?>
			</div><!-- / .slide -->
			<?php endwhile; ?>
			<div class="slider-nav"></div>
		</div><!-- / #slider -->
		<?php else: ?>
			<?php if(has_post_thumbnail()): ?>
			<?php $page_splash = wp_get_attachment_image_src(get_post_thumbnail_id( $post->ID ), 'page-splash'); ?>
			<div id="page-splash" style="background-image: url(<?php echo $page_splash[0]; ?>);">
			</div><!-- / #page-splash -->
			<?php endif; ?>
		<?php endif; ?>
	
		<div class="wrapper">
		
			<div id="content">
				<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
					<div class="content-left-column">
						<p class="preheader">
							<?php the_field('preheader') ?>
						<span class="divider"></span>
						<h1><?php the_title(); ?></h1>
						<?php the_content(); ?>
					</div>
					<div class="contact-form right-column">
						<?php the_field('contact-form') ?>
					</div>
				<?php endwhile; ?>
				<?php wp_reset_query(); ?>
			
				<?php if( get_field('product-logo') ): ?>
					<div id="product-branding">				
						<?php the_field('product-logo') ?>
					</div><!-- / #product-branding-->
				<?php endif; ?>
				
				<?php if( get_field('video_embed') ): ?>				
				<div id="video">
					<div class="video-embed">
						<div class="video-container"><?php the_field('video_embed'); ?></div>
					</div>
					<div class="video-caption">
						<?php the_field('video_caption'); ?>
					</div>
				</div>	
				<?php endif; ?>
				
				<div id="two-columns">
					<div class="content-left-column">
						<?php the_field('left_column') ?>
					</div>				
					<div class="content-right-column">
						<?php the_field('right_column') ?>
					</div>
				</div><!-- #two-columns -->
				
				<div class="carousel" style="clear: both;">
					<?php the_field('gallery') ?>
				</div>
				
			</div><!-- / #content -->
			

			<?php $product_spec_sheets = get_field("product_spec_sheets"); ?>
			<?php if(!empty($product_spec_sheets)): ?>
			<div id="featured-products" class="content-section">
					<h2>Product Spec Sheets</h2>
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
			</div><!-- / #featured-products .content-section -->
			<?php endif; ?>

		</div><!-- / .wrapper -->

	</main><!-- / #main -->

<?php get_template_part( 'parts/footer' ); ?>
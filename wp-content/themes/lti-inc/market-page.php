<?php
/**
Template Name: Markets Page
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

		<?php $image_hotspot = get_field('image_hotspot'); ?>
		<?php if(!empty($image_hotspot)): ?>			
			<div id="hotspot-splash">
				<?php the_field('image_hotspot') ?>
			</div><!-- / #hotspot-splash -->
		<?php endif; ?>
		
		<div class="wrapper">
		
			<div id="content">
					<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
						<div class="intro">
							<div class="content-left-column">
								<p class="preheader"><?php the_field('market-segment') ?></p>
								<span class="divider"></span>
								<h1><?php the_title(); ?></h1>
								<?php the_content(); ?>
							</div>
							<div class="content-right-column">
								<div class="contact-form">
									<?php the_field('contact-form') ?>
								</div>
							</div>
						</div>
					<?php endwhile; ?>
					<?php wp_reset_query(); ?>

					<?php $multi_columns = get_field('multi_columns'); ?>
					<?php if(!empty($multi_columns)): ?>
						<div id="multi_column_wrapper">
						<h2><?php the_field('multi_column_header'); ?></h2>
							<?php while(the_repeater_field('multi_columns')): ?>
								<div class="multi_column one-third small-100 ta-l flt">
									<?php the_sub_field('multi_column') ?>
								</div>
							<?php endwhile; ?>
						</div>
					<?php endif; ?>

					<?php $testimonials = get_field('testimonials'); ?>
					<?php if(!empty($testimonials)): ?>			
						<div id="testimonials">
							<?php the_field('testimonials') ?>
						</div><!-- / #hotspot-splash -->
					<?php endif; ?>
					
					<?php $video_group = get_field('video_group'); ?>
					<?php if(!empty($video_group)): ?>
						<?php while(the_repeater_field('video_group')): ?>
							<div id="video">
								<div class="video-embed">
									<div class="video-container">
										<?php the_sub_field('video_embed'); ?>
										<img src="<?php the_sub_field('image_embed'); ?>">
									</div>
								</div>
								<div class="video-caption">
									<?php the_sub_field('video_caption'); ?>
								</div>
							</div>
						<?php endwhile; ?>
					<?php endif; ?>	
					
					<?php $gallery = get_field('gallery'); ?>
					<?php if(!empty($gallery)): ?>				
					<div class="carousel">
						<h2><?php the_title(); ?> Gallery</h2>
						<?php the_field('gallery'); ?>
					</div>
					<?php endif; ?>	

					<?php $cta_group = get_field('cta_group'); ?>
					<?php if(!empty($cta_group)): ?>
						<?php while(the_repeater_field('cta_group')): ?>
							<div class="downloadable">
								<div class="download-tn">
									<a href="<?php the_sub_field('cta_link'); ?>" target="_blank"><img src="<?php the_sub_field('cta_thumbnail'); ?></a>
								</div>
								<div class="download-cta">
									<?php the_sub_field('cta_message'); ?>
									<a class="button green" href="<?php the_sub_field('cta_link'); ?>" target="_blank">Check It Out</a>
								</div>
							</div>
						<?php endwhile; ?>
					<?php endif; ?>	
					
					<?php $featured_cases = get_field("featured_cases"); ?>
					<?php if(!empty($featured_cases)): ?>				
					<div class="market-case-studies">
						<h2><?php the_title(); ?> Case Studies</h2>
							<div class="case-study">
								<?php 
									$paged = ( get_query_var('paged') ) ? get_query_var('paged') : 1;
									$query_args = array(
										'post_type' => 'case-studies',
										'posts_per_page' => 3,
										'paged' => $paged,
										'post__in' => $featured_cases,
										'orderby' => 'post__in'	
									);
									$the_query = new WP_Query($query_args); ?>
								<?php while($the_query->have_posts()) : $the_query->the_post(); ?>
									<div class="single-case">
										<a class="image" href="<?php the_permalink(); ?>">
											<?php the_post_thumbnail(); ?>
										</a>
										<h4 class="title"><?php the_title(); ?></h4>
										<p class="location"><?php the_field("location"); ?></p>
										<p class="excerpt"><?php $excerpt = get_the_excerpt(); echo wp_trim_words( $excerpt , '25' ); ?></p>
										<a class="learn-more" href="<?php the_permalink(); ?>">Learn more <i class="fa fa-chevron-right"></i></a>
									</div>
								<?php endwhile; wp_reset_query(); ?>
							</div><!-- / .case-study -->
					</div>
					<?php endif; ?>	
					
					<?php $featured_products = get_field("featured_products"); ?>
					<?php if(!empty($featured_products)): ?>
					<div id="featured-products">
						<div class="wrapper">
							<h2>Product Serving Solutions</h2>
							<div id="post-list" class="list-view">
							<?php 
								$paged = ( get_query_var('paged') ) ? get_query_var('paged') : 1;
								$query_args = array(
									'post_type' => 'product',
									'posts_per_page' => 8,
									'paged' => $paged,
									'post__in' => $featured_products,
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
											<span class="product-logo"><?php the_field('product-logo'); ?></span>
											<p><?php $excerpt = get_the_excerpt(); echo wp_trim_words( $excerpt , '35' ); ?></p>
											<p class="read-more">Read More <i class="fa fa-chevron-right"></i></p>
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

<?php get_template_part( 'parts/footer' ); ?>
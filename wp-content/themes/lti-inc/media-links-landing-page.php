<?php
/**
 * Template name: Links landing page
 */
?>
<?php get_template_part( 'parts/header' ); ?>

	<main id="main" role="main">
	
		<div id="content">
			<div class="wrapper overflow">
				<div class="half">
					<div class="bcnxt"><?php if( function_exists( 'bcn_display' ) ) bcn_display(); ?></div>
					<span class="divider"></span>	
					<h1><?php the_title(); ?></h1>
					<p>
					<?php
						wp_reset_query(); // necessary to reset query
						while ( have_posts() ) : the_post();
							the_content();
						endwhile; // End of the loop.
					?></p>
				</div><!-- / .half -->
				<div class="half">
				<?php
					$categories = get_terms('link_tag');
			        $html = '<select class="filters-specsheets option-set" data-option-key="filter">';
			        $html .= '<option value="*" data-option-value="*">All</option>';
			        foreach ($categories as $category) {
			            $html .= "<option value='.{$category->slug}' data-option-value='.{$category->slug}'>{$category->name}</option>";   
			        }
			        $html .= '</select>';
			        echo $html;
				?>
				</div><!-- / .half -->
			</div><!-- / .wrapper -->
		</div><!-- / #content -->
		
		<div id="specsheet-list" class="content-section">
			<div class="wrapper">
				<div id="post-list" class="list-view">
				<?php 
					$paged = ( get_query_var('paged') ) ? get_query_var('paged') : 1;
					$query_args = array(
						'post_type' => 'links',
						'posts_per_page' => -1,
						'paged' => $paged	
					);
					$the_query = new WP_Query($query_args); ?>
				<?php while($the_query->have_posts()) : $the_query->the_post(); ?>
					<?php $taxes = array('link_tag'); ?>
					<?php $terms_array = get_the_terms( $post->ID, $taxes);
					$terms_string = ""; 
					    foreach ( $terms_array as $term ) {
					        $terms_string .= $term->slug.' '; 
					    }
					?> 
					<div class="item <?php echo $terms_string; ?>">
						<a href="<?php the_field('link_url'); ?>" target="_blank">
							<div class="featured-image">
								<?php the_post_thumbnail('list-image'); ?>
							</div><!-- / .feature-image -->
							<div class="item-detail">
								<h3><?php the_title(); ?></h3>
								<p style="font-size: .875em; margin-top: 0; text-transform: uppercase;"><?php the_field('link_date'); ?><span style="padding: 0 10px;">|</span><?php the_field('link_publication'); ?></p>
								<p><?php $excerpt = get_the_excerpt(); echo wp_trim_words( $excerpt , '35' ); ?></p>
								<p class="read-more">Read More <i class="fa fa-chevron-right"></i></p>
							</div><!-- / .item-detail -->
						</a>									
					</div><!-- / .item -->
				<?php endwhile; wp_reset_query(); ?>
				</div><!-- / #post-list .list-view -->
			</div>
		</div>
		
		<nav id="pagination">
			<div class="wrapper">
				<ul>
					<li><a class="back-to-top" href="#">Back to top <i class="fa fa-chevron-up"></i></a></li>
				</ul>
			</div><!-- / .wrapper -->
		</nav><!-- / #pagination -->
	
	</main><!-- / #main -->
	
<?php get_template_part( 'parts/footer' ); ?>

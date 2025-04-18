<?php
/**
 * Template name: Product Spec Sheets
 */
?>
<?php get_template_part( 'parts/header' ); ?>

<style type="text/css">
.page-template-product-spec-sheets .content-section h4 {line-height: 1.5; margin-bottom: 5px;}
</style>

	<main id="main" role="main">
	
		<div id="content">
			<div class="wrapper overflow">
				<div class="half">
					<div class="bcnxt"><?php if( function_exists( 'bcn_display' ) ) bcn_display(); ?></div>
					<span class="divider"></span>
					<h1><?php the_title(); ?></h1>
					<p>Pick a category to sort and scroll through LTI's foodservice equipment specsheets:</p>
				</div><!-- / .half -->
				<div class="half">
				<?php
					$categories = get_terms('spec-sheet-tag');
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
			<div class="wrapper overflow">
				<div id="post-list" class="grid-view">
				<?php 
					$paged = ( get_query_var('paged') ) ? get_query_var('paged') : 1;
					$query_args = array(
						'post_type' => 'product-spec-sheet',
						'posts_per_page' => -1,
						'paged' => $paged	
					);
					$the_query = new WP_Query($query_args); ?>

				<?php while($the_query->have_posts()) : $the_query->the_post(); ?>
					<?php $taxes = array('spec-sheet-tag'); ?>
					<?php $terms_array = get_the_terms( $post->ID, $taxes);
					$terms_string = ""; 
					    foreach ( $terms_array as $term ) {
					        $terms_string .= $term->slug.' '; 
					    }
					?> 
					<a href="<?php echo get_the_permalink(); ?>">
					<div class="item <?php echo $terms_string; ?>">
						<?php if( has_post_thumbnail() ): ?>
							<div class="featured-image">
								<?php the_post_thumbnail('list-image'); ?>
							</div><!-- / .feature-image -->
						<?php endif; ?>
						<div class="item-detail">
							<h4><?php the_title(); ?></h4>
							<p class="read-more">Learn More <i class="fa fa-chevron-right"></i></p>
						</div><!-- / .item-detail -->
					</div><!-- / .item -->
					</a>
				<?php endwhile; wp_reset_query(); ?>
				</div><!-- / #post-list .grid-view -->
			</div>
		</div>
	</main><!-- / #main -->

<?php get_template_part( 'parts/footer' ); ?>
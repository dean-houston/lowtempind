
			<!-- via https://www.advancedcustomfields.com/resources/working-with-nested-repeaters/ -->
			
			<!-- check for rows (parent repeater) -->
			<?php if( have_rows('insert_accordion') ): ?>
			
				<!-- loop thru rows (parent repeater) -->
				
				<?php while( have_rows('insert_accordion') ): the_row(); ?>
				
					<div id="accordion-1" class="accordion col-full opaque" style="padding-top: 5vw; padding-bottom: 5vw;">
						<h2 style="color: #62bb21;"><?php the_sub_field("accordion_item_title"); ?></h2>
						
						<!-- check for rows (subrepeater) -->
						<?php if( have_rows('accordion_item_content') ): ?>
						
							<!-- loop thru rows (subrepeater) -->
							<?php while( have_rows('accordion_item_content') ): the_row(); ?>
							
								<?php echo do_shortcode ('[accordion-item title="'.get_sub_field("accordion_content_title").'"]'.get_sub_field("accordion_content").'[/accordion-item]');?>
								
							<?php endwhile; ?><!-- accordion_item_content -->	
							
						<?php endif; ?><!-- accordion_item_content -->	
						
					</div><!-- #accordion-1 -->
					
				<?php endwhile; ?><!-- insert_accordion -->
				
			<?php endif; ?><!-- insert_accordion -->
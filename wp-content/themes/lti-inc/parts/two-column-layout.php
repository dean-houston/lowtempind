		<?php $left_column = get_field("left_column"); ?>
		<?php if(!empty($left_column)): ?>	
		<div class="content-section">
			<div class="wrapper">		
				<div id="two-columns" style="clear: both; padding-bottom: 0px;">
					<div class="content-left-column">
						<?php echo get_field('left_column') ?>
					</div>				
					<div class="content-right-column">
						<?php echo get_field('right_column') ?>
					</div>
				</div><!-- #two-columns -->
			</div><!-- / .wrapper -->
		</div><!-- / .content-section  -->			
		<?php endif; ?>
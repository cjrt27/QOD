<?php
/**
 * The template for displaying the footer.
 *
 * @package QOD_Starter_Theme
 */

?>

			</div><!-- #content -->
<!--TODO: Change markup so you can style --> 
			<footer id="colophon" class="site-footer" role="contentinfo">
				<div class="site-info">
						<?php esc_html( 'Primary Menu' ); ?></button>
						<?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_id' => 'primary-menu' ) ); ?>
					</nav><!-- #site-navigation -->
					<div class="footer-text">
						Brought to you by <a href="<?php echo esc_url( 'https://redacademy.com/' ); ?>">RED Academy</a>
					</div>	
				</div><!-- .site-info -->
			</footer><!-- #colophon -->
		</div><!-- #page -->

		<?php wp_footer(); ?>

	</body>
</html>

<?php
/**
 * Template part for displaying single posts.
 *
 * @package QOD_Starter_Theme
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<div class="entry-content">
		<?php the_content(); ?>
	</div><!-- .entry-content -->	

	<header class="entry-header">
		<?php if ( has_post_thumbnail() ) : ?>
			<?php the_post_thumbnail( 'large' ); ?>
		<?php endif; ?>

		<?php the_title( '<h1 class="entry-title">- ', '</h1>' ); ?>
	</header><!-- .entry-header -->

	
</article><!-- #post-## -->

<!-- Button for home page and single page -->

<?php if (is_home() || is_single() ) : ?>
	<button type="button" id="new-quote-button">Show Me Another!</button>
	<?php endif ?>
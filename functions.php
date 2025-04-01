<?php

/**
 * Functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package elegance
 * @since 1.0.0
 */

/**
 * Enqueue the CSS files.
 *
 * @since 1.0.0
 *
 * @return void
 */


class Custom_Nav_Walker extends Walker_Nav_Menu
{
	function start_lvl(&$output, $depth = 0, $args = null)
	{
		if ($depth === 0) { // Ensures only top-level menus have sub-menus
			$output .= '<ul class="sub-menu">';
		}
	}

	function end_lvl(&$output, $depth = 0, $args = null)
	{
		if ($depth === 0) {
			$output .= '</ul>';
		}
	}

	function start_el(&$output, $item, $depth = 0, $args = null, $id = 0)
	{
		if ($depth > 0) return; // Only process top-level items

		$classes = !empty($item->classes) && is_array($item->classes) ? $item->classes : [];
		$active_class = in_array('current-menu-item', $classes) ? ' active' : '';

		$output .= '<li class="nav-item' . $active_class . '">';
		$output .= '<a class="nav-link" href="' . esc_url($item->url) . '">' . esc_html($item->title);

		if ($active_class) {
			$output .= ' <span class="sr-only">(current)</span>';
		}

		$output .= '</a>';
	}

	function end_el(&$output, $item, $depth = 0, $args = null)
	{
		if ($depth > 0) return; // Only process top-level items
		$output .= '</li>';
	}
}
class Custom_Nav_Walker_For_Editor_Panel extends Walker_Nav_Menu
{
	function start_lvl(&$output, $depth = 0, $args = null)
	{
		if ($depth === 0) { // Ensures only top-level menus have sub-menus
			$output .= '<ul class="sub-menu">';
		}
	}

	function end_lvl(&$output, $depth = 0, $args = null)
	{
		if ($depth === 0) {
			$output .= '</ul>';
		}
	}

	function start_el(&$output, $item, $depth = 0, $args = null, $id = 0)
	{
		if ($depth > 0) return; // Only process top-level items

		$classes = !empty($item->classes) && is_array($item->classes) ? $item->classes : [];
		$active_class = in_array('current-menu-item', $classes) ? ' active' : '';

		$output .= '<li class="nav-item' . $active_class . '">';
		$output .= '<a class="nav-link" href="#">' . esc_html($item->title);

		if ($active_class) {
			$output .= ' <span class="sr-only">(current)</span>';
		}

		$output .= '</a>';
	}

	function end_el(&$output, $item, $depth = 0, $args = null)
	{
		if ($depth > 0) return; // Only process top-level items
		$output .= '</li>';
	}
}


function elegance_styles()
{
	// CSS
	wp_enqueue_style(
		'elegant_font',
		"//fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap",
	);
	wp_enqueue_style(
		'elegance-style',
		get_stylesheet_uri(),
		[],
		wp_get_theme()->get('Version')
	);
	wp_enqueue_style(
		'bootstrap',
		get_template_directory_uri() . "/assets/css/bootstrap.min.css",
		wp_get_theme()->get('Version')
	);
	wp_enqueue_style(
		'font-awesome',
		get_template_directory_uri() . "/assets/css/fontawesome.css",
		wp_get_theme()->get('Version')
	);

	wp_enqueue_style(
		'owl',
		get_template_directory_uri() . "/assets/css/owl.css",
		array(),
		wp_get_theme()->get('Version')
	);
	wp_enqueue_style(
		'main-style',
		get_template_directory_uri() . "/assets/css/main.css",
		array("bootstrap"),
		wp_get_theme()->get('Version')
	);

	// JS
	wp_enqueue_style('wp-block-library');
	wp_enqueue_script("bootstrap", get_template_directory_uri() . "/assets/js/bootstrap.bundle.min.js", array('jquery'), wp_get_theme()->get('Version'), true);
	wp_enqueue_script("slick", get_template_directory_uri() . "/assets/js/slick.js", array('jquery'), wp_get_theme()->get('Version'), true);
	wp_enqueue_script("isotope", get_template_directory_uri() . "/assets/js/isotope.js", array('jquery'), wp_get_theme()->get('Version'), true);
	wp_enqueue_script("accordion", get_template_directory_uri() . "/assets/js/accordions.js", array('jquery'), wp_get_theme()->get('Version'), true);
	wp_enqueue_script("script", get_template_directory_uri() . "/assets/js/script.js", array('jquery', 'owl'), wp_get_theme()->get('Version'), true);
}
add_action('wp_enqueue_scripts', 'elegance_styles');


add_action('enqueue_block_editor_assets', 'elegance_styles');

function theme_support()
{
	register_nav_menu('header-menu', __('Header menu', 'elegance'));
}
add_action("after_setup_theme", "theme_support");


require_once("blocks/blocks.php");

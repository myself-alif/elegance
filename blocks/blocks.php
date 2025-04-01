<?php

/**
 * Plugin Name:       Blocks
 * Description:       Example block scaffolded with Create Block tool.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       blocks
 *
 * @package CreateBlock
 */

if (! defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

function elegant_theme_init()
{
	register_block_type(__DIR__ . '/build/menu');
	register_block_type(__DIR__ . '/build/footer');
	register_block_type(__DIR__ . '/build/social-links');
	register_block_type(__DIR__ . '/build/recent-posts');
	register_block_type(__DIR__ . '/build/post-categories');
	register_block_type(__DIR__ . '/build/post-tags');
	register_block_type(__DIR__ . '/build/search');
	register_block_type(__DIR__ . '/build/post-gallery');
}
add_action('init', 'elegant_theme_init');

add_filter('block_categories_all', 'elegant_theme_register_block_category');

function elegant_theme_register_block_category($categories)
{

	array_unshift($categories, array(
		'slug' => 'elegant-blocks',
		'title' => 'Elegant blocks'
	));

	return $categories;
}

add_action('enqueue_block_assets', function (): void {
	wp_enqueue_style('dashicons');
});
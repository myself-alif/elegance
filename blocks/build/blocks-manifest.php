<?php
// This file is generated. Do not modify it manually.
return array(
	'footer' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 2,
		'name' => 'elegant/footer',
		'version' => '1.0',
		'title' => 'Footer',
		'category' => 'elegant-blocks',
		'icon' => 'ellipsis',
		'description' => 'Displays footer',
		'example' => array(
			
		),
		'attributes' => array(
			'footerText' => array(
				'type' => 'string',
				'default' => 'Made with &#10084; by --- <strong><i>Al Mahmud Alif</i></strong>'
			),
			'linkColor' => array(
				'type' => 'string',
				'default' => '#F7F7F7'
			),
			'linkColorHover' => array(
				'type' => 'string',
				'default' => '#F48840'
			),
			'separatorColor' => array(
				'type' => 'string',
				'default' => '#FFFFFF'
			),
			'footerTextColor' => array(
				'type' => 'string',
				'default' => '#FFFFFF'
			),
			'bgColor' => array(
				'type' => 'string',
				'default' => '#1E1E1E'
			),
			'fontSize' => array(
				'type' => 'number',
				'default' => 16
			),
			'footerFontSize' => array(
				'type' => 'number',
				'default' => 16
			),
			'fontWeight' => array(
				'type' => 'string',
				'default' => '400'
			),
			'footerFontWeight' => array(
				'type' => 'string',
				'default' => '400'
			),
			'gap' => array(
				'type' => 'number',
				'default' => 25
			),
			'padding' => array(
				'type' => 'number',
				'default' => 60
			)
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'elegance',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'menu' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 2,
		'name' => 'elegant/menu',
		'version' => '1.0',
		'title' => 'Menu',
		'category' => 'elegant-blocks',
		'icon' => 'menu',
		'description' => 'Displays menu items',
		'example' => array(
			
		),
		'attributes' => array(
			'imgID' => array(
				'type' => 'number',
				'default' => 0
			),
			'bgColor' => array(
				'type' => 'string',
				'default' => '#F7F7F7'
			),
			'linkColor' => array(
				'type' => 'string',
				'default' => '#1E1E1E'
			),
			'linkHoverColor' => array(
				'type' => 'string',
				'default' => '#F48840'
			),
			'siteTitleColor' => array(
				'type' => 'string',
				'default' => '#F48840'
			),
			'siteTitleHoverColor' => array(
				'type' => 'string',
				'default' => '#1E1E1E'
			),
			'fontWeight' => array(
				'type' => 'string',
				'default' => '700'
			),
			'linkActiveColor' => array(
				'type' => 'string',
				'default' => '#F48840'
			),
			'linkFontSize' => array(
				'type' => 'number',
				'default' => 16
			)
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'elegance',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'recent-posts' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 2,
		'name' => 'elegant/recent-posts',
		'version' => '1.0',
		'title' => 'Recent posts',
		'category' => 'elegant-blocks',
		'icon' => 'list-view',
		'description' => 'Shows recent posts',
		'example' => array(
			
		),
		'attributes' => array(
			'heading' => array(
				'type' => 'string',
				'default' => 'Recent posts'
			),
			'headingColor' => array(
				'type' => 'string',
				'default' => '#1E1E1E'
			),
			'headingAlignment' => array(
				'type' => 'string',
				'default' => 'left'
			),
			'headingFontSize' => array(
				'type' => 'number',
				'default' => 20
			),
			'timeFontSize' => array(
				'type' => 'number',
				'default' => 12
			),
			'titleFontSize' => array(
				'type' => 'number',
				'default' => 20
			),
			'postCount' => array(
				'type' => 'number',
				'default' => 5
			),
			'linkColor' => array(
				'type' => 'string',
				'default' => '#1E1E1E'
			),
			'linkColorHover' => array(
				'type' => 'string',
				'default' => '#F48840'
			),
			'dateColor' => array(
				'type' => 'string',
				'default' => '#AAAAAA'
			),
			'gap' => array(
				'type' => 'number',
				'default' => 15
			)
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'elegance',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'social-links' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 2,
		'name' => 'elegant/social-links',
		'version' => '1.0',
		'title' => 'Social links',
		'category' => 'elegant-blocks',
		'icon' => 'admin-links',
		'description' => 'Displays social links',
		'example' => array(
			
		),
		'attributes' => array(
			'text' => array(
				'type' => 'string'
			),
			'link' => array(
				'type' => 'string'
			)
		),
		'supports' => array(
			'html' => false
		),
		'parent' => array(
			'elegant/footer'
		),
		'textdomain' => 'elegance',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	)
);

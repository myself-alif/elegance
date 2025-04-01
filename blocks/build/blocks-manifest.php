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
	'post-categories' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 2,
		'name' => 'elegant/post-categories',
		'version' => '1.0',
		'title' => 'Post categories',
		'category' => 'elegant-blocks',
		'icon' => 'text-page',
		'description' => 'Shows post categories',
		'example' => array(
			
		),
		'attributes' => array(
			'heading' => array(
				'type' => 'string',
				'default' => 'Categories'
			),
			'headingColor' => array(
				'type' => 'string',
				'default' => '#1E1E1E'
			),
			'gap' => array(
				'type' => 'number',
				'default' => 15
			),
			'categoryColor' => array(
				'type' => 'string',
				'default' => '#1E1E1E'
			),
			'categoryHoverColor' => array(
				'type' => 'string',
				'default' => '#F48840'
			),
			'categoryFontSize' => array(
				'type' => 'number',
				'default' => 16
			),
			'fontWeight' => array(
				'type' => 'string',
				'default' => '400'
			),
			'categoryGap' => array(
				'type' => 'number',
				'default' => 10
			),
			'headingAlignment' => array(
				'type' => 'string',
				'default' => 'left'
			),
			'categoryCount' => array(
				'type' => 'number',
				'default' => 5
			),
			'headingSize' => array(
				'type' => 'number',
				'default' => 25
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
	'post-gallery' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 2,
		'name' => 'elegant/post-gallery',
		'version' => '1.0',
		'title' => 'Post gallery',
		'category' => 'elegant-blocks',
		'icon' => 'slides',
		'description' => 'Shows posts in a horizontal gallery',
		'example' => array(
			
		),
		'attributes' => array(
			'postCount' => array(
				'type' => 'number',
				'default' => 5
			),
			'order' => array(
				'type' => 'string',
				'default' => 'DESC'
			),
			'orderby' => array(
				'type' => 'string',
				'default' => 'title'
			),
			'gap' => array(
				'type' => 'number',
				'default' => 10
			),
			'loop' => array(
				'type' => 'boolean',
				'default' => true
			),
			'autoplay' => array(
				'type' => 'boolean',
				'default' => true
			),
			'interval' => array(
				'type' => 'number',
				'default' => 2500
			),
			'categoryFontSize' => array(
				'type' => 'number',
				'default' => 16
			),
			'titleFontSize' => array(
				'type' => 'number',
				'default' => 25
			),
			'authorFontSize' => array(
				'type' => 'number',
				'default' => 12
			),
			'timeFontSize' => array(
				'type' => 'number',
				'default' => 12
			),
			'commentFontSize' => array(
				'type' => 'number',
				'default' => 12
			),
			'categoryFontWeight' => array(
				'type' => 'number',
				'default' => 700
			),
			'titleFontWeight' => array(
				'type' => 'number',
				'default' => 700
			),
			'authorFontWeight' => array(
				'type' => 'number',
				'default' => 700
			),
			'commentFontWeight' => array(
				'type' => 'number',
				'default' => 700
			),
			'timeFontWeight' => array(
				'type' => 'number',
				'default' => 700
			),
			'categoryColor' => array(
				'type' => 'string',
				'default' => '#F48840'
			),
			'titleColor' => array(
				'type' => 'string',
				'default' => '#FFFFFF'
			),
			'authorColor' => array(
				'type' => 'string',
				'default' => '#FFFFFF'
			),
			'timeColor' => array(
				'type' => 'string',
				'default' => '#FFFFFF'
			),
			'commentColor' => array(
				'type' => 'string',
				'default' => '#FFFFFF'
			),
			'arrowColor' => array(
				'type' => 'string',
				'default' => '#FFFFFF'
			),
			'buttonBgColor' => array(
				'type' => 'string',
				'default' => '#fafafa4d'
			),
			'categoryColorHover' => array(
				'type' => 'string',
				'default' => '#FFFFFF'
			),
			'titleColorHover' => array(
				'type' => 'string',
				'default' => '#F48840'
			),
			'authorColorHover' => array(
				'type' => 'string',
				'default' => '#F48840'
			),
			'timeColorHover' => array(
				'type' => 'string',
				'default' => '#F48840'
			),
			'commentColorHover' => array(
				'type' => 'string',
				'default' => '#F48840'
			),
			'buttonBgColorHover' => array(
				'type' => 'string',
				'default' => '#F48840'
			),
			'arrowColorHover' => array(
				'type' => 'string',
				'default' => '#FFFFFF'
			),
			'slidesInDesktop' => array(
				'type' => 'number',
				'default' => 3
			),
			'slidesInTab' => array(
				'type' => 'number',
				'default' => 2
			),
			'slidesInMobile' => array(
				'type' => 'number',
				'default' => 1
			)
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'elegance',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'script' => 'file:./script.js',
		'render' => 'file:./render.php'
	),
	'post-grid' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 2,
		'name' => 'elegant/post-grid',
		'version' => '1.0',
		'title' => 'Post grid',
		'category' => 'elegant-blocks',
		'icon' => 'layout',
		'description' => 'Shows blog posts',
		'example' => array(
			
		),
		'attributes' => array(
			'categoryFontSize' => array(
				'type' => 'number',
				'default' => 16
			),
			'titleFontSize' => array(
				'type' => 'number',
				'default' => 20
			),
			'authorFontSize' => array(
				'type' => 'number',
				'default' => 12
			),
			'timeFontSize' => array(
				'type' => 'number',
				'default' => 12
			),
			'commentFontSize' => array(
				'type' => 'number',
				'default' => 12
			),
			'excerptFontSize' => array(
				'type' => 'number',
				'default' => 16
			),
			'paginationFontSize' => array(
				'type' => 'number',
				'default' => 16
			),
			'categoryFontWeight' => array(
				'type' => 'number',
				'default' => 400
			),
			'titleFontWeight' => array(
				'type' => 'number',
				'default' => 700
			),
			'authorFontWeight' => array(
				'type' => 'number',
				'default' => 400
			),
			'timeFontWeight' => array(
				'type' => 'number',
				'default' => 400
			),
			'commentFontWeight' => array(
				'type' => 'number',
				'default' => 400
			),
			'excerptFontWeight' => array(
				'type' => 'number',
				'default' => 400
			),
			'paginationFontWeight' => array(
				'type' => 'number',
				'default' => 400
			),
			'bgColor' => array(
				'type' => 'string',
				'default' => '#FFFFFF'
			),
			'paginationBgColor' => array(
				'type' => 'string',
				'default' => '#FFFFFF'
			),
			'categoryColor' => array(
				'type' => 'string',
				'default' => '#F48840'
			),
			'titleColor' => array(
				'type' => 'string',
				'default' => '#1E1E1E'
			),
			'authorColor' => array(
				'type' => 'string',
				'default' => '#AAAAAA'
			),
			'timeColor' => array(
				'type' => 'string',
				'default' => '#AAAAAA'
			),
			'commentColor' => array(
				'type' => 'string',
				'default' => '#AAAAAA'
			),
			'excerptColor' => array(
				'type' => 'string',
				'default' => '#AAAAAA'
			),
			'paginationColor' => array(
				'type' => 'string',
				'default' => '#AAAAAA'
			),
			'categoryColorHover' => array(
				'type' => 'string',
				'default' => '#1E1E1E'
			),
			'titleColorHover' => array(
				'type' => 'string',
				'default' => '#F48840'
			),
			'authorColorHover' => array(
				'type' => 'string',
				'default' => '#F48840'
			),
			'timeColorHover' => array(
				'type' => 'string',
				'default' => '#F48840'
			),
			'commentColorHover' => array(
				'type' => 'string',
				'default' => '#F48840'
			),
			'paginationColorActive' => array(
				'type' => 'string',
				'default' => '#FFFFFF'
			),
			'paginationBgColorActive' => array(
				'type' => 'string',
				'default' => '#F48840'
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
	'post-tags' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 2,
		'name' => 'elegant/post-tags',
		'version' => '1.0',
		'title' => 'Post tags',
		'category' => 'elegant-blocks',
		'icon' => 'screenoptions',
		'description' => 'Shows post tags',
		'example' => array(
			
		),
		'attributes' => array(
			'heading' => array(
				'type' => 'string',
				'default' => 'Tag clouds'
			),
			'headingColor' => array(
				'type' => 'string',
				'default' => '#1E1E1E'
			),
			'headingSize' => array(
				'type' => 'number',
				'default' => 20
			),
			'headingAlignment' => array(
				'type' => 'string',
				'default' => 'left'
			),
			'tagCount' => array(
				'type' => 'number',
				'default' => 5
			),
			'tagNormalColor' => array(
				'type' => 'string',
				'default' => '#1E1E1E'
			),
			'tagHoverColor' => array(
				'type' => 'string',
				'default' => '#F7F7F7'
			),
			'gap' => array(
				'type' => 'number',
				'default' => 15
			),
			'tagFontWeight' => array(
				'type' => 'string',
				'default' => '400'
			),
			'linkBgColor' => array(
				'type' => 'string',
				'default' => '#FFFFFF'
			),
			'linkBgHoverColor' => array(
				'type' => 'string',
				'default' => '#f58840'
			),
			'borderColor' => array(
				'type' => 'string',
				'default' => '#EEEEEE'
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
	'search' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 2,
		'name' => 'elegant/search',
		'version' => '1.0',
		'title' => 'Search',
		'category' => 'elegant-blocks',
		'icon' => 'search',
		'description' => 'Shows search results',
		'example' => array(
			
		),
		'attributes' => array(
			'placeholderText' => array(
				'type' => 'string',
				'default' => 'Search'
			),
			'textColor' => array(
				'type' => 'string',
				'default' => '#7a7a7a'
			),
			'placeHolderColor' => array(
				'type' => 'string',
				'default' => '#7A7A7A'
			),
			'iconColorNormal' => array(
				'type' => 'string',
				'default' => '#7A7A7A'
			),
			'iconColorHover' => array(
				'type' => 'string',
				'default' => '#F48840'
			),
			'borderColor' => array(
				'type' => 'string',
				'default' => '#EEEEEE'
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

<!DOCTYPE html>
<html <?php echo language_attributes() ?>>

<head>
    <meta charset="<?php echo bloginfo("charset") ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <?php wp_head() ?>
</head>

<body <?php echo body_class() ?>>
    <?php
    wp_body_open();
    if (defined('REST_REQUEST') && REST_REQUEST) { ?>
    <header <?php echo get_block_wrapper_attributes(array(
                    "class" => "mt-0 editor-view",
                    "style" => "background-color: {$attributes['bgColor']};"
                )) ?>>
        <style>
        .nav-link {
            font-weight: <?php echo $attributes['fontWeight'] ?> !important
        }

        .nav-item.active a {
            color: <?php echo $attributes['linkActiveColor'] ?> !important
        }

        .nav-link:hover {
            color: <?php echo $attributes['linkHoverColor'] ?> !important;
        }

        .site-title:hover {
            color: <?php echo $attributes['siteTitleHoverColor'] ?> !important;
        }

        #menu-header-menu .nav-item .nav-link {
            font-size: <?php echo $attributes['linkFontSize'] ?>px;
        }
        </style>
        <nav class="navbar navbar-expand-lg">
            <div class="container" style="<?php echo 'color: ' . $attributes['linkColor'] ?>" ;>
                <a class="navbar-brand" href="#">
                    <?php
                        $img_url = isset($attributes['imgID']) ? wp_get_attachment_image_url($attributes['imgID']) : null;
                        if ($img_url) { ?>
                    <img class="site-logo" src="<?php echo $img_url ?>" alt="<?php _e("site logo", "elegance") ?>">
                    <?php
                        } else { ?>
                    <h2 class="site-title" style="color: <?php echo $attributes['siteTitleColor'] ?>;">
                        <?php _e("Site title", "elegance") ?></h2>
                    <?php
                        }
                        ?>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <?php
                    wp_nav_menu(array(
                        'theme_location' => 'header-menu',
                        'container'      => 'div',
                        'container_class' => 'collapse navbar-collapse',
                        'container_id'   => 'navbarResponsive',
                        'menu_class'     => 'navbar-nav ml-auto',
                        'walker'         => new Custom_Nav_Walker_For_Editor_Panel()
                    ));
                    ?>
            </div>
        </nav>
    </header>
    <?php
    } else { ?>
    <header <?php echo get_block_wrapper_attributes(array(
                    "class" => "mt-0",
                    "style" => "background-color: {$attributes['bgColor']};"
                )) ?>>
        <style>
        .nav-link {
            font-weight: <?php echo $attributes['fontWeight'] ?> !important
        }

        .nav-item.active a {
            color: <?php echo $attributes['linkActiveColor'] ?> !important
        }

        .nav-link:hover {
            color: <?php echo $attributes['linkHoverColor'] ?> !important;
        }

        .site-title:hover {
            color: <?php echo $attributes['siteTitleHoverColor'] ?> !important;
        }

        #menu-header-menu .nav-item .nav-link {
            font-size: <?php echo $attributes['linkFontSize'] ?>px;
        }
        </style>
        <nav class="navbar navbar-expand-lg">
            <div class="container" style="<?php echo 'color: ' . $attributes['linkColor'] ?>" ;>
                <a class="navbar-brand" href="<?php echo site_url() ?>">
                    <?php
                        $img_url = isset($attributes['imgID']) ? wp_get_attachment_image_url($attributes['imgID']) : null;
                        if ($img_url) { ?>
                    <img class="site-logo" src="<?php echo $img_url ?>" alt="<?php _e("site logo", "elegance") ?>">
                    <?php
                        } else { ?>
                    <h2 class="site-title" style="color: <?php echo $attributes['siteTitleColor'] ?>;">
                        <?php _e("Site title", "elegance") ?></h2>
                    <?php
                        }
                        ?>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <?php
                    wp_nav_menu(array(
                        'theme_location' => 'header-menu',
                        'container'      => 'div',
                        'container_class' => 'collapse navbar-collapse',
                        'container_id'   => 'navbarResponsive',
                        'menu_class'     => 'navbar-nav ml-auto',
                        'walker'         => new Custom_Nav_Walker()
                    ));
                    ?>
            </div>
        </nav>
    </header>
    <?php
    };
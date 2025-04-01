<div <?php echo get_block_wrapper_attributes(array(
            "class" => "main-banner header-text",
        )) ?>>
    <style>
        .wp-block-elegant-post-gallery .meta-category a {
            color: <?php echo $attributes['categoryColor'] ?>
        }

        .wp-block-elegant-post-gallery .meta-category a:hover {
            color: <?php echo $attributes['categoryColorHover'] ?>
        }

        .wp-block-elegant-post-gallery .main-content a h4 {
            color: <?php echo $attributes['titleColor'] ?>
        }

        .wp-block-elegant-post-gallery .main-content a:hover h4 {
            color: <?php echo $attributes['titleColorHover'] ?>
        }

        .wp-block-elegant-post-gallery .author a {
            color: <?php echo $attributes['authorColor'] ?>
        }

        .wp-block-elegant-post-gallery .author a:hover {
            color: <?php echo $attributes['authorColorHover'] ?>
        }

        .wp-block-elegant-post-gallery .time a {
            color: <?php echo $attributes['timeColor'] ?>
        }

        .wp-block-elegant-post-gallery .time a:hover {
            color: <?php echo $attributes['timeColorHover'] ?>
        }

        .wp-block-elegant-post-gallery .comment a {
            color: <?php echo $attributes['commentColor'] ?>
        }

        .wp-block-elegant-post-gallery .comment a:hover {
            color: <?php echo $attributes['commentColorHover'] ?>
        }

        .wp-block-elegant-post-gallery .owl-banner .owl-nav button span {
            background-color: <?php echo $attributes['buttonBgColor'] ?>;
        }

        .wp-block-elegant-post-gallery .owl-banner .owl-nav button:hover span {
            background-color: <?php echo $attributes['buttonBgColorHover'] ?>;
        }

        .wp-block-elegant-post-gallery .owl-banner .owl-nav button span {
            color: <?php echo $attributes['arrowColor'] ?>;
        }

        .wp-block-elegant-post-gallery .owl-banner .owl-nav button:hover span {
            color: <?php echo $attributes['arrowColorHover'] ?>;
        }
    </style>
    <div class="container-fluid">
        <div class="owl-banner owl-carousel" data-postCount="<?php echo $attributes['postCount'] ?>"
            data-gap="<?php echo $attributes['gap'] ?>" data-loop="<?php echo $attributes['loop'] ?>"
            data-autoplay="<?php echo $attributes['autoplay'] ?>" data-interval="<?php echo $attributes['interval'] ?>"
            data-slidesInDesktop="<?php echo $attributes['slidesInDesktop'] ?>"
            data-slidesInTab="<?php echo $attributes['slidesInTab'] ?>"
            data-slidesInMobile="<?php echo $attributes['slidesInMobile'] ?>">
            <?php
            $posts = new WP_Query(array(
                "post_status" => 'publish',
                "posts_per_page" => $attributes['postCount'],
                'order' => $attributes['order'],
                'orderby' => $attributes['orderby'],
                'meta_query'     => array(
                    array(
                        'key'     => '_thumbnail_id',
                        'compare' => 'EXISTS',
                    ),
                ),
            ));
            if ($posts->have_posts()) {
                while ($posts->have_posts()) {
                    $posts->the_post(); ?>
                    <div class=" item">
                        <img src="<?php the_post_thumbnail_url() ?>" alt="<?php _e("thumbnail", "elegance") ?>">
                        <div class="item-content">
                            <div class="main-content">
                                <div class="meta-category">
                                    <span>
                                        <?php
                                        $categories = get_the_category();
                                        if (! empty($categories)) { ?>
                                            <a href="<?php echo esc_url(get_category_link($categories[0]->term_id)) ?>"
                                                style="font-size: <?php echo $attributes['categoryFontSize'] ?>px; font-weight: <?php echo $attributes['categoryFontWeight'] ?>;"><?php echo esc_html($categories[0]->name) ?></a>
                                        <?php
                                        }
                                        ?>
                                    </span>
                                </div>
                                <a href="<?php the_permalink() ?>">
                                    <h4
                                        style="font-size: <?php echo $attributes['titleFontSize'] ?>px; font-weight: <?php echo $attributes['titleFontWeight'] ?>;">
                                        <?php the_title() ?>
                                    </h4>
                                </a>
                                <ul class="post-info">
                                    <li class="author"><a href="<?php echo get_author_posts_url(get_the_author_meta("ID")) ?>"
                                            style="font-size: <?php echo $attributes['authorFontSize'] ?>px; font-weight: <?php echo $attributes['authorFontWeight'] ?>"><?php the_author() ?></a>
                                    </li>
                                    <li class="time"><a
                                            href="<?php echo get_day_link(get_the_date('Y'), get_the_date('m'), get_the_date('d')); ?>"
                                            style="font-size: <?php echo $attributes['timeFontSize'] ?>px; font-weight: <?php echo $attributes['timeFontWeight'] ?>;"><?php echo human_time_diff(get_the_time('U'), current_time('U')) . ' ago'; ?></a>
                                    </li>
                                    <li class="comment"><a href="<?php the_permalink() ?>"
                                            style="font-size: <?php echo $attributes['commentFontSize'] ?>px; font-weight: <?php echo $attributes['commentFontWeight'] ?>"><?php echo get_comments_number() ?></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
            <?php
                }
            } else {
                echo "No posts to show";
            }
            ?>
        </div>
    </div>
</div>
<?php
?>
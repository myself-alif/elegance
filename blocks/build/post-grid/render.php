<div <?php echo get_block_wrapper_attributes() ?>>
    <section class="blog-posts grid-system">
        <style>
            .wp-block-elegant-post-grid .col-lg-6 .down-content .category {
                color: <?php echo $attributes['categoryColor'] ?>;
            }

            .wp-block-elegant-post-grid .col-lg-6 .down-content .category:hover {
                color: <?php echo $attributes['categoryColorHover'] ?>;
            }

            .wp-block-elegant-post-grid .col-lg-6 .down-content .title {
                color: <?php echo $attributes['titleColor'] ?>;
            }

            .wp-block-elegant-post-grid .col-lg-6 .down-content .title:hover {
                color: <?php echo $attributes['titleColorHover'] ?>;
            }

            .wp-block-elegant-post-grid .col-lg-6 .down-content .author a {
                color: <?php echo $attributes['authorColor'] ?>;
            }

            .wp-block-elegant-post-grid .col-lg-6 .down-content .author :hover {
                color: <?php echo $attributes['authorColorHover'] ?>;
            }

            .wp-block-elegant-post-grid .col-lg-6 .down-content .time a {
                color: <?php echo $attributes['timeColor'] ?>;
            }

            .wp-block-elegant-post-grid .col-lg-6 .down-content .time a:hover {
                color: <?php echo $attributes['timeColorHover'] ?>;
            }

            .wp-block-elegant-post-grid .col-lg-6 .down-content .comment a {
                color: <?php echo $attributes['commentColor'] ?>;
            }

            .wp-block-elegant-post-grid .col-lg-6 .down-content .comment a:hover {
                color: <?php echo $attributes['commentColorHover'] ?>;
            }

            .wp-block-elegant-post-grid .col-lg-6 .down-content .excerpt {
                color: <?php echo $attributes['excerptColor'] ?>;
            }
        </style>
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="all-blog-posts">
                        <div class="row">
                            <?php
                            $paged = get_query_var('paged') ? get_query_var('paged') : 1;
                            $posts = new WP_Query(array(
                                "post_status" => "publish",
                                "posts_per_page" => 10,
                                "paged"          => $paged
                            ));
                            if ($posts->have_posts()) {
                                while ($posts->have_posts()) {
                                    $posts->the_post(); ?>
                                    <div class="col-lg-6">
                                        <div class="blog-post">
                                            <div class="blog-thumb">
                                                <img src="<?php the_post_thumbnail_url() ?>"
                                                    alt="<?php echo _e("thumbnail", "elegance") ?>">
                                            </div>
                                            <div class="down-content"
                                                style="background-color: <?php echo $attributes['bgColor'] ?>;">
                                                <?php
                                                $categories = get_the_category();
                                                if (! empty($categories)) { ?>
                                                    <a class="category"
                                                        href="<?php echo esc_url(get_category_link($categories[0]->term_id)) ?>"
                                                        style="font-size: <?php echo $attributes['categoryFontSize'] ?>px; font-weight: <?php echo $attributes['categoryFontWeight'] ?>;"><?php echo esc_html($categories[0]->name) ?></a>
                                                <?php
                                                }
                                                ?>
                                                <a href="<?php the_permalink() ?>">
                                                    <h4 class="title"
                                                        style="font-size: <?php echo $attributes['titleFontSize'] ?>px; font-weight: <?php echo $attributes['titleFontWeight'] ?>;">
                                                        <?php the_title() ?></h4>
                                                </a>
                                                <ul class="post-info">
                                                    <li class="author"><a
                                                            href="<?php echo get_author_posts_url(get_the_author_meta("ID")) ?>"
                                                            style="font-size: <?php echo $attributes['authorFontSize'] ?>px; font-weight: <?php echo $attributes['authorFontWeight'] ?>"><?php the_author() ?></a>
                                                    </li>
                                                    <li class="time"><a
                                                            href="<?php echo get_day_link(get_the_date('Y'), get_the_date('m'), get_the_date('d')); ?>"
                                                            style="font-size: <?php echo $attributes['timeFontSize'] ?>px; font-weight: <?php echo $attributes['timeFontWeight'] ?>"><?php echo human_time_diff(get_the_time('U'), current_time('U')) . ' ago'; ?></a>
                                                    </li>
                                                    <li class="comment"><a href="<?php the_permalink() ?>"
                                                            style="font-size: <?php echo $attributes['commentFontSize'] ?>px; font-weight: <?php echo $attributes['commentFontWeight'] ?>"><?php echo get_comments_number() ?></a>
                                                    </li>
                                                </ul>
                                                <p class="excerpt"
                                                    style="font-size: <?php echo $attributes['excerptFontSize'] ?>px; font-weight: <?php echo $attributes['excerptFontWeight'] ?>">
                                                    <?php echo wp_trim_words(get_the_content(), 18) ?></p>
                                            </div>
                                        </div>
                                    </div>
                            <?php
                                }
                            } else {
                                echo "No posts to show";
                            }
                            ?>
                            <div class="col-lg-12">

                                <ul class="page-numbers">
                                    <?php if ($paged > 1) { ?>
                                        <li><a href="<?php echo get_pagenum_link($paged - 1); ?>"
                                                style="font-size: <?php echo $attributes['paginationFontSize'] ?>px; font-weight: <?php echo $attributes['paginationFontWeight'] ?>; color: <?php echo $attributes['paginationColor'] ?>; background-color: <?php echo $attributes['paginationBgColor'] ?>"><i
                                                    class="fa fa-angle-double-left"></i></a></li>
                                    <?php } ?>

                                    <?php for ($i = 1; $i <= $posts->max_num_pages; $i++) { ?>
                                        <li class="<?php echo ($i == $paged) ? 'active' : ''; ?>">
                                            <a href="<?php echo get_pagenum_link($i); ?>"
                                                style="font-size: <?php echo $attributes['paginationFontSize'] ?>px; font-weight: <?php echo $attributes['paginationFontWeight'] ?>; color: <?php echo $i == $paged ? $attributes['paginationColorActive'] : $attributes['paginationColor'] ?>; background-color: <?php echo $i == $paged ? $attributes['paginationBgColorActive'] : $attributes['paginationBgColor'] ?>;"><?php echo $i; ?></a>
                                        </li>
                                    <?php } ?>

                                    <?php if ($paged < $posts->max_num_pages) { ?>
                                        <li><a href="<?php echo get_pagenum_link($paged + 1); ?>"
                                                style="font-size: <?php echo $attributes['paginationFontSize'] ?>px; font-weight: <?php echo $attributes['paginationFontWeight'] ?>; color: <?php echo $attributes['paginationColor'] ?>; background-color: <?php echo $attributes['paginationBgColor'] ?>"><i
                                                    class="fa fa-angle-double-right"></i></a></li>
                                    <?php } ?>
                                </ul>
                                <?php
                                wp_reset_postdata();
                                ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
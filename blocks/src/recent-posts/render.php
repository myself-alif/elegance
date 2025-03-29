<div <?php echo get_block_wrapper_attributes(array(
            'class' => "sidebar-item recent-posts",
            'style' => "gap:" . $attributes['gap'] . 'px'
        )) ?>>
    <div class="sidebar-heading">
        <h2
            style="color: <?php echo $attributes["headingColor"] ?>; text-align: <?php echo $attributes['headingAlignment'] ?>; font-size: <?php echo $attributes['headingFontSize'] ?>px">
            <?php echo $attributes['heading'] ?>
        </h2>
    </div>
    <div class="content">
        <ul>
            <?php
            $recent_posts = new WP_Query(array(
                "post_type" => "post",
                "post_status" => "publish",
                "order" => "DESC",
                "orderby" => "date",
                'posts_per_page' => $attributes['postCount']
            ));

            if ($recent_posts->have_posts()) {
                while ($recent_posts->have_posts()) {
                    $recent_posts->the_post();
                    $time_ago = human_time_diff(get_the_time('U'), current_time('U')) . ' ago';
            ?>
            <style>
            .wp-block-elegant-recent-posts .content a:hover h5 {
                color: <?php echo $attributes['linkColorHover'] ?>;
            }
            </style>
            <li>
                <a href="<?php the_permalink() ?>" style="color: <?php echo $attributes['linkColor'] ?>">
                    <h5 style="font-size: <?php echo $attributes['titleFontSize'] ?>px"><?php the_title() ?></h5>
                    <span
                        style="color: <?php echo $attributes['dateColor'] ?>; font-size: <?php echo $attributes['timeFontSize'] ?>px"><?php echo $time_ago ?></span>
                </a>
            </li>
            <?php
                }
            } else {
                echo "No posts";
            }

            ?>
        </ul>
    </div>
</div>
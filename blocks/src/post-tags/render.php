<div <?php echo get_block_wrapper_attributes(array(
            'class' => "sidebar-item tags",
            "style" => "gap: " . $attributes["gap"] . 'px'
        )) ?>>
    <div class="sidebar-heading">
        <h2
            style="color: <?php echo $attributes["headingColor"] ?>; font-size: <?php echo $attributes["headingSize"] ?>px; text-align: <?php echo $attributes["headingAlignment"] ?>">
            <?php echo $attributes['heading'] ?></h2>
    </div>
    <div class="content">
        <style>
        .wp-block-elegant-post-tags ul li a {
            color: <?php echo $attributes['tagNormalColor'] ?>
        }

        .wp-block-elegant-post-tags ul li:hover a {
            color: <?php echo $attributes['tagHoverColor'] ?>
        }

        .wp-block-elegant-post-tags ul li {
            background-color: <?php echo $attributes['linkBgColor'] ?>;
        }

        .wp-block-elegant-post-tags ul li:hover {
            background-color: <?php echo $attributes['linkBgHoverColor'] ?>;
        }
        </style>
        <ul>
            <?php
            $tags = get_terms(array(
                'taxonomy'   => 'post_tag',
                'number' => $attributes['tagCount'],
                'hide_empty' => true,
            ));
            if (count($tags) > 0) {
                foreach ($tags as $tag) {
            ?>
            <li>
                <a href="<?php echo get_term_link($tag->term_id) ?>"
                    style="font-weight: <?php echo $attributes["tagFontWeight"] ?>; border-color: <?php echo $attributes['borderColor'] ?>;"><?php echo $tag->name ?></a>
            </li>
            <?php
                }
            } else {
                echo "No tags to show";
            }
            ?>
        </ul>
    </div>
</div>
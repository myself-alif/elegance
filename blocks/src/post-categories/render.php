<div <?php echo get_block_wrapper_attributes(array(
            "class" => "sidebar-item categories",
            "style" => "gap:" . $attributes['gap'] . 'px'
        )) ?>>
    <div class="sidebar-heading">
        <h2
            style="color: <?php echo $attributes['headingColor'] ?>; font-size:<?php echo $attributes['headingSize'] ?>px; text-align:<?php echo $attributes['headingAlignment'] ?>;">
            <?php echo $attributes['heading'] ?>
        </h2>
    </div>
    <div class="content">
        <ul>
            <style>
            .wp-block-elegant-post-categories ul li a {
                color: <?php echo $attributes['categoryColor'] ?>;
            }

            .wp-block-elegant-post-categories ul li a:hover {
                color: <?php echo $attributes['categoryHoverColor'] ?>;
            }
            </style>
            <?php
            $categories = get_categories(array(
                'hide_empty'   => true,
                'number'       => $attributes['categoryCount'],
            ));
            if (count($categories) > 0) {
                foreach ($categories as $category) {
            ?>
            <li style="margin-bottom: <?php echo $attributes['categoryGap'] ?>px;">
                <a href="<?php echo get_category_link($category->cat_ID) ?>"
                    style="font-size: <?php echo $attributes['categoryFontSize'] ?>px; font-weight: <?php echo $attributes['fontWeight'] ?>;"><?php echo $category->name ?></a>
            </li>
            <?php
                }
            } else {
                echo "No categories.";
            }
            ?>
        </ul>
    </div>
</div>
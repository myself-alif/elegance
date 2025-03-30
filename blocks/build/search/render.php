<div <?php echo get_block_wrapper_attributes(array()) ?>>
    <form action="<?php echo site_url() ?>">
        <style>
        .wp-block-elegant-search [type=search]::placeholder {
            color: <?php echo $attributes['placeHolderColor'] ?>;
        }

        .wp-block-elegant-search [type=submit] span::before {
            color: <?php echo $attributes['iconColorNormal'] ?>;
        }

        .wp-block-elegant-search [type=submit]:hover span::before {
            color: <?php echo $attributes['iconColorHover'] ?>;
        }
        </style>
        <input type="search" name="s" placeholder="<?php echo $attributes['placeholderText'] ?>"
            style="color: <?php echo $attributes['textColor'] ?>; border-color: <?php echo $attributes['borderColor'] ?>;">
        <button type="submit"><span class="dashicons dashicons-search"></span></button>
    </form>
</div>
<footer <?php echo get_block_wrapper_attributes(array(
            'style' => "background-color:" . $attributes['bgColor'] . ";" . "padding:" . $attributes['padding'] . "px 0"
        )) ?>>
    <style>
        .social-icons .wp-block-elegant-social-links a {
            color: <?php echo $attributes['linkColor'] ?>;
        }

        .social-icons .wp-block-elegant-social-links a:hover {
            color: <?php echo $attributes['linkColorHover'] ?>;
        }

        .social-icons .wp-block-elegant-social-links::after {
            color: <?php echo $attributes['separatorColor'] ?>;
        }

        footer .copyright-text p {
            color: <?php echo $attributes['footerTextColor'] ?>;
        }

        footer .wp-block-elegant-social-links a {
            font-size: <?php echo $attributes['fontSize'] ?>px !important;
        }

        footer .wp-block-elegant-social-links a {
            font-weight: <?php echo $attributes['fontWeight'] ?>;
        }

        footer .copyright-text p {
            font-size: <?php echo $attributes['footerFontSize'] ?>px !important;
        }

        footer .copyright-text p {
            font-weight: <?php echo $attributes['footerFontWeight'] ?>;
        }
    </style>
    <div class="container">
        <div class="row" style="gap: <?php echo $attributes['gap'] ?>px;">
            <div class="col-lg-12">
                <ul class="social-icons">
                    <?php echo $content ?>
                </ul>
            </div>
            <?php if (isset($attributes['footerText']) && strlen($attributes['footerText']) > 0) { ?>
                <div class="col-lg-12">
                    <div class="copyright-text">
                        <p><?php echo $attributes['footerText'] ?></p>
                    </div>
                </div>
            <?php } ?>
        </div>
    </div>
</footer>
<?php wp_footer() ?>
</body>
<?php
$link = isset($attributes['link']) ? $attributes['link'] : "";
$text = isset($attributes['text']) ? $attributes['text'] : "";

?>
<li <?php echo get_block_wrapper_attributes() ?>>
    <a href="<?php echo $link ?>" target="_blank"><?php echo $text ?></a>
</li>
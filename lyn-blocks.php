<?php

/**
 * Plugin Name:       Lyn Blocks
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       lyn-blocks
 *
 * @package           create-block
 */

use Lyntouch\Vite;

if (file_exists(__DIR__ . '/vendor/autoload.php')) {
    require_once(__DIR__ . '/vendor/autoload.php');
}


defined('ABSPATH') || exit;

function register_lyn_blocks()
{
    register_block_type(__DIR__ . '/build/lyn-column');
    register_block_type(__DIR__ . '/build/lyn-columns');
}
add_action('init', 'register_lyn_blocks');


function buildViteAssets(): array
{
    return (new Vite([
        "/src/js/blocks/blocks.js",
        "/src/Blocks/Swiper/swiper.js",
        "/src/assets/global.scss",
        "/src/Blocks/Swiper/sass/swiper.scss",
        "/src/Blocks/Gallery/sass/photoswipe.scss",
    ], __DIR__ . "/dist"))->build();
}

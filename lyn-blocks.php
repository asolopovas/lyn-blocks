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

defined('ABSPATH') || exit;

if (is_admin()) {
}

add_action('init', 'register_lyn_blocks');
function register_lyn_blocks()
{
    register_block_type(__DIR__ . '/build/lyn-column');
    register_block_type(__DIR__ . '/build/lyn-columns');
}

add_filter('allowed_block_types', 'lyntouch_allowed_block_types');
function lyntouch_allowed_block_types($allowed_blocks)
{
    return $allowed_blocks;
}

add_filter('deprecated_constructor_trigger_error', '__return_false');
add_filter('deprecated_function_trigger_error', '__return_false');
add_filter('deprecated_file_trigger_error', '__return_false');
add_filter('deprecated_argument_trigger_error', '__return_false');
add_filter('deprecated_hook_trigger_error', '__return_false');

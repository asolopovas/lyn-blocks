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

function register_lyn_blocks()
{
    register_block_type(__DIR__ . '/build/lyn-column');
    register_block_type(__DIR__ . '/build/lyn-columns');
}
add_action('init', 'register_lyn_blocks');

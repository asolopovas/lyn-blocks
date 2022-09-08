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

defined('ABSPATH') || exit;

require_once(__DIR__ . '/vendor/autoload.php');
require_once(__DIR__ . '/src/filters.php');


function register_lyn_blocks()
{
    register_block_type(__DIR__ . '/build/lyn-column');
    register_block_type(__DIR__ . '/build/lyn-columns');
}
add_action('init', 'register_lyn_blocks');


function buildViteAssets(): array
{
    return (new Vite([
        './src/blocks/lyn-column/index.js',
        './src/blocks/lyn-columns/index.js',
    ], __DIR__ . "/dist"))->build();
}

// dump(buildViteAssets());

function lyn_init()
{
    viteAssetsLoader(buildViteAssets());
}

add_action('admin_enqueue_scripts', 'lyn_init', 10, 0);

function print_react_tag()
{
    echo <<<'HEREB'
    <script type="module">
        console.log('test');
        import RefreshRuntime from "http://127.0.0.1:5173/@react-refresh"
        RefreshRuntime.injectIntoGlobalHook(window)
        window.$RefreshReg$ = () => {}
        window.$RefreshSig$ = () => (type) => type
        window.__vite_plugin_react_preamble_installed__ = true
    </script>
    HEREB;
}

add_action('admin_head', 'print_react_tag', 9,0);

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

use Lyntouch\Lib\Vite;

defined('ABSPATH') || exit;

require_once(__DIR__ . '/vendor/autoload.php');

require_once(__DIR__ . '/src/blocks/test-block/index.php');

add_action('admin_enqueue_scripts', 'lyntouch_enqueue_assets');
add_action('wp_enqueue_scripts', 'lyntouch_enqueue_assets');
function lyntouch_enqueue_assets(): void
{

    $asssets = vite([
        "src/blocks/test-block/index.jsx",
    ], __DIR__ . '/dist')->build();

    $asssets->load();
}

function print_react_tag()
{
    # if dist/hot exist then echo
    if (file_exists(__DIR__ . '/dist/hot')) {
        echo <<<'HEREB'
            <script type="module">
                import RefreshRuntime from "https://localhost:5173/@react-refresh"
                RefreshRuntime.injectIntoGlobalHook(window)
                window.$RefreshReg$ = () => {}
                window.$RefreshSig$ = () => (type) => type
                window.__vite_plugin_react_preamble_installed__ = true
            </script>
        HEREB;
    }
}

add_action('admin_head', 'print_react_tag', 9, 0);

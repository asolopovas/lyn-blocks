<?php

function env(string $var): string
{
    return getenv($var);
}

function viteAssetsLoader($assets): void
{
    foreach ($assets as $key => $asset) {
        $pathInfo = pathinfo($asset);
        $ext = $pathInfo['extension'] ?? '';

        match ($ext) {
            'css' => wp_enqueue_style($key, $asset, [], null),
            default => wp_enqueue_script($key, $asset . "#module", [], null)
        };
    }
}

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


/*
core/paragraph
core/image
core/heading
core/gallery
core/list
core/quote
core/audio
core/cover
core/file
core/video
core/table
core/verse
core/code
core/freeform (Classic Editor)
core/html
core/preformatted
core/pullquote
core/buttons
core/text-columns
core/media-text
core/more
core/nextpage
core/separator
core/spacer
core/shortcode
core/archives
core/categories
core/latest-comments
core/latest-posts
core/calendar
core/rss
core/search
core/tag-cloud
core/embed
core-embed/twitter
core-embed/youtube
core-embed/facebook
core-embed/instagram
core-embed/wordpress
core-embed/soundcloud
core-embed/spotify
core-embed/flickr
core-embed/vimeo
core-embed/animoto
core-embed/cloudup
core-embed/collegehumor
core-embed/dailymotion
core-embed/funnyordie
core-embed/hulu
core-embed/imgur
core-embed/issuu
core-embed/kickstarter
core-embed/meetup-com
core-embed/mixcloud
core-embed/photobucket
core-embed/polldaddy
core-embed/reddit
core-embed/reverbnation
core-embed/screencast
core-embed/scribd
core-embed/slideshare
core-embed/smugmug
core-embed/speaker
core-embed/ted
core-embed/tumblr
core-embed/videopress
core-embed/wordpress-tv
*/

add_filter( 'allowed_block_types', 'lyntouch_allowed_block_types' );

function lyntouch_allowed_block_types( $allowed_blocks ) {

    return $allowed_blocks;

}

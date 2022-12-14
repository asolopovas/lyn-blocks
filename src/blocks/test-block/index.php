<?php

function test_block_register()
{
    register_block_type(__DIR__);
}
add_action('init', 'test_block_register');

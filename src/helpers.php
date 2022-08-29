<?php

function env(string $var): string
{
    return get_env($var);
}

<?php

function env(string $var): string
{
    return getenv($var);
}

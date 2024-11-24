<?php

declare(strict_types=1);

spl_autoload_register(function ($class) {
    require __DIR__ . "/src/$class.php";
});

set_error_handler("ErrorHandler::handleError");
set_exception_handler("ErrorHandler::handleException");

header("Content-type: application/json; charset=UTF-8");

$parts = explode("/", $_SERVER["REQUEST_URI"]);

    if ($parts[2] != "users") {
        http_response_code(404);
        exit;
    }

$id = $parts[3] ?? null;


$database = new Database("localhost", "DevLink_db", "root", "");

$gateway = new userGateway($database);

$controller = new UserController($gateway);

$controller->processRequest($_SERVER["REQUEST_METHOD"], $id);
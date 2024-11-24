<?php

declare(strict_types=1);

spl_autoload_register(function ($class) {
    require __DIR__ . "/src/$class.php";
});

set_error_handler("ErrorHandler::handleError");
set_exception_handler("ErrorHandler::handleException");

header("Content-type: application/json; charset=UTF-8");

$parts = explode("/", $_SERVER["REQUEST_URI"]);

// if ($parts[2] != "users") {
//     http_response_code(404);
//     exit;
// }

$id = $parts[3] ?? null;


$database = new Database("localhost", "DevLink_db", "root", "");

switch ($parts[2]) {
    case "users":
        $gateway = new userGateway($database);
        $controller = new UserController($gateway);
        break;

    case "admin":
        $gateway = new AdminGateway($database);
        $controller = new AdminController($gateway);
        break;


    case "member":
        $gateway = new MemberGateway($database);
        $controller = new MemberController($gateway);
        break;

    case "follow":
        $gateway = new FollowGateway($database);
        $controller = new FollowController($gateway);
        break;

    default:
        http_response_code(404);
        exit;


}

$controller->processRequest($_SERVER["REQUEST_METHOD"], $id);
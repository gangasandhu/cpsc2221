<?php

declare(strict_types=1);

spl_autoload_register(function ($class) {
    require __DIR__ . "/src/$class.php";
});

set_error_handler("ErrorHandler::handleError");
set_exception_handler("ErrorHandler::handleException");

// Handle CORS headers
header("Access-Control-Allow-Origin: *"); // Allow all origins
header("Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS"); // Allow specific HTTP methods
header("Access-Control-Allow-Headers: Content-Type, Authorization"); // Allow specific headers
header("Content-type: application/json; charset=UTF-8");

// Handle preflight (OPTIONS) requests
if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(204); // No Content
    exit(0);
}

$parts = explode("/", $_SERVER["REQUEST_URI"]);

// if ($parts[2] != "users") {
//     http_response_code(404);
//     exit;
// }

$id = $parts[3] ?? null;


$database = new Database("localhost", "DevLink_db", "root", "root");

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

    case "posts":
        $gateway = new PostGateway($database);
        $controller = new PostController($gateway);
        break;

    case "comments":
        $gateway = new CommentGateway($database);
        $controller = new CommentController($gateway);
        break;

    default:
        http_response_code(404);
        exit;


}

$controller->processRequest($_SERVER["REQUEST_METHOD"], $id);
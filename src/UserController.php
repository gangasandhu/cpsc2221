<?php

class UserController
{
    public function __construct(private UserGateway $gateway)
    {
    }
    
    public function processRequest(string $method, ?string $id): void
    {
        if ($id) {
            
            $this->processResourceRequest($method, $id);
            
        } else {
            
            $this->processCollectionRequest($method);
            
        }
    }
    
    private function processResourceRequest(string $method, string $id): void
    {
        $user = $this->gateway->get($id);
        if ( ! $user) {
            http_response_code(404);
            echo json_encode(["message" => "User not found"]);
            return;
        }
        
        switch ($method) {
            case "GET":
                echo json_encode($user);
                break;
                
            case "PATCH":
                $data = (array) json_decode(file_get_contents("php://input"), true);
                
                $errors = $this->getValidationErrors($data, false);
                
                if ( ! empty($errors)) {
                    http_response_code(422);
                    echo json_encode(["errors" => $errors]);
                    break;
                }
                
                $rows = $this->gateway->update($user, $data);
                
                echo json_encode([
                    "message" => "User $id updated",
                    "rows" => $rows
                ]);
                break;
                
            case "DELETE":
                $rows = $this->gateway->delete($id);
                
                echo json_encode([
                    "message" => "User $id deleted",
                    "rows" => $rows
                ]);
                break;
                
            default:
                http_response_code(405);
                header("Allow: GET, PATCH, DELETE");
        }
    }
    
    private function processCollectionRequest(string $method): void
    {
        switch ($method) {
            case "GET":
                echo json_encode($this->gateway->getAll());
                break;
                
            case "POST":
                $data = (array) json_decode(file_get_contents("php://input"), true);
                
                $errors = $this->getValidationErrors($data);
                
                if ( ! empty($errors)) {
                    http_response_code(422);
                    echo json_encode(["errors" => $errors]);
                    break;
                }
                
                $id = $this->gateway->create($data);
                
                http_response_code(201);
                echo json_encode([
                    "message" => "User created",
                    "id" => $id
                ]);
                break;
            
            default:
                http_response_code(405);
                header("Allow: GET, POST");
        }
    }
    
    private function getValidationErrors(array $data, bool $is_new = true): array
    {
        $errors = [];
        
        if ($is_new && empty($data["username"])) {
            $errors[] = "username is required";
        }
        if ($is_new && empty($data["email"])) {
            $errors[] = "email is required";
        }
        if ($is_new && empty($data["password"])) {
            $errors[] = "password is required";
        }
        if ($is_new && empty($data["userType"])) {
            $errors[] = "userType is required";
        }
        
        if (array_key_exists("userID", $data)) {
            if (filter_var($data["userID"], FILTER_VALIDATE_INT) === false) {
                $errors[] = "userID must be an integer";
            }
        }
        
        return $errors;
    }
}










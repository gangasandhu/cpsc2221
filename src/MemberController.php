<?php

class MemberController
{
    public function __construct(private MemberGateway $gateway)
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
        $member = $this->gateway->get($id);
        if ( ! $member) {
            http_response_code(404);
            echo json_encode(["message" => "member not found"]);
            return;
        }
        
        switch ($method) {
            case "GET":
                echo json_encode($member);
                break;
                
            case "PATCH":
                $data = (array) json_decode(file_get_contents("php://input"), true);
                
                $errors = $this->getValidationErrors($data, false);
                
                if ( ! empty($errors)) {
                    http_response_code(422);
                    echo json_encode(["errors" => $errors]);
                    break;
                }
                
                $rows = $this->gateway->update($member, $data);
                
                echo json_encode([
                    "message" => "member $id updated",
                    "rows" => $rows
                ]);
                break;         

                
            default:
                http_response_code(405);
                header("Allow: GET, PATCH");
        }
    }
    
    private function processCollectionRequest(string $method): void
    {
        switch ($method) {
            case "GET":
                echo json_encode($this->gateway->getAll());
                break;
                
     
            default:
                http_response_code(405);
                header("Allow: GET");
        }
    }
    
    private function getValidationErrors(array $data, bool $is_new = true): array
    {
        $errors = [];
        

        if (array_key_exists("userID", $data)) {
            if (filter_var($data["userID"], FILTER_VALIDATE_INT) === false) {
                $errors[] = "userID must be an integer";
            }
        }
        
        return $errors;
    }
}










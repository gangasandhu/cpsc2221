<?php

class CodeController
{
    public function __construct(private CodeGateway $gateway)
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
        $code = $this->gateway->getById($id);
        if (!$code) {
            http_response_code(404);
            echo json_encode(["message" => "code not found"]);
            return;
        }

        switch ($method) {
            case "GET":
                echo json_encode($code);
                break;

            case "PATCH":
                $data = (array) json_decode(file_get_contents("php://input"), true);

                $errors = $this->getValidationErrors($data, false);

                if (!empty($errors)) {
                    http_response_code(422);
                    echo json_encode(["errors" => $errors]);
                    break;
                }

                $rows = $this->gateway->update($id, $data);

                echo json_encode([
                    "message" => "code $id updated",
                    "rows" => $rows
                ]);
                break;

            case "DELETE":
                $rows = $this->gateway->delete($id);

                echo json_encode([
                    "message" => "code $id deleted",
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
                $userID = $_GET["userID"] ?? null;
                if ($userID) {
                    echo json_encode($this->gateway->getByUser($userID));
                } else {
                    echo json_encode($this->gateway->getAll());
                }
                break;

            case "POST":
                $data = (array) json_decode(file_get_contents("php://input"), true);

                $errors = $this->getValidationErrors($data);

                if (!empty($errors)) {
                    http_response_code(422);
                    echo json_encode(["errors" => $errors]);
                    break;
                }

                $id = $this->gateway->create($data);

                // Fetch the newly created code to include full details
                $code = $this->gateway->getById($id);

                http_response_code(201);
                echo json_encode([
                    "message" => "code created",
                    "code" => $code
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

        if ($is_new && empty($data["userID"])) {
            $errors[] = "userID is required";
        }
        if ($is_new && empty($data["content"])) {
            $errors[] = "content is required";
        }
        if ($is_new && empty($data["langauage"])) {
            $errors[] = "language is required";
        }

        if (array_key_exists("userID", $data)) {
            if (filter_var($data["userID"], FILTER_VALIDATE_INT) === false) {
                $errors[] = "userID must be an integer";
            }
        }

        return $errors;
    }
}

<?php

class CommentController
{
    public function __construct(private CommentGateway $gateway)
    {
    }

    public function processRequest(string $method, ?string $id): void
    {
        if ($id) {
            $this->processResourceRequest($method, (int) $id);
        } else {
            $this->processCollectionRequest($method);
        }
    }

    private function processResourceRequest(string $method, int $id): void
    {
        $comment = $this->gateway->getByID($id);

        if (!$comment) {
            http_response_code(404);
            echo json_encode(["message" => "Comment not found"]);
            return;
        }

        switch ($method) {
            case "GET":
                echo json_encode($comment);
                break;

            case "PATCH":
                $data = (array) json_decode(file_get_contents("php://input"), true);

                if (empty($data['content'])) {
                    http_response_code(422);
                    echo json_encode(["message" => "Content is required"]);
                    return;
                }

                $rows = $this->gateway->update($id, $data);

                echo json_encode([
                    "message" => "Comment updated successfully",
                    "rows" => $rows
                ]);
                break;

            case "DELETE":
                $rows = $this->gateway->delete($id);

                echo json_encode([
                    "message" => "Comment deleted successfully",
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
                if (isset($_GET['postID'])) {
                    $postID = (int) $_GET['postID'];
                    echo json_encode($this->gateway->getByPost($postID));
                } else {
                    echo json_encode($this->gateway->getAll());
                }

                break;

            case "POST":
                $data = (array) json_decode(file_get_contents("php://input"), true);

                if (empty($data['content']) || empty($data['postID']) || empty($data['userID'])) {
                    http_response_code(422);
                    echo json_encode(["message" => "All fields are required"]);
                    return;
                }

                $id = $this->gateway->create($data);

                http_response_code(201);
                echo json_encode([
                    "message" => "Comment created successfully",
                    "commentID" => $id
                ]);
                break;



            default:
                http_response_code(405);
                header("Allow: GET, POST");
        }
    }
}

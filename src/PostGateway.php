<?php

class PostGateway
{
    private PDO $conn;

    public function __construct(Database $database)
    {
        $this->conn = $database->getConnection();
    }

    public function getAll(): array
    {
        $sql = "SELECT Posts.postID, Posts.title, Posts.content, Posts.datePublished, Users.userID, Users.username, Users.email
                FROM Posts
                INNER JOIN Users ON Posts.userID = Users.userID";

        $stmt = $this->conn->query($sql);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getByUser(int $userID): array
    {
        $sql = "SELECT postID, title, content, datePublished
                FROM Posts
                WHERE userID = :userID";

        $stmt = $this->conn->prepare($sql);
        $stmt->bindValue(":userID", $userID, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getById(int $postID): array|false
    {
        $sql = "SELECT Posts.postID, Posts.title, Posts.content, Posts.datePublished, Users.userID, Users.username, Users.email
                FROM Posts
                INNER JOIN Users ON Posts.userID = Users.userID
                WHERE Posts.postID = :postID";

        $stmt = $this->conn->prepare($sql);
        $stmt->bindValue(":postID", $postID, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function create(array $data): string
    {
        $sql = "INSERT INTO Posts (userID, title, content)
                VALUES (:userID, :title, :content)";

        $stmt = $this->conn->prepare($sql);
        $stmt->bindValue(":userID", $data["userID"], PDO::PARAM_INT);
        $stmt->bindValue(":title", $data["title"], PDO::PARAM_STR);
        $stmt->bindValue(":content", $data["content"], PDO::PARAM_STR);
        $stmt->execute();
        return $this->conn->lastInsertId();
    }

    public function update(int $postID, array $data): int
    {
        $sql = "UPDATE Posts
                SET title = :title, content = :content
                WHERE postID = :postID";

        $stmt = $this->conn->prepare($sql);
        $stmt->bindValue(":title", $data["title"], PDO::PARAM_STR);
        $stmt->bindValue(":content", $data["content"], PDO::PARAM_STR);
        $stmt->bindValue(":postID", $postID, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->rowCount();
    }

    public function delete(int $postID): int
    {
        $sql = "DELETE FROM Posts WHERE postID = :postID";

        $stmt = $this->conn->prepare($sql);
        $stmt->bindValue(":postID", $postID, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->rowCount();
    }
}

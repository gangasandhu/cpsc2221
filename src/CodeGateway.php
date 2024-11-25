<?php

class CodeGateway
{
    private PDO $conn;

    public function __construct(Database $database)
    {
        $this->conn = $database->getConnection();
    }

    public function getAll(): array
    {
        $sql = "SELECT * FROM Code
                INNER JOIN Users ON Code.userID = Users.userID";

        $stmt = $this->conn->query($sql);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getByUser(int $userID): array
    {
        $sql = "SELECT *
                FROM Code
                WHERE userID = :userID";

        $stmt = $this->conn->prepare($sql);
        $stmt->bindValue(":userID", $userID, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getById(int $postID): array|false
    {
        $sql = "SELECT * FROM Code
                INNER JOIN Users ON Code.userID = Users.userID
                WHERE Code.codeID = :codeID";

        $stmt = $this->conn->prepare($sql);
        $stmt->bindValue(":codeID", $postID, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function create(array $data): string
    {
        $sql = "INSERT INTO Code (codeID, userID, content, language, datePublished)
                VALUES (:codeID, :userID, :content, :language, :datePublished)";

        $stmt = $this->conn->prepare($sql);
        $stmt->bindValue(":codeID", $data["codeID"], PDO::PARAM_INT);
        $stmt->bindValue(":userID", $data["userID"], PDO::PARAM_INT);
        $stmt->bindValue(":content", $data["content"], PDO::PARAM_STR);
        $stmt->bindValue(":language", $data["language"], PDO::PARAM_STR);
        $stmt->bindValue(":datePublished", $data["datePublished"], PDO::PARAM_STR);
        $stmt->execute();
        return $this->conn->lastInsertId();
    }

    public function update(int $postID, array $data): int
    {
        $sql = "UPDATE Code
                SET (userID = :userID, content = :content, language = :language, datePublished = :datePublished)
                WHERE codeID = :codeID";

        $stmt = $this->conn->prepare($sql);
        $stmt->bindValue(":codeID", $data["codeID"], PDO::PARAM_INT);
        $stmt->bindValue(":userID", $data["userID"], PDO::PARAM_INT);
        $stmt->bindValue(":content", $data["content"], PDO::PARAM_STR);
        $stmt->bindValue(":language", $data["language"], PDO::PARAM_STR);
        $stmt->bindValue(":datePublished", $data["datePublished"], PDO::PARAM_STR);

        $stmt->execute();
        return $stmt->rowCount();
    }

    public function delete(int $codeID): int
    {
        $sql = "DELETE FROM Code WHERE codeID = :codeID";

        $stmt = $this->conn->prepare($sql);
        $stmt->bindValue(":codeID", $codeID, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->rowCount();
    }
}

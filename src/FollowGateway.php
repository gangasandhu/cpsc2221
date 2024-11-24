<?php

class FollowGateway
{
    private PDO $conn;

    public function __construct(Database $database)
    {
        $this->conn = $database->getConnection();

    }

    public function getAll(): array
    {
        $sql = "SELECT *
                FROM UserFollow";

        $stmt = $this->conn->query($sql);
        $data = [];

        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            array_push($data, $row);
        }

        return $data;
    }

    public function create(array $data): string
    {
        $sql = "INSERT INTO UserFollow (userID, followerID)
                VALUES (:userID, :followerID)";

    
        $stmt = $this->conn->prepare($sql);

        $stmt->bindValue(":userID", $data["userID"], PDO::PARAM_INT);
        $stmt->bindValue(":followerID", $data["follwerID"], PDO::PARAM_INT);

        $stmt->execute();

        return $this->conn->lastInsertId();
    }

    public function get(string $id): array|false
    {
        $sql = "SELECT *
                FROM UserFollow
                WHERE userID = :userID OR followerID = :userID";

        $stmt = $this->conn->prepare($sql);

        $stmt->bindValue(":userID", $id, PDO::PARAM_INT);

        $stmt->execute();

        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function delete(array $data): int
    {
        $sql = "DELETE FROM UserFollow
                WHERE userID = :userID AND followerID = :followerID";

        $stmt = $this->conn->prepare($sql);

        $stmt->bindValue(":userID", $data["userID"], PDO::PARAM_INT);

        $stmt->execute();

        return $stmt->rowCount();
    }
}

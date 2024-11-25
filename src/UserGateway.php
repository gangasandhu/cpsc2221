<?php

class userGateway
{
    private PDO $conn;

    public function __construct(Database $database)
    {
        $this->conn = $database->getConnection();

    }

    public function getAll(): array
    {
        $sql = "SELECT userID, username, email, userType, password
                FROM Users";

        $stmt = $this->conn->query($sql);
        $data = [];

        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            array_push($data, $row);
        }

        return $data;
    }

    public function create(array $data): string
    {
        $sql = "INSERT INTO Users (userID, username, email, password, userType)
                VALUES (:userID, :username, :email, :password, :userType)";

        $adminSql = "INSERT INTO Admin (userID, permissions) VALUES (:userID, :permissions)";
        $memberSql = "INSERT INTO Member (userID, interest, verified) VALUES (:userID, :interest, :verified)";

        $stmt = $this->conn->prepare($sql);

        $stmt->bindValue(":userID", $data["userID"], PDO::PARAM_INT);
        $stmt->bindValue(":username", $data["username"], PDO::PARAM_STR);
        $stmt->bindValue(":email", strtolower($data["email"]), PDO::PARAM_STR);
        $stmt->bindValue(":password", $data["password"], PDO::PARAM_STR);
        $stmt->bindValue(":userType", strtolower($data["userType"]), PDO::PARAM_STR);
        $stmt->execute();

        switch (strtolower($data["userType"])) {
            case 'admin':
                $stmt = $this->conn->prepare(query: $adminSql);
                $stmt->bindValue(':userID', $data['userID'], PDO::PARAM_INT);
                $stmt->bindValue(':permissions', $data['permissions'], PDO::PARAM_STR);
                break;

            default:
                $stmt = $this->conn->prepare(query: $memberSql);
                $stmt->bindValue(':userID', $data['userID'], PDO::PARAM_INT);
                $stmt->bindValue(':interest', $data['interest'], PDO::PARAM_STR);
                $stmt->bindValue(':verified', $data['verified'], PDO::PARAM_BOOL);
                break;
        }

        $stmt->execute();

        return $this->conn->lastInsertId();
    }

    public function get(string $id): array|false
    {
        $sql = "SELECT userID, username, email, userType
                FROM Users
                WHERE userID = :userID";

        $stmt = $this->conn->prepare($sql);

        $stmt->bindValue(":userID", $id, PDO::PARAM_INT);

        $stmt->execute();

        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function update(array $current, array $new): int
    {
        $sql = "UPDATE Users
                SET username = :username, email = :email, password = :password, userType = :userType
                WHERE userID = :userID";

        $stmt = $this->conn->prepare($sql);

        $stmt->bindValue(":username", $new["username"] ?? $current["username"], PDO::PARAM_STR);
        $stmt->bindValue(":email", $new["email"] ?? $current["email"], PDO::PARAM_STR);
        $stmt->bindValue(":password", $new["password"] ?? $current["password"], PDO::PARAM_STR);
        $stmt->bindValue(":userType", $new["userType"] ?? $current["userType"], PDO::PARAM_STR);
        $stmt->bindValue(":userID", $current["userID"], PDO::PARAM_INT);

        $stmt->execute();

        return $stmt->rowCount();
    }

    public function delete(string $id): int
    {
        $sql = "DELETE FROM Users
                WHERE userID = :userID";

        $stmt = $this->conn->prepare($sql);

        $stmt->bindValue(":userID", $id, PDO::PARAM_INT);

        $stmt->execute();

        return $stmt->rowCount();
    }
}

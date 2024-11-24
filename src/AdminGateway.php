<?php

class AdminGateway
{
    private PDO $conn;

    public function __construct(Database $database)
    {
        $this->conn = $database->getConnection();

    }

    public function getAll(): array
    {
        $sql = "SELECT userID, permissions
                FROM Admin";

        $stmt = $this->conn->query($sql);
        $data = [];

        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            array_push($data, $row);
        }

        return $data;
    }

    public function get(string $id): array|false
    {
        $sql = "SELECT userID, permissions
                FROM Admin
                WHERE userID = :userID";

        $stmt = $this->conn->prepare($sql);

        $stmt->bindValue(":userID", $id, PDO::PARAM_INT);

        $stmt->execute();

        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function update(array $current, array $new): int
    {
        $sql = "UPDATE Admin
                SET permissions = :permissions
                WHERE userID = :userID";

        $stmt = $this->conn->prepare($sql);

        $stmt->bindValue(":permissions", $new["permissions"] ?? $current["permissions"], PDO::PARAM_STR);
        $stmt->execute();

        return $stmt->rowCount();
    }


   
}

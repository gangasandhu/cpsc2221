<?php

class MemberGateway
{
    private PDO $conn;

    public function __construct(Database $database)
    {
        $this->conn = $database->getConnection();

    }

    public function getAll(): array
    {
        $sql = "SELECT *
                FROM Member";

        $stmt = $this->conn->query($sql);
        $data = [];

        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            array_push($data, $row);
        }

        return $data;
    }

    public function get(string $id): array|false
    {
        $sql = "SELECT *
                FROM Member
                WHERE userID = :userID";

        $stmt = $this->conn->prepare($sql);

        $stmt->bindValue(":userID", $id, PDO::PARAM_INT);

        $stmt->execute();

        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function update(array $current, array $new): int
    {
        $sql = "UPDATE Member
                SET interest = :interest, verified = :verified
                WHERE userID = :userID";

        $stmt = $this->conn->prepare($sql);

        $stmt->bindValue(":interest", $new["interest"] ?? $current["interest"], PDO::PARAM_STR);
        $stmt->bindValue(":verified", $new["verified"] ?? $current["verified"], PDO::PARAM_BOOL);
        $stmt->execute();

        return $stmt->rowCount();
    }


   
}

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
        $sql = "SELECT userID, username, email, userType
                FROM User";
                
        $stmt = $this->conn->query($sql);
        
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
    
    public function create(array $data): string
    {
        $sql = "INSERT INTO User (userID, username, email, password, userType)
                VALUES (:userID, :username, :email, :password, :userType)";
                
        $stmt = $this->conn->prepare($sql);
        
        $stmt->bindValue(":userID", $data["userID"], PDO::PARAM_INT);
        $stmt->bindValue(":username", $data["username"], PDO::PARAM_STR);
        $stmt->bindValue(":email", $data["email"], PDO::PARAM_STR);
        $stmt->bindValue(":password", $data["password"], PDO::PARAM_STR);
        $stmt->bindValue(":userType", $data["userType"], PDO::PARAM_STR);
        
        $stmt->execute();
        
        return $this->conn->lastInsertId();
    }
    
    public function get(string $id): array | false
    {
        $sql = "SELECT userID, username, email, userType
                FROM User
                WHERE userID = :userID";
                
        $stmt = $this->conn->prepare($sql);
        
        $stmt->bindValue(":userID", $id, PDO::PARAM_INT);
        
        $stmt->execute();
        
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }
    
    public function update(array $current, array $new): int
    {
        $sql = "UPDATE User
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
        $sql = "DELETE FROM User
                WHERE userID = :userID";
                
        $stmt = $this->conn->prepare($sql);
        
        $stmt->bindValue(":userID", $id, PDO::PARAM_INT);
        
        $stmt->execute();
        
        return $stmt->rowCount();
    }
}

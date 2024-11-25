<?php

class CommentGateway
{
    private PDO $conn;

    public function __construct(Database $database)
    {
        $this->conn = $database->getConnection();
    }

    public function getAll(): array
    {
        $sql = "SELECT 
                    Comment.commentID, 
                    Comment.content, 
                    Comment.date, 
                    Comment.postID, 
                    Comment.userID, 
                    Users.username, 
                    Users.email
                FROM Comment
                INNER JOIN Users ON Comment.userID = Users.userID";
    
        $stmt = $this->conn->query($sql);
    
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getByPost(int $postID): array
    {
        $sql = "SELECT commentID, content, date, userID
                FROM Comment
                WHERE postID = :postID";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindValue(':postID', $postID, PDO::PARAM_INT);
        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getByID(int $commentID): array|false
    {
        $sql = "SELECT commentID, content, date, postID, userID
                FROM Comment
                WHERE commentID = :commentID";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindValue(':commentID', $commentID, PDO::PARAM_INT);
        $stmt->execute();

        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function create(array $data): string
    {
        $sql = "INSERT INTO Comment (content, postID, userID)
                VALUES (:content, :postID, :userID)";
        $stmt = $this->conn->prepare($sql);

        $stmt->bindValue(':content', $data['content'], PDO::PARAM_STR);
        $stmt->bindValue(':postID', $data['postID'], PDO::PARAM_INT);
        $stmt->bindValue(':userID', $data['userID'], PDO::PARAM_INT);

        $stmt->execute();

        return $this->conn->lastInsertId();
    }

    public function update(int $commentID, array $data): int
    {
        $sql = "UPDATE Comment
                SET content = :content
                WHERE commentID = :commentID";
        $stmt = $this->conn->prepare($sql);

        $stmt->bindValue(':content', $data['content'], PDO::PARAM_STR);
        $stmt->bindValue(':commentID', $commentID, PDO::PARAM_INT);

        $stmt->execute();

        return $stmt->rowCount();
    }

    public function delete(int $commentID): int
    {
        $sql = "DELETE FROM Comment
                WHERE commentID = :commentID";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindValue(':commentID', $commentID, PDO::PARAM_INT);

        $stmt->execute();

        return $stmt->rowCount();
    }
}

import React from "react";
import { Box, Avatar, Text, Textarea, Button, Divider } from "@chakra-ui/react";
import { Comment } from "../Types";

// TODO: 
// connect comment section to my API
// make the author the signed-in user
// change avatar to the commenter's profile photo

const CommentSection: React.FC = () => {
  const [comments, setComments] = React.useState<Comment[]>([]);
  const [newComment, setNewComment] = React.useState("");


  const handleAddComment = () => {
    const newId = comments.length + 1;
    const newCommentObj = {
      id: newId,
      author: "User",
      content: newComment,
    };
    setComments([...comments, newCommentObj]);
    setNewComment("");
  };

  return (
    <Box mt={4}>
      <Text fontWeight="bold" mb={2}>
        Comments
      </Text>
      <Box mb={4}>
        <Textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
        />
        <Button colorScheme="blue" mt={2} onClick={handleAddComment}>
          Add Comment
        </Button>
      </Box>
      <Divider mb={4} />
      {comments.map((comment) => (
        <Box key={comment.id} display="flex" alignItems="flex-start" mb={4}>
          <Avatar name={comment.author} size="sm" mr={2} />
          <Box>
            <Text fontWeight="bold" mb={1}>
              {comment.author}
            </Text>
            <Text>{comment.content}</Text>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default CommentSection;

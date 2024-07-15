import PostCard from "./PostCard";

function PostList() {
  return (
    <PostCard
      style={{ backgroundColor: "red", fontSize: "30px" }}
      isBig={false}
    />
  );
}

export default PostList;

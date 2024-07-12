import { PostProps } from "@/types/types";

function PostCard(props:PostProps) {
  return (
    <>
      <div>PostCard</div>
      <p>{props.title}</p>
      <p>{props.body}</p>
    </>
  );
}

export default PostCard;

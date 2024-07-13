type ButtonProps = {
  bac: string;
  size: number;
  isDisable: false;
}

function PostCard({bac, size, isDisable}: ButtonProps) {
  return (
    <div>{bac}, {size}, {isDisable}</div>
  )
}

export default PostCard
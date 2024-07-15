"use client";
import { useState } from "react";
import Button1 from "./Button1";
import Button2 from "./Button2";
import Button3 from "./Button3";

type PostCardProps = {
  style: React.CSSProperties;
  isBig: boolean;
};
const clickHandler = (a: number, b: number): number => {
  let restul = console.log(a + b);
  return a + b;
};

function PostCard({ style, isBig }: PostCardProps) {
  const [count, setCount] = useState(0);
  return (
    <>
      <div
        className={`${isBig ? "text-yellow-500" : "text-purple-600"}`}
        style={style}
      >
        Learn typescript
      </div>
      <Button1 onBash={clickHandler}>click ReactNode</Button1>
      <br />
      <Button2 myCount={() => setCount((prev) => prev + 3)}>
        <span>click jsx {count}</span>
      </Button2>
      <br />
      <Button3 isBig={false} type={"submit"} autoFocus={true} className="bg-yellow-400" />
      <br />
      <Button3 isBig={true} className="bg-red-600"/>
    </>
  );
}

export default PostCard;

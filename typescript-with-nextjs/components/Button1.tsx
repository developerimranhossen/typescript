"use client";
type Button1Props = {
  children: React.ReactNode;
  onBash: (a: number, b: number) => number;
};

function Button1({ children, onBash }: Button1Props) {
  return (
    <>
      <button onClick={() => onBash(5, 10)}>{children}</button>
    </>
  );
}

export default Button1;

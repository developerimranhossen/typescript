type Button2Props = {
  children: JSX.Element,
  myCount:React.MouseEventHandler<HTMLButtonElement>,
};

function Button2({children, myCount}: Button2Props) {
  return (
    <button onClick={myCount}>
      {children}
    </button>
  );
}

export default Button2;

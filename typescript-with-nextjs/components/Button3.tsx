type Button3Props = React.ComponentPropsWithoutRef<"button"> & {
  isBig: boolean;
};

// type Button3Props = {
//     type: "submit" | "reset" | "button" | undefined,
// autoFocus: boolean,
// isfav: boolean
// }

function Button3({ type, autoFocus, isBig, ...rest }: Button3Props) {
  return (
    <button
      //   className={`${isBig ? "text-5xl" : "text-sm"}`}
      {...rest}
      type={type}
      autoFocus={autoFocus}
    >
      button3
    </button>
  );
}

export default Button3;

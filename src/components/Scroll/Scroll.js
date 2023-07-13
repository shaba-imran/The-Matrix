const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        borderTop: "3px solid green",
        borderBottom: "3px solid green",
        height: "840px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;

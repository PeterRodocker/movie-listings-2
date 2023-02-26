function Like(props) {
  const { liked, onToggleLike } = props;

  let classes = "fa fa-heart"
  if (!liked) classes += "-o";

  return (
    <i
      className={classes}
      style={{ cursor: "pointer" }}
      onClick={onToggleLike}>
    </i >
  );
}

export default Like;
import "./styles.css";

const Chessboard = () => {
  const board = [];

  for (let rows = 0; rows < 8; rows++) {
    const horizontal = [];

    for (let col = 0; col < 8; col++) {
      const isWhite = (rows + col) % 2 === 0;
      horizontal.push(
        <div
          key={`col-${rows}-${col}`}
          style={{
            border: "1px solid black",
            width: "50px",
            height: "50px",
            backgroundColor: isWhite ? "black" : "white",
            color: "blue",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >{`${col}-${rows}`}</div>
      );
    }

    board.push(
      <div key={`rows-${rows}`} style={{ display: "flex" }}>
        {horizontal}
      </div>
    );
  }

  return <div>{board}</div>;
};
export default Chessboard;

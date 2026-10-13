const NO_OF_COLUMNS = {
  1: "grid-cols-1",
  2: "grid-cols-2",
};

function CardContainer({ styles, children, column = 1 }) {
  return (
    <section
      className={`grid ${NO_OF_COLUMNS[column]} ${styles || ""} border-2 border-neutral-12 p-1 gap-1`}
      style={{ borderRadius: "var(--radius-container)" }}
    >
      {children}
    </section>
  );
}

export default CardContainer;

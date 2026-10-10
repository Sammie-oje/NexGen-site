function CardContainer({ children, column }) {
  return (
    <section
      className={`grid grid-cols-${column || 1} border-2 border-neutral-12 p-1 gap-1`}
      style={{ borderRadius: "var(--radius-container)" }}
    >
      {children}
    </section>
  );
}

export default CardContainer;

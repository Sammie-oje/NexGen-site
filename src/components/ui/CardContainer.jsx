function CardContainer({ children }) {
  return (
    <section
      className="grid grid-cols-2 border-2 border-neutral-12 p-1 gap-1"
      style={{ borderRadius: "var(--radius-container)" }}
    >
      {children}
    </section>
  );
}

export default CardContainer;

const variants = {
  small: "p-[var(--padding-card-small)]",
  large: "p-[var(--padding-card-large)]",
  default: "p-[var(--padding-card)]",
};

function Card({ children, styles, type = "default" }) {
  return (
    <article
      className={`flex flex-col items-center justify-center gap-1 bg-[var(--element-background)] rounded-[var(--radius-card)] ${styles || ""} ${variants[type]}`}
    >
      {children}
    </article>
  );
}

export default Card;

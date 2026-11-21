function Avatar({ src, name }) {
  return (
    <span className="bg-avatar size-10 shrink-0 rounded-pill overflow-hidden">
      <img
        src={src}
        alt={`${name} avatar`}
        className="size-full object-cover"
      />
    </span>
  );
}

export default Avatar;

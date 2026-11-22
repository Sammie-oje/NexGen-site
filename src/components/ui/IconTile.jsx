/*52px rounded-square icon holder (Services, Works)*/
function IconTile({ icon: Icon }) {
  return (
    <span className="flex size-13 shrink-0 items-center justify-center bg-raised border border-stroke rounded-tile p-card-sm">
      <Icon aria-hidden className="size-full" />
    </span>
  );
}

export default IconTile;

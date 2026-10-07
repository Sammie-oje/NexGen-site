function Ticker() {
  return (
    <div className="absolute bottom-4 bg-neutral-06 w-[calc(100%_-_3rem)] rounded-1 p-3 overflow-x-hidden">
      <div className="flex gap-[var(--gap-connected)] w-max text-[14px] text-neutral-40 uppercase font-roboto-mono">
        <span className="relative pr-4 after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:rounded-full after:size-[7px] after:bg-orange-60">
          Branding
        </span>
        <span className="relative pr-4 after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:rounded-full after:size-[7px] after:bg-orange-60">
          Digital Marketing
        </span>
        <span className="relative pr-4 after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:rounded-full after:size-[7px] after:bg-orange-60">
          App development
        </span>
        <span className="relative pr-4 after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:rounded-full after:size-[7px] after:bg-orange-60">
          Web development
        </span>
        <span className="relative pr-4 after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:rounded-full after:size-[7px] after:bg-orange-60">
          Web design
        </span>
      </div>
    </div>
  );
}

export default Ticker;

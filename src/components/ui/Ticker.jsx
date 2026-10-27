function Ticker({ styles, texts }) {
  return (
    <div className={` bottom-4 ${styles}  rounded-1 p-3 overflow-x-hidden`}>
      <div className="flex gap-(--gap-connected) w-max text-[14px] text-neutral-40 uppercase font-roboto-mono">
        {texts.map((text) => (
          <span className="relative pr-4 after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:rounded-full after:size-[7px] after:bg-orange-60">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Ticker;

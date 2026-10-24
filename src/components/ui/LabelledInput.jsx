function LabelledInput({ label, placeholder, type }) {
  return (
    <label className="flex flex-col gap-[var(--gap-connected)]">
      <span className="uppercase font-[16px] font-medium font-roboto-flex text-orange-90">
        {label}
      </span>
      {type === "textarea" ? (
        <textarea
          className="bg-neutral-06 rounded-1 p-4 resize-none h-[100px] text-[16px] font-regular placeholder:text-[16px] font-roboto-flex text-neutral-40 placeholder:font-regular placeholder:font-roboto-flex placeholder:text-neutral-40 placeholder:capitalize"
          placeholder="Enter your question here ……"
        ></textarea>
      ) : (
        <input
          type={type}
          className="bg-neutral-06 rounded-1 p-4 text-[16px] font-regular font-roboto-flex text-neutral-40 placeholder:text-[16px] placeholder:font-regular placeholder:font-roboto-flex placeholder:text-neutral-40"
          placeholder={placeholder}
        />
      )}
    </label>
  );
}

export default LabelledInput;

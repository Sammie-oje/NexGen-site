import Text from "./Text.jsx";

function Stat({ label, value }) {
  return (
    <dl className="flex flex-col items-center gap-gutter">
      <Text as="dt" variant="action">
        {label}
      </Text>
      <Text as="dd" variant="figure">
        {value}
      </Text>
    </dl>
  );
}

export default Stat;

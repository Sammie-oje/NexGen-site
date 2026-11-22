import Text from "../../lib/cn.js";

export function Badge({children}) {
  return <Text as="span" variant="caption" tone="body-strong">{children}</Text>
}
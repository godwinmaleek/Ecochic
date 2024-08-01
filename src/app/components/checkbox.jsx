import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

export default function CustomCheckbox({ checked, onChange, ...rest }) {
  return (
    <Checkbox.Root
      checked={checked}
      onCheckedChange={(value) => onChange(value)}
      className="size-4 border border-black bg-white aria-checked:bg-black"
      {...rest}
    >
      <Checkbox.Indicator>
        <CheckIcon color="white" />
      </Checkbox.Indicator>
    </Checkbox.Root>
  );
}

import * as Popover from "@radix-ui/react-popover";
import Button from "./button";
import IconClose from "../utils/Icons/IconClose";
import CustomCheckbox from "./checkbox";
import { useMemo, useState } from "react";

export default function FilterDropdown({ buttonText, ItemList = [] }) {
  const isArrayOfObjects =
    Array.isArray(ItemList) &&
    ItemList.every((item) => typeof item === "object" && item !== null);

  const filterOptionWithCheckValue = useMemo(() => {
    if (isArrayOfObjects) {
      return ItemList.map((item) => ({
        ...item,
        options: item.options.map((option) => ({
          label: option,
          value: option,
          checked: false,
        })),
      }));
    } else {
      return ItemList?.map((item) => ({
        label: item,
        value: item,
        checked: false,
      }));
    }
  }, [ItemList, isArrayOfObjects]);

  const [filterItemList, setFilterItemList] = useState(
    filterOptionWithCheckValue
  );

  const handleChange = (label) => {
    setFilterItemList((prevFilterItemList) =>
      prevFilterItemList.map((item) => ({
        ...item,
        checked: item.label == label ? !item.checked : item.checked,
      }))
    );
  };
  const content = [
    { name: "men", option: ["shirts", "jackets", "trousers", "shoes"] },
    {
      name: "women",
      option: ["shirts", "jackets", "trousers", "shoes"],
    },
    { name: "bag", option: ["shirts", "jackets", "trousers", "shoes"] },
    {
      name: "women",
      option: ["shirts", "jackets", "trousers", "shoes"],
    },
  ];

  return (
    <Popover.Root className={"relative"}>
      <Popover.Trigger>
        <Button
          className={"border border-black"}
          arrowType={"DOWN"}
          color={"black"}
        >
          {buttonText}
        </Button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          align="start"
          side="bottom"
          className={
            "w-[24.8125rem] max-h-[14.625rem] border border-black bg-white mt-3 overflow-auto"
          }
        >
          <div className="flex flex-col divide-y divide-black">
            <div className="flex justify-between items-center px-4 pt-4 pb-[1.125rem]">
              <span className="body-text-md font-600 text-black">
                {buttonText} by
              </span>
              <Popover.Close>
                <IconClose />
              </Popover.Close>
            </div>

            {filterItemList?.map((option) => {
              return (
                <OptionItem
                  key={option.label}
                  option={option}
                  onChange={() => handleChange(option.label)}
                />
              );
            })}
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

const OptionItem = ({ onChange, option }) => {
  return (
    <div className="grid grid-cols-[1fr_16px] justify-between items-center px-4 py-[10px] group hover:bg-[#6B7656]/70 transition-all duration-300">
      <label
        htmlFor={option.label}
        className="body-text-md group-hover:text-white group-hover:cursor-pointer transition-all duration-300 h-full"
      >
        {option.label}
      </label>
      <CustomCheckbox
        id={option.label}
        checked={option?.checked}
        onChange={onChange}
      />
    </div>
  );
};

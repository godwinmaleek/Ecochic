import * as Popover from "@radix-ui/react-popover";
import IconClose from "../utils/Icons/IconClose";
import CustomCheckbox from "./checkbox";
import { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import IconArrowDown from "../utils/Icons/IconArrowDown";

export default function FilterDropdown({ buttonText, ItemListArray = [] }) {
  const isArrayOfObjects =
    Array.isArray(ItemListArray) &&
    ItemListArray.every((item) => typeof item === "object" && item !== null);

  const filterOptionWithCheckValue = useMemo(() => {
    if (isArrayOfObjects) {
      return ItemListArray.map((item) => ({
        ...item,
        options: item.options.map((option) => ({
          label: option,
          value: option,
          checked: false,
        })),
      }));
    } else {
      return ItemListArray?.map((item) => ({
        label: item,
        value: item,
        checked: false,
      }));
    }
  }, [ItemListArray, isArrayOfObjects]);

  const [filterItemList, setFilterItemList] = useState(
    filterOptionWithCheckValue
  );
  const [domLoaded, setDomLoaded] = useState(false);
  const [selectedItemName, setSelectedItemName] = useState(null);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const updateOptions = (optionLabel, options) =>
    options.map((option) => ({
      ...option,
      checked: option.label === optionLabel ? !option.checked : option.checked,
    }));

  const handleChange = useCallback(
    (optionLabel) => {
      setFilterItemList((prevFilterItemList) => {
        if (isArrayOfObjects) {
          return prevFilterItemList.map((item) => ({
            ...item,
            options:
              selectedItemName === item.name
                ? updateOptions(optionLabel, item.options)
                : item.options,
          }));
        } else {
          return updateOptions(optionLabel, prevFilterItemList);
        }
      });
    },
    [selectedItemName, isArrayOfObjects]
  );

  const renderOptionItems = useCallback(() => {
    if (!domLoaded) return null;

    if (isArrayOfObjects) {
      if (typeof selectedItemName === "string") {
        const selectedItem = filterItemList.find(
          (item) => item.name === selectedItemName
        );
        return (
          <OptionItemCheckList
            optionArray={selectedItem?.options || []}
            onChange={(value) => handleChange(value)}
          />
        );
      } else {
        return (
          <ItemList
            onSelect={(name) => setSelectedItemName(name)}
            itemArray={filterItemList}
          />
        );
      }
    } else {
      return (
        <OptionItemCheckList
          optionArray={filterItemList}
          onChange={(value) => handleChange(value)}
        />
      );
    }
  }, [
    domLoaded,
    isArrayOfObjects,
    filterItemList,
    selectedItemName,
    handleChange,
  ]);

  return (
    <Popover.Root className={"relative"}>
      <Popover.Trigger>
        <div className="flex items-center gap-x-[.625rem] border border-black px-4 py-2">
          <input
            className={"body-text-md text-black"}
            value={buttonText}
            type="button"
          />
          <IconArrowDown />
        </div>
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
              {selectedItemName ? (
                <Fragment>
                  <div
                    onClick={() => setSelectedItemName(null)}
                    className="flex items-center gap-[.625rem] cursor-pointer"
                  >
                    <IconArrowDown color="#666" className="rotate-90" />
                    <span className="body-text-md font-600 text-black">
                      {selectedItemName}
                    </span>
                  </div>
                </Fragment>
              ) : (
                <Fragment>
                  <span className="body-text-md font-600 text-black">
                    {buttonText} by
                  </span>
                  <Popover.Close>
                    <IconClose />
                  </Popover.Close>
                </Fragment>
              )}
            </div>

            {renderOptionItems()}
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

const OptionItemCheckList = ({ onChange, optionArray = [] }) => {
  return (
    <Fragment>
      {optionArray?.map((option) => {
        return (
          <div
            key={option.label}
            className="grid grid-cols-[1fr_16px] justify-between items-center px-4 py-[10px] group hover:bg-[#6B7656]/10 transition-all duration-300"
          >
            <label
              htmlFor={option.label}
              className="body-text-md  group-hover:cursor-pointer transition-all duration-300 h-full"
            >
              {option.label}
            </label>
            <CustomCheckbox
              id={option.label}
              checked={option?.checked}
              onChange={() => onChange(option.label)}
            />
          </div>
        );
      })}
    </Fragment>
  );
};

const ItemList = ({ onSelect, itemArray = [] }) => {
  return (
    <Fragment>
      {itemArray?.map((item) => {
        return (
          <div
            key={item.name}
            onClick={() => onSelect(item.name)}
            className="grid grid-cols-[1fr_16px] justify-between items-center px-4 py-[10px] group hover:bg-[#6B7656]/10 transition-all duration-300"
          >
            <label
              htmlFor={item.name}
              className="body-text-md  group-hover:cursor-pointer transition-all duration-300 h-full"
            >
              {item.name}
            </label>

            <IconArrowDown color="#666" className="-rotate-90" />
          </div>
        );
      })}
    </Fragment>
  );
};

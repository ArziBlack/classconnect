import React from "react";
import {
  Checkbox,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

interface IMultipleSelectDropdownProps {
  options: string[];
  maxSelections: number;
  selectedOptions?: Array<string>;
  setSelectedOptions: React.Dispatch<React.SetStateAction<string[]>>;
  onChange: (selectedOptions: string[]) => void;
}

const MultipleSelectDropdown = ({
  options,
  maxSelections,
  onChange,
  selectedOptions,
  setSelectedOptions,
}: IMultipleSelectDropdownProps) => {
  const handleToggle = (option: string) => {
    let updatedSelectedOptions: string[];
    if (selectedOptions.includes(option)) {
      updatedSelectedOptions = selectedOptions.filter(
        (item) => item !== option
      );
    } else if (selectedOptions.length < maxSelections) {
      updatedSelectedOptions = [...selectedOptions, option];
    } else {
      return; // Do nothing if max selections reached
    }
    setSelectedOptions(updatedSelectedOptions);
    onChange(updatedSelectedOptions);
  };

  const isChecked = (option) => selectedOptions.includes(option);

  const isLimitReached = selectedOptions?.length >= maxSelections;
  return (
    <Menu closeOnSelect={false}>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} fontWeight={400}>
        Select Options
      </MenuButton>
      <MenuList>
        {options.map((option) => (
          <MenuItem key={option}>
            <Checkbox
              isChecked={isChecked(option)}
              onChange={() => handleToggle(option)}
              isDisabled={!isChecked(option) && isLimitReached}
            >
              {option}
            </Checkbox>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default MultipleSelectDropdown;

import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
  handleClick?: MouseEventHandler<HTMLBRElement>;
  btnType?: "button" | "submit";
}

export interface OptionProps{
  title: string;
  value:string;  
}
export interface CustomFilterProps {
  title: string;
  options: OptionProps[]
}
export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}
export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
export interface FilterProps {
  model: string;
  year: number;
  manufacturer:string;
  fuel:string;
  limit: number;
}

export interface ShowMoreProps {
  isNext: boolean;
  pageNumber: number;
}
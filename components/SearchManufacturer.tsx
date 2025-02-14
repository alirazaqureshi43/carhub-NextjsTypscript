"use client";

import { useState, Fragment } from "react";
import { SearchManufacturerProps } from "@/types/index";
import {
  Combobox,
  Transition,
} from "@/node_modules/@headlessui/react/dist/index";
import Image from "@/node_modules/next/image";
import { manufacturers } from "@/constants/index";

const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) => {
const [query, setQuery] = useState('')
const filteredManufacturer = query === "" ? manufacturers: manufacturers.filter((manufacturer:string)=>{
    return manufacturer.toLowerCase().replace(/\s+/g,"").includes(query.toLowerCase().replace(/\s+/g,""))
})

  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              alt="car logo"
              width={20}
              height={20}
              className="ml-4"
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={
                (manufacturer:string)=> manufacturer
            }
            onChange={(e) => setQuery(e.target.value)}
          ></Combobox.Input> 
          <Transition
          as={Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo="opacity-0"
          afterLeave={() => setQuery('')}
          >
            <Combobox.Options>
                {filteredManufacturer.length===0 && (query !== '') ? (
                    <Combobox.Option value={query}
                    className='search-manufacturer__option'
                    >
                        Create "{query}"
                    </Combobox.Option>
                ):(
                    filteredManufacturer.map((item)=>(
                        <Combobox.Option
                        key={item}
                        className={({active})=>
                        `relative search-manufacturer__option ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`
                        }
                       value={item} 
                       >
                        {item}
                        </Combobox.Option>
                    ))
                )}
            </Combobox.Options>

          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;

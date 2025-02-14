'use client'

import { Fragment, useState } from "react"
import { CustomFilterProps } from "@/types/index"
import Image from "@/node_modules/next/image"
import { useRouter } from "@/node_modules/next/navigation"
import { Listbox, Transition } from "@/node_modules/@headlessui/react/dist/index"
import { updateSearchParams } from "@/utils/index"


const CustomFilter = ({title,options}:CustomFilterProps) => {
  const [selected, setSelected] = useState(options[0])
  const router = useRouter()

  const handleUpdatParams=(e:{title:string, value:string})=>{
    const newPathName =updateSearchParams(title, e.value.toLowerCase());
    router.push(newPathName, { scroll: false })
  }
  
  return (
    <div className="w-fit">
      <Listbox
      value={selected}
      onChange={(e)=>{
         setSelected(e);
         handleUpdatParams(e)}}      
      >
        <div className="relative w-fit z-10">
          <Listbox.Button className='custom-filter__btn'>
              <span className="block truncate">{selected.title}</span>
              <Image src='/chevron-up-down.svg' alt="chevron up down" height={20} width={20} 
              className='ml-4 object-contain' 
              />
          </Listbox.Button>
          <Transition
          leave="transiton ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          >
              <Listbox.Options className='custom-filter__options'>
                    {
                      options.map((option)=>(
                        <Listbox.Option
                        key={option.title}
                        value={option}
                        className={({active})=>  `relative cursor-default selected-none py-2 px-4 ${
                          active ? 'bg-primary-blue text-white' : 'text-gray-900'
                        }`}
                        >
                          {
                            ({selected})=>(
                              <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                {option.title}
                              </span>
                            )
                          }
                        </Listbox.Option>
                      ))
                    }
              </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter
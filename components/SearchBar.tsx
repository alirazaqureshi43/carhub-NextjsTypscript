'use client'
import React, { useState } from 'react'
import {SearchManufacturer} from '@/components/index'
import Image from '@/node_modules/next/image'
import { useRouter } from '@/node_modules/next/navigation'

const SearchButton = ({otherClasses}:{otherClasses:string}) =>(

  <button className={`-ml-3 z-10 ${otherClasses}`}>
    <Image alt='magnifying-glass'
    src='/magnifying-glass.svg'
    width={40}
    height={40}
    className='object-contain'/>
  </button>
)
const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState('')
  const [model, setModel] = useState('')
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) =>{
    console.log('search')
       e.preventDefault()
       
       if(manufacturer === '' && model==='') {
        return alert('Please fill the search bar')
  }

  updatedSearchParams(model.toLowerCase(), manufacturer.toLowerCase())
  }

  const updatedSearchParams=(model:string, manufacturer:string)=>{
    const searchParams = new URLSearchParams(window.location.search)
    if(model){
      searchParams.set('model', model)
    }else{
      searchParams.delete('model')
    }
    if(manufacturer){
      searchParams.set('manufacturer', manufacturer)
    }else{
      searchParams.delete('manufacturer')
    }

    const newPathName = `${window.location.pathname}?${searchParams.toString()}`

    router.push(newPathName, { scroll: false })
  }
  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className="searchbar__item">
          <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
          />
           <SearchButton otherClasses='sm:hidden'/>
      </div>
      <div className="searchbar__item">
      <Image alt='car model'
    src='/model-icon.png'
    width={25}
    height={25}
    className='absolute w-[20px] h-[20px] ml-4'/>
    <input
    type='text'
    name='model'
    value={model}
    onChange={(e)=>setModel(e.target.value)}
    placeholder='Tiguan'
     className='searchbar__input'
     />
       <SearchButton otherClasses='sm:hidden'/>
      </div>
      <SearchButton otherClasses='max-sm:hidden'/>
      {/* <button>Submit</button> */}
    </form>
  )
}

export default SearchBar

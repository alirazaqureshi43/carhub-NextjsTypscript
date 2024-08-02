'use client'

import { useRouter } from "@/node_modules/next/navigation"
import { ShowMoreProps } from "@/types/index"
import { updateSearchParams } from "@/utils/index"
import CustomButton from "./CustomButton"

const ShowMore = ({pageNumber, isNext}:ShowMoreProps) => {
    const router = useRouter()
    const handleNavigation = () =>{
        const newLimit = (pageNumber + 1) * 10;
        const pathName = updateSearchParams('limit', `${newLimit}`)
        router.push(pathName, { scroll: false })
    }
  return (
    <div className="flex-center gap-5 mt-10 w-full">
        {
            !isNext && (
                <CustomButton title="Show More" btnType="button"
                 containerStyles="bg-primary-blue rounded-full text-white"
                 handleClick={handleNavigation}
                 />
                            )
        }
    </div>
  )
}

export default ShowMore
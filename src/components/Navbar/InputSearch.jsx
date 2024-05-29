"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) => {
        if (event.key === 'Enter' || event.type === 'click') {
            event.preventDefault()
            const keyword = searchRef.current.value.trim()
            if (keyword) {
                router.push(`/search/${keyword}`)
            }
        }

    }

    return (
        <div className="relative">
            <input
                placeholder="Search Anime..."
                className="w-full p-2 rounded focus:outline-none focus:ring-0"
                ref={searchRef}
                onKeyDown={handleSearch}
            />
            <button className="absolute top-2 end-2" onClick={handleSearch}>
                <MagnifyingGlass size={25} className=" text-color-dark" />
            </button>
        </div>
    )
}

export default InputSearch 
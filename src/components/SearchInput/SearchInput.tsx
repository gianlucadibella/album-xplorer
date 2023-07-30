import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"

export const SearchInput = () => {

    return (
        <div className="flex gap-2 bg-white p-2 text-xl rounded-lg border border-zinc-300 shadow-sm">
        <MagnifyingGlassIcon className="w-6 h-6 text-zinc-300"/>
        <input className="focus:outline-none w-56" 
              type="text" placeholder="Buscar..."/>
         
        </div>
    )

}
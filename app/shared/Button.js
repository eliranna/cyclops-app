const Button = ({children}) => {
    return (
        <div className="flex justify-center cursor-pointer">
            <div className="sm:w-1/2 sm:text-center inline-block space-x-2 rounded px-4 py-1.5 md:py-2 text-base font-semibold leading-7 text-white  ring-1 ring-zinc-600 hover:bg-white hover:text-zinc-900 duration-150 hover:ring-white hover:drop-shadow-cta">
                {children}
            </div>            
        </div>         
    )
}

export default Button
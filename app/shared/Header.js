"use client"

const Header = ({children}) => {
    return (
        <h1 className="py-4 text-5xl font-bold tracking-tight text-center text-transparent bg-gradient-to-t bg-clip-text from-zinc-100/50 to-white sm:text-7xl">
            {children}
        </h1>
    )
}

export default Header
"use client"

const Menu = ({items, onSelect}) => {
    return (
        <div className="text-gray rounded-md min-w-20 p-6 max-h-40 py-4 overflow-auto cursor-pointer text-center absolute border-solid border-2 border-white bg-black bg-gradient-to-tr from-zinc-900/50 to-zinc-700/30">
            {items.map(item => {
                return (
                    <div className="text-zinc-600 hover:text-white" onClick={() => onSelect(item)}>
                        {item.title}
                    </div>
                )
            })}
        </div>        
    )
}

export default Menu
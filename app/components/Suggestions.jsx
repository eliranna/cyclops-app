"use client"

const Suggestions = ({suggestions, onSelect}) => {
    return (
        <div className="text-gray w-80 max-h-40 py-4 overflow-auto cursor-pointer text-center absolute border-solid border-2 border-white bg-black bg-gradient-to-tr from-zinc-900/50 to-zinc-700/30">
            {suggestions.map(suggestion => {
                return (
                    <div className="text-zinc-600 hover:text-white" onClick={() => onSelect(suggestion)}>
                        {suggestion.title}
                    </div>
                )
            })}
        </div>        
    )
}

export default Suggestions
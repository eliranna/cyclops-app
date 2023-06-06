"use client"

import { useState, useEffect } from 'react'
import ReactChipInput from "react-chip-input"
import "./input.css";

const Input = ({chips, onChipRemove, options, onOptionSelection}) => {

    const [term, setTerm] = useState('')
    const [suggestions, setSuggestions] = useState([])

    useEffect(() => {
        if (!term) {
            setSuggestions(options)
            return
        }
        options && setSuggestions(options.filter(option => option.title.toLowerCase().startsWith(term.toLowerCase())))
    }, [term, options])

    const handleInput = (term) => {
        setTerm(term)
    }

    return (
        <div className="space-y-4">
            <div contentEditable={true} suppressContentEditableWarning="true" onInput={e => handleInput(e.target.value)}>
                <ReactChipInput
                    classes="chipinput"
                    chips={chips}
                    onRemove={index => onChipRemove(index)}
                />       
            </div>
            <div className="text-gray py-4 h-40 overflow-auto cursor-pointer text-center">
                {suggestions.map(suggestion => {
                    return (
                        <div className="text-zinc-600 hover:text-white" onClick={() => onOptionSelection(suggestion)}>
                            {suggestion.title}
                        </div>
                    )
                })}
            </div>
        </div>

    )
    
}

export default Input;
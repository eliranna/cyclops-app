"use client"

import { useState, useEffect } from 'react'
import ChipsInput from './ChipsInput'
import Suggestions from './Suggestions'

const Input = ({chips, onChipRemove, options, onOptionSelection}) => {

    const [term, setTerm] = useState('')
    const [suggestions, setSuggestions] = useState([])
    const [showSuggestions, setShowSuggestions] = useState(false)

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

    const handleOptionSelection = (suggestion) => {
        setShowSuggestions(false)
        onOptionSelection(suggestion)
    }

    return (
        <div className="space-y-4 relative">
            <ChipsInput chips={chips} onChipRemove={onChipRemove} onInput={handleInput} onFocus={() => setShowSuggestions(true)}/>
            {showSuggestions && (
                <Suggestions suggestions={suggestions} onSelect={handleOptionSelection}/>
            )}
        </div>

    )
    
}

export default Input;
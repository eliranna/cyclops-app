"use client"

import { useState, useEffect } from 'react'
import ChipsInput from './ChipsInput'
import SuggestionsMenu from '../components/SuggestionsMenu'

const AutoCompleteChipsInput = ({chips, onChipRemove, options, onOptionSelection}) => {

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
        setTerm('')
    }

    return (
        <div className="space-y-4 relative">
            <ChipsInput chips={chips} onChipRemove={onChipRemove} onInput={handleInput} onFocus={() => setShowSuggestions(true)}/>
            {showSuggestions && (
                <SuggestionsMenu suggestions={suggestions} onSelect={handleOptionSelection}/>
            )}
        </div>

    )
    
}

export default AutoCompleteChipsInput;
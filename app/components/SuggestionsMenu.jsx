"use client"

import Menu from '../shared/Menu'

const SuggestionsMenu = ({suggestions, onSelect}) => {
    return <Menu items={suggestions} onSelect={onSelect}/>
}

export default SuggestionsMenu
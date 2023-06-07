"use client"

import { useEffect, useState } from 'react'
import AutoCompleteChipsInput from '../shared/AutoCompleteChipsInput'
import { useMenuSuggestions } from '../hooks/useMenuSuggestions'
import { MENU_ITEM } from "types/menu-keywords.types";

const MenuInput = ({menu, onChange}) => {

    const [suggestions, setSuggestions] = useState([])
    const [values, setValues] = useState([])
    const computeSuggestions = useMenuSuggestions(menu)

    useEffect(() => {
        setSuggestions(computeSuggestions())
    }, [menu])

    useEffect(() => {
        setSuggestions(computeSuggestions(values[values.length - 1]))
        onChange(values.filter(item => item.type === MENU_ITEM))
    }, [values])

    const addValue = (addedValue) => {
        setValues([...values, addedValue])
    }

    const removeValue = (index) => {
        setValues(_ => values.filter((_ , i) => (i != index)))
    }

    return (
        <div>
            <div>
                <AutoCompleteChipsInput chips={values.map(value => value.title)} onChipRemove={removeValue} options={suggestions} onOptionSelection={addValue}/>    
            </div>  
        </div>
    )
    
}

export default MenuInput;
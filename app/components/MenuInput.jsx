"use client"

import { useEffect, useState } from 'react'
import Input from './Input'
import { useMenuSuggestions } from '../hooks/useMenuSuggestions'

const MenuInput = ({menu}) => {

    const [suggestions, setSuggestions] = useState([])
    const [values, setValues] = useState([])
    const computeSuggestions = useMenuSuggestions(menu)

    useEffect(() => {
        setSuggestions(computeSuggestions())
    }, [menu])

    useEffect(() => {
        setSuggestions(computeSuggestions(values[values.length - 1]));
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
                <Input chips={values.map(value => value.title)} onChipRemove={removeValue} options={suggestions} onOptionSelection={addValue}/>    
            </div>  
        </div>
    )
    
}

export default MenuInput;
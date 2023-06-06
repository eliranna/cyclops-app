"use client"

import { useEffect, useState } from 'react'
import Chips, { Chip } from 'react-chips'
import Input from './Input'

const KEYWORD_ITEM = {
    title: 'Menu Item',
    type: 'KEYWORD_ITEM'
}

const KEYWORD_AND = {
    title: 'And',
    type: 'KEYWORD_AND'
}

const KEYWORD_INGREDIENT = {
    title: 'Ingredient',
    type: 'KEYWORD_INGREDIENT'
}

const MenuInput = ({menu}) => {

    const [suggestions, setSuggestions] = useState([])
    const [values, setValues] = useState([])
    const [contextItem, setContextItem] = useState(null)

    useEffect(() => {
        setSuggestions([KEYWORD_ITEM])
    }, [menu])

    useEffect(() => {
        setSuggestions(computeSuggestions(values[values.length - 1]));
    }, [values])

    const computeSuggestions = (lastValue) => {
        if (!lastValue) return [KEYWORD_ITEM]
        if (lastValue.type === 'KEYWORD_ITEM') {
            return menu
        }
        if (lastValue.type === 'MENU_ITEM') {
            setContextItem(lastValue)
            return [KEYWORD_INGREDIENT, KEYWORD_AND]
        }
        if (lastValue.type === 'KEYWORD_INGREDIENT') {
            return contextItem.ingredients
        }
        if (lastValue.type === 'KEYWORD_AND') {
            return [KEYWORD_INGREDIENT, KEYWORD_ITEM]
        }
        if (lastValue.type === 'INGREDIENT') {
            return [KEYWORD_AND]
        }
    }

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
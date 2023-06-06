import { useState } from 'react';
import { 
    KEYWORD_ITEM_TYPE,
    KEYWORD_AND_TYPE, 
    KEYWORD_INGREDIENT_TYPE, 
    MENU_ITEM, 
    INGREDIENT, 
    KEYWORD_ITEM, 
    KEYWORD_INGREDIENT, 
    KEYWORD_AND 
} from '../../types/menu-keywords.types'

function useMenuSuggestions(menu) {

    const [contextItem, setContextItem] = useState(null)

    const computeSuggestions = (lastValue) => {
        if (!lastValue) return [KEYWORD_ITEM]
        if (lastValue.type === KEYWORD_ITEM_TYPE) {
            return menu
        }
        if (lastValue.type === MENU_ITEM) {
            setContextItem(lastValue)
            return [KEYWORD_INGREDIENT, KEYWORD_AND]
        }
        if (lastValue.type === KEYWORD_INGREDIENT_TYPE) {
            return contextItem.ingredients
        }
        if (lastValue.type === KEYWORD_AND_TYPE) {
            return [KEYWORD_INGREDIENT, KEYWORD_ITEM]
        }
        if (lastValue.type === INGREDIENT) {
            return [KEYWORD_AND]
        }
    }

    return computeSuggestions;
}

export { useMenuSuggestions }
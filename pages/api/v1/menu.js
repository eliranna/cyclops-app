import { NextResponse } from "next/server";
import menu from './menu.json'

export default async function handler(req) {
  const result = []
  for (const [key, value] of Object.entries(menu.MenuItem)) {
    result.push({
      type: 'MENU_ITEM',
      title: key,
      price: value,
      ingredients: menu.Ingredient[key].map(item => {
        return {
          type: 'INGREDIENT',
          title: item
        }
      })
    })
  }
  return NextResponse.json(result)
}

export const config = {
  runtime: "edge",
};

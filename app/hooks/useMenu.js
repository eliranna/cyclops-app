import { useState, useEffect } from 'react';
import { GET_MENU } from '../../util/api';

function useMenu() {

  const [menu, setMenu] = useState(null);

  const loadMenu = async () => {
    const res = await fetch(GET_MENU);
    if (!res.ok) {
      throw new Error(await res.text());
    }
    setMenu((await res.json()))
  }

  useEffect(() => { 
    loadMenu()
  }, []);

  return menu;
}

export { useMenu }
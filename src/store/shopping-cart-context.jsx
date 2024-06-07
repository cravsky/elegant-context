import { createContext } from 'react';

export const CartContext = createContext({
    items: []
}); // Naming in capital letters is a convention for context objects
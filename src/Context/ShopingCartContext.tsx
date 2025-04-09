"use client";
import { IChildren } from "@/Components/Container";
import { createContext, useState } from "react";

interface ICartItems{
    id : number
    qty : number
}

const ShopingCartContext = createContext({});

export function ShopingCartContextPro({children} : IChildren){

    const [CartItems , setCartItems] = useState<ICartItems[]>([]);

    return(
        <ShopingCartContext.Provider value={{CartItems}}>
            {children}
        </ShopingCartContext.Provider>
    )
}
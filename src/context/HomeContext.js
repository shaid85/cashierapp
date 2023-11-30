import React, { createContext, useContext } from 'react'

export const HomeContext = createContext({
    collectionres: "300",
    costres: "300",
})

export const HomeProvider = HomeContext.Provider

export const useHome = () => {
    return useContext(HomeContext)
}
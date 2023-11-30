import { useContext } from "react";
import { createContext } from "react";

export const CostContext = createContext({
    costs: [
        {
            id: Date.now(),
            cost: "300",
            player: "Shaid",
        }
    ],
    addCost: (cost) => {},
    deleteCost: (id) => {},
})

export const useCostContext = () => {
    return useContext(CostContext)
}

export const CostProvider = CostContext.Provider
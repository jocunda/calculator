import React, { createContext, useState } from "react"

const initalLightModeContextValue = {
    lightMode: false,
    toogleLightMode: () => { }
}
const LightModeContext = createContext<{
    lightMode: boolean;
    toogleLightMode: () => void;
}>(initalLightModeContextValue);

type Props = {
    children: React.ReactNode
}

function LightModeProvider({ children }: Props) {
    const [lightMode, setLightMode] = useState<boolean>(false);
    const toogleLightMode = () => {
        setLightMode(!lightMode);
    }

    return (
        <div>
            <LightModeContext.Provider value={{ lightMode, toogleLightMode }}>
                {children}
            </LightModeContext.Provider>
        </div>
    )
}

export { LightModeContext, LightModeProvider };
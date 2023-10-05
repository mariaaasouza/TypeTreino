import React, { memo } from "react"
import NavBar from "./componentes/NavBar"
import Conteudo from "./componentes/Conteudo"

const App = () => {
    return (
        <>
            <NavBar />
            <Conteudo />
        </>
    )
}

export default memo(App)
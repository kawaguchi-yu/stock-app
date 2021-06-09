import React,{FC} from "react"
import '../styles/global.css'

const App:FC = ({Component,pageProps}:any) => {
    return <Component {...pageProps} />
}

export default App
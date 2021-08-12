import React from 'react'
import './header.css'

const TextHeader = ({title}) => {
    return <h1 className="title">{title}</h1>
}

class Header extends React.Component{
    render(){
        return(
            <header className="header" id="header">
                <TextHeader title="Mi lista de Tareas"/>
            </header>
        )
    }
}

export default Header;
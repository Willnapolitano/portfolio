import React from 'react'
import Menu from '../menu/menu'

const Header = (props) => {
    return(
        <header>
            <div id="header">
                {props.children}
                <Menu />
            </div>
        </header>
    )
}

export default Header
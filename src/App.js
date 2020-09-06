import React from 'react'
import './style.scss'
import * as appStyle from './appStyle'
import Header from './header/header'
import Content from './content/content'

class App extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <appStyle.AppWrap>
                <Header/>
                <Content/>
            </appStyle.AppWrap>
        )
    }
}

export default App
import React from 'react'
import { Content } from './contentStyle'
import Cart from '../cart/cart'
import { contentData, ContentItem } from './contentData'

class content extends React.Component {
    constructor() {
        super()
        this.state = {
            addCart: false,
            content: contentData,
        }
    }

    addCart = () => {
        return (
            this.setState({
                addCart: !this.state.addCart
            })
        )
    }

    render() {
        const contentItems = this.state.content.map(item => <ContentItem onClick={this.addCart} key={item.id} item={item} />)
        return (
            <Content>
                <div className="contentDate">
                    <h5>Kamis, 13 Maret 2019</h5>
                </div>
                <div className="contentWrap">
                    {contentItems}
                </div>
                <Cart active={this.state.addCart.toString()} onClick={this.addCart} />
            </Content>
        );
    }
}

export default content
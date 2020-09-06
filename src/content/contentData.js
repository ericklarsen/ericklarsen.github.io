import React from 'react'

export function ContentItem(props) {
    return (
        <div className="contentItem">
            <img alt="makanan enak" src={props.item.img} />
            <div className="info">
                <div className="rate">
                    <p>4.5</p>
                    <div className="stars">
                        <i className="material-icons"> star</i>
                        <i className="material-icons"> star</i>
                        <i className="material-icons"> star</i>
                        <i className="material-icons"> star</i>
                        <i className="material-icons"> star_half</i>
                    </div>
                </div>
                <h3>{props.item.title}</h3>
                <p>{props.item.subTitle}</p>

                <div className="bottomArea">
                    <p>{props.item.price}</p>
                    <button onClick={() => props.onClick()}>Add <i className="material-icons"> add</i></button>
                </div>
            </div>
        </div>
    )
}

export const contentData = [
    {
        id: 1,
        title: "Roasted Chicken With Scramble Egg",
        subTitle: "by Kulina &bull; Uptown Lunch",
        price: "Rp 35,000",
        img: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=706&q=80",
    },
    {
        id: 2,
        title: "Roasted Chicken With Scramble Egg",
        subTitle: "by Kulina &bull; Uptown Lunch",
        price: "Rp 35,000",
        img: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=706&q=80",
    },
    {
        id: 3,
        title: "Roasted Chicken With Scramble Egg",
        subTitle: "by Kulina &bull; Uptown Lunch",
        price: "Rp 35,000",
        img: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=706&q=80",
    },
    {
        id: 4,
        title: "Roasted Chicken With Scramble Egg",
        subTitle: "by Kulina &bull; Uptown Lunch",
        price: "Rp 35,000",
        img: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=706&q=80",
    },
    {
        id: 5,
        title: "Roasted Chicken With Scramble Egg",
        subTitle: "by Kulina &bull; Uptown Lunch",
        price: "Rp 35,000",
        img: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=706&q=80",
    },
    {
        id: 6,
        title: "Roasted Chicken With Scramble Egg",
        subTitle: "by Kulina &bull; Uptown Lunch",
        price: "Rp 35,000",
        img: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=706&q=80",
    },
    {
        id: 7,
        title: "Roasted Chicken With Scramble Egg",
        subTitle: "by Kulina &bull; Uptown Lunch",
        price: "Rp 35,000",
        img: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=706&q=80",
    },
    {
        id: 8,
        title: "Roasted Chicken With Scramble Egg",
        subTitle: "by Kulina &bull; Uptown Lunch",
        price: "Rp 35,000",
        img: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=706&q=80",
    },
    {
        id: 9,
        title: "Roasted Chicken With Scramble Egg",
        subTitle: "by Kulina &bull; Uptown Lunch",
        price: "Rp 35,000",
        img: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=706&q=80",
    },
    {
        id: 10,
        title: "Roasted Chicken With Scramble Egg",
        subTitle: "by Kulina &bull; Uptown Lunch",
        price: "Rp 35,000",
        img: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=706&q=80",
    },
]
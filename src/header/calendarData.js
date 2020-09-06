import React from 'react'

export function DateItem(props){
    return (
        <button onClick = {() => props.onclick(props.item.date, props.item.disable)} className="dateItem" active={props.item.active.toString()} disable={props.item.disable.toString()} >
            <div className="info">
                <span className="day">{props.item.day}</span>
                <span className="date">{props.item.date}</span>
            </div>
        </button>
    )
}

export const calendarData = [
    {
        day: "SEN",
        date: "10",
        active : true,
        disable: false,
    },
    {
        day: "SEL",
        date: '11',
        active : false,
        disable: false,
    },
    {
        day: "RAB",
        date: '12',
        active : false,
        disable: false,
    },
    {
        day: "KAM",
        date: '13',
        active : false,
        disable: true,
    },
    {
        day: "JUM",
        date: '14',
        active : false,
        disable: false,
    },
    {
        day: "SAB",
        date: '15',
        active : false,
        disable: true,
    },
    {
        day: "MIN",
        date: '16',
        active : false,
        disable: true,
    },
    {
        day: "SEN",
        date: '17',
        active : false,
        disable: false,
    },
    {
        day: "SEL",
        date: '18',
        active : false,
        disable: false,
    },
    {
        day: "RAB",
        date: '19',
        active : false,
        disable: false,
    },
    {
        day: "KAM",
        date: '20',
        active : false,
        disable: false,
    },
    {
        day: "JUM",
        date: '21',
        active : false,
        disable: false,
    },
    {
        day: "SAB",
        date: '22',
        active : false,
        disable: true,
    },
    {
        day: "MIN",
        date: '23',
        active : false,
        disable: true,
    },
]
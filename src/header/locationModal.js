import React from 'react'

export const Location = (props) => {
    return (
        <div className="listWrap" active={props.active.toString()}>
            <div className="list">
                <div className="pin">
                    <i className="material-icons"> room</i>
                </div>
                <div className="text">
                    <h5>Kulina</h5>
                    <p>Jalan Tuludong Atas No. 28, Senayan, Kebayoran Bar...</p>
                </div>
            </div>

            <div className="list">
                <div className="pin">
                    <i className="material-icons"> room</i>
                </div>
                <div className="text">
                    <h5>Kulina</h5>
                    <p>Jalan Tuludong Atas No. 28, Senayan, Kebayoran Bar...</p>
                </div>
            </div>

            <div className="list">
                <div className="pin">
                    <i className="material-icons"> room</i>
                </div>
                <div className="text">
                    <h5>Kulina</h5>
                    <p>Jalan Tuludong Atas No. 28, Senayan, Kebayoran Bar...</p>
                </div>
            </div>
        </div>
    );
}

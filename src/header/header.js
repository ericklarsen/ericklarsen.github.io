import React from 'react'
import { Header, HeaderBtnBot, HeaderWrap } from './headerStyle'
import { calendarData, DateItem } from './calendarData'
import { Location } from './locationModal'
import { LocationWrap } from './locationStyle'

class header extends React.Component {
    constructor() {
        super()
        this.state = {
            lunch: "lunch active",
            dinner: "dinner",
            btnBotStatus: "active",
            locStatus: false,
            theposition: 0,
            calendar: calendarData,
            location: "",
            showLocation: false,
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
    }

    listenToScroll = () => {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop
        const scrolled = winScroll

        if (this.state.theposition < scrolled) {
            this.setState({
                btnBotStatus: "notActive",
                theposition: scrolled,
            })
        } else {
            this.setState({
                btnBotStatus: "active",
                theposition: scrolled,
            })
        }
    }

    handleMark = (date, disable) => {
        this.setState(prevState => {
            const calendarUpdate = prevState.calendar.map(item => {
                if (!disable) {
                    item.active = false
                    if (item.date === date && !item.disable) {
                        item.active = !item.active
                    }
                }
                return item
            })
            return ({
                calendar: calendarUpdate
            })
        })
    }

    btnLunch = () => {
        return (
            this.setState({
                lunch: "lunch active",
                dinner: "dinner"
            })
        )
    }

    btnDinner = () => {
        return (
            this.setState({
                lunch: "lunch",
                dinner: "dinner active"
            })
        )
    }

    btnLocation = () => {
        this.setState({
            locStatus: !this.state.locStatus
        })
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        }, () => {
            if (this.state.location.length > 3) {
                this.setState({
                    showLocation: true
                })
            } else {
                this.setState({
                    showLocation: false
                })
            }
        })
    }

    render() {
        const dateItems = this.state.calendar.map(item => <DateItem onclick={this.handleMark} key={item.date} item={item} />)
        return (
            <HeaderWrap>
                <LocationWrap className={this.state.locStatus.toString()}>
                    <div className="close">
                        <button onClick={this.btnLocation}>
                            <i className="material-icons"> close</i>
                        </button>
                    </div>
                    <h2 className="title">Cek makanan yang tersedia di lokasi kamu!</h2>
                    <div className="input">
                        <i className="material-icons"> room</i>
                        <input type="text" name="location" value={this.state.location} onChange={this.handleChange} placeholder="Cari alamatmu disini" />
                    </div>
                    <Location active={this.state.showLocation} />
                    <div className="locationFooter">
                        <p>powered by Google </p>
                    </div>
                </LocationWrap>
                <div className="overlay2" active={this.state.locStatus.toString()}></div>
                <Header>
                    <div className="headerNav">
                        <button>
                            <span className="material-icons"> arrow_back</span>
                        </button>
                        <div className="navSideRight">
                            <div className="upTxt">
                                <p>Alamat Pengantaran</p>
                            </div>
                            <button onClick={this.btnLocation} className="botTxt">
                                <p>Tokopedia Tower</p>
                                <span className="material-icons"> keyboard_arrow_down</span>
                            </button>
                        </div>
                    </div>
                    <div className="headerDate">
                        {dateItems}
                    </div>
                </Header>
                <HeaderBtnBot className={this.state.btnBotStatus}>
                    <button onClick={this.btnLunch} className={this.state.lunch}>Lunch</button>
                    <button onClick={this.btnDinner} className={this.state.dinner}>Dinner</button>
                </HeaderBtnBot>
            </HeaderWrap>
        )
    }
}

export default header
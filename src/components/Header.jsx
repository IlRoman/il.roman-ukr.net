import React from 'react'
import { getUserData } from '../gateWays'

class Header extends React.Component {
    state = {
        value: '',
    }

    handleChange = (element) => {
        this.setState({
            value: element.target.value
        })
    }

    onSubmit = (e) => {
        if (e.key === 'Enter') {
            getUserData(this.state.value)
                .then(res => console.log(res))
            // .catch(err => console.log(err))
        }
    }

    render() {
        return (
            <div className="header" >
                <div className="header-input-container">
                    <i className="fas fa-search"></i>
                    <input
                        type="text"
                        className="header-input-container__input"
                        value={this.state.value}
                        onChange={this.handleChange}
                        onKeyPress={this.onSubmit}
                    ></input>
                </div>
            </div>
        )
    }
}

export default Header;

const defaultValue = '';
export const MyContext = React.createContext(defaultValue);
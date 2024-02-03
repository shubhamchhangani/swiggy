import React from "react";

class UserClass extends React.Component{
    constructor(){
        super();
        this.state = {
            count: 0,
        }
    }
    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count+1,
                    }
                    )
                }}>Plus</button>
                <h3 onClick={() => {
                    this.setState({
                        count: this.state.count -1,
                    })
                }}>Minus</h3>
                <button onClick={() => {
                    this.setState({
                        count: 0,
                    })
                }}>Reset</button>
            </div>
        )
    }
}

export default UserClass;
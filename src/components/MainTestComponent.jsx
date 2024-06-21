import React from 'react'

class MainTestComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {isDefined: false}
    }

    handleClick(event){
        if (this.state.isDefined){
            this.setState({isDefined: false})
        } else {
            this.setState({isDefined: true})
        }
    }

    render() {
        const status = this.state.isDefined ? 'Defined' : 'Not defined';
        return (
            <h1 onClick={this.handleClick.bind(this)}> Тестовый компонент: {status}</h1>
        );
    }
}

export default MainTestComponent;

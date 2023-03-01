import {Component} from 'react'

class ClassComponent extends Component {
    render(){
        console.log(this.props)
        return(
            <p style={{color: this.props.color}}>Hello</p>
        )
    }
}

export default ClassComponent
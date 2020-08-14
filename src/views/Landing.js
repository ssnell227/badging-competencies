import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Landing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            background: false,
            input: '',
            redirect: false
        }

        this.toggleBackground = this.toggleBackground.bind(this)
        this.handleTextChange = this.handleTextChange.bind(this)
        this.redirect = this.redirect.bind(this)
    }

    toggleBackground() {
        this.setState({
            background: !this.state.background
        })
    }

    handleTextChange (e) {
        this.setState({
            input: e.target.value
        })
    }

    redirect(e) {
        e.preventDefault()
        this.setState({
            redirect: true
        })
    }

    componentWillUnmount() {
        this.setState({
            background: false,
            input: '',
            redirect: false
        })
    }

    render() {
        return (
            <div>
                <button className={`${this.state.background && 'blue'}`} onClick={this.toggleBackground}>Toggle me blue!</button>
                <form>
                    <span>for match.params: </span>
                    <input onChange={this.handleTextChange} value={this.state.input} type='text'/>
                    <br/>
                    <input onClick={this.redirect}type='submit' value='go to other examples' />
                </form>
                {this.state.redirect && <Redirect to={`/examples/${this.state.input}`}/>}
            </div>
        )
    }
}

export default Landing
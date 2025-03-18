import React, { Component } from 'react'
class UpvoteList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            upvotes: [],

        }
    }

    // Making upvotes persist through reloads requires loading from localStorage
    componentDidMount () {
         const savedUpvotes = localStorage.getItem(`upvotes.${this.props.index}`)
         if (savedUpvotes) {
             this.setState({ upvotes: JSON.parse(savedUpvotes) })
         }  
    }

    // Saving upvotes to localStorage every time the state changes
    componentDidUpdate () {
        localStorage.setItem(`upvotes.${this.props.index}`, JSON.stringify(this.state.upvotes))
    }

    
    // Add upvotes by checking the length of the prevState array then adding a new element to it
    addUpvotes = () => {
        this.setState((prevState) => ({
            upvotes: [...prevState.upvotes, prevState.upvotes.length + 1]
        }))
    }

    render () {
        const {active, onToggleActive} = this.props
        return (
            <div
            className={`${active ? 'active' : 'inactive'} ${'upvote-list-container'}`}
            role="container"
            >
                <ul className={'upvote-list'} onClick={onToggleActive} role="list">
                    {this.state.upvotes.map((index) => {
                        return <li className={'upvotes'} key={index}><span className={'upvote-icon'}>&#8593;</span></li>
                    })}
                </ul>
                <button className={'upvote-list-button'} onClick={this.addUpvotes}>
                    <span>+</span>
                </button>
            </div>
        );
    }
}

export default UpvoteList;
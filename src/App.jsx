import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'
import './index.css'

export default class App extends Component {
    render() {
        return (
            <div className="root">
                <div class="container">
                    <Search />
                    <List />
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class List extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="card">
                            <a href="https://github.com/reactjs" target="_blank" rel="noreferrer">
                            <img src="https://avatars.githubusercontent.com/u/6412038?v=3" alt={'atguigu'} style={{width: '100px'}}/>
                            </a>
                            <p className="card-text">reactjs</p>
                        </div>
                    <div className="card">
                            <a href="https://github.com/reactjs" target="_blank" rel="noreferrer">
                            <img src="https://avatars.githubusercontent.com/u/6412038?v=3" alt={'atguigu'} style={{width: '100px'}}/>
                            </a>
                            <p className="card-text">reactjs</p>
                        </div>
                    <div className="card">
                            <a href="https://github.com/reactjs" target="_blank" rel="noreferrer">
                            <img src="https://avatars.githubusercontent.com/u/6412038?v=3" alt={'atguigu'} style={{width: '100px'}}/>
                            </a>
                            <p className="card-text">reactjs</p>
                        </div>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {
    //初始化状态
    state={
        users:[]
    };
    render() {
        return (
            <div>
                <div className="row">
                    {
                        this.state.users.map((userObj)=>{
                            return(
                                <div className="card" key={userObj.login}>
                                    <a href={userObj.html_url} target="_blank" rel="noreferrer">
                                    <img src={userObj.avatar_url} alt={'atguigu'} style={{width: '100px'}}/>
                                    </a>
                                    <p className="card-text">{userObj.login}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
    componentDidMount(){
        //订阅消息，用于接收search发布的数据PubSub.publish();
        this.pid = PubSub.subscribe('Data',(_,data)=>{
            console.log('接收到的数据',data);
            //存起来初始化
            this.setState({users:data});
        });
    };
    componentWillUnmount(){
        PubSub.unsubscribe(this.pid);
    };
}

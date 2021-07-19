import React, { Component } from 'react'
import axios from 'axios';
import PubSub from 'pubsub-js';
export default class Search extends Component {
    render() {
        return (
            <div>
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search Github Users</h3>
                    <div>
                        <input type="text" placeholder="enter the name you search" ref ={c=>this.keyword=c}/>&nbsp;
                        <button onClick={this.search}>Search</button>
                    </div>
                </section>
            </div>
        )
    }
    search=()=>{
        //获取用户输入的搜索框子value作为搜索关键字
        const {value}= this.keyword;

        //axios
        // axios.get('https://api.github.com/search/users?q=${value})此处我用的辣鸡拼接（太low），优化为下↓
        axios.get('https://api.github.com/search/users',{params:{q:value}}).then(
            response => {
                //console.log(response.data.items);
                PubSub.publish('Data',response.data.items)
            },error =>{
                console.log(error);
            })
    };
}

import React, { Component } from "react";
import * as useractions from "../redux/actions";
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';


class SearchForm extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            user: { fname: 'Ram', age: 10 },
            //users:[],
            //sorting_flag: 0
        };
        this.updateModel = this.updateModel.bind(this);
    }
    render() {
        return (
            <div>
                <input name='fname' value={this.state.user.fname} onChange={this.updateModel}></input>
                <input name='age' value={this.state.user.age} onChange={this.updateModel}></input>
                <input name='gender' type='radio' value='Male' onChange={this.updateModel}/>Male
                <input name='gender' type='radio' value='Female' onChange={this.updateModel}/>Female

                <button onClick={() => {
                    this.props.actions.saveAction(this.user);
                    this.setState({});
                    {/* this.state.users.push(this.state.user);
                    this.setState({
                        users: this.state.users
                    }); */}
                }}>search</button>
                {/* <button onClick={() => {
                    
                    this.state.users.sort((user1,user2)=>this.sorting_flag ? user1.age-user2.age: user2.age-user1.age)
                        this.setState({
                            users: this.state.users
                        })
                       
                       this.sorting_flag= !this.sorting_flag
                        }
                       }>sort</button> */}
                {/* <Counter count={this.state.users.length}></Counter> */}
                <ol>
                    {this.props.users.map((user,index) => <li>{user.fname}, {user.age}, {user.gender}
                    <button onClick={()=>{
                        this.props.users.splice(index,1);
                        {/* this.setState({
                            users: this.state.users
                        }) */}
                        }
                    }>X</button></li>)}
                </ol>
            </div>
        );
    }

    updateModel(event) {
        this.setState({
            user: Object.assign({} , this.state.user, { [event.target.name]: event.target.value })
        });
        // this.state.fname = event.target.value;
    }
}

function mapDispatchToProps(dispatch){
    console.log(useractions);
    return{
        actions: bindActionCreators(useractions,dispatch)
    };
}
function mapReduxStateToProps(reduxState){
  console.log('mapStateToprops', reduxState);
  return{
      users: reduxState.users
  }
}
export default connect(mapReduxStateToProps, mapDispatchToProps)(SearchForm);
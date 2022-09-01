import * as React from 'react';

interface User{
    name:string;
    age:number;
}

interface UserSearchProps{
    users: User[]
}

interface UserSearchState{
    name:string;
    user:User | undefined
}

class UserSearch extends React.Component<UserSearchProps>{
  state: UserSearchState = {
    name:'',
    user:undefined
  };

  onClick = () => {
    const foundUser = this.props.users.find(((user) => user.name === this.state.name))
    this.setState({user:foundUser})
  }


  render(){
    const {name,user} = this.state;

    return (
        <div>
            <input value={name} onChange={e =>this.setState({name:e.target.value})} />
            <button onClick={this.onClick}>Find User</button>
            <div>
                {user?.name}  {/*{user && user.name}*/}
                {user?.age} {/*{user && user.age}*/}
            </div>
        </div>
    )
    }
}

export default UserSearch
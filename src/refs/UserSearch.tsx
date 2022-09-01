import * as React from 'react';

const users = [
    {name:'Sarah',age:20},
    {name:'Alex',age:20},
    {name:'Michael',age:20}
];

const UserSearch: React.FC = () =>{
    const inputRef = React.useRef<HTMLInputElement | null>(null);
    const [name,setName] = React.useState('');
    const [user,setUser] = React.useState<{name:string,age:number} | undefined>();

    React.useEffect(()=>{
        if(!inputRef.current){
            return;
        }
        inputRef.current.focus();
    },[]);
    const onClick = () =>{
        const foundUser = users.find(((user) => user.name === name))
        setUser(foundUser)
    };
    return (
        <div>
            User Search
            <input 
                ref={inputRef} 
                value={name} 
                onChange={e =>setName(e.target.value)} 
            />
            <button onClick={onClick}>Find User</button>
            <div>
                {user?.name}  {/*{user && user.name}*/}
                {user?.age} {/*{user && user.age}*/}
            </div>
        </div>
    )
};

export default UserSearch;
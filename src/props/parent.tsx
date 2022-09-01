
import {ChildAsFC} from './child';

const Parent = () =>{
    return (
    <ChildAsFC color="blue" onClick={() =>{console.log("Clicked")}}>
    </ChildAsFC>)
};

export default Parent;
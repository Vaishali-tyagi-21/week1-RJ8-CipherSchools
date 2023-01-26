import React, {Component} from 'react';
import './test.css'; // importing external css file

//-----------------Functional Component-----------------//

//Functional Component

// const Test = () => {
//     return (
//         <div>
//             <h1>My Name is Vaishali</h1>
//         </div>
//     )
// }


//-----------------Adding CSS in JSX-----------------//

//Another way to write the above code is as follows:
//class based component

// class Test extends Component { //Render()
//     render() {
//         return ( // adding css in jsx is different from html here we create an object and pass it as a second argument to the div
//             <div>
//                 <h1 id="testId"
//                 style={{
//                         backgroundColor: 'yellow',
//                     }
//                 } >My Name is Vaishali</h1>
//             </div>
//         )
//     }
// }

//-----------------Adding If else Button -----------------//

class Test extends Component {
    state = {isLoggedIn : false};
    render() {
        return (
            <div>
                {!this.state.isLoggedIn ? 
                (<h1>You are not Logged In !</h1>
                ): ( <h1>Congratulations! You are Logged In</h1>
                )}
                <button 
                onClick ={(e)=> this.setState({isLoggedIn : !this.state.isLoggedIn})}>
                Log In
                </button>
            </div>
        );
    }
}



export default Test;
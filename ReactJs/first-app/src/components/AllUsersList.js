import React from "react";
import UserDetails from "./UserDetails";

const AllUserList = () => {
  let AllUsers = [
    { name: "John", email: "john@email.com", phone: "+91 03298579845" },
    { name: "shreyus", email: "shreyus@email.com", phone: "+91 57293845439" },
    { name: "Alex", email: "Alex@email.com", phone: "+91 5729384329" },
  ];

//   let array = [
//     <UserDetails user={AllUsers[0]} />,
//     <UserDetails user={AllUsers[1]} />,
//     <UserDetails user={AllUsers[2]} />,
//   ];

//-----using map// 
let array = AllUsers.map((user , index)=> (
    <UserDetails key={index} user={user} />
));
// we can add tis directly to <div></div> also by removing {array}
//----------------------------//
  return (
    <div>
      {/* <UserDetails user={AllUsers[0]}/>
        <UserDetails user={AllUsers[1]}/>
        <UserDetails user={AllUsers[2]}/> */}

      {array}
    </div>
  );
};

export default AllUserList;

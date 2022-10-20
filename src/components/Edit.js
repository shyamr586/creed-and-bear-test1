import React, { useEffect, useState, useContext } from "react";

const Edit = (props) => {
  

  const [dummyState, setDummyState] = useState(props.dummy);
  const [fName, setFName] = useState(props.dummy[0].first_name);
  const [lName, setLName] = useState(props.dummy[0].last_name);
  const [email, setEmail] = useState(props.dummy[0].email);
  const [avatar, setAvatar] = useState(props.dummy[0].avatar);
  const id = props.dummy[0].id;

  function handleEdit(){
    setDummyState([])
  }

  return (
    <div>
      <input data-testid="fName" value={fName} onChange={(e) => setFName(e.target.value)}></input>
      <input data-testid="lName" value={lName} onChange={(e) => setLName(e.target.value)}></input>
      <input data-testid="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
      <input data-testid="avatar" value={avatar} onChange={(e) => setAvatar(e.target.value)}></input>
      <button data-testid="button" onClick={props.handleEdit}></button>
    </div>
  );
};

export default Edit;

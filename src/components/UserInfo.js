import React from "react";
function UserInfo(props) {
  return (
    <p key={props.id}>
      <strong>Name:</strong> {props.name}, <strong>Email:</strong> {props.email}
      , <strong>Website:</strong> {props.website}
    </p>
  );
}
export default UserInfo;

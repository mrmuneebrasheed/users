import React from "react";
function UserInfo(props) {
  return (
    <li key={props.id}>
      <a href={props.id}>
        <strong>Name:</strong> {props.name}, <strong>Email:</strong>{" "}
        {props.email}, <strong>Website:</strong> {props.website}
      </a>
    </li>
  );
}
export default UserInfo;

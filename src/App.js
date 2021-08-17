import "./App.css";
import users from "./users.json";
import UserInfo from "./components/UserInfo";
import Counter from "./components/Counter";
import { useEffect, useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    const filteredList = users.filter((user, index) => {
      return index < number;
    });
    setUsersList(filteredList);
    console.log(number);
  }, [number]);

  const decrement = () => {
    if (number === 0) return;

    setNumber((prevNum) => {
      return prevNum - 1;
    });
    // setUsersList(filteredList);
  };
  const increment = () => {
    if (number === 10) return;

    setNumber((prevNum) => {
      return prevNum + 1;
    });
    // setUsersList(filteredList);
  };

  return (
    <div>
      <Counter
        decrement={decrement}
        increment={increment}
        setNumber={setNumber}
        number={number}
      />
      <div className="container">
        <ul>
          {usersList.map((user) => {
            return (
              <UserInfo
                id={user.id}
                name={user.name}
                email={user.email}
                website={user.website}
              ></UserInfo>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;

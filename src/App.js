import "./App.css";
import users from "./users.json";
import UserInfo from "./components/UserInfo";
import Counter from "./components/Counter";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
      <Router>
        <Switch>
          <Route path="/all">
            <div className="container">
              <ul>
                {users.map((user) => {
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
          </Route>
          <Route path="/1">
            <div className="container">
              <ul>
                <UserInfo
                  id={users[0].id}
                  name={users[0].name}
                  email={users[0].email}
                  website={users[0].website}
                ></UserInfo>
              </ul>
            </div>
          </Route>
          <Route path="/2">
            <div className="container">
              <ul>
                <UserInfo
                  id={users[1].id}
                  name={users[1].name}
                  email={users[1].email}
                  website={users[1].website}
                ></UserInfo>
              </ul>
            </div>
          </Route>
          <Route path="/3">
            <div className="container">
              <ul>
                <UserInfo
                  id={users[2].id}
                  name={users[2].name}
                  email={users[2].email}
                  website={users[2].website}
                ></UserInfo>
              </ul>
            </div>
          </Route>
          <Route path="/4">
            <div className="container">
              <ul>
                <UserInfo
                  id={users[3].id}
                  name={users[3].name}
                  email={users[3].email}
                  website={users[3].website}
                ></UserInfo>
              </ul>
            </div>
          </Route>
          <Route path="/5">
            <div className="container">
              <ul>
                <UserInfo
                  id={users[4].id}
                  name={users[4].name}
                  email={users[4].email}
                  website={users[4].website}
                ></UserInfo>
              </ul>
            </div>
          </Route>
          <Route path="/6">
            <div className="container">
              <ul>
                <UserInfo
                  id={users[5].id}
                  name={users[5].name}
                  email={users[5].email}
                  website={users[5].website}
                ></UserInfo>
              </ul>
            </div>
          </Route>
          <Route path="/7">
            <div className="container">
              <ul>
                <UserInfo
                  id={users[6].id}
                  name={users[6].name}
                  email={users[6].email}
                  website={users[6].website}
                ></UserInfo>
              </ul>
            </div>
          </Route>
          <Route path="/8">
            <div className="container">
              <ul>
                <UserInfo
                  id={users[7].id}
                  name={users[7].name}
                  email={users[7].email}
                  website={users[7].website}
                ></UserInfo>
              </ul>
            </div>
          </Route>
          <Route path="/9">
            <div className="container">
              <ul>
                <UserInfo
                  id={users[8].id}
                  name={users[8].name}
                  email={users[8].email}
                  website={users[8].website}
                ></UserInfo>
              </ul>
            </div>
          </Route>
          <Route path="/10">
            <div className="container">
              <ul>
                <UserInfo
                  id={users[9].id}
                  name={users[9].name}
                  email={users[9].email}
                  website={users[9].website}
                ></UserInfo>
              </ul>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

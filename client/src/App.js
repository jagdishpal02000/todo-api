import { useEffect, useRef, useState } from "react";
// import Task from "./task";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userInput, setUserInput] = useState("");
  const enteredTask = useRef(null);

  const getAllTasks = async () => {
    try {
      const resp = await axios.get("http://localhost:5000/api/v1/tasks/");
      console.log(resp.data);
      return resp.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/tasks/")
      .then(function (response) {
        // handle success
        return response.data;
      })
      .then((data) => {
        console.log(data);
        setTasks(data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return loading ? (
    <h1>loading</h1>
  ) : (
    <>
      <h1>todo</h1>
      {tasks.map((task) => {
        return <h2>{task.name}</h2>;
      })}
    </>
  );
};

export default App;

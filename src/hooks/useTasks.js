import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useTasks = () => {
    const [tasks, setTasks] = useState([]);

    const [user] = useAuthState(auth);

    const email = user.email;

    useEffect(() => {

        fetch(`https://upper-parliament-00286.herokuapp.com/tasks?email=${email}`)
            .then(res => res.json())
            .then(data => setTasks(data));

    }, [tasks, email])

    return [tasks, setTasks];
};

export default useTasks;
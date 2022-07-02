import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";


const useCompleteTasks = () => {
    const [completeTasks, setCompleteTasks] = useState([]);

    const [user] = useAuthState(auth);

    const email = user.email;

    useEffect(() => {

        fetch(`https://upper-parliament-00286.herokuapp.com/complete?email=${email}`)
            .then(res => res.json())
            .then(data => setCompleteTasks(data));

    }, [completeTasks, email])

    return [completeTasks, setCompleteTasks];
};

export default useCompleteTasks;
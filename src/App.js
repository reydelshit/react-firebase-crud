import {useState, useEffect} from 'react';
import {db} from './firebase-config';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';

function App() {

  const [name, setName] = useState(null);
  const [age, setAge] = useState(0);
  const [users, setUsers] = useState([]);
  const usersCollection = collection(db, "users");

  useEffect(() => {

    const getData = async () => {
      const response = await getDocs(usersCollection);
      setUsers(response.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }

    getData();
  }, [])
  
  const createUser = async () => {
    await addDoc(usersCollection, {name, age: Number(age)});
  }

  const updateUser = async (id, age) => {
    
    const userDoc = doc(db, "users", id);
    const newAge = {age: age + 1};
    await updateDoc(userDoc, newAge);
  }

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  }


  return (
    <div className="App">
      <div style={{marginBottom: '5rem'}}>
        <input placeholder='name' type="text" onChange={(e) => setName(e.target.value)}/>
        <input placeholder='age' type="number" onChange={(e) => setAge(e.target.value)}/>
        <button onClick={createUser}>Create Users</button>
      </div>
    <div>

    </div>
      {users.map((user) => {
        const {name, age, id} = user;
        return (
          <div key={id}>
            <h1>{name}</h1>
            <p>{age}</p>
            <button onClick={() => updateUser(id, age)}>Increment Age</button>
            <button onClick={() => deleteUser(id)}>Delete</button>
          
          </div>
        )
      })}
    </div>
  );
}

export default App;

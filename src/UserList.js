import React, {useState,useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
const UserList = () => {
  const [user, setUser] = useState([]);
 // const url='https://jsonplaceholder.typicode.com/users';
 useEffect(() => {
    const fetchData = async () => {
        const data = await axios.get("https://jsonplaceholder.typicode.com/users")
        .then((data) => {
            setUser(data.data);
        })
        .catch((err) => {
            console.log(err);
        })
        
    };
   fetchData();
 }, []);
 //console.log(user);
 

  return (
    <div>
     <h1 className="list">LISTE DES UTILISATEURS </h1>
      {
        user.map((users, index) => (
            
            <div className="container-fluid">
            <div className="row">
            <h1>{`${users.name} ${users.username}`}</h1>
            <div className="col-sm-6">
            <p>{`EMAIL: ${users.email}`}</p>
            <p>{`PHONE: ${users.phone}`}</p>
            <p>ADRESS</p>
            <p>{`STREET: ${users.address.street}`}</p>
            <p>{`SUITE: ${users.address.suite}`}</p>
            <p>{`ZIPCODE: ${users.address.zipcode}`}</p>
            </div> 
            <div className="col-sm-5">
            <p>{`LAT, LNG: ${users.address.geo.lat} ${users.address.geo.lng}`}</p>
            <p>{`WEBSITE: ${users.website}`}</p>
            <p>COMPANY</p>
            <p>{`NAME: ${users.company.name}`}</p>
            <p>{`CATCHPHARE: ${users.company.catchPhare}`}</p>
            <p>{`BS: ${users.company.bs}`}</p>
            </div>
            </div>
           </div>
           
           ))
      }
    </div>
  );
 }
 export default UserList;
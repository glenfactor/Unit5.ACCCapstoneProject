import { useEffect, useState } from 'react';

const Product_URL = "https://fakestoreapi.com";

export default function UserList() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(`${Product_URL}/users`);
        const data = await response.json();
        console.log('API Response:', data);
        setUserList(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Username</th>
            <th>Password</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>City</th>
            <th>Street</th>
            <th>Number</th>
            <th>Zipcode</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Version</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((userData) => (
            <tr key={userData.id}>
              <td>{userData.id}</td>
              <td>{userData.email}</td>
              <td>{userData.username}</td>
              <td>{userData.password}</td>
              <td>{userData.name.firstname}</td>
              <td>{userData.name.lastname}</td>
              <td>{userData.phone}</td>
              <td>{userData.address.city}</td>
              <td>{userData.address.street}</td>
              <td>{userData.address.number}</td>
              <td>{userData.address.zipcode}</td>
              <td>{userData.address.geolocation.lat}</td>
              <td>{userData.address.geolocation.long}</td>
              <td>{userData.__v}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
          }  
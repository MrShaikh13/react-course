const App = () => {
  const user = {
    userNamr: 'Sarthak',
    age: 18,
    city: "Bhopal"
  }
  const user1 = {
    userName: "Musharraf",
    age: 22,
    city: "Delhi"
  }

  localStorage.setItem("user1", JSON.stringify(user1))
  localStorage.setItem("user", JSON.stringify(user))

  const userresive = JSON.parse(localStorage.getItem("user"));
  console.log(userresive);
  return <div>App</div>;
};

export default App;

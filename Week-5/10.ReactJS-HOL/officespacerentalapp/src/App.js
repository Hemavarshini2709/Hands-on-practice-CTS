import './App.css';
import officeImage from './office.jpeg';

function App() {

  const office = {
    Name: "DBS Business Center",
    Rent: 55000,
    Address: "Chennai"
  };

  const officeList = [
    {
      Name: "DBS Business Center",
      Rent: 55000,
      Address: "Chennai"
    },
    {
      Name: "Tech Park",
      Rent: 75000,
      Address: "Bangalore"
    },
    {
      Name: "Smart Workspace",
      Rent: 45000,
      Address: "Hyderabad"
    },
    {
      Name: "Corporate Hub",
      Rent: 90000,
      Address: "Mumbai"
    }
  ];

  return (
    <div className="App">

      <h1>Office Space Rental App</h1>

      {/* Office Image */}
      <img
        src={officeImage}
        alt="Office Space"
        width="400"
        height="250"
      />

      <h2>Office Details</h2>

      <p><b>Name:</b> {office.Name}</p>

      <p
        style={{
          color: office.Rent < 60000 ? "red" : "green"
        }}
      >
        <b>Rent:</b> Rs. {office.Rent}
      </p>

      <p><b>Address:</b> {office.Address}</p>

      <hr />

      <h2>Office Space List</h2>

      {
        officeList.map((item, index) => (

          <div key={index} className="card">

            <h3>{item.Name}</h3>

            <p
              style={{
                color: item.Rent < 60000 ? "red" : "green"
              }}
            >
              <b>Rent:</b> Rs. {item.Rent}
            </p>

            <p><b>Address:</b> {item.Address}</p>

          </div>

        ))
      }

    </div>
  );
}

export default App;
function FlightDetails() {
    return (
        <div>
            <h2>Flight Details</h2>

            <table
    border="1"
    cellPadding="10"
    style={{ margin: "20px auto", borderCollapse: "collapse" }}
>
                <thead>
                    <tr>
                        <th>Flight Name</th>
                        <th>Source</th>
                        <th>Destination</th>
                        <th>Fare</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Air India</td>
                        <td>Chennai</td>
                        <td>Delhi</td>
                        <td>₹6500</td>
                    </tr>

                    <tr>
                        <td>IndiGo</td>
                        <td>Bangalore</td>
                        <td>Mumbai</td>
                        <td>₹5200</td>
                    </tr>

                    <tr>
                        <td>SpiceJet</td>
                        <td>Hyderabad</td>
                        <td>Kolkata</td>
                        <td>₹4800</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default FlightDetails;
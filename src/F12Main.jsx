const tableHeaderStyle = {
  backgroundColor: "#f2f2f2",
  padding: 8,
  border: "1px solid #ddd",
}

const tableCellStyle = {
  padding: 8,
  border: "1px solid #ddd",
  color: "blue",
}

export default function F12Main() {
  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ marginBottom: 20, fontSize: 20 }}>Page List</h1>
      <table style={{ borderCollapse: 'collapse', border: '1px solid #ddd' }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>URL</th>
            <th style={tableHeaderStyle}>Page</th>
          </tr>
        </thead>
        <tbody>
<tr>
            <td style={tableCellStyle}><a href='/DashboardAdmin'>/DashboardAdmin</a></td>
            <td style={tableCellStyle}><a href='/DashboardAdmin'> Dashboard-Admin</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/Form'>/Form</a></td>
            <td style={tableCellStyle}><a href='/Form'>Form_</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/StatisticsDetails'>/StatisticsDetails</a></td>
            <td style={tableCellStyle}><a href='/StatisticsDetails'>Statistics (Details)</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/StatisticsHistory'>/StatisticsHistory</a></td>
            <td style={tableCellStyle}><a href='/StatisticsHistory'>Statistics (History)</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/TableTemplate'>/TableTemplate</a></td>
            <td style={tableCellStyle}><a href='/TableTemplate'>Table-Template</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/VehiclesList'>/VehiclesList</a></td>
            <td style={tableCellStyle}><a href='/VehiclesList'>Vehicles-List</a></td>
          </tr>
</tbody>
      </table>
    </div>
  );
}
import React from 'react'
import Table from 'react-bootstrap/Table'
import "./Email.css"

function Email() {
    return (
        <div className="email">
            <div className="email__header">
                <h1>This is email Section</h1>
            </div>
            <div>
            <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Message</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@mdo</td>
                  </tr>
                  
                </tbody>
              </Table>
            </div>
            
        </div>
    )
}

export default Email

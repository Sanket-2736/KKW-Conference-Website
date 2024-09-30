import React from 'react'
import './Registration.css'
import { tableData } from '../../assets/assets'

function Registration() {
  return (
    <>
      <div className="registration" id="registration">
        <div className="paper-presentation">
          <h2>PAPER PRESENTATION</h2>
          <ul>
            <li>The conference hall at the venue will be equipped with a laptop having a USB port. Presenters are required to bring their presentation as a hard copy and PPT on a pen drive and save it on the laptop before the presentation.</li>
            <li>The time allotted for a presentation is 15 minutes including 5 minutes of Question and Answer session.</li>
          </ul>
        </div>
        <div className="registration-fees">
          <h2>REGISTRATION FEES</h2>
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>IEEE/ CSI/ IET/ ISTE Members</th>
                <th>Non-Members</th>
                <th>International Members</th>
              </tr>
            </thead>
            <tbody>
              {
                tableData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.category}</td>
                    <td>{item.members}</td>
                    <td>{item.nonMembers}</td>
                    <td>{item.internation}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        <div className="payment-mode">
          <h2>PAYMENT MODE</h2>
          <ul>
            <li>The mode of payment and payment guidelines will be communicated to the authors on acceptance of the paper for oral and poster presentation.</li>
            <li>Selected papers from the conference will be considered for publication in reputable Springer journals and will be indexed in Scopus. Please note the following details regarding publication:Authors of selected papers will be required to pay additional charges for the publication. These charges cover publication processing fees, including indexing, formatting, and other editorial services.</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Registration

import React from 'react';
import './Committee.css';
import { InternationalMembers, LocalAdvisoryCommittee } from '../../assets/assets.js';
import { OrganisingCommittee } from '../../assets/assets.js';
import { technicalMembers } from '../../assets/assets.js';

function Committee() {
  return (
    <>
      <div className="committee">
        {/* International Members Section */}
        <div className="organising-committee m-top">
          {/* this is the most imp section */}
          {
            OrganisingCommittee.map((item, index) => {
              return (
                <div key={index} className="member-cards-div">
                  <div className="member-img">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="member-decription">
                    <h2>{item.post}</h2>
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="international-committee-details m-top">
          <h2>INTERNATIONAL COMMITTEE MEMBERS</h2>
          <div className="members-grid">
            {
              InternationalMembers.map((item, index) => (
                <div key={index} className="card">
                  <div className="card-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="card-body">
                    <div className="body-title">
                      <h3>{item.name}</h3>
                    </div>
                    <div className="body-desc">
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        {/* Local Advisory Committee Section */}
        <div className="local-committee-details m-top">
          <h2>LOCAL ADVISORY COMMITTEE MEMBERS</h2>
          <div className="members-grid">
            {
              LocalAdvisoryCommittee.map((item, index) => (
                <div key={index} className="card">
                  <div className="card-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="card-body">
                    <div className="body-title">
                      <h3>{item.name}</h3>
                    </div>
                    <div className="body-desc">
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className="technical-committee m-top">
          <h2>TECHNICAL COMMITTEE MEMBERS</h2>
          <div className="members-grid">
            {
              technicalMembers.map((item, index) => (
                <div key={index} className="card">
                  <div className="card-image">
                    <img src={item.img} alt={item.name} />
                  </div>
                  <div className="card-body">
                    <div className="body-title">
                      <h3>{item.name}</h3>
                    </div>
                    <div className="body-desc">
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default Committee;

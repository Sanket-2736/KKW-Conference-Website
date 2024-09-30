import React from 'react'
import './Papers.css'
import bgImg from '../../assets/papers-bg-img.jpg'

function Papers() {
  return (
    <>
      <div className="papers" id="papers">
        <div className="papers-upper-div">
            <div className="papers-bg-img">
                <img src={bgImg} alt="bg" />
            </div>
            <div className="papers-img-content">
                <h1>CALL FOR PAPERS</h1>
            </div>
        </div>
        <div className="papers-call-for-papers">
            <h2>CALL FOR PAPERS</h2>
            <p>
                Prospective authors can submit papers based on one of the following tracks given below.
                <ul>
                    <li>Track 1: Sustainable Engineering and Technology</li>
                    <li>Track 2: Innovation and Emerging Technologies</li>
                    <li>Track 3: Industry 4.0</li>
                    <li>Track 4: Digital Transformation and AI </li>
                    <li>Track 5: Engineering Education and Practice</li>
                    <li>Track 6: Data Analytics and its Applications</li>
                </ul>
            </p>
        </div>
        <div className="papers-info-for-authors">
            <h2>INFORMATION TO AUTHORS</h2>
            <ul>
                <li>Prospective authors are invited to submit original and unpublished papers at the conference.</li>
                <li>The papers submitted will undergo a peer review process for acceptance. The papers will be reviewed by technical experts.</li>
                <li>All papers submitted to the ICEISF 2025, whether for review or publication, upon acceptance, must be written in English and formatted in the standard two-column IEEE format. The paper template is available at <a href="https://www.ieee.org/conferences/publishing/templates.html">Paper Templates</a> Papers are limited to six pages</li>
                <li>The conference will have Keynote Speeches, Oral Presentations, and Best Paper Awards. The papers accepted will be included in the conference proceeding upon presentation.</li>
                <li>If a paper is accepted, at least one of the authors listed on the paper must attend the conference and present the paper according to the schedule decided by the conference’s technical program committee.</li>
                <li>The technical program committee of the conference will decide on the inclusion of the paper in oral or poster sessions.</li>
                <li>For each accepted paper at least one of the authors must register and attend the conference to present the work, otherwise, the paper will not be included in the conference program and the conference proceedings.</li>
                <li>Accepted and presented papers will be published in peer-reviewed journals. </li>
                <li>-	The manuscript should be submitted online through e-mail ICEISF-2025@kkwagh.edu.in@kkwagh.edu.in.</li>
            </ul>
        </div>
        <div className="papers-paper-presentation">
            <h2>PAPER PRESENTATION</h2>
            <ul>
                <li>The conference hall at the venue will be equipped with a laptop having a USB port. Presenters are required to bring their presentation as a hard copy and PPT on a pen drive and save it on the laptop before the presentation.</li>
                <li>The time allotted for a presentation is 15 minutes including 5 minutes of Question and Answer session.</li>
            </ul>
        </div>
      </div>
    </>
  )
}

export default Papers

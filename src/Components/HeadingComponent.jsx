import React from 'react';
import './HeadingComponent.scss';

const HeadingComponent = ({mainHeading,  subHeading, buttonName}) => {
  return (
    <section className='Heading-Section'>
        <div className="HeadSection">
          <div>
            <span className='left_border'></span>
            <h2>{mainHeading}</h2>
            <p>{subHeading}</p>
          </div>
          <div className="middleButton">
            {!buttonName ? "" : <button className="view-all-btn">{buttonName}</button> }
          </div>
        </div>
    </section>
  )
}

export default HeadingComponent
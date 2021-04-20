import React from 'react';

const Section = props => {
  return (
    <>
        <div className={'section col-sm-12 col-md-9 col-12'}>
          <div className={'row m-0'}>
              <div className={'col-sm-12 col-md-6 col-12'} style={{height:"500px",background:"skyblue",backgroundClip: "content-box"}}>
                
              </div>
              <div className={'col-sm-12 col-md-6 col-12'}>
                <div className={'row'}>
                  <div className={'col-sm-6 col-md-6 col-12'} style={{height:"240px",background:"orange",backgroundClip: "content-box"}}>

                  </div>
                  <div className={'col-sm-6 col-md-6 col-12'} style={{height:"240px",background:"pink",backgroundClip: "content-box"}}>
                    
                  </div>
                </div>
                <div className={'row mt-3'}>
                  <div className={'col-sm-6 col-md-6 col-12'} style={{height:"240px",background:"red",backgroundClip: "content-box"}}>

                  </div>
                  <div className={'col-sm-6 col-md-6 col-12'} style={{height:"240px",background:"green",backgroundClip: "content-box"}}>
                    
                  </div>
                </div>
              </div>
          </div>
        </div>
    </>
  )
}
 
export default Section;
import React from 'react';

const Section = props => {
  return (
    <>
        <div className={'section col-sm-12 col-md-9 col-12'}>
          <div className={'row m-0'}>
              <div className={'col-xl-6 mb-3'} style={{height:"500px",background:"skyblue",backgroundClip: "content-box"}}>
                
              </div>
              <div className={'col-xl-6'}>
                <div className={'row'}>
                  <div className={'col-sm-6 mb-3'} style={{minHeight:"230px",background:"orange",backgroundClip: "content-box",borderRadius:"9px"}}>

                  </div>
                  <div className={'col-sm-6 mb-3'} style={{minHeight:"230px",background:"pink",backgroundClip: "content-box",borderRadius:"9px"}}>
                    
                  </div>
                </div>
                <div className={'row mt-3'}>
                  <div className={'col-sm-6 mb-3'} style={{minHeight:"230px",background:"red",backgroundClip: "content-box",borderRadius:"9px"}}>

                  </div>
                  <div className={'col-sm-6 mb-3'} style={{minHeight:"230px",background:"green",backgroundClip: "content-box",borderRadius:"9px"}}>
                    
                  </div>
                </div>
              </div>
          </div>
        </div>
    </>
  )
}
 
export default Section;
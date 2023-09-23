import React from 'react'
import star from '../images/star.png'
function Success() {
  return (
    <div >
        <div className='success-text d-flex justify-content-center'>
            Success
            <img src={star} className='img-star' />
        </div>
    <div className='d-flex justify-content-center'>
       
       <div className='claim-div rounded-circle d-flex '>
          <div>
            {/* nft buraya gelecek */}
          </div>

       </div>
    </div>
    <br />
    <br />
    <div>
    <div className="d-flex justify-content-center">
        <button className="btn-go">Go to my memories</button>
      </div>
    </div>
    </div>
  )
}

export default Success;
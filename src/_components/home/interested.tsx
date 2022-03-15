import React from 'react'
import { Link } from 'react-router-dom'

function Interested() {
  return (
    <div className="row mt-4 pt-2 justify-content-center">
<div className="col-12 text-center">
  <div className="section-title">
    <h4 className="title mb-4">آیا تمایلی به ویزیت آنلاین دارید؟</h4>
  
    <Link to="/bookingAppointment" className="btn btn-primary mt-4">
       نوبت بگیرید
    </Link>
  </div>
</div>
</div>
  )
}

export default Interested
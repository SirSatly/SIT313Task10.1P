import React from 'react'

const FormConditions = () => 
{
    return <div>
        <p className='form-title'>Project Conditions</p>
        <div className="row">
            <label for='length' className='col-3 col-lg-2 col-xxl-1'>Project Length</label>
            <input id='length' type='text' className='col-4'/>
        </div>
        <br/>
        <div className="row">
            <label className='col-3 col-lg-2 col-xxl-1'>Payment</label>
            <label for='min' className='col-2 col-sm-1'>Min</label>
            <input id='min' type='text' className='col-2'/>
            <label for='max' className='col-2 col-sm-1'>Max</label>
            <input id='max' type='text' className='col-2'/>
        </div>
        <br/>
        <div className="row">
            <label for='hours' className='col-3 col-lg-2 col-xxl-1'>Working Hours</label>
            <input id='hours' type='text' className='col-4'/>
        </div>
    </div>
}

export default FormConditions
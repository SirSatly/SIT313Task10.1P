import React from 'react'

const FormDiscription = () => 
{
    return <div>
        <p className='form-title'>Describe your job</p>
        <div className="row">
            <label for='title' className='col-3 col-lg-2 col-xxl-1'>Title/Position</label>
            <input id='title' type='text' className='col-4'/>
        </div>
        <br/><br/>
        <div className="row">
            <label for='description' className='col-3 col-lg-2 col-xxl-1'>Job description</label>
            <textarea id='description' type='text' className='col'/>
        </div>
        <br/>
        <div className="row">
            <label for='skills' className='col-3 col-lg-2 col-xxl-1'>Skills</label>
            <input id='skills' type='text' className='col' placeholder='Please add skills that your job is required e.g., Java'/>
        </div>
        <br/>
        <label>Developers will find your job based on the skills you have added here</label>
    </div>
}

export default FormDiscription
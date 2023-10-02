import React from 'react'

const FormExperience = () => 
{
    return <div>
        <p className='form-title'>Experience</p>
        <div className='row'>
            <label for='experience-area' className='col-3 col-lg-2 col-xxl-1'>Experienced in</label>
            <input id='experience-area' type='text' className='col-3'/>
            <label for='experience-time' className='col-3 col-lg-2 col-xxl-1'>For at least</label>
            <input id='experience-time' type='text' className='col-3'/>
        </div>
    </div>
}

export default FormExperience
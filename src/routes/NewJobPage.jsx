import React, {useState} from 'react'
import FormConditions from '../FormConditions';
import FormExperience from '../FormExperience';
import FormDiscription from '../FormDiscription';
import '../NewJobForm.css'

const NewJobForm = () => 
{
    var [jobType, setJobType] = useState("")

    return <div className='form-div'>
        <p className='form-title'>New Job</p>
        <form>
            <div className='row'>
                <label className='col-3 col-lg-2'>Select Job Type:</label>
                <div className='col-3 col-lg-2'>
                    <input type="radio" id='freelance' name='jobType' value='freelance' required onChange={e => setJobType(e.target.value)} />
                    <label for='freelance' >Freelance</label>
                </div>
                <div className='col-4'>
                    <input type="radio" id='employment' name='jobType' value='employment' required onChange={e => setJobType(e.target.value)} />
                    <label for='employment'>Employment</label>
                </div>
            </div>

            {jobType === 'freelance' || jobType === 'employment' ? <FormDiscription/> : null}
            {jobType === 'freelance' || jobType === 'employment' ? <FormConditions/>: null}
            {jobType === 'employment' ? <FormExperience/> : null}

            <input type='submit' value="Post" className='btn btn-secondary form-button'/>

            <br/><br/>
        </form>
    </div>
}

export default NewJobForm
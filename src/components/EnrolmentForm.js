import React, { useState, useContext } from 'react';
import { DataContext } from './DataProvider';
import Form from 'react-bootstrap/Form';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';



const EnrolmentForm = () => {

    const [data,setData] = useContext(DataContext);
    const [childFirstName, setChildFirstName] = useState('');
    const [childMiddleName, setChildMiddleName] = useState('');
    const [childLastName, setChildLastName] = useState('');
    const [dob, setDob] = useState('');
    const [pob, setPob] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [nationality, setNationality] = useState('');
    const [address, setAddress] = useState ('');
    const [contact, setContact] = useState('');
    const [momFirstName, setMomFirstName] = useState('');
    const [momMiddleName, setMomMiddleName] = useState('');
    const [momLastName, setMomLastName] = useState('');
    const [momContact, setMomContact] = useState('');
    const [momJob, setMomJob] = useState('');
    const [momAddress, setMomAddress] = useState('');
    const [dadFirstName, setDadFirstName] = useState('');
    const [dadMiddleName, setDadMiddleName] = useState('');
    const [dadLastName, setDadLastName] = useState('');
    const [dadContact, setDadContact] = useState('');
    const [dadJob, setDadJob] = useState('');
    const [dadAddress, setDadAddress] = useState('');
    const [mode, setMode] = useState('');
    
    const [validated, setValidated] = useState(false);

    const [value, setValue] = useState('');

    const [open, setOpen] = React.useState(false);
    const [newopen, setNewOpen] = React.useState(false);

    const [state, setState] = React.useState({
      open: true,
      vertical: 'top',
      horizontal: 'center',
    });
  
    const { vertical, horizontal} = state;

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
      setNewOpen(false);
    };

  
    const handleSubmit = e => {
        e.preventDefault();

        const form = e.currentTarget;
        if (form.checkValidity() === true) {
          const id  = Date.now();
          const student = {
            id: Date.now(),
            childFirstName,
            childMiddleName,
            childLastName,
            dob,
            pob,
            age,
            gender,
            nationality,
            address,
            contact,
            momFirstName,
            momMiddleName,
            momLastName,
            momContact,
            momJob,
            momAddress,
            dadFirstName,
            dadMiddleName,
            dadLastName,
            dadContact,
            dadJob,
            dadAddress,
            mode: mode
          }
          setData([...data, student]);
          setChildFirstName('');
          setChildMiddleName('');
          setChildLastName('');
          setDob('');
          setPob('');
          setAge('');
          setGender('');
          setNationality('');
          setAddress('');
          setContact('');
          setMomFirstName('');
          setMomMiddleName('');
          setMomLastName('');
          setMomContact('');
          setMomJob('');
          setMomAddress('');
          setDadFirstName('');
          setDadMiddleName('');
          setDadLastName('');
          setDadContact('');
          setDadJob('');
          setDadAddress('');
          setMode('');

          setValidated(true);
          setOpen(true);
          form.submit();

        } else {
          e.preventDefault();
          e.stopPropagation();
          setNewOpen(true);
          return false;
      }
    };   

    

return (
<div>
    <div className="container justify-content-center form-group p-5 my-3">
        <h2>Enrolment Form</h2>
        <form className="form row g-3 needs-validation" noValidate validated={validated} onSubmit={handleSubmit}>
            <h4>Child's Information</h4>

            <div className="col-md-4">
            <label for="validationServer01" className="form-label">First name</label>
            <input type="text" onChange={e => setChildFirstName(e.target.value)} value={childFirstName} className="form-control" id="validationServer01" placeholder="First name"  required/>
            </div>

            <div className="col-md-4">
            <label for="validationServer02" className="form-label">Middle name</label>
            <input type="text" onChange={e => setChildMiddleName(e.target.value)} value={childMiddleName} className="form-control" id="validationServer02" placeholder="Middle name" required/>
            </div>

            <div className="col-md-4">
            <label for="validationServer03" className="form-label">Last name</label>
            <input type="text" onChange={e => setChildLastName(e.target.value)} value={childLastName} className="form-control" id="" placeholder="Last name"  required/>
            </div>

            <div className="col-md-3">
            <label for="validationServer04" className="form-label">Date of birth</label>
            <input type="date" onChange={e => setDob(e.target.value)} value={dob} className="form-control" id="validationServer04" placeholder="Date of birth" max="01/01/2018" min="12/31/2016" required/>
            </div> 

            <div className="col-md-3">
            <label for="validationServer05" className="form-label">Place of Birth </label>
            <input type="text" onChange={e => setPob(e.target.value)} value={pob} className="form-control" id="validationServer05" placeholder="Place of Birth" required/>
            </div>

            <div className="col-md-3">
            <label for="validationServer07" className="form-label">Age Category</label>
            <select className="form-select" onChange={e => setAge(e.target.value)} value={age} required>
            <option>Choose one...</option>
            <option>2 - 2.5 years old</option>
            <option>3 - 3.5 years old</option>
            <option>4 - 4.5 years old</option>
            </select>
            </div>

            <div className="col-md-3">
            <label for="validationServer07" className="form-label">Gender</label>
            <select className="form-select" onChange={e => setGender(e.target.value)} value={gender} required>
            <option>Choose one...</option>
            <option>Male</option>
            <option>Female</option>
            </select>
            </div>

            <div className="col-md-3">
            <label for="validationServer06" className="form-label">Nationality </label>
            <input type="text" onChange={e => setNationality(e.target.value)} value={nationality} className="form-control" id="validationServer06" placeholder="Nationality"  required/>
            </div>

            <div className="col-md-6">
            <label for="validationServer08" className="form-label">Address </label>
            <input type="text" onChange={e => setAddress(e.target.value)} value={address} className="form-control" id="validationServer08" placeholder="Address" required/>
            </div>

            <div className="col-md-3">
            <label for="validationServer09" className="form-label">Contact Number </label>
            <input type="number" onChange={e => setContact(e.target.value)} value={contact} className="form-control" id="validationServer09" placeholder="Contact Number"  required/>
            </div>

            <hr/>

            <h4>Parents' Information</h4>
            <h5>Mother</h5>

            <div className="col-md-4">
            <label for="validationServer10" className="form-label">First name</label>
            <input type="text" onChange={e => setMomFirstName(e.target.value)} value={momFirstName} className="form-control" id="validationServer10" placeholder="First name" required />
            </div>

            <div className="col-md-4">
            <label for="validationServer11" className="form-label">Middle name</label>
            <input type="text" onChange={e => setMomMiddleName(e.target.value)} value={momMiddleName} className="form-control" id="validationServer11" placeholder="Middle name" required/>
            </div>

            <div className="col-md-4">
            <label for="validationServer12" className="form-label">Last name</label>
            <input type="text" onChange={e => setMomLastName(e.target.value)} value={momLastName} className="form-control" id="" placeholder="Last name" required/>
            </div>

            <div className="col-md-3">
            <label for="validationServer13" className="form-label">Contact No.</label>
            <input type="number" onChange={e => setMomContact(e.target.value)} value={momContact} className="form-control" id="validationServer13" placeholder="Contact Number" required/>
            </div>

            <div className="col-md-3">
            <label for="validationServer14" className="form-label">Occupation</label>
            <input type="text" onChange={e => setMomJob(e.target.value)} value={momJob} className="form-control" id="validationServer14" placeholder="Occupation" required/>
            </div>

            <div className="col-md-6">
            <label for="validationServer15" className="form-label">Work Address</label>
            <input type="text" onChange={e => setMomAddress(e.target.value)} value={momAddress} className="form-control" id="validationServer15" placeholder="Work Address" required/>
            </div>

            <h5 className="">Father</h5>

            <div className="col-md-4">
            <label for="validationServer16" className="form-label">First name</label>
            <input type="text" onChange={e => setDadFirstName(e.target.value)} value={dadFirstName} className="form-control" id="validationServer16" placeholder="First name" required/>
            </div>

            <div className="col-md-4">
            <label for="validationServer17" className="form-label">Middle name</label>
            <input type="text" onChange={e => setDadMiddleName(e.target.value)} value={dadMiddleName} className="form-control" id="validationServer17" placeholder="Middle name" required/>
            </div>

            <div className="col-md-4">
            <label for="validationServer18" className="form-label">Last name</label>
            <input type="text" onChange={e => setDadLastName(e.target.value)} value={dadLastName} className="form-control" id="" placeholder="Last name" required/>
            </div>

            <div className="col-md-3">
            <label for="validationServer19" className="form-label">Contact No.</label>
            <input type="number" onChange={e => setDadContact(e.target.value)} value={dadContact} className="form-control" id="validationServer19" placeholder="Contact Number" required/>
            </div>

            <div className="col-md-3">
            <label for="validationServer20" className="form-label">Occupation</label>
            <input type="text" onChange={e => setDadJob(e.target.value)} value={dadJob} className="form-control" id="validationServer20" placeholder="Occupation" required/>
            </div>

            <div className="col-md-6">
            <label for="validationServer21" className="form-label">Work Address</label>
            <input type="text" onChange={e => setDadAddress(e.target.value)} value={dadAddress} className="form-control" id="validationServer21" placeholder="Work Address" required/>
            </div>

            <hr/>
            
            <div className="col-md-4">
            <label for="validationServer22" className="form-label">Mode of Payment</label>
            <select className="form-select" onChange={e => setMode(e.target.value)} value={mode} required>
            <option>Choose one...</option>
            <option>Cash</option>
            <option>Semestral</option>
            <option>Quarterly</option>
            <option>Monthly</option>
            </select>
            </div>

            <div className="col-md-8">
            <div className="form-check">
            <Form.Check
              required
              label="I hereby AGREE that the School may use my child/children’s picture or video for the promotion purpose of the school."
              feedback="You must agree before submitting."
            />
            {/* <input className="form-check-input is-invalid" type="checkbox" id="invalidCheck3" required/>
            <label className="form-check-label" htmlFor="invalidCheck3">
            I hereby AGREE that the School may use my child/children’s picture or video for the promotion purpose of the school.
            </label> */}
            </div>
            </div>

            <div class="col-12 text-center">
            <button class="btn btn-primary submit" type="submit" >Submit form</button>
            </div>
        </form>

        
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical, horizontal}}>
          <Alert onClose={handleClose} severity="success" variant="filled">
            You have successfully submitted enrolment form!
          </Alert>
        </Snackbar>

        <Snackbar open={newopen} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical, horizontal}}>
          <Alert onClose={handleClose} severity="error" variant="filled">
            <span style={{marginLeft:'80px'}}>Please make sure all fields are not empty!</span>
          </Alert>
        </Snackbar>
            
        </div>
    </div>
);
}


export default EnrolmentForm

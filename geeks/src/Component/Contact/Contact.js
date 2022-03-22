import React from 'react'
import Nav from '../../Navbar/Nav';
import "./Contact.css"
const Contact = () => {
    return (
        <>
    <Nav/>

<div className="main">
    <div className="form">
            <form>
<div className='Contact'>
<h1>Contact-Us</h1>

</div>
                <br />
                    <input className='inpute' type="text" name="First-Name" placeholder="Enter Your First-Name" />
                    <input  className='inpute'type="text" name="Second-Nane" placeholder="Enter Your Second-Name" />
                    <input className='inpute' type="text" name="Last-Name" placeholder="Enter Your Last-Name" />
                    <input  className='inpute'type="email" name="Email" placeholder="Enter Your Email" />
                    <input  className='inpute'type="number" name="Phone-Number" placeholder="Enter Your Phone-Number" />
                    <select name="Gender" className="gender">
                        <option >
                            Male
                        </option>
                        <option>
                            Female
                        </option>
                        <option>

                            Other
                        </option>
                    </select>
                    <br />
            
                    <input className='inpute' type="Date" name="Dateof-birth" placeholder="Enter Your Date-of-Birth" />
                    <br />
                    <button  className='button' type="submit">Submit</button>

            </form>
            </div>
            </div>

        </>
    )
}

export default Contact;

import React from 'react';
import logo from '../assets/images/Speed_logo.png';
import { Button } from 'react-bootstrap';
import OTP from './OTP';

class Details extends React.Component{

    constructor() {
        super();
        this.state = {
            isOTPGenerated: false
        }
    }

    displayOTP = () => {
        this.setState({
            isOTPGenerated: true
        });
    }

    render() {
        const { isOTPGenerated } = this.state;
        return(
            <section id="details-container" className="col-lg-5 col-sm-8 col-md-7 col-10 mx-auto mt-5 mb-4 border shadow p-4">
                <img className="logo mb-3" width={60} height={60} src={logo} alt="logo"/>
                <div className="mb-5">
                    <h4>Just give us some basic details</h4>
                </div>
                <form id="form-container" action="" onSubmit={this.props.showSuccess}>
                    <div className="d-flex flex-column form-divs pb-2 col-sm-10 col-lg-8 mb-3 rounded-lg">
                        <label className="font-title-input" htmlFor="store-name-input">Your store's name</label>
                        <input className="mt-n2 border-0" id="store-name-input" type="text" placeholder="What is it?" required/>
                    </div>
                    <div className="d-flex flex-column form-divs pb-2 col-sm-10 col-lg-8 mb-3 rounded-lg">
                        <label className="font-title-input" htmlFor="email">Your email ID</label>
                        <input className="mt-n2 border-0" id="email" type="email" placeholder="abc@something.com" required/>
                    </div>
                    <div className="d-flex flex-column form-divs pb-2 col-sm-10 col-lg-8 mb-3 rounded-lg">
                        <label className="font-title-input" htmlFor="phone">Your phone number</label>
                        <div className="mt-n2 d-flex">
                            <div className="select-container">
                                <select className="border-0 select-styles" required style={{backgroundColor: "#F5F6F9"}}>
                                    <option value="+91">+91</option>
                                </select>
                            </div>
                            <input className="border-0 col-10" id="phone" type="number" placeholder="Contact you at" required />
                        </div>
                    </div>
                    <div className="d-flex flex-column form-divs pb-2 col-sm-10 col-lg-8 mb-3 rounded-lg">
                        <label className="font-title-input" htmlFor="location">Delivery location</label>
                        <input className="mt-n2 border-0" id="location" type="text" placeholder="Type to search" required/>
                    </div>
                    <div className="d-flex flex-column form-divs pb-2 col-sm-10 col-lg-8 mb-3 rounded-lg">
                        <label className="font-title-input" htmlFor="add-notes">Notes for delivery</label>
                        <input className="mt-n2 border-0" id="add-notes" type="text" placeholder="Put in the house number / shop number"/>
                    </div>

                    {isOTPGenerated && <OTP/>}

                    {!isOTPGenerated && <Button onClick={this.displayOTP} className="col-12 col-lg-10" variant="primary">I want this!</Button>}

                </form>
            </section>
        );
    }
}

export default Details;
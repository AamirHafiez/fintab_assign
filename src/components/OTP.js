import React from 'react';
import { Button } from 'react-bootstrap';

const OTP = () => {
    return(
        <React.Fragment>
            <div className="d-flex flex-column form-divs pb-2 col-8 mb-3 rounded-lg">
                <label className="font-title-input" htmlFor="otp">Otp</label>
                <input className="mt-n2 border-0" id="otp" type="number" placeholder="Enter OTP" required/>
            </div>
            <small style={styles.smallColor}>We sent an OTP to your phone number. <a href="#">Click to resend</a></small>
            <br/>
            <br/>
            <small style={styles.smallColor}>By proceeding further you agree to the <a href="#">terms and conditions of Company</a> and its <a href="#">privacy and communication policy</a> </small>
            <div>
                <Button className="col-12 col-lg-10" type="submit" variant="primary">Proceed</Button>
            </div>
        </React.Fragment>
    );
}

var styles = {
    smallColor: {
        color: "rgba(89, 86, 86, 0.8)"
    } 
}

export default OTP;
import React from 'react';
import image from '../assets/images/Success_Icon.png'
import {Button} from 'react-bootstrap'

const Success = () => {
    return(
        <section id="success-container" className="col-lg-5 col-sm-8 col-md-7 col-10 mx-auto" style={{textAlign: "center"}}>
            <h2 className="text-black-50 mb-5">Successful Registration</h2>
            <div className="mb-5">
                <img id="success-image" style={{height: "250px", width: "300px"}} src={image} alt="successful"/>
            </div>
            <div>
                <p style={styles.smallColor}>Your Speed Checkout account is setup!</p>
                <p className="mt-n3 mb-5" style={styles.smallColor}>You are ready to supercharge your sales</p>
            </div>
            <Button className="col-12 col-lg-10" variant="primary">Show me the dashboard</Button>
        </section>
    );
}

var styles = {
    smallColor: {
        color: "rgba(89, 86, 86, 0.8)"
    } 
}

export default Success;
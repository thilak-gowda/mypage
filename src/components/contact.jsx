import React, { useState } from "react";

import style from "./contact.css";

function Form() {

    const [cusName, setCusName] = useState("");
    const [error, setError] = useState("");

    const [showSuccess, setShowSuccess] = useState(false);

    function validateForm(event) {
        event.preventDefault();

        if (cusName.trim() === "") {
            setError("Name can't be empty " + " " + " ⚠️");
            return;
        }

        // Phone number validation
        // Assuming the phone number input has a ref attribute named "phoneInput"
        const phoneInput = event.target.elements.phone;
        const phoneNumber = phoneInput.value.trim();
        const phonePattern = /^\d{10}$/;

        const emailInput = event.target.elements.email;
        const mailll = emailInput.value.trim();
        const mailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        let dtasub = "Please Wait ....";
        if (phoneNumber === "") {
            setError("Phone number can't be empty" + " " + " ⚠️");
            return;
        }



        if (!phonePattern.test(phoneNumber)) {
            setError("Please enter a valid 10-digit phone number" + " " + " ⚠️");
            return;
        }

        if (!mailpattern.test(mailll)) {
            setError("Please enter a valid email" + " " + " ⚠️");
            return;
        }

        // Resetting error state if there are no validation errors

        else {
            setError(dtasub);
            setShowSuccess(true);
        }
    }


    function handleNameInput(event) {
        const val = event.target.value;
        const capitalizedVal = val.charAt(0).toUpperCase() + val.slice(1);
        setCusName(capitalizedVal);
    }



    const errorStyle = {
        color: showSuccess ? "green" : "red",
        textAlign: "center",
        fontSize: "20px",
    }

    return (
        <div className="form-container">
            <span className="line-above"></span>

            <p className="sub-heading text-center">Hi {cusName} !</p>


            {error && <p style={errorStyle}>{error}</p>}

            <div className="row d-flex align-items-center">
                <div className="col-md-6 px-md-4 d-block mx-auto footer-form">
                    <div id="note1"></div>
                    <form action="https://formsubmit.co/thilakgowda1998@gmail.com" method="POST">
                       {/* onSubmit={validateForm} */}

                       <input type="hidden" name="_subject" value="New mail!" />
                       <input type="hidden" name="_captcha" value="false" />
                        <input
                            type="text"
                            onChange={handleNameInput}
                            placeholder="Name"
                            className="frm-inp"
                            name="name"
                            required
                        />

                        <div className="frm-inp-div">

                            <input
                                type="tel"
                                placeholder="Phone Number"
                                name="phone"
                                className="frm-inp"
                            />
                        </div>

                        <input
                            type="email"
                            placeholder="E-mail"
                            className="frm-inp"
                            name="email"
                        />

                        <textarea
                            name="message"
                            cols="30"
                            rows="2"
                            className="frm-inp"
                            placeholder="Message"
                        ></textarea>

                        <input
                            type="submit"
                            id="header-btn"
                            className="frm-btn d-block mx-auto px-4"
                            value="Submit"
                        />
                    </form>
                </div>
            </div>
           
      

                </div>
                );
}

                export default Form;

import { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: ""
    });

    const onSubmit = (e) => {
        e.preventDefault();

        // Check if all fields are filled
        if (
            formData.firstName &&
            formData.lastName &&
            formData.email &&
            formData.phoneNumber &&
            formData.message
        ) {
            // Form is valid, proceed with the submission logic
            console.log("Form submitted", formData);
        } else {
            // Form is incomplete, show an error
            alert("Please fill in all the fields.");
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            <form className="form" onSubmit={onSubmit}>
                <p className="message">Free contact now and get full access to our app.</p>
                <label>
                    <input
                        className="input field"
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    <input
                        className="input field"
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    <input
                        className="input field"
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    <input
                        className="input field"
                        type="text"
                        placeholder="Phone Number"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    <textarea
                        className="input field"
                        placeholder="Your Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={3}
                    />
                </label>

                <button className="con-button" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ContactForm;

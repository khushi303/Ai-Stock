import React, { useState } from 'react';
import { DropdownBtn } from './common/Icons';
import CommonBtn from './common/CommonBtn';

const StartedForm = () => {
    // State variables for form inputs, errors, and popup visibility
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        callingCode: '+91'
    });
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    });
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [popupVisible, setPopupVisible] = useState(false);

    // Array of country calling codes
    const callingCodes = ['+91', '+1', '+44', '+61', '+81'];

    // Regex patterns for validation
    const nameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle calling code change
    const handleCallingCodeChange = (code) => {
        setFormData({
            ...formData,
            callingCode: code
        });
        setDropdownOpen(false);
    };

    // Validate form fields
    const validate = () => {
        let valid = true;
        let newErrors = { firstName: '', lastName: '', email: '', phone: '' };

        if (!nameRegex.test(formData.firstName)) {
            newErrors.firstName = 'Invalid first name';
            valid = false;
        }
        if (!nameRegex.test(formData.lastName)) {
            newErrors.lastName = 'Invalid last name';
            valid = false;
        }
        if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Invalid email address';
            valid = false;
        }
        if (!phoneRegex.test(formData.phone)) {
            newErrors.phone = 'Phone number must be 10 digits';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            // Form is valid, show the popup
            setPopupVisible(true);
            // Reset form data after submission
        }
    };
    const closePopup = () => {
        setPopupVisible(false);
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            callingCode: '+91'
        });
    };

    return (
        <>
            <div className='formBorderBox relative bg-offWhite backdrop-blur-[32px] rounded-lg before:rounded-lg'>
                <div className='sm:px-5 sm:pt-5 sm:pb-[23px] p-4'>
                    <p className='sm:text-custom-2xl text-2xl font-semibold text-white !leading-[120%] text-center px-4'>This Is The Right Time to Invest In AI Stocks</p>
                    <p className='sm:mt-4 mt-3 text-base font-normal text-white text-center'>In a matter of minutes, one of our AI mentors will contact you, No Experience Required!</p>
                    <form onSubmit={handleSubmit} className='sm:mt-6 mt-4'>
                        <label htmlFor="firstName" className='hidden'></label>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            className='sm:p-4 p-3.5 sm:text-base text-sm placeholder:text-offBlack font-normal text-offBlack bg-zircon w-full rounded border border-white border-opacity-70 outline-none'
                            placeholder='First Name'
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                        {errors.firstName && <p className='text-red-500 text-sm'>{errors.firstName}</p>}
                        <label htmlFor="lastName" className='hidden'></label>
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            className='sm:p-4 p-3.5 sm:text-base text-sm placeholder:text-offBlack font-normal text-offBlack bg-zircon w-full rounded border border-white border-opacity-70 outline-none sm:mt-4 mt-3.5'
                            placeholder='Last Name'
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                        {errors.lastName && <p className='text-red-500 text-sm'>{errors.lastName}</p>}
                        <label htmlFor="email" className='hidden'></label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className='sm:p-4 p-3.5 sm:text-base text-sm placeholder:text-offBlack font-normal text-offBlack bg-zircon w-full rounded border border-white border-opacity-70 outline-none sm:mt-4 mt-3.5'
                            placeholder='Email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
                        <div className='sm:mt-4 mt-3.5 border border-white bg-zircon border-opacity-70 rounded flex bg-lightBlack relative'>
                            <div className='sm:p-4 p-3.5 bg-lightBlack text-sm text-offBlack outline-none border-none flex items-center cursor-pointer gap-1' onClick={() => setDropdownOpen(!dropdownOpen)}>
                                {formData.callingCode} <DropdownBtn />
                            </div>
                            {dropdownOpen && (
                                <div className='absolute top-full left-0 bg-white border border-gray-300 rounded mt-1 z-10'>
                                    {callingCodes.map((code) => (
                                        <div key={code} className='p-2 hover:bg-gray-200 cursor-pointer' onClick={() => handleCallingCodeChange(code)}>
                                            {code}
                                        </div>
                                    ))}
                                </div>
                            )}
                            <label htmlFor="phone" className='hidden'></label>
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                className='sm:p-4 p-3.5 sm:text-base text-sm placeholder:text-offBlack font-normal text-offBlack w-full outline-none bg-transparent'
                                placeholder='Phone Number'
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {errors.phone && <p className='text-red-500 text-sm'>{errors.phone}</p>}
                        <button type='submit' className='w-full sm:mt-8 mt-6'>
                            <CommonBtn name="Get Started" className="!w-full" />
                        </button>
                    </form>
                </div>

            </div>
            {popupVisible && (
                <div className='fixed top-0 left-0 bottom-0 right-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50'>
                    <div className='relative max-w-[600px] mx-4'>
                        <div className='bg-white relative z-20 p-8 rounded shadow-lg text-center border border-white'>
                            <p className='text-2xl font-semibold text-black'>Form Submitted Successfully!</p>
                        </div>
                    </div>
                    <div onClick={closePopup} className='absolute top-0 left-0 right-0 bottom-0 z-10'>
                    </div>
                </div>
            )}
        </>
    );
};

export default StartedForm;

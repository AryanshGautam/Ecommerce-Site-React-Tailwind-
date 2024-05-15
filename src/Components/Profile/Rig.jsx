import React, { useEffect, useState } from 'react'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import './Rig.css'

function Rig() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        maritalstatus:'',
        pan: '',
        MotherName:'',
        FatherName:'',
        spousename:'',
        email: '',
        country: '',
        address: '',
        city: '',
        state: '',
        zip: ''
    });

    useEffect(() => {
        // Load form data from local storage on component mount
        const savedFormData = JSON.parse(sessionStorage.getItem('formData'));
        if (savedFormData) {
            setFormData(savedFormData);
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) =>{
        e.preventDefault();

        for (const field in formData) {
            if (!formData[field]) {
                alert("Please fill in all fields.");
                return;
            }
        }
        // saving this data in session storage for now insted of localstorage
        sessionStorage.setItem('formData', JSON.stringify(formData));

        console.log(formData);
    }

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h1 className="text-2xl font-semibold leading-12 text-gray-900">Edit Basic Information</h1>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="firstName"
                  id="first-name"
                  autoComplete="given-name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:none sm:text-sm sm:leading-6 p-2"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                  name="lastName"
                  id="last-name"
                  autoComplete="family-name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:none sm:text-sm sm:leading-6 p-2"
                />
              </div>
            </div>


            <div className="sm:col-span-3 sm:col-start-1">
              <label htmlFor="gemder" className="block text-sm font-medium leading-6 text-gray-900">
                Gender
              </label>
              <div className="mt-2">
                <input
                 name="gender"
                 id="gender"
                 value={formData.gender}
                 onChange={handleChange}
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:none sm:text-sm sm:leading-6 p-2"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="maritalstatus" className="block text-sm font-medium leading-6 text-gray-900">
                Marital Status
              </label>
              <div className="mt-2">
                <input
                  name="maritalstatus"
                  id="maritalstatus"
                  autoComplete="maritalstatus"
                  value={formData.maritalstatus}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:none sm:text-sm sm:leading-6 p-2"
                />
              </div>
            </div>

            <div className="sm:col-span-3 sm:col-start-1">
              <label htmlFor="pan" className="block text-sm font-medium leading-6 text-gray-900">
                PAN
              </label>
              <div className="mt-2">
                <input
                 name="pan"
                 id="pan"
                 value={formData.pan}
                 onChange={handleChange}
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:none sm:text-sm sm:leading-6 p-2"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="mother-name" className="block text-sm font-medium leading-6 text-gray-900">
                Mother Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="MotherName"
                  id="mother-name"
                  autoComplete="mothername"
                  value={formData.mothername}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:none sm:text-sm sm:leading-6 p-2"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="father-name" className="block text-sm font-medium leading-6 text-gray-900">
                Father Name
              </label>
              <div className="mt-2">
                <input
                  name="FatherName"
                  id="father-name"
                  autoComplete="father-name"
                  value={formData.fatherName}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:none sm:text-sm sm:leading-6 p-2"
                />
              </div>
            </div>

            <div className="sm:col-span-3 sm:col-start-1">
              <label htmlFor="spousename" className="block text-sm font-medium leading-6 text-gray-900">
                Spouse Name
              </label>
              <div className="mt-2">
                <input
                 name="spousename"
                 id="spouse"
                 value={formData.spousename}
                 onChange={handleChange}
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:none sm:text-sm sm:leading-6 p-2"
                />
              </div>
            </div>


            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:none sm:text-sm sm:leading-6 p-2"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Country
              </label>
              <div className="mt-2">
                <select
                  name="country"
                  id="country"
                  value={formData.country}
                  onChange={handleChange}
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:none sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>United States</option>
                  <option>India</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Street address
              </label>
              <div className="mt-2">
                <input
                  name="address"
                  id="address"
                  value={formData.address}
                  onChange={handleChange}
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:none sm:text-sm sm:leading-6 p-2"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                City
              </label>
              <div className="mt-2">
                <input
                 name="city"
                 id="city"
                 value={formData.city}
                 onChange={handleChange}
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:none sm:text-sm sm:leading-6 p-2"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                State / Province
              </label>
              <div className="mt-2">
                <input
                  name="state"
                  id="state"
                  value={formData.state}
                  onChange={handleChange}
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:none sm:text-sm sm:leading-6 p-2"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                ZIP / Postal code
              </label>
              <div className="mt-2">
                <input
                  name="zip"
                  id="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:none sm:text-sm sm:leading-6 p-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  )
}

export default Rig
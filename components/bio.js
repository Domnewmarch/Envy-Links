import React from 'react';
import BioContact from './bioContact';

// Define contact details array
const contactDetails = [
  { name: 'Dom Newmarch', mobile: '07501960691' },
];

// Function to handle saving contact details
function saveContactsToPhone() {
  // Iterate over each contact and prompt user to save
  contactDetails.forEach(contact => {
    const contactString = `BEGIN:VCARD\nVERSION:3.0\nFN:${contact.name}\nTEL:${contact.mobile}\nEND:VCARD`;

    // Create an anchor element with the contact data as a data URI
    const link = document.createElement('a');
    link.href = `data:text/vcard;charset=utf-8,${encodeURIComponent(contactString)}`;
    link.setAttribute('download', `${contact.name}.vcf`);
    link.click();
  });
}

export default function Bio() {
  return (
    <div className="flex flex-col items-center">

      <h1 className="w-fit text-3xl">Dom Newmarch</h1>

      <p className="dark:text-white">
        Founder ~
        <em className="font-semibold envy-blue">
          <a className="font-semibold envy-blue" href="https://www.envydigital-webdesign.co.uk">
            Envy Digital
          </a>
        </em>
      </p>

      <BioContact />
      <div className="bg-black hover:bg-dark duration-default py-4 rounded-xl w-full dark:bg-white text-center mb-3">
       <button className="text-center text-white w-fit mx-auto dark:text-black" onClick={saveContactsToPhone}>Save Contact Details</button>

      </div>

      <p>
        <em className="font-semibold envy-blue">Design // </em> <em className="font-semibold envy-blue">Develop // </em>
        <em className="font-semibold envy-blue">Results </em>
      </p>
      
    </div>
    
  );
}

import React from 'react';

const Footer = () => {
  return (
    <div className="bg-primary text-white py-8 px-4">
      <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        
        <div>
          <h1 className="text-lg font-semibold mb-2">MY ACCOUNT</h1>
          <p className="text-white text-sm">
            career at eidy <br />
            about us <br />
            sustainability <br />
            press
          </p>
        </div>
        
        <div>
          <h1 className="text-lg font-semibold mb-2">HELP</h1>
          <p className="text-white text-sm">
            FAQ <br />
            return <br />
            shipping <br />
            order status
          </p>
        </div>
        
        <div>
          <h1 className="text-lg font-semibold mb-2">FOLLOW US ON</h1>
          <p className="text-white text-sm">
            Facebook <br />
            WhatsApp <br />
            Instagram <br />
            Twitter
          </p>
        </div>
        
        <div>
          <h1 className="text-lg font-semibold mb-2">ABOUT US</h1>
          <p className="text-white text-sm">
            email <br />
            contact
          </p>
        </div>

      </div>
    </div>
  );
};

export default Footer;

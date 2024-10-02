import React, { useState, useEffect, useRef } from 'react';

const CertificatesSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [certificatesData, setCertificatesData] = useState([
    {
      title: 'Web Applications Development',
      dates: '',
      present: false,
      organization: 'Moringa School',
    },
    {
      title: 'Android Mobile Applications Development',
      dates: '',
      present: false,
      organization: 'Moringa School',
    },
    {
      title: 'DevOps Engineering',
      dates: '',
      present: false,
      organization: 'Moringa School',
    },
  ]);

  const formRef = useRef(null);

  const handleEditClick = (index) => {
    setIsEditing(index);
  };

  const handleSaveClick = (index) => {
    setIsEditing(null);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedCertificates = [...certificatesData];
    updatedCertificates[index][name] = value;
    setCertificatesData(updatedCertificates);
  };

  const handlePresentChange = (index) => {
    const updatedCertificates = [...certificatesData];
    updatedCertificates[index].present = !updatedCertificates[index].present;
    setCertificatesData(updatedCertificates);
  };

  const addCertificate = () => {
    setCertificatesData([
      ...certificatesData,
      {
        title: '',
        dates: '',
        present: false,
        organization: '',
      },
    ]);
  };

  const removeCertificate = (index) => {
    const updatedCertificates = [...certificatesData];
    updatedCertificates.splice(index, 1);
    setCertificatesData(updatedCertificates);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setIsEditing(null);
      }
    };

    if (isEditing !== null) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isEditing]);

  return (
    <div className="p-4 border-b border-gray-300" >
      <h2 className="text-xl font-semibold mb-4">CERTIFICATES</h2>

      {certificatesData.map((certificate, index) => (
        <div key={index} className="mb-4">
          {isEditing === index ? (
            // Edit Mode (form inputs)
            <div ref={formRef} className="border p-4">
              <input
                type="text"
                name="title"
                value={certificate.title}
                onChange={(e) => handleChange(e, index)}
                className="border-b mb-2 w-full outline-none"
                placeholder="Certificate Title"
              />
              <div className="flex space-x-2">
                <input
                  type="text"
                  name="dates"
                  value={certificate.dates}
                  onChange={(e) => handleChange(e, index)}
                  className="border-b w-1/2 outline-none"
                  placeholder="mm / yyyy - mm / yyyy"
                />
                <input
                  type="checkbox"
                  checked={certificate.present}
                  onChange={() => handlePresentChange(index)}
                  className="mt-1"
                />
                <label htmlFor="present" className="ml-2">Present</label>
              </div>
              <input
                type="text"
                name="organization"
                value={certificate.organization}
                onChange={(e) => handleChange(e, index)}
                className="border-b mb-2 w-full outline-none"
                placeholder="Organization"
              />

              <button
                onClick={() => handleSaveClick(index)}
                className="bg-green-500 text-white px-4 py-2 mt-4 rounded"
              >
                Save
              </button>
            </div>
          ) : (
            // View Mode (content)
            <div onClick={() => handleEditClick(index)} className="cursor-pointer">
              <h3 className="font-bold text-lg">{certificate.title}</h3>
              <p className="text-gray-500">{certificate.dates}</p>
              {certificate.present && <p className="text-gray-500">Present</p>}
              <p className="text-gray-500">{certificate.organization}</p>
            </div>
          )}
        </div>
      ))}

      <button onClick={addCertificate} className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Certificate
      </button>
    </div>
  );
};

export default CertificatesSection;
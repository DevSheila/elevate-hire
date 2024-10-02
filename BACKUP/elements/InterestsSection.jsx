import React, { useState, useEffect, useRef } from 'react';

const InterestsSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [interestsData, setInterestsData] = useState([
    'Mountaineering',
    'Board games',
    'Sculpting',
  ]);

  const formRef = useRef(null);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleChange = (e, index) => {
    const updatedInterests = [...interestsData];
    updatedInterests[index] = e.target.value;
    setInterestsData(updatedInterests);
  };

  const addInterest = () => {
    setInterestsData([...interestsData, '']);
  };

  const removeInterest = (index) => {
    const updatedInterests = [...interestsData];
    updatedInterests.splice(index, 1);
    setInterestsData(updatedInterests);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setIsEditing(false);
      }
    };

    if (isEditing) {
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
      <h2 className="text-xl font-semibold mb-4">INTERESTS</h2>

      {isEditing ? (
        <div ref={formRef} className="border p-4">
          <div className="grid grid-cols-3 gap-2">
            {interestsData.map((interest, index) => (
              <div key={index}>
                <input
                  type="text"
                  value={interest}
                  onChange={(e) => handleChange(e, index)}
                  className="border-b w-full outline-none px-3 py-1 rounded"
                />
                {interestsData.length > 1 && (
                  <button
                    onClick={() => removeInterest(index)}
                    className="bg-red-500 text-white px-2 py-1 rounded mt-2"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
          </div>

          <button onClick={addInterest} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
            Add Interest
          </button>
          <button
            onClick={handleSaveClick}
            className="bg-green-500 text-white px-4 py-2 mt-4 rounded"
          >
            Save
          </button>
        </div>
      ) : (
        <div onClick={handleEditClick} className="cursor-pointer">
          <div className="grid grid-cols-3 gap-2">
            {interestsData.map((interest, index) => (
              <button
                key={index}
                className="bg-gray-300 text-gray-700 px-3 py-1 rounded"
              >
                {interest}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default InterestsSection;
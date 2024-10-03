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
    <div className="p-4 sm:p-6 lg:p-8">
      <h2 className="font-bold text-gray-700 text-xl sm:text-2xl leading-7 mb-4 pb-2">
        INTERESTS
      </h2>

      {isEditing ? (
        <div ref={formRef} className="rounded-md">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {interestsData.map((interest, index) => (
              <div key={index}>
                <input
                  type="text"
                  value={interest}
                  onChange={(e) => handleChange(e, index)}
                  className="border-b w-full outline-none px-3 py-2 rounded"
                />
                {interestsData.length > 1 && (
                  <button
                    onClick={() => removeInterest(index)}
                    className="bg-red-500 text-white px-3 py-1 rounded mt-2 w-full"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={addInterest}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          >
            Add Interest
          </button>
          <button
            onClick={handleSaveClick}
            className="bg-green-500 text-white px-4 py-2 rounded mt-4 ml-2"
          >
            Save
          </button>
        </div>
      ) : (
        <div onClick={handleEditClick} className="cursor-pointer">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {interestsData.map((interest, index) => (
              <button
                key={index}
                className="text-gray-900 px-3 py-2 border-2 border-solid rounded w-full"
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

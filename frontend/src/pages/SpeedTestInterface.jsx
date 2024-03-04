import React, { useState } from 'react';
import speedTestImage from '../assets/images/speedtest.png';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'; 

const SpeedTestInterface = () => {

 const navigate = useNavigate();  
 const [formData, setFormData] = useState({
    interval: '',
    duration: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit =  async(e) => {
    e.preventDefault();

    // Frontend 
    try {
        const response = await axios.post('http://localhost:8000/speed-test/start', formData);
        console.log(response.data); //
      } catch (error) {
        console.error('Error starting speed test:', error);
      }

    navigate('/speed-test-results');
  };

  return (
     
    <div
      className="absolute inset-0 flex items-center justify-center"
        style={{
        backgroundImage: `url(${speedTestImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >

    <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
     <div className="p-4 bg-blue-200 rounded-lg w-64 h-70">  
      <div className="text-center font-bold mb-4">Speed Test</div>
     <form onSubmit={handleSubmit} style={{ marginLeft: '10px' }}>
        <div className="flex flex-col mb-3">
          <label htmlFor="interval" className="mb-1">Interval</label>
          <input
            type="number"
            id="interval"
            name="interval"
            value={formData.interval}
            onChange={handleChange}
            className="mr-2 px-2 py-1 rounded border border-gray-300 mb-2 w-50"
            min="0"
            max="100"
            step="1"
            required
          />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="duration" className="mb-1">Duration</label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="mr-2 px-2 py-1 rounded border border-gray-300 mb-2 w-50"
            min="1"
            max="100"
            step="1"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-600 font-bold">
          Start Test
        </button>
      </form>
    </div>
    </div>
    </div>
  );
};

export default SpeedTestInterface;

    
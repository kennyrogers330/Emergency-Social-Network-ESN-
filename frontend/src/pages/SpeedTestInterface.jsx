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

}

export default SpeedTestInterface;

    
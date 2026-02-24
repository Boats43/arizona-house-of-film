import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// HomePage is a legacy Hostinger scaffold - redirect to Home
const HomePage = () => {
  const navigate = useNavigate();
  useEffect(() => { navigate('/', { replace: true }); }, [navigate]);
  return null;
};

export default HomePage;

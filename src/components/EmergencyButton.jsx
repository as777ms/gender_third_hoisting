import { Link } from 'react-router-dom';

const EmergencyButton = () => {
  return (
    <div className="emergency-button">
      <Link to="/emergency">Экстренный контакт</Link>
    </div>
  );
};

export default EmergencyButton;

import { useState, useEffect, useContext } from 'react';
import { TrafficLightsContext } from './TrafficLightsProvider';
import './PedestrianTrafficLight.css'; 

const PedestrianTrafficLight = ({ orientation }) => {
  const { pedestrianColor, setPedestrianColor, isButtonDisabled, carColor } = useContext(TrafficLightsContext);
  const [activeLight, setActiveLight] = useState(pedestrianColor);

  useEffect(() => {
    setActiveLight(pedestrianColor);
  }, [pedestrianColor]);

  const toggleLight = () => {
    if (carColor === 'green') {
      // Якщо автомобільний світлофор показує зелене світло, пішохідний світлофор буде в стані "Чекай"
      console.log('Чекай');
      return;
    }
    const newLight = activeLight === 'red' ? 'green' : 'red';
    setActiveLight(newLight);
    setPedestrianColor(newLight);
  };

  return (
    <div className="trafficLightPageContainer">
      <div className={`pedestrianLightContainer ${orientation}`}>
        <div className="light red" style={{ opacity: activeLight === 'red' ? 1 : 0.3 }}></div>
        <div className="light green" style={{ opacity: activeLight === 'green' ? 1 : 0.3 }}></div>
        <button className="buttonLight" onClick={toggleLight} disabled={isButtonDisabled}>Змінити стан</button>
      </div>
    </div>
  );
};

export default PedestrianTrafficLight;

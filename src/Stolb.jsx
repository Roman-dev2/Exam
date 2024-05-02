

import HorizontalTrafficLight from './HorizontalTrafficLight'; 
import VerticalTrafficLight from './VerticalTrafficLight'; 
import PedestrianTrafficLight from './PedestrianTrafficLight';  
import './Stolb.css';  

const Stolb = () => {
  return (
    <div className="trafficLightSystem">
            <HorizontalTrafficLight />
        <div className="trafficLightWrapper">
            <PedestrianTrafficLight />
        </div>
    </div>
);
};

const Stolb2 = () => {
  return (
    <div className="trafficLightSystem2">
            <VerticalTrafficLight />
        <div className="trafficLightWrapper2">
            <PedestrianTrafficLight />
        </div>
    </div>
);
};


export { Stolb, Stolb2 };
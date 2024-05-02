import { useContext, useEffect } from 'react';
import { TrafficLightsContext } from './TrafficLightsProvider';

const TrafficLightController = () => {
    const {
        setCurrentColor,
        setPedestrianColor,
        setIsButtonDisabled
    } = useContext(TrafficLightsContext);

    useEffect(() => {
        const switchColor = async () => {
            // Червоний світло на 10 секунд
            setCurrentColor('red');
            setPedestrianColor('green');
            setIsButtonDisabled(false);
            await new Promise(resolve => setTimeout(resolve, 10000));
            
            // Жовтий світло на 2 секунди
            setCurrentColor('yellow');
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Зелений світло на 10 секунд
            setCurrentColor('green');
            setPedestrianColor('red');
            setIsButtonDisabled(true);
            await new Promise(resolve => setTimeout(resolve, 10000));
            
            // Жовтий світло знову на 2 секунди
            setCurrentColor('yellow');
            await new Promise(resolve => setTimeout(resolve, 2000));
        };

        const timerId = setInterval(switchColor, 24000); // Загальний цикл 24 секунди
        switchColor(); // Перший виклик при монтуванні

        return () => clearInterval(timerId);
    }, []);

    return null; // Компонент не рендерить JSX
};


export default TrafficLightController;

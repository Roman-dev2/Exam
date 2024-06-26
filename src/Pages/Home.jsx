
import './Home.css';

function Home() {
  return (
    <div>
      <h1>Іспит</h1>
    
<p>Розширити існуючий проєкт "Світлофор", який був створений під час семестрової роботи, додавши компонент "Пішохідний світлофор". Основні завдання:</p>
<p>
Створіть новий компонент PedestrianTrafficLight, який буде відображати два стани: "Чекай" (червоне світло) та "Йди" (зелене світло).
<br></br>
Компонент повинен змінювати свій стан автоматично кожні 10 секунд, або за допомогою кнопки, яку може натиснути користувач.
<br></br>
Відрефакторити лабораторну роботу використовуючи react context api (лекція №6).
створити TrafficLightsProvider
<br></br>
Забезпечте синхронізацію між автомобільним та пішохідним світлофорами. Пішохідне світло має бути "Чекай", коли автомобільний світлофор показує зелене світло.
<br></br>
Додайте логіку, яка блокуватиме кнопку пішохідного світлофора, коли активне зелене світло автомобільного світлофора.
<br></br>
Оновіть UI так, щоб він візуально представляв обидва світлофори (автомобільний і пішохідний).
<br></br>
Забезпечте чітке відображення поточного стану світлофорів та кнопки для зміни стану пішохідного світлофора.
<br></br>
Реалізувати можливість роботи з сервером
<br></br>
Опублікувати проєкт</p>
    </div>
  );
}

export default Home;
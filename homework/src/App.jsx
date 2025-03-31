import './App.css'

const items = [
  {
    name: 'Сыр Касу Марцу (Casu Marzu)',
    price: '€100'
  },
  {
    name: 'Суп из птичьих гнезд',
    price: '€200'
  },
  {
    name: 'Жареные тарантулы',
    price: '€50'
  },
  {
    name: 'Сюрстрёмминг (Surströmming)',
    price: '€30'
  },
  {
    name: 'Хаукарль (Hákarl)',
    price: '€40'
  }
];

function App() {

  return (
    <div>
      <h1>List of the 5 most unusual dishes</h1>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - Цена: {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App
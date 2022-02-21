import Image from './Image';
import Order from './Order';


/*
  O que o componente App é em relação a Order?
  Resposta: App é o componente pai em relação ao componete Order.

  Complete o código acima de forma que os pedidos referentes aos produtos headphone e energyDrink sejam filhos de App.
*/

function App() {
  const headphone = {
    id: 102,
    user: "cena@gmail.com",
    product: "Razer Headphone",
    price: {
      value: 99.99,
      currency: "dollars"
    }
  };

  const energyDrink = {
    id: 77,
    user: "cena@gmail.com",
    product: "Monster 500mL",
    price: {
      value: 9.99,
      currency: "dollars"
    }
  };

  return (
    <>
      <Image source='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg' alternativeText='Cute cat staring' />
      <article className='App'>
        <h1>Orders recently creates</h1>
        <Order order={headphone} />
        <Order order={energyDrink} />
      </article>
    </>
  );
}

export default App;

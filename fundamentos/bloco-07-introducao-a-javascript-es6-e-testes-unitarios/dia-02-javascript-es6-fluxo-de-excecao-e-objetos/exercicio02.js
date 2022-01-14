const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const costumerName = order.name;
  const costumerPhone = order.phoneNumber;
  const costumerAddress = `R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`;

  return `Olá, ${deliveryPerson}, entrega para ${costumerName}, Telefone: ${costumerPhone}, ${costumerAddress}.`;
}

console.log(customerInfo(order));

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const newCostumerName = order.name = 'Luiz Silva';
  const pizza = Object.keys(order.order.pizza);
  const drink = order.order.drinks.coke.type;
  const newPayment = order.payment.total = 50;
  return `Olá, ${newCostumerName}, o total do seu pedido de ${pizza.join(', ')} e ${drink} é R$${newPayment},00.`;
}

console.log(orderModifier(order));
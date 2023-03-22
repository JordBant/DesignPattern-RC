type Props = {}

const ProxyComponent = (props: Props) => {
  const toyCar = {
    wheels: {
      amount: 4,
      metalType: 'Carbon Fiber'
    },
    type: 'sedan',
    color: 'blue',
    model: 'Porsche',
    mileage: '8900 miles',
  }
  const proxyObj = new Proxy(toyCar, {
    get: (obj, prop) => {
      console.log(`The value of ${prop} is ${obj[prop]}`);
    },
  })

  return (
    <div>Proxy</div>
  )
}

export default ProxyComponent
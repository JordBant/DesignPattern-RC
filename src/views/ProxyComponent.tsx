type Props = {}

export const ProxyComponent = (props: Props) => {
  const Car = {
    wheels: {
      amount: 4,
      metalType: 'Carbon Fiber'
    },
    type: 'sedan',
    color: 'blue',
    model: 'Porsche',
    mileage: '8900 miles',
  }
  const carProxy = new Proxy( Car, {})

  return (
    <div>Proxy</div>
  )
}
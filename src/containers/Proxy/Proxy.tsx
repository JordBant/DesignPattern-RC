import { ProxyComponent } from "../../views/ProxyComponent"

/**
 * 
 * Reflect sanitization results back to UI, notify UI of
 * passed/failed tests of Form Input Validation
 * 
 */

type Props = {}

const ProxyDP = (props: Props) => {
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
    <ProxyComponent />
  )
}

export default ProxyDP
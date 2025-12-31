import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const backgroundImageUrl = 'https://images.pexels.com/photos/29611437/pexels-photo-29611437.jpeg'

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <>
    <div className='relative h-screen w-full flex items-center justify-center '>

      {/* Background Image */}
      <div className='fixed inset-0'>
        <img className='h-full w-full'
        src={backgroundImageUrl} alt="Backgorund Image" />
      </div>


      {/* Form */}
      <form className='z-10 rounded-2xl  p-2 shadow-xl'
      onSubmit={(e) => {
        e.preventDefault()
        convert()
      }}>

        {/* first input box */}
        <div className=''>
          <InputBox 
            label="From" 
            amount={amount}
            currencyOption={options}
            onCurrencyChange={(currency) => {setFrom(currency), convert()}}
            selectCurrency={from}
            onAmountChange={(amount) => setAmount(amount)}
          />
        </div>

        <div className='text-center'>
          <button className='rounded-lg m-2 bg-amber-100 px-4 py-2 font-medium hover:bg-amber-200 shadow-2xl'
          onClick={swap} >Swap</button>
        </div>
        
        <div>
          <InputBox 
            label="To"
            amount={convertedAmount}
            currencyOption={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
            onAmountChange={(convertedAmount) => setConvertedAmount(convertedAmount)}
            amountDisable={true}
          />
        </div>

        <div className='text-center'>
        <button className="rounded-lg bg-amber-100 px-4 py-2 font-medium hover:bg-amber-200 shadow-2xl"
        type='submit'>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
        </div>
      </form>
    </div>
    </>
  )
}

export default App

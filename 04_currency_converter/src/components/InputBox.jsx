// import { useId } from "react"

import { useId } from "react"

export default function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    selectCurrency,
    currencyOption = [],
    amountDisable = false,
    currenycDisable = false,

}) {
    const amountInputId = useId()
    
  return (
    <div className=" flex justify-between">
      <div className="flex  m-2 p-2">

        <label className="flex p-1 m-2"
        htmlFor={amountInputId}>{label}</label>
        
        <input className="flex-1 rounded-lg border px-3 py-2 text-sm bg-amber-50"
            id={amountInputId}
            type="number" 
            min='0'
            placeholder="Amount"
            value={amount}
            disabled={amountDisable}
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>

      <div className="flex flex-col m-2 p-2">
        <p className="text-xs opacity-40 ">
          Curreny Type</p>
        <select className="pt-2 bg-amber-100 rounded-xl p-1 cursor-pointer"
            value={selectCurrency}
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
            disabled={currenycDisable}  
        >
            {currencyOption.map((currency) => (
                <option key={currency} value={currency}>{currency.toUpperCase()}</option>
            ))}
        </select>
      </div>
    </div>
  )
}

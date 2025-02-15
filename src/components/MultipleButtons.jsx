import React from 'react'
import Button from './Button'

const MultipleButtons = ({ keyword }) => {
  return (
    <div className='flex w-4/5 m-auto  mt-8 items-center justify-center p-4 gap-4 flex-auto flex-wrap'>
      <Button keyword="sports" />
      <Button keyword="finance" />
      <Button keyword="Health" />
      <Button keyword="Inventions" />
      <Button keyword="defence" />
      <Button keyword="technology" />
      <Button keyword="medical" />
      <Button keyword="India" />
      <Button keyword="Politics" />
      <Button keyword="US" />
      <Button keyword="StockMarket" />
      <Button keyword="Economy" />
      <Button keyword="Buissines" />
      <Button keyword="Crimes" />
      <Button keyword="US" />
      <Button keyword="China" />
      <Button keyword="AI" />

    </div>
  )
}

export default MultipleButtons
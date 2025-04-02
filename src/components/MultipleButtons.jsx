import React from 'react'
import Button from './Button'

const MultipleButtons = ({ keyword }) => {
  return (
    <div className='flex  m-auto  items-center justify-center p-3 gap-4 flex-auto flex-wrap'>
      <Button keyword="sports" />
      <Button keyword="finance" />
      <Button keyword="Health" />
      <Button keyword="Inventions" />
      <Button keyword="defence" />
      <Button keyword="technology" />
      <Button keyword="medical" />
      <Button keyword="India" />
      <Button keyword="Politics" />

      <Button keyword="StockMarket" />

      <Button keyword="Buissines" />
      <Button keyword="Social Media" />


      <Button keyword="AI" />
      <Button keyword="Agriculture" />

    </div>
  )
}

export default MultipleButtons
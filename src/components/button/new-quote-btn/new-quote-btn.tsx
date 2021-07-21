import React, { ReactEventHandler } from 'react'
import '../button.scss'

type MyProps = {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void,
  onUpdateState?: () => void
}

function NewQuoteBtn(props: MyProps) {
  return (
    <button className='button button_new' onClick={props.onUpdateState}>New</button>
  )
}

export default NewQuoteBtn
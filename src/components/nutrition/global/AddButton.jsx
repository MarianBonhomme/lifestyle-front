import { Icon } from '@iconify/react'
import React from 'react'

export default function AddButton({btnClicked}) {
  return (
    <div className="max-w-fit flex items-center bg-blue rounded-full gap-1 pl-4 pr-5 py-2 cursor-pointer" onClick={btnClicked} >
      <Icon icon="fluent-emoji-high-contrast:plus" width={20} height={20} className="text-primary cursor-pointer" />
      <p className="text-primary font-bold">Add</p>
    </div>
  )
}
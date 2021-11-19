import React from 'react'

// 別ファイルに切り出された component を編集すると Fast Refresh が発動する
export function NestComponent() {
  console.log('NestComponent')
  return (
      <>
        <div><span>webpack5</span></div>
      </>
  )
}
import React from 'react'
interface helmetProps {
  title: string
}
export const Helmet = ({ title }: helmetProps) => {
  React.useEffect(() => {
    document.title = title + ' | Codeleap Test';
  }, [title])
  return (
    <>
    </>
  )
}
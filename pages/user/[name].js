import React from 'react'
import {useRouter} from 'next/router'

const DynamicPage = () => {
    const {query } = useRouter();

  return (
    <div>This is a {query.name} Page</div>
  )
}

export default DynamicPage;
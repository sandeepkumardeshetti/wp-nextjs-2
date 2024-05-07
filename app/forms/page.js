import React from 'react'
import getPageContent from '../lib/getPageContent'
import DomPurify from '../components/domPurify'



const Formpage = async() => {
    const formPageContent = await getPageContent('804')
  return (
    <main className='container' >
        <DomPurify domClass=""  domData={formPageContent.content.rendered} />
    </main>
  )
}

export default Formpage

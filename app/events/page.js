import React from 'react'

import getPageContent from '../lib/getPageContent'
import DomPurify from '../components/domPurify';

import  './event.css'




const Eventpage = async() => {
    const eventPageContent = await getPageContent("453");
  return (
    <main className={`container`}>
        <DomPurify domClass=""  domData={eventPageContent.content.rendered} />
        <h2>Events</h2>
      
    </main>
  )
}

export default Eventpage

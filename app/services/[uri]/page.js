import DomPurify from '@/app/components/domPurify';
import { SingleService } from '@/app/lib/graphQlqueries/servicesQueries/getSingleService'
import React from 'react'
import Image from 'next/image'


async function SingleServiceFunc(postId) {
  const ServiceRes = await SingleService(postId);
  return ServiceRes;
}

const SingleSerivespage = async ({ params }) => {
  // console.log(params.slug);
  const service = await SingleServiceFunc(params.uri);
  console.log(service)
  const serviceFinalData = service.service
  return (
    <main className='container'>
      <div className="row">
        <div className="col-md-6 mb-3">
          <div className="service-detail-img h-100">
            <a href="http://localhost/wpicms/service/enim-ex-vitae-voluptates-consequatur-in-eum/"><Image width={500} height={400} className="img-fluid card-img-top  rounded-0" alt="Enim ex vitae voluptates consequatur in eum"  src="http://localhost/wpicms/wp-content/uploads/2024/01/service-first.jpg" /></a>			 </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="service-detail-content">
            <header className="entry-header">
              <h1>{serviceFinalData.title}</h1>
            </header>
            <div className="entry-content line-h-28">
            <DomPurify domClass=""  domData={serviceFinalData.content}/>

            </div>
          </div>
        </div>

      </div>
    </main>
  )
}

export default SingleSerivespage

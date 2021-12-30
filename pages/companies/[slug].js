import { createClient } from 'contentful';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {

  const res = await client.getEntries({
    content_type: 'company'
  })


  const paths = res.items.map(item => {
    return {
      params: { slug: item.fields.slug }

    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {

  const { items } = await client.getEntries({        //return an array
    content_type: 'company',
    'fields.slug': params.slug
  })

  return {
    props: { company: items[0] }
  }

}

export default function CompanyDetails({ company }) {

  const { featuredImage, title, YearOfFounding, services, description } = company.fields;

  return (
    <div>

      <div className='banner'>
        <Image src={'https:' + featuredImage.fields.file.url}
          width={600}
          height={430} />

        <h2>{title}</h2>
      </div>

      <div className="info">
        <p>Founded in {YearOfFounding}</p>
        <h3>Services provided: </h3>

        {services.map(s => (

          <span key={s}> {s}</span>
        ))}
      </div>

      <div className="method">
        <h3> Description:</h3>
        <div>{documentToReactComponents(description)}</div>
      </div>

      <style jsx>{`
          h2,h3 {
            text-transform: uppercase;
          }
          .banner h2 {
            margin: 0;
            background: #fff;
            display: inline-block;
            padding: 20px;
            position: relative;
            top: -200px;
            left: 250px;
            
            box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
          }
          .info p {
            margin: 0;
          }
          .info span::after {
            content: ", ";
          }
          .info span:last-child::after {
            content: ".";
          }
      
      
      
      
      `}</style>

    </div>
  )
}
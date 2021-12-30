import { createClient } from 'contentful';
import CompanyCard from '../components/CompanyCard';


export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: 'company' });

  return {

    props: {
      companies: res.items
    }
  }

}

export default function Companies({ companies }) {

  console.log(companies);
  return (
    <div className="recipe-list">
      {companies.map(company => (

        <CompanyCard key={company.sys.id} company={company} />     //pass props to CompanyCard component

      ))}

      <style jsx>{`
        .recipe-list{
          display:grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 20px 100px;

          }
        `}
      </style>
    </div>
  )
}
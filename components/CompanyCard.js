import Link from 'next/link';
import Image from 'next/image';

export default function CompanyCard({ company }) {

    const { title, slug, YearOfFounding, thumbnail } = company.fields;

    return (
        <div className="card">
            <div className="featured">
                <Image src={'https:' + thumbnail.fields.file.url}
                    width={529}
                    height={430} />


            </div>

            <div className="content" >
                <div className="info">
                    <h4>{title}</h4>
                    <p>Founded in {YearOfFounding}</p>
                </div>

                <div className="actions">
                    <Link href={'/companies/' + slug}><a>Click for info</a></Link>
                </div>
            </div>

            <style jsx>{`
                    
                      .content {
                        background: #fff;
                        box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
                        margin: 0;
                        position: relative;
                        top: -40px;
                        left: -1px;
                         
                      }
                      .info {
                        margin-left:auto;
                        margin-right:auto;
                        padding: 16px;
                      }
                      .info h4 {
                        margin: 4px 0;
                        text-transform: uppercase;
                      }
                      .info p {
                        margin: 1px;
                        color: #777;
                        
                      }
                      .actions {
                        margin-top: -75px;
                        margin-bottom: -10px;
                        display: flex;
                        justify-content: flex-end;
                      }
                      .actions a {
                        color: #fff;
                        background: #f01b29;
                        padding: 16px 4px;
                        text-decoration: none;
                      }
                
                `}

            </style>
        </div>
    )
}

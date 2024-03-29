import { Link } from 'react-router-dom';
import { useCaseGroups } from '../hooks'
import PhotoItem from './PhotoItem';

function CaseGroupList() {

  const { isPending, error, data, isFetching } = useCaseGroups();

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <h1>Säckmalar <small><em>Coleophoridae</em></small></h1>
      <div className='small-thumbnails'>
        {
          data.map((item: TaxonGroup) => {
            return <div key={item.id}>
              <Link to={`/cases/${item.id}`}>
                <PhotoItem src={item.image}></PhotoItem>
              </Link>
              <p className='text-center'>
                <b>{item.name}</b> {item.description}
              </p>
            </div>
          })
        }
      </div>
      {isFetching && <div>Updating...</div>}
    </div>
  )
}

export default CaseGroupList

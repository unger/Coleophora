import { useTaxons } from '../hooks'
import GroupPhoto from './GroupPhoto'

function GroupDetailTaxonList({group}: {group: TaxonGroup}) {

  const { isPending, error, data, isFetching } = useTaxons(group.id);

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <p>{data.length} arter</p>
      <div className='small-thumbnails'>
        {
          data.map((item: Taxon) => {
            return <GroupPhoto taxon={item} key={item.artId} groupId={group.id}></GroupPhoto>
          })
        }
      </div>
      {isFetching && <div>Updating...</div>}
    </div>
  )
}

export default GroupDetailTaxonList

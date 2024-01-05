import useTaxons from '../hooks/useTaxons'
import GroupPhoto from './GroupPhoto'

function GroupDetailTaxonList({group}: {group: TaxonGroup}) {

  const { isPending, error, data, isFetching } = useTaxons();

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  var filteredData = data.filter((item: Taxon) => item.group.includes(group.id));

  return (
    <div>
      <p>{filteredData.length} arter</p>
      <div className='small-thumbnails'>
        {
          filteredData
          .map((item: Taxon) => {
            return <GroupPhoto taxon={item} key={item.artId} groupId={group.id}></GroupPhoto>
          })
        }
      </div>
      {isFetching && <div>Updating...</div>}
    </div>
  )
}

export default GroupDetailTaxonList

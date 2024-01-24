import { useState } from 'react'
import { usePhotos } from '../hooks'
import PhotoDescription from './PhotoDescription'
import PhotoItem from './PhotoItem'
import PhotoFullscreenSlideShow from './PhotoFullscreenSlideShow'
import NoPhoto from './NoPhoto'

interface Props {
    inData?: TaxonPhoto[]
    slug: string
    stage: Stage
    headline: string
}

interface QueryResult {
    isPending: boolean
    error?: Error | null
    data: TaxonPhoto[] | undefined
    isFetching: boolean
}

function PhotoList({ slug, stage, inData }: Props) {
    const [openIndex, setOpenIndex] = useState<number>(-1)

    const { isPending, error, data, isFetching }: QueryResult =
        inData !== undefined ? { isPending: false, error: undefined, data: inData, isFetching: false } : usePhotos(stage, undefined, slug, false)

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    if (data === undefined) return 'no data'

    return (
        <>
            <h2>
                <small>
                    ({data.length} bild{data.length !== 1 && 'er'})
                </small>
            </h2>
            <div className="small-thumbnails">
                {data.length === 0 ? (
                    <NoPhoto />
                ) : (
                    data.map((item: TaxonPhoto, index: number) => {
                        return (
                            <div
                                key={item.bildId}
                                onClick={() => {
                                    setOpenIndex(index)
                                }}
                            >
                                <PhotoItem src={item.image}></PhotoItem>
                                <PhotoDescription photo={item}></PhotoDescription>
                            </div>
                        )
                    })
                )}
            </div>
            {isFetching && <div>Updating...</div>}

            {openIndex !== -1 && <PhotoFullscreenSlideShow data={data} selectedIndex={openIndex} setSelectedIndex={setOpenIndex}></PhotoFullscreenSlideShow>}
        </>
    )
}

export default PhotoList

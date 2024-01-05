function PhotoItem({ src }: { src?: string }) {

    return (
        src
        ? <img src={import.meta.env.BASE_URL + src.substring(1)} className='img img-responsive' />
        : <div className='placeholder'>Ingen bild</div>
    )
}

export default PhotoItem

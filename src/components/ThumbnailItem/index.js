import './index.css'

const ThumbnailItem = ({imageDetails, isActive, updateActiveImage}) => {
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails

  const onClickThumbnail = () => {
    updateActiveImage(id)
  }

  const activeThumbnailClassName = isActive ? 'active-thumbnail' : ''

  return (
    <li className="thumbnail-item">
      <button
        type="button"
        className={`thumbnail-button ${activeThumbnailClassName}`}
        onClick={onClickThumbnail}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className="thumbnail-image"
        />
      </button>
    </li>
  )
}

export default ThumbnailItem

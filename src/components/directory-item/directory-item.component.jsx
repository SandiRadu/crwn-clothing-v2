import './directory-item.styles.scss'

const DirectoryItem = ({ category}) => {
    const {imageUrl, title} = category;
    return (
        <div key={category.id} className="director-item-container">
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className="directory-item-body">
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
}

export default DirectoryItem;
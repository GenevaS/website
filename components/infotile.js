function InfoTile( {pictureOnLeft, pictureSrc, children} ) {
    if (pictureOnLeft) {
	    return (
            <article className="tile is-child notification is-primary px-3
                                is-flex is-flex-direction-row is-align-items-center">
                <figure className="image is-128x128 is-flex is-align-items-center">
                    <img src={pictureSrc} />
                </figure>

                <div className='is-flex-grow-1 is-width-70-percent pl-3'>
                    {children}
                </div>
            </article>

	    )
    }
    else {
        return (
            <article className="tile is-child notification is-primary-light px-3
                                is-flex is-flex-direction-row is-align-items-center">
                <div className='is-flex-grow-1 is-width-70-percent pr-3'>
                    {children}
                </div>

                <figure className="image is-128x128 is-flex is-align-items-center">
                    <img src={pictureSrc} />
                </figure>
            </article>
        )
    }
}
export default InfoTile

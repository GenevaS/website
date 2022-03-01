/* ---------------------------------------------------------------
 * ITEM TILE (Content and Layout)
 * ---------------------------------------------------------------
 * Variable 'pictureOnLeft' determines if the tile picture is on
 * the left side or right side of the tile content.
 * ---------------------------------------------------------------
 */

import Image from 'next/image'

// Tile Function
function InfoTile( {pictureOnLeft, pictureSrc, pictureAlt, tileTitle, tileLink, children} ) {
    if (pictureOnLeft) {
	    return (

            /*
             * ---------------------------------------------------------------
             * Tile Layout
             * --------------------------------------
             * | Title                         Link |
             * |------------------------------------|
             * |          |                         |
             * |   Img    |   Content               |
             * |          |                         |
             * |          |                         |
             * --------------------------------------
             * ---------------------------------------------------------------
             */

            <div className='columns is-flex-direction-column'>
                <div className='column'>
                    <div className='tile is-child notification
                                    is-primary has-dark-grey-border
                                    px-3'>
                        <div className='is-flex is-align-items-center'>
                            <h2 className="title is-flex-grow-1 is-6 mb-0">{tileTitle}</h2>
                            {tileLink}
                        </div>
                        <hr className='has-background-grey my-3'/>
                        <article className="is-flex is-flex-direction-row is-align-items-center">
                            <figure className="image is-128x128
                                               is-flex is-align-items-center">
                                <Image
                                    priority
                                    src={pictureSrc}
                                    layout="fill"
                                    alt={pictureAlt}/>
                            </figure>

                            <div className='is-flex-grow-1 is-width-70-percent px-3'>
                                {children}
                            </div>
                        </article>
                    </div>
                </div>
            </div>
	    )
    }
    else {
        return (

            /*
             * ---------------------------------------------------------------
             * Tile Layout
             * --------------------------------------
             * | Title                         Link |
             * |------------------------------------|
             * |                         |          |
             * |   Content               |   Img    |
             * |                         |          |
             * |                         |          |
             * --------------------------------------
             * ---------------------------------------------------------------
             */

            <div className='columns is-flex-direction-column'>
                <div className='column'>
                    <div className='tile is-child notification
                                    has-background-primary-light has-dark-grey-border
                                    px-3'>
                        <div className='is-flex is-align-items-center'>
                            <h2 className="title is-flex-grow-1 is-6 mb-0">{tileTitle}</h2>
                            {tileLink}
                        </div>
                        <hr className='has-background-grey my-3'/>
                        <article className="is-flex is-flex-direction-row is-align-items-center">
                            <div className='is-flex-grow-1 is-width-70-percent px-3'>
                                {children}
                            </div>

                            <figure className="image is-128x128
                                               is-flex is-align-items-center">
                                <Image
                                    priority
                                    src={pictureSrc}
                                    layout="fill"
                                    alt={pictureAlt}/>
                            </figure>
                        </article>
                    </div>
                </div>
            </div>
        )
    }
}
export default InfoTile

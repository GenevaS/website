/* ---------------------------------------------------------------
 * ITEM TILE (Content and Layout)
 * ---------------------------------------------------------------
 * Variable 'pictureOnLeft' determines if the tile picture is on
 * the left side or right side of the tile content.
 * ---------------------------------------------------------------
 */

import Image from 'next/image'
import imgLoader from "../lib/imageloader"

// Tile Function
export default function InfoTile( {pictureOnLeft, pictureSrc, pictureAlt, tileTitle, tileLink, children, lighter} ) {
    if(pictureSrc == null)
    {
        if(lighter)
        return (
                <div className='columns is-flex-direction-column'>
                    <div className='column'>
                        <div className='tile is-child notification
                                        has-background-primary-light has-dark-grey-border
                                        px-3'>
                            <div className='is-flex is-align-items-center'>
                                <h2 className="title is-flex is-flex-grow-1 is-6 mb-0">{tileTitle}</h2>
                                {tileLink}
                            </div>
                            <hr className='has-background-grey my-3'/>
                            <article className="is-flex is-flex-direction-column
                                                is-flex-grow-1
                                                is-align-items-center px-3">
                                {children}
                            </article>
                        </div>
                    </div>
                </div>
        )
        else
            return (
                <div className='columns is-flex-direction-column'>
                    <div className='column'>
                        <div className='tile is-child notification
                                        has-background-primary has-dark-grey-border
                                        px-3'>
                            <div className='is-flex is-align-items-center'>
                                <h2 className="title is-flex is-flex-grow-1 is-6 mb-0">{tileTitle}</h2>
                                {tileLink}
                            </div>
                            <hr className='has-background-grey my-3'/>
                            <article className="is-flex is-flex-direction-column
                                                is-flex-grow-1
                                                is-align-items-center px-3">
                                {children}
                            </article>
                        </div>
                    </div>
                </div>
            )
    }
    else
    {
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
                                <div className='is-flex is-hidden-mobile'>
                                    <div className="is-flex is-align-items-center">
                                        <Image
                                            priority
                                            loader={imgLoader}
                                            src={pictureSrc}
                                            height={250}
                                            width={250}
                                            alt={pictureAlt}/>
                                    </div>

                                    <div className='is-flex is-flex-grow-1 is-flex-direction-column
                                                    is-justify-content-center
                                                    is-width-70-percent px-3'>
                                        {children}
                                    </div>
                                </div>

                                <div className='is-flex is-flex-direction-column
                                                is-align-content-center
                                                is-hidden-tablet'>
                                    <div className="is-flex is-justify-content-center mb-3">
                                        <Image
                                            priority
                                            loader={imgLoader}
                                            src={pictureSrc}
                                            height={250}
                                            width={250}
                                            alt={pictureAlt}/>
                                    </div>

                                    <div className='is-flex is-flex-grow-1 is-flex-direction-column
                                                    px-3'>
                                        {children}
                                    </div>
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
                                <div className='is-flex is-hidden-mobile'>

                                    <div className='is-flex is-flex-grow-1 is-flex-direction-column
                                                    is-justify-content-center
                                                    is-width-70-percent px-3'>
                                        {children}
                                    </div>

                                    <div className="is-flex is-align-items-center">
                                        <Image
                                            priority
                                            loader={imgLoader}
                                            src={pictureSrc}
                                            height={250}
                                            width={250}
                                            alt={pictureAlt}/>
                                    </div>

                                </div>

                                <div className='is-flex is-flex-direction-column
                                                is-align-content-center
                                                is-hidden-tablet'>

                                    <div className="is-flex is-justify-content-center mb-3">
                                        <Image
                                            priority
                                            loader={imgLoader}
                                            src={pictureSrc}
                                            height={250}
                                            width={250}
                                            alt={pictureAlt}/>
                                    </div>

                                    <div className='is-flex is-flex-grow-1 is-flex-direction-column
                                                    px-3'>
                                        {children}
                                    </div>

                                </div>

                            </article>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

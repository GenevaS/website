/* ---------------------------------------------------------------
 * Custom image loader so that the webpage can be generated as
 * a static build ("next export", see package.json).
 * ---------------------------------------------------------------
 */

export default function staticLoader ({ src, width, quality }){
    return `${src}?w=${width}&q=${quality || 75}`
}

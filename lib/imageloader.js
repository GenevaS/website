/* ---------------------------------------------------------------
 * Custom image loader so that the webpage can be generated as
 * a static build ("next export", see package.json).
 * ---------------------------------------------------------------
 */

export default function staticLoader ({ src, width }){
    return `${src}?w=${width}`
}

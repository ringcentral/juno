import MuiUseForkRef from '@material-ui/core/utils/useForkRef';

/**
 * That method will give you ability fork same value `ref object` or `method`
 * Example:
 * ```ts
 * const refA = useRef();
 * const refB = useRef();
 *
 * const ref = useForkRef(refA, refB)
 *
 * useEffect(() => {
 *   console.log(refA); // get that current div dom
 *   console.log(refB); // also get that current div dom
 * },[])
 *
 * return <div ref={ref} />
 * ```
 */
export const useForkRef = MuiUseForkRef;

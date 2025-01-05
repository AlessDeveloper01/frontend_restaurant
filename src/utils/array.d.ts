declare const groupByFields: (array: Array<any>, f: any) => Array<any>;
/**
 * split array into chunks
 * @param array - array to split
 * @param chunkSize - chunk size
 * @returns
 */
declare const splitArray: (array: Array<any>, chunkSize: number) => any[][];
export { groupByFields, splitArray };

export const toListParameter = (list: Array<any>): string => {
    return list.toString().replaceAll(',', '||');
}
type Options = {
  style?:string,
  
}
export function option (
  options: Object | undefined,
  type: string,
  parameter: string
) {
  return (options as Object)[type as 'style' |][parameter]
};

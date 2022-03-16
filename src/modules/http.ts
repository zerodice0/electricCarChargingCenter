export const get = async (
  url: string,
  options: RequestInit = {}
) => {
  const response = await fetch(url, {
    ...options,
    method: 'GET',
  });
  
  console.log(response);
}
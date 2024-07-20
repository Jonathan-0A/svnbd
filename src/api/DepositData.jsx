import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';

const api = 'https://script.google.com/macros/s/AKfycbyKUwvsQjj-6sB_Bpq9e7wfHyjHqZjDTDqO1K9Rdd6E54CO19nreqoZWBydLovvz1uOkg/exec'
export const getData = async (fcno) => {
  let url = `${api}?fc=${fcno}`
  try {
    const res = await axios.get(url);
    console.log(res)
    console.log(res.data)
    return res.data ? res.data : { content: [] }; // Ensure it returns an object with content array
  } catch (error) {
    console.error(error);
    return { content: [] }; // Return an object with content array in case of error
  }
}
export const totalData = async () => {
  const res = await axios.get(api)
  console.log(res.data.content.length)
  return await res.data.content.length;
}
export const postData = (d) => {
  axios({
    method: 'post',
    url: api,
    data: d
  }).then((res) => {
    console.log(res)
    setIsLoading(false)
    toast.success('Member added successfully')
  }).catch((err) => {
    console.log(err)
    toast.error('Something went wrong')
    setIsLoading(false)
  })
}
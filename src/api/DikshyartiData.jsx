import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';

const api = 'https://script.google.com/macros/s/AKfycbzFZG1dJ-UVv8aXbLqO4XXO2xI154GL5UHIH7caGHZi08AGqIwpNkrtXUfq3a2JujWbVA/exec'
export const getData = async (fcno) => {
  let url = `${api}?fc=${fcno}`
  const res = await axios.get(url)
  return await res.data;
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
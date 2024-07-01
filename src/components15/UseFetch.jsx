import React, {useState, useEffect} from 'react';

const UseFetch = (url) => {

const [data, setData] = useState([]);

    useEffect(() => {
      async function getData(){
        const call = await fetch(url);
        const res =  await call.json();
        // console.log(res);
        setData(res);
  
        
      }
  
      getData();
    },[])
  return [data];
}

export default UseFetch

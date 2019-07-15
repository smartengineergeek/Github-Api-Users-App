import React,{ useEffect, useState } from 'react';

function Service(url){
    const [ data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    async function fetchData(){
        const response = await fetch(url);
        const json = await response.json();
         setData(json);
         setLoading(false);
      }
      useEffect(() => {
        fetchData();
      }, []);
      return [data, loading];
}

export default Service;
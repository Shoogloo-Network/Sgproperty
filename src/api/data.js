

// GET Request
const fetchData = async (endpoint,setter)=>{
    try{
        const response = await fetch(`http://localhost:8000/${endpoint}`);
    const data = await response.json();
    setter(data);
    }catch(error){
        console.error(error);
    }
    }


    export {fetchData};
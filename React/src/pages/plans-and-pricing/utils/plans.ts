export const fetchPlansData= async ()=>{
      const response = await fetch("/data/plans.json");
    const data = await response.json();
    return data;
}
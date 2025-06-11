
export const fetchPartnersData =async  ()=>{
    const response = await fetch("/data/partners.json");
    const data = await response.json();
    return data;
}
export const fetchOffers = async ()=>{
    const resposne = await fetch("/data/partnerOffers.json")
    const data = await resposne.json()
    return data;
}
export const fetchDocuments = async ()=>{
    const resposne = await fetch("/data/documents.json")
    const data = await resposne.json()
    return data;
}
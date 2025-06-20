 
 export const handleCopy = async (affiliateLink:string,setCopied:(copied:boolean)=>void) => {
        try {
            await navigator.clipboard.writeText(affiliateLink);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy!", err);
        }
    };
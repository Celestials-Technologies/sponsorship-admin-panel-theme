  export const handleCopy = async (affiliateLink,setCopied) => {
        try {
            await navigator.clipboard.writeText(affiliateLink);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy!", err);
        }
    };
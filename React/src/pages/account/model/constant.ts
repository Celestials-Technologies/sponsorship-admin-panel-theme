
    export const handleSubmitBillingForm = (e,setError) => {
        e.preventDefault()

        if (!data.address || !data.city || !data.state || !data.zip || !data.country) {
            setError("Please fill in all required fields.")
        } else {
            setError("")
            console.log("Billing Info Submitted:", data)

        }
    }
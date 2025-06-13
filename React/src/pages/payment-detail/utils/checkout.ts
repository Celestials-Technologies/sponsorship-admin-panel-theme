export  const handleSubmit = (e,formData,setFormData) => {
        e.preventDefault();
    
        const requiredFields = [
            "address",
            "city",
            "state",
            "zip",
            "cardNumber",
            "nameOnCard",
            "securityCode",
        ];

        const missingFields = requiredFields.filter((field) => !formData[field].trim());

        if (missingFields.length > 0) {
            alert("Please fill all required fields.");
            return;
        }


        setFormData({
            address: "",
            city: "",
            state: "",
            zip: "",
            country: "",
            cardNumber: "",
            nameOnCard: "",
            securityCode: "",
        })
    };

    export const handleChange = (field, value,setFormData) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };
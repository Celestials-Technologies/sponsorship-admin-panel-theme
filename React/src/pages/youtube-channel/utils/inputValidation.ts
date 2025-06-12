function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidURL(url) {
    try {
        new URL(url);
        return true;
    } catch (_) {
        return false;
    }
}

export function formSubmissionHandler(e,setErrors,) {
    e.preventDefault();
    setErrors([]);

    const formData = new FormData(e.target);
    const name = formData.get('channel-name')?.trim();
    const url = formData.get('channel-url')?.trim();
    const category = formData.get('category')?.trim();
    const email = formData.get('email')?.trim();
    const description = formData.get('description')?.trim();

    const newErrors = [];

    if (!name) newErrors.push("Please enter the channel name.");
    if (!url || !isValidURL(url)) newErrors.push("Please provide a valid Channel URL.");
    if (!email || !isValidEmail(email)) newErrors.push("Please enter a valid email address.");

    if (newErrors.length > 0) {
        setErrors(newErrors);
        return;
    }

}
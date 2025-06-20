import  React from 'react';
function isValidEmail(email:string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidURL(url:string) {
    try {
        new URL(url);
        return true;
    } catch (_) {
        return false;
    }
}

export function formSubmissionHandler(
  e: React.FormEvent,
  setErrors: (error: string[]) => void
) {
  e.preventDefault();
  setErrors([]);

  const form = e.target as HTMLFormElement;
  const formData = new FormData(form);

  const name = formData.get('channel-name')?.toString().trim();
  const url = formData.get('channel-url')?.toString().trim();
  const category = formData.get('category')?.toString().trim();
  const email = formData.get('email')?.toString().trim();
  const description = formData.get('description')?.toString().trim();

  const newErrors: string[] = [];

  if (!name) newErrors.push("Please enter the channel name.");
  if (!url || !isValidURL(url)) newErrors.push("Please provide a valid Channel URL.");
  if (!email || !isValidEmail(email)) newErrors.push("Please enter a valid email address.");

  if (newErrors.length > 0) {
    setErrors(newErrors);
    return;
  }

}

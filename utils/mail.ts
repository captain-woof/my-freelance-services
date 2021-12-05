export const sendEmail = async (from: string, name: string, subject: string, body: string) => {
    const response = await fetch(`/api/sendEmail?from=${encodeURIComponent(from)}&name=${name}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`)
    return response.ok
}
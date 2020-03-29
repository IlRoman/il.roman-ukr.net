const baseUrl = 'https://www.instagram.com'

export const getUserData = (text) => {
    return fetch(`${baseUrl}/${text}`)
        .then(response => response.json())
}
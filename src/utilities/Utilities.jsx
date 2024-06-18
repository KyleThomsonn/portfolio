export const restBase = 'https://kylescode.com/portfolio/wp-json/wp/v2/'

// get year function
function getYear() {
    const currentDate = new Date();
    return currentDate.getFullYear();
}

export { getYear };

// get current date
export const currentDate = Date();
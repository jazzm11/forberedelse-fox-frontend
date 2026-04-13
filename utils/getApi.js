const BACKEND_API_URL = process.env.BACKEND_API_URL;

const getApi = async (endpoint) => {
    try {
        const response = await fetch(`${BACKEND_API_URL}${endpoint}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data from API:", error);
        throw error;
    }
}

module.exports = getApi;
const BACKEND_API_URL = process.env.BACKEND_API_URL;

const postApi = async (endpoint, data) => {
    try {
        const response = await fetch(`${BACKEND_API_URL}${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error fetching POST from API:", error);
        throw error;
    }
}

module.exports = postApi;
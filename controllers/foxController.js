// API Utilities
const getApi = require("../utils/getApi");
const postApi = require("../utils/postApi");

// GET
const getRandomFox = async (req, res) => {
  try {
    const response = await getApi("/fox");
    res.render("index", { fox: response });
    console.log("Fetched random fox:", response);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch random fox" });
    console.log("Error fetching random fox:", error);
  }
};

const getStats = async (req, res) => {
  try {
    const response = await getApi("/fox/stats");
    res.render("stats", { foxes: response.foxes });
    console.log("Fetched stats:", response);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch stats" });
    console.log("Error fetching stats:", error);
  }
};

// POST 
const voteFox = async (req, res) => {
    try {
        const { winnerUrl, fox1, fox2 } = req.body;
        const loserUrl = fox1 === winnerUrl ? fox2 : fox1;

        const result = await postApi("/fox/vote", {
            winnerUrl: winnerUrl,
            loserUrl: loserUrl
        });
        if (result.success) {
            console.log("Vote recorded successfully");
        } else {
            console.log("Failed to record vote:", result.message);
        }

        res.redirect("/"); // or wherever
    } catch (err) {
        console.error(err);
        res.send("Error voting");
    }
};

module.exports = {
  getRandomFox,
  getStats,
  voteFox
};
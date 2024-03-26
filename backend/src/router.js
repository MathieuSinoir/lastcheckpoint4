const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const teamControllers = require("./controllers/teamControllers");

// Route to get a list of items
router.get("/items", itemControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);

router.use("/api", router);
router.get("/", (req, res) => res.send("API-TEAM"));
router.get("/team", teamControllers.getAllTeam);
router.get("/team/:poste", teamControllers.getPlayersByPosition);

router.post("/team", teamControllers.addPlayer);

router.put("/team/:id", teamControllers.updatePlayer);

router.delete("/team/:id", teamControllers.deletePlayer);

/* ************************************************************************* */

module.exports = router;

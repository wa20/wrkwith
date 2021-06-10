const router = require("express").Router()
const { User, Project } = require("../../../models")

router.delete("/", async (req, res) => {
	try {
		
		const projectData = await Project.destroy({
			where: {
				id: req.body.id
			},
		})

		if (!projectData) {
			res
				.status(404)
				.json({ message: "No project found with this id!" })
			return
		}

		res.status(200).location.replace("/homepage")
	} catch (err) {
		res.status(500).json(err)
	}
})

module.exports = router

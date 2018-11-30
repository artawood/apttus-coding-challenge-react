const axios = require("axios");
const router = require("express").Router();

router.get("/gitrepos", (req, res) => {
  axios
    .get("https://api.github.com/search/repositories?", { params: req.params })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

module.export = router;

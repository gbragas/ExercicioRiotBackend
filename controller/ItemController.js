const axios = require("axios")

module.exports = {
    async index(req, res) {
        await axios
            .get("http://ddragon.leagueoflegends.com/cdn/10.14.1/data/pt_BR/item.json")
            .then(response => {
                return res.json(response.data)
            })
            .catch(error => {
                return res.json({ status: 404, conteudo: 'NotFound' })
            })
    },
}
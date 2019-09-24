const express = require("express")
const api = express()

const PORT = process.env.PORT || 2153

api.get("/", (req, res) => {
  res.json({ data: "Hello World" })
})

api.listen(PORT, () => {
  console.log(`
    API is listening on http://localhost:${PORT}
                ctrl + c to quit
  `)
})

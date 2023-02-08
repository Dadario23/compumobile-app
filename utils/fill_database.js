
const sample = { device: "dispositivo", brand: "marca", model: "modelo" }

let output = []
for (let i = 0; i < 10000; i++) {
	output.push({
		device: `${sample.device}-${i}`,
		brand: `${sample.brand}-${i}`,
		model: `${sample.model}-${i}`,
	})
}

const fs = require("fs");
const user = "angel"

console.log(output)
var jsonOutput = JSON.stringify(output)

fs.writeFile(`./data/${user}.json`, jsonOutput, "utf8", function(err) {
	if (err) {
		console.log("erroooor")
	   console.log(err)
	}
 }
)

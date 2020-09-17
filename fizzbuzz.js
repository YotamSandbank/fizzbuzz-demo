const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());


app.post('/fizzbuzz', (req, res) => {
    console.log(req.body);
	console.log();
	if(("count" in req.body) & (typeof req.body.count == "number") & (req.body.count === parseInt(req.body.count, 10)) & (req.body.count > 0)){	
		var result = "";
		for (var i = 1; i <= req.body.count; i++) {
			var f = i % 3 == 0, b = i % 5 == 0;
			result = result.concat(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
			result = result.concat("\n")
		}
		res.send(result);
	}
	else {
		throw new Error('Invalid input, format is {"count":n}')
	}
});

app.listen(8080, () => console.log(`Started server at http://localhost:8080!`));
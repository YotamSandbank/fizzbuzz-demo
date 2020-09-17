# fizzbuzz-demo

Fizzbuzz demo for DoiT International

## Details

A Fizzbuzz  ExpressJS application

## Usage
Pull docker:

    docker pull yotamsandbank/fizzbuzz-demo

Run:

    docker run -p 49160:8080 -d yotamsandbank/fizzbuzz-demo
    
Send post request:

    curl -H "Content-Type: application/json" --request POST -d '{"count":30}' http://localhost:49160/fizzbuzz
    
With data.json from this repository


## Testing
The app is running at:

<https://fizzbuzz-y3cdxhqi6a-uc.a.run.app>

To test it, run:

    curl -H "Content-Type: application/json" --request POST -d '{"count":30}' https://fizzbuzz-y3cdxhqi6a-uc.a.run.app/fizzbuzz


## Credits
Yotam Sandbank <yotamsandbank@gmail.com>

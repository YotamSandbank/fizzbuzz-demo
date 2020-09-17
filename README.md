# fizzbuzz-demo

Fizzbuzz demo for DoiT International.

## Details

A Fizzbuzz  ExpressJS application

## Usage
Pull docker:

    docker pull yotamsandbank/fizzbuzz-demo

Run:

    docker run -p 49160:8080 -d yotamsandbank/fizzbuzz-demo
    
Send post request:

    curl -H "Content-Type: application/json" --request POST -d '{"count":30}' https://fizzbuzz-y3cdxhqi6a-uc.a.run.app/fizzbuzz
    
With data.json from this repository


## Testing

    curl -H "Content-Type: application/json" --request POST -d "@data.json" https://fizzbuzz-y3cdxhqi6a-uc.a.run.app/fizzbuzz




## Credits
Yotam Sandbank <yotamsandbank@gmail.com>

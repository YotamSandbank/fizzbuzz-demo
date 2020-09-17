# fizzbuzz-demo

Fizzbuzz demo for DoiT International.

## Details

A Fizzbuzz  ExpressJS application

## Usage
Pull docker from here:
https://hub.docker.com/r/yotamsandbank/fizzbuzz-demo
Run:

    docker run -p 49160:8080 -d yotamsandbank/fizzbuzz-demo
    
Send post request:

    curl -H "Content-Type: application/json" --request POST -d "@data.json" http://localhost:49160/fizzbuzz
    
With data.json from this repository


## Testing
Send a post request with json in the format {"count":n} to the following:
https://vibrant-waters-289607.df.r.appspot.com/fizzbuzz

You can send the request using this:
https://reqbin.com/


## Credits
Yotam Sandbank <yotamsandbank@gmail.com>

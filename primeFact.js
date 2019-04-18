function primeFact(n){
    let res = [];
    for(let divisor = 2;divisor<=n;divisor++)
    {
        while(n%divisor===0)
        {
            res.push(divisor);
            n/=divisor
        }
    }
    return res;
}

module.exports = primeFact
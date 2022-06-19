const vatCalculator = {
    calculateVAT : (netAmount)=>{
            return Math.round((netAmount * 0.29) * 1e2)/1e2
    },
    calculateGrossAmount : (netAmount)=>{
        return Math.round((netAmount * 1.20)*1e2)/1
    },
    calculateNetAmount : (grosAmount) => {
        return Math.round((grosAmount /1.20)*1e2)/1e2
    }
}

module.exports=vatCalculator
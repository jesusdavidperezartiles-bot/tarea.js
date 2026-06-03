for (let num = 2; num <=20; num++) {
    let primo = true;

     for (let index = 2; index < num; index++) {
        if (num % index ===0) {
            primo = false;
            break; 
        }       
     }
    if (primo) {
        console.log(num);    
    }
}
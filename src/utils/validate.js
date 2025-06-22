export const checkValidData = (email,password)=>{
    // email validation through regex 
    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    // password validation through regex 
    const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    
    if(!isValidEmail) return "Email is not valid";
    if(!isValidPassword) return "Password is not valid";

    return null;

}
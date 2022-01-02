function checkForName(e) {
    console.log("::: checking for empty input :::");
    if(e===''){console.log("::: input is empty :::");return false};
    console.log("::: checking input for being URL :::", e);
    let u;
    try {
        u = new URL(e);
    } catch (err) {
        console.log("::: you  didn't enter a valid URL :::",err);
        console.log("::: trying to use it as text ... :::");
        return false;
    }
    console.log("::: URL is valid :::");
    return u.protocol === "http:" || u.protocol === "https:";
}


export { checkForName }

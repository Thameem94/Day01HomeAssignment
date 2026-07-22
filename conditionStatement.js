let testtype = 'functional'

function getruntest(){
    switch (testtype) {
        case ('sanity'):
            console.log("testing sanity");
            break;
        case ('regression'):
            console.log("testing regression");
            break;
        default:
            console.log("testing smoke");
            break;
    }
}getruntest()

let launchBrowser = 'safari'
function getbrowser(){
    
    if(launchBrowser === "chrome"){
        console.log('chrome');
        
    }else if (launchBrowser==="edge"){
        console.log('edge');
    }else{
        console.log('unsupported');
    }
}getbrowser()
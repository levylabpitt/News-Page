export default function runGoogleScript(functionName){
    return new Promise((resolve, reject) => {
        google.script.run.withSuccessHandler( data => {
            resolve(data)
        }).withFailureHandler( er => {
            reject(er)
        })[functionName]()
    })
}
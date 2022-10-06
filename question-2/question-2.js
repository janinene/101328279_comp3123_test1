const resolvedPromise = () => {
    return new Promise( (resolve, reject) => {
        let success = {'message': 'delayed success!'}
        setTimeout( () => resolve(success, 500))
    })
}

const rejectPromise = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            try {
                reject({error: "delayed exception!"})
            }
            catch (e) {
                console.error(e)
            }
        },500)
    })
}

resolvedPromise().then((msg) => console.log(msg));
rejectPromise().catch((msg) => console.error(msg));

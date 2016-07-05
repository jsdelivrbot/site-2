export default (url) => {
    return {
        post: (data)=> fetch(url, {
                        method: 'POST',
                        headers: {
                          'Accept': 'application/json',
                          'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                      }),
        get: ()=> fetch(url),
        update: (data)=>fetch(url, { method: 'UPDATE',
                                                headers: {
                                                  'Accept': 'application/json',
                                                  'Content-Type': 'application/json'
                                                },
                                                body: JSON.stringify(data)
                                              })
    }
}
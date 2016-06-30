import fetch from 'whatwg-fetch';
export default (url) => {
    return {
        post: (data)=> fetch('/users', {
                        method: 'POST',
                        headers: {
                          'Accept': 'application/json',
                          'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                      }),
        get: ()=> fetch(url),
        update: (data)=>fetch('/users', { method: 'UPDATE',
                                                headers: {
                                                  'Accept': 'application/json',
                                                  'Content-Type': 'application/json'
                                                },
                                                body: JSON.stringify(data)
                                              })
    }
}
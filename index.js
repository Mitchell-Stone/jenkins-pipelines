function main(){
    axios({
        method: 'get',
        url: 'https://www.google.com/'
    }).then(resp => {
        console.log(resp.data)
    })
}
main()
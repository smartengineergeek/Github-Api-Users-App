import React from 'react'

function Repos(props){
    let queryParams = new URLSearchParams(props.location.search)
    console.log(queryParams)
    return(<div>Repos</div>)
}

function Followers(props){
    let queryParams = new URLSearchParams(props.location.search)
    console.log(queryParams)
    return(<div>Followers</div>)
}

function Following(props){
    let queryParams = new URLSearchParams(props.location.search)
    console.log(queryParams)
    return(<div>Following</div>)
}

export { Repos, Followers, Following };
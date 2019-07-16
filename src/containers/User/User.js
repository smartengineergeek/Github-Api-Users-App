import React from 'react'
// import { withRouter } from 'react-router-dom'

function Repos(props){
    console.log(props)
    // let queryParams = new URLSearchParams(props.location.search)
    // console.log(queryParams)
    console.log(props.username)
    
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
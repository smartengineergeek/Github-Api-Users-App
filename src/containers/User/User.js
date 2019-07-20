import React from 'react'
import styled from 'styled-components'
import ReactTable from 'react-table'

const Container = styled.div`
    background-color: #fff;
`
const Img = styled.img`
    height: 100px;
`

function Repos(props){
    let [data, setData] = React.useState([]);
    async function fetchData(){
        let response = await fetch(`https://api.github.com/users/${props.username}/repos`)//?per_page=5
        let json = await response.json()
        let tableArray = [];
        json.forEach(datum => {
            let tableObj = { name: datum.name, url: datum.html_url, language: datum.language, homepage: datum.homepage }
            tableArray.push(tableObj);
        })
        setData(tableArray)
    }
    fetchData();

    const columns = [
        {   Header: 'Name', accessor: 'name' },
        {   Header: 'URL', accessor: 'url' },
        {   Header: 'Language', accessor: 'language' },
        {   Header: 'Homepage', accessor: 'homepage' },
    ]
    return(
        <Container>
        {
            data.length > 0 ? <>
            <h3>/repos</h3>
            <ReactTable data={data} columns={columns} />
            </>
            : <h3>No repos found</h3>
        }
        </Container>
    )
}

function Followers(props){
    let [followersData, setFollowersData] = React.useState([]);
    async function fetchData(){
        let response = await fetch(`https://api.github.com/users/${props.username}/followers`)//?per_page=5
        let json = await response.json()
        console.log(json)
        let tableArray = [];
        json.forEach(datum => {
            let tableObj = { avatar_url: datum.avatar_url, url: datum.html_url }
            tableArray.push(tableObj);
        })
        setFollowersData(tableArray)
    }
    fetchData();

    const columns = [
        {   Header: 'URL', accessor: 'url' },
        {   Header: 'Avatar', 
            accessor: 'avatar_url', 
            Cell: () => <img src='avatar_url' alt="not-found" /> 
        }
    ]
    return(
        <Container>
        {
            followersData.length > 0 ? <>
            <h3>/followers</h3>
            <ReactTable data={followersData} columns={columns} />
            </>: <h3>No followers found</h3>
        }
        </Container>
    )
}

function Following(props){
    let [followingData, setFollowingData] = React.useState([]);
    async function fetchData(){
        let response = await fetch(`https://api.github.com/users/${props.username}/following`)//?per_page=5
        let json = await response.json()
        let tableArray = [];
        json.forEach(datum => {
            let tableObj = { avatar_url: datum.avatar_url, url: datum.html_url }
            tableArray.push(tableObj);
        })
        setFollowingData(tableArray)
    }
    fetchData();

    const columns = [
        {   Header: 'URL', 
            accessor: 'url',
            Cell: (props) => <span><a href={props.value}>{props.value}</a></span>
        },
        {   Header: 'Avatar', 
            accessor: 'avatar_url', 
            Cell: (props) => <span><Img src={props.value} alt="not-found" /></span> 
        }
    ]
    return(
        <Container>
        {
            followingData.length > 0 ? <>
            <h3>/following</h3>
            <ReactTable data={followingData} columns={columns} />
            </>
            : <h3>No following found</h3>
        }
        </Container>
    )
}
export { Repos, Followers, Following };
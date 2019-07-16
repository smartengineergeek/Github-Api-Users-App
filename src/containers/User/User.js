import React from 'react'
import styled from 'styled-components'
import ReactTable from 'react-table'

const Container = styled.div`
    border: solid 1px #000;
    background-color: #fff;
`
function Repos(props){
    let [data, setData] = React.useState([]);
    async function fetchData(){
        let response = await fetch(`https://api.github.com/users/${props.username}/repos`)//?per_page=5
        let json = await response.json()
        let tableArray = [];
        json.forEach(datum => {
            let tableObj = { name: datum.name, url: datum.url, language: datum.language, homepage: datum.homepage }
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
            <h3>Repos</h3>
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
    let [data, setData] = React.useState([]);
    async function fetchData(){
        let response = await fetch(`https://api.github.com/users/${props.username}/followers`)//?per_page=5
        let json = await response.json()
        let tableArray = [];
        json.forEach(datum => {
            let tableObj = { name: datum.name, url: datum.url, language: datum.language, homepage: datum.homepage }
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
            <h3>/followers</h3>
            <ReactTable data={data} columns={columns} />
            </>: <h3>No following found</h3>
        }
        </Container>
    )
}

function Following(props){
    let [data, setData] = React.useState([]);
    async function fetchData(){
        let response = await fetch(`https://api.github.com/users/${props.username}/followers`)//?per_page=5
        let json = await response.json()
        let tableArray = [];
        json.forEach(datum => {
            let tableObj = { name: datum.name, url: datum.url, language: datum.language, homepage: datum.homepage }
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
            <h3>/followers</h3>
            <ReactTable data={data} columns={columns} />
            </>
            : <h3>No followers found</h3>
        }
        </Container>
    )
}
export { Repos, Followers, Following };
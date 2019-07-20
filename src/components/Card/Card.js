import React from 'react'
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    border-radius: 5px;
    background-color: #f2f2f2;
    justify-content: space-between;
`
const Avatar = styled.div`
    border: solid 1px grey;
`

const Details = styled.div`
    display: flex;
    flex-direction: column;
`

const Links = styled.div`
    display: flex;
    flex-direction: column;
`
const Img = styled.img`
    height: 100px;
`

const Card = (props) => (
    <Container>
        <Avatar>
            <Img src={props.data.avatar_url} alt='not-found' />
        </Avatar>
        <Details>
            <ul>
                <li>Username {props.data.login}</li>
                <li>Name {props.data.name}</li>
                <li>Location {props.data.location}</li>
                <li>Bio {props.data.bio}</li>
                <li>Blog Link {props.data.blog}</li>
            </ul>
        </Details>
        <Links>
            <ul>
                <li><Link to={`/search-user/${props.data.login}/repos`}>{props.data.public_repos} public repos</Link></li>
                <li><NavLink to={`/search-user/${props.data.login}/followers`}>{props.data.followers} followers</NavLink></li>
                <li><Link to={`/search-user/${props.data.login}/following`}>{props.data.following} following</Link></li>
            </ul>
        </Links>
    </Container>
)

export default Card;
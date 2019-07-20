import React from 'react';
import styled from 'styled-components'
import ClipLoader from 'react-spinners/ClipLoader';
import Service from '../../services/Service';

const Wrapper = styled.div`
    padding-top: 20px;
`
const Box = styled.div`
  border: solid 1px #000;
  height: 100px;
  width: 200px;
  margin: 10px;
  background-color: #322f31;
  text-align: center;
`
const FlexContainer = styled.div`
  display: flex;
  align-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
`
const A = styled.a`
  color: #fff;
  padding: 20%;
`
function Users() {
  const [data, loading] = Service("https://api.github.com/users");
  return(
    <Wrapper>
      <h3>Data</h3>
      {
        loading ? <center><ClipLoader size={75} /></center>: 
          <FlexContainer>
          { data.map(datum => <Box key={datum.id}><A href={datum.html_url} key={datum.id}>{datum.login}</A></Box>)}
          </FlexContainer>
      }
    </Wrapper>
  )
}

export default Users;

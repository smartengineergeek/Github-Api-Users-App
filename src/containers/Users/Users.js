import React from 'react';
import styled from 'styled-components'

import Service from '../../services/Service';

const Wrapper = styled.div`
    padding-top: 20px;
`
const Box = styled.div`
    // background-color: #000;
    // color: #fff;
    // height: 100px;
    // width: 200px;
    // flex-wrap: wrap;
    // padding: 5px;
    border: solid 1px #000;
`
const FlexContainer = styled.div`
  -ms-box-orient: horizontal;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -moz-flex;
  display: -webkit-flex;
  display: flex;
  align-content: space-between;
  // -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  flex-direction: row;
  width: 500px;
  height: 400px;
`
function Users() {
  const [data, loading] = Service("https://api.github.com/users");
  return(
    <Wrapper>
      <h3>Data</h3>
      {
        loading ? ( "Loading..." ): 
          <FlexContainer>
          { data.map(datum => <Box><p key={datum.id}>{datum.login}</p></Box>)}
          </FlexContainer>
      }
    </Wrapper>
  )
}

export default Users;

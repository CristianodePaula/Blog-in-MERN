import styled from "styled-components"
import Post from "./Post"
import { mobile } from '../resources/Responsive'

const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: black;
  ::-webkit-scrollbar {
    width: 1px;    
    color: red;        
  }

  ${mobile({
  gridTemplateColumns: '1fr'
})} 
`
export default function Posts({ posts }) {
  return (
    <PostsContainer>
      {posts.slice(0, 4).map((p, index) => (
        <Post key={index} post={p} styled={{ background: 'grey' }} />
      ))}
    </PostsContainer>
  )
}

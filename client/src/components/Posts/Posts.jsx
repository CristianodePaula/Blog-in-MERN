import Post from "../Post/Post"
import { Container } from './PostsStyle'

export default function Posts({ posts }) {
  return (
    <Container>
      {posts.slice(0, 4).map((p, index) => (
        <Post key={index} post={p} styled={{ background: 'grey' }} />
      ))}
    </Container>
  )
}

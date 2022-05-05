import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { mobile } from '../resources/Responsive'
import { motion } from 'framer-motion'
import { postImgAnimation, textPostAnimation } from '../resources/Animations'
import { useScroll } from '../resources/useScroll'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding: 30px;
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    background: white;
    border-radius: 30px;
    width: 550px;
    height: 500px;
    ${mobile({
    width: '400px',
    height: '450px'
})} 
`
const Image = styled(motion.img)`
    height: 250px;
    width: 460px;
    object-fit: cover;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
       filter: invert(100%);
       transform: scale(1.05);
       transition: all 0.5s ease; 
    }
    ${mobile({
    width: '340px',
    height: '200px'
})} 
`
const Info = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Title = styled.h1`
    font-size: 22px;
    font-weight: 900;
    color: black;
    text-decoration: none;
    margin-top: 30px;   
    ${mobile({
    fontSize: '15px'
})} 
`
const Categ = styled.span`
    font-size: 12px;
    color: red;
    margin-bottom: 10px;
`
const Date = styled.span`
    font-style: italic;
    font-size: 12px;
    color: #999;
    margin-bottom: 10px;
    ${mobile({
    fontSize: '12px'
})} 
`
const Desc = styled.div`
    width: 400px;
    overflow: hidden; 
    text-overflow: ellipsis; 
    display: -webkit-box;
    -webkit-line-clamp: 3; 
    -webkit-box-orient: vertical; 
    ${mobile({
    width: '320px',
    fontSize: '12px'
})} 
`
const FullPost = styled(Link)`
    margin-top: 20px;
    color: darkred;
    text-decoration: underline;
    cursor: pointer;
    ${mobile({
    fontSize: '12px'
})} 
`
export default function Post({ post }) {

    const [element, controls] = useScroll();

    const PF = "http://localhost:5000/images/"

    return (
        <Container ref={element}>
            <Wrapper>
                <Image src={PF + post.photo} variants={postImgAnimation} animate={controls} />
                <Info variants={textPostAnimation} animate={controls}>
                    <Title> {post.title} </Title>
                    <Categ>
                        {post.categories.map((c, index) => (
                            <span key={index}>{c}</span>
                        ))}
                    </Categ>
                    <hr />
                    <Date> {new window.Date(post.createdAt).toLocaleDateString()} </Date>
                    <Desc> {post.desc} </Desc>
                    <FullPost to={`/post/${post._id}`}>Leia</FullPost>
                </Info>
            </Wrapper>
        </Container>
    )
}

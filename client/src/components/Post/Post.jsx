import React from 'react'
import {
    Container,
    Wrapper,
    Image,
    Info,
    Title,
    Categ,
    Date,
    Desc,
    FullPost
} from './PostStyle'
import {
    postImgAnimation,
    textPostAnimation
} from '../../resources/Animations'
import { useScroll } from '../../resources/useScroll'

export default function Post({ post }) {

    const [element, controls] = useScroll();

    const PF = "http://localhost:5000/images/"

    return (
        <Container ref={element}>
            <Wrapper>
                <Image
                    src={PF + post.photo}
                    variants={postImgAnimation}
                    animate={controls}
                />
                <Info
                    variants={textPostAnimation}
                    animate={controls}
                >
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

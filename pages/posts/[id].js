import { useEffect } from 'react'
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }) {

    useEffect(() => {
    console.log("aaa")
    }, [])
    

    return (
        <>
            {postData.title}
            <br />
            {postData.id}
            <br />
            {postData.date}
        </>
    )
}

export async function getStaticPaths() {
    // Return a list of possible value for id
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}
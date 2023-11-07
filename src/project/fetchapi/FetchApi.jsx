import React, { Component } from 'react'
import { Container, Table, Image } from 'react-bootstrap'

import Post from "./Post"

class FetchApi extends Component {
    state = {
        posts: [],
       
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({ posts: data }).limit(50)
            })
    }

    render() {
        let { posts } = this.state
        return (
            <Container className='mt-5'>
                {
                    posts.length > 0 ? (
                        <Table striped bordered hover responsive size='sm' variant='primary'  style={{direction:"ltr"}}>
                            <thead>
                                <tr className='text-center fw-bold fs-5'>
                                    <th>ردیف</th>
                                    <th>شناسه کاربری</th>
                                    <th>عنوان</th>
                                    <th>شرح پست</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    posts.map((post) => (
                                        <Post key={post.id} {...post} />
                                    ))
                                }
                            </tbody>
                        </Table>
                    ) : (
                        <div className='d-flex justify-content-center align-items-center vh-100'>
                                <Image src='./img/loading.gif' fluid style={{background:"transparent"}}/>
                        </div>
                    )
                }
            </Container>
        );
    }
}

export default FetchApi;
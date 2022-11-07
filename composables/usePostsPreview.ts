export interface PostPreview {
  posts: {
    nodes: {
      title: string
      date: string
      uri: string
      author: {
        node: {
          name: string
        }
      }
      featuredImage: {
        node: {
          mediaItemUrl: string
        }
      }
      content: string
    }[]
  }
}

const query = gql`
  query getPosts {
    posts(first: 4) {
      nodes {
        title
        date
        uri
        author {
          node {
            name
          }
        }
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        content
      }
    }
  }
`

export const usePostsPreview = () =>
  useQuery<PostPreview>(query, null, { prefetch: false })

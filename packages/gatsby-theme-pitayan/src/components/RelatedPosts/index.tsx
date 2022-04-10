import React, { memo } from "react"
import PostsGroup, {
  PostNode,
} from "@pitayan/gatsby-theme-pitayan/src/components/PostsGroup"

type RelatedPostsProps = {
  posts: PostNode[]
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ posts }) => {
  if (!posts || !posts.length) {
    return null
  }

  return (
    <PostsGroup
      posts={posts}
      className="grid relative grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
    />
  )
}

export default memo(RelatedPosts)

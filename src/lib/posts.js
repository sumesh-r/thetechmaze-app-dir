export async function getPostsData() {
  const url = `https://${process.env.NEXT_PUBLIC_GHOST_API_URL}/ghost/api/content/posts/?key=${process.env.GHOST_CONTENT_API_KEY}&include=tags`;

  const response = await fetch(url, {
    method: "GET",
  }).then(async function (res) {
    const status = res.status;
    const data = await res.json();
    return {
      data,
      status,
    };
  });

  let posts;
  response.data.posts.map(
    (post, idx) => (
      (post.published_at = post.published_at.split("T")[0]),
      (post.updated_at = post.updated_at.split("T")[0])
    )
  );

  posts = response.data.posts.filter(function (element) {
    return element.primary_tag.name !== "java";
  });

  return posts;
}

export async function getProjectsData() {
  const url = `https://${process.env.NEXT_PUBLIC_GHOST_API_URL}/ghost/api/content/posts/?key=${process.env.GHOST_CONTENT_API_KEY}&include=tags`;

  const response = await fetch(url, {
    method: "GET",
  }).then(async function (res) {
    const status = res.status;
    const data = await res.json();
    return {
      data,
      status,
    };
  });

  // remove undefined
  let projects = response.data.posts.filter(function (element) {
    return element.primary_tag.name == "java";
  });

  projects.map(
    (project, idx) => (
      (project.published_at = project.published_at.split("T")[0]),
      (project.updated_at = project.updated_at.split("T")[0])
    )
  );
  return projects;
}

export async function getPosts() {
  return await ghost.posts.browse().catch((err) => {
    console.error(err);
  });
}

export async function getSinglePost(postSlug) {
  return await ghost.posts
    .read({
      slug: postSlug,
      include: "authors,tags",
    })
    .then((post) => {
      // post which does'nt have an feature image will be replaced with an image
      // available in the defaults.jpeg in the public directory
      (post.feature_image = post.feature_image
        ? post.feature_image
        : "/default.jpeg"),
        (post.published_at = post.published_at.split("T")[0]),
        (post.updated_at = post.updated_at.split("T")[0]);

      return post;
    })
    .catch((err) => {
      console.error(err);
    });
}

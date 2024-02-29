export async function getPostsData() {
  const fields =
    "feature_image,feature_image_alt,slug,updated_at,published_at,title,excerpt,primary_tag";
  const filter = "-projects";
  const url = `https://${process.env.NEXT_PUBLIC_GHOST_API_URL}/ghost/api/content/posts/?key=${process.env.GHOST_CONTENT_API_KEY}&include=tags&fields=${fields}&filter=tag:${filter}`;

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

  if (response.status != 200) {
    console.log(response.data.errors);
    posts = [];
  } else {
    posts = response.data.posts;
    if (posts == undefined) posts = [];
    posts.map(
      (post, idx) => (
        (post.published_at = post.published_at.split("T")[0]),
        (post.updated_at = post.updated_at.split("T")[0])
      )
    );
  }

  return posts;
}

export async function getProjectsData() {
  const fields =
    "feature_image,feature_image_alt,slug,updated_at,published_at,title,excerpt,primary_tag";
  const filter = "[projects]";
  const url = `https://${process.env.NEXT_PUBLIC_GHOST_API_URL}/ghost/api/content/posts/?key=${process.env.GHOST_CONTENT_API_KEY}&filter=tags:${filter}&include=tags&fields=${fields}`;

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

  let projects;

  if (response.status != 200) {
    console.log(response.data.errors);
    projects = [];
  } else {
    projects = response.data.posts;
    if (projects == undefined) projects = [];
    projects.map(
      (project, idx) => (
        (project.published_at = project.published_at.split("T")[0]),
        (project.updated_at = project.updated_at.split("T")[0])
      )
    );
  }

  return projects;
}

export async function getTagsData() {
  const filter = "-projects";
  1;
  const url = `https://${process.env.NEXT_PUBLIC_GHOST_API_URL}/ghost/api/content/tags/?key=${process.env.GHOST_CONTENT_API_KEY}&filter:tag:project&include=count.posts`;

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

  let tags;

  if (response.status != 200) {
    console.log(response.data.errors);
    tags = [];
  } else {
    tags = response.data.tags.filter(function (element) {
      return element.slug !== "projects";
    });
    if (tags == undefined) tags = [];
  }
  return tags;
}

export async function getLatestPostsData() {
  const fields =
    "feature_image,feature_image_alt,slug,updated_at,published_at,title,excerpt,primary_tag";
  const filter = "-projects";
  const url = `https://${process.env.NEXT_PUBLIC_GHOST_API_URL}/ghost/api/content/posts/?key=${process.env.GHOST_CONTENT_API_KEY}&include=tags&order=published_at%20desc&fields=${fields}&filter=tag:${filter}&limit=1`;

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

  let post;

  if (response.status != 200) {
    console.log(response.data.errors);
    post = [];
  } else {
    post = response.data.posts;
    if (post == undefined) post = [];
    post.map(
      (post, idx) => (
        (post.published_at = post.published_at.split("T")[0]),
        (post.updated_at = post.updated_at.split("T")[0])
      )
    );
  }

  return post;
}

export async function getLatestProjectsData() {
  const fields =
    "feature_image,feature_image_alt,slug,updated_at,published_at,title,excerpt,primary_tag";
  const filter = "projects";
  const url = `https://${process.env.NEXT_PUBLIC_GHOST_API_URL}/ghost/api/content/posts/?key=${process.env.GHOST_CONTENT_API_KEY}&filter=tag:${filter}&include=tags&fields=${fields}&order=published_at%20desc&limit=3`;

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

  let projects;

  if (response.status != 200) {
    console.log(response.data.errors);
    projects = [];
  } else {
    projects = response.data.posts;
    if (projects == undefined) projects = [];

    projects.map(
      (project, idx) => (
        (project.published_at = project.published_at.split("T")[0]),
        (project.updated_at = project.updated_at.split("T")[0])
      )
    );
  }

  return projects;
}

export async function getPostsByTagData(tag) {
  if (tag == "projects") {
    let tags = [];
    return tags;
  }
  const fields =
    "feature_image,feature_image_alt,slug,updated_at,published_at,title,excerpt,primary_tag";
  const url = `https://${process.env.NEXT_PUBLIC_GHOST_API_URL}/ghost/api/content/posts/?key=${process.env.GHOST_CONTENT_API_KEY}&filter=tag:${tag}&include=tags&fields=${fields}&order=published_at%20asc&limit=3`;

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

  let tags;

  if (response.status != 200) {
    console.log(response.data.errors);
    tags = [];
  } else {
    tags = response.data.posts;
    if (tags == undefined) tags = [];

    tags.map(
      (tag, idx) => (
        (tag.published_at = tag.published_at.split("T")[0]),
        (tag.updated_at = tag.updated_at.split("T")[0])
      )
    );
  }

  return tags;
}

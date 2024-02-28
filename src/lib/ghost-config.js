import GhostContentAPI from "@tryghost/content-api";
export const ghost = new GhostContentAPI({
  key: process.env.GHOST_CONTENT_API_KEY,
  url: `https://${process.env.NEXT_PUBLIC_GHOST_API_URL}`,
  makeRequest: ({ url, method, params, headers }) => {
    const apiUrl = new URL(url);
    // @ts-ignore
    Object.keys(params).map((key) =>
      apiUrl.searchParams.set(key, encodeURIComponent(params[key]))
    );

    return fetch(apiUrl.toString(), { method, headers })
      .then(async (res) => {
        // Check if the response was successful.
        if (!res.ok) {
          // You can handle HTTP errors here
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return { data: await res.json() };
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  },
  version: "v5.0",
});

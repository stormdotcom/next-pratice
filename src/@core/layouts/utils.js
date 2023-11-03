
export const handleURLQueries = (router, path) => {
  if (Object.keys(router.query).length && path) {
    const arr = Object.keys(router.query);

    return router.asPath.includes(path) && router.asPath.includes(router.query[arr[0]]) && path !== "/";
  }

  return false;
};


/* eslint-disable no-unused-vars */
/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ["picsum.photos"]

  }
};

function toRemotePattern(urlString) {
  const url = new URL(urlString);
  return {
    protocol: url.protocol.replace(":", ""),
    hostname: url.hostname,
    port: url.port,
    pathname: url.pathname
  };
}

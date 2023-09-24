import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getProfile() {
  return client.fetch(
    groq`*[_type == "profile"]{
      _id,
      _createdAt,
      fullName,
      headline,
      profileImage {alt, "image": asset->url},
      shortBio,
      location,
      fullBio,
      email,
      "resumeURL": resumeURL.asset->url,
      socialLinks,
      skills
    }`
  );
}

export async function getBlogPosts() {
    return client.fetch(
      groq`*[_type == "blogPost"] | order(_createdAt desc){
        _id,
        title,
        slug,
        author,
        summary,
        image,
        "imageUrl": image.asset->url,
        content,
        _createdAt
      }`
    );
}

export async function getBlogPost(slug: string) {
  console.log(slug)
  return client.fetch(
    groq`*[_type == "blogPost" && slug.current == '${slug}'][0]{
      _id,
      title,
      slug,
      author,
      summary,
      image,
      "imageUrl": image.asset->url,
      content,
      _createdAt
    }`
  );
}


import { PortableTextBlock } from "sanity";

export type ProfileType = {
  _id: string,
  fullName: string,
  headline: string,
  profileImage: {
    alt: string,
    image: string
  },
  shortBio: string,
  email: string,
  fullBio: PortableTextBlock[],
  location: string,
  resumeURL: string,
  socialLinks: string[],
  skills: string[],
};

export type BlogPostType = {
    _id: string,
    title: string,
    slug: {current: string},
    author: string,
    summary: string,
    image: {
      alt: string,
      image: string
    },
    imageUrl: string,
    content: PortableTextBlock[],
    _createdAt: string
  };
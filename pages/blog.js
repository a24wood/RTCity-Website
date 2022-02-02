import styles from "../styles/Blog.module.css";
import React from 'react'
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
const readingTime = require("reading-time");
export default function Blog({ blogs }) {
    
    return (
        <> 
            <div className="container mb-5">
                <div className="row g-5">
                {
                    blogs.map((blog, index) => {
                        const readingStats = readingTime(blog.content);
                        const readingText = readingStats.text ? readingStats.text : "";
                        return (
                            <div className="col-12 col-md-4" key={`index_${index}`}>
                                <Link href={`/blog/${blog.href}`} passHref>
                                <div className={`${styles.BlogPostCard}`}>
                                    <div className={`${styles.BlogPostCard__Image}`}>
                                        <Image src={`/blog/post_assets/${blog.thumbnail}`} alt={blog.title} layout="fill" objectFit="cover" className={`${styles.BlogPostCard__Image_Class}`} />
                                    </div>
                                    <div className="p-4">
                                        <p className={`${styles.BlogPostCard__Tag} mb-1`}>{blog.tag}</p>
                                        <h4 className={`${styles.BlogPostCard__Title}`}>{blog.title}</h4>
                                        <p className={`${styles.BlogPostCard__Description}`}>{blog.description}</p>
                                        <div className="d-flex align-items-center">
                                            <div className={`${styles.BlogPostCard__AuthorImage}`}>
                                                <Image src={blog.author_image} alt={blog.author} layout="fill" objectFit="cover" className={`d-inline-block ${styles.BlogPostCard__AuthorImage_Class}`}/>
                                            </div>
                                            <div className="ms-3 mt-2 align-self-center">
                                                <h5 className={`${styles.BlogPostCard__Author}`}>{blog.author}</h5>
                                                <h5 className={`${styles.BlogPostCard__ExtraInfo}`}>{new Date(blog.date).toDateString()} - {String(readingText)}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </>
    )
}

export async function getStaticProps({ params }) {

    // Get all blog posts
    const folderPath = path.join(process.cwd(), '/public/blog/posts');
    const blogData = fs.readdirSync(folderPath, { encoding: "utf-8"}).reduce((arr, file) => {
        const source = path.join(process.cwd(), `/public/blog/posts/${file}`);
        const fileSource = fs.readFileSync(source, { encoding: "utf-8" });
        const { content, data } = matter(fileSource);
        data.content = content;
        const published = data.published;
        const href = String(file).substring(0, String(file).length - 4);
        data.href = href;
        if (published === "false") return arr;
        return [...arr, data];
    }, []);

    // Sort the blog posts
    try {
        blogData.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateA - dateB;
        })
    } catch (e) {
        console.log("Failed to sort by date: ", e);
    }


    return {
        props: {
            blogs: blogData
        }
    }
}
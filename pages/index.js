import styles from "../styles/Blog.module.css";
import React from 'react'
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
const readingTime = require("reading-time");

export default function Home({ blogs }) {
    
    return (
        <>
            <div className={`container text-center py-5 ${styles.BlogHeader}`}>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10">
                        <h1 className={`mb-4 ${styles.BlogHeader__Title}`}>Weclome to RTCity, the Future Of Autonomous Vehicles (or something)</h1>
                        <h4 className={`${styles.BlogHeader__Subtitle} mb-5`}>An autonomous vehicle is any vehicle capable of sensing its environment and operating with human involvement. As of 2019, there were over 31 million autonomous vehicles worldwide. Furthermore, between 2020 and 2023, the number of autonomous vehicles in operation is expected to grow by almost 60%. However, autonomous vehicles are costly compared to standard vehicles, as they require extensive highly-expensive sensor suites to sense their surrounding environment. These sensor suites can consist of radar, LiDAR, sonar, GPS, and an inertial measurement system. Consequently, a suitable alternative needs to be found to reduce the costs of autonomous vehicles. One suitable solution to this problem is using a network of nodes across a designated area to perform the perception and planning tasks for any vehicle or interconnected fleet of vehicles. </h4>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="container mb-5">
                <div className="row g-5">
                {
                    blogs.map((blog, index) => {
                        const readingStats = readingTime(blog.content);
                        const readingText = readingStats.text ? readingStats.text : "";
                        return (
                            <div className="col-12 col-md-4" key={`index_${index}`}>
                                <Link href={`/blog/${blog.href}`}>
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
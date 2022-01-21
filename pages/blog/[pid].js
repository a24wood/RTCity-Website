import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/BlogPost.module.css";
const readingTime = require("reading-time");

const components = {};

export default function Blog({ source, frontMatter, readingTime }) {
    return (
        <>
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8">
                        <h4 className={styles.Blog__TeamTitle}>{frontMatter.tag}</h4>
                        <h1 className={`${styles.Blog__Title} mb-5`}>{frontMatter.title}</h1>
                        <hr />
                    </div>
                    <div className="col-12 col-md-8">
                        <div className="d-flex align-items-center mb-5">
                            <div className={`${styles.AuthorImage}`}>
                                <Image src={frontMatter.author_image} alt={frontMatter.author} layout="fill" objectFit="cover" className={`d-inline-block ${styles.AuthorImage_Class}`}/>
                            </div>
                            <div className="ms-3">
                                <h5 className={`${styles.Header__Subtext} fw-bold`}>{frontMatter.author}</h5>
                                <h5 className={styles.Header__Subtext}>{new Date(frontMatter.date).toDateString()} <span className="fw-light ms-2">{readingTime}</span></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10">
                        <div className={`${styles.HeaderImage} mb-5`}>
                            <Image src={frontMatter.header_image} alt={frontMatter.header_image_alt} layout="fill" objectFit="cover"/>
                        </div>
                    </div>
                    <div className="col-12 col-md-9 mb-5">
                        <MDXRemote {...source} components={components} />
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getStaticProps({ params }) {
    const source = path.join(process.cwd(), `/public/blog/posts/${params.pid}.mdx`);
    const fileSource = fs.readFileSync(source, { encoding: 'utf-8' });
    const { content, data } = matter(fileSource);
    const mdxSource = await serialize(content, {
        scope: data,
    });
    const readingStats = await readingTime(content);
    return {
        props: {
            source: mdxSource,
            frontMatter: data,
            readingTime: readingStats.text
        }
    }
}

export function getStaticPaths() {
    // Get all blog posts
    const folderPath = path.join(process.cwd(), '/public/blog/posts');
    const paths = fs.readdirSync(folderPath, { encoding: "utf-8"}).reduce((arr, file) => {
        const source = path.join(process.cwd(), `/public/blog/posts/${file}`);
        const fileSource = fs.readFileSync(source, { encoding: "utf-8" });
        const { data } = matter(fileSource);
        const published = data.published;
        if (published === "false") return arr;
        const href = String(file).substring(0, String(file).length - 4);
        const pathData = {
            params: {
                pid: href,
            }
        };
        return [...arr, pathData];
    }, []);

    return {
        paths: paths,
        fallback: false
    }
}
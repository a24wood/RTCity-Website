/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import styles from "../styles/Index.module.css";
import Image from "next/image";
import { FEATURE_CARDS } from "../components/constants";

const Features = () => {
    const [currentFeature, setCurrentFeature] = useState(0);
    return (
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-4">
          {
            FEATURE_CARDS.map((feature, index) =>
              <div key={feature.Title} className="my-4">
                  <a className={`Link Link__Black Link__Large ${currentFeature === index ? "fw-bold" : ""}`} onClick={() => setCurrentFeature(index)}>
                  {
                    currentFeature === index ?
                    <div className={`d-inline-block ${styles.FeatureIcon} me-2`}>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-arrow-right" className="svg-inline--fa fa-circle-arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM406.6 278.6l-103.1 103.1c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L306.8 288H128C110.3 288 96 273.7 96 256s14.31-32 32-32h178.8l-49.38-49.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l103.1 103.1C414.6 241.3 416 251.1 416 256C416 260.9 414.6 270.7 406.6 278.6z"></path></svg>
                    </div>
                    :
                    null
                  }
                  <div className="d-inline-block">
                    {feature.Title}
                  </div>
                  </a>
                  {
                    currentFeature === index ?
                    <p className="Paragraph Paragraph__Small text-start">
                      {feature.Brief}
                    </p>
                    :
                    null
                  }
              </div>
            )
          }
        </div>
        <div className="col-12 col-md-8">
          <div className={styles.FeatureImage}>
            <Image src={FEATURE_CARDS[currentFeature].src} class="rounded" alt="alt img" layout="fill" objectFit="contain"/>
          </div>
            <p className="Paragraph">
                {FEATURE_CARDS[currentFeature].Description}
            </p>
        </div>
      </div>
    )
}

export default function Home() {
  return (
    <div>
      <title>RTCity</title>
      {/* BANNER */}
      <div className="container-fluid">
        <div className="row justify-content-center text-center">
          <div className={`col ${styles.LandingBanner}`}>
            <div> 
              <h1>Welcome to RTCity</h1>
              <h5>A new approach to fleet autonomous vehicles</h5>
            </div>
          </div>
        </div>
      </div>

      {/* TOOLS */}
      <div className={`container-fluid GreyBackground ${styles.FeaturesContainer}`} id="our-features">
        <div className="container">
            {/* TEXT */}
            <div className="row justify-content-center text-center">
              <div className={`col ${styles.IndexClients_Text_Div} my-5`}>
              <h1 className="Title Title__Small">
                Learn More About Our Project Here
              </h1>
              <h5>
                Click on the boxes to navigate
              </h5>
              </div>
            </div>
            {/* Feature Section */}
            <Features />
          </div>
        </div>
    </div>
  )
}

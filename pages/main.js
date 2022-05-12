import React from "react";
import styles from "../styles/Home.module.css";
import Navbar from "./comps/Navbar";
import { Carousel } from "antd";
import { Card } from "antd";
import { height } from "@mui/system";

const { Meta } = Card;

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar></Navbar>
      <div>
        <Carousel autoplay className={styles.slide}>
          <div className={styles.contentStyle}>
            <img src="https://sasom.co.th/_next/image?url=https%3A%2F%2Fd2cva83hdk3bwc.cloudfront.net%2FHero_Banner_3_en.png&w=1920&q=75"></img>
          </div>
          <div className={styles.contentStyle}>
            <img src="https://sasom.co.th/_next/image?url=https%3A%2F%2Fd2cva83hdk3bwc.cloudfront.net%2FHero_Banner_4_en.png&w=1920&q=75"></img>
          </div>
          <div className={styles.contentStyle}>
            <img src="https://sasom.co.th/_next/image?url=https%3A%2F%2Fd2cva83hdk3bwc.cloudfront.net%2FHome_Banner1_2_en.png&w=1920&q=75"></img>
          </div>
          <div className={styles.contentStyle}>
            <img src="https://sasom.co.th/_next/image?url=https%3A%2F%2Fd2cva83hdk3bwc.cloudfront.net%2FHome_Banner2_2_en.png&w=1920&q=75"></img>
          </div>
        </Carousel>
        <div className={styles.new}>
          <h2>NEW ARRIVALS</h2>
        </div>
        <div>
          <Card className={styles.card}
            hoverable
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://cf.shopee.co.th/file/9b44066d2ddd6db2a39d0a9c2248b634"
              />
            }
          >
            <Meta title="Product Name" description="3600 ฿" />
          </Card>
          <Card className={styles.card}
            hoverable
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://cf.shopee.co.th/file/77ae064ea246fbeba9b64f4faa4d0ff7"
              />
            }
          >
            <Meta title="Product Name" description="3600 ฿" />
          </Card>
          <Card className={styles.card}
            hoverable
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://cf.shopee.co.th/file/4bd5094d47d3922fb1131efb8b1fdaef"
              />
            }
          >
            <Meta title="Product Name" description="3600 ฿"/>
          </Card>
        </div>
        <div className={styles.new}>
        <button className={styles.view} type="button">
              View More
            </button> 
        </div>
        <div>
            <div className={styles.our}>
                <a href="#"><img src="https://i.pinimg.com/736x/2c/a0/2a/2ca02a6531b013f104bafa55061882b4.jpg"></img></a>
                <div className={styles.center}>Our Story</div>
            </div>
            <div className={styles.our}>
                <a href="#"><img src="https://i.pinimg.com/736x/2c/a0/2a/2ca02a6531b013f104bafa55061882b4.jpg"></img></a>
                <div className={styles.center}>Our Blog</div>
            </div>
            <div className={styles.cate}>
                <a href="#"><img src="https://cf.shopee.co.th/file/a4d6f08393112649b3d2627c14ef1d8c"></img></a>
                <div className={styles.center}>Shoes</div>
            </div>
            <div className={styles.cate}>
                <a href="#"><img src="https://cf.shopee.co.th/file/ff3aa71da5e64f48e3b049599cf1f659"></img></a>
                <div className={styles.center}>Apparel</div>
            </div>
            <div className={styles.cate}>
                <a href="#"><img src="https://cf.shopee.co.th/file/d0f1760a963499508a61d45fe6c52fda"></img></a> 
                <div className={styles.center}>Accessories</div>
            </div>
        </div>
      </div>
    </main>
  );
}
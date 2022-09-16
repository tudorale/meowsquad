import Head from 'next/head'
import styles from '../styles/Home.module.css';
import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);
import 'chart.piecelabel.js';

export const data = {
  labels: [],
  datasets: [
    {
      label: '',
      data: [10, 15, 30, 10, 5, 30],
      backgroundColor: [
        'purple',
        'cyan',
        'blue',
        'red',
        'orange',
        'green',
      ],
      borderColor: [
        'white',
        'white',
        'white',
        'white',
        'white',
        'white',
      ],
      borderWidth: 1,
    },
  ],
};

export default function Home() {

  useEffect(() => {
    window.onscroll = function(){
      AOS.init({
        offset: 300,
        delay: 0, 
        duration: 700,
        once: false,
      });
    }
  })

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    draggable: false,
    responsive: [
      {
        breakpoint: 1060,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ]
  };
 
  return (
    <>
      <Head>
        <title>Meow Squad</title>
        <meta name="description" content="Meow Squad is a service that offers advanced tools to assist you in making informed decisions about your NFT investments." />
        <link rel="icon" href="/logo.png" />
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>
      <div className={styles.background}>
        
      <svg
            className={styles.scroll}
            width="40"
            height="77"
            viewBox="0 0 40 77"
            >
              <g id="scrollCircle" transform="translate(-253 -787)">
                <g
                  id="Rectangle_12"
                  transform="translate(253 787)"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="4"
                >
                  <rect width="40" height="77" rx="20" stroke="none"></rect>
                  <rect
                    x="2"
                    y="2"
                    width="36"
                    height="73"
                    rx="18"
                    fill="none"
                  ></rect>
                </g>
                <circle
                  className={styles.circle}
                  id="Ellipse_1"
                  cx="11"
                  cy="11"
                  r="11"
                  transform="translate(262 798)"
                  fill="#fff"
                ></circle>
              </g>
            </svg>

        <div className={styles.roadmap}>
          
          <div className={styles.first}>
            <div className={styles.fL} data-aos="fade-down">
              <img src="/paw.png" className={styles.firstPaw + " " + styles.paw}/>
              <div className={styles.firstLine}></div>
            </div>
            <div className={styles.firstTexts} data-aos="fade-left" data-aos-delay="100">
              <p className={styles.roadmapHeader}>June - September 2022</p>
              <div className={styles.roadmapText}>
                <div className={styles.ball + " " + styles.whiteBall}></div>
                <p>Release twitter-tracker</p>
              </div>
              <div className={styles.roadmapText}>
                <div className={styles.ball + " " + styles.whiteBall}></div>
                <p>Release twitter manager</p>
              </div>
              <div className={styles.roadmapText}>
                <div className={styles.ball + " " + styles.whiteBall}></div>
                <p>First batch of merch for pets</p>
              </div>
              <div className={styles.roadmapText}>
                <div className={styles.ball + " " + styles.whiteBall}></div>
                <p>First batch of merch for people</p>
              </div>
              <div className={styles.roadmapText}>
                <div className={styles.ball + " " + styles.whiteBall}></div>
                <p>Launching</p>
              </div>
              <div className={styles.roadmapText}>
                <div className={styles.ball + " " + styles.whiteBall}></div>
                <p>Release Staking</p>
              </div>
            </div>
          </div>

          <div className={styles.second}>
            <div className={styles.leftColumn} data-aos="fade-right" data-aos-delay="350" data-aos-offset="300">
              <div className={styles.secondLineLeft}>
                <img src="/paw.png" className={styles.paw}/>
                <div className={styles.sLL}></div>
              </div>

              <div className={styles.secondTexts}>
                <div className={styles.roadmapText}>
                  <div className={styles.ball + " " + styles.whiteBall}></div>
                  <p>Release R2E tool as a service<br/> paid by $MEOW</p>
                </div>
                <div className={styles.roadmapText}>
                  <div className={styles.ball + " " + styles.whiteBall}></div>
                  <p>Release service subscription<br/> format for holders paid by $MEOW</p>
                </div>
                <div className={styles.roadmapText}>
                  <div className={styles.ball + " " + styles.whiteBall}></div>
                  <p>Start mailing merch for holders<br/>(for both people and cats)</p>
                </div>
              </div>
            </div>
            <div className={styles.middleColumn} data-aos="fade-down" data-aos-offset="300">
              <p className={styles.roadmapHeader}>Q4 2022</p>
              <div className={styles.middleLine}></div>
            </div>
            <div className={styles.rightColumn} data-aos="fade-left" data-aos-delay="750" data-aos-offset="300">
              <div className={styles.secondLineRight}>
                <div className={styles.sLR}></div>
                <img src="/paw.png" className={styles.paw}/>
              </div>
              <div className={styles.secondTexts}>
                <div className={styles.roadmapText}>
                  <div className={styles.ball + " " + styles.whiteBall}></div>
                  <p>Auto-update tool for market data</p>
                </div>
                <div className={styles.roadmapText}>
                  <div className={styles.ball + " " + styles.whiteBall}></div>
                  <p>Alerts tool</p>
                </div>
                <div className={styles.roadmapText}>
                  <div className={styles.ball + " " + styles.whiteBall}></div>
                  <p>Mint manager</p>
                </div>
                <div className={styles.roadmapText}>
                  <div className={styles.ball + " " + styles.whiteBall}></div>
                  <p>Mint Portfolio manager</p>
                </div>
                <div className={styles.roadmapText}>
                  <div className={styles.ball + " " + styles.whiteBall}></div>
                  <p>Platform for nft raffles</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.third}>
            <p className={styles.roadmapHeader} data-aos="fade-down" data-aos-offset="150">Q1 2023</p>
            <div className={styles.thirdR}>
              <div data-aos="fade-up" data-aos-offset="150" data-aos-delay="500">
                <img src="/paw.png" className={styles.paw}/>
                <div className={styles.thirdLine}></div>
              </div>
              <div>
                <div className={styles.roadmapText} data-aos="fade-left" data-aos-offset="150" data-aos-delay="800">
                  <div className={styles.ball + " " + styles.whiteBall}></div>
                  <p>Release big data based tool for analyzing twitter <br/>sentiment for each collection</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.four}>
            <p className={styles.roadmapHeader} data-aos="fade-down" data-aos-offset="200">Q2-Q3 2023</p>
            <div className={styles.fourR}>
              <div className={styles.fourText}  data-aos="fade-right" data-aos-offset="200" data-aos-delay="400">
                <div className={styles.roadmapText}>
                  <div className={styles.ball + " " + styles.whiteBall}></div>
                  <p>IRL Events</p>
                </div>
              </div>
              <div>
                <img src="/paw.png" className={styles.paw}  data-aos="fade-down" data-aos-offset="150" data-aos-delay="100"/>
                <div className={styles.fourLine} data-aos="fade-down" data-aos-offset="150" data-aos-delay="100"></div>
                <p className={styles.tobe} data-aos="fade-up" data-aos-offset="100" data-aos-delay="1000">to be continued</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.roadmapMobile}>
          <div>
            <div>
              <img src="/paw.png"/>
              <p className={styles.roadmapHeader}>June - September 2022</p>
            </div>
            <p>- Release twitter-tracker</p>
            <p>- Release twitter manager</p>
            <p>- First batch of merch for pets</p>
            <p>- First batch of merch for people</p>
            <p>- Launching</p>
            <p>- Release Staking</p>
          </div>

          <div>
            <div>
              <img src="/paw.png"/>
              <p className={styles.roadmapHeader}>Q4 2022</p>
            </div>
            <p>- Release R2E tool as a service paid by $MEOW</p>
            <p>- Release service subscription format for holders paid by $MEOW</p>
            <p>- Start mailing merch for holders (for both people and cats)</p>
            <p>- Auto-update tool for market data</p>
            <p>- Alerts tool</p>
            <p>- Mint manager</p>
            <p>- Mint Portfolio manager</p>
            <p>- Platform for NFT raffles</p>
          </div>
          <div>
            <div>
              <img src="/paw.png"/>
              <p className={styles.roadmapHeader}>Q1 2023</p>
            </div>
            <p>- Release big data based tool for analyzing twittersentiment for each collection</p>
          </div>
          <div>
            <div>
              <img src="/paw.png"/>
              <p className={styles.roadmapHeader}>Q2-Q3 2023</p>
            </div>
            <p>- IRL Events</p>
          </div>
        </div>
      </div>

      <div className={styles.bottomPart}>
        <div className={styles.wave}></div>

        <div className={styles.gridOne}>
            <div className={styles.externalWrapper}>
              <div className={styles.boxOne}>
                <p>PRIMARY <span>GOAL</span></p>
                <img src="/paw.png"/>
              </div>
              <div>
              <p className={styles.gridText}>
                Our primary goal is to create an R2E solution for the Solana ecosystem. This system has recently gained popularity. We want to be pioneers in this field, so the tools we make for each project will be able to easily integrate this system. To put it another way, R2E is a tool as a service.
              </p>
            </div>
          </div>
          <div className={styles.nftImage}>
              <img src="/n1.jpg"/>
          </div>
        </div>

        <div className={styles.gridTwo}>
            <div className={styles.externalWrapper}>
              <div className={styles.boxTwo}>
                <p>WHY <span>US?</span></p>
                <img src="/paw.png"/>
              </div>
              <div>
              <p className={styles.gridText}>
              Our primary goal is to create an R2E solution for the Solana ecosystem. This system has recently gained popularity. We want to be pioneers in this field, so the tools we make for each project will be able to easily integrate this system. To put it another way, R2E is a tool as a service.
              </p>
            </div>
          </div>
          <div className={styles.nftImage}>
              <img src="/n2.jpg"/>
          </div>
        </div>

        <div className={styles.gridThree}>
          <p className={styles.gridTitle}>TEAM</p>
          <div className={styles.gridTexts}>
            <div className={styles.box}>
              <img src="/paw.png"/>
              <p>Founder is a Experienced businessman and crypto enthusiast. He has a successful business in the field of design. He also has a large team and he knows how to build businesses IRL. He is now focusing on trying to bring his skills into the web3 space.</p>
            </div>
          </div>

          <div className={styles.gridTexts}>
            <div className={styles.box}>
              <img src="/paw.png"/>
              <p>Dev is Founder&apos;s good friend that is graduating in MIT at the department of Deep Learning. He has participated in projects for hospital namely medical image segmentation. Where neural network must be diagnosed by x-ray. Probably right now, this algorithm is helping a large number of people.</p>
            </div>
          </div>

          <div className={styles.gridTexts}>
            <div className={styles.box}>
              <img src="/paw.png"/>
              <p>Artist Professional designer specializing in video game animation, graphics, interactive technologies and special effects. He has extensive experience in animation. They previously worked in MoviEStudio before joining Meow Squad. This company creates DotaWTF content.</p>
            </div>
          </div>
        </div>


        <div className={styles.pie}>
          <p className={styles.pieTitle}>Distribution of funds from mint</p>
          <div className={styles.pieGrid}>
            <div className={styles.pieTexts}>
              <p><span style={{color: "purple"}}>15%</span> will be used for investments in interesting projects at an early stage on private rounds. Allocation will be distributed among holders. </p>
              <p><span style={{color: "cyan"}}>30%</span> to team&apos;s salary </p>
              <p><span style={{color: "blue"}}>10%</span> to provide good hosting for our services </p>
              <p><span style={{color: "red"}}>5%</span> to make and send first batch of merchandise to holders </p>
              <p><span style={{color: "orange"}}>30%</span> to staking. The profit will be distributed among our holders. </p>
              <p><span style={{color: "green"}}>10%</span> to IRL events to make our community stronger</p>
            </div>

            <div className={styles.pieChart}>
              <Pie 
              data={data}
              />
            </div>
          </div>
        </div>
        
        <Slider {...settings} className={styles.carousel}>
          <div>
            <img src="/nft1.jpg"/>
          </div>
          <div>
            <img src="/nft2.jpg"/>
          </div>
          <div>
            <img src="/nft3.jpg"/>
          </div>
          <div>
            <img src="/nft4.jpg"/>
          </div>
          <div>
            <img src="/nft5.jpg"/>
          </div>
          <div>
            <img src="/nft6.jpg"/>
          </div>
        </Slider>

        <div className={styles.whitepaper}>
          <a href="https://meow-squad.gitbook.io/whitepaper/">Read our whitepaper</a>
        </div>

        <div className={styles.footer}>
          <div className={styles.footerLogo}>
            <img src="/logo.png"/>
            <p>Meow <span>Squad</span></p>
          </div>
          <div className={styles.icons}>
            <a href="https://twitter.com/Meowsquadnft">
              <svg xmlns="http://www.w3.org/2000/svg"  width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
              </svg>
            </a>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="9" cy="12" r="1" />
                <circle cx="15" cy="12" r="1" />
                <path d="M7.5 7.5c3.5 -1 5.5 -1 9 0" />
                <path d="M7 16.5c3.5 1 6.5 1 10 0" />
                <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-1 2.5" />
                <path d="M8.5 17c0 1 -1.356 3 -1.832 3c-1.429 0 -2.698 -1.667 -3.333 -3c-.635 -1.667 -.476 -5.833 1.428 -11.5c1.388 -1.015 2.782 -1.34 4.237 -1.5l1 2.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

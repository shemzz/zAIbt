import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import Countdown from "../components/Countdown";
import Image from "next/image";
import logo from "../assets/logo.svg";
import card1 from "../assets/card-1.png";
import ele from "../assets/ele-1.png";
import elesvg from "../assets/ele-1.svg";
import grid from "../assets/grid.svg";
import card3 from "../assets/card-3.png";
import card2 from "../assets/card-2.png";
import card4 from "../assets/card-4.png";
import Buttonn from "../components/Button";
import logodark from "../assets/logo-dark.svg";
import x from "../assets/x.svg";
import tg from "../assets/tg.svg";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>zAIbot</title>
        <meta
          content="zAiBot - Zaibot is revolutionizing the way we interact with the dynamic world of cryptocurrency."
          name="description"
        />
        {/* <link href='/assets/logo.svg' rel="icon" /> */}
      </Head>
      <main>
        <div className="menu-container svelte-1sogyhm">
          <button className="toggle-menu svelte-1sogyhm">
            <div className="open-btn svelte-1sogyhm">
              <svg
                width="119"
                height="43"
                viewBox="0 0 119 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M109 33.0002L96.6151 18.3455C92.0996 13.0022 85.9751 10.0002 79.5891 10L9 9.99999"
                  stroke="url(#paint0_linear_713_2359)"
                  strokeOpacity="0.3"
                  strokeMiterlimit="10"
                ></path>
                <path
                  d="M109 33.0002L96.6151 18.3455C92.0996 13.0022 85.9751 10.0002 79.5891 10L9 9.99999"
                  stroke="url(#paint1_linear_713_2359)"
                  strokeMiterlimit="10"
                ></path>
                <g filter="url(#filter0_f_713_2359)">
                  <path
                    d="M109 33.0002L96.6151 18.3455C92.0996 13.0022 85.9751 10.0002 79.5891 10L9 9.99999"
                    stroke="url(#paint2_linear_713_2359)"
                    strokeMiterlimit="10"
                  ></path>
                </g>
                <defs>
                  <filter
                    id="filter0_f_713_2359"
                    x="0"
                    y="0.499992"
                    width="118.382"
                    height="41.8229"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feBlend>
                    <feGaussianBlur
                      stdDeviation="4.5"
                      result="effect1_foregroundBlur_713_2359"
                    ></feGaussianBlur>
                  </filter>
                  <linearGradient
                    id="paint0_linear_713_2359"
                    x1="9"
                    y1="10"
                    x2="111.179"
                    y2="27.8598"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset="0.14082"
                      stopColor="#1BE6B2"
                      stopOpacity="0"
                    ></stop>
                    <stop offset="0.528091" stopColor="#1BE6B2"></stop>
                    <stop
                      offset="0.667521"
                      stopColor="#1BE6B2"
                      stopOpacity="0.89"
                    ></stop>
                    <stop
                      offset="1"
                      stopColor="#1BE6B2"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_713_2359"
                    x1="9"
                    y1="10"
                    x2="111.179"
                    y2="27.8598"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset="0.14082"
                      stopColor="#1BE6B2"
                      stopOpacity="0"
                    ></stop>
                    <stop offset="0.528091" stopColor="#1BE6B2"></stop>
                    <stop
                      offset="0.667521"
                      stopColor="#1BE6B2"
                      stopOpacity="0.89"
                    ></stop>
                    <stop
                      offset="1"
                      stopColor="#1BE6B2"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_713_2359"
                    x1="9"
                    y1="10"
                    x2="111.179"
                    y2="27.8598"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset="0.14082"
                      stopColor="#1BE6B2"
                      stopOpacity="0"
                    ></stop>
                    <stop offset="0.528091" stopColor="#1BE6B2"></stop>
                    <stop
                      offset="0.667521"
                      stopColor="#1BE6B2"
                      stopOpacity="0.89"
                    ></stop>
                    <stop
                      offset="1"
                      stopColor="#1BE6B2"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                </defs>
              </svg>
              <svg
                width="29"
                height="28"
                viewBox="0 0 29 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="6.68732"
                  y="6"
                  width="16"
                  height="2.28571"
                  rx="1.14286"
                  fill="#1BE6B2"
                ></rect>
                <rect
                  x="6.68732"
                  y="12.8571"
                  width="16"
                  height="2.28571"
                  rx="1.14286"
                  fill="#1BE6B2"
                ></rect>
                <rect
                  x="6.68732"
                  y="19.7143"
                  width="16"
                  height="2.28571"
                  rx="1.14286"
                  fill="#1BE6B2"
                ></rect>
                <g filter="url(#filter0_f_654_2375)">
                  <rect
                    x="6.68732"
                    y="6"
                    width="16"
                    height="2.28571"
                    rx="1.14286"
                    fill="#1BE6B2"
                  ></rect>
                  <rect
                    x="6.68732"
                    y="12.8571"
                    width="16"
                    height="2.28571"
                    rx="1.14286"
                    fill="#1BE6B2"
                  ></rect>
                  <rect
                    x="6.68732"
                    y="19.7143"
                    width="16"
                    height="2.28571"
                    rx="1.14286"
                    fill="#1BE6B2"
                  ></rect>
                </g>
                <defs>
                  <filter
                    id="filter0_f_654_2375"
                    x="0.687317"
                    y="0"
                    width="28"
                    height="28"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feBlend>
                    <feGaussianBlur
                      stdDeviation="3"
                      result="effect1_foregroundBlur_654_2375"
                    ></feGaussianBlur>
                  </filter>
                </defs>
              </svg>{" "}
              <svg
                width="119"
                height="43"
                viewBox="0 0 119 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 32.9999L22.3849 18.3454C26.9004 13.0021 33.0249 10.0002 39.4109 10L110 10"
                  stroke="url(#paint0_linear_713_2360)"
                  strokeOpacity="0.3"
                  strokeMiterlimit="10"
                ></path>
                <path
                  d="M10 32.9999L22.3849 18.3454C26.9004 13.0021 33.0249 10.0002 39.4109 10L110 10"
                  stroke="url(#paint1_linear_713_2360)"
                  strokeMiterlimit="10"
                ></path>
                <g filter="url(#filter0_f_713_2360)">
                  <path
                    d="M10 32.9999L22.3849 18.3454C26.9004 13.0021 33.0249 10.0002 39.4109 10L110 10"
                    stroke="url(#paint2_linear_713_2360)"
                    strokeOpacity="0.8"
                    strokeMiterlimit="10"
                  ></path>
                </g>
                <defs>
                  <filter
                    id="filter0_f_713_2360"
                    x="0.618103"
                    y="0.500008"
                    width="118.382"
                    height="41.8227"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feBlend>
                    <feGaussianBlur
                      stdDeviation="4.5"
                      result="effect1_foregroundBlur_713_2360"
                    ></feGaussianBlur>
                  </filter>
                  <linearGradient
                    id="paint0_linear_713_2360"
                    x1="110"
                    y1="10.0001"
                    x2="7.82123"
                    y2="27.86"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset="0.14082"
                      stopColor="#1BE6B2"
                      stopOpacity="0"
                    ></stop>
                    <stop offset="0.528091" stopColor="#1BE6B2"></stop>
                    <stop
                      offset="0.667521"
                      stopColor="#1BE6B2"
                      stopOpacity="0.89"
                    ></stop>
                    <stop
                      offset="1"
                      stopColor="#1BE6B2"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_713_2360"
                    x1="110"
                    y1="10.0001"
                    x2="7.82123"
                    y2="27.86"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset="0.14082"
                      stopColor="#1BE6B2"
                      stopOpacity="0"
                    ></stop>
                    <stop offset="0.528091" stopColor="#1BE6B2"></stop>
                    <stop
                      offset="0.667521"
                      stopColor="#1BE6B2"
                      stopOpacity="0.89"
                    ></stop>
                    <stop
                      offset="1"
                      stopColor="#1BE6B2"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_713_2360"
                    x1="100"
                    y1="4"
                    x2="0.418014"
                    y2="22.9401"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset="0.14082"
                      stopColor="#1BE6B2"
                      stopOpacity="0"
                    ></stop>
                    <stop offset="0.528091" stopColor="#1BE6B2"></stop>
                    <stop
                      offset="0.667521"
                      stopColor="#1BE6B2"
                      stopOpacity="0.89"
                    ></stop>
                    <stop
                      offset="1"
                      stopColor="#1BE6B2"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </button>{" "}
        </div>
        <div className="hero-section svelte-cadtdl">
          <div className="hero-text svelte-cadtdl overflow-hidden">
            <Image src={logo} width="60" alt="logo" className="mx-auto" />
            <h1 className="glitch pt-5">
              Z<span className="cyan">AI</span>BOT
            </h1>
          </div>
            <Countdown />

        </div>

        <div className="bg-map">
          <section className="section-03 svelte-flk14a" id="home">
            <div className="about-container svelte-flk14a">
              <div className="title svelte-flk14a">
                THE <span className="cyan">VANGUARD</span> OF AI BOT
              </div>
              <div className=" svg-padding pb-2">
                <svg
                  width="30"
                  height="1"
                  viewBox="0 0 30 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line y1="0.5" x2="30" y2="0.5" stroke="white"></line>
                </svg>
              </div>
              <div className="about-text svelte-flk14a">
                Zaibot is not just a tool, it&#x27;s a community-driven platform
                that keeps you engaged, informed, and ahead in the fast-paced
                world of cryptocurrency.
                <br />
                <br /> Join us and be part of a community that’s actively
                shaping the future of crypto trading.
              </div>
              <br />
              <div className="svg-padding">
                <svg
                  width="1"
                  height="40"
                  viewBox="0 0 1 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="0.5"
                    y1="2.18557e-08"
                    x2="0.499995"
                    y2="120"
                    stroke="white"
                  ></line>
                </svg>
              </div>
            </div>
          </section>
          <div className="container mx-auto px-5 ">
            <div className="cards">
              <div className="intro__separator-top pt-10"></div>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-1">
                <div
                  className="card overflow-x-hidden bg-gray-300"
                  style={{ background: "#df0d28" }}
                >
                  <Image src={elesvg} alt="ele" className="px-10 py-4 " />
                  <div>
                    <Image
                      src={card1}
                      alt="card1"
                      width="100"
                      className="ml-auto"
                    />
                  </div>
                  <div>
                    <Image
                      src={grid}
                      alt="grid"
                      width="90"
                      className="ml-auto"
                    />
                  </div>
                  <div className="p-8 ">
                    <p className="text-2xl py-5 text-white kleemax">
                      REVENUE <br />
                      SHARING
                    </p>
                    <p className="text-white opacity-80 ">
                      Enjoy short-term participation with high rewards, without
                      diluting revenue across inactive tokens.
                      <br />
                      <br />
                      Extend your benefits and staking time through our referral
                      program, where more referrals mean additional hours and
                      rewards.
                    </p>
                  </div>
                  <Image
                    src={ele}
                    width="50"
                    alt="ele"
                    className="mt-auto ml-auto pb-10 pr-10 relative"
                  />
                </div>
                <div
                  className="card overflow-x-hidden bg-gray-300"
                  style={{ background: "#0d839b" }}
                >
                  <Image src={elesvg} alt="ele" className="px-10 py-4 " />
                  <div>
                    <Image
                      src={card3}
                      alt="card"
                      width="100"
                      className="ml-auto"
                    />
                  </div>
                  <div>
                    <Image
                      src={grid}
                      alt="grid"
                      width="90"
                      className="ml-auto"
                    />
                  </div>
                  <div className="p-8 ">
                    <p className="text-2xl py-5 text-white kleemax">
                      TOKEN
                      <br />
                      TRACKING
                    </p>
                    <p className="text-white opacity-80 ">
                      Stay ahead of the market with real-time tracking of any
                      tokens.
                      <br />
                      <br />
                      Gain unprecedented exposure and insights into market
                      trends.
                      <br />
                      <br />
                      With AI tools recommendations you&#x27;ll love it even
                      more
                    </p>
                  </div>
                  <Image
                    src={ele}
                    alt="ele"
                    width="50"
                    className="mt-auto ml-auto pb-10 pr-10 relative"
                  />
                </div>
                <div
                  className="card overflow-x-hidden bg-gray-300"
                  style={{ background: "#b69f02" }}
                >
                  <Image src={elesvg} alt="ele" className="px-10 py-4 " />
                  <div>
                    <Image
                      src={card2}
                      alt="card"
                      width="100"
                      className="ml-auto"
                    />
                  </div>
                  <div>
                    <Image
                      src={grid}
                      alt="grid"
                      width="90"
                      className="ml-auto"
                    />
                  </div>
                  <div className="p-8 ">
                    <p className="text-2xl py-5 text-white kleemax">
                      TRENDING
                      <br />
                      BOOST
                    </p>
                    <p className="text-white opacity-80 ">
                      Similar to the Telegram boost, this feature allows the
                      community to collectively push a token into trending by
                      contributing ETH.
                      <br />
                      <br />
                      Once the target of 0.1 ETH is reached, watch your token
                      climb the trending charts.
                    </p>
                  </div>
                  <Image
                    src={ele}
                    alt="ele"
                    width="50"
                    className="mt-auto ml-auto pb-10 pr-10 relative"
                  />
                </div>
                <div
                  className="card overflow-x-hidden bg-gray-300"
                  style={{ background: "#5d7f1b" }}
                >
                  <Image src={ele} alt="ele" className="px-10 py-4 " />
                  <div>
                    <Image
                      src={card4}
                      alt="card"
                      width="100"
                      className="ml-auto"
                    />
                  </div>
                  <div>
                    <Image
                      src={grid}
                      alt="grid"
                      width="90"
                      className="ml-auto"
                    />
                  </div>
                  <div className="p-8 ">
                    <p className="text-2xl py-5 text-white kleemax">
                      REFERRALS <br />
                      PROGRAM
                    </p>
                    <p className="text-white opacity-80 ">
                      Boost your income or promote your projects with our
                      tailored advertising options.
                      <br /> <br />
                      Benefit from our referral program where Key Opinion
                      Leaders (KOLs) earn for every successful referral.
                    </p>
                  </div>
                  <Image
                    src={ele}
                    alt="ele"
                    width="50"
                    className="mt-auto ml-auto pb-10 pr-10 relative"
                  />
                </div>
              </div>
              <div className="intro__separator-bottom"></div>
            </div>
          </div>
          <section className="section-03 svelte-bn63j8" id="personal-works">
            <div className="frame-container svelte-bn63j8">
              <svg
                width="100%"
                height="100%"
                filter="url(#glowingPulse2)"
                viewBox="0 0 4956 3513"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1340.49 2765.32L1355.84 2723.05L1553 2591.84L1615.6 2582.22"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="BUpQDIzt_0"
                ></path>
                <path
                  d="M23.8928 3280.58L455.951 3307.12L1255.82 2915.04L1328.1 2802.86"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="BUpQDIzt_1"
                ></path>
                <path
                  d="M1766.04 2510.41L1772.99 2537.7L1689.35 2592.71L1649.33 2587.16"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="BUpQDIzt_2"
                ></path>
                <path
                  d="M3637.64 2766.32L3622.29 2724.05L3425.13 2592.84L3362.53 2583.22"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="BUpQDIzt_3"
                ></path>
                <path
                  d="M4954.24 3281.58L4522.18 3308.12L3722.31 2916.04L3650.03 2803.86"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="BUpQDIzt_4"
                ></path>
                <path
                  d="M3212.09 2511.41L3205.14 2538.7L3288.78 2593.71L3328.8 2588.16"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="BUpQDIzt_5"
                ></path>
                <path
                  d="M3622.75 643.775L3607.4 680.213L3410.24 793.347L3347.64 801.637"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="BUpQDIzt_6"
                ></path>
                <path
                  d="M4939.34 199.527L4507.29 176.643L3707.42 514.69L3635.14 611.409"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="BUpQDIzt_7"
                ></path>
                <path
                  d="M3197.2 863.553L3190.25 840.023L3273.89 792.597L3313.91 797.377"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="BUpQDIzt_8"
                ></path>
                <path
                  d="M1318.6 643.775L1333.94 680.213L1531.11 793.347L1593.71 801.637"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="BUpQDIzt_9"
                ></path>
                <path
                  d="M1.99998 199.527L434.059 176.643L1233.93 514.691L1306.21 611.41"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="BUpQDIzt_10"
                ></path>
                <path
                  d="M1744.15 863.554L1751.1 840.023L1667.45 792.597L1627.44 797.378"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="BUpQDIzt_11"
                ></path>
              </svg>
            </div>
            <div className="text-container"></div>
            <div className="slideshow-container">
              <div className="mySlides svelte-bn63j8">
                <iframe
                  src="https://www.youtube.com/embed/MIq_2e-vXyY?autoplay=1"
                  title="Zaibot - Logo Teaser"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  className="svelte-bn63j8"
                  style={{ width: "100%" }}
                ></iframe>
                <div className="text-box svelte-bn63j8">
                  <div className="pw-name kleemax svelte-bn63j8 ">
                    THE NEXT LEVEL
                  </div>
                  <div className="line svelte-bn63j8"></div>
                  <div className="pw-description svelte-bn63j8">
                    Zaibot is revolutionizing the way we interact
                    <br />
                    with the dynamic world of cryptocurrency.
                  </div>
                </div>
              </div>
            </div>
            <div className="corners svelte-bn63j8">
              <svg
                width="166"
                height="76"
                viewBox="0 0 166 76"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.6698 12.2345L8 8.75445L8.73031 8L12.4031 11.4829C13.2832 12.3263 14.3356 12.9736 15.4895 13.3811C16.6434 13.7887 17.8721 13.947 19.093 13.8456L19.0949 13.8454L86.3167 8.50418L86.3282 8.50377C89.8917 8.37397 92.8889 8.28737 95.4719 8.24404L95.4808 8.24389C99.2298 8.24397 102.414 8.58248 105 11.0473C107.274 13.1636 108.028 15.1333 108.332 16.8516C108.443 17.4772 108.495 18.0779 108.541 18.6119C108.556 18.7909 108.571 18.9623 108.587 19.1247C108.654 19.7931 108.743 20.3164 108.954 20.75C109.293 21.4062 109.743 21.9997 110.285 22.5042L110.289 22.508L147.262 57.645C147.336 57.7164 147.425 57.7711 147.522 57.8054C148.793 58.2132 149.793 58.2285 150.762 58.2434C151.057 58.2479 151.348 58.2523 151.644 58.2677C152.271 58.3004 152.905 58.3866 153.555 58.6622C154.207 58.9388 154.843 59.3915 155.501 60.112L155.513 60.1255L155.524 60.1398C157.294 62.3707 158.166 65.1706 157.974 68L156.921 67.9299C157.095 65.364 156.306 62.8249 154.705 60.7993C154.134 60.1769 153.623 59.8278 153.139 59.6227C152.65 59.4153 152.155 59.3406 151.588 59.3111C151.348 59.2986 151.092 59.295 150.821 59.2912C149.831 59.2773 148.63 59.2604 147.189 58.7971L147.179 58.7936C146.934 58.7091 146.711 58.5726 146.526 58.3939C146.526 58.3937 146.526 58.3941 146.526 58.3939L109.562 23.2656C109.561 23.2648 109.561 23.2641 109.56 23.2634C108.928 22.6754 108.404 21.9839 108.011 21.2192L108.007 21.2101C107.706 20.596 107.605 19.9097 107.537 19.227C107.518 19.0397 107.502 18.8525 107.486 18.6639C107.441 18.1412 107.395 17.6079 107.293 17.032C107.023 15.5132 106.368 13.7541 104.275 11.8064L104.27 11.8019C102.006 9.64275 99.2056 9.2891 95.4853 9.28881C92.9155 9.33195 89.9309 9.41814 86.3784 9.54748L19.1813 14.8868C19.181 14.8868 19.1816 14.8867 19.1813 14.8868C17.8106 15.0005 16.4302 14.8227 15.1347 14.3652C13.8393 13.9077 12.6579 13.1812 11.6698 12.2345Z"
                  fill="white"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M94.9355 25.6128C93.9597 25.6128 93.1689 26.3954 93.1689 27.3606C93.1689 28.3257 93.9597 29.1084 94.9355 29.1084C95.9112 29.1084 96.7019 28.3257 96.7019 27.3606C96.7019 26.3954 95.9112 25.6128 94.9355 25.6128ZM92.1133 27.3606C92.1133 25.8181 93.377 24.5679 94.9355 24.5679C96.4939 24.5679 97.7575 25.8181 97.7575 27.3606C97.7575 28.903 96.4939 30.1532 94.9355 30.1532C93.377 30.1532 92.1133 28.9031 92.1133 27.3606Z"
                  fill="white"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M96.0056 37.6554C95.0299 37.6554 94.2392 38.438 94.2392 39.4032C94.2392 40.3683 95.0299 41.151 96.0056 41.151C96.9812 41.151 97.772 40.3683 97.772 39.4032C97.772 38.438 96.9812 37.6554 96.0056 37.6554ZM93.1836 39.4032C93.1836 37.8607 94.4471 36.6105 96.0056 36.6105C97.5641 36.6105 98.8276 37.8607 98.8276 39.4032C98.8276 40.9456 97.5641 42.1958 96.0056 42.1958C94.4471 42.1958 93.1836 40.9456 93.1836 39.4032Z"
                  fill="white"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M84.6854 32.6612C83.7097 32.6612 82.9189 33.4438 82.9189 34.409C82.9189 35.3741 83.7097 36.1568 84.6854 36.1568C85.6611 36.1568 86.4518 35.3741 86.4518 34.409C86.4518 33.4438 85.6611 32.6612 84.6854 32.6612ZM81.8633 34.409C81.8633 32.8665 83.127 31.6163 84.6854 31.6163C86.2439 31.6163 87.5074 32.8665 87.5074 34.409C87.5074 35.9514 86.2439 37.2016 84.6854 37.2016C83.127 37.2016 81.8633 35.9514 81.8633 34.409Z"
                  fill="white"
                ></path>
                <g filter="url(#filter0_f_741_2420)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.6698 12.1911L8 8.74674L8.73031 8L12.4031 11.4472C13.2832 12.2821 14.3356 12.9227 15.4895 13.3261C16.6434 13.7294 17.8721 13.8862 19.093 13.7858L19.0949 13.7856L86.3167 8.49902L86.3282 8.49861C89.8917 8.37014 92.8889 8.28443 95.4719 8.24155L95.4808 8.2414C99.2298 8.24147 102.414 8.57652 105 11.0162C107.274 13.1108 108.028 15.0603 108.332 16.761C108.443 17.3802 108.495 17.9748 108.541 18.5033C108.556 18.6805 108.571 18.8502 108.587 19.0109C108.654 19.6725 108.743 20.1904 108.954 20.6196C109.293 21.2691 109.743 21.8565 110.285 22.3558L110.289 22.3596L147.262 57.1371C147.336 57.2078 147.425 57.2619 147.522 57.2958C148.793 57.6995 149.793 57.7147 150.762 57.7294C151.057 57.7338 151.348 57.7382 151.644 57.7535C152.271 57.7858 152.905 57.8711 153.555 58.1439C154.207 58.4177 154.843 58.8657 155.501 59.5788L155.513 59.5922L155.524 59.6064C157.294 61.8145 158.166 64.5857 157.974 67.3862L156.921 67.3168C157.095 64.7772 156.306 62.264 154.705 60.2591C154.134 59.6431 153.623 59.2975 153.139 59.0946C152.65 58.8893 152.155 58.8154 151.588 58.7862C151.348 58.7738 151.092 58.7702 150.821 58.7665C149.831 58.7527 148.63 58.736 147.189 58.2774L147.179 58.274C146.934 58.1903 146.711 58.0552 146.526 57.8783C146.526 57.8781 146.526 57.8785 146.526 57.8783L109.562 23.1094C109.561 23.1087 109.561 23.108 109.56 23.1072C108.928 22.5253 108.404 21.8408 108.011 21.084L108.007 21.075C107.706 20.4671 107.605 19.7879 107.537 19.1121C107.518 18.9268 107.502 18.7415 107.486 18.5548C107.441 18.0375 107.395 17.5096 107.293 16.9396C107.023 15.4363 106.368 13.6952 104.275 11.7675L104.27 11.763C102.006 9.62595 99.2056 9.27591 95.4853 9.27563C92.9155 9.31833 89.9309 9.40363 86.3784 9.53165L19.1813 14.8163C19.181 14.8163 19.1816 14.8163 19.1813 14.8163C17.8106 14.9289 16.4302 14.7529 15.1347 14.3001C13.8393 13.8473 12.6579 13.1282 11.6698 12.1911Z"
                    fill="#EB5757"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M94.9355 25.4326C93.9597 25.4326 93.1689 26.2073 93.1689 27.1625C93.1689 28.1178 93.9597 28.8924 94.9355 28.8924C95.9112 28.8924 96.7019 28.1178 96.7019 27.1625C96.7019 26.2072 95.9112 25.4326 94.9355 25.4326ZM92.1133 27.1625C92.1133 25.6358 93.377 24.3984 94.9355 24.3984C96.4939 24.3984 97.7575 25.6358 97.7575 27.1625C97.7575 28.6892 96.4939 29.9266 94.9355 29.9266C93.377 29.9266 92.1133 28.6892 92.1133 27.1625Z"
                    fill="#EB5757"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M96.0056 37.352C95.0299 37.352 94.2392 38.1266 94.2392 39.0819C94.2392 40.0372 95.0299 40.8118 96.0056 40.8118C96.9812 40.8118 97.772 40.0372 97.772 39.0819C97.772 38.1266 96.9812 37.352 96.0056 37.352ZM93.1836 39.0819C93.1836 37.5552 94.4471 36.3178 96.0056 36.3178C97.5641 36.3178 98.8276 37.5552 98.8276 39.0819C98.8276 40.6085 97.5641 41.8459 96.0056 41.8459C94.4471 41.8459 93.1836 40.6085 93.1836 39.0819Z"
                    fill="#EB5757"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M84.6854 32.4089C83.7097 32.4089 82.9189 33.1836 82.9189 34.1388C82.9189 35.0941 83.7097 35.8687 84.6854 35.8687C85.6611 35.8687 86.4518 35.0941 86.4518 34.1388C86.4518 33.1835 85.6611 32.4089 84.6854 32.4089ZM81.8633 34.1388C81.8633 32.6121 83.127 31.3748 84.6854 31.3748C86.2439 31.3748 87.5074 32.6122 87.5074 34.1388C87.5074 35.6655 86.2439 36.9029 84.6854 36.9029C83.127 36.9029 81.8633 35.6655 81.8633 34.1388Z"
                    fill="#EB5757"
                  ></path>
                </g>
                <defs>
                  <filter
                    id="filter0_f_741_2420"
                    x="0"
                    y="0"
                    width="166"
                    height="75.3862"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feBlend>
                    <feGaussianBlur
                      stdDeviation="4"
                      result="effect1_foregroundBlur_741_2420"
                    ></feGaussianBlur>
                  </filter>
                </defs>
              </svg>
              <div className="mirror svelte-bn63j8">
                <svg
                  width="166"
                  height="76"
                  viewBox="0 0 166 76"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.6698 12.2345L8 8.75445L8.73031 8L12.4031 11.4829C13.2832 12.3263 14.3356 12.9736 15.4895 13.3811C16.6434 13.7887 17.8721 13.947 19.093 13.8456L19.0949 13.8454L86.3167 8.50418L86.3282 8.50377C89.8917 8.37397 92.8889 8.28737 95.4719 8.24404L95.4808 8.24389C99.2298 8.24397 102.414 8.58248 105 11.0473C107.274 13.1636 108.028 15.1333 108.332 16.8516C108.443 17.4772 108.495 18.0779 108.541 18.6119C108.556 18.7909 108.571 18.9623 108.587 19.1247C108.654 19.7931 108.743 20.3164 108.954 20.75C109.293 21.4062 109.743 21.9997 110.285 22.5042L110.289 22.508L147.262 57.645C147.336 57.7164 147.425 57.7711 147.522 57.8054C148.793 58.2132 149.793 58.2285 150.762 58.2434C151.057 58.2479 151.348 58.2523 151.644 58.2677C152.271 58.3004 152.905 58.3866 153.555 58.6622C154.207 58.9388 154.843 59.3915 155.501 60.112L155.513 60.1255L155.524 60.1398C157.294 62.3707 158.166 65.1706 157.974 68L156.921 67.9299C157.095 65.364 156.306 62.8249 154.705 60.7993C154.134 60.1769 153.623 59.8278 153.139 59.6227C152.65 59.4153 152.155 59.3406 151.588 59.3111C151.348 59.2986 151.092 59.295 150.821 59.2912C149.831 59.2773 148.63 59.2604 147.189 58.7971L147.179 58.7936C146.934 58.7091 146.711 58.5726 146.526 58.3939C146.526 58.3937 146.526 58.3941 146.526 58.3939L109.562 23.2656C109.561 23.2648 109.561 23.2641 109.56 23.2634C108.928 22.6754 108.404 21.9839 108.011 21.2192L108.007 21.2101C107.706 20.596 107.605 19.9097 107.537 19.227C107.518 19.0397 107.502 18.8525 107.486 18.6639C107.441 18.1412 107.395 17.6079 107.293 17.032C107.023 15.5132 106.368 13.7541 104.275 11.8064L104.27 11.8019C102.006 9.64275 99.2056 9.2891 95.4853 9.28881C92.9155 9.33195 89.9309 9.41814 86.3784 9.54748L19.1813 14.8868C19.181 14.8868 19.1816 14.8867 19.1813 14.8868C17.8106 15.0005 16.4302 14.8227 15.1347 14.3652C13.8393 13.9077 12.6579 13.1812 11.6698 12.2345Z"
                    fill="white"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M94.9355 25.6128C93.9597 25.6128 93.1689 26.3954 93.1689 27.3606C93.1689 28.3257 93.9597 29.1084 94.9355 29.1084C95.9112 29.1084 96.7019 28.3257 96.7019 27.3606C96.7019 26.3954 95.9112 25.6128 94.9355 25.6128ZM92.1133 27.3606C92.1133 25.8181 93.377 24.5679 94.9355 24.5679C96.4939 24.5679 97.7575 25.8181 97.7575 27.3606C97.7575 28.903 96.4939 30.1532 94.9355 30.1532C93.377 30.1532 92.1133 28.9031 92.1133 27.3606Z"
                    fill="white"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M96.0056 37.6554C95.0299 37.6554 94.2392 38.438 94.2392 39.4032C94.2392 40.3683 95.0299 41.151 96.0056 41.151C96.9812 41.151 97.772 40.3683 97.772 39.4032C97.772 38.438 96.9812 37.6554 96.0056 37.6554ZM93.1836 39.4032C93.1836 37.8607 94.4471 36.6105 96.0056 36.6105C97.5641 36.6105 98.8276 37.8607 98.8276 39.4032C98.8276 40.9456 97.5641 42.1958 96.0056 42.1958C94.4471 42.1958 93.1836 40.9456 93.1836 39.4032Z"
                    fill="white"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M84.6854 32.6612C83.7097 32.6612 82.9189 33.4438 82.9189 34.409C82.9189 35.3741 83.7097 36.1568 84.6854 36.1568C85.6611 36.1568 86.4518 35.3741 86.4518 34.409C86.4518 33.4438 85.6611 32.6612 84.6854 32.6612ZM81.8633 34.409C81.8633 32.8665 83.127 31.6163 84.6854 31.6163C86.2439 31.6163 87.5074 32.8665 87.5074 34.409C87.5074 35.9514 86.2439 37.2016 84.6854 37.2016C83.127 37.2016 81.8633 35.9514 81.8633 34.409Z"
                    fill="white"
                  ></path>
                  <g filter="url(#filter0_f_741_2420)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.6698 12.1911L8 8.74674L8.73031 8L12.4031 11.4472C13.2832 12.2821 14.3356 12.9227 15.4895 13.3261C16.6434 13.7294 17.8721 13.8862 19.093 13.7858L19.0949 13.7856L86.3167 8.49902L86.3282 8.49861C89.8917 8.37014 92.8889 8.28443 95.4719 8.24155L95.4808 8.2414C99.2298 8.24147 102.414 8.57652 105 11.0162C107.274 13.1108 108.028 15.0603 108.332 16.761C108.443 17.3802 108.495 17.9748 108.541 18.5033C108.556 18.6805 108.571 18.8502 108.587 19.0109C108.654 19.6725 108.743 20.1904 108.954 20.6196C109.293 21.2691 109.743 21.8565 110.285 22.3558L110.289 22.3596L147.262 57.1371C147.336 57.2078 147.425 57.2619 147.522 57.2958C148.793 57.6995 149.793 57.7147 150.762 57.7294C151.057 57.7338 151.348 57.7382 151.644 57.7535C152.271 57.7858 152.905 57.8711 153.555 58.1439C154.207 58.4177 154.843 58.8657 155.501 59.5788L155.513 59.5922L155.524 59.6064C157.294 61.8145 158.166 64.5857 157.974 67.3862L156.921 67.3168C157.095 64.7772 156.306 62.264 154.705 60.2591C154.134 59.6431 153.623 59.2975 153.139 59.0946C152.65 58.8893 152.155 58.8154 151.588 58.7862C151.348 58.7738 151.092 58.7702 150.821 58.7665C149.831 58.7527 148.63 58.736 147.189 58.2774L147.179 58.274C146.934 58.1903 146.711 58.0552 146.526 57.8783C146.526 57.8781 146.526 57.8785 146.526 57.8783L109.562 23.1094C109.561 23.1087 109.561 23.108 109.56 23.1072C108.928 22.5253 108.404 21.8408 108.011 21.084L108.007 21.075C107.706 20.4671 107.605 19.7879 107.537 19.1121C107.518 18.9268 107.502 18.7415 107.486 18.5548C107.441 18.0375 107.395 17.5096 107.293 16.9396C107.023 15.4363 106.368 13.6952 104.275 11.7675L104.27 11.763C102.006 9.62595 99.2056 9.27591 95.4853 9.27563C92.9155 9.31833 89.9309 9.40363 86.3784 9.53165L19.1813 14.8163C19.181 14.8163 19.1816 14.8163 19.1813 14.8163C17.8106 14.9289 16.4302 14.7529 15.1347 14.3001C13.8393 13.8473 12.6579 13.1282 11.6698 12.1911Z"
                      fill="#EB5757"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M94.9355 25.4326C93.9597 25.4326 93.1689 26.2073 93.1689 27.1625C93.1689 28.1178 93.9597 28.8924 94.9355 28.8924C95.9112 28.8924 96.7019 28.1178 96.7019 27.1625C96.7019 26.2072 95.9112 25.4326 94.9355 25.4326ZM92.1133 27.1625C92.1133 25.6358 93.377 24.3984 94.9355 24.3984C96.4939 24.3984 97.7575 25.6358 97.7575 27.1625C97.7575 28.6892 96.4939 29.9266 94.9355 29.9266C93.377 29.9266 92.1133 28.6892 92.1133 27.1625Z"
                      fill="#EB5757"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M96.0056 37.352C95.0299 37.352 94.2392 38.1266 94.2392 39.0819C94.2392 40.0372 95.0299 40.8118 96.0056 40.8118C96.9812 40.8118 97.772 40.0372 97.772 39.0819C97.772 38.1266 96.9812 37.352 96.0056 37.352ZM93.1836 39.0819C93.1836 37.5552 94.4471 36.3178 96.0056 36.3178C97.5641 36.3178 98.8276 37.5552 98.8276 39.0819C98.8276 40.6085 97.5641 41.8459 96.0056 41.8459C94.4471 41.8459 93.1836 40.6085 93.1836 39.0819Z"
                      fill="#EB5757"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M84.6854 32.4089C83.7097 32.4089 82.9189 33.1836 82.9189 34.1388C82.9189 35.0941 83.7097 35.8687 84.6854 35.8687C85.6611 35.8687 86.4518 35.0941 86.4518 34.1388C86.4518 33.1835 85.6611 32.4089 84.6854 32.4089ZM81.8633 34.1388C81.8633 32.6121 83.127 31.3748 84.6854 31.3748C86.2439 31.3748 87.5074 32.6122 87.5074 34.1388C87.5074 35.6655 86.2439 36.9029 84.6854 36.9029C83.127 36.9029 81.8633 35.6655 81.8633 34.1388Z"
                      fill="#EB5757"
                    ></path>
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_741_2420"
                      x="0"
                      y="0"
                      width="166"
                      height="75.3862"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood
                        floodOpacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      ></feBlend>
                      <feGaussianBlur
                        stdDeviation="4"
                        result="effect1_foregroundBlur_741_2420"
                      ></feGaussianBlur>
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </section>
          <h2 style={{ height: "50px" }}>
            <span className="index-module_type__E-SaG"></span>
          </h2>
          <div className="svg-padding py-2 flex justify-center">
            <svg
              width="30"
              height="1"
              viewBox="0 0 30 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="0.5" x2="30" y2="0.5" stroke="white"></line>
            </svg>
          </div>
          <p className="about-text svelte-flk14a mx-auto text-white opacity-70 text-center">
            Zone Artificial Intelligence (AI) is an emerging concept within the
            realm of Artificial General Intelligence (AGI).
            <br />
            <br />
            Zone AI refers to a subset of AGI that is specialized in
            autonomously operating within a specific &#x27;zone&#x27; or domain.
            This approach strikes a balance between the versatility of AGI and
            the efficiency of specialized AI.
          </p>
          <div className="bubbles-wrapper">
            <div className="bubbles">
              <div
                className="bubble"
                id="bubble-0"
                style={{
                  backgroundImage:
                    "url('/assets/bubbles/bubble-0.svg');background-position:center;opacity:0;transform:translate(1134px, 45px) scale(0.6)",
                }}
              ></div>
              <div
                className="bubble"
                id="bubble-1"
                style={{
                  backgroundImage:
                    "url(/assets/bubbles/bubble-1.svg);background-position:center;opacity:0;transform:translate(1620px, 271px) scale(0.6)",
                }}
              ></div>
              <div
                className="bubble"
                id="bubble-2"
                style={{
                  backgroundImage:
                    "url(../assets/bubbles/bubble-2.svg);background-position:center;opacity:0;transform:translate(1761px, 372px) scale(0.6)",
                }}
              ></div>
              <div
                className="bubble"
                id="bubble-3"
                style={{
                  backgroundImage:
                    "url(../assets/bubbles/bubble-3.svg);background-position:center;opacity:0;transform:translate(2499px, 79px) scale(0.6)",
                }}
              ></div>
              <div
                className="bubble"
                id="bubble-4"
                style={{
                  backgroundImage:
                    "url(../assets/bubbles/bubble-4.svg);background-position:center;opacity:0;transform:translate(2704px, 334px) scale(0.8)",
                }}
              ></div>
              <div
                className="bubble"
                id="bubble-5"
                style={{
                  backgroundImage:
                    "url(../assets/bubbles/bubble-5.svg);background-position:center;opacity:0;transform:translate(2271px, 356px) scale(0.6)",
                }}
              ></div>
              <div
                className="bubble"
                id="bubble-6"
                style={{
                  backgroundImage:
                    "url(../assets/bubbles/bubble-0.svg);background-position:center;opacity:0;transform:translate(795px, 226px) scale(0.6)",
                }}
              ></div>
              <div
                className="bubble"
                id="bubble-7"
                style={{
                  backgroundImage:
                    "url(../assets/bubbles/bubble-1.svg);background-position:center;opacity:0;transform:translate(276px, 256px) scale(0.6)",
                }}
              ></div>
              <div
                className="bubble"
                id="bubble-8"
                style={{
                  backgroundImage:
                    "url(../assets/bubbles/bubble-3.svg);background-position:center;opacity:0;transform:translate(1210px, 365px) scale(0.6)",
                }}
              ></div>
              <div
                className="bubble"
                id="bubble-9"
                style={{
                  backgroundImage:
                    "url(../assets/bubbles/bubble-4.svg);background-position:center;opacity:0;transform:translate(444px, 193px) scale(0.6)",
                }}
              ></div>
              <div
                className="bubble"
                id="bubble-10"
                style={{
                  backgroundImage:
                    "url(_/bubbles/404-5);background-position:center;opacity:0;transform:translate(2545px, 387px) scale(0.6)",
                }}
              ></div>
              <div
                className="bubble"
                id="bubble-11"
                style={{
                  backgroundImage:
                    "url(_/bubbles/404-6);background-position:center;opacity:0;transform:translate(1303px, 193px) scale(0.8)",
                }}
              ></div>
              <div
                className="bubble"
                id="bubble-12"
                style={{
                  backgroundImage:
                    "url(_/bubbles/404);background-position:center;opacity:0;transform:translate(907px, 88px) scale(0.8)",
                }}
              ></div>
              <div
                className="bubble"
                id="bubble-13"
                style={{
                  backgroundImage:
                    "url(_/bubbles/404-2);background-position:center;opacity:0;transform:translate(633px, 320px) scale(0.8)",
                }}
              ></div>
              <div
                className="bubble"
                id="bubble-14"
                style={{
                  backgroundImage:
                    "url(_/bubbles/404-3);background-position:center;opacity:0;transform:translate(323px, 60px) scale(0.8)",
                }}
              ></div>
              <div
                className="bubble"
                id="bubble-15"
                style={{
                  backgroundImage:
                    "url(_/bubbles/404-4);background-position:center;opacity:0;transform:translate(129px, 357px) scale(0.8)",
                }}
              ></div>
              <div
                className="bubble"
                id="bubble-16"
                style={{
                  backgroundImage:
                    "url(_/bubbles/404-5);background-position:center;opacity:0;transform:translate(1440px, 342px) scale(0.8)",
                }}
              ></div>
              <div
                className="bubble"
                id="bubble-17"
                style={{
                  backgroundImage:
                    "url(_/bubbles/404-6);background-position:center;opacity:0;transform:translate(1929px, 293px) scale(0.8)",
                }}
              ></div>
              <div
                className="bubble"
                id="bubble-18"
                style={{
                  backgroundImage:
                    "url(_/bubbles/404);background-position:center;opacity:0;transform:translate(2135px, 198px) scale(0.8)",
                }}
              ></div>
              <div
                className="bubble"
                id="bubble-19"
                style={{
                  backgroundImage:
                    "url(_/bubbles/404-2);background-position:center;opacity:0;transform:translate(2276px, 82px) scale(0.8)",
                }}
              ></div>
              <div
                className="bubble"
                id="bubble-20"
                style={{
                  backgroundImage:
                    "url(_/bubbles/404-3);background-position:center;opacity:0;transform:translate(2654px, 182px) scale(0.8)",
                }}
              ></div>
              <div
                className="bubble"
                id="bubble-21"
                style={{
                  backgroundImage:
                    "url(_/bubbles/404-4);background-position:center;opacity:0;transform:translate(2783px, 60px) scale(0.8)",
                }}
              ></div>
              <div
                className="bubble"
                id="bubble-22"
                style={{
                  backgroundImage:
                    "url(_/bubbles/404-5);background-position:center;opacity:0;transform:translate(1519px, 118px) scale(1)",
                }}
              ></div>
              <div
                className="bubble"
                id="bubble-23"
                style={{
                  backgroundImage:
                    "url(_/bubbles/404-6);background-position:center;opacity:0;transform:translate(1071px, 233px) scale(1)",
                }}
              ></div>
              <div
                className="bubble"
                id="bubble-24"
                style={{
                  backgroundImage:
                    "url(_/bubbles/404);background-position:center;opacity:0;transform:translate(1773px, 148px) scale(1)",
                }}
              ></div>
              <div
                className="bubble"
                id="bubble-25"
                style={{
                  backgroundImage:
                    "url(_/bubbles/404-2);background-position:center;opacity:0;transform:translate(2098px, 385px) scale(1)",
                }}
              ></div>
              <div
                className="bubble"
                id="bubble-26"
                style={{
                  backgroundImage:
                    "url(_/bubbles/404-3);background-position:center;opacity:0;transform:translate(2423px, 244px) scale(1)",
                }}
              ></div>
              <div
                className="bubble"
                id="bubble-27"
                style={{
                  backgroundImage:
                    "url(/bubbles/404-4);background-position:center;opacity:0;transform:translate(901px, 385px) scale(1)",
                }}
              ></div>
              <div
                className="bubble"
                id="bubble-28"
                style={{
                  backgroundImage:
                    "url(_/bubbles/404-5);background-position:center;opacity:0;transform:translate(624px, 111px) scale(1)",
                }}
              ></div>
              <div
                className="bubble"
                id="bubble-29"
                style={{
                  backgroundImage:
                    "url(_/bubbles/404-6);background-position:center;opacity:0;transform:translate(75px, 103px) scale(1)",
                }}
              ></div>
              <div
                className="bubble"
                id="bubble-30"
                style={{
                  backgroundImage:
                    "url(_/bubbles/404);background-position:center;opacity:0;transform:translate(413px, 367px) scale(1)",
                }}
              ></div>
              <div
                className="bubble"
                id="bubble-31"
                style={{
                  backgroundImage:
                    "url(_/bubbles/404-2);background-position:center;opacity:0;transform:translate(2895px, 271px) scale(1)",
                }}
              ></div>
              <div
                className="bubble"
                id="bubble-32"
                style={{
                  backgroundImage:
                    "url(_/bubbles/404-3);background-position:center;opacity:0;transform:translate(1990px, 75px) scale(1)",
                }}
              ></div>
            </div>
          </div>
          <section className="section-02 svelte-1msw6ge" id="start-now">
            <div className="title">START NOW</div>
            <div className="map-container">
              <div className="terrain-container svelte-1msw6ge">
                <div className="marker-container svelte-1msw6ge">
                  <div className="marker-01 svelte-1msw6ge">
                    <a href="#" target="_blank">
                      <div className="button-ripple svelte-1drmnne"></div>TG Bot
                      (Soon)
                    </a>
                  </div>
                  <div className="marker-02 svelte-1msw6ge">
                    <Link href="https://x.com/zaibotio/" target="_blank">
                      <div className="button-ripple svelte-1drmnne"></div>
                      <Image src={x} alt="x" width="30" className="pt-2" />
                    </Link>
                  </div>
                  <div className="marker-03 svelte-1msw6ge">
                    <Link href="https://t.me/Zaibotchat" target="_blank">
                      <div className="button-ripple svelte-1drmnne"></div>
                      <Image src={tg} alt="tg" width="30" className="pt-2" />
                    </Link>
                  </div>
                </div>{" "}
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 1001 283"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1000 21.0601C1000 25.2301 999.94 29.3901 1000 33.5601C1000.21 45.8101 995 55.8701 987.48 65.0601C978.71 75.8401 966.38 79.69 953.48 82.61C947.71 83.93 941.6 85.32 938.09 90.61C936.09 93.66 934.74 97.24 933.01 100.55C924.78 116.33 913.26 129.4 900.01 141.02C893.12 147.02 886.01 152.91 881.58 161.02C874.44 174.15 874.01 187.46 885.4 198.61C890.61 203.71 893.56 212.27 887.47 219.95C883.69 224.74 883.95 230.6 882.58 236C880.36 244.77 876.15 249.46 867.5 250.35C862.147 250.852 856.926 252.301 852.08 254.63C841.85 259.63 833.25 257.69 825.54 249.97C819.43 243.86 812.08 241.16 803.54 240.34C797.287 239.82 791.173 238.216 785.47 235.6C776.91 231.6 768.58 234.43 760.53 237.99C754.15 240.82 747.82 244.31 740.53 241.43C737.19 240.11 733.93 238.6 730.53 237.43C723.71 235.2 710.02 238.74 705.53 243.94C702.84 247.04 702.86 249.74 705.53 252.94C709.95 258.25 716.19 260.83 722.07 263.87C724.286 265.082 726.308 266.619 728.07 268.43C729.85 270.15 730.59 272.17 729.51 274.43C728.36 276.83 726.74 278.6 723.51 278.5C713.78 278.21 704.62 275.42 695.51 272.43C682.77 268.25 670.68 262.72 660.04 254.43C658.7 253.43 655.26 252.99 658.04 249.97"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_0"
                  ></path>
                  <path
                    d="M760 1.06006C748.64 13.9201 745 29.3801 743.85 46.0601C743.11 57.0601 744.42 68.0601 742.62 79.0601C740.44 92.3501 732.45 100.61 720.96 105.97C709.31 111.4 696.51 112.45 683.96 114.56C672.26 116.56 660.53 118.14 649.41 122.93C636.2 128.63 628 137.82 624.83 152.01C622.64 161.84 620.41 171.68 618.6 181.57C615.69 197.41 622.6 204.49 638.93 201.39C643.26 200.57 647.58 199.12 651.93 198.62C663.27 197.34 670.17 203.62 674.93 213.05C676.368 216.281 678.227 219.308 680.46 222.05C687.18 229.53 696.46 230.26 703.88 223.48C707.34 220.33 710.88 217.21 713.53 213.11C717.74 206.52 724.85 204.78 731.96 203.62C739.52 202.38 746.64 200.62 752.57 195.19C754.802 192.957 757.795 191.65 760.95 191.53C762.258 191.448 763.562 191.734 764.714 192.357C765.867 192.979 766.822 193.912 767.47 195.05C768.89 197.41 767.67 199.47 766.36 200.99C764.18 203.54 760.92 205.56 762.99 209.53C764.79 212.99 770.77 214.78 775.93 213.53C777.478 213.204 778.984 212.704 780.42 212.04C782.612 210.87 785.096 210.359 787.571 210.57C790.047 210.781 792.408 211.705 794.37 213.23C800.974 218.254 809.271 220.516 817.51 219.54C822.51 219.07 826.99 220.31 830.51 224.09C831.42 225.09 832.61 225.31 833.61 225.96C838.38 229.09 842.01 228.23 844.48 222.96C846.95 217.69 850.1 214.05 856.48 212.75C862.71 211.48 865.25 207.42 861.94 199.54C859.35 193.37 854.94 188.01 853.06 181.49C849.43 168.84 850.74 155.42 865.06 147.49C869.06 145.24 872.89 142.49 877.06 140.58C880.868 138.967 884.296 136.575 887.124 133.557C889.952 130.54 892.117 126.964 893.48 123.06C896.212 115.925 899.982 109.233 904.67 103.2C909.83 96.4701 912.43 88.9801 914.5 81.0701C916.03 75.1701 918.29 69.7 922.44 65.0201C926.21 60.7801 930.96 59.8901 935.98 60.7001C939.518 61.1046 943.026 61.7426 946.48 62.61C957.34 65.87 965.81 61.8001 971.3 52.9501C976.79 44.1001 981.3 34.6701 980.63 23.5601C980.439 17.8367 978.265 12.3576 974.48 8.06006C972.39 5.66006 970.16 3.38006 968 1.06006"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_1"
                  ></path>
                  <path
                    d="M804 111.55C805.63 109.55 808.52 109.98 809.94 110.3C815.06 111.44 818.94 109.03 822.94 107.04C827.78 104.68 832.53 103.82 838 105.36C841.33 106.31 845.21 106.16 848 102.59C853.3 95.7899 857.39 88.3799 859.35 80.0299C860.57 74.8199 858.84 69.6399 856.35 65.1099C853.63 60.1599 852.02 55.2199 852.43 49.5499C853.26 37.9599 849.54 37.5499 840.43 36.6999C818.32 34.5999 795.8 49.9799 789.98 73.0599C787.43 83.1699 785.3 93.3899 782.98 103.55C781.13 111.55 784.56 115.16 792.45 112.92C794.37 112.37 795.82 113.65 797.45 113.05"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_2"
                  ></path>
                  <path
                    d="M804 113.55C811.55 116.01 818.71 114.15 825.43 110.92C826.835 110.182 828.4 109.804 829.986 109.819C831.573 109.835 833.131 110.244 834.52 111.01C837.15 112.23 839.52 113.86 842.52 114.62C847.1 115.82 849.44 115.38 851.46 111.01C854.98 103.44 858.83 96.1099 864.04 89.5499C869.65 82.4999 867.61 75.2499 864.44 68.0899C863.834 66.7924 863.004 65.6112 861.99 64.5999C856.06 58.8699 856.87 51.8799 858.64 45.0799C860.9 36.4099 859.12 32.7799 851.03 31.0799C830.9 26.8199 812.88 31.2699 797.59 45.0799C789.46 52.4499 786.31 62.5399 784.59 73.0199C782.41 86.1399 779.89 99.0199 771.64 110.08C767.64 115.44 767.85 119.59 771.07 122.51C773.55 124.75 776.39 125.01 779.58 124.09C781.13 123.64 782.89 122.73 784.58 124.02"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_3"
                  ></path>
                  <path
                    d="M319.5 264.55C321.71 262.2 323.59 264.15 325.5 265.07C331.07 267.76 336.5 270.76 343.01 270.59C350.37 270.4 356.24 266.19 356.37 259.06C356.52 246.71 362.15 236.86 368.5 227.06C373.02 220.06 377.71 213.06 378.97 204.58C379.811 198.44 380.302 192.256 380.44 186.06C380.69 178.44 383.03 172.06 389.49 167.55C389.87 167.29 390.13 166.85 390.49 166.55C397.31 161.19 397.35 157.79 390.49 152.55C385.56 148.79 380.38 145.36 375.55 141.47C371.923 138.758 368.797 135.435 366.31 131.65C362.99 126.3 358.22 122.01 351.52 120.46C346.75 119.34 344.03 115.46 341.47 111.55C339.47 108.49 337.17 105.72 333.01 105.55C327.47 105.27 324.01 108.98 322.71 113.13C317.91 129.13 306.18 137.87 292.04 144.64C286.451 147.259 281.233 150.604 276.52 154.59C265.31 164.23 263.14 173.96 269.01 187.59C273.14 197.16 272.61 199.65 264.01 206.05C255.468 212.253 249.436 221.316 247.01 231.59C245.36 238.15 247.8 244.74 251.5 246.15C255.99 247.85 261.59 244.74 265.62 239.15C270.08 232.95 271.75 225.56 275.42 219.02C281.09 208.91 292.95 202.25 304.52 203.58C305.308 203.622 306.07 203.874 306.729 204.308C307.387 204.743 307.918 205.345 308.266 206.053C308.614 206.761 308.768 207.549 308.71 208.336C308.653 209.123 308.387 209.88 307.94 210.53C305.791 214.263 303.286 217.779 300.46 221.03C294.66 227.6 295.91 238.58 299.46 245.11C303.38 252.3 309.73 256.65 316.53 260.54C317.999 261.346 319.345 262.356 320.53 263.54"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_4"
                  ></path>
                  <path
                    d="M705.5 75.55C699.96 81.03 693.5 84.31 685.5 83.55C680.19 83.05 675.28 81.02 670.58 78.86C667.499 77.4612 664.273 76.4082 660.96 75.7201C658.65 75.1565 656.231 75.212 653.949 75.8809C651.667 76.5498 649.601 77.8085 647.96 79.5301C644.51 83.0801 640.96 86.53 637.48 90.05C632.48 95.11 623.37 95.8701 621.3 85.5701C618.91 73.7101 614.02 62.5701 607.98 52.0301C597.87 34.3801 571.67 31.2501 556.52 45.1001C543.63 56.8801 540.41 71.79 543.94 88.55C545.443 95.1507 547.775 101.535 550.88 107.55C556.39 118.73 564.41 125.41 577.47 125.08C582.79 124.95 584.82 128.33 582.94 133.5C580.39 140.5 576.04 146.55 572.46 153.01C570.46 156.61 568.68 160.37 565.94 163.49C563.87 165.84 561.49 167.67 557.94 166.49C554.39 165.31 553.86 162.49 553.47 159.49C552.22 150.19 548.19 143.08 538.97 139.42C533.72 137.34 529.97 133.22 526.97 128.5C520.87 119.14 512.4 113.89 500.97 114.5C490.51 115.09 485.97 110.03 485.48 98.9501C485.32 94.9501 485.43 90.9501 484.57 86.9501C483.01 79.5901 478.45 74.95 470.98 75.58C459.77 76.48 452.68 70.5201 446.45 62.4801C443.361 58.2784 439.652 54.5695 435.45 51.4801C425.72 44.6501 414.14 46.4801 403.45 53.9101C394.72 59.9801 389.87 68.9901 385.02 77.9101C380.94 85.4401 377.33 93.2301 373.45 100.91C371.863 103.851 369.626 106.392 366.91 108.34C363.86 110.65 358.38 110.11 354.91 103.43C353.35 100.38 351.6 97.4301 349.91 94.4301C345.32 86.2101 335.82 86.0701 328.91 88.4301C327.32 88.9901 325.91 90.1301 324.39 90.8701C322.87 91.6101 320.76 91.8701 319.48 90.7901C318.2 89.7101 318.33 87.7901 318.82 85.8701C319.95 81.5501 322.44 77.7001 323.34 73.3801C326.56 57.7901 324.05 43.9601 309.87 34.3801C296.75 25.5601 282.87 18.78 266.4 19.3C261.09 19.46 256.17 21.2001 251.46 23.0101C247.139 24.7671 242.488 25.5687 237.828 25.3598C233.167 25.1509 228.607 23.9366 224.46 21.8C207.6 13.49 190.84 15.2501 175.05 23.5601C158.9 32.0501 145.77 44.6101 134.98 59.3801C129.98 66.2501 130.68 73.7101 133.36 81.3801C134.91 85.8201 138.47 88.9901 139.86 93.7301C140.59 96.2401 145.25 97.9401 148.02 100.26C161.57 111.62 177.7 118.17 194.48 122.69C211.277 127.297 228.299 131.035 245.48 133.89C249.22 134.5 253.21 134.44 256.48 136.89"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_5"
                  ></path>
                  <path
                    d="M769 1.06006C756.68 10.9401 751.9 24.5901 750 39.5701C749 47.6901 749.41 55.8701 749.85 64.0601C750.37 73.8001 749.64 83.6201 745.33 92.5001C740.94 101.56 732.19 105.63 723.47 109.61C709.04 116.19 693.7 119.86 678.47 123.43C651.47 129.75 637.11 147.43 632.14 173.59C630.31 183.22 635.62 193.32 651.5 193.51C655.71 193.57 659.94 193.51 663.98 194.62C670.73 196.46 676.8 199.62 681.52 205.04C683.626 207.598 686.308 209.62 689.346 210.943C692.385 212.266 695.692 212.851 699 212.65C702.72 212.52 706.19 211.55 708.4 208.97C715.6 200.58 725.15 197.83 735.5 196.55C745.029 195.405 753.866 190.987 760.5 184.05C767.438 177.016 775.562 171.261 784.5 167.05C787.3 165.72 790.34 164.39 792.93 166.64C796.01 169.32 794.57 172.99 793.41 176.02C792.25 179.05 790.01 182.02 788.54 185.07C784.31 193.95 788.39 204.75 799.54 203.61C809.26 202.61 816.9 206.77 823.04 214.06"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_6"
                  ></path>
                  <path
                    d="M451 42.06C439.24 31.06 425.46 27.88 410 31.59C399.84 34.03 393 40.59 387.9 49.5C382.98 58.09 379.71 67.41 375.02 76.07C373.503 79.2122 371.476 82.0811 369.02 84.56C366.34 87.06 363.63 87.72 361.02 84.56C358.41 81.4 355.02 79.19 351.93 76.66C349.49 74.66 346.13 74.28 343.03 73.48C337.7 72.1 334.76 68.19 336.12 63.1C341.87 41.68 322.31 17.1 305.53 11.5C295.67 8.18997 285.53 7.81996 275.53 8.73996C259.492 10.1735 243.331 9.32851 227.53 6.22998C213.89 3.62998 200.03 2.22996 186.05 4.51996C170.05 7.15996 156.52 14.44 143.98 24.47C133.66 32.71 126.32 43.47 117.51 53.03C110.99 60.09 101.82 58.31 99.2101 49.03C94.9701 34.03 82.2101 30.21 71.0501 29.69C53.0501 28.85 37.0501 34.85 21.9501 44.4C14.5501 49.08 8.82006 55.28 2.48006 60.98C1.35006 61.98 1.97006 63.28 1.06006 64.07"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_7"
                  ></path>
                  <path
                    d="M777 1.06006C769.11 5.62006 764.49 12.4601 761.36 21.0101C756.189 35.0641 754.288 50.1115 755.8 65.0101C756.86 75.7201 756.13 85.5901 750.37 94.4501C744.98 102.74 737.18 108.71 728.52 113.58C714.29 121.58 698.57 125.74 683.46 131.44C671.68 135.88 660.7 141.28 653.55 152.07C642.07 169.37 651.21 185.64 668.55 190.51C678 193.18 687.48 192.04 697.05 190.64C707.96 189.04 719.05 188.02 730.05 189.58C738.33 190.76 745.14 187.98 751.6 183.09C758.6 177.78 763.86 170.6 771.06 165.54C783.53 156.508 798.675 151.93 814.06 152.54C817.97 152.68 819.14 154.32 818.54 158.54C818.523 159.551 818.396 160.557 818.16 161.54C817.03 164.76 816.97 167.81 820.52 170.06C824.07 172.31 827.04 171.26 830.04 169.47C834.59 166.75 836.69 162.06 838.48 157.47C843.48 144.73 852.82 137.74 866.06 135.47C874.31 134.07 878.6 129.47 879.54 120.97C879.61 119.571 880.009 118.208 880.704 116.992C881.399 115.776 882.37 114.741 883.54 113.97C894.37 107.38 898.26 96.8701 899.37 85.0601C899.7 81.4801 900.06 78.2601 902.51 75.5701C906.69 71.0101 907.09 65.1001 907.32 59.5701C907.59 53.2201 910.17 48.5701 915.58 46.2601C920.49 44.2101 925.83 42.9501 931.53 43.9501C936.307 44.8803 941.147 45.4486 946.01 45.6501C954.01 45.8501 960.94 44.04 964.95 36.55C968.8 29.34 965.8 22.7001 961.95 16.6301C958.887 11.8669 956.703 6.59361 955.5 1.06006"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_8"
                  ></path>
                  <path
                    d="M321 255.06C323.29 260.66 328.92 261.13 333.53 262.98C337.13 264.43 340.65 266.39 345.05 264.68C348.85 263.2 350.33 260.76 350.49 257.06C350.6 255.562 350.6 254.058 350.49 252.56C349.76 245.77 352.25 240.33 356.41 234.97C363.16 226.27 367.52 216.42 367.54 205.06C367.54 200.23 365.94 195.85 364 191.57C362.678 188.845 362.174 185.796 362.55 182.791C362.926 179.785 364.167 176.954 366.12 174.64C371.34 168 371.37 161.41 365.93 155.14C357.31 145.2 347.46 136.64 335.03 131.52C330.16 129.52 325.76 130.52 322.61 134.14C313.61 144.44 302.89 152.5 291.7 160.32C283.41 166.11 280.01 176.96 284.9 188.61C287.05 193.71 290.55 195.46 295.52 195.55C299.02 195.61 302.52 195.55 306.02 195.55C315.29 195.65 319.37 201.83 316.02 210.55C314.69 214.03 312.46 216.95 310.5 220.04C302.03 233.42 309.12 248.14 318.5 254.51C318.84 254.74 319.5 254.51 319.98 254.51"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_9"
                  ></path>
                  <path
                    d="M325.5 252.55C328.38 252.63 329.99 255.2 332.5 256.07C337.33 257.75 342.5 255.84 343.39 251.07C345.44 239.91 351.39 230.37 355.47 220.07C359.55 209.77 360.74 199.67 353.52 190.07C348.6 183.56 348.61 175.64 347.52 168.07C346.37 159.91 342.07 153.63 335.92 148.65C331.19 144.83 322.45 145.72 319.08 150.65C312.68 160.06 308.37 170.2 311.48 182.06C312.48 186.06 314.42 189.64 317.57 191.97C326.28 198.41 325.57 206.81 322.92 215.54C321.45 220.42 319.06 225.05 318.05 230.07C317.485 232.823 317.509 235.664 318.123 238.407C318.737 241.149 319.925 243.731 321.61 245.98C323.008 247.876 323.679 250.211 323.5 252.56"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_10"
                  ></path>
                  <path
                    d="M593.5 151.06C593.87 150.766 594.206 150.43 594.5 150.06C595.65 148.19 596.01 144.88 598.97 145.72C601.73 146.51 601.56 149.58 601.51 152.07C601.51 154.88 601.62 157.85 604.06 159.51C614.84 166.84 613.63 176.91 611.06 187.58C607.17 203.74 620.4 212.26 634.06 211.44C637.87 211.21 641.55 209.54 645.14 207.7C647.205 206.567 649.584 206.137 651.915 206.477C654.246 206.816 656.403 207.905 658.06 209.58C662.292 213.359 666.122 217.564 669.49 222.13C671.404 224.916 672.48 228.192 672.59 231.57C672.86 236.73 673.76 241.76 679.59 243.51C682.172 244.334 684.929 244.446 687.569 243.834C690.209 243.221 692.635 241.907 694.59 240.03C697.75 237.195 700.755 234.19 703.59 231.03C707.419 226.891 712.267 223.83 717.65 222.15C724.83 219.78 731.14 216.31 736.13 210.57C737.21 209.323 738.38 208.157 739.63 207.08C741.63 205.37 743.63 204.94 746.15 206.51C748.97 208.3 748.21 210.25 747.15 212.57C745.69 215.77 744.48 218.86 747.57 222.12C748.887 223.67 750.649 224.778 752.617 225.291C754.585 225.805 756.664 225.7 758.57 224.99C762.17 223.81 765.57 222.09 769.08 220.55C773.319 218.624 777.859 217.443 782.5 217.06C785.5 216.85 788.5 217.23 790.5 220.06C795.11 226.34 801.97 227.49 808.99 227.49C817.44 227.49 824.82 229.24 831.64 234.89C836.93 239.27 840.25 238.89 845.96 234.54C849.26 232.04 852.32 229.24 855.49 226.54C855.662 226.436 855.804 226.289 855.902 226.114C856.001 225.938 856.053 225.741 856.053 225.54C856.053 225.339 856.001 225.141 855.902 224.966C855.804 224.791 855.662 224.644 855.49 224.54"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_11"
                  ></path>
                  <path
                    d="M13.5 177.55C15.94 176.22 17.87 176.75 20.57 177.86C35.57 184.03 46.2 195.16 56.57 206.95C63.57 214.87 71.91 221.38 82.96 223.05C85.9532 223.479 88.9979 223.388 91.96 222.78C97.87 221.65 103.34 224.61 108.96 226.43C119.47 229.85 130.22 232.19 141.43 229.6C144.35 228.93 147.36 229.6 150.43 228.69C158.95 226.13 163.8 220.69 164.43 212.05C165.01 203.72 165.85 195.41 165.43 187.05C165.26 183.88 167.11 181.61 168.43 179.05C173.11 169.81 169.04 163.55 158.43 163.58C153.57 163.58 148.75 164.03 143.92 164.41C133.04 165.28 123.98 160.47 115.92 153.55C113.87 151.79 112.08 149.6 108.92 150.55"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_12"
                  ></path>
                  <path
                    d="M84.0002 141.06C73.4141 141.19 62.8979 139.328 53.0002 135.57C47.4702 133.39 42.5602 130.11 37.4702 127.13C33.4002 124.75 29.2302 122.45 23.9902 123.48C17.7102 124.72 13.7202 127.9 13.6002 134.06C13.3002 150.36 16.7202 165.24 30.9902 175.58C41.5602 183.24 50.3002 192.91 59.5102 202.06C67.2802 209.79 76.1702 214.06 87.5102 212.14C93.0402 211.21 98.3502 212.96 103.51 215.04C112.51 218.65 121.51 222.25 131.51 221.54C141.89 220.81 149.64 217.24 153.03 206.54C154.14 203.08 153.1 199.8 152.45 196.54C151.21 190.31 151.13 183.7 145.6 178.92C143.355 177.02 140.755 175.585 137.95 174.7C129.59 171.884 122.192 166.773 116.6 159.95C113.92 156.8 109.43 155.17 108.51 150.53"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_13"
                  ></path>
                  <path
                    d="M343 101.06C335.57 94.9301 327.09 97.4901 321.92 102.48C316.75 107.47 312.92 113.29 309.04 119.09C301.317 130.327 290.475 139.059 277.85 144.21C266.17 149.11 263.37 158.06 261.49 168.55C260.186 175.062 260.677 181.806 262.91 188.06C264.8 193.22 262.5 197.56 259.04 201.57C251.71 209.897 245.489 219.137 240.53 229.06C238.311 233.385 237.223 238.201 237.37 243.06C237.58 248.73 240.47 253.15 248.02 254.5C260.02 256.63 266.02 251.72 271.95 242.02C274.373 238.004 276.104 233.61 277.07 229.02C278.66 221.95 281.78 215.6 288.57 212.13C290.33 211.24 293.15 209.39 294.98 212.53C296.23 214.68 295.45 216.67 293.98 218.53C283.98 231.44 285.67 243.22 298.35 254.17C301.79 257.17 305.78 259.3 309.02 262.47C310.16 263.59 310.39 264.19 309.02 265.02"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_14"
                  ></path>
                  <path
                    d="M522.5 208.55C522.55 204.46 525.8 202.3 528.03 199.55C532.52 194.06 538.03 189.69 542.2 183.66C544.306 180.541 545.763 177.031 546.486 173.338C547.209 169.646 547.183 165.845 546.409 162.163C545.634 158.48 544.128 154.991 541.98 151.902C539.831 148.813 537.083 146.187 533.9 144.18C528.919 141.121 524.691 136.978 521.53 132.06C516.05 123.68 507.93 120.85 498.53 120.6C494.53 120.49 490.53 120.6 486.53 120.6C481.61 120.6 480.26 119.11 479.99 114.1C479.919 110.593 480.12 107.086 480.59 103.61C480.775 101.114 480.371 98.6096 479.412 96.2979C478.453 93.9862 476.964 91.9318 475.067 90.2998C473.169 88.6678 470.915 87.5037 468.486 86.9011C466.057 86.2985 463.52 86.2741 461.08 86.83C454.99 88.2 451.88 86.39 448.97 81.63C445.46 75.88 442.47 69.85 438.14 64.51C429.84 54.26 415.04 49.89 402.48 62.05C392.18 72.05 386.57 84.59 381.48 97.59C379.25 103.28 377.35 109.15 373.48 114.12C368.57 120.5 361.63 122.32 355.48 115.12C354.33 113.77 352.59 112.94 351.97 111.12"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_15"
                  ></path>
                  <path
                    d="M794.5 119.55C800.5 120.55 806.5 121.83 812.5 122.45C816.41 122.85 819.34 119.84 821.89 117.45C825.95 113.64 831.25 113.52 835.04 117.5C836.48 119.02 838.44 120.03 840.04 121.5C845.04 126.1 849.13 125.5 853.53 120.07C855.659 117.293 857.037 114.014 857.53 110.55C858.53 105.09 860.68 100.26 864.99 96.5499C867.13 94.6999 868.99 92.5499 870.99 90.5499C876.99 84.5499 876.05 79.0799 872.47 73.0599C870.74 70.1599 868.81 67.3899 866.99 64.5499C863.99 59.8599 863.82 54.7299 865.05 49.5499C865.87 46.0699 866.87 42.6999 866.52 39.0399C865.67 30.1399 859.52 22.5899 848.97 21.8099C831.18 20.4899 813.4 20.8899 797.92 32.4399C788.92 39.1599 784.69 48.4399 781.52 58.5499C778.52 67.9999 777.77 77.9199 775.6 87.5499C773.6 96.5499 770.45 104.73 764.01 111.55C755.92 120.13 760.38 128.81 768.49 132.03C775.49 134.79 786.58 130.23 787.99 124.03"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_16"
                  ></path>
                  <path
                    d="M945.5 1.55005C950.85 9.14005 955.88 16.8 956.56 26.55C957.06 33.64 951.74 38.3801 945.47 39.4101C941.484 40.0462 937.415 39.9342 933.47 39.08C924.47 37.15 915.47 35.7601 906.47 38.6301C898.86 41.0601 897.53 44.0701 900.84 51.6301C904.51 59.9601 905.62 67.16 897.5 74.14C893.68 77.42 892.5 82.31 892.55 87.08C892.61 94.98 889.35 100.87 882.92 105.08C877.92 108.34 874.42 112.45 873.92 118.62C873.852 120.775 873.152 122.862 871.907 124.622C870.663 126.382 868.928 127.737 866.92 128.52C859.5 131.52 852.92 135.97 845.98 139.66C840.1 142.77 834.14 143.97 827.98 141.08C817.45 136.13 807.98 140.33 798.47 144.15C786.75 148.86 775.14 153.82 763.47 158.6C759.26 160.33 756.61 163.75 754.05 167.17C753.203 168.519 751.955 169.568 750.48 170.17"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_17"
                  ></path>
                  <path
                    d="M962 1.06006C964.625 6.22538 967.792 11.0962 971.45 15.5901C974.67 19.6601 975.45 24.4201 974.53 29.5901C973.432 36.2359 971.182 42.6389 967.88 48.5101C962.74 57.3601 955.88 58.1001 947.01 56.0401C942.29 54.9401 937.68 53.3401 933.01 52.1001C925.41 50.1001 916.18 52.69 914.52 63.58C913.749 68.2865 911.871 72.7424 909.04 76.58C906.92 79.53 906.32 83.0301 905.36 86.5201C902.04 98.59 899.04 111.06 887.97 118.99C887.155 119.467 886.464 120.129 885.953 120.923C885.442 121.717 885.126 122.621 885.03 123.56C884.16 134.02 876.93 137.28 868.03 139.12C863.609 140.002 859.417 141.784 855.713 144.354C852.009 146.924 848.873 150.228 846.5 154.06C839.61 164.71 840.79 175.42 846.5 186.06C848.28 189.35 850.44 192.33 851.63 196.06C852.195 197.548 852.387 199.152 852.189 200.732C851.99 202.312 851.406 203.818 850.49 205.12C847.83 209.25 845.07 213.24 840.97 216.12C835.12 220.22 831.36 220.23 824.97 216.12"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_18"
                  ></path>
                  <path
                    d="M520 282.06C514.71 278.39 510.86 273.32 507.61 267.99C503.814 261.644 498.698 256.188 492.61 251.99C479.68 242.99 471.22 229.88 462.61 217.08C459.91 213.08 457.39 209.08 453.06 206.61C447.81 203.61 444.87 205.46 444.5 211.61C444.28 215.37 446.06 218.82 445.63 222.61C445.17 226.61 443.02 228.53 439.06 228.66C430.36 228.94 430.62 225.95 426.64 236.13C425.64 238.79 423.91 239.53 421.56 239.57C417.84 239.65 414.56 239.65 411.92 235.69C407.73 229.31 409.71 223.1 411.74 217.16C413.5 211.98 416.14 207.07 416.99 201.59C417.32 199.725 417.104 197.805 416.37 196.06C414.22 191.6 411.07 191.39 407.46 195.01C403.27 199.22 402.17 205.06 399.67 210.12C397.44 214.62 395.8 219.55 393.38 223.97C386.58 236.34 384.05 249.74 382.38 263.51C381.19 274.11 372.77 281.48 362 282.06"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_19"
                  ></path>
                  <path
                    d="M795 1.06006C785 2.19006 778.29 8.06006 773 16.0601C766.87 25.3201 765 35.8001 764 46.5701C763.11 56.3901 763 66.25 762.1 76.08C760.56 92 752.67 103.47 739.54 112.13C719.99 125.088 699.225 136.113 677.54 145.05C672.057 147.1 667.096 150.338 663.01 154.53C653.7 164.53 656.46 176.86 669.01 182.53C677.76 186.53 686.37 184.53 694.44 180.87C700.21 178.24 705.12 176.75 711.08 180.41C716.61 183.8 723.17 183.49 729.51 183.28"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_20"
                  ></path>
                  <path
                    d="M220.5 188.06C217.63 185.6 215.72 182.2 212.06 180.43C210.06 179.43 209.82 176.83 209.46 174.57C207.79 164.31 203.22 155.68 195.03 149.02C190.18 145.09 184.5 143.9 179.03 145.7C155.95 153.29 134.78 146.2 114.03 137.38C102.28 132.38 91.15 125.8 80.03 119.48C71.5 114.64 72.33 110.48 76.48 104.05C77.6545 102.505 78.6414 100.827 79.42 99.0499C80.7 95.3299 81.34 91.6899 78.55 88.0499C74.8 83.0599 72.99 77.5599 72.25 71.0599C70.14 52.3599 52.25 51.1299 39.99 58.5199C35.6432 61.0999 32.2156 64.9787 30.19 69.6099C27 77.1599 21.19 81.4899 14.45 84.9399C11.1939 86.5204 8.31088 88.7749 5.99208 91.554C3.67328 94.3331 1.97166 97.5733 1 101.06"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_21"
                  ></path>
                  <path
                    d="M831 1.06006C827.36 4.12006 822.85 4.25007 818.49 4.51007C795.84 5.87007 781.12 17.9601 774.37 39.0601C770.45 51.3501 768.6 63.9801 766.48 76.5901C763.48 94.6601 755.48 109.59 740 120.15C722.82 131.88 706 144.15 688.91 156.02C685.51 158.38 683.76 161.14 684.52 165.08C685.21 168.63 689.43 171.13 693.96 171.08C694.968 171.045 695.971 170.928 696.96 170.73C703.111 169.426 709.526 170.404 715.01 173.48C723.63 178.26 732.93 175.16 738.45 166.62C739.705 164.458 741.201 162.445 742.91 160.62C747.45 156.21 747.41 156.13 752.43 159.62C753.75 160.681 754.781 162.056 755.43 163.62"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_22"
                  ></path>
                  <path
                    d="M685 66.0601C685.26 65.3901 687.46 64.3001 685 64.1301C675.34 63.4801 665.62 61.6801 656 64.5601C650.24 66.2901 647.58 71.5601 644.12 75.6601C641.43 78.8701 638.69 81.0101 634.5 80.5201C630.31 80.0301 629.12 76.3601 628.03 73.0501C623.93 60.6101 618.33 49.0501 608.49 40.0501C591.95 24.9601 567.68 22.9301 550.09 39.6401C540.76 48.5101 537.45 60.4801 536.53 73.0401C535.53 86.3501 538.08 99.2801 541.53 112.04C542.694 115.61 544.321 119.013 546.37 122.16C547.66 124.35 548.77 127.98 545.5 129.98C542.42 131.86 539.78 129.98 538.11 127.51C534.57 122.23 531.52 116.66 525.56 113.51C518.627 109.892 510.862 108.167 503.05 108.51C496.05 108.72 492.83 105.17 492.5 98.0601C492.15 90.6801 493.77 83.4301 493.62 76.0601C493.424 71.7486 491.944 67.594 489.37 64.1301C486.14 59.4501 481.53 58.9501 474.98 61.5501C462.51 66.5001 456.53 64.5501 448.45 53.0701C443.8 46.4901 438.37 40.6801 429.97 39.0701C418.59 36.9001 408.29 38.9801 399.45 47.0101C391.34 54.3901 386.4 63.7501 381.93 73.5201C379.309 79.4654 376.146 85.1561 372.48 90.5201C366.78 98.5701 361.94 98.4201 356.48 90.0201C356.36 89.8301 356.12 89.7101 355.99 89.5201C351.92 83.2501 346.71 78.7101 338.99 77.4401C336.475 76.9709 333.883 77.1394 331.45 77.9301C328.33 78.9301 327.31 77.4601 327.45 74.0201C327.62 68.8101 330.77 64.4701 330.67 59.0201C330.36 40.5201 319.96 21.7601 297.01 16.4901C284.58 13.6401 272.01 14.1301 259.51 15.0901C245.98 16.0901 232.64 15.6201 219.51 12.0201C194.83 5.24009 173.04 11.2001 153.51 27.0201C146.26 32.8901 138.92 38.6801 133.01 46.0201"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_23"
                  ></path>
                  <path
                    d="M726.5 1.55005C721.64 7.55005 718.31 14.5501 713.61 20.6301C711.49 23.3901 711.68 26.98 713.99 30.05C716.3 33.12 718.75 36.32 720.99 39.58C721.99 41.01 722.99 42.66 722.5 44.58C720.71 51.2 722.42 57.47 724.59 63.58C727.38 71.38 723.66 77.5801 719.4 83.0001C708.55 96.7801 698.31 98.9501 681.53 95.0701C674.09 93.3501 666.75 91.1401 659.02 93.5701C656.155 94.4643 653.473 95.863 651.1 97.7001C643.21 103.85 633.57 105.54 624.5 108.5C607.37 114.06 597.37 126.39 590.56 142.06C589.43 144.66 587.13 147.28 589 150.53"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_24"
                  ></path>
                  <path
                    d="M590.5 159.06C590.5 171.26 589.98 183.5 592.5 195.56C595.61 210.39 605.78 218.41 620.99 218.62C627.787 218.662 634.544 217.584 640.99 215.43C645.36 214.03 648.71 214.52 652.06 217.52C654.35 219.52 656.68 221.63 659.06 223.46C662.88 226.35 662.71 230.13 661.35 233.51C658.48 240.63 662.73 249.72 669.49 254.06C675.77 258.11 685.78 257.18 691.49 252.06C693.8 249.98 696.1 247.74 697.4 245.06C701.87 235.64 710.14 231.82 719.49 229.66C725.08 228.36 729.87 226.04 732.93 221.07C734.29 218.86 736.18 217.63 738.45 218.22C740.72 218.81 740.52 221.1 740.45 223.1C740.33 233.7 748.66 235.82 755.45 233.1C761.08 230.84 766.24 227.47 772.45 226.54C779.52 225.48 786.07 225.81 791.99 230.54C798.99 236.14 807.74 235.76 815.99 236.4C819.983 236.66 823.8 238.144 826.92 240.65C828.401 241.836 829.951 242.935 831.56 243.94C836.92 247.21 842.65 248.87 849.01 246.15C852.332 244.627 855.865 243.616 859.49 243.15C867.62 242.35 872.56 238.2 875.01 230.55C876.68 225.33 878.75 220.24 880.4 215.01C880.77 213.85 880.14 212.37 879.98 211.01C878.98 211.42 877.42 210.01 876.98 212.01"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_25"
                  ></path>
                  <path
                    d="M894.5 199.06C897.296 205.89 897.604 213.486 895.37 220.52C889.61 239.28 879.75 255.17 860.97 263.52C847.21 269.62 833.23 267.31 821.58 257.98C813.33 251.37 804.7 246.34 794 245.63C791.532 245.596 789.125 244.861 787.06 243.51C778.25 236.85 769.67 239.16 761 243.59C757.761 245.418 754.422 247.064 751 248.52C748.126 249.693 745.027 250.211 741.927 250.038C738.828 249.865 735.806 249.005 733.08 247.52C729.7 245.67 726.34 244.24 722.53 244.14C719.03 244.04 715.85 245.29 714.65 248.65C713.58 251.65 715.65 253.65 717.94 255.65C721.52 258.91 726.09 260.13 730.12 262.39C732.215 263.592 734.2 264.977 736.05 266.53C739.17 269.06 740.53 272.53 739.36 276C738.857 277.807 737.757 279.39 736.238 280.491C734.72 281.591 732.873 282.144 731 282.06"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_26"
                  ></path>
                  <path
                    d="M279 122.06C279 119.87 280 118.86 281.88 117.4C292.78 108.83 303.04 99.3499 308.88 86.4999C314.72 73.6499 316.25 60.6599 307.58 48.0099C304.36 43.3299 300.58 40.1399 295.04 38.4699C288.31 36.4699 281.45 34.3599 276.04 29.5399C268.97 23.2599 261.91 26.2999 255.04 29.6499C250.49 31.8799 246.11 34.3799 241.04 35.0499C233.77 36.0499 227.13 33.6099 220.54 31.0499C214.82 28.8399 209.35 26.1099 203.05 25.4699C191.05 24.2599 181.12 28.3299 174.74 38.1799C169.339 46.6286 162.272 53.8867 153.97 59.5099C150.09 62.1499 147.19 65.5099 146.63 70.0699C146.16 73.9599 145.63 78.2399 149.9 81.1899C150.9 81.8999 150.66 84.3799 151 86.0499"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_27"
                  ></path>
                  <path
                    d="M441.5 191.55C440.033 189.726 438.828 187.707 437.92 185.55C437.24 183.74 435.92 181.9 433.51 182.55C431.1 183.2 430.59 185.07 430.42 187.48C430.03 192.99 432.13 197.88 433.42 203.01C434.42 207.01 434.91 211.23 432.48 215.01C430.42 218.17 425.06 219.64 422.48 218.01C419.9 216.38 418.89 212.26 421.06 208.56C423.81 203.84 425.74 199.07 425.5 193.56C425.19 186.43 421.12 182.33 415.96 180.11C411.29 178.11 406.1 180.27 402.49 185.57C397.38 193.07 394.92 201.85 391.72 210.15C387.83 220.21 383.13 229.91 379.29 239.99C377.4 245.006 376.153 250.241 375.58 255.57C374.07 268.84 368.24 275.06 355.02 278.14C340.3 281.6 327.12 277.46 314.02 271.61C304.16 267.23 295.62 260.9 287.02 254.61C282.84 251.53 278.02 250.55 274.02 255.61C272.84 257.11 271.48 258.39 270.36 260C265.54 266.94 260.88 268.06 252.5 265.1C244.05 262.269 236.72 256.823 231.57 249.55C224.35 239.2 228.65 230.23 236.03 221.62C241.47 215.28 247.28 209.25 251.03 201.62C254.382 194.756 256.23 187.256 256.45 179.62C256.75 171.08 256.16 162.53 258.45 154.1C259.68 149.49 254.88 149.46 252.53 147.62"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_28"
                  ></path>
                  <path
                    d="M980.5 1.06006C981.62 6.95006 985.08 12.0601 986.01 18.0601C988.68 35.1601 982.36 58.7501 965.01 66.5101C957.9 69.6801 950.55 71.4401 942.51 70.1601C932 68.4801 925.95 72.36 923.11 82.58C920.39 92.4 916.11 101.03 908.6 108.14C904.28 112.23 902.08 117.81 900.52 123.56C898.16 132.29 893.43 138.93 884.52 142.11C882.72 142.75 881.21 144.11 879.52 145.04C868.89 150.59 863.24 159.61 860.43 171.04C858.51 178.87 861.06 185.64 864.67 191.98C867.81 197.49 870.87 202.92 872.53 209.06"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_29"
                  ></path>
                  <path
                    d="M222 178.55C221.83 179.05 221.46 179.55 221.53 180.04C223.53 193.57 218.66 205.29 212 216.55C204.811 228.901 195.304 239.746 184 248.49C176 254.62 166.19 256.82 156.53 258.42C142.97 260.65 129.21 261.31 115.53 259.01C96.02 255.71 78.44 247.63 62.53 236.01C51.0144 227.685 40.1191 218.534 29.93 208.63C26.37 205.12 22.37 202.06 17 201.55"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_30"
                  ></path>
                  <path
                    d="M249 282.06C236.06 275.97 224.68 267.96 217.07 255.52C215.988 253.631 214.775 251.82 213.44 250.1C208.79 244.49 203.63 243.96 198.02 248.58C184.77 259.49 169.02 263.47 152.49 264.38C136.97 265.218 121.405 264.639 105.99 262.65C94.636 261.381 83.7148 257.566 74.04 251.49C56.71 240.38 39.1 229.65 23.45 216.06C21.1027 213.976 18.1315 212.728 15 212.51"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_31"
                  ></path>
                  <path
                    d="M622.5 1.54993C625.35 10.0299 631.64 14.2599 639.97 16.6399C651.73 19.9799 659.87 28.1799 666.48 38.0599C668.16 40.5799 667.82 43.1899 665.99 45.5399C663.87 48.2599 661.68 46.9599 659.49 45.5399C658.309 44.6977 656.87 44.2956 655.423 44.4034C653.977 44.5111 652.613 45.122 651.57 46.1299C650.28 47.2499 648.76 47.9599 647.43 48.9399C643.43 51.8299 639.84 50.8499 637 48.5399C630.94 43.5999 626.67 36.8999 620.53 31.9999C610.105 23.5675 597.724 17.8965 584.53 15.5099C574.21 13.6399 564.2 13.9999 554.53 18.5099C546.271 22.2797 539.272 28.3482 534.37 35.9899C527 47.2799 525.37 59.6799 526.65 72.5299C527.13 77.4799 527.85 82.2599 526.42 87.0399C525.05 91.5999 522.95 94.9199 517.56 90.9099C514.93 88.9099 512.56 89.4299 509.96 89.5999C505.88 89.8499 504.69 88.9299 504.43 85.0499C504.294 82.5095 504.633 79.9659 505.43 77.5499C511.16 58.9699 505.33 42.6399 492.94 32.5499C486.19 27.0399 479.38 26.7399 471.94 31.5499C465.39 35.7299 463.17 36.3299 455.5 31.0499C444.59 23.5399 432.41 20.8499 419.5 21.1299C396.4 21.6199 384.79 35.7999 378.5 56.1299C377.03 60.8799 374.96 65.3899 373.36 70.1299C371.76 74.8699 367.29 76.9599 363.08 74.4899C358.08 71.5799 352.68 70.5799 347.48 68.6699C343.17 67.0899 341.56 64.6699 342.48 60.6699C345.25 48.9299 342.97 38.1299 336.48 28.1799C328.71 16.3599 318.81 7.17994 305.04 2.52994C302.795 1.70322 300.431 1.24397 298.04 1.16992"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_32"
                  ></path>
                  <path
                    d="M990 1.06006C990.128 7.45855 990.922 13.8263 992.37 20.0601C998.64 47.9101 981.24 70.4101 957.45 76.0101C951.66 77.3701 945.79 78.3901 939.96 79.5301C934.13 80.6701 930.43 83.4201 928.85 89.5301C926.477 98.3632 921.688 106.359 915.02 112.62C910.81 116.74 907.02 121.43 905.02 127.08C902.02 135.63 895.45 140.84 887.89 144.42C873.21 151.42 866.34 168.42 868.98 183.06C870.19 189.79 873.37 195.56 877.24 201.21C878.71 203.36 881.62 201.32 881.96 204.06"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_33"
                  ></path>
                  <path
                    d="M72.9999 148.55C68.8299 148.22 65.1899 150.69 60.9999 150.65C57.0999 150.65 53.4199 149.31 49.4899 149.48C44.1099 149.72 38.6699 149.83 35.5499 155.08C31.9899 161.08 34.2599 167.71 37.7699 171.81C46.1899 181.62 55.1299 191.16 65.9299 198.65C68.2199 200.23 70.5999 201.24 72.9799 200.94C82.8299 199.72 91.0599 204.03 98.9799 208.67C108.65 214.37 118.83 215.56 129.54 214C137.69 212.8 140.54 208.1 138.01 200.56C135.74 193.89 131.55 188.24 127.53 182.56C119.3 170.95 110.74 159.66 97.5299 153.01C94.0099 151.24 89.6699 151.01 86.7099 149.21C82.4499 146.61 78.4899 148.3 74.4999 147.6C74.2299 147.6 73.8399 148.22 73.4999 148.6"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_34"
                  ></path>
                  <path
                    d="M235 282.06C229.66 279.45 225.42 275.27 220.5 272.06C213.5 267.49 206.3 263.52 197.5 264.58C191.34 265.32 185.15 265.98 179.03 266.79C172.68 267.63 166.29 268.13 160.03 268.36C143.72 268.96 127.34 269.14 111.03 268.36C102.38 267.93 93.41 268.94 85.03 265.6C77.26 262.51 71.03 256.9 64.03 252.6C56.78 248.13 49.5 244.54 40.52 244.45C31.76 244.36 22.93 243.13 15.02 238.63"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_35"
                  ></path>
                  <path
                    d="M208.5 200.06C205.4 206.35 203.57 213.21 199.5 219.06C189.93 232.94 176.79 241.29 160.5 245.06C139.42 249.94 118.27 251.77 97.0102 246.5C85.1902 243.58 75.0102 237.03 65.0102 230.5C55.7331 224.294 47.5488 216.593 40.7902 207.71C35.7368 201.46 29.0643 196.718 21.5002 194C19.9102 193.39 18.5002 193.84 16.9702 193.57"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_36"
                  ></path>
                  <path
                    d="M224 282.06C218 279.68 212.47 276.19 206.07 274.3C199.564 272.504 192.773 271.985 186.07 272.77C179.21 273.41 172.39 273.5 165.55 273.54C150.38 273.61 135.21 273.54 120.05 273.54C112.36 273.54 104.75 274.76 97.05 274.54C90.3285 274.437 83.6319 273.697 77.05 272.33C71.24 271.08 65.23 268.98 61.1 264.43C51.84 254.22 39.69 252.3 27.02 251.53C23.69 251.33 20.35 251.53 17.02 251.53"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_37"
                  ></path>
                  <path
                    d="M10.5 250.55C7.24637 249.882 4.17598 248.518 1.5 246.55"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_38"
                  ></path>
                  <path
                    d="M737.5 8.55005C735.44 16.76 737.17 24.9201 738.08 33.0401C738.67 38.2601 738.08 43.38 738.08 48.55C737.99 55.38 738.4 62.22 738.51 69.05C738.86 90.96 727.32 100.26 709.51 105.11C701.08 107.41 692.51 106.6 683.99 106.85C672.362 107.135 660.93 109.903 650.46 114.97C638.56 120.68 625.84 124.69 614.97 132.51C614.34 132.97 613.18 132.12 612.5 133.05"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_39"
                  ></path>
                  <path
                    d="M717 1.06006C712.5 5.64006 709.24 11.13 706.09 16.61C703.18 21.69 703.97 28.4201 707 31.5601"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_40"
                  ></path>
                  <path
                    d="M711.5 37.0601C713.227 39.2598 714.455 41.8086 715.1 44.5301C716.96 51.4701 718 58.5301 719.35 65.5901C720.84 73.3301 717.3 79.41 711.02 84.08C701.12 91.44 690.45 92.08 679.02 88.64C672.96 86.82 666.91 84.5801 660.54 84.1301C655 83.7501 649.73 84.3901 645.54 89.0001C639.19 95.9001 631.25 100 622.14 102.7C606.69 107.22 595.14 116.58 589.06 132.04C586.47 138.64 583.67 145.18 580.5 151.51C578.93 154.63 580.39 157.23 580.6 160.06"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_41"
                  ></path>
                  <path
                    d="M602 1.55002C597.22 3.21002 592.32 2.63004 587.5 2.01004C570.88 -0.12996 555.5 3.58004 541.01 11.57C531.01 17.08 520.89 22.23 509.01 21.52C500.56 21.03 492.55 18.34 484.53 15.97C466.87 10.77 448.92 7.59003 430.53 7.62003C423.162 7.76398 415.797 7.22165 408.53 6.00003C400.92 4.58003 394.17 6.95003 387.53 10.06C383.94 11.75 380.53 13.88 376.53 14.52C370.85 15.43 366.43 12.78 362.53 9.03003C359.34 5.94003 356.09 2.97003 352.02 1.03003"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_42"
                  ></path>
                  <path
                    d="M207 282.06C203.51 282.6 200.27 281.37 197 280.54C190.25 278.81 183.31 279.48 176.49 279.19C149.01 278.01 121.49 278.43 94 278.69C83 278.79 72 279.52 61 277.57C55.243 276.633 49.6831 274.74 44.55 271.97C34.97 266.63 24.72 264.97 14 265.06"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_43"
                  ></path>
                  <path
                    d="M815 103.06C822 100.94 829.24 100.19 836.5 99.5601C842.93 99.0001 847.14 95.3901 850.56 90.1001C855.81 81.9901 854.74 73.5701 852.43 65.1001C851.154 60.303 849.482 55.6202 847.43 51.1001C842.16 39.6601 832.79 38.1901 822.59 42.3001C811.37 46.8001 802.88 55.0601 799.01 67.0601C796.28 75.5401 793.54 84.0601 791.09 92.5801C790.526 94.691 790.31 96.8797 790.45 99.0601C790.76 104.9 794.88 107.59 799.97 106.42C804.79 105.31 809.53 103.89 814.5 103.56"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_44"
                  ></path>
                  <path
                    d="M131 48.06C117.48 62.06 120 75.71 127.51 89.06C135.02 102.41 146.67 111.69 159.51 119.53C161.89 120.98 164.43 122.21 166.45 124.11C168.47 126.01 169.72 128.64 168.95 131.56C168.1 134.75 165.51 135.94 162.49 136.56C152.78 138.66 143.32 136.32 134.02 134.37C122.02 131.87 110.48 127.74 99.02 123.37C96.0694 122.232 93.3313 120.606 90.92 118.56C86.09 114.45 85.28 109.66 87.46 104C89.55 98.57 90.51 93.05 87.94 87.51C86.42 84.23 88.19 81.41 89.65 79.12C91.0308 76.9125 92.6251 74.8459 94.41 72.9501C102.3 64.7501 100.6 55.16 91.04 48.4C84.28 43.61 76.6 42.28 68.95 41.68C54.79 40.56 40.86 42.36 27.95 49.02C22.9629 51.6352 18.4121 55.0087 14.46 59.02C11.31 62.15 10.15 66.25 9.45996 70.5C8.45996 76.66 6.53996 82.34 0.959961 86"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_45"
                  ></path>
                  <path
                    d="M877 260.06C871.234 265.405 864.651 269.793 857.5 273.06C848.72 276.9 840.36 276.31 831.96 271.62C825.79 268.19 820.45 263.48 813.96 260.55C808.22 257.94 802.5 255.42 795.96 255.46C793.482 255.552 791.037 254.874 788.96 253.52C780.56 247.58 771.44 248.22 762.48 251.19C756.37 253.19 750.39 255.03 743.94 254.51C741.5 254.31 739.57 255.1 738.51 257.09C737.45 259.08 738.96 261.26 740.04 262.45C746.706 269.755 755.109 275.259 764.47 278.45C768.23 279.77 771.79 281.89 775.94 282.04"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_46"
                  ></path>
                  <path
                    d="M722 22.0601C724.75 22.9601 726.57 25.0601 728.49 27.0601C729.132 27.7055 729.605 28.4997 729.867 29.3719C730.129 30.2442 730.171 31.1676 729.99 32.0601C728.36 41.9601 730.08 51.8201 731.18 61.5401C734.49 90.6001 713.39 105.43 690.05 102.17C672.39 99.71 656.93 102.23 641.9 111.4C636.749 114.598 630.997 116.705 625 117.59C620.476 118.294 616.272 120.351 612.94 123.49C610.21 125.9 608.94 128.49 609.5 132.06"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_47"
                  ></path>
                  <path
                    d="M253.5 149.06C251.74 158.31 252.23 167.81 250.5 177.06C247.58 192.52 241.36 206.27 228.99 216.53C215.94 227.35 215.92 239.99 224.99 254.07C230.88 263.22 239.29 269.31 249.05 273.47C256.66 276.71 263.99 276.4 270.6 270.15C274.49 266.47 278.92 263.08 285.01 263.51C289.65 263.84 293.06 266.76 297.01 268.51C304.86 272.06 311.11 278.38 319.45 281.18C321.273 281.633 323.134 281.914 325.01 282.02"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_48"
                  ></path>
                  <path
                    d="M933 1.06006C936.35 2.45057 939.39 4.49258 941.944 7.06754C944.499 9.64249 946.516 12.6991 947.88 16.0601C949.88 20.6701 949.96 25.7501 946.47 29.9801C942.2 35.1601 936.47 35.1501 930.47 33.9801C924.82 32.8901 919.29 31.1801 913.47 30.9801C905.82 30.7001 899.33 32.6401 894.94 39.4901C893.826 41.0693 893.112 42.8954 892.859 44.8114C892.607 46.7274 892.823 48.6761 893.49 50.4901C895.79 56.9301 896.69 62.7201 890.6 68.1501C886.96 71.4001 887.69 76.9201 887.6 81.5001C887.584 85.1854 886.696 88.8146 885.008 92.0908C883.32 95.367 880.881 98.1973 877.89 100.35C871.98 104.74 867.68 109.69 866.55 117.01C866.37 118.444 865.818 119.805 864.95 120.96C859.769 127.102 853.05 131.758 845.48 134.45C843.64 135.15 841.69 134.11 840.02 133.45C831.63 130.03 823.41 129.11 814.94 133.45C813.01 134.45 810.32 134.1 808 134.03C801.63 133.83 796 135.38 791 139.54C782.48 146.61 771.94 148.7 761.54 151.11C756.78 152.21 751.63 152.53 748.03 156.57"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_49"
                  ></path>
                  <path
                    d="M615 1.06006C616.26 5.55006 619.46 8.85006 622 12.5901C623.38 14.6501 624.47 17.2001 623 19.5101C620.94 22.6801 617.77 21.7301 615.09 20.5101C608.64 17.5601 602.28 14.51 595.62 11.92C586.404 8.32268 576.423 7.13527 566.62 8.47006C547.54 11.2401 531.95 20.6001 524.09 39.5701C523.526 40.9524 522.857 42.2896 522.09 43.5701C519.16 48.4601 515.73 48.8901 511.53 45.1001C509.313 42.9017 507.508 40.3244 506.2 37.4901C500.4 26.3901 490.73 22.4901 479.07 21.5401C472.23 21.0001 465.41 22.9401 458.57 21.5401C452.44 20.3101 446.57 17.9801 440.57 16.6201C426.51 13.4601 412.41 12.7501 398.57 18.0401C397.111 18.4705 395.587 18.6364 394.07 18.5301"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_50"
                  ></path>
                  <path
                    d="M17.5 185.55C25.22 186.49 31.44 190.55 36.93 195.62C43.71 201.82 50.1 208.45 56.48 215.07C69.48 228.58 86.01 234.87 104.01 237.44C121.82 239.98 139.68 238.44 157.51 236.62C168.69 235.46 176.78 229.4 183.99 221.54C185.28 220.14 183.89 219.94 182.99 219.54"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_51"
                  ></path>
                  <path
                    d="M1000 107.06C991.93 110.93 985.85 117.27 980.61 124.14C972.26 135.14 963.8 145.83 953.04 154.61C950.301 156.736 948.091 159.468 946.583 162.591C945.076 165.713 944.311 169.143 944.35 172.61C944.159 175.521 943.591 178.395 942.66 181.16C941.74 184.4 942.37 188.03 946.51 189.06C951.77 190.36 957.04 191.83 962.51 192.06C967.59 192.3 970.3 190.06 969.92 185.06C968.64 168.29 977.77 155.75 986.55 143.06C990.05 138.01 994.84 134.16 999.76 130.53"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_52"
                  ></path>
                  <path
                    d="M86 137.55C80.51 134.55 74 134.77 68.46 131.61C61.96 127.87 57.46 123.24 58.46 115.04C58.8175 113.054 58.8006 111.019 58.41 109.04C57.41 105.22 51.41 102.56 47.06 104.65C40.94 107.58 35.06 107.95 28.47 106.65C22.47 105.5 13 112.26 10.07 119.52C3.65997 135.42 3.06998 151.52 10.01 167.52C10.78 169.3 11.95 170.94 11.5 173.03"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_53"
                  ></path>
                  <path
                    d="M197.5 70.55C197.99 74.9 200.5 78.07 204.5 78.94C216.11 81.45 225.33 87.8 234.02 95.5C245.2 105.39 260.02 101.94 269.02 93.59C276.75 86.43 279.49 78.26 276.02 68.03C273.13 59.45 257.02 48.59 245.47 52.03C239.2 53.91 232.89 53.76 226.47 53.03C217.05 52.03 208.78 54.57 201.93 61.44C199.701 63.8314 198.163 66.783 197.48 69.98"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_54"
                  ></path>
                  <path
                    d="M519 220.55C516.59 222.18 517.52 224.08 518.49 226.05C520.95 231.05 524.49 235.37 527.49 240.05C528.979 242.219 530.025 244.66 530.569 247.234C531.113 249.808 531.144 252.464 530.66 255.05C529.66 261.05 524.57 264.71 518.03 260.46C511.49 256.21 505.85 250.68 500.03 245.46C486.43 233.46 475.15 219.46 465.13 204.39C462.27 200.1 458.13 197.67 454.51 194.48C450.08 190.59 445.39 187.01 443.51 180.99C441.74 175.46 443.05 170.85 446.51 166.41C447.51 165.18 448.69 164.22 449.57 162.96C450.94 160.96 451.16 158.74 449.51 157.03C447.86 155.32 445.51 156.57 444.16 157.58C441.36 159.71 439.23 162.71 436.07 164.46C429.92 167.86 423.75 170.18 416.53 167.08C412.61 165.39 410.69 161.84 407.58 159.47"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_55"
                  ></path>
                  <path
                    d="M478 246.06C471.78 241.27 467.48 234.98 464 228.06C463.103 226.179 462.101 224.35 461 222.58C460.405 221.728 459.56 221.082 458.582 220.733C457.603 220.383 456.54 220.348 455.54 220.63C453.36 221.08 452.98 223.13 452.49 225.05C451.3 229.74 452.69 234.39 452.6 239.05C452.542 241.469 451.991 243.851 450.98 246.05C448.6 251.41 441.7 252.5 437.49 247.05C432.71 240.91 431.73 240.8 426.58 246.05C423.28 249.42 419.81 250.05 415.52 248.53C410.52 246.81 406.01 244.59 403.02 240C401.62 237.86 399.68 236.32 397.02 236.55C394.21 236.8 393.84 239.27 392.94 241.47C390.32 247.88 391.7 254.47 391.61 261C391.52 267.91 389.3 273.56 384.02 278"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_56"
                  ></path>
                  <path
                    d="M1000 140.06C994.84 146.9 989.16 153.38 986 161.54C983.372 168.151 981.484 175.033 980.37 182.06C979.37 188.28 979.66 194.42 979.57 200.59C979.57 204.27 978.57 207.47 975.5 209.54C971.89 211.97 968.62 209.76 965.5 208.04C962.16 206.17 959.72 203.11 956.05 201.44C951.82 199.52 948.5 201.66 945.05 202.71C941.6 203.76 938.39 205.41 934.48 203.71C930.84 202.11 929.35 198.99 930.7 196.21C934.17 189.12 931.79 183.39 928.02 177.62C923.67 170.96 924.62 164.32 927.96 157.62C928.72 156.09 929.73 156.07 931.02 156.15"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_57"
                  ></path>
                  <path
                    d="M994 70.0601C984.06 81.0601 970.84 85.6601 957 88.4101C948.23 90.1401 941.86 93.0101 940.36 103.03C939.36 109.95 934.1 115.1 929.98 120.52C922.75 130.03 913.23 137.09 904.18 144.74C895.13 152.39 886.27 160.53 884.08 173.07C882.81 180.34 882.57 187.59 889.08 193.07"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_58"
                  ></path>
                  <path
                    d="M999.75 114.55C985.59 121.69 977.43 134.55 969.06 147.09C965.79 152.01 962.06 156.68 957.37 159.86C950.01 164.86 950.25 172.54 948.63 179.58C947.95 182.58 952.63 185.36 957.5 185.58C961.41 185.74 963.3 183.38 963.42 180.06C964 163.91 973.63 152.06 982.62 140.15C987.36 133.85 993.82 129.01 1000 124.06"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_59"
                  ></path>
                  <path
                    d="M96.0002 136.55C94.6502 132.08 90.2902 132.03 87.0002 130.55C82.1902 128.49 76.8202 128.18 72.0002 126C64.1802 122.46 62.2402 116.5 67.1002 109.57C68.5515 107.661 69.7826 105.595 70.7702 103.41C72.1802 99.75 72.6002 95.41 69.4702 92.02C63.6902 85.79 57.5902 79.93 52.3102 73.14C46.5602 65.75 35.9802 68.19 32.5202 77.01C30.5202 82.17 27.8602 86.59 22.5202 89.01C17.8202 91.18 14.6202 95.01 11.9502 99.43C8.4002 105.33 4.0502 110.74 0.950195 116.96"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_60"
                  ></path>
                  <path
                    d="M524.5 225.55C526.68 231.46 531.72 235.55 534.5 241.05C537.5 247.05 540.6 252.9 539.1 260.05C538.574 262.718 537.494 265.246 535.93 267.47C530.93 274.37 524.93 274.76 518.5 269.04C513.23 264.31 508.36 259.17 503.16 254.37C492.26 244.29 480.02 235.22 472.61 221.97C465.4 209.09 454.68 200.15 442.51 192.53"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_61"
                  ></path>
                  <path
                    d="M817.5 98.55C822.404 98.5813 827.287 97.9077 832 96.55C841.08 93.97 848.36 86.55 846.59 73.55C845.26 63.81 841.59 55.75 832.98 50.55C830.861 49.1986 828.361 48.5722 825.856 48.7652C823.351 48.9582 820.976 49.9601 819.09 51.62C807.81 60.8016 800.606 74.0605 799.04 88.52C798.28 94.95 800.25 100.15 809.04 99.52C811.71 99.32 814.56 100.38 817.04 98.52"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_62"
                  ></path>
                  <path
                    d="M399 175.06C392.24 179.81 388.23 185.86 387.87 194.55C387.41 205.92 382.75 216.24 377.36 225.99C372.71 234.41 370 243.33 368.04 252.57C367.04 257.5 365.94 262.57 362.89 266.47C356.74 274.35 348.21 276.6 338.5 275.07C330.515 273.73 322.87 270.835 316 266.55C313.3 264.92 311 264.49 309.5 268.06"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_63"
                  ></path>
                  <path
                    d="M417.5 158.06C423.91 157.32 430.36 157.5 436.5 154.65C454.3 146.46 468.25 134.77 473.27 115.01C474.07 111.86 474.8 107.72 471.96 104.56C470.53 102.97 472.1 100.86 470.56 98.97C467.27 94.97 463.16 93.91 458.46 94.6C447.67 96.17 444.38 94.13 440.4 83.6C439.07 80.1 438.2 76.32 436.4 73.14C430.57 63.09 419.56 61.55 410.51 65.14C402.12 68.44 396.74 75.14 392.57 82.65C385.678 95.0494 381.116 108.607 379.11 122.65C378.37 127.84 380.53 133.52 385.11 135.35C393.45 138.68 399.59 144.46 405.98 150.16C408.996 152.774 412.362 154.955 415.98 156.64"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_64"
                  ></path>
                  <path
                    d="M454.5 135.55C460.4 131.14 461.65 124.9 461.5 118.05C461.559 117.201 461.345 116.355 460.89 115.636C460.435 114.916 459.762 114.361 458.97 114.05"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_65"
                  ></path>
                  <path
                    d="M448.5 114.55C447.656 114.649 446.823 114.823 446.01 115.07C440.29 117.39 436.4 114.91 436.57 108.55C436.77 101.11 435.62 93.8101 431.85 87.6401C424.22 75.1701 412.27 72.0001 401.08 83.6401C391.57 93.5401 386.88 105.5 388.98 119.56C389.219 121.688 389.984 123.723 391.206 125.481C392.428 127.239 394.069 128.665 395.98 129.63C401.864 132.781 407.113 136.996 411.46 142.06C414.18 145.31 417.98 146.65 421.46 148.53"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_66"
                  ></path>
                  <path
                    d="M682.5 51.5501C678.93 53.0001 675.31 52.8001 671.5 52.7101C667.187 52.5799 662.898 53.4012 658.939 55.1157C654.979 56.8302 651.446 59.3958 648.59 62.6301C647.388 63.9471 646.024 65.1063 644.53 66.0801C639.47 69.4001 637.62 69.0801 633.99 64.0801C631.36 60.4901 629.89 56.2901 627.52 52.5601C618.15 37.8201 605.89 26.4601 588.52 22.7101C562.33 17.0601 539.36 29.1701 533.58 58.0801C530.733 72.7593 530.526 87.8285 532.97 102.58C533.276 103.722 533.474 104.891 533.56 106.07C533.5 107.58 533.65 109.01 532.09 110.07C530.38 111.29 528.87 110.07 528.09 109.42C521.66 104.05 514.24 101.76 506.01 101.42C504.944 101.335 503.914 100.992 503.01 100.42C500.14 98.5901 497.75 96.3001 498.01 92.4801C498.2 89.2401 496.5 87.8001 493.5 87.4801"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_67"
                  ></path>
                  <path
                    d="M281 123.06C277.17 121.59 273.75 122.21 270 123.96C251.17 132.62 233.63 129.61 217.58 117.02C211.592 112.263 204.564 108.991 197.07 107.47C180.519 104.19 165.252 96.2438 153.07 84.5701C152.432 84.0302 151.764 83.526 151.07 83.0601"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_68"
                  ></path>
                  <path
                    d="M93.5 140.55C96.92 136.33 99.28 135.7 103.5 138.55C109.36 142.61 115.23 146.6 121.5 150.12C128.19 153.9 135.08 154.78 142.57 154.64C150.57 154.49 158.57 153.79 166.57 155.38C169.889 156.006 173.305 155.883 176.57 155.02C188.27 152.02 194.44 155.67 198.1 167.5C200.079 173.284 200.595 179.468 199.6 185.5C199.479 186.831 199.479 188.169 199.6 189.5"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_69"
                  ></path>
                  <path
                    d="M914 175.06C913.83 175.23 913.68 175.51 913.49 175.54C907.87 176.54 907.64 176.65 909.03 183.05C912.699 199.46 911.089 216.61 904.43 232.05C900.94 240.31 895.36 247.47 889.36 253.95C880.53 263.49 871.79 273.33 860.02 279.61C857.77 280.81 855.69 282.25 853.02 282.08"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_70"
                  ></path>
                  <path
                    d="M657 250.55C651.79 248.2 650.19 243.9 650.48 238.55C650.57 236.89 650.48 235.22 650.48 233.55C650.48 227.46 647.48 224.28 641.48 225.73C635.088 227.347 628.436 227.66 621.92 226.65C614.01 225.46 608.92 229.85 605.43 236.55C601.57 243.95 598.81 251.85 594.56 259.12C590.155 266.818 584.957 274.034 579.05 280.65C577.62 282.22 576.39 281.88 574.94 282.05"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_71"
                  ></path>
                  <path
                    d="M934 146.55C933.438 146.083 932.731 145.828 932 145.828C931.269 145.828 930.562 146.083 930 146.55C922.54 152.95 917.4 160.17 918.78 171.02C919.78 179.31 922.22 187.46 921.56 196.02C921.303 201.397 920.634 206.746 919.56 212.02C919.08 214.02 918.4 216.85 920.94 218.47C923.15 219.87 925.71 218.94 927.35 217.87C932.59 214.44 937.76 211.17 943.9 209.41C952.85 206.84 960.51 210.11 964.47 218.47C966.61 222.97 967.47 227.82 968.85 232.47C969.51 234.68 970.21 237.08 972.44 237.29C975.01 237.54 976.61 235.29 977.44 232.94C981.37 221.4 984.84 209.7 985.44 197.45C986.17 181.7 989.58 166.92 999 153.94C999.383 153.299 999.717 152.631 1000 151.94"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_72"
                  ></path>
                  <path
                    d="M163 1.06006C154.63 3.88006 148.32 9.85006 141.47 15.0601C134.62 20.2701 129.3 26.9001 123.47 33.0601C122.547 34.1339 121.544 35.1368 120.47 36.0601C116.55 39.1701 114.56 39.2601 110.47 36.0601C102.52 29.7901 93.9502 24.9201 83.9702 22.5201C74.4602 20.2301 65.0902 20.3301 55.4202 21.3201C50.6502 21.8101 45.9602 24.8601 40.9502 22.5901"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_73"
                  ></path>
                  <path
                    d="M1000 168.06C999.59 172.28 997.35 175.94 996.41 180.06C992.07 198.99 989.41 218.26 984.55 237.06C980.97 251 977.78 265.06 974.6 279.06C974.36 280.13 973.13 280.62 973.5 281.79"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_74"
                  ></path>
                  <path
                    d="M559 191.55C560.93 194.28 557.93 196.81 559.21 200.16C562.6 209.09 567.66 213.33 577 212.54C578 212.45 579.08 211.89 580 212.11C582.32 212.7 585.57 212.11 586.41 215.11C586.725 216.338 586.719 217.627 586.394 218.853C586.068 220.078 585.433 221.2 584.55 222.11C578.81 228.64 573.55 235.58 570.04 243.59C565.89 252.98 562.61 262.66 562.58 273.08C562.58 276.65 562.99 280.34 567.02 282.08"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_75"
                  ></path>
                  <path
                    d="M148 1.06006C142.28 4.26006 138.09 9.14006 134 14.0601C130.758 17.9654 127.21 21.6069 123.39 24.9501C118.87 28.9501 111.97 28.3801 104.98 23.4901C85.9802 10.1801 65.1802 9.09005 43.4702 14.58C41.8802 14.98 39.5802 14.9101 39.4702 17.5301"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_76"
                  ></path>
                  <path
                    d="M577 61.55C567 63.66 565.28 69.63 564.48 77.05C563.84 82.95 563.64 88.7701 565.43 94.5701C566.064 97.1495 567.29 99.5461 569.01 101.57C573.93 106.82 580.58 106.36 583.91 100.04C589.04 90.3001 589.91 79.6901 587.32 69.1301C586.27 64.7401 582.32 62.1301 577.5 61.5901"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_77"
                  ></path>
                  <path
                    d="M122 103.06C119.76 98.8499 115.36 98.0099 111.46 96.6499C108.4 95.5899 104.92 98.3399 104.02 102.07C103.02 106.38 103.56 110.12 106.93 113.63C113.98 120.97 123.44 122.75 132.51 125.53C135.28 126.38 138.2 126.77 140.99 127.59C143.78 128.41 147.08 128.71 148.29 125.97C149.43 123.39 147.73 120.79 145.04 118.97C141.36 116.51 137.48 114.34 133.87 111.72C131.45 109.805 129.171 107.72 127.05 105.48C123.64 102.19 120.91 104.26 118.05 106.04"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_78"
                  ></path>
                  <path
                    d="M430.5 114.06C429.154 106.865 425.669 100.243 420.5 95.06C413.65 88.06 406.97 89.17 402.5 98.06C395.5 112.06 401.36 124.36 412.5 132C416.2 134.53 421.81 131.92 425.5 126.56C427.855 122.883 429.547 118.821 430.5 114.56"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_79"
                  ></path>
                  <path
                    d="M577.5 268.06C581.37 267.48 583.4 264.68 584.97 261.55C589.49 252.55 593.63 243.36 597.54 234.08C598.122 232.639 598.46 231.112 598.54 229.56C598.75 227.05 598.43 224.56 595.95 223.68C593.95 222.97 591.83 223.86 589.95 225.5C583.09 231.5 580.57 239.98 576.58 247.6C574.711 251.456 573.191 255.472 572.04 259.6C570.43 264.79 571.67 266.79 577.04 268.6"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_80"
                  ></path>
                  <path
                    d="M655 262.06C656.54 258.06 654.46 255.81 651 254.6C647.54 253.39 644.62 251.3 643.54 247.6C639.14 232.4 623.69 231.05 612.54 240.14C607.92 243.9 604.77 248.89 602.02 254.14C597.09 263.51 593.02 273.35 587.02 282.14"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_81"
                  ></path>
                  <path
                    d="M250 145.06C249 139.57 247.37 138.48 239.5 137.54C230.5 136.46 221.5 135.21 212.5 134.08C211.502 133.985 210.498 133.985 209.5 134.08C200.5 134.59 198.01 138.87 202.13 146.5C206.36 154.32 211.62 161.6 216.55 169.04C217.305 170.156 217.945 171.345 218.46 172.59C219.55 175.33 220.07 178.38 223.99 178.65C224.99 178.71 225.15 180.04 224.99 181.07"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_82"
                  ></path>
                  <path
                    d="M499 282.06C495.06 277.5 492.82 271.9 490.7 266.48C488.83 261.7 486.02 257.89 481.9 255.74C476.76 253.06 472.22 250.06 468.37 245.62C465.31 242.06 462.77 242.9 460.98 247.56C459.61 251.12 458.56 254.76 456.51 258.08C452.06 265.32 445.85 266.35 439.96 260.55C439.227 259.953 438.557 259.283 437.96 258.55C433.82 252.29 428.05 252.1 421.96 254.68C419.584 255.758 416.883 255.88 414.42 255.02C411.814 254.296 409.077 254.18 406.42 254.68C402.37 255.22 401.15 258.68 403.42 262.06C404.22 263.25 405.08 264.4 405.92 265.56C408.86 269.63 408.57 271.56 404.41 274.56C402.16 276.15 399.73 277.56 398.48 280.11C398.06 280.97 398.13 282.38 399.92 282.11"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_83"
                  ></path>
                  <path
                    d="M1000 77.0601C991.83 83.4301 982.08 86.3501 972.48 89.5101C964.03 92.2901 955.68 95.3001 950.09 102.63C946.93 106.75 944.84 111.68 941.96 116.03C936.84 123.77 931.35 131.22 923.96 137.03"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_84"
                  ></path>
                  <path
                    d="M548.5 201.06C551.01 208.4 556.18 213.06 562.93 216.68C570.58 220.81 571.53 225.1 567.47 233.04C562.36 243.04 557.97 253.19 556.95 264.56C556.43 270.36 555.95 276.1 557.5 281.81"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_85"
                  ></path>
                  <path
                    d="M549 282.06C547 268.99 550.5 256.9 555.48 245.06C557.13 241.12 559.19 237.38 560.07 233.06C561.36 226.78 559.31 222.5 552.98 220.61C547.38 218.94 542.08 216.95 538.53 212.02C537.28 210.29 535.65 210.59 534 210.55"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_86"
                  ></path>
                  <path
                    d="M548 1.0601C543.16 3.0601 538.32 5.0601 533.5 7.0601C512.22 16.0601 491.86 12.8101 471.99 2.5701C470.73 1.9301 469.64 0.730085 467.99 1.05009"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_87"
                  ></path>
                  <path
                    d="M640 1.06006C646 6.91006 652.72 8.58005 661 6.80005C665.262 5.7794 669.692 5.67038 674 6.48007C681.64 8.10007 684.54 12.7301 684.53 19.5601C684.53 23.5601 684.24 27.5601 684.91 31.5601C685.503 34.3662 686.597 37.0425 688.14 39.4601C689.62 42.0201 692.32 43.88 694.49 46.05C696.34 47.91 692.38 50.25 694.99 52.05"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_88"
                  ></path>
                  <path
                    d="M453 44.0601C457.47 48.0001 461.92 51.5301 468.49 51.7401C472.41 51.8701 474.85 49.7401 477.44 47.9701C485.32 42.4801 490.95 43.48 495.44 52.08C500.459 61.4102 501.691 72.3153 498.88 82.5301C498.39 84.3601 499.38 86.6101 497.48 88.0601"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_89"
                  ></path>
                  <path
                    d="M137 1.06006C132.958 3.79926 129.579 7.40718 127.11 11.6201C122.4 19.6701 116.11 20.1 107.01 16.5201C105.208 15.7661 103.523 14.7557 102.01 13.5201C90.37 4.39005 76.8 4.06006 63 4.59006C62.65 4.59006 62.33 5.22006 62 5.59006"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_90"
                  ></path>
                  <path
                    d="M232 164.55C238.52 165.43 239.45 164.89 241.5 159.05C244.57 150.28 241.24 144.34 232.5 143.05C227.85 142.36 223.17 142.6 218.5 142.54C216.25 142.54 214.21 142.81 212.99 145.05C211.64 147.53 212.99 149.56 214.56 150.99C219.84 155.94 225.18 160.87 231.5 164.55"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_91"
                  ></path>
                  <path
                    d="M630 1.06006C635.71 9.66006 644.9 10.99 654 12.58C660.4 13.7 666.87 14.8001 671.5 20.0601C674.27 23.2101 676.22 26.5101 675.08 31.0601C674.03 35.2501 675.64 39.0601 678.59 41.9601C680.976 44.0403 682.537 46.9071 682.99 50.0401C683.43 53.7101 685.93 55.3601 688.99 56.5401"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_92"
                  ></path>
                  <path
                    d="M900.5 20.55C900.5 21.05 900.7 21.69 900.5 22.03C896.5 27.74 891.92 32.61 884.5 33.53C881.59 33.89 879.72 32.64 879.5 29.53C879.35 28.0338 879.35 26.5263 879.5 25.03C880.87 14.98 877.13 9.92001 866.93 6.14001C862 4.32001 856.93 2.86003 851.93 1.03003"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_93"
                  ></path>
                  <path
                    d="M966.5 282.06C966.5 276.77 969.13 272.27 971.04 267.58C971.77 265.8 973.23 264.32 973.94 262.58C974.83 260.36 975.04 258 973 256.1C971.13 254.36 969 254.94 967 255.66C963.32 257.02 961.14 260.44 958.06 262.72C950.22 268.656 941.13 272.726 931.48 274.62C919.39 276.94 912.01 272.62 908.48 261.1C907.12 256.65 905.12 255.66 900.48 256.04C891.48 256.77 886.23 262.88 880.99 269.1"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_94"
                  ></path>
                  <path
                    d="M839 282.06C833.63 281.4 829.44 278.2 825 275.55C813.32 268.55 801.11 262.88 787.48 261.16C783.03 260.6 778.41 260.22 773.97 262.03C769.53 263.84 768.9 265.22 771.49 269.56"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_95"
                  ></path>
                  <path
                    d="M999.75 84.55C993.028 88.2177 985.895 91.0744 978.5 93.0601C968.41 95.8901 960.6 101.37 956.4 111.5C954.602 116.123 951.709 120.241 947.97 123.5C944.97 126 943.63 128.26 946.85 131.68C947.36 132.21 948.57 133.25 948.5 134.54"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_96"
                  ></path>
                  <path
                    d="M577 98.55C581.23 97.04 582.08 93.28 583 89.55C583.86 86.08 583.36 82.55 583.48 79.05C583.625 77.4832 583.199 75.9167 582.28 74.6393C581.361 73.362 580.012 72.4601 578.48 72.1C576.771 71.6777 574.966 71.8988 573.41 72.7213C571.853 73.5438 570.654 74.9102 570.04 76.56C567.905 82.0256 567.905 88.0945 570.04 93.56C571.1 96.5 573.44 98.07 576.51 98.56"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_97"
                  ></path>
                  <path
                    d="M899.5 196.06C904.82 203.32 903.97 211.06 901.5 219.06C897.08 233.59 890.26 246.69 879.5 257.55"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_98"
                  ></path>
                  <path
                    d="M329 1.06006C346.36 10.1401 355 24.5901 355.48 44.0601C355.56 47.3701 355.3 50.9101 357.57 53.4901C360.3 56.5901 365.74 55.3001 368.36 50.9801C368.898 50.074 369.318 49.1027 369.61 48.0901C372.91 36.2101 380.78 27.9301 390.99 21.5401C392.99 20.2801 394.7 18.7601 392.99 16.0601"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_99"
                  ></path>
                  <path
                    d="M1000 212.06C998.83 218.26 996.32 224.06 994.34 230.01C991.34 239.09 989.06 248.36 986.55 257.57C985.55 261.13 984.9 264.84 986 268.57"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_100"
                  ></path>
                  <path
                    d="M1000 89.0601C993.23 92.6001 985.64 94.1601 979 98.0001C974.424 100.453 970.754 104.308 968.53 109C964.66 117.39 960.44 125.58 952.99 131.45C951.5 132.62 952.43 133.86 951.99 135.01"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_101"
                  ></path>
                  <path
                    d="M922 139.06C915.8 144.53 909 149.35 904.45 156.53C897.45 167.47 895.45 179.03 898.97 191.53C899.63 193.88 900.54 196.65 896.5 197.02"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_102"
                  ></path>
                  <path
                    d="M1000 95.0601C997.73 97.1301 994.78 97.59 992 98.67C987.611 100.291 983.607 102.807 980.243 106.059C976.879 109.311 974.228 113.228 972.46 117.56C969.54 124.56 964.54 129.79 958.46 134C957.11 134.93 955.54 136.58 953.46 135.06"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_103"
                  ></path>
                  <path
                    d="M934 148.06C932.37 151.2 930.53 154.3 932 158.06"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_104"
                  ></path>
                  <path
                    d="M713 153.55C714 159.63 718.59 163.3 724.49 162.55C728.49 162.01 733 159.13 732.58 152.55C732.35 149.14 730.16 146.46 727.92 145.84C726.039 145.251 724.057 145.055 722.098 145.265C720.138 145.475 718.243 146.086 716.53 147.06C714.464 148.46 713.028 150.614 712.53 153.06"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_105"
                  ></path>
                  <path
                    d="M533 1.06006C527.31 2.47006 521.83 4.54007 516 5.70007C507.31 7.44007 499.18 6.06006 490.95 3.62006C487.95 2.74006 485.13 1.30006 481.95 1.06006"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_106"
                  ></path>
                  <path
                    d="M452 282.06H442.5"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_107"
                  ></path>
                  <path
                    d="M425 282.06H409"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_108"
                  ></path>
                  <path
                    d="M43 1.06006C37.07 1.30006 31.73 3.63006 26.52 6.06006C18.4801 9.75632 9.83021 11.9459 1 12.5201"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_109"
                  ></path>
                  <path
                    d="M53.9998 9.05999C51.0598 6.53999 47.6798 7.29998 44.5098 8.10998C29.6798 11.86 15.5098 17.44 1.50977 23.56"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_110"
                  ></path>
                  <path
                    d="M703 1.06006C698.651 4.21546 695.078 8.31906 692.55 13.0601C688.29 20.7601 688.97 28.4301 694.09 35.4601C695.73 37.7201 695.73 41.4601 699.5 42.0301"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_111"
                  ></path>
                  <path
                    d="M706 47.0601C708.54 47.3201 708.55 49.2001 708.49 51.0601C708.203 55.1617 708.888 59.2732 710.49 63.0601C712.68 67.9201 709.2 71.1501 706.55 74.5301"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_112"
                  ></path>
                  <path
                    d="M682 282.06C674.49 277.33 665.92 275.61 657.48 273.64C655.22 273.11 653 272.22 650.48 272.48C647.48 272.81 644.22 272.28 643.4 276.54C643.27 277.23 641.87 277.13 640.99 277.06"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_113"
                  ></path>
                  <path
                    d="M826 282.06C822.38 282.4 820.33 279.37 817.54 277.97C813.46 275.9 809.54 273.45 804.99 272.6C803.84 272.39 802.65 271.5 801.52 272.1C800.01 272.9 797.52 272.74 797.15 274.59C796.87 276.15 797.99 278.59 799.53 278.89C801.69 279.36 802.01 281.79 804 282.06"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_114"
                  ></path>
                  <path
                    d="M959 282.06C961.44 279.7 961.83 276.65 961.44 273.57C961.01 270.13 957.88 268.76 955.01 270.57C954.267 271.156 953.596 271.827 953.01 272.57C947.66 278.13 940.66 279.35 933.51 279.46C928.879 279.424 924.287 280.308 920 282.06"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_115"
                  ></path>
                  <path
                    d="M939.5 135.06C938.78 134.36 937.74 133.06 937.06 133.63C928.19 141.4 917.4 147.35 911.64 158.13C908.934 163.336 907.84 169.23 908.5 175.06"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_116"
                  ></path>
                  <path
                    d="M658 263.06C655.36 262.37 653.34 262.22 651.75 265.44C651.14 266.67 648.37 267.35 645.45 266.91C638.61 265.91 631.61 263.12 624.45 266.91C618.05 270.31 614.17 275.38 611.52 281.78"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_117"
                  ></path>
                  <path
                    d="M32 20.0601C28 18.5601 25.49 21.8301 22.56 23.2001C15.0871 26.6091 7.8802 30.5735 1 35.0601"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_118"
                  ></path>
                  <path
                    d="M451 126.06C446.5 123.79 443.41 123.91 441.6 127.12C440.32 129.38 439.32 132.03 441.93 134.63C443.78 136.47 445.31 137.54 448.02 136.63C451.02 135.63 453.43 133.96 452.39 130.63C451.09 126.46 452.86 124.12 456 122.1"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_119"
                  ></path>
                  <path
                    d="M129 1.06006C127.5 2.06006 125.93 2.97006 124.51 4.06006C118.97 8.34006 113.04 8.38005 107.02 5.49005C103.72 3.91005 100.73 1.66005 97.02 1.05005"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_120"
                  ></path>
                  <path
                    d="M580.5 165.55C583.39 172.06 577.88 174.91 574.36 177.89C570.22 181.41 565.88 184.7 561.98 188.53C560.77 189.73 559.98 192.18 557.51 190.53C555.27 189 552.73 187.53 554 184.05"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_121"
                  ></path>
                  <path
                    d="M1000 249.06C993.92 254.35 989.52 260.31 991.45 269.06C991.91 271.14 990.65 272.2 988.45 272.06"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_122"
                  ></path>
                  <path
                    d="M875 1.06006C880.29 4.28006 882.76 9.45006 884.48 15.0601C886.48 21.4701 888.87 22.4801 893.39 17.9401C895.31 16.0001 897.57 16.55 899.5 15.55"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_123"
                  ></path>
                  <path
                    d="M18 274.55C22.71 277.08 28 277.85 33 279.55C34.82 280.15 36.73 280.42 38 282.08"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_124"
                  ></path>
                  <path
                    d="M695.5 49.0601C698.96 50.9501 699.5 53.3201 696.98 56.5401C694.46 59.7601 690.82 61.9201 686.98 63.5401"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_125"
                  ></path>
                  <path
                    d="M27.5002 40.06C26.6602 39.23 25.7802 38.43 25.0102 37.55C23.5002 35.84 21.2302 35.21 19.3802 34.3C17.9502 33.6 16.5702 36.53 14.9702 37.52C9.56021 40.89 4.47021 44.52 0.970215 50.06"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_126"
                  ></path>
                  <path
                    d="M408.5 156.06C407.88 157.77 407.55 159.27 405.02 159.71C401.61 160.31 400.38 163.47 401.12 166.53C401.86 169.59 400.73 171.71 399.5 174.06"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_127"
                  ></path>
                  <path
                    d="M453 134.55C453.1 135.33 455 135.21 454 136.55C450.17 141.64 444.35 143.75 439 146.55C438.17 146.98 437.55 146.37 437 145.55C435.77 143.88 437.62 144.48 438 144.03"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_128"
                  ></path>
                  <path
                    d="M292 275.55C287.91 269.69 282.57 269.44 277.47 274.01C274.84 276.36 273.96 280.01 271 282.01"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_129"
                  ></path>
                  <path
                    d="M1 219.06C3.46 221.77 4.08 226.19 8.5 227.06"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_130"
                  ></path>
                  <path
                    d="M575 164.06C571.52 165.72 570.52 169.55 568 172.06"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_131"
                  ></path>
                  <path
                    d="M521 210.55C516.91 212.64 515.62 216.71 517.5 221.55"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_132"
                  ></path>
                  <path
                    d="M534 213.06C532.29 207.06 531.52 206.67 524 208.56"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_133"
                  ></path>
                  <path
                    d="M870.5 216.55C868.24 215.9 867.5 213.21 867.28 212C866.74 209.08 864.73 209.26 863 208.55"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_134"
                  ></path>
                  <path
                    d="M73.5 149.06C77.5 151.22 78.79 156.84 84 157.56"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_135"
                  ></path>
                  <path
                    d="M210.5 191.06C208.17 194.63 208.93 198.34 210 202.06"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_136"
                  ></path>
                  <path
                    d="M734.5 8.55005C729.79 12.24 725.13 15.95 724.5 22.55"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_137"
                  ></path>
                  <path
                    d="M984.5 271.55C982.78 274.85 982.66 278.45 982.5 282.05"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_138"
                  ></path>
                  <path
                    d="M643.25 274.55C636.62 273.91 632.75 278.88 628 282.05"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_139"
                  ></path>
                  <path
                    d="M991.5 272.06C993.65 275.06 993.68 278.78 995 282.06"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_140"
                  ></path>
                  <path
                    d="M30.4998 32.06C29.2998 30.65 27.9198 29.06 26.0498 30.62C24.1798 32.18 21.4698 31.98 20.0498 34.06"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_141"
                  ></path>
                  <path
                    d="M201 190.55C199.28 188.67 198.65 190.55 198.58 191.55C198.38 194.55 196.27 196.99 196.49 200.05C196.69 202.92 192.19 202.81 192.75 206.59C193.14 209.27 190.48 211.96 188.97 214.53C187.991 216.451 186.63 218.153 184.97 219.53"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_142"
                  ></path>
                  <path
                    d="M62 8.05999C59.91 4.44999 57 5.25999 54 6.55999"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_143"
                  ></path>
                  <path
                    d="M749 166.06C751.4 171.18 750.13 175.45 746 179.06"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_144"
                  ></path>
                  <path
                    d="M553 186.55C549.67 188.85 548.76 192.29 548.49 196.05C548.34 198.2 549.49 201.18 545.49 201.05C545.65 202.05 545.82 203.05 545.99 204.05"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_145"
                  ></path>
                  <path
                    d="M211.5 181.06C209.83 184.87 209.61 188.47 213 191.56"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_146"
                  ></path>
                  <path
                    d="M522.5 216.55C521.1 219.43 522.61 221.99 523.57 224.55C524 225.7 525.16 225.86 526 224.55"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_147"
                  ></path>
                  <path
                    d="M437 146.55C434.43 147.66 432 149.55 429 147.55"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_148"
                  ></path>
                  <path
                    d="M251.5 146.3C247.79 145.14 246.16 148.13 244 150.05"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_149"
                  ></path>
                  <path
                    d="M879.5 203.55C879.83 205.72 881.96 207.61 880.5 210.05"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_150"
                  ></path>
                  <path
                    d="M944 128.06C941.66 129.52 940 131.72 938 133.56"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_151"
                  ></path>
                  <path
                    d="M872.5 211.06C871.5 215.06 870.91 219.06 866.5 221.13C864.87 221.89 864.4 221.39 863.97 220.06"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_152"
                  ></path>
                  <path
                    d="M13 256.55C10.64 257.48 9.21 254.7 7 255.05"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_153"
                  ></path>
                  <path
                    d="M202 191.06L206 197.06"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_154"
                  ></path>
                  <path
                    d="M428 145.06C427.53 149.46 422.95 147.46 421 149.48C421.19 152.05 423.5 152.1 425 153.06"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_155"
                  ></path>
                  <path
                    d="M743.5 181.55C740.95 183.48 737.89 184.33 735 185.55"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_156"
                  ></path>
                  <path
                    d="M260 144.55C258.94 146.23 260.15 148.55 258.5 150.05"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_157"
                  ></path>
                  <path
                    d="M41.5 9.55005C42.02 12.35 45.57 10.82 46.5 13.05"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_158"
                  ></path>
                  <path
                    d="M287 278.55C290 278.44 291.65 273.72 295.59 276.41C296.59 277.12 298.07 277.01 299.12 278.46C300.17 279.91 301.37 282.2 304 282.06"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_159"
                  ></path>
                  <path
                    d="M257.5 135.06C256.89 139.99 258.41 142.62 263 144.56"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_160"
                  ></path>
                  <path
                    d="M864 222.55C862.73 224.22 860 223.55 859 225.55"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_161"
                  ></path>
                  <path
                    d="M368 36.0601C368.51 38.1601 371 37.6201 372 39.0601"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_162"
                  ></path>
                  <path
                    d="M910 167.06C912.44 166.06 915 166.78 917.5 166.56"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_163"
                  ></path>
                  <path
                    d="M791.5 124.55C792.29 126.43 793.95 127.43 795.5 128.55"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_164"
                  ></path>
                  <path
                    d="M486.5 90.55C487.8 91.19 489.5 91.23 490 93.05"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_165"
                  ></path>
                  <path
                    d="M28 27.0601C30.31 27.4501 29.41 29.2201 29.5 30.5601"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_166"
                  ></path>
                  <path
                    d="M890.5 21.0601C891.89 22.5201 892.68 24.6501 895 25.0601"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_167"
                  ></path>
                  <path
                    d="M48 16.0601C51.06 16.6101 48.64 19.9001 50.5 21.0601"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_168"
                  ></path>
                  <path
                    d="M923 159.06C922.899 159.421 922.87 159.799 922.916 160.171C922.962 160.543 923.082 160.903 923.268 161.229C923.454 161.554 923.703 161.84 924 162.068C924.298 162.297 924.638 162.464 925 162.56"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_169"
                  ></path>
                  <path
                    d="M557 13.0599C557.86 12.9612 558.731 13.0946 559.523 13.4463C560.314 13.798 560.997 14.3552 561.5 15.0599"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_170"
                  ></path>
                  <path
                    d="M588.5 156.06L586.5 156.31"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_171"
                  ></path>
                  <path
                    d="M590.5 153.06L592.5 152.81"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_172"
                  ></path>
                  <path
                    d="M893 197.06C894.16 200.59 895.33 196.8 896.5 197.06"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_173"
                  ></path>
                  <path
                    d="M920.5 6.55005C915.5 11.06 915.03 14.18 917.43 19.08C920.12 24.62 928.8 26.8701 931.98 25.9901C935.73 24.9901 937.45 19.77 934.91 16.11C931.56 11.28 927.55 6.93005 921 6.55005"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_174"
                  ></path>
                  <path
                    d="M840 6.0601C839 6.3901 837.7 6.4301 837 7.0601C831 13.1801 822.93 13.5101 815.44 14.3401C798.31 16.2301 788.65 26.8201 781.44 41.0101C775.19 53.3001 772.36 66.6001 770.61 80.0101C769.02 92.2501 763.61 102.42 756.44 112.01C753.14 116.41 749.37 120.51 746.98 125.53C743.39 133.06 745.53 139.36 753.98 142.03C761.04 144.27 768.33 143.74 775.48 143.33C778.86 143.13 781.82 140.33 784.48 137.98C787.14 135.63 789.77 133.91 792.48 131.92C797.48 128.19 802.72 127.02 808.54 129.07C811.2 130 813.07 129.26 815.08 127.55C821.97 121.7 829.54 121.28 837.56 125.01C847.03 129.43 851.95 128.44 857.99 120.47C859.86 118.01 861.72 115.2 861.99 112.01C862.65 104.39 866.89 99.3901 872.99 95.4701C874.55 94.4701 875.69 92.8501 876.99 91.5201C884.57 83.9401 884.82 83.8301 880.35 74.0801C878.8 70.7101 880.22 68.1801 881.14 65.5701C881.87 63.5001 882.85 61.8401 882.06 59.5001C881.34 57.3401 880.2 56.3801 877.99 56.5001C872.68 56.8301 871.99 56.0301 872.99 50.5001C873.99 44.5001 874.99 38.5701 874.48 32.5001C873.84 25.2101 871.96 17.7501 864.89 14.7601C856.99 11.4101 849.77 5.65011 840.5 6.00011"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_175"
                  ></path>
                  <path
                    d="M948.5 237.55C943.83 240.3 943.39 244.84 943.5 249.55C943.57 252.04 944.5 253.45 947.5 252.6C950.5 251.75 955.14 246.96 955.5 244.05C956.07 239.24 954.44 237.61 949 237.55"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_176"
                  ></path>
                  <path
                    d="M496.5 126.55C492.01 128.26 487.29 128.85 482.91 131.39C468.27 139.9 460.09 152.98 455.7 168.61C454.27 173.7 454.51 179.9 460.53 182.99C468.03 186.85 470.62 194.1 473.44 201.07C480.32 218.13 490.85 232.07 506.44 242.07C509.32 243.91 512.31 244.56 514.89 242.45C517.89 239.98 516.67 236.63 515.47 233.54C513.97 229.63 510.97 226.54 510.38 222.05C509.25 213.48 512.15 206.19 517.02 199.58C521.09 194.05 525.85 189.03 529.91 183.5C533.97 177.97 536.76 171.84 536.58 164.5C536.45 158.93 534.58 154.28 530.37 151.12C526.307 147.956 522.908 144.021 520.37 139.54C515.12 130.82 506.87 127.04 496.94 126.54"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_177"
                  ></path>
                  <path
                    d="M343 224.06C337.71 226.73 332.56 229.58 328.47 234.06C327.386 235.258 326.648 236.728 326.332 238.313C326.017 239.898 326.137 241.538 326.68 243.06C328.13 247.49 334.68 248.06 337.41 244.06C340.567 239.252 343.403 234.241 345.9 229.06C346.9 227.06 348.11 223.89 343.5 224.11"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_178"
                  ></path>
                  <path
                    d="M247 70.0601C242.21 72.8701 241.17 75.4101 243.56 80.0601C245.19 83.2201 246.94 86.2901 250.44 88.1901C255.01 90.6601 259.59 90.7701 262.5 87.5901C265.25 84.5901 265.15 80.1401 261.42 76.1601C257.69 72.1801 253.23 69.6001 247.5 70.0901"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_179"
                  ></path>
                  <path
                    d="M823.5 63.55C815.84 67.34 812.99 74.05 812.5 82.05C812.3 85.59 814.39 87.5401 817.95 87.5301C825.71 87.5301 833.41 75.2701 830.64 68.9701C829.14 65.5601 827.41 63.85 823.95 63.55"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_180"
                  ></path>
                  <path
                    d="M824 56.0599C813.87 57.7899 803.41 77.7099 805 88.0599C805.71 92.6999 808.13 94.8599 813 94.5099C821.76 93.8699 830.76 92.7599 835.38 83.9899C839.58 75.9899 838.55 62.0899 830.05 57.4799C828.359 56.5299 826.449 56.0403 824.51 56.0599"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_181"
                  ></path>
                  <path
                    d="M574.5 54.55C566.5 56.55 561.55 61.76 559.56 69.55C557.93 75.92 556.65 82.21 558.28 89.08C559.76 95.3 560.44 101.51 564.96 106.56C569.84 112.03 576.86 113.95 584.43 107.94C591.62 102.22 595.19 94.2601 595.43 85.0301C595.58 80.0301 595.96 75.0301 594.55 70.0301C591.38 58.6701 586.44 54.55 574.97 54.55"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_182"
                  ></path>
                  <path
                    d="M804.5 181.55C800.84 183.47 798.3 186.25 798.02 190.55C797.74 194.85 801.63 197.95 806.02 197.09C808.02 196.69 810.02 195.92 812.02 195.45C818.74 193.88 819.23 193.95 822.55 200.05C824.83 204.25 827.55 207.64 833.05 207.59C840.05 207.53 844.05 203.36 842.46 196.59C840.97 190.02 836.83 182.46 827.06 183.64C819.5 184.56 812.46 181.41 805.06 181.57"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_183"
                  ></path>
                  <path
                    d="M87.5 177.55C83.16 178.22 78.84 178.94 74.5 179.55C71.03 180.02 68.26 181.27 67.5 185.07C66.67 189.26 69.12 191.42 72.5 193.07C75.05 194.35 77.76 194.35 80.5 194.6C87.5 195.23 93.72 198.16 99.5 202.05C103.51 204.939 107.881 207.292 112.5 209.05C119.17 211.34 125.4 209.84 127.99 205.58C129.63 202.87 127.66 194.85 124.49 191.08C116.49 181.6 105.88 178.17 93.99 177.59C91.99 177.5 89.99 177.59 87.99 177.59"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_184"
                  ></path>
                  <path
                    d="M573.5 43.55C558.25 47.74 553.17 59.61 550.44 73.55C548.32 84.35 550.31 94.37 555.01 104.05C557.801 109.982 562.576 114.754 568.51 117.54C577.04 121.59 584.28 119.26 590.45 114C604.03 102.42 610.68 77.71 600.87 59.13C595.38 48.74 586.66 42.34 574 43.56"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_185"
                  ></path>
                  <path
                    d="M495 139.06C484.44 142.93 477.94 154.48 478.39 167.06C478.71 176.06 481.82 184.26 484.62 192.52C487.06 199.75 491.84 200.34 497.53 195.1C502.02 190.97 504.07 185.61 505.41 180.04C507.74 170.37 510.11 160.66 507.55 150.55C505.9 144.06 502.37 139.84 495.5 139.06"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_186"
                  ></path>
                  <path
                    d="M196.5 42.55C191.71 44.04 186.5 44.64 183.5 49.55C179.71 55.55 181.17 61.83 183.2 67.55C187.33 79.07 194.34 88.01 207 91.75C216.2 94.47 224.08 100.11 231.52 106.13C243.13 115.51 257.59 114.18 268.6 106.19C279.88 98.01 289.28 88.48 295.06 75.62C298.3 68.43 296.77 62.96 290.59 58.05C284.95 53.57 278.4 50.66 272.51 46.65C264.89 41.47 256.24 41.23 248.1 44.28C236.1 48.78 224.41 48 212.54 44.59C207.516 43.0886 202.281 42.4131 197.04 42.59"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_187"
                  ></path>
                  <path
                    d="M192.5 33.55C184.5 35.46 178.03 39.61 175.08 47.55C172.513 54.1433 168.569 60.1129 163.51 65.06C159.18 69.51 159.24 75.79 163.51 80.54C172.59 90.65 183.82 96.1 197.51 96.54C205.44 96.82 211.88 100.61 217.51 105.99C220.51 108.84 223.15 111.99 226.51 114.52C239.4 124.24 253.17 124.52 266.98 117.4C285.37 108.06 298.49 93.6 304.37 73.52C308.11 60.79 304.29 53.98 294.86 48.74C287.92 44.88 280.86 41.58 274.3 36.74C267.74 31.9 259.86 34.06 252.5 36.06C248.8 37.06 244.85 37.81 241.57 39.66C235.98 42.82 230.57 41.66 225.57 39.4C215.376 34.761 204.182 32.7465 193.01 33.54"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_188"
                  ></path>
                  <path
                    d="M945 225.06C932.39 226.42 925.57 234.43 921.5 245.56C920.29 248.88 918.93 252.17 918.05 255.56C917.696 256.714 917.603 257.932 917.778 259.127C917.953 260.321 918.391 261.462 919.061 262.466C919.731 263.47 920.616 264.313 921.652 264.932C922.688 265.552 923.848 265.934 925.05 266.05C936.28 267.54 951.72 260.17 957.05 250.53C963.05 239.71 957.4 229.6 951.15 226.41C949.23 225.41 947.21 226.28 945.58 225.05"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_189"
                  ></path>
                  <path
                    d="M491.5 134.55C482.5 136.26 477.27 142.29 473.5 150.05C471.41 154.34 468.87 158.46 467.57 163.05C466.34 167.4 466.05 172.49 468.69 175.88C474.35 183.15 476.29 191.68 479.03 200.02C480.036 203.575 482.135 206.724 485.03 209.02C492.6 214.7 500.7 209.24 502.98 203.49C503.98 200.95 504.14 198.09 505.09 195.49C506.7 191.13 509.02 187.9 514.52 187.31C522.2 186.49 526.37 181.77 527.52 173.96C528.67 166.15 529.1 158.7 519.62 154.79C515.96 153.28 513.52 149.11 512.2 145.41C509.04 136.5 502.72 133.76 494.05 134.41C493.38 134.47 492.71 134.41 492.05 134.41"
                    stroke="white"
                    strokeWidth="0.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="NOgkEzwz_190"
                  ></path>
                </svg>{" "}
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 1337 639"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.7" style={{ mixBlendMode: "hard-light" }}>
                    <g opacity="0.2" style={{ mixBlendMode: "hard-light" }}>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1328.94 4.55425L1.78418 4.55417V3.77112L1328.94 3.7712V4.55425Z"
                        stroke="white"
                        className="BzvYeTuu_0"
                      ></path>
                    </g>
                    <g opacity="0.2" style={{ mixBlendMode: "hard-light" }}>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1328.94 67.988H1.78418V67.2048H1328.94V67.988Z"
                        stroke="white"
                        className="BzvYeTuu_1"
                      ></path>
                    </g>
                    <g opacity="0.2" style={{ mixBlendMode: "hard-light" }}>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1328.94 130.639H1.78418H1328.94Z"
                        stroke="white"
                        className="BzvYeTuu_2"
                      ></path>
                    </g>
                    <g opacity="0.2" style={{ mixBlendMode: "hard-light" }}>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1328.94 194.072H1.78418V193.289H1328.94V194.072Z"
                        stroke="white"
                        className="BzvYeTuu_3"
                      ></path>
                    </g>
                    <g opacity="0.2" style={{ mixBlendMode: "hard-light" }}>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1328.94 256.724L1.78418 256.723L1328.94 256.724Z"
                        stroke="white"
                        className="BzvYeTuu_4"
                      ></path>
                    </g>
                    <g opacity="0.2" style={{ mixBlendMode: "hard-light" }}>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1328.94 320.157L1.78418 320.157V319.374H1328.94V320.157Z"
                        stroke="white"
                        className="BzvYeTuu_5"
                      ></path>
                    </g>
                    <g opacity="0.2" style={{ mixBlendMode: "hard-light" }}>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1328.94 382.808H1.78418H1328.94Z"
                        stroke="white"
                        className="BzvYeTuu_6"
                      ></path>
                    </g>
                    <g opacity="0.2" style={{ mixBlendMode: "hard-light" }}>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1328.94 446.242H1.78418V445.459H1328.94V446.242Z"
                        stroke="white"
                        className="BzvYeTuu_7"
                      ></path>
                    </g>
                    <g opacity="0.2" style={{ mixBlendMode: "hard-light" }}>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1328.94 509.675H1.78418V508.892H1328.94V509.675Z"
                        stroke="white"
                        className="BzvYeTuu_8"
                      ></path>
                    </g>
                    <g opacity="0.2" style={{ mixBlendMode: "hard-light" }}>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1328.94 573.109H1.78418V572.326H1328.94V573.109Z"
                        stroke="white"
                        className="BzvYeTuu_9"
                      ></path>
                    </g>
                    <g opacity="0.2" style={{ mixBlendMode: "hard-light" }}>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1328.94 636.543H1.78418V635.76H1328.94V636.543Z"
                        stroke="white"
                        className="BzvYeTuu_10"
                      ></path>
                    </g>
                    <g opacity="0.2" style={{ mixBlendMode: "hard-light" }}>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.78418 636.542L1.78433 4.5542H2.56854L2.56839 636.542H1.78418Z"
                        stroke="white"
                        strokeWidth="2"
                        className="BzvYeTuu_11"
                      ></path>
                    </g>
                    <g opacity="0.2" style={{ mixBlendMode: "hard-light" }}>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M65.3184 636.542L65.3185 4.5542H66.1027L66.1026 636.542H65.3184Z"
                        stroke="white"
                        strokeWidth="2"
                        className="BzvYeTuu_12"
                      ></path>
                    </g>
                    <g opacity="0.2" style={{ mixBlendMode: "hard-light" }}>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M128.853 636.542V4.5542V636.542Z"
                        stroke="white"
                        strokeWidth="2"
                        className="BzvYeTuu_13"
                      ></path>
                    </g>
                    <g opacity="0.2" style={{ mixBlendMode: "hard-light" }}>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M191.602 636.542L191.603 4.5542H192.386V636.542H191.602Z"
                        stroke="white"
                        strokeWidth="2"
                        className="BzvYeTuu_14"
                      ></path>
                    </g>
                    <g opacity="0.2" style={{ mixBlendMode: "hard-light" }}>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M255.136 636.542L255.137 4.5542H255.921V636.542H255.136Z"
                        stroke="white"
                        strokeWidth="2"
                        className="BzvYeTuu_15"
                      ></path>
                    </g>
                    <g opacity="0.2" style={{ mixBlendMode: "hard-light" }}>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M318.67 636.542L318.671 4.5542H319.455V636.542H318.67Z"
                        stroke="white"
                        strokeWidth="2"
                        className="BzvYeTuu_16"
                      ></path>
                    </g>
                    <g opacity="0.2" style={{ mixBlendMode: "hard-light" }}>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M382.205 636.542L382.205 4.5542H382.205V636.542Z"
                        stroke="white"
                        strokeWidth="2"
                        className="BzvYeTuu_17"
                      ></path>
                    </g>
                    <g opacity="0.2" style={{ mixBlendMode: "hard-light" }}>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M444.955 636.542V4.5542H445.739V636.542H444.955Z"
                        stroke="white"
                        strokeWidth="2"
                        className="BzvYeTuu_18"
                      ></path>
                    </g>
                    <g opacity="0.2" style={{ mixBlendMode: "hard-light" }}>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M508.489 636.542V4.5542H509.273V636.542H508.489Z"
                        stroke="white"
                        strokeWidth="2"
                        className="BzvYeTuu_19"
                      ></path>
                    </g>
                    <g opacity="0.2" style={{ mixBlendMode: "hard-light" }}>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M572.023 636.542V4.5542H572.807V636.542H572.023Z"
                        stroke="white"
                        strokeWidth="2"
                        className="BzvYeTuu_20"
                      ></path>
                    </g>
                    <g opacity="0.2" style={{ mixBlendMode: "hard-light" }}>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M635.557 636.542V4.5542H636.341V636.542H635.557Z"
                        stroke="white"
                        strokeWidth="2"
                        className="BzvYeTuu_21"
                      ></path>
                    </g>
                    <g opacity="0.2" style={{ mixBlendMode: "hard-light" }}>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M699.091 636.542V4.5542V636.542Z"
                        stroke="white"
                        strokeWidth="2"
                        className="BzvYeTuu_22"
                      ></path>
                    </g>
                    <g opacity="0.2" style={{ mixBlendMode: "hard-light" }}>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M761.841 636.542V4.5542H762.625V636.542H761.841Z"
                        stroke="white"
                        strokeWidth="2"
                        className="BzvYeTuu_23"
                      ></path>
                    </g>
                    <g opacity="0.2" style={{ mixBlendMode: "hard-light" }}>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M825.374 636.542V4.5542H826.158V636.542H825.374Z"
                        stroke="white"
                        strokeWidth="2"
                        className="BzvYeTuu_24"
                      ></path>
                    </g>
                    <g opacity="0.2" style={{ mixBlendMode: "hard-light" }}>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M888.908 636.542V4.5542H889.693V636.542H888.908Z"
                        stroke="white"
                        strokeWidth="2"
                        className="BzvYeTuu_25"
                      ></path>
                    </g>
                    <g opacity="0.2" style={{ mixBlendMode: "hard-light" }}>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M952.442 636.542V4.5542V636.542Z"
                        stroke="white"
                        strokeWidth="2"
                        className="BzvYeTuu_26"
                      ></path>
                    </g>
                    <g opacity="0.2" style={{ mixBlendMode: "hard-light" }}>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1015.19 636.542V4.5542H1015.98V636.542H1015.19Z"
                        stroke="white"
                        strokeWidth="2"
                        className="BzvYeTuu_27"
                      ></path>
                    </g>
                    <g opacity="0.2" style={{ mixBlendMode: "hard-light" }}>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1078.73 636.542V4.5542H1079.51V636.542H1078.73Z"
                        stroke="white"
                        strokeWidth="2"
                        className="BzvYeTuu_28"
                      ></path>
                    </g>
                    <g opacity="0.2" style={{ mixBlendMode: "hard-light" }}>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1142.26 636.542V4.5542H1143.04V636.542H1142.26Z"
                        stroke="white"
                        strokeWidth="2"
                        className="BzvYeTuu_29"
                      ></path>
                    </g>
                    <g opacity="0.2" style={{ mixBlendMode: "hard-light" }}>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1205.79 636.542V4.5542H1206.58V636.542H1205.79Z"
                        stroke="white"
                        strokeWidth="2"
                        className="BzvYeTuu_30"
                      ></path>
                    </g>
                    <g opacity="0.2" style={{ mixBlendMode: "hard-light" }}>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1269.33 636.542V4.5542V636.542Z"
                        stroke="white"
                        strokeWidth="2"
                        className="BzvYeTuu_31"
                      ></path>
                    </g>
                    <g opacity="0.2" style={{ mixBlendMode: "hard-light" }}>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1332.08 636.542V4.5542H1332.86V636.542H1332.08Z"
                        stroke="white"
                        strokeWidth="2"
                        className="BzvYeTuu_32"
                      ></path>
                    </g>
                    <g opacity="0.2" style={{ mixBlendMode: "hard-light" }}>
                      <path
                        d="M1334.43 2.20483H3.35303V636.542H1334.43V2.20483Z"
                        stroke="white"
                        strokeWidth="4"
                        className="BzvYeTuu_33"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </section>
        </div>

        <footer>
          <div className="container mx-auto">
            <div className="horizontal grid-container svelte-1yp41zp">
              <div className="col md:pt-8 md:pr-7">
                <Image src={logodark} alt="logo" width="70" />
              </div>
              <div className="col svelte-1yp41zp">
                <div className="sub-header svelte-1yp41zp">Bot</div>
                <div className="list svelte-1yp41zp">
                  <a href="#">
                    Telegram Bot <br />
                    <span className="sub-text svelte-1yp41zp">
                      You can add it to any group
                    </span>
                  </a>
                  <span className="date svelte-1yp41zp">Soon</span>
                </div>
                <div className="list svelte-1yp41zp">
                  <a href="#">Trending Bot</a>
                  <span className="date svelte-1yp41zp">Soon</span>
                </div>
              </div>
              <div className="col svelte-1yp41zp">
                <div className="sub-header svelte-1yp41zp">Socials</div>
                <div className="list svelte-1yp41zp">
                  <a href="https://t.me/Claimzaitokens">
                    Channel Announcement Group
                  </a>
                  <span className="date svelte-1yp41zp">TG</span>
                </div>
                <div className="list svelte-1yp41zp">
                  <a href="https://t.me/Claimzaitokens">Public Chat</a>
                  <span className="date svelte-1yp41zp">TG</span>
                </div>
                <div className="list svelte-1yp41zp">
                  <a href="https://x.com/zaibotio/">Announcement Page</a>
                  <span className="date svelte-1yp41zp">X (Twitter)</span>
                </div>
              </div>
              <div className="col svelte-1yp41zp">
                <div className="sub-header svelte-1yp41zp">Token</div>
                <div className="list svelte-1yp41zp">
                  <a href="#">
                    <span className="sub-text svelte-1yp41zp">zAIBot</span>
                  </a>
                  <span className="date svelte-1yp41zp">Soon</span>
                </div>
                <br />
                <div className="sub-header svelte-1yp41zp">Legal</div>
                <div className="list svelte-1yp41zp">
                  <a href="#">Copyright &copy; 2024 - ZAIBOT</a>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* button */}
        <div className=" buttonholder">
          <ConnectButton />
        </div>
        {/* end button div */}
      </main>
    </div>
  );
};

export default Home;

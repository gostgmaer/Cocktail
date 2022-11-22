import { FaCreditCard, FaBook,FaInstagram, FaBriefcase, FaPhone, FaGripLines, FaBiohazard, FaHome, FaUserCircle, FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaGithub, FaReadme } from "react-icons/fa";
import React from "react";
const megamenu = [
  {
    page: "products",
    links: [
      { label: "payment", icon: <FaCreditCard />, url: "/products" },
      { label: "terminal", icon: <FaCreditCard />, url: "/products" },
      { label: "connect", icon: <FaCreditCard />, url: "/products" },
    ],
  },
  {
    page: "developers",
    links: [
      { label: "plugins", icon: <FaBook />, url: "/products" },
      { label: "libraries", icon: <FaBook />, url: "/products" },
      { label: "help", icon: <FaBook />, url: "/products" },
      { label: "billing", icon: <FaBook />, url: "/products" },
      { label: "plugins", icon: <FaBook />, url: "/products" }]
  },
  {
    page: "company",
    links: [
      { label: "about", icon: <FaBriefcase />, url: "/products" },
      { label: "customers", icon: <FaBriefcase />, url: "/products" },
    ],
  },
];

const NavURL = [
    {
      id: 1,
      text: "Home",
      url: "",
      icon: <FaHome></FaHome>,
    },
    {
      id: 2,
      text: "Dashboard",
      url: "about-us",
      icon: <FaBiohazard></FaBiohazard>,
    },
    {
      id: 3,
      text: "Portfolio",
      url: "portfolio",
      icon: <FaGripLines></FaGripLines>,
    },
    {
      id: 5,
      text: "Blog",
      url: "personal-blog",
      icon: <FaReadme></FaReadme>,
    },
    {
      id: 4,
      text: "About",
      url: "About",
      icon:<FaUserCircle></FaUserCircle> ,
    }
    
  ];
  const socialURL = [
    {
      id: 3,
      text: "Facebook",
      url: "http://rambler.ru",
      icon: <FaFacebook></FaFacebook>
    },
    {
      id: 10,
      text: "bankcard",
      url: "http://time.com",
      icon:<FaTwitter></FaTwitter>
    },
    {
      id: 12,
      text: "switch",
      url: "https://joomla.org",
      icon: <FaLinkedin></FaLinkedin>
    },
    {
      id: 17,
      text: "mastercard",
      url: "http://wix.com",
      icon: <FaYoutube></FaYoutube>
    },
    {
      id: 18,
      text: "jcb",
      url: "https://twitpic.com",
      icon: <FaInstagram></FaInstagram>
    },
    {
      id: 19,
      text: "jcb",
      url: "https://twitpic.com",
      icon: <FaGithub></FaGithub>
    },
  ];

export  {megamenu,NavURL,socialURL};

import React from 'react'
import demo1 from '../assets/demo1.webp'
import demo2 from '../assets/demo2.webp'
import demo3 from '../assets/demo3.webp'
import demo4 from '../assets/demo4.webp'
import demo5 from '../assets/demo5.webp'
import demo6 from '../assets/demo6.webp'
import demo7 from '../assets/demo7.webp'
import demo8 from '../assets/demo8.webp'
import demo9 from '../assets/demo9.webp'
import demo10 from '../assets/demo10.webp'
import demo11 from '../assets/demo11.webp'

const cardData = [
  {
    image: demo1,
    author: 'Ethan Caldwell',
    date: 'October 16, 2024',
    title: 'How Tech Shapes the Future of Work in 2024',
    description:
      'In today’s ever-evolving world, storytelling has become a powerful tool for connection. Revision provides a unique platform for individuals to…'
  },
  {
    image: demo2,
    author: 'Ethan Caldwell',
    date: 'October 16, 2024',
    title: 'The Future of Work: Tech and Remote Trends',
    description:
      'In today’s ever-evolving world, storytelling has become a powerful tool for connection. Revision provides a unique platform for individuals to…'
  },
  {
    image: demo3,
    author: 'Ethan Caldwell',
    date: 'October 16, 2024',
    title: 'Remote Work Trends in the Digital Age',
    description:
      'Discover the cutting-edge tech gadgets making travel smarter and more convenient in 2024.'
  },
  {
    image: demo4,
    author: 'Ethan Caldwell',
    date: 'October 16, 2024',
    title: 'Business Travel Tools for the Digital Age',
    description:
      'Learn how startups are leveraging data to fuel growth and scale in today’s competitive landscape.'
  },
  {
    image: demo5,
    author: 'Ethan Caldwell',
    date: 'October 16, 2024',
    title: 'Top Business Management Software Solutions for 2024',
    description:
      'Dive into the key sports trends like AI and virtual reality set to redefine the sports industry in 2024.'
  },
  {
    image: demo6,
    author: 'Ethan Caldwell',
    date: 'October 16, 2024',
    title: 'Key Sports Trends for 2024: From AI to Virtual Reality',
    description:
      'Learn how automation is boosting business management efficiency and driving growth in various sectors.'
  },
  {
    image: demo7,
    author: 'Ethan Caldwell',
    date: 'October 16, 2024',
    title: 'The Impact of Automation on Business Management Efficiency',
    description:
      'Discover how startups are leveraging technology to disrupt and innovate within the sports industry.'
  },
  {
    image: demo8,
    author: 'Ethan Caldwell',
    date: 'October 16, 2024',
    title: 'Startups Disrupting the Sports Industry with Innovative Tech',
    description:
      'Explore the rise of virtual tours and immersive experiences shaping the future of travel in 2024.'
  },
  {
    image: demo9,
    author: 'Ethan Caldwell',
    date: 'October 16, 2024',
    title: 'Travel Trends in 2024: Virtual Tours and Immersive Experiences',
    description:
      "Understand why data security is a growing concern for business management in today's digital world."
  },
  {
    image: demo10,
    author: 'Ethan Caldwell',
    date: 'October 16, 2024',
    title: 'Why Data Security is a Priority for Business Management in 2024',
    description:
      'See how startups are harnessing the power of AI to foster innovation and reshape industries.'
  },
  {
    image: demo11,
    author: 'Ethan Caldwell',
    date: 'October 16, 2024',
    title: 'Startups and AI: How Artificial Intelligence Drives Innovation',
    description:
      'Learn about the top management software solutions driving efficiency and growth in businesses.'
  }
]

export default function HeroSection() {
  return (
    <div className="bg-[#1C1C1C] text-white">
      {/* Adjusting the grid to be responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {cardData.map((card, index) => (
          <article key={index} className=" p-4 rounded-lg">
            <img
              src={card.image}
              alt={`${card.title} image`}
              className="w-full h-[200px] object-cover rounded-3xl"
            />
            <div className="mt-2">
              <p>
                {card.author}{' '}
                <span className="opacity-40">on {card.date}</span>
              </p>
              <h1 className="text-[28px] mt-1">{card.title}</h1>
              <p className="opacity-40 mt-1">{card.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

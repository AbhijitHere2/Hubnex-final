import React from 'react';
import './Box.css'
import BoxComp from '../Box/BoxComp/BoxComp'

const Box = () => {
  const cardData = [
    { icon: 'hotel.png', title: 'Expert Mentor', description: 'Specialized learning guidance to enhance the learning' },
    { icon: 'multiple.png', title: 'Personalized learning path', description: 'A personalized learning path tailored to educational content' },
    { icon: 'group.png', title: 'Workshop', description: 'Practical training on a specific topic or a skill' },
    { icon: 'view.png', title: 'Mentorship', description: 'Gain Personalized mentorship from industry experts' },
    { icon: 'carbon.png', title: 'Resource Library', description: 'Utilize a rich library of learning materials and resources' },
    { icon: 'school.png', title: 'Career Services', description: 'Access career coaching and job placement assistance' },
  ];

  return (
    <div className="app ">
      <h1 className="text-[32px] font-semibold max-md:text-2xl my-5" style={{textAlign:"center",fontFamily:"sans-serif"}}>
        Discover the Ultimate Learning Experience for Your Educational Journey
      </h1>
      <p className="subtitle" style={{textAlign:"center",fontSize:"24px"}}>
        Tailored to meet your unique learning needs and goals<br/>
        Unlock access to our exceptional features
      </p>
      <div className="card-container">
        {cardData.map((card, index) => (
          <BoxComp
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Box;

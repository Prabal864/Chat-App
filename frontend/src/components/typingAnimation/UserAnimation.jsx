import { TypeAnimation } from 'react-type-animation';
 
const UserAnimation = ({username}) => {
  return (
    <TypeAnimation
      sequence={[
        `Welcome ${username}`, // Types 'One'
        2500, // Waits 1s
        'Start Chatting', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'Made With WebSocket',
        1500, 
        'Microservice Architecture Based',
        150, 
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em', display: 'inline-block' }}
    />
  );
};

export default UserAnimation;
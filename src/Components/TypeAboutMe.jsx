import { TypeAnimation } from 'react-type-animation';

export default function TypeAboutMe(){
  return (
    <TypeAnimation

      sequence={[
        'Node.js',
        3000,
        'React.js',
        3000,
        'Express.js',
        3000,
        'Agile Software Development',
        3000,
        'Next.js',
        3000,
        'MongoDB',
        3000,
        'postgreSQL',
        3000,
        'Javascript',
        3000,
        'Unidata',
        3000,
        'RESTful API Development',
        3000,
        'Agile Software Development',
        3000,
        'HTML',
        3000,
        'CSS',
        3000,
        'Unix',
        3000,
        'Linux Operating Systems',
        3000,
        'Tailwind CSS',
        3000,
        'XML',
        3000,
        'JSON',
        3000,
        'HTTP',
        3000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '3em', display: 'inline-block' }}
      repeat={Infinity}
      className='type-about-me'
    />
  );
};
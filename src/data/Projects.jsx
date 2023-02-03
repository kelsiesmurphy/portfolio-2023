const Projects = [
	{ 
		id: 1, 
		name: "AdventureGrid", 
		image: '/portfolio-images/adventuregrid.png', 
		github: 'https://github.com/kelsiesmurphy/adventuregrid',
		demo: 'https://kelsiesmurphy.pythonanywhere.com/',
		code: '/code-snippets/adventuregrid_code.png',
		projectType: 'Solo CodeClan Project',
		description: 'AdventureGrid is a fictional site that sells adventure packages around Scotland. For my first solo CodeClan project, I built the admin dashboard, as well as the landing page.',
		furtherDetails: 'It is a CRUD web application that runs the backend of the AdventureGrid site, managing experiences and users, using RESTful routes, a PostgreSQL database and Python (Flask).',
		reflections: 'I really enjoyed the styling of this project, and thinking through the user experience carefully. One of the key difficulties I encountered was actually the hosting of the demonstration site, as I had never hosted a Flask site before. I will return to the project in the future to add the e-commerce functionality. The code I am featuring here is the dynamic admin navigation, and how it reflects the current page by slightly adjusting its styling based on the page you are on, using Flask.'
	},
	{ 
		id: 2, 
		name: "Surveyflow", 
		image: '/portfolio-images/surveyflow.png', 
		github: 'https://github.com/kelsiesmurphy/surveyflow',
		demo: '',
		code: '',
		projectType: 'Personal Project',
		description: 'Surveyflow is a SAAS tool that handled post-purchase surveys for small business owners, designed and built as a personal project over 4 months. Key parts of the project include the authentication process and the pocketbase integration.',
		furtherDetails: 'It is built with Next.js, Typescript, PocketBase and TailwindCSS for styling.',
		reflections: 'My personal goals for this project were to try out a different tech stack to one I was used to. I chose Next.js and Typescript as they are becoming popular within the industry and I personally believe they will become industry standards within the next few years. My next step for this project would be to implement the subscription functionality with Stripe, and market it to potential users.'
	},
	{ 
		id: 3, 
		name: "Unread", 
		image: '/portfolio-images/unread.png', 
		github: 'https://github.com/kelsiesmurphy/unread',
		demo: '',
		code: '/code-snippets/unread_code.png',
		projectType: 'Group CodeClan Project',
		description: 'Unread is a book tracker created for the CodeClan group project, using the OpenLibrary API and built in 6 days.',
		furtherDetails: 'It is built using the MERN stack, MongoDB, ExpressJS, React and NodeJS, and I worked within a team of 4, designing the interface and building the connection to the OpenLibrary API.',
		reflections: 'I believe we achieved a great deal as a team within the timeframe, and there were several opportunities to mentor other members of the team and be mentored back. In a future project, I intend to focus more closely on the testing aspect of the project. The code I have featured here is the API connection, this took the best part of a day to implement fully.'
	},
	{ 
		id: 4, 
		name: "PocketLint", 
		image: '/portfolio-images/pocketlint.png', 
		github: 'https://github.com/kelsiesmurphy/pocketlint',
		demo: '',
		code: '',
		projectType: 'Personal Project',
		description: 'PocketLint is a minimal e-commerce site that sells high quality items you would carry everyday in your pocket, built solo over 1 month.',
		furtherDetails: ' The goal of this project was to gain experience in building React applications completely solo, and set up a payment solution using Stripe. I had previously designed this e-commerce site in Figma, and it was a good opportunity to build it in React, experiment with the Stripe API, and use Tailwind CSS for the first time.',
		reflections: 'In using TailwindCSS for the first time, I have discovered its pros and cons, and have come to the conclusion that I would use it again for personal projects in the future. I also have increased my knowledge in MongoDB and Express, and the Stripe API has very thorough documentation. This was a fun project to do, and the next step would probably be to build out an admin dashboard.'
	},
]

export default Projects;
const Projects = [
	{ 
		id: 1, 
		name: "Pickup", 
		image: '/portfolio-images/pickup.webp', 
		github: 'https://github.com/kelsiesmurphy/pickup',
		demo: 'https://www.joinpickup.co/',
		code: '/code-snippets/pickup_code.webp',
		projectType: 'Group Capstone CodeClan Project',
		description: 'Pickup is a community network åfor organising litter picking events and allow the users to track the litter collected in a leaderboard format.',
		furtherDetails: 'It is a web application with the front-end built in React, the back-end built in Java Spring, the hosting on Vercel and Neon/Digital Ocean respectively, and we even have an AWS S3 bucket set up for image storage. The authentication in the app is handled by Auth0.',
		reflections: 'I built this app with two CodeClan classmates, Kyle Fenlon and Josh Montgomery, for our capstone project, and I learned so much building this full stack app, from the hosting to the adoption of TailwindCSS for the styling. The back-end has some really useful and clever RESTful endpoints to hit to get statistics, and we can load hundreds of thousands of litter items in our database. I spent most of my time in the front-end, but built out the data loading part of the backend, where it fills the database with dummy data, pulling from two different APIs to add random user and location data.'
	},
	{ 
		id: 2, 
		name: "AdventureGrid", 
		image: '/portfolio-images/adventuregrid.webp', 
		github: 'https://github.com/kelsiesmurphy/adventuregrid',
		demo: 'https://kelsiesmurphy.pythonanywhere.com/',
		code: '/code-snippets/adventuregrid_code.webp',
		projectType: 'Solo CodeClan Project',
		description: 'AdventureGrid is a fictional site that sells adventure packages around Scotland. For my first solo CodeClan project, I built the admin dashboard, as well as the landing page.',
		furtherDetails: 'It is a CRUD web application that runs the backend of the AdventureGrid site, managing experiences and users, using RESTful routes, a PostgreSQL database and Python (Flask).',
		reflections: 'I really enjoyed the styling of this project, and thinking through the user experience carefully. One of the key difficulties I encountered was actually the hosting of the demonstration site, as I had never hosted a Flask site before. I will return to the project in the future to add the e-commerce functionality. The code I am featuring here is the dynamic admin navigation, and how it reflects the current page by slightly adjusting its styling based on the page you are on, using Flask.'
	},
	{ 
		id: 3, 
		name: "Surveyflow", 
		image: '/portfolio-images/surveyflow.webp', 
		github: 'https://github.com/kelsiesmurphy/surveyflow',
		demo: '',
		code: '',
		projectType: 'Personal Project',
		description: 'Surveyflow is a SAAS tool that handled post-purchase surveys for small business owners, designed and built as a personal project over 4 months. Key parts of the project include the authentication process and the pocketbase integration.',
		furtherDetails: 'It is built with Next.js, Typescript, PocketBase and TailwindCSS for styling.',
		reflections: 'My personal goals for this project were to try out a different tech stack to one I was used to. I chose Next.js and Typescript as they are becoming popular within the industry and I personally believe they will become industry standards within the next few years. My next step for this project would be to implement the subscription functionality with Stripe, and market it to potential users.'
	},
	{ 
		id: 4, 
		name: "Unread", 
		image: '/portfolio-images/unread.webp', 
		github: 'https://github.com/kelsiesmurphy/unread',
		demo: '',
		code: '/code-snippets/unread_code.webp',
		projectType: 'Group CodeClan Project',
		description: 'Unread is a book tracker created for the CodeClan group project, using the OpenLibrary API and built in 6 days.',
		furtherDetails: 'It is built using the MERN stack, MongoDB, ExpressJS, React and NodeJS, and I worked within a team of 4, designing the interface and building the connection to the OpenLibrary API.',
		reflections: 'I believe we achieved a great deal as a team within the timeframe, and there were several opportunities to mentor other members of the team and be mentored back. In a future project, I intend to focus more closely on the testing aspect of the project. The code I have featured here is the API connection, this took the best part of a day to implement fully.'
	},
	{ 
		id: 5, 
		name: "PocketLint", 
		image: '/portfolio-images/pocketlint.webp', 
		github: 'https://github.com/kelsiesmurphy/pocketlint',
		demo: '',
		code: '/code-snippets/pocketlint_code.webp',
		projectType: 'Personal Project',
		description: 'PocketLint is a minimal e-commerce site that sells high quality items you would carry everyday in your pocket, built solo over 1 month.',
		furtherDetails: ' The goal of this project was to gain experience in building React applications completely solo, and set up a payment solution using Stripe. I had previously designed this e-commerce site in Figma, and it was a good opportunity to build it in React, experiment with building out a Stripe Checkout integration, and use Tailwind CSS for the first time.',
		reflections: 'In using TailwindCSS for the first time, I have discovered its pros and cons, and have come to the conclusion that I would use it again for personal projects in the future. This was an enjoyable project to build, and the next step would probably be to build out an admin dashboard. The code featured is related to the Stripe Checkout integration. It uses the async and await function calls, and determines where to navigate upon success or failure. There was plenty of troubleshooting involved in getting this working.'
	},
]

export default Projects;
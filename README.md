![image](https://github.com/saurabhjaykar1603/link-tree/assets/124028591/5fa0b740-2867-4b12-a679-873bd750843b)

# MERN Next.js LinkTree App 
[Live Demo](https://link-tree-bay-omega.vercel.app)

This repository contains a Link Tree application built using React Next.js  It allows users to add, delete, and update profile and social links.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js - Download and install [Node.js](https://nodejs.org/en/download/)
- npm or yarn - Node.js comes with npm installed, but you can also use yarn as an alternative package manager. 
### Installation

1. Clone the repository to your local machine:

```bash
git clone <https://github.com/saurabhjaykar1603/link-tree>
```

2. Navigate to the  project server directory:

```bash
cd <server>
```

3. Install dependencies using npm or yarn:

```bash
npm install
```
4. Navigate to the  project site directory:

```bash
cd <site>
```

5. Install dependencies using npm or yarn:

```bash
npm install
```


### Running the Application

To run the development server and site execute the following command:

```bash
npm run dev
```


Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the application.

## Usage

Once the application is running, you can perform the following actions:

- **Add Links**: Add Social links.
- **Update Links and Profile**: Update Social links and Profile.


* env for server :-
- create **.env** file at
```bash
cd <server>
```
```env
MONGO_URI = ""
PORT="8080"
JWT_SECRETE_KEY=""
```

* env for server :-
- create **.env.local** file at
```bash
cd <server>
```
```env
NEXT_PUBLIC_LINK_TREE_BACKEND_URL=http://localhost:8080
NEXT_PUBLIC_LINK_TREE_FRONTEND_URL=http://localhost:3000
```

# Landing Page Interview Project for Fun.xyz
## About

This is an interview project for Fun.xyz. The goal is to remake the landing page for the company using a modern web framework. The existing landing page used as reference can be found here:
- [Fun Website](https://fun.xyz)

Libraries used:
- [React](https://reactjs.org/) (JavaScript) for the web framework
- [Tailwind CSS](https://tailwindcss.com/) for in-HTML CSS properties
- Other dependencies:
  - Autoprefixer and PostCSS for Tailwind
  - [Vite](https://vitejs.dev/) to create & deploy the React app

## Instructions
  
### Software needed:

- [Git](https://git-scm.com/downloads)
- [Latest Node LTS](https://nodejs.org/en/download/)

### To deploy this application:
- Clone the repo locally:
  - `git clone https://github.com/PranavSakthivel/fun/`
- Open a Terminal in the directory
- Run `cd fun-xyz` to enter the project directory
- Run `npm i` to install all dependencies and node modules
- Run `npm run dev` and Ctrl + click the link shown in the terminal
  - Example: http://localhost:5173/

## Considerations

### Features:
- Uses React, a modern web framework
- Contains most information from the original landing page
- Website is responsive - it scales for phones, tablets, desktops, or any device
- Uses minimal dependencies
- Website has a modern easy to follow design
- The text and titles are easy to edit or modify to add future content to the website
- Assets can easily be swapped out
- Social links have been overhauled to use icons

### Technology Selection:

- React is popular in the full stack engineering space, and offers a lot of flexibility. I used this as an opportunity to refresh my React basics.
- React offers lots of code reusability.
- Tailwind CSS offers easy CSS editing in-HTML with lots of premade properties to add to elements.
- There are no other dependencies required to create a single page application using these tools, which reduces overhead and code clutter.


### Future considerations

- Hosting the website on a public cloud, such as Azure Web Apps
- Lever Job API may offer some options to show the careers directly within the webpage
- Possible to implement a React library to view the Fun PDFs within the website - there are paid and open source options on the internet for this
- Implement Odsy network link in a better way - right now there may be some confusion between the "Learn More" button and the "Odsy Network" button. 
  - Some options I considered were adding Odsy as a Navbar Link, making the "In Partnership with Odsy" section fully clickable, or adding it as a footer link, but decided a transparent button made more sense and did not draw as much attention as the main button.
- Some formatting is slightly broken below a width of 200px, with additional testing this can be possibly fixed with Tailwind CSS properties
- Inverted Favicon may be more visible with a light browser theme, but not with a dark one - possible outline around the favicon SVG may help
- The large image on the main page serves as a placeholder for a more relevant asset - I will try to include some alternatives in the assets folder 
- The "Join Us" button placement can be changed - I tried a couple different positions, right and left aligning but wasn't satisfied with any of them
- A possible color scheme might be a dark purple accent to go along with the Odsy network's site theme

### Possible back-end implementations and considerations:

- Lever Job API implementation
- Website Analytics - where users are visiting the website from, engagement and metrics tracking
  - May have possible privacy concerns if using public cloud such as Firebase Analytics
- In the future, a database would be useful for storing form data for a newsletter or customer feedback
- Storage buckets or blobs to store PDFs, assets, and images for reliability and speed
- Rest API layer on Node/ExpressJS to access the databases and blobs

### Reuse of assets and style presets

- Opting to use already available assets and style presets saved time in the process, and I was able to deliver a more complete product.
- I was able to focus on maintaining code quality, building website logic, and formatting the website.
- I loosely followed tutorials and guides on how to create a single page modern application which helped a lot with learning Tailwind CSS.
  - This also helped with optimizing the code structure and keeping the components as reusable as possible.


## Preview / Screenshots

[Imgur Link](https://imgur.com/a/1T2Gbtl)

## Sources

- Tailwind CSS documentation
- React documentation
- Royalty free images and vectors from [Pixabay](https://pixabay.com/)
- Premade styles, gradients and assets from [styles.js](https://gist.githubusercontent.com/adrianhajdin/8a04faf5e52419ec93cd5329ffcb011e/raw/119ddf3380cecf2a3736afe8e4c83ee008093b6b/style.js) and [index.css](https://gist.githubusercontent.com/adrianhajdin/8a04faf5e52419ec93cd5329ffcb011e/raw/119ddf3380cecf2a3736afe8e4c83ee008093b6b/index.css)
- Premade device presets from [tailwind.config.cjs](https://gist.githubusercontent.com/adrianhajdin/8a04faf5e52419ec93cd5329ffcb011e/raw/119ddf3380cecf2a3736afe8e4c83ee008093b6b/tailwind.config.cjs) to make the website responsive

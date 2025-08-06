
# NGO_WEBSITE

A modern, responsive React + TypeScript website for the Basti Ki Pathshala Foundation, built with Vite and Tailwind CSS.

## Features

- Responsive landing page for an NGO
- Volunteer registration form
- About section with mission and vision
- Impact statistics
- Social and contact links
- Uses local images (`public/home.jpg`, `public/about.jpg`)
- Built with React, TypeScript, Tailwind CSS, and Vite

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or above recommended)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Mohammedsabeel063/NGO_WEBSITE.git
   cd NGO_WEBSITE
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Run the development server:**
   ```sh
   npm run dev
   ```

4. **Open your browser and visit:**
   ```
   http://localhost:5173
   ```

### Build for Production

```sh
npm run build
```

### Preview Production Build

```sh
npm run preview
```

## Project Structure

```
NGO_WEBSITE/
├── public/
│   ├── home.jpg
│   └── about.jpg
├── src/
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── ...
```

## Customization

- **Images:**  
  Replace `public/home.jpg` and `public/about.jpg` with your own images for the Home and About sections.
- **Content:**  
  Edit `src/App.tsx` to update text, links, and sections as needed.

## Deployment

You can deploy this site to any static hosting (Vercel, Netlify, GitHub Pages, etc.) after building:

```sh
npm run build
```

The output will be in the `dist` folder.

## License

This project is open source and available under the [MIT License](LICENSE).

---
Made with ❤️ for Basti Ki Pathshala Foundation.


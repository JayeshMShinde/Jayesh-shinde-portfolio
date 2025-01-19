# Modern Developer Portfolio

A sleek, responsive developer portfolio built with Next.js, React, and Tailwind CSS, featuring a terminal-inspired design with smooth animations and interactive elements.

## 🚀 Features

- Terminal-inspired UI design
- Smooth scroll navigation
- Interactive typewriter effect
- Responsive layout for all devices
- Custom animations and transitions
- Section-based content organization
- Dynamic navigation highlighting
- Grid pattern background with gradient overlays

## 🛠️ Technologies Used

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Lucide Icons
- Intersection Observer API
- CSS Grid & Flexbox
- Custom CSS Animations

## 📦 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm or yarn

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/developer-portfolio.git
cd developer-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   └── TypeWriter.tsx
│   ├── data.ts
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── public/
└── ...config files
```

## ⚙️ Configuration

To customize the portfolio content, modify the data files in the `data` directory:

- `personalInfo`: Your personal and contact information
- `experiences`: Your work experience details
- `skills`: Your technical skills and competencies
- `training`: Your projects and training information

## 💅 Styling

The project uses a combination of Tailwind CSS and custom CSS:

- Global styles are defined in `globals.css`
- Custom animations for smooth transitions
- Terminal-inspired design elements
- Responsive grid patterns and gradients
- Dark theme optimization

## 🎨 Customization

1. **Colors**: Update the color scheme in `globals.css`:
```css
:root {
  --background: #0a0a0a;
  --foreground: #ededed;
}
```

2. **Content**: Modify the data files in the `data` directory to update your information

3. **Animations**: Customize animations in `globals.css`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile devices
- Tablets
- Desktop screens
- Large displays

## 🚀 Deployment

Deploy your portfolio using platforms like:
- Vercel (recommended for Next.js)
- Netlify
- GitHub Pages

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

For any queries or suggestions, please reach out through:
- The contact form on the portfolio
- Opening an issue in this repository

## 🙏 Acknowledgments

- Lucide Icons for beautiful icons
- Tailwind CSS team
- Next.js team

---
Built with ❤️ using Next.js and Tailwind CSS
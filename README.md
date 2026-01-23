# Penguin Strategy 🐧

A minimal, storybook-like educational website about penguins featuring interactive landscapes, mission-driven storytelling, and community adoption tracking.

![Project Banner](https://raw.githubusercontent.com/heil-kaizen/PENGU/main/penguin%20strategy.png)

## 📖 About

**Penguin Strategy** is an immersive web experience designed to raise awareness about penguin conservation. Through a calm, aesthetic interface, users can explore different penguin species in their natural habitat, understand the mission behind conservation efforts, and find direct ways to support rehabilitation centers.

## 🌟 Features

- **Interactive Hero Canvas**: A beautiful, interactive Antarctic landscape where users can discover various penguin species (Emperor, Adélie, Gentoo, Chinstrap, King) by hovering over hotspots.
- **Mission-Driven Narrative**: A dedicated section explaining the importance of education and conservation in protecting these flightless birds.
- **Adoption Center**: A showcase of penguins currently undergoing rehabilitation, with direct links to [SANCCOB](https://sanccob.co.za/) for symbolic adoptions.
- **Responsive Navigation**: A sticky, glassmorphism-styled navigation bar that includes quick links and a donation CTA.
- **Crypto & Social Integration**: Built-in support for displaying a Contract Address (CA) and social media links for community-driven projects.

## 🛠️ Tech Stack

- **Frontend Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Visualizations**: [Recharts](https://recharts.org/)
- **Type Safety**: [TypeScript](https://www.typescriptlang.org/)

## 📂 Project Structure

```bash
├── components/
│   ├── AdoptionCenter.tsx   # Displays adoptable penguins and conservation info
│   ├── HeroCanvas.tsx       # Interactive landing area with species hotspots
│   ├── MissionSection.tsx   # Educational content about the project's goals
│   ├── StickyNav.tsx        # Floating navigation, CA display, and social links
│   └── ...                  # Additional components (Voting, Gallery, Maps)
├── constants.ts             # Static data for species, adoptions, and configuration
├── types.ts                 # TypeScript definitions
├── App.tsx                  # Main application layout
└── index.html               # Entry point with Tailwind CDN configuration
```

## 🚀 Usage

This project is built using ES Modules and can be run in modern web development environments.

1.  **Clone the repository**
    ```bash
    git clone https://github.com/heil-kaizen/PENGU.git
    ```

2.  **Install Dependencies** (if using a build tool)
    ```bash
    npm install
    ```

3.  **Run Development Server**
    ```bash
    npm run dev
    ```

## 🐧 Conservation Efforts

This website supports **SANCCOB** (Southern African Foundation for the Conservation of Coastal Birds).
* "Adoption" on this site refers to symbolic adoptions that fund real-world rehabilitation, food, and medication for injured penguins.

## 📄 License

This project is open-source and available under the MIT License.

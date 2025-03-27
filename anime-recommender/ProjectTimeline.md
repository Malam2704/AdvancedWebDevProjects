# Anime Battle Simulator

A fun, interactive, turn-based battle simulator featuring popular anime characters. This project helps refresh your software engineering skills through a practical and engaging web app that you can use and share.

---

## Tech Stack:
- **Frontend**: React.js (Vite), TypeScript, TailwindCSS, shadcn/ui
- **Deployment**: Vercel, Netlify, or GitHub Pages

---

## Step-by-Step Development Guide:

### Step 1: Project Setup
- [ ] Initialize your project using Vite with React + TypeScript:
  ```
  npm create vite@latest anime-battle-simulator -- --template react-ts
  cd anime-battle-simulator
  npm install
  ```

- [ ] Install TailwindCSS:
  ```
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
  ```

- [ ] Configure Tailwind (refer to [official TailwindCSS docs](https://tailwindcss.com/docs/installation))

### Step 2: Create Anime Characters
- [ ] Create a folder `/src/data` and add a file `characters.json`
- [ ] Populate it with character data:
  ```json
  [
    {
      "name": "Naruto Uzumaki",
      "health": 100,
      "attack": 20,
      "defense": 10,
      "special": "Rasengan"
    },
    {
      "name": "Goku",
      "health": 120,
      "attack": 25,
      "defense": 8,
      "special": "Kamehameha"
    }
  ]
  ```

### Step 3: Build UI Components
- [ ] Create component structure under `/src/components`
  - [ ] `CharacterCard.tsx` (to display character details)
  - [ ] `CharacterSelect.tsx` (to allow selection)
  - [ ] `BattleScreen.tsx` (main battle UI)

### Step 4: Implement Selection Logic
- [ ] Display characters from JSON data
- [ ] Allow users to select two characters (one for player, one for opponent)

### Step 5: Develop Battle Logic
- [ ] Create simple turn-based combat rules in `/src/utils/battleLogic.ts`
  - [ ] Basic attacks reduce health
  - [ ] Include special move logic (higher damage)
  - [ ] Add a random factor for unpredictability

### Step 6: Integrate Battle Logic into UI
- [ ] Display health bars, battle moves, and outcomes
- [ ] Add visual feedback for attacks (use animations or simple text feedback)

### Step 7: Implement Sharable Results
- [ ] Allow generating a screenshot or text summary of battle outcomes
- [ ] Provide easy buttons for users to share on social media

### Step 8: Testing & Bug Fixes
- [ ] Manually test the entire flow
- [ ] Debug and fix issues

### Step 9: Deployment
- [ ] Deploy the project using Vercel, Netlify, or GitHub Pages

### Step 10: Documentation
- [ ] Update this README with any additional instructions or screenshots of your final product.

---

## Running Your Project Locally:
```bash
npm run dev
```

Open your browser and go to `http://localhost:5173`.

---

## Future Extensions:
- Additional characters and moves
- User accounts for tracking battle history
- Multiplayer battles

Enjoy building your Anime Battle Simulator!


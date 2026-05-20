# FRC Guessing Game 🤖

A web-based guessing game similar to Poeltl, but for FRC (FIRST Robotics Competition) teams! Guess the mystery FRC team based on clues about their location, rookie year, and district.

## Features

- **Real FRC Team Data**: Pulls live data from The Blue Alliance (TBA) API
- **8 Guesses**: You have 8 attempts to guess the correct team
- **Visual Feedback**: Color-coded hints show which attributes match
- **Responsive Design**: Works on desktop and mobile
- **No Build Required**: Pure HTML/CSS/JavaScript - just open and play!

## How to Play

1. The game selects a random FRC team as the "mystery team"
2. Enter a team number (e.g., 254, 1678, 2056) to make a guess
3. The game will show you how your guess compares to the mystery team:
   - 🟢 **Green**: Exact match
   - ⚪ **Gray**: No match
4. Use the clues to narrow down your guess
5. Guess correctly within 8 tries to win!

## Setup Instructions

### 1. Get a TBA API Key

You need a free API key from The Blue Alliance to fetch team data:

1. Go to [https://www.thebluealliance.com/account](https://www.thebluealliance.com/account)
2. Sign in or create an account
3. Scroll down to "API Read Key" section
4. Copy your API key

### 2. Add Your API Key

Copy `config.example.js` to `config.js`:

```bash
cp config.example.js config.js
```

Then open `config.js` in a text editor and replace `YOUR_TBA_API_KEY_HERE` with your actual API key.

**Security Note**: The `config.js` file is excluded from git via `.gitignore` to keep your API key private. Never commit your actual API key to a public repository.

### 3. Run the Game

Simply open `index.html` in your web browser! No server or installation required.

## Deployment to GitHub Pages

### Option 1: Using GitHub Web Interface

1. Create a new repository on GitHub
2. Upload `index.html` to the repository
3. Go to Settings > Pages
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click Save
7. Your game will be live at `https://yourusername.github.io/repository-name`

### Option 2: Using Git Command Line

```bash
cd C:\Users\galen\CascadeProjects\frc-guessing-game
git init
git add index.html
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

Then enable GitHub Pages in your repository settings as described above.

## Game Attributes

The game compares teams based on:

- **Team Number**: The FRC team number (e.g., 254)
- **Location**: City and state/province (e.g., San Jose, CA)
- **Rookie Year**: The year the team was founded
- **District**: The FRC district the team belongs to (e.g., FIM, PNW)

## API Rate Limits

The Blue Alliance API has rate limits:
- Read API: ~120 requests per minute
- If you hit the limit, wait a minute before trying again

## Troubleshooting

**"Team not found" error:**
- Make sure you entered a valid team number
- Check that your API key is correct
- The team might not exist in the TBA database

**API request failed:**
- Verify your API key is valid
- Check your internet connection
- You may have hit the rate limit - wait a minute

**Game won't load:**
- Make sure you added your API key to the code
- Check browser console for errors (F12)
- Try a different browser

## Future Enhancements

Potential improvements for the game:
- Add more comparison attributes (awards, event history, etc.)
- Implement a streak/tracking system
- Add difficulty levels
- Include team logos/images
- Add hints system

## Credits

- Team data provided by [The Blue Alliance](https://www.thebluealliance.com/)
- Inspired by [Poeltl](https://poeltl.dunk.town/)
- Built with vanilla HTML, CSS, and JavaScript

## License

MIT License - feel free to use and modify!

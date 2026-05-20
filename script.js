const TEAMS = [
  { team: 9483, name: "Overcharge", country: "Turkiye", state: "", district: "None", rookie: 2024, epa: 2020, win: 85.8 },
  { team: 254, name: "The Cheesy Poofs", country: "USA", state: "CA", district: "CA", rookie: 1999, epa: 2015, win: 84.1 },
  { team: 4414, name: "HighTide", country: "USA", state: "CA", district: "CA", rookie: 2012, epa: 2010, win: 86.2 },
  { team: 27, name: "Team RUSH", country: "USA", state: "MI", district: "FIM", rookie: 1997, epa: 1995, win: 70.7 },
  { team: 1114, name: "Simbotics", country: "Canada", state: "ON", district: "ONT", rookie: 2003, epa: 1969, win: 79.2 },
  { team: 2056, name: "OP Robotics", country: "Canada", state: "ON", district: "ONT", rookie: 2007, epa: 1967, win: 87.1 },
  { team: 1323, name: "MadTown Robotics", country: "USA", state: "CA", district: "CA", rookie: 2004, epa: 1965, win: 73.2 },
  { team: 2046, name: "Bear Metal", country: "USA", state: "WA", district: "PNW", rookie: 2007, epa: 1940, win: 72.2 },
  { team: 2481, name: "Roboteers", country: "USA", state: "IL", district: "None", rookie: 2008, epa: 1925, win: 77.0 },
  { team: 7769, name: "The CREW", country: "USA", state: "MI", district: "FIM", rookie: 2019, epa: 1918, win: 69.6 },
  { team: 125, name: "NUTRONs", country: "USA", state: "MA", district: "NE", rookie: 1998, epa: 1912, win: 67.2 },
  { team: 9128, name: "ITKAN Robotics", country: "USA", state: "TX", district: "FIT", rookie: 2023, epa: 1909, win: 69.3 },
  { team: 5687, name: "The Outliers", country: "USA", state: "ME", district: "NE", rookie: 2015, epa: 1908, win: 73.7 },
  { team: 1678, name: "Citrus Circuits", country: "USA", state: "CA", district: "CA", rookie: 2005, epa: 1893, win: 83.3 },
  { team: 3467, name: "Windham Windup", country: "USA", state: "NH", district: "NE", rookie: 2011, epa: 1886, win: 68.4 },
  { team: 6369, name: "Mercenary Robotics", country: "USA", state: "TX", district: "FIT", rookie: 2017, epa: 1883, win: 63.0 },
  { team: 4946, name: "The Alpha Dogs", country: "Canada", state: "ON", district: "ONT", rookie: 2014, epa: 1877, win: 67.4 },
  { team: 6329, name: "The Bucks' Wrath", country: "USA", state: "ME", district: "NE", rookie: 2017, epa: 1858, win: 71.8 },
  { team: 9470, name: "Ctrl-Alt-Defeat", country: "USA", state: "CA", district: "CA", rookie: 2024, epa: 1857, win: 66.7 },
  { team: 1796, name: "RoboTigers", country: "USA", state: "NY", district: "None", rookie: 2006, epa: 1853, win: 73.2 },
  { team: 694, name: "StuyPulse", country: "USA", state: "NY", district: "None", rookie: 2001, epa: 1851, win: 68.0 },
  { team: 1833, name: "Team BEAN", country: "USA", state: "GA", district: "PCH", rookie: 2006, epa: 1845, win: 87.1 },
  { team: 498, name: "The Cobra Commanders", country: "USA", state: "AZ", district: "None", rookie: 2001, epa: 1842, win: 59.7 },
  { team: 9496, name: "LYNK", country: "USA", state: "NC", district: "FNC", rookie: 2024, epa: 1838, win: 85.7 },
  { team: 6459, name: "AG Robotik", country: "Turkiye", state: "", district: "None", rookie: 2017, epa: 1834, win: 59.3 },
  { team: 1987, name: "Broncobots", country: "USA", state: "MO", district: "None", rookie: 2007, epa: 1833, win: 67.2 },
  { team: 7558, name: "ALT-F4", country: "Canada", state: "ON", district: "ONT", rookie: 2019, epa: 1825, win: 68.9 },
  { team: 359, name: "Hawaiian Kids", country: "USA", state: "HI", district: "None", rookie: 2000, epa: 1823, win: 76.3 },
  { team: 316, name: "LUNATECS", country: "USA", state: "NJ", district: "FMA", rookie: 1999, epa: 1823, win: 55.8 },
  { team: 3476, name: "Code Orange", country: "USA", state: "CA", district: "CA", rookie: 2011, epa: 1818, win: 69.6 },
  { team: 5460, name: "Strike Zone", country: "USA", state: "MI", district: "FIM", rookie: 2015, epa: 1818, win: 70.7 },
  { team: 2702, name: "Rebels", country: "Canada", state: "ON", district: "ONT", rookie: 2009, epa: 1810, win: 52.6 },
  { team: 6328, name: "Mechanical Advantage", country: "USA", state: "MA", district: "NE", rookie: 2017, epa: 1810, win: 69.9 },
  { team: 5736, name: "Kingsmen Robotics", country: "USA", state: "NY", district: "None", rookie: 2015, epa: 1807, win: 65.7 },
  { team: 4476, name: "W.A.F.F.L.E.S.", country: "Canada", state: "ON", district: "ONT", rookie: 2013, epa: 1805, win: 67.1 },
  { team: 1156, name: "Under Control", country: "Brazil", state: "", district: "None", rookie: 2003, epa: 1805, win: 59.1 },
  { team: 8044, name: "Denham Venom", country: "USA", state: "LA", district: "None", rookie: 2020, epa: 1803, win: 71.5 },
  { team: 7426, name: "PAIR OF DICE ROBOTICS", country: "USA", state: "NV", district: "None", rookie: 2019, epa: 1802, win: 66.2 },
  { team: 180, name: "S.P.A.M.", country: "USA", state: "FL", district: "None", rookie: 1998, epa: 1800, win: 72.8 },
  { team: 1325, name: "Inverse Paradox", country: "Canada", state: "ON", district: "ONT", rookie: 2004, epa: 1799, win: 61.5 },
  { team: 10340, name: "ITKAN Girls", country: "USA", state: "TX", district: "FIT", rookie: 2025, epa: 1798, win: 66.8 },
  { team: 6800, name: "Valor", country: "USA", state: "TX", district: "FIT", rookie: 2018, epa: 1788, win: 72.3 },
  { team: 5940, name: "BREAD", country: "USA", state: "CA", district: "CA", rookie: 2016, epa: 1787, win: 72.5 },
  { team: 4678, name: "CyberCavs", country: "Canada", state: "ON", district: "ONT", rookie: 2013, epa: 1786, win: 70.8 },
  { team: 4522, name: "Team SCREAM", country: "USA", state: "MO", district: "None", rookie: 2013, epa: 1784, win: 69.4 },
  { team: 1706, name: "Ratchet Rockers", country: "USA", state: "MO", district: "None", rookie: 2005, epa: 1782, win: 67.6 },
  { team: 1768, name: "Nashoba Robotics", country: "USA", state: "MA", district: "NE", rookie: 2006, epa: 1782, win: 61.4 },
  { team: 2910, name: "Jack in the Bot", country: "USA", state: "WA", district: "PNW", rookie: 2009, epa: 1781, win: 73.4 },
  { team: 581, name: "Blazing Bulldogs", country: "USA", state: "CA", district: "CA", rookie: 2001, epa: 1780, win: 54.2 },
  { team: 5468, name: "Chaos Theory", country: "USA", state: "OR", district: "PNW", rookie: 2015, epa: 1779, win: 55.8 }
];

const MAX_GUESSES = 8;
const answerPool = TEAMS.slice(0, 30);
TEAMS.forEach((team, index) => {
  team.rank = index + 1;
});

const form = document.querySelector("#guess-form");
const input = document.querySelector("#team-input");
const datalist = document.querySelector("#team-options");
const guessesEl = document.querySelector("#guesses");
const messageEl = document.querySelector("#message");
const guessCountEl = document.querySelector("#guess-count");
const resultTextEl = document.querySelector("#result-text");
const poolSizeEl = document.querySelector("#pool-size");
const newGameButton = document.querySelector("#new-game");

let lastAnswerTeam = null;
let answer;
let guesses = [];
let gameOver = false;

function chooseAnswer() {
  let index = Math.floor(Math.random() * answerPool.length);
  if (answerPool.length > 1 && answerPool[index].team === lastAnswerTeam) {
    index = (index + 1) % answerPool.length;
  }
  return answerPool[index];
}

function normalize(value) {
  return String(value).trim().toLowerCase();
}

function region(team) {
  return team.state ? `${team.state}, ${team.country}` : team.country;
}

function arrow(guessValue, answerValue, formatter = (value) => value) {
  if (guessValue === answerValue) return formatter(guessValue);
  const direction = guessValue < answerValue ? "\u2191" : "\u2193";
  return `${formatter(guessValue)} ${direction}`;
}

function closenessClass(key, guess) {
  if (key === "country") return guess.country === answer.country ? "exact" : "miss";
  if (key === "state") {
    if (guess.state && guess.state === answer.state) return "exact";
    return guess.country === answer.country ? "close" : "miss";
  }
  if (key === "district") {
    return guess.district !== "None" && guess.district === answer.district ? "exact" : "miss";
  }

  if (guess[key] === answer[key]) return "exact";

  if (key === "rookie" && Math.abs(guess.rookie - answer.rookie) <= 3) return "close";
  if (key === "rank" && Math.abs(guess.rank - answer.rank) <= 5) return "close";
  if (key === "epa" && Math.abs(guess.epa - answer.epa) <= 35) return "close";
  if (key === "win" && Math.abs(guess.win - answer.win) <= 5) return "close";

  return "miss";
}

function teamClass(guess) {
  return guess.team === answer.team ? "exact" : Math.abs(guess.team - answer.team) <= 500 ? "close" : "miss";
}

function nameClass(guess) {
  const ignoredWords = new Set(["a", "an", "and", "bot", "frc", "of", "robot", "robotics", "team", "the"]);
  const answerWords = normalize(answer.name).split(/\W+/).filter((word) => word.length > 2 && !ignoredWords.has(word));
  const guessWords = normalize(guess.name).split(/\W+/).filter((word) => word.length > 2 && !ignoredWords.has(word));
  return guess.name === answer.name
    ? "exact"
    : guessWords.some((word) => answerWords.includes(word))
      ? "close"
      : "miss";
}

function cell(content, className, detail = "") {
  const detailMarkup = detail ? `<small>${detail}</small>` : "";
  return `<div class="cell ${className}"><span>${content}${detailMarkup}</span></div>`;
}

function renderGuess(guess) {
  const row = document.createElement("div");
  row.className = "guess-grid guess-row";
  row.innerHTML = [
    cell(arrow(guess.team, answer.team), teamClass(guess)),
    cell(guess.name, nameClass(guess)),
    cell(guess.country, closenessClass("country", guess)),
    cell(guess.state || "None", closenessClass("state", guess), guess.country === answer.country && guess.state !== answer.state ? "Same country" : ""),
    cell(guess.district, closenessClass("district", guess)),
    cell(arrow(guess.rookie, answer.rookie), closenessClass("rookie", guess)),
    cell(arrow(guess.rank, answer.rank, (value) => `#${value}`), closenessClass("rank", guess)),
    cell(arrow(guess.epa, answer.epa), closenessClass("epa", guess)),
    cell(arrow(guess.win, answer.win, (value) => `${value.toFixed(1)}%`), closenessClass("win", guess))
  ].join("");
  guessesEl.prepend(row);
}

function updateStatus() {
  guessCountEl.textContent = `${guesses.length} / ${MAX_GUESSES}`;
  poolSizeEl.textContent = `${TEAMS.length} top EPA teams`;
}

function findTeam(raw) {
  const query = normalize(raw);
  const leadingNumber = query.match(/^\d+/)?.[0];
  if (leadingNumber) {
    return TEAMS.find((team) => String(team.team) === leadingNumber);
  }

  return TEAMS.find((team) => String(team.team) === query || normalize(team.name) === query)
    || TEAMS.find((team) => `${team.team} ${normalize(team.name)}`.includes(query));
}

function revealAnswer(prefix) {
  const card = document.createElement("div");
  card.className = "answer-card";
  card.textContent = `${prefix} ${answer.team} - ${answer.name} (${region(answer)}, ${answer.district}, ${answer.epa} EPA).`;
  guessesEl.before(card);
}

function submitGuess(event) {
  event.preventDefault();
  if (gameOver) return;

  const guessedTeam = findTeam(input.value);
  if (!guessedTeam) {
    messageEl.textContent = "That team is not in this starter top-EPA pool.";
    return;
  }
  if (guesses.some((guess) => guess.team === guessedTeam.team)) {
    messageEl.textContent = "You already guessed that team.";
    return;
  }

  guesses.push(guessedTeam);
  renderGuess(guessedTeam);
  input.value = "";
  updateStatus();

  if (guessedTeam.team === answer.team) {
    gameOver = true;
    resultTextEl.textContent = "Solved";
    messageEl.textContent = `You got ${answer.team} in ${guesses.length} ${guesses.length === 1 ? "guess" : "guesses"}.`;
    return;
  }

  if (guesses.length >= MAX_GUESSES) {
    gameOver = true;
    resultTextEl.textContent = "Out of guesses";
    messageEl.textContent = "So close. The answer is below.";
    revealAnswer("Answer:");
    return;
  }

  messageEl.textContent = "Guess logged. Follow the colors and arrows.";
}

function populateOptions() {
  datalist.innerHTML = TEAMS
    .map((team) => `<option value="${team.team} - ${team.name}"></option>`)
    .join("");
}

function resetGame() {
  answer = chooseAnswer();
  lastAnswerTeam = answer.team;
  guesses = [];
  gameOver = false;
  guessesEl.innerHTML = "";
  document.querySelectorAll(".answer-card").forEach((card) => card.remove());
  resultTextEl.textContent = "Find the team";
  messageEl.textContent = "Green is exact. Yellow is close or partial. Arrows point toward the answer.";
  input.value = "";
  updateStatus();
  input.focus();
}

form.addEventListener("submit", submitGuess);
newGameButton.addEventListener("click", resetGame);
populateOptions();
resetGame();

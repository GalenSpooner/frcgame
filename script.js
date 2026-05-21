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
const STATS_KEY = "botdle-stats-v1";
const LEADERBOARD_KEY = "botdle-leaderboard-v1";
const ANONYMOUS_PLAYER_KEY = "botdle-anonymous-player";
const FIRST_WIN_NAME_PROMPT_KEY = "botdle-first-win-name-prompted";
const COMPETITION_HINT_CACHE_KEY = "botdle-competition-hints-v1";
const COMPETITION_HINT_CACHE_MS = 24 * 60 * 60 * 1000;
const STATBOTICS_API = "https://api.statbotics.io/v3";
const SUPABASE_TABLE = "botdle_scores";
const SUPABASE_CONFIG = window.BOTDLE_SUPABASE || {};
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
const progressFillEl = document.querySelector("#progress-fill");
const emptyStateEl = document.querySelector("#empty-state");
const statPlayedEl = document.querySelector("#stat-played");
const statWinrateEl = document.querySelector("#stat-winrate");
const statStreakEl = document.querySelector("#stat-streak");
const statBestEl = document.querySelector("#stat-best");
const hintTitleEl = document.querySelector("#hint-title");
const hintChipsEl = document.querySelector("#hint-chips");
const sharePanelEl = document.querySelector("#share-panel");
const shareOutputEl = document.querySelector("#share-output");
const copyShareButton = document.querySelector("#copy-share");
const leaderboardTitleEl = document.querySelector("#leaderboard-title");
const leaderboardStatusEl = document.querySelector("#leaderboard-status");
const playerNameInput = document.querySelector("#player-name");
const nameDialogEl = document.querySelector("#name-dialog");
const nameDialogForm = document.querySelector("#name-dialog-form");
const nameDialogInput = document.querySelector("#name-dialog-input");
const nameDialogSkipButton = document.querySelector("#name-dialog-skip");
const leaderboardListEl = document.querySelector("#leaderboard-list");
const clearLeaderboardButton = document.querySelector("#clear-leaderboard");
const newGameButton = document.querySelector("#new-game");
const giveUpButton = document.querySelector("#give-up");
const shareButton = document.querySelector("#share-game");

let lastAnswerTeam = null;
let answer;
let guesses = [];
let gameOver = false;
let stats = loadStats();
let leaderboard = loadLeaderboard();
let competitionHintCache = loadCompetitionHintCache();
let hintRequestId = 0;

function supabaseReady() {
  return Boolean(
    SUPABASE_CONFIG.url
    && SUPABASE_CONFIG.anonKey
    && !SUPABASE_CONFIG.anonKey.includes("paste-your")
  );
}

function supabaseHeaders(extra = {}) {
  return {
    apikey: SUPABASE_CONFIG.anonKey,
    Authorization: `Bearer ${SUPABASE_CONFIG.anonKey}`,
    ...extra
  };
}

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

function regionLabel(team) {
  return team.district === "None" ? "Regional" : team.district;
}

function arrow(guessValue, answerValue, formatter = (value) => value) {
  if (guessValue === answerValue) return formatter(guessValue);
  const direction = guessValue < answerValue ? "\u2191" : "\u2193";
  return `${formatter(guessValue)} ${direction}`;
}

function rankArrow(guessRank, answerRank) {
  if (guessRank === answerRank) return `#${guessRank}`;
  const direction = guessRank < answerRank ? "\u2193" : "\u2191";
  return `#${guessRank} ${direction}`;
}

function closenessClass(key, guess) {
  if (key === "country") return guess.country === answer.country ? "exact" : "miss";
  if (key === "state") {
    if (guess.state && guess.state === answer.state) return "exact";
    return guess.country === answer.country ? "close" : "miss";
  }
  if (key === "district") {
    if (guess.district === answer.district) return "exact";
    return guess.country === answer.country ? "close" : "miss";
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

function clueClasses(guess) {
  return [
    teamClass(guess),
    nameClass(guess),
    closenessClass("country", guess),
    closenessClass("state", guess),
    closenessClass("district", guess),
    closenessClass("rookie", guess),
    closenessClass("rank", guess),
    closenessClass("epa", guess),
    closenessClass("win", guess)
  ];
}

function cell(content, className, detail = "") {
  const detailMarkup = detail ? `<small>${detail}</small>` : "";
  return `<div class="cell ${className}"><span>${content}${detailMarkup}</span></div>`;
}

function renderGuess(guess) {
  const row = document.createElement("div");
  row.className = "guess-grid guess-row";
  const classes = clueClasses(guess);
  row.innerHTML = [
    cell(arrow(guess.team, answer.team), classes[0]),
    cell(guess.name, classes[1]),
    cell(guess.country, classes[2]),
    cell(guess.state || "None", classes[3], guess.country === answer.country && guess.state !== answer.state ? "Same country" : ""),
    cell(regionLabel(guess), classes[4]),
    cell(arrow(guess.rookie, answer.rookie), classes[5]),
    cell(rankArrow(guess.rank, answer.rank), classes[6]),
    cell(arrow(guess.epa, answer.epa), classes[7]),
    cell(arrow(guess.win, answer.win, (value) => `${value.toFixed(1)}%`), classes[8])
  ].join("");
  guessesEl.prepend(row);
}

function updateStatus() {
  guessCountEl.textContent = `${guesses.length} / ${MAX_GUESSES}`;
  poolSizeEl.textContent = `${TEAMS.length} top EPA teams`;
  progressFillEl.style.width = `${(guesses.length / MAX_GUESSES) * 100}%`;
  emptyStateEl.hidden = guesses.length > 0;
}

function loadStats() {
  try {
    return {
      played: 0,
      wins: 0,
      streak: 0,
      best: null,
      ...JSON.parse(localStorage.getItem(STATS_KEY) || "{}")
    };
  } catch {
    return { played: 0, wins: 0, streak: 0, best: null };
  }
}

function loadLeaderboard() {
  try {
    return JSON.parse(localStorage.getItem(LEADERBOARD_KEY) || "[]");
  } catch {
    return [];
  }
}

function loadCompetitionHintCache() {
  try {
    return JSON.parse(localStorage.getItem(COMPETITION_HINT_CACHE_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveStats() {
  localStorage.setItem(STATS_KEY, JSON.stringify(stats));
}

function saveLeaderboard() {
  localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(leaderboard));
}

function saveCompetitionHintCache() {
  localStorage.setItem(COMPETITION_HINT_CACHE_KEY, JSON.stringify(competitionHintCache));
}

function playerName() {
  const name = explicitPlayerName() || anonymousPlayerName();
  return name.slice(0, 24);
}

function savePlayerName() {
  const name = playerNameInput.value.trim().slice(0, 24);
  if (name) {
    localStorage.setItem("botdle-player-name", name);
  } else {
    localStorage.removeItem("botdle-player-name");
  }
}

function anonymousPlayerName() {
  const storedName = localStorage.getItem(ANONYMOUS_PLAYER_KEY);
  if (storedName) return storedName;

  const suffix = Math.random().toString(36).slice(2, 6).toUpperCase();
  const name = `Anonymous ${suffix}`;
  localStorage.setItem(ANONYMOUS_PLAYER_KEY, name);
  return name;
}

function explicitPlayerName() {
  const currentName = playerNameInput.value.trim();
  const storedName = savedPlayerName();
  const name = currentName || storedName;
  return name.toLocaleLowerCase() === "anonymous" ? "" : name;
}

function savedPlayerName() {
  const storedName = localStorage.getItem("botdle-player-name") || "";
  return storedName.toLocaleLowerCase() === "anonymous" ? "" : storedName;
}

function updateStats() {
  statPlayedEl.textContent = stats.played;
  statWinrateEl.textContent = stats.played ? `${Math.round((stats.wins / stats.played) * 100)}%` : "0%";
  statStreakEl.textContent = stats.streak;
  statBestEl.textContent = stats.best ? `${stats.best}` : "-";
}

async function updateStarterHint() {
  const requestId = ++hintRequestId;
  hintTitleEl.textContent = "Last competition";
  setHintChip("Loading event...");

  try {
    const hint = await lastCompetitionHint(answer.team);
    if (requestId !== hintRequestId) return;

    if (hint) {
      setHintChip(hint.name);
      return;
    }
  } catch {
    if (requestId !== hintRequestId) return;
  }

  setHintChip("Competition unavailable");
}

function setHintChip(text) {
  hintChipsEl.textContent = "";
  const chip = document.createElement("span");
  chip.textContent = text;
  hintChipsEl.append(chip);
}

async function lastCompetitionHint(teamNumber) {
  const cachedHint = competitionHintCache[teamNumber];
  if (cachedHint && Date.now() - cachedHint.cachedAt < COMPETITION_HINT_CACHE_MS) return cachedHint;

  const matches = await fetchStatbotics(`team_matches?team=${teamNumber}&limit=25&metric=time&ascending=false`);
  const latestMatch = matches.find((match) => match.status === "Completed" && match.event);
  if (!latestMatch) return null;

  let name = latestMatch.event;
  try {
    const event = await fetchStatbotics(`event/${latestMatch.event}`);
    name = event.name || name;
  } catch {
    name = latestMatch.event;
  }

  const hint = {
    name,
    event: latestMatch.event,
    cachedAt: Date.now()
  };
  competitionHintCache[teamNumber] = hint;
  saveCompetitionHintCache();
  return hint;
}

async function fetchStatbotics(path) {
  const response = await fetch(`${STATBOTICS_API}/${path}`);
  if (!response.ok) throw new Error(`Statbotics request failed: ${response.status}`);
  return response.json();
}

function updateLeaderboard() {
  leaderboardTitleEl.textContent = supabaseReady() ? "Global leaderboard" : "Local leaderboard";
  leaderboardStatusEl.textContent = supabaseReady()
    ? "Connected to Supabase. Wins submit globally."
    : "Local scores until you add the Supabase anon key.";

  if (supabaseReady()) {
    fetchGlobalLeaderboard();
    return;
  }

  renderLeaderboard(leaderboard, "No solved games yet.");
}

function renderLeaderboard(entries, emptyText) {
  if (!entries.length) {
    leaderboardListEl.innerHTML = `<li class="leaderboard-empty">${emptyText}</li>`;
    return;
  }

  leaderboardListEl.innerHTML = entries
    .slice(0, 10)
    .map((entry, index) => `
      <li>
        <strong>#${index + 1}</strong>
        <span>${leaderboardLabel(entry)}<small>${entry.date}</small></span>
        <strong>${leaderboardScore(entry)}</strong>
      </li>
    `)
    .join("");
}

function leaderboardLabel(entry) {
  if (entry.label) return entry.label;
  const player = entry.player ? `${entry.player} · ` : "";
  return `${player}${entry.team} - ${entry.name}`;
}

function leaderboardScore(entry) {
  if (entry.score) return entry.score;
  return `${entry.guesses}/${MAX_GUESSES}`;
}

async function fetchGlobalLeaderboard() {
  try {
    const rows = await fetchGlobalWins();
    renderLeaderboard(globalWinEntries(rows), "No global wins yet.");
  } catch {
    leaderboardStatusEl.textContent = "Supabase is configured, but the global leaderboard could not load.";
    renderLeaderboard(leaderboard, "Showing local scores instead.");
  }
}

async function fetchGlobalWins() {
  const pageSize = 1000;
  let offset = 0;
  const rows = [];

  while (true) {
    const url = new URL(`${SUPABASE_CONFIG.url}/rest/v1/${SUPABASE_TABLE}`);
    url.search = new URLSearchParams({
      select: "id,player_name,created_at",
      won: "eq.true",
      order: "created_at.asc",
      limit: String(pageSize),
      offset: String(offset)
    });

    const response = await fetch(url, {
      headers: supabaseHeaders()
    });
    if (!response.ok) throw new Error(`Leaderboard fetch failed: ${response.status}`);

    const page = await response.json();
    rows.push(...page);
    if (page.length < pageSize) return rows;
    offset += pageSize;
  }
}

function globalWinEntries(rows) {
  const players = new Map();

  for (const row of rows) {
    const player = (row.player_name || "Anonymous").trim() || "Anonymous";
    const key = player.toLocaleLowerCase() === "anonymous"
      ? `anonymous-${row.id || row.created_at}`
      : player.toLocaleLowerCase();
    const existing = players.get(key);

    if (existing) {
      existing.wins += 1;
      existing.latestWin = row.created_at > existing.latestWin ? row.created_at : existing.latestWin;
    } else {
      players.set(key, {
        player,
        wins: 1,
        latestWin: row.created_at
      });
    }
  }

  return [...players.values()]
    .sort((a, b) => b.wins - a.wins || new Date(a.latestWin) - new Date(b.latestWin) || a.player.localeCompare(b.player))
    .slice(0, 10)
    .map((entry) => ({
      label: entry.player,
      score: `${entry.wins} ${entry.wins === 1 ? "win" : "wins"}`,
      date: `Latest ${new Date(entry.latestWin).toLocaleDateString(undefined, { month: "short", day: "numeric" })}`
    }));
}

async function submitGlobalScore() {
  if (!supabaseReady()) return;

  const payload = {
    player_name: playerName(),
    guesses: guesses.length,
    team_number: answer.team,
    team_name: answer.name,
    answer_rank: answer.rank,
    won: true
  };

  try {
    const response = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/${SUPABASE_TABLE}`, {
      method: "POST",
      headers: supabaseHeaders({
        "Content-Type": "application/json",
        Prefer: "return=minimal"
      }),
      body: JSON.stringify(payload)
    });
    if (!response.ok) throw new Error(`Score submit failed: ${response.status}`);
    leaderboardStatusEl.textContent = "Score submitted globally.";
    await fetchGlobalLeaderboard();
  } catch {
    leaderboardStatusEl.textContent = "Could not submit global score. Saved locally.";
  }
}

function addLeaderboardEntry() {
  leaderboard.push({
    player: playerName(),
    team: answer.team,
    name: answer.name,
    guesses: guesses.length,
    date: new Date().toLocaleDateString(undefined, { month: "short", day: "numeric" })
  });
  leaderboard.sort((a, b) => a.guesses - b.guesses || a.team - b.team);
  leaderboard = leaderboard.slice(0, 20);
  saveLeaderboard();
  updateLeaderboard();
}

async function recordResult(won) {
  stats.played += 1;
  if (won) {
    await promptForFirstWinName();
    savePlayerName();
    stats.wins += 1;
    stats.streak += 1;
    stats.best = stats.best ? Math.min(stats.best, guesses.length) : guesses.length;
    addLeaderboardEntry();
    submitGlobalScore();
  } else {
    stats.streak = 0;
  }
  saveStats();
  updateStats();
}

function shouldPromptForFirstWinName() {
  return stats.wins === 0
    && !explicitPlayerName()
    && !localStorage.getItem(FIRST_WIN_NAME_PROMPT_KEY);
}

function promptForFirstWinName() {
  if (!shouldPromptForFirstWinName() || !nameDialogEl) {
    return Promise.resolve();
  }

  localStorage.setItem(FIRST_WIN_NAME_PROMPT_KEY, "true");
  nameDialogInput.value = "";

  return new Promise((resolve) => {
    const finish = (name = "") => {
      const cleanName = name.trim().slice(0, 24);
      if (cleanName) {
        playerNameInput.value = cleanName;
        savePlayerName();
      }

      nameDialogForm.removeEventListener("submit", save);
      nameDialogSkipButton.removeEventListener("click", skip);
      nameDialogEl.removeEventListener("keydown", handleKeydown);
      nameDialogEl.hidden = true;
      resolve();
    };

    const save = (event) => {
      event.preventDefault();
      finish(nameDialogInput.value);
    };

    const skip = (event) => {
      event.preventDefault();
      finish();
    };

    const handleKeydown = (event) => {
      if (event.key === "Escape") skip(event);
    };

    nameDialogForm.addEventListener("submit", save);
    nameDialogSkipButton.addEventListener("click", skip);
    nameDialogEl.addEventListener("keydown", handleKeydown);
    nameDialogEl.hidden = false;
    nameDialogInput.focus();
  });
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
  card.innerHTML = `
    <strong>${prefix} ${answer.team} - ${answer.name}</strong>
    <span>${region(answer)} | ${regionLabel(answer)} | #${answer.rank} EPA rank | ${answer.epa} EPA | ${answer.win.toFixed(1)}% win rate</span>
  `;
  guessesEl.before(card);
}

async function finishGame(won, message) {
  gameOver = true;
  resultTextEl.textContent = won ? "Solved" : "Revealed";
  messageEl.textContent = message;
  input.disabled = true;
  giveUpButton.disabled = true;
  shareButton.disabled = false;
  emptyStateEl.hidden = true;
  renderShareOutput();
  await recordResult(won);
}

async function submitGuess(event) {
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
    revealAnswer("Solved:");
    await finishGame(true, `You got ${answer.team} in ${guesses.length} ${guesses.length === 1 ? "guess" : "guesses"}.`);
    return;
  }

  if (guesses.length >= MAX_GUESSES) {
    revealAnswer("Answer:");
    await finishGame(false, "Out of guesses. The answer is below.");
    return;
  }

  messageEl.textContent = "Guess logged. Follow the colors and arrows.";
}

async function giveUp() {
  if (gameOver) return;
  revealAnswer("Answer:");
  await finishGame(false, "Revealed. Start a new team when you are ready.");
}

function shareText() {
  const won = guesses.some((guess) => guess.team === answer.team);
  const score = won ? `${guesses.length}/${MAX_GUESSES}` : `X/${MAX_GUESSES}`;
  const squares = { exact: "\u{1F7E9}", close: "\u{1F7E8}", miss: "\u2B1B" };
  const rows = guesses
    .map((guess) => clueClasses(guess).map((className) => squares[className]).join(""))
    .join("\n");
  return `Botdle ${score}\n${rows || "No guesses"}\nAnswer: ${answer.team} - ${answer.name}`;
}

function renderShareOutput() {
  shareOutputEl.value = shareText();
  sharePanelEl.hidden = false;
}

function legacyCopy(text) {
  shareOutputEl.focus();
  shareOutputEl.select();
  return document.execCommand && document.execCommand("copy");
}

async function shareGame() {
  const text = shareText();
  renderShareOutput();
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
    } else if (!legacyCopy(text)) {
      throw new Error("Clipboard unavailable");
    }
    messageEl.textContent = "Result copied to clipboard.";
  } catch {
    messageEl.textContent = "Share text is ready below.";
  }
}

async function copyShareOutput() {
  await shareGame();
}

function clearLeaderboard() {
  leaderboard = [];
  saveLeaderboard();
  updateLeaderboard();
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
  messageEl.textContent = "Start with a team you know. Green locks a clue, yellow means close, arrows point toward the answer.";
  input.value = "";
  input.disabled = false;
  giveUpButton.disabled = false;
  shareButton.disabled = true;
  playerNameInput.value = savedPlayerName();
  sharePanelEl.hidden = true;
  shareOutputEl.value = "";
  updateStarterHint();
  updateStatus();
  updateStats();
  updateLeaderboard();
  input.focus();
}

form.addEventListener("submit", submitGuess);
newGameButton.addEventListener("click", resetGame);
giveUpButton.addEventListener("click", giveUp);
shareButton.addEventListener("click", shareGame);
copyShareButton.addEventListener("click", copyShareOutput);
clearLeaderboardButton.addEventListener("click", clearLeaderboard);
playerNameInput.addEventListener("change", savePlayerName);
populateOptions();
resetGame();
